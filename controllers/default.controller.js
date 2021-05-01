module.exports = {
    index: (req, res) => {
        const pageTitle = "Home";
        res.render("index", {pageTitle});
    }
}