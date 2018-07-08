const request = require('request');
const cheerio = require('cheerio');
const router = require('express').Router();

router.get("/scrape", function(req, res) {

    const url = "https://www.vivino.com/explore?e=eJzLLbI11jNVy83MszU0UMtNrLA1MVBLrrQtLVZLtg0NdlErsDVUS0-zLUssykwtScxRy022VctPAmLblNTiZLXykuhYoIpi27QcAHJ8F-Q=";
    request(url, function(error, res, body) {
        //Shoot the page into Cheerio
        if (error) return console.log(error);
        const $ = cheerio.load(body);

        $(".explorerCard__rightColumn--1ZpZ7").each(function(i, element) {
            let title = $(".navigation__menu").children().children().text();
            console.log(title);
        })
    })
})

module.exports = router;