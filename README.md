##now-immediate

Package provide function, that returns timestamp in ms (like `Date.now()`).
 
But after 1st usage, on this event loop, function will return 1st answer.

Example:

    var nowIm = require('now-immediate');
    console.log('Start');
    console.log('Date.now(): '+Date.now()+'\tnowIm(): '+nowIm());
    for(var i = 0; i < 10000000; i++){
      /123/.test(i);
    }
    console.log('Finish');
    console.log('Date.now(): '+Date.now()+'\tnowIm(): '+nowIm());
    setImmediate(function(){
      console.log('Next loop');
      console.log('Date.now(): '+Date.now()+'\tnowIm(): '+nowIm());
    });
    
The result will be:

    Start
    Date.now(): 1460683017773       nowIm(): 1460683017773
    Finish
    Date.now(): 1460683019252       nowIm(): 1460683017773
    Next loop
    Date.now(): 1460683019254       nowIm(): 1460683019254
    
In some case, you may need this behaviour. Also it X16+ just faster, than `Date.now()`.