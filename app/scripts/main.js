// jshint devel:true
console.log('\'Allo \'Allo!');

var router = new AppRouter();
Backbone.history.start();


var Winery = Backbone.Model.extend({ idAttribute: "id"});

var wineryCollection = Backbone.Collection.extend({
   model: Winery,
   //url: "/api/wines.json"
   url: 'http://localhost:8888/BBApiRest/app/api/wines.php'
});

var wineries = new wineryCollection();

var MainWineryView = Backbone.View.extend({
   el: $('#main-page'),
   collection: null,
   template: _.template($('#add-edit-template').html()),
   events: {
       'click .openDetail': 'openWindow'
   },
   initialize: function(wineries){
     this.collection = wineries;

     this.detail = new WineryDetail();
   },
   render: function(){
      this.$el.append(this.template({wineStores: this.collection.toJSON()}));

      return this;
   },
   openWindow: function(e){
       e.stopPropagation();
       e.preventDefault();

       var target = $(e.target);

       var id = target.data('id');
       //var id = target.attr('data-id');

       var winery = this.collection.findWhere({id: id});

       this.detail.render(winery);
   }
});

var WineryDetail = Backbone.View.extend({
    el: $('#winery-detail'),
    template: _.template($('#popup-detail').html()),
    model: null,
    events: {
      'click .accept-data': 'sendFormData'
    },
    initialize: function(){
    },
    render: function(winery){

        this.model = winery;
        this.$el.empty();
        this.$el.append(this.template({model: this.model.toJSON()}));
        this.$el.modal();

        return this;
    },
    sendFormData: function(e){
        e.preventDefault();
        e.stopPropagation();

        this.$el.modal('hide');
    }
});


wineries.fetch().done(function(response){
    var myWineryView = new MainWineryView(new Backbone.Collection(response));

    myWineryView.render();
});

