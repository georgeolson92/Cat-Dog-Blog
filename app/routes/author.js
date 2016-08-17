import Ember from 'ember';

export default Ember.Route.extend ({
  model(params) {
    return this.store.findRecord("author", params.author_id);
  },
  actions: {
    destroyAuthor(author) {
      author.destroyRecord();
      this.transitionTo("index");
    }
  }
});
