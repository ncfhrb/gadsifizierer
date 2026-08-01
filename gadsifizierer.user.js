// ==UserScript==
// @name        gadsifizierer
// @version     1.0
//
// @match       http*://*/*
// @grant       none
//
// @author      ncfhrb
// @description replaces the german word "Katze" with "gadse"
// ==/UserScript==

function gadse(node) {
    for (let child of node.childNodes) {
        if (child.nodeType === Node.TEXT_NODE) {
            child.nodeValue = child.nodeValue.replace(/Katze/gi, "gadse");
        } else {
            gadse(child);
        }
    }
}

document.title = document.title.replace(/Katze/gi, "gadse");
gadse(document.body);

const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    mutation.addedNodes.forEach((node) => {
      gadse(node);
    });
  });
});

observer.observe(document.body, { childList: true, subtree: true });
