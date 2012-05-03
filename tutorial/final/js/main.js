Backbone.View.prototype.close = function () {
    console.log('Closing view ' + this);
    if (this.beforeClose) {
        this.beforeClose();
    }
    this.remove();
    this.unbind();
};

var AppRouter = Backbone.Router.extend({

    initialize:function () {
        $('#header').html(new HeaderView().render().el);
    },

    routes:{
        "":"list",
        "wines/new":"newWine",
        "wines/:id":"wineDetails"
    },

    list:function () {
        this.before();
    },

    wineDetails:function (id) {
        this.before(function () {
            var wine = app.wineList.get(id);
            app.showView('#content', new WineView({model:wine}));
        });
    },

    newWine:function () {
        this.before(function () {
            app.showView('#content', new WineView({model:new Wine()}));
        });
    },

    showView:function (selector, view) {
        if (this.currentView)
            this.currentView.close();
        $(selector).html(view.render().el);
        this.currentView = view;
        return view;
    },

    before:function (callback) {
        if (this.wineList) {
            if (callback) callback();
        } else {
            this.wineList = new WineCollection();
            this.wineList.fetch({success:function () {
                $('#sidebar').html(new WineListView({model:app.wineList}).render().el);
                if (callback) callback();
            }});
        }
    }

});

tpl.loadTemplates(['header', 'wine-details', 'wine-list-item'], function () {
    app = new AppRouter();
    Backbone.history.start();
});