// Models
window.Wine = Backbone.Model.extend({
    urlRoot:"../api/wines",
    defaults:{
        "id":null,
        "name":"",
        "grapes":"",
        "country":"USA",
        "region":"California",
        "year":"",
        "description":"",
        "picture":""
    }
});

window.WineCollection = Backbone.Collection.extend({
    model:Wine,
    url:"../api/wines"
});


// Views
window.WineListView = Backbone.View.extend({

    tagName:'ul',

    initialize:function () {
        this.model.bind("reset", this.render, this);
        var self = this;
        this.model.bind("add", function (wine) {
            $(self.el).append(new WineListItemView({model:wine}).render().el);
        });
    },

    render:function (eventName) {
        _.each(this.model.models, function (wine) {
            $(this.el).append(new WineListItemView({model:wine}).render().el);
        }, this);
        return this;
    }
});

window.WineListItemView = Backbone.View.extend({

    tagName:"li",

    template:_.template($('#tpl-wine-list-item').html()),

    initialize:function () {
        this.model.bind("change", this.render, this);
        this.model.bind("destroy", this.close, this);
    },

    render:function (eventName) {
        $(this.el).html(this.template(this.model.toJSON()));
        return this;
    },

    close:function () {
        $(this.el).unbind();
        $(this.el).remove();
    }
});

window.WineView = Backbone.View.extend({

    template:_.template($('#tpl-wine-details').html()),

    initialize:function () {
        this.model.bind("change", this.render, this);
    },

    render:function (eventName) {
        $(this.el).html(this.template(this.model.toJSON()));
        return this;
    },

    events:{
        "change input":"change",
        "click .save":"saveWine",
        "click .delete":"deleteWine"
    },

    change:function (event) {
        var target = event.target;
        console.log('changing ' + target.id + ' from: ' + target.defaultValue + ' to: ' + target.value);
        // You could change your model on the spot, like this:
        // var change = {};
        // change[target.name] = target.value;
        // this.model.set(change);
    },

    saveWine:function () {
        this.model.set({
            name:$('#name').val(),
            grapes:$('#grapes').val(),
            country:$('#country').val(),
            region:$('#region').val(),
            year:$('#year').val(),
            description:$('#description').val()
        });
        if (this.model.isNew()) {
            var self = this;
            app.wineList.create(this.model, {
                success:function () {
                    app.navigate('wines/' + self.model.id, false);
                }
            });
        } else {
            this.model.save();
        }

        return false;
    },

    deleteWine:function () {
        this.model.destroy({
            success:function () {
                alert('Wine deleted successfully');
                window.history.back();
            }
        });
        return false;
    },

    close:function () {
        $(this.el).unbind();
        $(this.el).empty();
    }
});

window.HeaderView = Backbone.View.extend({

    template:_.template($('#tpl-header').html()),

    initialize:function () {
        this.render();
    },

    render:function (eventName) {
        $(this.el).html(this.template());
        return this;
    },

    events:{
        "click .new":"newWine"
    },

    newWine:function (event) {
        app.navigate("wines/new", true);
        return false;
    }
});


// Router
var AppRouter = Backbone.Router.extend({

    routes:{
        "":"list",
        "wines/new":"newWine",
        "wines/:id":"wineDetails"
    },

    initialize:function () {
        $('#header').html(new HeaderView().render().el);
    },

    list:function () {
        this.wineList = new WineCollection();
        var self = this;
        this.wineList.fetch({
            success:function () {
                self.wineListView = new WineListView({model:self.wineList});
                $('#sidebar').html(self.wineListView.render().el);
                if (self.requestedId) self.wineDetails(self.requestedId);
            }
        });
    },

    wineDetails:function (id) {
        if (this.wineList) {
            this.wine = this.wineList.get(id);
            if (this.wineView) this.wineView.close();
            this.wineView = new WineView({model:this.wine});
            $('#content').html(this.wineView.render().el);
        } else {
            this.requestedId = id;
            this.list();
        }
    },

    newWine:function () {
        if (app.wineView) app.wineView.close();
        app.wineView = new WineView({model:new Wine()});
        $('#content').html(app.wineView.render().el);
    }

});

var app = new AppRouter();
Backbone.history.start();