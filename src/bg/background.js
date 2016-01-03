// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });


//example of using a message handler from the inject scripts
chrome.browserAction.onClicked.addListener(function(tab) {
    var path = chrome.extension.getURL('src/inject/inject.css');
    // No tabs or host permissions needed!
    console.log("injecting styles: "+path);
    chrome.tabs.executeScript({
        code: "var head = document.head,bodyHtml = document.body.innerHTML,link = document.createElement('link'),sw_container=\"<iframe width='200' height='150' src='https://www.youtube.com/embed/JG5OsfOuEy0?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1' frameborder='0' allowfullscreen></iframe><div class='star-wars-container'><div class='star-wars-inner'>\"+bodyHtml+\"</div></div>\";document.body.innerHTML=sw_container;document.body.className='';link.type='text/css';link.rel='stylesheet';link.href='"+path+"';head.appendChild(link);"
    });
});
