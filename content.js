let emojiMap = {};

function updateEmojiMap() {
  chrome.storage.sync.get(['defaultEmotes', 'customEmotes'], (data) => {
    emojiMap = {...data.defaultEmotes, ...data.customEmotes};
    replaceTextWithEmoji(document.body);
  });
}

function replaceTextWithEmoji(node) {
  if (node.nodeType === Node.TEXT_NODE) {
    let replaced = false;
    for (let [text, emojiUrl] of Object.entries(emojiMap)) {
      if (node.textContent.includes(text)) {
        const span = document.createElement('span');
        span.innerHTML = node.textContent.replace(new RegExp(text, 'g'), 
          `<img src="${emojiUrl}" alt="${text}" class="twitch-emote">`)
        node.parentNode.replaceChild(span, node);
        replaced = true;
        break;
      }
    }
    return replaced;
  } else if (node.nodeType === Node.ELEMENT_NODE) {
    if (node.tagName === 'SCRIPT' || node.tagName === 'STYLE') {
      return false;
    }
    Array.from(node.childNodes).forEach(replaceTextWithEmoji);
  }
  return false;
}

function observeChanges() {
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === 'childList') {
        mutation.addedNodes.forEach(replaceTextWithEmoji);
      }
    });
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "updateEmotes") {
    updateEmojiMap();
  }
});

updateEmojiMap();
observeChanges();