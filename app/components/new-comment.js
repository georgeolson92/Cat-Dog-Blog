import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveComment() {
      var params = {
        userName: this.get('userName'),
        commentDate: this.get('commentDate'),
        commentText: this.get('commentText'),
        post: this.get('post')
      };
      this.sendAction('saveComment', params);
    }
  }
});
