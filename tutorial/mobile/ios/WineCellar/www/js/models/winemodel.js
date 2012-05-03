window.Wine = Backbone.Model.extend({
	urlRoot: "http://coenraets.org/backbone-cellar/part1/api/wines",
	defaults: {
		"id": null,
	    "name":  "",
	    "grapes":  "",
	    "country":  "USA",
	    "region":  "California",
	    "year":  "",
	    "description":  "",
	    "picture":  ""
	  }
});

window.WineCollection = Backbone.Collection.extend({
	model: Wine,
	url: "http://coenraets.org/backbone-cellar/part1/api/wines"
});