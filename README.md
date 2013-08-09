# DISQUS Helper

*DISQUS client-side made easy.*

## Get started

In bower.json:

```javascript
"devDependencies": {
    "disqus": "rxaviers/disqus-helper#0.1.x",
    "jquery": "x.x.x"
}
```

It works with RequireJS. So, first install the dependencies. Then, update
RequireJS paths config, so it can find them.

    $ bower install

In main.js

```javascript
require.config({
    paths: {
        disqus: "bower_components/disqus/disqus",
        jquery: "bower_components/jquery/jquery"
    }
});

require(["app"]);
```

In app.js

```javascript
define(["disqus"], function(disqus) {

    disqus.set({
        shortname: "<shortname>",
        url: "<url>",
        identifier: "<identifier>"
    });

});
```

## Another a-bit-more-explanatory example

DISQUS-helper automatically loads, initializes or resets it for you. All you do
is `disqus.set`.

```javascript
/**
 * The first time `.set()` is called, DISQUS is loaded and initialized.
 *
 * Attributes `shortname` and `url` are required.
 */
disqus.set({
    shortname: "<shortname>",
    url: "<url>",
    hide: true
});

$(".tab1").click(function() {
    /**
     * Subsequent `.set()` calls reset it.
     *
     * Attributes are updated, so you don't need to pass, for example, shortname
     * again.
     *
     * It returns a $.Deferred that, when resolved, passes a jQuery element at
     * where DISQUS is loaded as parameter.
     */
    disqus.set({
        url: "<url1>"
        identifier: "<identifier1>"
    }).done(function(element) {
        element.detach().appendTo("container1");
    });
});

$(".tab2").click(function() {
    disqus.set({
        url: "<url2>"
        identifier: "<identifier2>"
    }).done(function(element) {
        element.detach().appendTo("container2");
    });
});
```

