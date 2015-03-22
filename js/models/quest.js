HunterGuide.Quest = DS.Model.extend({
  title:       DS.attr('string'),
  rank:        DS.attr('string'),
  type:        DS.attr('string'),
  objective:   DS.attr('string'),
  subquest:    DS.attr('string'),
  location:    DS.attr('string'),
  monsters :   DS.attr('string'),
  reward:      DS.attr('string'),
  keyQuest:    DS.attr('boolean'),
  isCompleted: DS.attr('boolean')
});

HunterGuide.Quest.FIXTURES = [
 {
   id: 1,
   title: 'Harvest Tour: Ancestral Steppe',
   rank:  'H1',
   type:  'Gathering',
   objective: 'Survive until time expires or deliver a Paw Pass Ticket',
   subquest: '',
   location: 'Ancestral Steppe',
   monsters: 'Aptonoth, Altaroth, Jaggi, Seltas, Great Jaggi, Kecha Wacha',
   reward: '12z',
   keyQuest: false,
   isCompleted: true
 },
 {
   id: 2,
   title: 'Harvest Tour: Sunken Hollow',
   rank:  'H1',
   type:  'Gathering',
   objective: 'Survive until time expires or deliver a Paw Pass Ticket',
   subquest: '',
   location: 'Sunken Hollow',
   monsters: 'Rhenoplos, Altaroth, Konchu, Genprey, Gendrome, Kecha Wacha',
   reward: '12z',
   keyQuest: false,
   isCompleted: true
 },
 {
   id: 3,
   title: 'Local Yolk',
   rank:  'H1',
   type:  'Egg',
   objective: 'Deliver 4 Gargwa Eggs',
   subquest: 'Deliver 1 Gold Gargwa Egg',
   location: 'Ancestral Steppe',
   monsters: 'Gargwa, Jaggi, Melynx, Great Jaggi',
   reward: '1500z',
   keyQuest: false,
   isCompleted: true
 }
];
