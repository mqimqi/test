const request = require("request");
const fs = require("fs");
const dayjs = require("dayjs");
const { exit } = require("process");

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
    fs.writeFileSync("../result/output.txt", nowTime);
    fs.writeFileSync("../result/" + nowTime + ".txt", nowTime);
    console.log('[XXXXX] message aaaaaaaaaaaaaaaaaaaa');
    console.log('[XXXXX] message bbbbbbbbbbbbbbbbbbbbbb');
    console.log('[XXXXX] ' + process.env.TARGET_DATE);
})();