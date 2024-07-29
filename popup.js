document.getElementById('addEmote').addEventListener('click', () => {
    const name = document.getElementById('emoteName').value;
    const url = document.getElementById('emoteUrl').value;
    if (name && url) {
      chrome.storage.sync.get('customEmotes', (data) => {
        const customEmotes = data.customEmotes || {};
        customEmotes[name] = url;
        chrome.storage.sync.set({customEmotes}, () => {
          updateEmoteList();
          chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, {action: "updateEmotes"});
          });
        });
      });
    }
  });
  
  function updateEmoteList() {
    chrome.storage.sync.get('customEmotes', (data) => {
      const customEmotes = data.customEmotes || {};
      const list = document.getElementById('emoteList');
      list.innerHTML = '';
      for (const [name, url] of Object.entries(customEmotes)) {
        const div = document.createElement('div');
        div.textContent = `${name}: ${url}`;
        list.appendChild(div);
      }
    });
  }
  
  updateEmoteList();