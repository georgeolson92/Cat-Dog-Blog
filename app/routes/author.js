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
      var post_deletions = author.get("posts").map(function(post) {
        return post.destroyRecord();
      });
      Ember.RSVP.all(post_deletions).then(function() {
        return author.destroyRecord();
      });
      this.transitionTo("index");
    },
    save3(params) {
      var newPost = this.store.createRecord("post", params);
      var author = params.author;
      author.get("posts").addObject(newPost);
      newPost.save().then(function() {
        return author.save();
      });
      this.transitionTo("author", params.author);
    }
  }
});
