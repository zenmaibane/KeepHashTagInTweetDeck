run();
function run() {
    let tweetTextArea = document.querySelector(".compose-content .js-compose-text");
    if (tweetTextArea == null) {
        setTimeout(run, 1500);
        return;
    }
    let hashTags = [];
    let tweetObserver = new MutationObserver(function () {
        if (tweetTextArea.disabled) {
            hashTags = [];
            let tweetedHashTags = tweetTextArea.value.match(/[ 　][#＃][Ａ-Ｚａ-ｚA-Za-z一-鿆0-9０-９ぁ-ヶｦ-ﾟー_]+/g)
            if (tweetedHashTags) {
                for (let i = 0; i < tweetedHashTags.length; i++) {
                    tweetedHashTags[i] = tweetedHashTags[i].substr(1);
                }
                hashTags = tweetedHashTags;
            }
        }
        else {
            if (hashTags.length !== 0) {
                tweetTextArea.value = " " + hashTags.join(" ");
            }
            tweetTextArea.selectionStart = 0;
            tweetTextArea.selectionEnd = 0;
            tweetTextArea.dispatchEvent(new Event('change'));
        }
    })
    tweetObserver.observe(tweetTextArea, {
        "attributes": true,
        "attributeFilter": ["disabled"]
    });
}
