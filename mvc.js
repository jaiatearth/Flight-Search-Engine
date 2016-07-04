/**
 * Module dependencies.
 */

var fs = require('fs');
var express = require('express');
var exphbs  = require('express-handlebars');
var favicon = require('serve-favicon');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var path = require('path');

exports.boot = function(app) {
    bootApplication(app);
};

//App settings and middleware

function bootApplication(app) {

	app.set("env", "development");

    app.use(methodOverride());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.set("GLOBAL_val", "flight");
    app.use(express.static(__dirname + '/public'));


    app.set('views', __dirname + '/views');
    app.engine('handlebars', exphbs({defaultLayout: 'main'}));
	app.set('view engine', 'handlebars');
    //This will render handlebars
	app.get('/', function (req, res) {
    	res.render('home');
	});


    //this will render api call results

    app.get('/flight', function (req,res) {
        fs.open("data/oneway.json", "r", mode=0666, function(err, fd) {
            if(err) {
            console.log("Unable to open data/oneway.json : Make sure you run scripts/assets_json.rb"+err);
            return;
            }
            fs.read(fd, 100000, 0, "utf8", function(err, str, bytesRead) {
                if(err) {
                  console.log("Unable to read data/oneway.json : "+err);
                return;
                }
             //console.log(JSON.parse(str));
             var test = JSON.parse(str);
             res.send(test);
            });
        });
    });


    app.get('/airports', function (req,res) {
        fs.open("data/airports.json", "r", mode=0666, function(err, fd) {
            if(err) {
                return;
            }
            fs.read(fd, 100000, 0, "utf8", function(err, str, bytesRead) {
                if(err) {
                    console.log("Unable to read data/airports.json : "+err);
                    return;
                }
                //console.log(JSON.parse(str));
                var test = JSON.parse(str);
                res.send(test);
            });
        });
    });


    app.get('/twoway', function (req,res) {
        fs.open("data/twoway.json", "r", mode=0666, function(err, fd) {
            if(err) {
                return;
            }
            fs.read(fd, 100000, 0, "utf8", function(err, str, bytesRead) {
                if(err) {
                    console.log("Unable to read data/twoway.json : "+err);
                    return;
                }
                //console.log(JSON.parse(str));
                var test = JSON.parse(str);
                res.send(test);
            });

        });
    });

    app.use(favicon(__dirname + '/public/favicon.ico'));
}