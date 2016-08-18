import Ember from 'ember';

export default Ember.Component.extend ({
  addNewPost: false,
  actions: {
    postFormShow() {
      this.set("addNewPost", true);
    },
    save1() {
      var params = {
        title: this.get("title"),
        author: this.get("author"),
        date: this.get("date"),
        content: this.get("content"),
        image: this.get("image")
      };
      this.set("addNewPost", false);
      this.sendAction("save2", params);
    }
  }
});

$("new-post-form").find("input, textarea").val("");
