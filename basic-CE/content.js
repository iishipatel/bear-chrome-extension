//alert('Grrrr....')
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    const re = new RegExp('bears','gi')
    const matches = document.documentElement.innerHTML.match(re)
    sendResponse({'count': matches.length})
})