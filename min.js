
let searchform =document.querySelector('.search-form');

document.querySelector('#search-btn').onclick= () =>{
    searchform.classList.toggle('active')
    loginform.classList.remove('active')
    navbar.classList.remove('active')
    solid.classList.remove('active')
    cartform.classList.remove('active')
}


let loginform =document.querySelector('.login-form');

document.querySelector('#login-btn').onclick= () =>{
    loginform.classList.toggle('active')
    searchform.classList.remove('active')
    navbar.classList.remove('active')
    solid.classList.remove('active')
    cartform.classList.remove('active')
}

let solidform =document.querySelector('.solid-form');

document.querySelector('#solid-btn').onclick= () =>{
   solidform.classList.toggle('active')
    searchform.classList.remove('active')
    navbar.classList.remove('active')
    loginform.classList.remove('active')
    cartform.classList.remove('active')
}

let cartform =document.querySelector('.cart-form');

document.querySelector('#cart-btn').onclick= () =>{
    cartform.classList.toggle('active')
    searchform.classList.remove('active')
    navbar.classList.remove('active')
    loginform.classList.remove('active')
    solid.classList.remove('active')

}


let navbar =document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active')
    searchform.classList.remove('active')
    loginform.classList.remove('active')
    solid.classList.remove('active')
    cartform.classList.remove('active')
}

window.onscroll= () =>{
    searchform.classList.remove('active')
    loginform.classList.remove('active')
    solidform.classList.remove('active')
    navbar.classList.remove('active')
    cartform.classList.remove('active')
}    

var swiper = new Swiper (".smart-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay:7500,
        disablaOnIteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

  var swiper = new Swiper (".brand-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay:7500,
        disablaOnIteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
});


const item =[
  {
    id:0,
    image:  'imgs\0هونر.png',
    title:'HONOR X9a',
    price:1  ,
  },
  {
    id:1,
    image:  'imgs\1هواوي.jpg',
    title:'Mobile Huawei P50 pocket gold premium',
    price:1  ,
  },
  {
    id:2,
    image:  'imgs\2نوكيا.jpg',
    title:'Nokia X30 smartphone',
    price:1  ,
  },
  {
    id:3,
    image:  'imgs\ابل ..3.jpg',
    title:'iPhone 14 Pro Max',
    price:1  ,
  },
  {
    id:4,
    image:  'imgs\ميكروفون 4.jpg',
    title:'microphone',
    price:1  ,
  },
  {
    id:5,
    image:  'imgs\5مكوا.jpg',
    title:'Small iron',
    price:1  ,
  },
  {
    id:6,
    image:  'imgs\6مكنسه.jpg',
    title:'vacuum cleaner',
    price:1  ,
  },
  {
    id:7,
    image:  'imgs\مكرويف7.jpg',
    title:'microwave',
    price:1  ,
  },
  {
    id:8,
    image:  'imgs\8مقلا هوائيه.jpg',
    title:'air fryer',
    price:1  ,
  },
  {
    id:9,
    image:  'imgs\9مروحه.jpg',
    title:'a fan',
    price:1  ,
  },
  {
    id:10,
    image:  'imgs\ماكينة تحضير 10القهوه.jpg',
    title:'Coffee making machine',
    price:1  ,
  },
  {
    id:11,
    image:  'imgs\سماعه.. 11.jpg',
    title:'headphone',
    price:1  ,
  },
  {
    id:12,
    image:  'imgs\12سماعه.jpg',
    title:'Smart headphone',
    price:1  ,
  },
  {
    id:13,
    image:  'imgs\13سامسونج.jpg',
    title:'Samsung Galaxy S23',
    price:1  ,
  },
  {
    id:14,
    image:  'imgs\14شاشه.jpg',
    title:'a screen',
    price:1  ,
  },
  {
    id:15,
    image:  'imgs\15ساعه.jpg',
    title:'Smart watch',
    price:1  ,
  },
  {
    id:16,
    image:  'imgs\16ريلمي.jpg',
    title:'Realme GT Neo 3T',
    price:1  ,
  },
  {
    id:17,
    image:  'imgs\17دراع.jpg',
    title:'PlayStation arm',
    price:1  ,
  },
  {
    id:18,
    image:  'imgs\18بوتاجاز.jpg',
    title:'Electric cooker',
    price:1  ,
  },
  {
    id:19,
    image:  'imgs\19بلاستيشن.jpg',
    title:'Play Station',
    price:1  ,
  },
  {
    id:20,
    image:  'imgs\20باور.jpg',
    title:'power bank',
    price:1  ,
  },
  {
    id:21,
    image:  'imgs\21ابوا.jpg',
    title:'Android phone Oppo Reno 8T',
    price:1  ,
  },
  {
    id:22,
    image:  'imgs\22شاومي.jpg',
    title:'Xiaomi 12 Pro 5G mobile',
    price:1  ,
  },
  {
    id:23,
    image:  'imgs\23عصاره.jpg',
    title:'Electric juicer',
    price:1  ,
  },
  {
    id:24,
    image: 'imgs\غساله24.jpg',
    title:'washing machine',
    price:1  ,
  },
  {
    id:25,
    image:'imgs\25كاميره.jpg',
    title:'camera',
    price:1  ,
  },
  {
    id:26,
    image:'imgs\26لاب توب.jpg',
    title:'laptop',
    price:1  ,
  },
  {
    id:27,
    image:'imgs\27لايت.jpg',
    title:'camera',
    price:1  ,
  },
  
]
function returnItems() {
  item.forEach(item => {
    console.log(item);
  });
  
}
returnItems()
console.log(item);


// const categories= [...new set(prooduct.map((item)=>
//   {return item}))]
//   let i=0;  
  
// document.getElementById('cart-btn').innerHTML =categories.map((item)=>{
   
//   var {image,title,price} = item;
//   return(
    
    
    
//     '')

// })






