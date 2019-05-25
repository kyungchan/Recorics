var express = require("express");
var pythonShell = require("python-shell");
var router = express.Router();
var path = require("path");
var fs = require('fs')

path.join(__dirname, '/public')

router.get("/lyrics/:artist", function(req, res) {

    var options = {
        encoding: 'utf-8',
        scriptPath: fs.realpathSync('.') + '/public/python_module/gen_lyric',
        args: [req.params.artist]
    };
    pythonShell.PythonShell.run('markov_lyric_generate.py', options, function(err, results) {
        if (err)
            res.end(err.toString());
        lyrics = ""
        for (i in results) {
            lyrics += results[i] + '\n';
        }
        res.end(lyrics);
    });
});

router.post("/similar", function(req, res) {

    var options = {
        scriptPath: fs.realpathSync('.') + '/public/python_module/lyric_similarity',
        args: [req.body.query]
    };
    console.log(req.body.query);

    pythonShell.PythonShell.run('ngram-search-lyric.py', options, function(err, results) {
        res.writeHead(200, { 'Content-Type': 'text/html;charset=MS949' });
        if (err)
            res.end(err.toString());
        lyrics = ''
        for (i in results) {
            lyrics += results[i] + '\n';
        }
        res.end(lyrics);
    });
});


module.exports = router;