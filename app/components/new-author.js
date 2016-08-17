import Ember from 'ember';

export default Ember.Component.extend({
  addNewAuthor: false,
  actions: {
    authorFormShow() {
      this.set('addNewAuthor', true);
    },
    save4() {
      var params = {
        fullName: this.get('fullName'),
        positionTitle: this.get('positionTitle'),
        bio: this.get('bio'),
      };
      this.set('addNewAuthor', false);
      this.sendAction('save5', params);
    }
  }
});
