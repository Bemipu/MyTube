const downloadEvent = () => {
    alert(window.location.href);
    
    $.ajax({
        type: "POST",
        url: "~/test.py",
        data: { param: text}
    }).done(function( o ) {
        // do something
    });
};
  
const onMessage = (message) => {
    switch (message.action) {
        case 'DOWNLOAD':
            downloadEvent();
            break;
        default:
            break;
    }
}
  
chrome.runtime.onMessage.addListener(onMessage);
