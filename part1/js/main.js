window.Wine = Backbone.Model.extend();

window.WineCollection = Backbone.Collection.extend({
	model: Wine,
	url: "api/wines"
});

window.WineListView = Backbone.View.extend({
	el: $('#wineList'),
	initialize: function() {
		this.model.bind("reset", this.render, this); 	
	},
    render: function(eventName) {
		_.each(this.model.models, function(wine) {
            $(this.el).append(
				new WineListItemView({model: wine}).render().el);
		}, this);
		return this;
    }
});

window.WineListItemView = Backbone.View.extend({
	tagName: "li",
	template: _.template($('#wine-list-item').html()),
    render: function(eventName) {
		$(this.el).html(this.template(this.model.toJSON()));
		return this;
    }
});

window.WineView = Backbone.View.extend({
    el: $('#mainArea'),
	template: _.template($('#wine-details').html()),
    render: function(eventName) {
		$(this.el).html(this.template(this.model.toJSON()));
		return this;
    }
});

var AppRouter = Backbone.Router.extend({
	routes: {
		""			: "list",
		"wines/:id"	: "wineDetails"
	},

	list: function() {
    	this.wineList = new WineCollection();
    	this.wineListView = new WineListView({model: this.wineList});
		this.wineList.fetch();
  	},

	wineDetails: function(id) {
		this.wine = this.wineList.get(id);
   		this.wineView = new WineView({model: this.wine});
		this.wineView.render();
  	}
});

var app = new AppRouter();
Backbone.history.start();