import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: ['active'],

  click() {
    this.toggleProperty('active');
  },

});
