define(["jquery", "disqus"], function($, disqus) {

  var action = [{
    identifier: "tumblr-56827131382",
    url: "http://www.youngmoney.com/posts/youngmoney/56827131382/updated-cdq-audio-dj-khaled-feat-nicki-minaj",
    title: "(Updated CDQ) (Audio) DJ Khaled Feat. Nicki Minaj, Future & Rick Ross - I Wanna Be With You"
  }, {
    identifier: "tumblr-56819897603",
    url: "http://www.youngmoney.com/posts/youngmoney/56819897603/chanel-west-coast-talks-about-rapping-and-signing"
  }, {
    identifier: "tumblr-56641684290",
    url: "http://www.youngmoney.com/posts/youngmoney/56641684290/vibe-vixen-talks-to-shanell-about-her-new-mixtape"
  }];

  $("button").click(function() {
    var i = parseInt($(this).data("action"), 10);
    disqus.set(action[i]).done(function(element) {
      element.show();
    });
  });

  disqus.set({
    shortname: "youngmoneycom",
    identifier: "tumblr-56784972773",
    url: "http://www.youngmoney.com/posts/youngmoney/56784972773/nicki-minaj-unleashes-first-surprise-for-monday",
    hide: true
    /*language = "en"*/
  });

});
