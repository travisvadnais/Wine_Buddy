const Nightmare = require('nightmare');
//This package helps manage all the promises when trying to scroll to the bottom of the page
const vo = require('vo');
const nightmare = Nightmare({
  show: true
});
const fs = require('fs');

var run = function * () {
  yield nightmare.goto('https://www.vivino.com/explore?e=eJzLLbI11jNVy83MszVQy02ssDU0UUuutC0tVku2DQ12USuwNVRLT7MtSyzKTC1JzFHLTbZVy08CYtuU1OJktfKS6FhbI7Vi27QcAGMdF7U=').wait(8000);

  //Declare the current & previous heights as variables so we can compare them
  var previousHeight, currentHeight=0;
  //The height changes after a couple of seconds after scrolling to the bottom, so we won't 'bottom out' until the previous height matches the current height.  We'll keep running this fx until that occurs OR until the height reaches 100000px, because that's probably enough
  while((previousHeight !== currentHeight) && (currentHeight < 950000)) {
    previousHeight = currentHeight;
    var currentHeight = yield nightmare.evaluate(function() {
      return document.body.scrollHeight;
    });
    console.log(currentHeight);
    yield nightmare.scrollTo(currentHeight, 0)
      .wait(3000);
  }
  //Once we bottom out, start the real function.
  //NOTE: Nightmare.js will only allow you go as high as 100,000 pixels, however this returned 1225 different wines.  If we need more, we can tighten the query and run the script a few more times
  yield nightmare
    .evaluate(function() {
        //All the wines we scrape will get shoved into this array
        let wines = [];
        //This is the class for each of the wine 'cards' on Vivino I suspect this class may change periodically; but every property we pull into the objects is based on a relative DOM path - so we'll only need to update the one class name when we scrape//
        $('.explorerPageResults__explorerCard--3q6Qe').each(function(){
          wine = {};
          wine["winery"] = $(this).children().eq(1).find('span').eq(0).text();
          wine["name"] = $(this).children().eq(1).find('span').eq(1).text();
          wine["url"] = $(this).find('a').attr("href");
          wine["type"] = "white";
          wine["rating"] = $(this).children().eq(1).find('span').eq(3).text();
          wine["price"] = $(this).children().eq(1).find('span').eq(5).text();
          wine["country"] = $(this).children().eq(1).find('a').eq(2).text();
          wine["image"] = $(this).children().children().children().children().children().attr("style");
            
          //Push the wine object into the wines array
          wines.push(wine);
        })
        return wines;
    })
    //Once it's done, end the fx and log the list of wines. NOTE: Console will only log 100 in the array.
    .end()
    .then(function(wines) {
      var jsonWines = JSON.stringify(wines)
      console.log(wines);
      console.log(`Added ${wines.length} wines`)
      // db.Wine.insertMany(wines, {ordered: false, rawResult: false}, (err, docs) => {
      //     if (err) throw err
      // })   
      fs.appendFileSync('./whiteWines/0-14.json', jsonWines);
    })
};

//This will actually run the nightmare function.
vo(run)(function(err) {
  console.dir(err);
  console.log('done');
});