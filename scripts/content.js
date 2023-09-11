const div = document.getElementById("btn");

div.addEventListener("click", () => {
  //chrome.runtime.sendMessage({ message: "clicked_browser_action" });
  (async () => {
    const [tab] = await chrome.tabs.query({
      active: true,
      lastFocusedWindow: true,
    });
    const response = await chrome.tabs.sendMessage(tab.id, { message: "clicked_browser_action" });
  })();
});
