function registerMessageEvent() {
  chrome.runtime.onMessage.addListener(function (
    request,
    sender,
    sendResponse
  ) {
    const header = document.getElementById("ak-jira-navigation");
    if (header) {
      header.style.display = "none";
    }

    const closeSlideBtn = document.querySelector(
      'button[aria-expanded="true"][aria-label="Sidebar navigation"]'
    );

    if (closeSlideBtn) {
      closeSlideBtn.dispatchEvent(new Event("click", { bubbles: true }));
    }

    const content_panel = document.getElementById("ak-main-content");
    if (content_panel) {
      const sprintHeader =
        content_panel.lastChild.firstChild.firstChild.firstChild;
      if (sprintHeader) {
        sprintHeader.children[0].style.display = "none";
        sprintHeader.children[1].style.display = "none";
      }
    }

    document
      .querySelector(":root")
      .style.setProperty("--topNavigationHeight", "10px");
  });
}

registerMessageEvent();
