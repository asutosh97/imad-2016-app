//  Counter code
var button = document.getElementById('counter');
var counter = 0;

button.onclick = function(){
    
    //  Make a request object
    var request = new XMLHttpRequest();
    //  Capture the response and store it in a variable
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE)
        {
            //  take some action
            if(request.status === 200){
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
    }
    //  Make the request
    request.open('GET','http://asutosh97.imad.hasura-app.io/counter',true);
    request.send(null);
};


//  Submit Name

var list = document.getElementById('list');
var submit = document.getElementById('submit-button')
submit.onclick = function()
{
  
  var names = ['name1','name2','name3','name4'];
  var data = '';
  for(var i = 0;i < names.length ; i++)
  {
      data += '<li>' + names[i] + '</li>';
  }
  list.innerHTML = data;
};