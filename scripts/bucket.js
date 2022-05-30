// On clicking remove button the item should be removed from DOM as well as localstorage.
let getDetails = JSON.parse(localStorage.getItem("coffee"));
console.log(getDetails)
let sumTotal = 0;
getDetails.map(function(el,i){
    sumTotal += el.price;
    console.log(sumTotal)
    let sumTotalBox = document.querySelector("#total_amount");
     sumTotalBox.innerText = sumTotal;
    let box = document.querySelector("#bucket")
    let div = document.createElement("div");
    let img= document.createElement("img");
    img.src = el.image;
    let price = document.createElement("p");
    price.innerText=el.price;
    let name = document.createElement("p");
    name.innerText = el.name;
    let btn = document.createElement("button");
    btn.innerText = "Remove";
    btn.setAttribute("id","remove_coffee")
    btn.addEventListener("click",function(){
        myFn(getDetails,i);
    });
    div.append(img,name,price,btn);
    box.append(div);
})
function myFn(x,i)
{
    
       x.splice(i,1)
        localStorage.setItem("coffee",JSON.stringify(x));
        window.location.reload();
    
}