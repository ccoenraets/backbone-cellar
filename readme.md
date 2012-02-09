# Backbone.js Wine Cellar Tutorial #

"Backbone Cellar" is a sample [Backbone.js](http://documentcloud.github.com/backbone/) application.
The application allows you to browse through a list of wines, as well as add, update, and delete wines.

"Backbone Cellar" is the application used in the four-part tutorial posted here: [part 1](http://coenraets.org/blog/2011/12/backbone-js-wine-cellar-tutorial-part-1-getting-started/), [part 2](http://coenraets.org/blog/2011/12/backbone-js-wine-cellar-tutorial-part-2-crud/), [part 3](http://coenraets.org/blog/2011/12/backbone-js-wine-cellar-tutorial-part-3-deep-linking-and-application-states/), [part 4](http://coenraets.org/blog/2012/01/backbone-js-lessons-learned-and-improved-sample-app/).

If you just want to look at the final version of the application, look in the [final](https://github.com/ccoenraets/backbone-cellar/tree/master/final) directory.

You can also follow the tutorial and build the application step by step:

- In Part 1 ([doc](http://coenraets.org/blog/2011/12/backbone-js-wine-cellar-tutorial-part-1-getting-started/) - [code](https://github.com/ccoenraets/backbone-cellar/tree/master/part1)), you define the basic infrastructure. You create a “read-only” version of the application: you’ll be able to retrieve a list of wine and get the details of each wine.
- In Part 2 ([doc](http://coenraets.org/blog/2011/12/backbone-js-wine-cellar-tutorial-part-2-crud/) - [code](https://github.com/ccoenraets/backbone-cellar/tree/master/part2)), you add the code to add, update and delete wines. You leverage Backbone’s powerful REST integration.
- In Part 3 ([doc](http://coenraets.org/blog/2011/12/backbone-js-wine-cellar-tutorial-part-3-deep-linking-and-application-states/) - [code](https://github.com/ccoenraets/backbone-cellar/tree/master/part3)), you add complete support for history management and deep linking.
- In Part 4 ([doc](http://coenraets.org/blog/2012/01/backbone-js-lessons-learned-and-improved-sample-app/) - [code](https://github.com/ccoenraets/backbone-cellar/tree/master/final)), you load templates asynchronously and implement a few best practices.

The UI is intentionally plain to keep the focus on the architecture of the application. 

## Set Up: ##

1. Create a MySQL database name "cellar".
2. Execute cellar.sql to create and populate the "wine" table:

	mysql cellar -uroot < cellar.sql

## Services: ##

The application is available with a PHP or Java services:

- The PHP services are available in the api directory of this repository. The RESTful services are implemented in PHP using the [Slim framework](http://www.slimframework.com/) (also included in the api directory).
- The Java back-end is available in [this repository](https://github.com/ccoenraets/backbone-jax-cellar). The RESTful services are implemented in Java using JAX-RS.

Your feedback is appreciated. Please post your questions and comments in the blog posts referenced above.