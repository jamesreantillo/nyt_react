// imports the Article model
var Article = require("../models/Article.js");

module.exports = function (app) {

  //Retreieve saved articles
  app.get('/api/saved', function (req, res) {
      //Find all the saved articles from db
      Article.find({}, function (err, allSavedArticles) {
          if (err) {
            console.log(err);
          } else {
            res.json(allSavedArticles);
          }
        });
    });
//Save ie. post an article to the db 
  app.post('/api/saved', function (req, res) {
//Create and Save the article input to the db
    Article.create(req.body, function(err, article) {
        if (err) {
            console.log(err);
        } else {
            console.log(article);
        }
    });
    });

// Delete a saved article
app.delete('/api/saved/:id', function (req, res) {
    Article.remove({_id: req.params.id}, function(err) {
        if (err) {
            console.log(err);
        }
    });
});


//Default route. This will redirect to index.html
app.get("*", function(req, res) {
    res.sendFile("index.html");
});

}