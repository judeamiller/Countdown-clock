let countdown;

function timer(seconds) {
   const now = Date.now();
   const then = now + seconds * 1000;
   
   countdown = setInterval( ()=>  {
       const secondsLeft = Math.round(( then - Date.now()) / 1000);
       // check if should stop
       if(secondsLeft <=0) {
        clearInterval(countdown);   
        return;
       }
       
       // display the results
       console.log(secondsLeft);
   }, 1000);

}