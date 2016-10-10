var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var names = [];
app.get('/search-name/:name',function (req, res) {
   var name = req.query.name;
   names.push(name);
   res.send(JSON.stringify(names));
});
var counter=0;
app.get('/counter', function (req, res) 
{
  counter = counter + 1;
  res.send(counter.toString());  
});




/*var articles = 
{
    
    'article-one' : 
    {
		title: 'Article One | Asutosh Sahoo',
		heading: 'Article One',
		date: 'Sep 27, 2016',
		content: `<p>
    				This is the content for my 1st article.
    			</p>`
    },
    'article-two' : 
    {
        title: 'Article Two | Asutosh Sahoo',
		heading: 'Article Two',
		date: 'Sep 28, 2016',
		content: `<p>
    				This is the content for my 2nd article.
    			</p>`
    },
    'article-three' : 
    {
         title: 'Article Three | Asutosh Sahoo',
		heading: 'Article Three',
		date: 'Sep 29, 2016',
		content: `<p>
    				This is the content for my 3rd article.
    			</p>`
    }
};

function createTemplate(data)
{
	var title = data.title;
	var date = data.date;
	var heading = data.heading;
	var content = data.content;

	var htmlTemplate = `
			<!DOCTYPE html>
	<html>
	    <title>
	        ${title}
	    </title>
	    <link href="/ui/style.css" rel="stylesheet" />
	    <body>
	   		<div class="container">

	    		<div>
	    			<a href="/">Home</a>
	    		</div>
	    		<hr/>		
	  		  	<h3>
	    			${heading}
	    		</h3>
	    		<div>
	    			${date}
	    		</div>
	    		<div>
	    			${content}
	    		</div>
	    	</div>
	    </body>
	</html>
	`;
	return htmlTemplate;
} */

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

/* app.get('/:articleName', function (req, res) {
    // articleName = article-one
    //articles[artickeName] --> {} contents of article one
    var articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));
}); */

app.get('/ui/style.css', function (req, res) 
{
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) 
{
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) 
{
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () 
{
  console.log(`IMAD course app listening on port ${port}!`);
});
