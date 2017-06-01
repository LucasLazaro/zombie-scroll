var previousScroll = 0;
var hasScrolled = 0;

window.onscroll = function(e) {
  hasScrolled += Math.abs(previousScroll - window.scrollY);
  previousScroll = window.scrollY;
  chrome.storage.sync.set({'pixelsScrolled': hasScrolled});
};
