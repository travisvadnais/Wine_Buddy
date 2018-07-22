const modalWines = [
  {
    "index": 0,
    "name": "Bartenura Moscato 2017",
    "type": "Sweet White",
    "country": "Italy",
    "price": "$11.97",
    "rating": 4.4,
    "img": "https://images.vivino.com/thumbs/QRRJTfh-TM6gCmTAyVsWSA_pl_375x500.png"
  },
  {
    "index": 1,
    "name": "Dönnhoff Riesling Niederhäuser Hermannshöhle Spätlese 2013",
    "type": "Sweet White",
    "country": "Germany",
    "price": "$39.97",
    "rating": 4.2,
    "img": "https://cdn.ct-static.com/labels/554097.jpg"
  },
  {
    "index": 2,
    "name": "Fritz Haag Brauneberger Juffer Sonnenuhr Riesling Auslese 2004",
    "type": "Sweet White",
    "country": "Germany",
    "price": "$49.99",
    "rating": 4.4,
    "img": "https://wine-searcher1.freetls.fastly.net/images/labels/02/16/fritz-haag-brauneberger-juffer-sonnenuhr-riesling-auslese-mosel-germany-10260216.jpg"
  },
  {
    "index": 3,
    "name": "Nikolaihof Vinothek Riesling 1997",
    "type": "Sweet White",
    "country": "Austria",
    "price": "$144.99",
    "rating": 4.4,
    "img": "https://images.vivino.com/thumbs/KhieDRFRRM2JM-_nV5aCqg_375x500.jpg"
  },
  {
    "index": 4,
    "name": "Lola Sonoma Coast Chardonnay 2016",
    "type": "Rich White",
    "country": "United States",
    "price": "$17.98",
    "rating": 4.4,
    "img": "https://images.vivino.com/thumbs/M_5LjrG5T-6XoYq-TouHdQ_375x500.jpg"
  },
  {
    "index": 5,
    "name": "Rombauer Vineyards Chardonnay 2016",
    "type": "Rich White",
    "country": "United States",
    "price": "$33.99",
    "rating": 4.3,
    "img": "https://images.vivino.com/thumbs/wofRa9S3T2eqYtwZlpx9IA_pl_375x500.png"
  },
  {
    "index": 6,
    "name": "HDV Chardonnay (Hyde Vineyard) 2013",
    "type": "Rich White",
    "country": "United States",
    "price": "$69.95",
    "rating": 4.5,
    "img": "https://wine-searcher1.freetls.fastly.net/images/labels/32/99/hdv-hyde-de-villaine-le-debut-hyde-vineyard-chardonnay-carneros-usa-10883299.jpg"
  },
  {
    "index": 7,
    "name": "Marcassin Marcassin Vineyard Chardonnay 2012",
    "type": "Rich White",
    "country": "United States",
    "price": "$399.99",
    "rating": 4.6,
    "img": "https://cdn3.volusion.com/ednyv.xwagu/v/vspfiles/photos/MCS2011Chard-2.jpg"
  },
  {
    "index": 8,
    "name": "Freixenet Cordón Negro Gran Seleccion",
    "type": "Sparkling White",
    "country": "Spain",
    "price": "$9.99",
    "rating": 3.6,
    "img": "https://cdn.ct-static.com/labels/1046432.jpg"
  },
  {
    "index": 9,
    "name": "Lanson Black Label Champagne Brut",
    "type": "Sparkling White",
    "country": "France",
    "price": "$36.98",
    "rating": 3.8,
    "img": "https://drinks-dvq6ncf.netdna-ssl.com//wordpress/wp-content/uploads/2016/12/Lanson-black-label.jpg"
  },
  {
    "index": 10,
    "name": "Moët & Chandon Champagne Impérial Brut",
    "type": "Sparkling White",
    "country": "France",
    "price": "$44.99",
    "rating": 4.1,
    "img": "https://cdn.ct-static.com/labels/23995.jpg"
  },
  {
    "index": 11,
    "name": "Dom Pérignon Brut Champagne",
    "type": "Sparkling White",
    "country": "France",
    "price": "$145.99",
    "rating": 4.5,
    "img": "https://www.wheelersluxurygifts.com/media/cache/sylius_gallery/dp-brut-15042387e94f7cf789efcddd8425f530.jpeg"
  },
  {
    "index": 12,
    "name": "Castello del Poggio Moscato Provincia di Pavia",
    "type": "Dessert",
    "country": "Italy",
    "price": "$11.99",
    "rating": 4.3,
    "img": "https://www.friartuckonline.com/Products/Images/876153002266/1006/CASTELLO-DEL-POGGIO-MOSCATO-PROVINCIA-DI-PAVIA_Forsyth-IL-v1.jpg"
  },
  {
    "index": 13,
    "name": "Donnafugata Ben Ryé Passito di Pantelleria 2015",
    "type": "Dessert",
    "country": "Italy",
    "price": "$34.97",
    "rating": 4.5,
    "img": "http://www.nanablu.com/197-large_default/ben-rye-edizione-limitata-2008.jpg"
  },
  {
    "index": 14,
    "name": "Toro Albalá Don PX Gran Reserva",
    "type": "Dessert",
    "country": "Spain",
    "price": "$69.99",
    "rating": 4.4,
    "img": "https://classicalwines.com/Vintages/17TAGR83750_large.jpg"
  },
  {
    "index": 15,
    "name": "Château d'Yquem Sauternes (Premier Grand Cru Classé) 2001",
    "type": "Dessert",
    "country": "France",
    "price": "$999.99",
    "rating": 4.8,
    "img": "https://wine-searcher1.freetls.fastly.net/images/labels/61/15/chateau-d-yquem-sauternes-france-10156115.jpg"
  },
  {
    "index": 16,
    "name": "Gemma di Luna Pinot Grigio 2017",
    "type": "Dry Whites",
    "country": "France",
    "price": "$12.99",
    "rating": 4.3,
    "img": "http://www.tastings.com/Product-Images/Wine/2018/4_6_2018/223492_z.jpg"
  },
  {
    "index": 17,
    "name": "Merry Edwards Sauvignon Blanc 2016",
    "type": "Dry Whites",
    "country": "United States",
    "price": "$36.58",
    "rating": 4.4,
    "img": "https://cdn.ct-static.com/labels/1058565.jpg"
  },
  {
    "index": 18,
    "name": "Rudd Sauvignon Blanc Mt. Veeder 2014",
    "type": "Dry Whites",
    "country": "United States",
    "price": "$59.99",
    "rating": 4.4,
    "img": "https://cdn.ct-static.com/labels/466533.jpg"
  },
  {
    "index": 19,
    "name": "Château Pape Clément Pessac-Léognan Blanc 2015",
    "type": "Dry Whites",
    "country": "United States",
    "price": "$149.97",
    "rating": 4.2,
    "img": "https://cdn.ct-static.com/labels/68174.jpg"
  },
  {
    "index": 20,
    "name": "The Prisoner Saldo Zinfandel 2016",
    "type": "Medium Body Reds",
    "country": "United States",
    "price": "$19.98",
    "rating": 4.2,
    "img": "https://wine-searcher1.freetls.fastly.net/images/labels/29/31/the-prisoner-wine-co-saldo-zinfandel-california-usa-10482931.jpg"
  },
  {
    "index": 21,
    "name": "Emmolo Merlot 2016",
    "type": "Medium Body Reds",
    "country": "United States",
    "price": "$39.99",
    "rating": 4.4,
    "img": "https://cdn.ct-static.com/labels/368073.jpg"
  },
  {
    "index": 22,
    "name": "Pahlmeyer Merlot 2014",
    "type": "Medium Body Reds",
    "country": "United States",
    "price": "$73.98",
    "rating": 4.5,
    "img": "https://www.pahlmeyer.com/assets/Product-Images/Pahl-2014-merlot-magnum.png"
  },
  {
    "index": 23,
    "name": "Saxum Broken Stones 2008",
    "type": "Medium Body Reds",
    "country": "United States",
    "price": "$189.99",
    "rating": 4.7,
    "img": "https://www.klwines.com/images/skus/1065611l.jpg"
  },
  {
    "index": 24,
    "name": "Treana Cabernet Sauvignon 2016",
    "type": "Full Body Reds",
    "country": "United States",
    "price": "$19.98",
    "rating": 4.4,
    "img": "https://bestbuyliquors.com/media/catalog/product/cache/1/image/1000x1000/9df78eab33525d08d6e5fb8d27136e95/t/r/treana-cabernet-sauvignon-2015.jpg"
  },
  {
    "index": 25,
    "name": "Viña Cobos Bramare Malbec Lujan de Cuyo 2014",
    "type": "Full Body Reds",
    "country": "United States",
    "price": "$34",
    "rating": 4.4,
    "img": "https://wine-searcher1.freetls.fastly.net/images/labels/99/79/vina-cobos-bramare-touza-vineyard-malbec-las-compuertas-argentina-10649979.jpg"
  },
  {
    "index": 26,
    "name": "Red Schooner Voyage 4",
    "type": "Full Body Reds",
    "country": "Argentina",
    "price": "$54.99",
    "rating": 4.4,
    "img": "https://winecountryconnection.net/wp-content/uploads/2016/10/Screen-Shot-2017-04-24-at-11.39.58-AM.png"
  },
  {
    "index": 27,
    "name": "Achaval-Ferrer Finca Altamira Malbec 2013",
    "type": "Full Body Reds",
    "country": "Argentina",
    "price": "$129.99",
    "rating": 4.4,
    "img": "https://rockinredblog.files.wordpress.com/2015/09/achaval-ferrer-finca-mirador.jpg"
  },
  {
    "index": 28,
    "name": "Orentano Pinot Noir 2012",
    "type": "Light Body Reds",
    "country": "United States",
    "price": "$19.95",
    "rating": 4.2,
    "img": "https://images.vivino.com/thumbs/__5sEWG-QcK3XcHTLp63Hg_375x500.jpg"
  },
  {
    "index": 29,
    "name": "Belle Glos Dairyman Vineyard Pinot Noir 2016",
    "type": "Light Body Reds",
    "country": "United States",
    "price": "$34.98",
    "rating": 4.5,
    "img": "https://i.ebayimg.com/images/g/qlQAAOSwh2xX~SGD/s-l300.jpg"
  },
  {
    "index": 30,
    "name": "A.P. Vin Kanzler Vineyard Pinot Noir 2013",
    "type": "Light Body Reds",
    "country": "United States",
    "price": "$55",
    "rating": 4.6,
    "img": "https://images.vivino.com/thumbs/Q5YBqVaxQSKkukz0MXgrVw_375x500.jpg"
  },
  {
    "index": 31,
    "name": "Peter Michael Le Caprice Pinot Noir 2014",
    "type": "Light Body Reds",
    "country": "United States",
    "price": "$130",
    "rating": 4.8,
    "img": "https://wine-searcher1.freetls.fastly.net/images/labels/88/68/peter-michael-le-caprice-pinot-noir-sonoma-coast-usa-10398868t.jpg"
  }
]

export default modalWines;