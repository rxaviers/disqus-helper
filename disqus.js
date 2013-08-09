define(["jquery"], function($) {
  var DISQUS, element;
  var attributes = {};
  var disqusReady = $.Deferred();
  var documentReady = $.Deferred();

  function set(_attributes) {
    attributes = $.extend(attributes, _attributes);
  }

  function validate() {
    if(typeof attributes.shortname === "undefined") {
      throw new Error("attributes.shortname undefined");
    }
    if(typeof attributes.url === "undefined") {
      throw new Error("attributes.url undefined");
    }
    if(!attributes.shortname) {
      throw new Error("invalid attributes.shortname");
    }
    if(!attributes.url) {
      throw new Error("invalid attributes.url");
    }
  }

  function init() {
    documentReady.done(function() {
      //var disqus_config disqus_developer, disqus_identifier, disqus_shortname, disqus_url;
      window.disqus_config = config;
      element = $("<div>").attr("id", "disqus_thread").appendTo("body");
      if(attributes.hide) {
        element.hide();
      }
      require(["http://" + attributes.shortname + ".disqus.com/embed.js"], function() {
        DISQUS = window.DISQUS;
        disqusReady.resolve(element);
      });
    });
    return disqusReady;
  }

  function reset() {
    var deferred = $.Deferred();
    DISQUS.reset({
      reload: true,
      config: config
    });
    deferred.resolve(element);
    return deferred;
  }

  function config() {
    $.extend(this.page, attributes);
  }

  $(document).ready(function() {
    documentReady.resolve();
  });

  return {
    set: function(attributes) {
      set(attributes);
      validate();
      if(disqusReady.state() === "pending") {
        return init();
      }
      return reset();
    }
  };
});
