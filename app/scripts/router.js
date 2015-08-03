/**
 * Created by RandAlThor on 8/2/15.
 */
var AppRouter = Backbone.Router.extend({

  routes: {
    "" : "home",
    "about": "about",
    "contact": "contact"
  },

  home: function(){

    console.log("I'm home!!!");
  },
  about: function(){
    console.log("I'm about")
  },
  contact: function(){
     console.log("I'm contact")
  }
});
