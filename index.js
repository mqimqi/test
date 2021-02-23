const request = require("request");
const fs = require("fs");
const dayjs = require("dayjs");

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
                //console.log(body);
                resolve(body);
            }
        })
    })
}

(async function() {
    res = await requestPromise();
    const nowTime = dayjs().format('YYYY-MM-DD HH:mm:ss.SSS');
    fs.writeFileSync("response/output.html", nowTime);
    console.log('write end');
    console.log('write yeaaaaaaaaah');
})();