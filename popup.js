//  due to csp headers, we can't use inline scripts so we have to upload the emotes to one of these fcb allowed domains and use its adress
// should be something like : https://scontent.ftun14-1.fna.fbcdn.net/v/something or fbsbx.com or cdninstagram.com or whatsapp.net or fb.com or oculuscdn.com or tenor.co or tenor.com or giphy.com

const allowedDomains = [
  "fbcdn.net",
  "facebook.com",
  "fbsbx.com",
  "cdninstagram.com",
  "whatsapp.net",
  "fb.com",
  "oculuscdn.com",
  "tenor.co",
  "tenor.com",
  "giphy.com",
];

function isAllowedUrl(url) {
  try {
    const domain = new URL(url).hostname;
    return allowedDomains.some((allowed) => domain.endsWith(allowed));
  } catch (e) {
    return false;
  }
}

document.getElementById("addEmote").addEventListener("click", () => {
  const name = document.getElementById("emoteName").value.trim();
  const url = document.getElementById("emoteUrl").value.trim();
  // const feedbackElement = document.getElementById('feedback');

  if (name && url) {
    if (isAllowedUrl(url)) {
      chrome.storage.sync.get("customEmotes", (data) => {
        const customEmotes = data.customEmotes || {};
        customEmotes[name] = url;
        chrome.storage.sync.set({ customEmotes }, () => {
          updateEmoteList();
          chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, { action: "updateEmotes" });
          });
          showFeedback("Emote added successfully!", "success");
        });
      });
    } else {
      showFeedback("Error: The URL is not from an allowed domain.", "error");
    }
  } else {
    showFeedback("Error: Please enter both name and URL.", "error");
  }
});

function showFeedback(message, type) {
  const feedbackElement = document.getElementById("feedback");
  feedbackElement.textContent = message;
  feedbackElement.className = `feedback ${type}`;
  setTimeout(() => {
    feedbackElement.textContent = "";
    feedbackElement.className = "feedback";
  }, 3000);
}

function updateEmoteList() {
  chrome.storage.sync.get("customEmotes", (data) => {
    const customEmotes = data.customEmotes || {};
    const list = document.getElementById("emoteList");
    list.innerHTML = "";
    for (const [name, url] of Object.entries(customEmotes)) {
      const div = document.createElement("div");
      div.className = "emote-item";
      div.innerHTML = `
          <span>${name}</span>
          <img src="${url}" alt="${name}" style="width: 24px; height: 24px;">
          <button class="delete-emote" data-name="${name}">Delete</button>
        `;
      list.appendChild(div);
    }
    document.querySelectorAll(".delete-emote").forEach((button) => {
      button.addEventListener("click", (event) => {
        const emoteName = event.target.getAttribute("data-name");
        deleteEmote(emoteName);
      });
    });
  });
}

// simply deletes the unwanted/buggy emote and updates the list
function deleteEmote(name) {
  chrome.storage.sync.get("customEmotes", (data) => {
    const customEmotes = data.customEmotes || {};
    delete customEmotes[name];
    chrome.storage.sync.set({ customEmotes }, () => {
      updateEmoteList();
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { action: "updateEmotes" });
      });
      showFeedback("Emote deleted successfully!", "success");
    });
  });
}

updateEmoteList();
