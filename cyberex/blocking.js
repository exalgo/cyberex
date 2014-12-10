/*chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
        var tablink = tab[0].url;
        var len = blocked.length;
        for(var i = 0;i < len; i++)
        {
          if(blocked[i] == tablink)
          {
             chrome.tabs.update({url: "show.html"});
            alert("blocked site ,cant acess");
            
            break;
          }

          
        }

      


    });
   
        
         
    },
    
    {
        urls: [
 //          "*://*erase/*" 
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

*/

function lol(e)
{
//tesing part start

alert("lol");
 chrome.tabs.create({url: "options.html"});
    //window.close(); // 

storage.get('test', function(content){

   alert("test read content " + content.test);
});

//testing part end


}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('testing').addEventListener('click', lol);
});
