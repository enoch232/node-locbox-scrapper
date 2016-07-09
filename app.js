var request = require("request");
var cheerio = require("cheerio");
var url = "https://www.groupon.com/browse/phoenix?lat=33.4483&lng=-112.074&address=Phoenix&query=yoga&locale=en_US";
request(url, function (error, response, body) {
  if (!error) {
    var $ = cheerio.load(body);
    var business_names = $(".cui-merchant-name.cui-truncate").toArray();
    var count = $(".cui-details-container").toArray().length;
    console.log("There are " + count);
    for(var i =0; i< count; i++){
    	if (business_names[i] && business_names[i].children[0]){
    		console.log(business_names[i].children[0].data);
    	}
    }
    var business_websites = $(".cui-content").toArray();
    for(var i = 0; i< count; i++){
    	if (business_websites[i].children[1] && business_websites[i]){
    		console.log(business_websites[i].children[1].attribs.href);
    	}
    }



  } else {
    console.log("We’ve encountered an error: " + error);
  }
});