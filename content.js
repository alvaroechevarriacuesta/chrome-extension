// Listen for keyboard shortcuts
document.addEventListener('keydown', (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key === 'j') {
    event.preventDefault();
    chrome.runtime.sendMessage({ action: 'openPopup' });
  } else if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
    event.preventDefault();
    chrome.runtime.sendMessage({ action: 'openSidePanel' });
  }
});