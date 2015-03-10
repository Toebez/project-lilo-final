(function myLoop (i) {          
   setTimeout(function () {   
     console.log('JAAAA!');                
     if (--i) myLoop(i);      //  decrement i and call myLoop again if i > 0
   }, 3000)
})(100);        
