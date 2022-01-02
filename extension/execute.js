/**
 * sends a request to the specified url from a form. this will change the window location.
 * @param {string} path the path to send the post request to
 * @param {object} params the parameters to add to the url
 * @param {string} [method=post] the method to use on the form
 */

function post(path, params, method='post') {

    // The rest of this code assumes you are not using a library.
    // It can be made less verbose if you use one.
    const form = document.createElement('form');
    form.method = method;
    form.action = path;
  
    for (const key in params) {
        if (params.hasOwnProperty(key)) {
            const hiddenField = document.createElement('input');
            hiddenField.type = 'hidden';
            hiddenField.name = key;
            hiddenField.value = params[key];
    
            form.appendChild(hiddenField);
        }
    }
  
    document.body.appendChild(form);
    form.submit();
}
  

const downloadEvent = () => {
    alert(window.location.href);
    post('http://127.0.0.1:5000/',{target_url: window.location.href});

    // var url = "127.0.0.1:5000/";

    // var xhr = new XMLHttpRequest();
    // xhr.open("POST", url);

    // xhr.setRequestHeader("Accept", "application/json");
    // xhr.setRequestHeader("Content-Type", "application/json");

    // xhr.onreadystatechange = function () {
    // if (xhr.readyState === 4) {
    //     console.log(xhr.responseText);
    // }};

    // var data = {
    //     target_url: window.location.href,
    // };

    // xhr.send(data);

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
