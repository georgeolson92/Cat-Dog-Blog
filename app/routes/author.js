import Ember from 'ember';

export default Ember.Route.extend ({
  model(params) {
    return this.store.findRecord("author", params.author_id);
  },
  actions: {
    update(author, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key] !== undefined) {
          author.set(key, params[key]);
        }
      });
      author.save();
      this.transitionTo("author");
    },
    destroyAuthor(author) {
      author.destroyRecord();
      this.transitionTo("index");
    }
  }
});
