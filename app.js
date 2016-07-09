var request = require("request"),
  cheerio = require("cheerio"),
  url = "https://www.groupon.com/browse/phoenix?lat=33.4483&lng=-112.074&address=Phoenix&query=massage&locale=en_US"
  
request(url, function (error, response, body) {
  if (!error) {
    var $ = cheerio.load(body),
      temperature = $(".cui-merchant-name.cui-truncate").toArray();
      
    for(var i =0; i< 10; i++){
    	console.log(temperature[i]);
    }
  } else {
    console.log("We’ve encountered an error: " + error);
  }
});