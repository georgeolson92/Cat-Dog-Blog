import Ember from 'ember';

export default Ember.Route.extend ({
  model() {
    return Ember.RSVP.hash ({
      posts: this.store.findAll("post"),
      authors: this.store.findAll("author"),
      comments: this.store.findAll("comment")
    });
  }
});
