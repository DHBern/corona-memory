window.onload = (function(){
    const tweet = document.getElementById("tweet");
    const id = tweet.getAttribute("tweetID");

    twttr.widgets.createTweet(
        id, tweet,
        {
            conversation : 'none',    // or all
            cards        : 'hidden',  // or visible
            linkColor    : '#cc0000', // default is blue
            theme        : 'light'    // or dark
        })
        .then (function (el) {
            el.contentDocument.querySelector(".footer").style.display = "none";
        });
});