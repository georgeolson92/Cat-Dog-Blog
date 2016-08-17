import Ember from 'ember';

var posts = [{
  title: "Quiz - Are you a cat or a dog person?",
  author: "The Quizster",
  date: "August 17th, 2016",
  content: "This will eventually hold a quiz.",
  image: "http://www.olliespetboutique.com/image/data/Blog/Articles/catsvsdogs/photo_blogstore_catsvsdogs.jpg"
}, {
  title: "How much does it cost to adopt a cat?",
  author: "Oregon Humane Society",
  date: "August 17th, 2016",
  content: "A lot of money.",
  image: "http://tenthlifecats.org/mm/images/3TBKs.jpg"
}];

export default Ember.Route.extend ({
  model() {
    return posts;
  }
});
