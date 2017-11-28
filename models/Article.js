// Require mongoose orm
var mongoose = require("mongoose");
// Create Schema object constructor
var Schema = mongoose.Schema;

// Create an article schematic to define the rules of the articles beings
var ArticleSchema = new Schema({
  // Title is a required field 
  title: {
    type: String,
    required: true
  },
  // date is the published date
  date: {
    type: Date,
    required: true
  },
  // link is a required string 
  url: {
    type: String,
    required: true  }
});

// Create the Article model with the ArticleSchema
var Article = mongoose.model("Article", ArticleSchema);

// Exports the model
module.exports = Article;
