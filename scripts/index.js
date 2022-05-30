// Add the coffee to local storage with key "coffee"
let url = " https://masai-mock-api.herokuapp.com/coffee/menu";

let cartDeatils = JSON.parse(localStorage.getItem("coffee")) || [];

fetch(url)
.then(function(res){
    return res.json();
  
})
.then(function(res){
    getDetails(res)
    console.log("res ", res)
})
.catch(function(err){
    console.log(err)
})

function getDetails(res)
{  console.log(res)
  let box = document.querySelector("#menu");
  res.data.map(function(el,i){
      console.log(el.name,el.price)
      let div = document.createElement("div");
      let img= document.createElement("img");
      img.src = el.image;
      let price = document.createElement("p");
      price.innerText=el.price;
      let name = document.createElement("p");
      name.innerText = el.name;
      let btn = document.createElement("button");
      btn.innerText = "AddToBucket";
      btn.setAttribute("id","add_to_bucket")
      btn.addEventListener("click",function(){
          myFn(el);
      });
      div.append(img,name,price,btn);
      box.append(div);


  })
}
let count =0;
 function myFn(el,i)
 {   document.querySelector("#coffee_count").innerHTML=null;
    cartDeatils.push(el);
    localStorage.setItem("coffee",JSON.stringify(cartDeatils));
     count++;
     let counter = document.createElement("p");
     counter.innerText= count;
     document.querySelector("#coffee_count").append(counter)
 }
