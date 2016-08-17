import Ember from 'ember';

export default Ember.Component.extend ({
  actions: {
    delete(author) {
      if (confirm('Are you sure you want to delete this rental?')) {
        this.sendAction("destroyAuthor", author);
      }
    }
  }
});
