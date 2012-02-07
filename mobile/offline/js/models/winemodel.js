window.Wine = Backbone.Model.extend({
	urlRoot: "http://coenraets.org/backbone-cellar/part1/api/wines",
    dao: WineDAO
});

window.WineCollection = Backbone.Collection.extend({
	model: Wine,
	url: "http://coenraets.org/backbone-cellar/part1/api/wines",
    dao: WineDAO
});