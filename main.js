let db = [
  {
      name: 'Кава',
      code: 7888765,
  },
  {
      name: 'Лате',
      code: 4533333,
  },
  {
      name: 'Капучіно',
      code: 1423243,
  },
  {
      name: 'Aмерикано',
      code: 76787876,
  }
]
let a;
let x;

function CoffeMachine(power){
  this.waterAmount = 0;
     
  const WATER_HEAT_CAPACITY = 4200;
    
  let getBoilTime = function(){
    console.log(Math.ceil((this.waterAmount*WATER_HEAT_CAPACITY*80 / power)/1000));
    return this.waterAmount*WATER_HEAT_CAPACITY*80 / power; 
    }.bind(this);
    this.ready = function(){
      $('.timer__p').css('display','flex');
      timer__p.innerText = 'В процесі';
      $('.boilText').css('display','none');
      $('.boilAnim').css('display','none');
      $('.steam').css('animation','rise-steam 4s 5s');
      $('.handle').css('animation','spin 6s');
      $('.coffee').css('animation','pour 5s 4s');
      containerHeight-=20;
      waterContainer__bgc.style.height = containerHeight + '%';
      if(!checkMilk){
        
      }else{
        containerMilkHeight-=20;
        MilkContainer__bgc.style.height = containerMilkHeight + '%';
      }
      if(!checkSugar){

      }else{
        $('.coffee-drop').css('animation','drop 3s 6.1s');
      }
      setTimeout(function(){
        timer__p.innerText = 'Смачного!';
      },8300)
    }

    this.start = function(){
        $('.timer__p').css('display','flex');
        timer__p.innerText = 'Добрий день 👋';
        $('.timer').css('display','flex');
    }

    this.filter = function(){
      for(i=0;i<db.length;i++){
        $('.swiper-wrapper').append(`
        <div class="swiper-slide" id="c${db[i].code}">${db[i].name}</div>
        `)
      }
      $('.timer__p').css('display','none');
      $('.swiper').css('display', 'flex');
  }

  this.additives = function(type){
  if(type == 'Cofee'){
    $('.row').css('display','flex');
    $('.cream').css('display','none');
    $('.alko').css('display','none');
  }else if(type == 'Late'){
    $('.row').css('display','flex');
    $('.milk').css('display','none');
    $('.cream').css('display','none');
    $('.alko').css('display','none');
  }else if(type == 'Kapuchino'){
    $('.row').css('display','flex');
    $('.milk').css('display','none');
    $('.alko').css('display','none');
 }else if(type == 'Amerikano'){
    $('.row').css('display','flex');
    $('.cream').css('display','none');
    $('.sugar').css('display','none');
 }
  $('.swiper').css('display','none');
  setTimeout(function(){
    machine1.run()
  },5000)
}
  
this.turnOff = function(){
  $('.timer').css('display','none')
  $('.boilText').css('display','none')
  $('.boilAnim').css('display','none')
  $('.timer__p').css('display','none')
  $('.swiper').css('display','none')
  $('.row').css('display','none')
  $('.timer').css('flex-direction','row')
  checkMilk = false;
  checkSugar = false;
  checkCream = false;
  checkAlko = false;
  $('.row').css('background-color','inherit')
  $('.steam').css('animation','none')
  $('.handle').css('animation','none')
  $('.coffee').css('animation','none')
  $('.coffee-drop').css('animation','none')
  clearInterval(a)
  clearTimeout(x)
}

this.run = function(){
  $('.boilText').css('display','flex');
  $('.boilAnim').css('display','flex');
  $('.timer').css('flex-direction','column');
  $('.row').css('display','none');
  let time = Math.ceil((this.waterAmount*WATER_HEAT_CAPACITY*80 / power)/1000);
  boilText.innerText = "Кип'ятніння - 6";
  a = setInterval(function(){
  time-=1;
  boilText.innerText = `Кип'ятніння - ${time}`;
   if(time<1){
     clearInterval(a);
     machine1.ready();
   }
  },1000); 
}
this.stop = function(){
  console.log('stopped');
  clearTimeout(x)   ;   
  }
}

let machine1 = new CoffeMachine(13000);
machine1.waterAmount = 200;
console.log(machine1);

let containerHeight = 0;
lowerBtnWater.onclick = function(){
    if(containerHeight==80){
    }else{
        containerHeight+=20;
    }
    waterContainer__bgc.style.height = containerHeight + '%';
}

let containerMilkHeight = 0;

lowerBtnMilk.onclick = function(){
  if(containerMilkHeight==80){
  }else{
    containerMilkHeight+=20;
  }
  MilkContainer__bgc.style.height = containerMilkHeight + '%';
}

let btnCheck = false

$('.upperBtn').mouseenter(function(){
    $('.upperBtn').css('background-image', 'url("img/power.png")');
})

$('.upperBtn').click(function(){
  if(!btnCheck){
    $('.upperBtn').css('background-image', 'url("img/power.png")');
    btnCheck = true;
    machine1.start();
    setTimeout(function(){
      machine1.filter();
    },2000)
  }else{
    $('.upperBtn').css('background-image', 'url("img/power-button.png")');
    btnCheck = false;
    machine1.turnOff();
  }
})

$('.upperBtn').mouseleave(function(){
    if(!btnCheck){
    $('.upperBtn').css('background-image', 'url("img/power-button.png")');
    }else{

    }
})

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
 
});
swiperWrapper.onclick = function(e){
 if(containerHeight==0 && containerMilkHeight==0){
alert('добавте води і молока')
 }else if(containerHeight!=0 && containerMilkHeight==0){
  alert('добавте молока')
 }else if(containerHeight==0 && containerMilkHeight!=0){
  alert('добавте води')
 }else{ 
 let userId = (e.target.id).substring(1);
  for(i=0;i<db.length;i++){
    if(userId == db[i].code){
      if(db[i].name == 'Лате'){
        machine1.additives('Late');
      }else if(db[i].name == 'Кава'){
        machine1.additives('Cofee');
      }else if(db[i].name == 'Капучіно'){
        machine1.additives('Kapuchino');
      }else if(db[i].name == 'Aмерикано'){
        machine1.additives('Amerikano');
      }
    }
  }
 }
}

let checkAlko = false;
$('.alko').click(function(){
  if(!checkAlko){
  $('.alko').css('background-color','#222')
  $('.milk').css('background-color','inherit')
  checkMilk = false
  checkAlko = true
  }else{
    checkAlko = false
    $('.alko').css('background-color','inherit')
  }
})

let checkMilk = false;

$('.milk').click(function(){
 if(!checkMilk){
  $('.alko').css('background-color','inherit')
  $(this).css('background-color','#222')
  checkMilk = true;
  checkAlko = false;
 }else{
  $(this).css('background-color','inherit')
  checkMilk = false;
 }
})

let checkSugar = false;

$('.sugar').click(function(){
  if(!checkSugar){
   $(this).css('background-color','#222')
   checkSugar = true
  }else{
   $(this).css('background-color','inherit')
   checkSugar = false;
  }
 })

 let checkCream = false;

$('.cream').click(function(){
  if(!checkCream){
   $(this).css('background-color','#222')
   checkCream = true;
  }else{
   $(this).css('background-color','inherit')
   checkCream = false;
  }
 })

 

 



 






