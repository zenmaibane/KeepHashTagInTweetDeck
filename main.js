run();
function run(){
    var tweetTextArea = document.querySelector(".compose-content .js-compose-text");
    if (tweetTextArea == null) {
        setTimeout(run, 1500);
        return;
    }
    var hashTags = [];
    var tweetObserver = new MutationObserver(function () {
        if (tweetTextArea.disabled){
            hashTags = [];
            var tweetedHashTags = tweetTextArea.value.match(/[#＃][Ａ-Ｚａ-ｚA-Za-z一-鿆0-9０-９ぁ-ヶｦ-ﾟー\_]+/g)
            if (tweetedHashTags) {
                hashTags = tweetedHashTags;
            }
        }
        else {
            if (hashTags.length !== 0){
                tweetTextArea.value = " " + hashTags.join(" ");
            }
            tweetTextArea.selectionStart = 0;
            tweetTextArea.selectionEnd = 0;
        }
    })
    tweetObserver.observe(tweetTextArea, {
        "attributes":true,
        "attributeFilter":["disabled"]
    });
}
