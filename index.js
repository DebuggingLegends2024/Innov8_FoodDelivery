 let loader = document.querySelector(".loadPage");
 let container = document.querySelector(".container");
 let cards = document.querySelectorAll(".card");
 cards.forEach(function(card){
   card.addEventListener("click", function(){
      console.log(card);
      document.querySelector("body").innerHTML="";
      let div = document.createElement("div");
      div.classList.add("foodDetail");
      div.innerHTML=`
      <img src=${card.firstElementChild.src} alt="">
        <div class="detailText">
            <h1>Foods You Like</h1>
            <h2>Upto 40% OFF</h2>
            <p>Pay on delivery might be available</p>
            <button>Buy Now</button>
            <button>Add To Cart</button>
            <a href="">Back</a>
        </div>`
      document.querySelector("body").appendChild(div)
   })
 })
//  loading effect
 container.style.display="none";
   setInterval(function(){
      container.style.display="block";
         loader.style.display="none"
      },2000)
let reviewCard = document.querySelectorAll(".reviewCard");
let count = 0;
reviewCard.forEach(function(card, index){
    card.style.left=`${index*100}%`
})
function myFun(){
    reviewCard.forEach(function(curCard){
        curCard.style.transform=`translateX(-${count * 100}%)`
    })
}
setInterval(function(){
    count++;
    if(count == reviewCard.length ){
        count=0;
    }
    myFun();
}, 3000)
foodCard.forEach(function(food){
    food.addEventListener("click", function(){
        console.log(food);
        div.innerHTML=``
       document.getElementById("icon").addEventListener("click", function()
	   {
        div.remove()
       })
    })
})

 