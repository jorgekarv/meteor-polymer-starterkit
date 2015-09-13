var polymerReady;

polymerReady = new ReactiveVar(false);

$(window).on("polymer-ready", function() {
  return polymerReady.set(true);
});

Meteor.startup(function() {
  return Tracker.autorun(function() {
    if (polymerReady.get()) {
      Router.insert({
        el: "[iron-router]"
      });
      return Router.start();
    }
  });
});
