var express = require("express");
var pythonShell = require("python-shell");
var router = express.Router();
var path = require("path");
var fs = require('fs')
var JSON
path.join(__dirname, '/public')

router.get("/lyrics/:artist", function(req, res, next) {

    var options = {
        mode: 'text',
        pythonOptions: ['-u'],
        scriptPath: fs.realpathSync('.') + '/public/python_module/gen_lyric',
        args: [req.params.artist]
    };

    pythonShell.PythonShell.run('markov_lyric_generate.py', options, function(err, results) {
        if (err)
            res.send(err);
        res.send(results.toString());
    });
});

module.exports = router;