/* GET home page. */
module.exports.index = function(req, res) {
    res.render('index', { title: 'Express' });
};

/* GET . */
module.exports.do = function (req, res) {
    res.render('redir', { title: 'Redirigir aca' });
};