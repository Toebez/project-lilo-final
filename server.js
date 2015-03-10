(function myLoop (i) {          
   setTimeout(function () {   
     console.log('JAAABBBA!');                
     if (--i) myLoop(i);      //  decrement i and call myLoop again if i > 0
   }, 3000)
})(100);        
