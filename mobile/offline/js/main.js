// Asynchronous template loader
window.templateLoader = {

    // Map of preloaded templates for the app
    templates:{},

    // Recursively pre-load all the templates for the app.
    // This implementation should be changed in a production environment. A build script should concatenate
    // all the template files in a single file.
    load:function (names, callback) {

        var self = this;

        var loadTemplate = function (index) {
            var name = names[index];
            console.log('loading template: ' + name);
            $.get('tpl/' + name + '.html', function (data) {
                self.templates[name] = data;
                index++;
                if (index < names.length) {
                    loadTemplate(index);
                } else {
                    callback();
                }
            }, 'text');
        };

        loadTemplate(0);
    },

    // Get template by name from map of preloaded templates
    get:function (name) {
        return this.templates[name];
    }

};

window.WineDAO = function (db) {
    this.db = db;
};

_.extend(window.WineDAO.prototype, {

    findAll:function (callback) {
        this.db.transaction(
            function (tx) {
                var sql = "SELECT * FROM wine ORDER BY name";
                tx.executeSql(sql, [], function (tx, results) {
                    var len = results.rows.length;
                    var wines = [];
                    for (var i = 0; i < len; i++) {
                        wines[i] = results.rows.item(i);
                    }
                    callback(wines);
                });
            },
            function (tx, error) {
                alert("Transaction Error: " + error);
            }
        );
    },

    create:function (model, callback) {
//        TODO: Implement
    },

    update:function (model, callback) {
//        TODO: Implement
    },

    destroy:function (model, callback) {
//        TODO: Implement
    },

    find:function (model, callback) {
//        TODO: Implement
    },

//  Populate Wine table with sample data
    populate:function (callback) {
        this.db.transaction(
            function (tx) {
                console.log('Dropping WINE table');
                tx.executeSql('DROP TABLE IF EXISTS wine');
                var sql =
                    "CREATE TABLE IF NOT EXISTS wine ( " +
                        "id INTEGER PRIMARY KEY AUTOINCREMENT, " +
                        "name VARCHAR(50), " +
                        "year VARCHAR(50), " +
                        "grapes VARCHAR(50), " +
                        "country VARCHAR(50), " +
                        "region VARCHAR(50), " +
                        "description TEXT, " +
                        "picture VARCHAR(200))";
                console.log('Creating WINE table');
                tx.executeSql(sql);
                console.log('Inserting wines');
                tx.executeSql("INSERT INTO wine VALUES (1,'CHATEAU DE SAINT COSME','2009','Grenache / Syrah','France','Southern Rhone / Gigondas','The aromas of fruit and spice give one a hint of the light drinkability of this lovely wine, which makes an excellent complement to fish dishes.','saint_cosme.jpg')");
                tx.executeSql("INSERT INTO wine VALUES (2,'LAN RIOJA CRIANZA','2006','Tempranillo','Spain','Rioja','A resurgence of interest in boutique vineyards has opened the door for this excellent foray into the dessert wine market. Light and bouncy, with a hint of black truffle, this wine will not fail to tickle the taste buds.','lan_rioja.jpg')");
                tx.executeSql("INSERT INTO wine VALUES (3,'MARGERUM SYBARITE','2010','Sauvignon Blanc','USA','California Central Cosat','The cache of a fine Cabernet in ones wine cellar can now be replaced with a childishly playful wine bubbling over with tempting tastes of black cherry and licorice. This is a taste sure to transport you back in time.','margerum.jpg')");
                tx.executeSql("INSERT INTO wine VALUES (4,'OWEN ROE \"EX UMBRIS\"','2009','Syrah','USA','Washington','A one-two punch of black pepper and jalapeno will send your senses reeling, as the orange essence snaps you back to reality. Do not miss this award-winning taste sensation.','ex_umbris.jpg')");
                tx.executeSql("INSERT INTO wine VALUES (5,'REX HILL','2009','Pinot Noir','USA','Oregon','One cannot doubt that this will be the wine served at the Hollywood award shows, because it has undeniable star power. Be the first to catch the debut that everyone will be talking about tomorrow.','rex_hill.jpg')");
                tx.executeSql("INSERT INTO wine VALUES (6,'VITICCIO CLASSICO RISERVA','2007','Sangiovese Merlot','Italy','Tuscany','Though soft and rounded in texture, the body of this wine is full and rich and oh-so-appealing. This delivery is even more impressive when one takes note of the tender tannins that leave the taste buds wholly satisfied.','viticcio.jpg')");
                tx.executeSql("INSERT INTO wine VALUES (7,'CHATEAU LE DOYENNE','2005','Merlot','France','Bordeaux','Though dense and chewy, this wine does not overpower with its finely balanced depth and structure. It is a truly luxurious experience for the senses.','le_doyenne.jpg')");
                tx.executeSql("INSERT INTO wine VALUES (8,'DOMAINE DU BOUSCAT','2009','Merlot','France','Bordeaux','The light golden color of this wine belies the bright flavor it holds. A true summer wine, it begs for a picnic lunch in a sun-soaked vineyard.','bouscat.jpg')");
                tx.executeSql("INSERT INTO wine VALUES (9,'BLOCK NINE','2009','Pinot Noir','USA','California','With hints of ginger and spice, this wine makes an excellent complement to light appetizer and dessert fare for a holiday gathering.','block_nine.jpg')");
                tx.executeSql("INSERT INTO wine VALUES (10,'DOMAINE SERENE','2007','Pinot Noir','USA','Oregon','Though subtle in its complexities, this wine is sure to please a wide range of enthusiasts. Notes of pomegranate will delight as the nutty finish completes the picture of a fine sipping experience.','domaine_serene.jpg')");
                tx.executeSql("INSERT INTO wine VALUES (11,'BODEGA LURTON','2011','Pinot Gris','Argentina','Mendoza','Solid notes of black currant blended with a light citrus make this wine an easy pour for varied palates.','bodega_lurton.jpg')");
                tx.executeSql("INSERT INTO wine VALUES (12,'LES MORIZOTTES','2009','Chardonnay','France','Burgundy','Breaking the mold of the classics, this offering will surprise and undoubtedly get tongues wagging with the hints of coffee and tobacco in perfect alignment with more traditional notes. Breaking the mold of the classics, this offering will surprise and undoubtedly get tongues wagging with the hints of coffee and tobacco in perfect alignment with more traditional notes. Sure to please the late-night crowd with the slight jolt of adrenaline it brings.','morizottes.jpg')");
            },
            function (tx, error) {
                alert('Transaction error ' + error);
            },
            function (tx) {
                callback();
            }
        );
    }
});

