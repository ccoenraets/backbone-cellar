window.WineListView = Backbone.View.extend({

    initialize: function() {
        var tpl = window.templateLoader;
        this.template = _.template(tpl.get('wine-list'));
        this.model.bind("reset", this.render, this);
    },

    render: function(eventName) {
        console.log('list render');
        $(this.el).html(this.template());
        var ul = $('ul', $(this.el));
        console.log(ul);
		_.each(this.model.models, function(wine) {
           ul.append(new WineListItemView({model: wine}).render().el);
		}, this);
		return this;
    }
});

window.WineListItemView = Backbone.View.extend({

	tagName: "li",

    initialize: function() {
        var tpl = window.templateLoader;
        this.template = _.template(tpl.get('wine-list-item'));
		this.model.bind("change", this.render, this);
		this.model.bind("destroy", this.close, this);
    },

    render: function(eventName) {
		$(this.el).html(this.template(this.model.toJSON()));
		return this;
    }

});