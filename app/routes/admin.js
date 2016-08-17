import Ember from 'ember';

export default Ember.Route.extend ({
  actions: {
    save3(params) {
      var newPost = this.store.createRecord("post", params);
      newPost.save();
      this.transitionTo("index");
    },
    save6(params) {
      var newAuthor = this.store.createRecord('author', params);
      newAuthor.save();
      this.transitionTo('index');
    }
  }
});
