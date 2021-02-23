const request = require("request");
var fs = require("fs");


function requestPromise() {
    const param = {
        url: "https://www.google.com",
        method: "GET"
    }
    return new Promise((resolve, reject) => {
        request(param, function(error, response, body) {
            if (error) {
                reject("ページを取得できませんでした");
            } else {
                console.log(body);
                resolve(body);
            }
        })
    })
}

(async function() {
    res = await requestPromise();
    fs.writeFileSync("response/output.html", res);
    console.log('write end');
    console.log('write yeaaaaaaaaah');
})();