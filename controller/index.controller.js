exports.getIndexPage = (req, res) => {
    const { token, level } = req.cookies
    res.render('index.html', {token, level})
}