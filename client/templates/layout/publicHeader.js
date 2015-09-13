Template.publicHeader.events({
  "click [data-action=about]": function(evt) {
    return Router.go("about");
  },
  "click [data-action=signup]": function(evt) {
    return Router.go("signup");
  },
  "click [data-action=signin]": function(evt) {
    return Router.go("signin");
  },
  'click [data-action=home]': function(evt) {
        Router.go('home');
  }
});