window.AppRouter = Backbone.Router.extend({

    routes:{
        "":"list",
        "wines/:id":"wineDetails"
    },

    list:function () {
        console.log("route: list ");
        var self = this;
        this.before(function () {
            self.showView(new WineListView({model:self.wineList}));
        });
    },

    wineDetails:function (id) {
        console.log('details');
        var self = this;
        this.before(function () {
            console.log('callback@@@@@');
            var wine = self.wineList.get(id);
            self.showView(new WineView({model:wine}));
        });
    },

    showView:function (view) {
        console.log('showView: ' + view);
        if (this.currentView)
            this.currentView.close();
        $('body').html(view.render().el);
        this.currentView = view;
        return view;
    },

    before:function (callback) {
        if (this.wineList) {
            callback();
        } else {
            this.wineList = new WineCollection();
            this.wineList.fetch({success:function () {
                callback();
            }});
        }
    }

});

window.startApp = function () {
    var self = this;
    console.log('open database');
    window.db = window.openDatabase("WineCellar", "1.0", "WineCellar Demo DB", 200000);
    var wineDAO = new WineDAO(self.db);
    wineDAO.populate(function () {
        this.templateLoader.load(['wine-list', 'wine-details', 'wine-list-item'], function () {
            self.app = new AppRouter();
            Backbone.history.start();
        });
    })
}

Backbone.View.prototype.close = function () {
    console.log('Closing view ' + this);
    if (this.beforeClose) {
        this.beforeClose();
    }
    this.remove();
    this.unbind();
};

Backbone.sync = function (method, model, options) {

    var dao = new model.dao(window.db);

    switch (method) {
        case "read":
            if (model.id)
                dao.find(model, function (data) {
                    options.success(data);
                });
            else
                dao.findAll(function (data) {
                    options.success(data);
                });
            break;
        case "create":
            dao.create(model, function (data) {
                options.success(data);
            });
            break;
        case "update":
            dao.update(model, function (data) {
                options.success(data);
            });
            break;
        case "delete":
            dao.destroy(model, function (data) {
                options.success(data);
            });
            break;
    }

};