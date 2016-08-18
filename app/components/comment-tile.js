import Ember from 'ember';

export default Ember.Component.extend ({
  actions: {
    updateComment(comment, params) {
      this.sendAction("updateComment", comment, params);
    },
    delete(comment) {
      if (confirm('Are you sure you want to delete this comment?')) {
        this.sendAction('destroyComment', comment);
      }
    }
  }
});
