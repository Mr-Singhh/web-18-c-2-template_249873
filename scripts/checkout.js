document.querySelector("#form").addEventListener("submit",myFn);
function myFn(){
    event.preventDefault();
    let i=0;
   if(i===0){
       setTimeout(function(){
           alert("Your order is accepted")
       })
     
   }
   i++;
  
   if(i===1){
       setTimeout(function(){
           alert(" Your order is being Packed ")
       },3000);
       i++;
   }
   console.log(i)
   if(i===2){
       setTimeout(function(){
           alert("Your order is being packed ");
       },8000)
       i++;
   }
   if(i===3){
    setTimeout(function(){
        alert("Your order is out for delivery ")
    },10000)
    i++;
}
if(i===4){
    setTimeout(function(){
        alert("Order delivered")
     
    },12000)
}

}