/**
 * sends a request to the specified url from a form. this will change the window location.
 * @param {string} path the path to send the post request to
 * @param {object} params the parameters to add to the url
 * @param {string} [method=post] the method to use on the form
 */

function post(path, params, method = 'post') {
    const formData = new FormData();
    for (const key in params) {
        if (params.hasOwnProperty(key)) {
            formData.append(key, params[key]);
        }
    }
  
    return fetch(path, {
        method: method,
        body: formData
    });
}

const downloadEvent = (url) => {
    post('http://127.0.0.1:5000/',{target_url: url});
};
  
const onMessage = (message) => {
    switch (message.action) {
        case 'DOWNLOAD':
            downloadEvent(message.url);
            break;
        default:
            break;
    }
}

chrome.runtime.onMessage.addListener(onMessage);
