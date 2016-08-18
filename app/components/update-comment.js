import Ember from 'ember';

export default Ember.Component.extend ({
  updateCommentForm: false,
  actions: {
    updateCommentForm() {
      this.set("updateCommentForm", true);
    },
    updateComment(comment) {
      var params = {
        userName: this.get("userName"),
        commentDate: this.get("commentDate"),
        commentText: this.get("commentText")
      };
      this.set("updateCommentForm", false);
      this.sendAction("updateComment", comment, params);
    }
  }
});
