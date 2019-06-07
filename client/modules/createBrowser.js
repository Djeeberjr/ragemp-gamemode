mp.events.add("browserLoadingFailed", (browser) => {
	// If the browser failed to load then reenable the default chat
	// and display a error message to the chat.
	mp.gui.chat.push("[ERROR] The GUI faild to load");
});

mp.events.add("browserDomReady",(browser)=>{
	mp.gui.chat.show(false);
	//Mark as it chat
	cefBrowser.markAsChat();
});

// Create new browser
const cefBrowser = mp.browsers.new("package://dist/index.html");

module.exports = cefBrowser;
