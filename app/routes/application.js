import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('monster');

    // [{
    //   name: 'Sparkachu',
    //   level: 3
    // }, {
    //   name: 'Charember',
    //   level: 29
    // }, {
    //   name: 'Rhauk',
    //   level: 5
    // }, {
    //   name: 'Poddle',
    //   level: 9
    // }]
    // [
    //   2, 3, 6, 9
    // ]
    // {
    //   sentence: 'This is our Model',
    //   sentence2: 'This is our sentence2'
    // }
  }
});
