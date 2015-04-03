(function myLoop (i) {          
  setTimeout(function () {   
    console.log('echo!');                
    if (--i) myLoop(i);      //  decrement i and call myLoop again if i > 0
  }, 3000)
})(100);        
