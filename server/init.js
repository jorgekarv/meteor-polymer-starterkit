Meteor.startup(function() {
  return Inject.rawModHtml('addUnresolved', function(html) {
    return html = html.replace('<body>', '<body unresolved class="fullbleed layout vertical"><span id="browser-sync-binding"></span>');

  });
});
