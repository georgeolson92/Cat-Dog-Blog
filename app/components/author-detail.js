import Ember from 'ember';

export default Ember.Component.extend ({
  actions: {
    update(author, params) {
      this.sendAction("update", author, params);
    },
    delete(author) {
      if (confirm('Are you sure you want to delete this author?')) {
        this.sendAction("destroyAuthor", author);
      }
    }
  }
});
