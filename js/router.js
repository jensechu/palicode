HunterGuide.Router.map(function() {
  this.resource('all-quests', { path: '/' });
  this.resource('rank-quests', { path: '/:rank_id' });
});

HunterGuide.AllQuestsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('rank');
  }
});

HunterGuide.RankQuestsRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('rank', params.rank_id);
  }
});
