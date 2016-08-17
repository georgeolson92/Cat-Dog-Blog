import Ember from 'ember';

export default Ember.Route.extend ({
  actions: {
    save6(params) {
      var newAuthor = this.store.createRecord('author', params);
      newAuthor.save();
      this.transitionTo('index');
    }
  }
});
