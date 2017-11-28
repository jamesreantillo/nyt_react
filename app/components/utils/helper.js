// Include the axios package for performing HTTP requests (promise based
// alternative to request)
var axios = require("axios");

//NYT Search  API
var APIKey = "28262d0f81b84ebf8794f94a1c0487d3";

// Helper Functions
var helper = {
    // Run Query
    runQuery: function (query, startYear, endYear) {
        var thequery = query.trim();
        var thestartYear = startYear.trim() + "0101";
        var theendYear = endYear.trim() + "1231";

        return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json", 
           {
                params: {
                    "api-key": APIKey,
                    "q": thequery,
                    "begin_date": thestartYear,
                    "end_date": theendYear
                }
            })
            .then(function (results) {
                return results.data.response;
            });
    },

    // retrieves saved articles from server
   getSavedArticles: function(){
       return axios.get('/api/saved');
   },
   // adds article to database
   addArticle: function(article){
       return axios.post('/api/saved', article);
   },
   //deletes article from db
   deleteArticle: function(id){
       return axios.delete('/api/saved/'+id);
   }    

};

// export helper to use elsewhere
module.exports = helper;