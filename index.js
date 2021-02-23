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
    const nowTime = dayjs().format('HHmmssSSS');
    fs.writeFileSync("response/output.html", nowTime);
    fs.writeFileSync("response/" + nowTime + ".txt", nowTime);
    console.log('write end');
})();