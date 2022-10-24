

$(document).ready(function(){
    $('.image-slider').slick( {slidesToShow:2,
    slidesToScroll:2,
    infinite:true,
    arrows:true,
    autoplay: true,
    autoplaySpeed: 2000,
    draggable:false,
    prevArrow:
    `<button type='button' class='slick-prev pull-left'><i class="fa-solid fa-arrow-left"></i></ion-icon></button>`,
    nextArrow:
    `<button type='button' class='slick-next pull-right'><i class="fa-solid fa-arrow-right"></i></ion-icon></button>`,
    });
  });
  function account(){
    let user=document.getElementsById("username");
    let a= localStorage.getItem("listUserLogin")

let aparse = JSON.parse(a)
let get = aparse[0].email 
var add=document.createElement("div")
var addAccount='<span id="user1"></span>';
add.innerHTML = addAccount
var ul = document.querySelector("#headbody")
ul.append(add)
document.getElementsById("user1").innerHTML=aparse[0].email

  }