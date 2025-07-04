 document.getElementById("testButton").addEventListener("click", sayHello);

async function sayHello(params) {
    let [tab] = await chrome.tabs.query({active:true});
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        func: ()=> {
            alert('hello')
        }
    })
}

