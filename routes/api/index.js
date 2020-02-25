const path = require("path");
const router = require("express").Router();
const booksRoutes = require("./books");
const googleRoutes = require("./google");

// Books routes match /api/books
router.use("/books", booksRoutes);

// Google Routes match /api/books
router.use("/google", googleRoutes);

// For anything else, render the html page
router.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;