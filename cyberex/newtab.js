function buildPopupDom(mostVisitedURLs) {
  var popupDiv = document.getElementById('mostVisited_div');
  var ul = popupDiv.appendChild(document.createElement('ul'));

  for (var i = 0; i <6 ; i++) {
    var li = ul.appendChild(document.createElement('li'));
    var a = li.appendChild(document.createElement('a'));
    var c = mostVisitedURLs[i].url;
    var t1 = c.indexOf("//",0);
    var t2 = c.indexOf("/",t1+2);
    var b = c.substring(t1+2,t2);
    var x = c.substring(0,t2);
    a.href = x;
    var len = b.length;
    if(b.charAt(0) == 'w' && b.charAt(1) == 'w' && b.charAt(2) == 'w' && b.charAt(3) == '.')
    {
        t1 = 4;
        b = b.substring(t1,t2);
    }
    var len = b.length;
    if(b.substring(len-4,len) == ".com" || b.substring(len-4,len) == ".org")
    {
        b = b.substring(0,len-4);
    }
    if(b.substring(len-6,len) == ".ac.in" || b.substring(len-6,len) == ".co.in")
    {
        b = b.substring(0,len-6);
    }
    if(b.substring(len-3,len) == ".in" || b.substring(len-3,len) == ".lk")
    {
        b = b.substring(0,len-3);
    }
    b = "||----"+b.charAt(0).toUpperCase()+b.substr(1).toLowerCase()+"----||";
    a.appendChild(document.createTextNode(b));
  
  }
}

chrome.topSites.get(buildPopupDom);



document.addEventListener('DOMContentLoaded', function() {
    
    document.getElementById('app').addEventListener('click', function() {  //opening apps page
        chrome.tabs.update({ url: 'chrome://apps' });
    });
})

$(document).ready(function(){
  $("button").click(function(){
    alert("Hi " + $("#test").val()+",How are you?");
    //chrome.tabs.create('http://www.google.com');
  });
});



//chrome.tabs.create('http://www.google.com');

