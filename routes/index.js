const path = require('path');
const router = require('express').Router();
const apiRoutes = require("./api");

//API Routes
//This will tell the router where the routes are
router.use("/api", apiRoutes);

//Display the index page if no API routes are hit
router.use((req, res) => {
    res.sendfile(path.join(__dirname, "../wine_buddy/public/index.html"))
});

module.exports = router;