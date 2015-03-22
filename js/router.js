HunterGuide.Router.map(function() {
  this.resource('quests', { path: '/' });
});

HunterGuide.QuestsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('quest');
  }
});
