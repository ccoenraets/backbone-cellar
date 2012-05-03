window.WineView = Backbone.View.extend({

    initialize: function() {
        var tpl = window.templateLoader;
        this.template = _.template(tpl.get('wine-details'));
		this.model.bind("change", this.render, this);
    },

    render: function(eventName) {
        console.log('render');
		$(this.el).html(this.template(this.model.toJSON()));
		return this;
    }

});