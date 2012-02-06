Backbone.View.prototype.close = function () {
    console.log('Closing view ' + this);
    if (this.beforeClose) {
        this.beforeClose();
    }
    this.remove();
    this.unbind();
};

var AppRouter = Backbone.Router.extend({

	routes: {
		""			: "list",
		"wines/:id"	: "wineDetails"
	},

	list: function() {
        this.before(function() {
            app.showView( new WineListView({model: app.wineList}) );
        });
  	},

	wineDetails: function(id) {
        this.before(function() {
			var wine = app.wineList.get(id);
		    app.showView( new WineView({model: wine}) );
        });
  	},

    showView: function(view) {
        if (this.currentView)
            this.currentView.close();
        $('body').html(view.render().el);
        this.currentView = view;
        return view;
    },

    before: function(callback) {
        if (this.wineList) {
            callback();
        } else {
            this.wineList = new WineCollection();
       		this.wineList.fetch({success: function() {
               callback();
            }});
        }
    }


});

function startApp() {
    tpl.loadTemplates(['wine-list', 'wine-details', 'wine-list-item'], function() {
        app = new AppRouter();
        Backbone.history.start();
    });
}