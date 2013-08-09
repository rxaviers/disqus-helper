## DISQUS Helper

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
    }).done(function(element) {
        element.appendTo("body");
    });

});
```

