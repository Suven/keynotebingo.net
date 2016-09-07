import Ember from 'ember';

export default Ember.Component.extend({
  i: 0,

  shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }

    return array;
  },

  random: Ember.computed('words', 'i', function () {
    return this.shuffleArray(this.get('words').toArray()).slice(0, 25);
  }),

  actions: {

    randomize() {
      this.incrementProperty('i');
    },

  },

});
