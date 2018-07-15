Seeding your Database is tricky.  Some background -

The `nightmareDessert`; `nightmareRedWine`; and `nightmareWhiteWine` files all have logic for scraping the website.  The problem is, you can only scrape so much before Electron breaks - so you have to 'chunk' the scrapes. 

NOTE:  Scraping the website is NOT necessary, unless you want to get new wines.  All the data has been collected in the various sub-directories in the `webscraperlogic` directory.  The two numbers indicate the price range of the wines - e.g. `redWines > 0-10.json` indicates a list of red wines between $0 and $10.

If you DO need to scrape, follow these directions:

1. Go to Vivino.com and select the type of wine you need to scrape, as well as the price range;
2. Copy the URL (it will change depending on your selection, so you need to copy every time you update);
3. Paste over the URL in `Line 13` of the `js` file;
4. If you'd like to have the data overwrite one of the `json` files, change the file name in `Line 67` to the file name you'd like to overwrite;
5. In `Line 20`, make sure the `current height` condition is set to `<950000`

If you need to seed your local MongoDB database:

1. Using `Robo3T`, set up a `Collection` called `wines` in a schema called `wine_buddy`;
2. The schema is in the `Wine.js` file in the `models` directory;
3. Right-click on the `wines` collection and select `Insert Document`;
4. Clear everything out of this window;
5. Copy everything in the `mongo-formatted-seeder-file.json` file;
6. Paste into the `Robo3T` dialog window;
7. Validate the data w/ the button at the bottom left;
8. If it confirms the data is acceptable JSON, click `OK`

NOTE: The `mongo-formatted-seeder-file.json` file has removed all array brackets and commas between objects, SOLELY for use in the `Robo3T` dialog window for seeding.  The `seeder_file_strict_json.json` file contains all the same info, however it is formatted with array brackets for the different ranges of wines, and commas between the objects.  This may be needed later.