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