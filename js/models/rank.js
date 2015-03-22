HunterGuide.Rank = DS.Model.extend({
  name: DS.attr('string'),
  quests: DS.hasMany('quest', { async: true })
});

HunterGuide.Rank.FIXTURES = [
 {
   id: 1,
   name: 'H1',
   quests: [1,2,3]
 },
 {
   id: 2,
   name: 'H2',
   quests: [4]
 }
];
