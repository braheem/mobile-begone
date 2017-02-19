/*
	add listener to detect navigation to a URL that contains 
	either "//m." OR "www.m." OR "//mobile.", and replace the URL string accordingly
	to prevent loading of mobile sites.
*/
chrome.webNavigation.onBeforeNavigate.addListener((details) => {
   if(details.url.match(/\/\/m\.|www\.m\.|\/\/mobile\./) !== null) {
		var fixedUrl = details.url.replace('//m.', '//').replace('www.m.', 'www.').replace('//mobile.', '//');
        chrome.tabs.update(details.tabId, {
            url: fixedUrl
        });
    }
});