
// click functions
function waterClick1() {
  points++;
  document.querySelector("#score_number").textContent=points;
  document.querySelector(".plus_waterdrop").classList.add("flash");
  this.classList.add("pause");
  this.firstElementChild.classList.add("disappear");
  this.addEventListener("animationend", restart_waterdrop1);
}


//  function heartClick() {
//     lives++;
//    document.querySelector("#life"+lives).classList.remove("sprite4");
//    document.querySelector("#life"+lives).classList.add("sprite3");
//     //console.log("function heartClick");
//    document.querySelector(".plus_heart").classList.add("flash");
//    document.querySelector("#heart_container").classList.add("pause");
//    document.querySelector("#heart_sprite").classList.add("disappear");
//    this.addEventListener("animationend", restart_heart)
//  }

function heartClick() {
  //console.log(this);
  lives++;
  document.querySelector("#life"+lives).classList.remove("sprite4");
  document.querySelector("#life"+lives).classList.add("sprite3");
  console.log("function heartClick");
  document.querySelector(".plus_heart").classList.add("flash");
  this.classList.add("pause");
  this.firstElementChild.classList.add("disappear");
  this.addEventListener("animationend", restart_heart);
}



 function fireClick1() { 
    document.querySelector("#life"+lives).classList.remove("sprite3");
    document.querySelector("#life"+lives).classList.add("sprite4");
    lives--;
    console.log("function fireclick1");
    document.querySelector(".minus_heart").classList.add("flash");
    document.querySelector("#firedrop1_container").classList.add("pause");
    //this.classList.add("pause");
    document.querySelector("#firedrop1_sprite").classList.add("disappear");
    //this.firstElementChild.classList.add("disappear");
    //this.addEventListener("animationend", restart_firedrop1);
    restart_firedrop1();
 }

  function fireClick2() { 
    document.querySelector("#life"+lives).classList.remove("sprite3");
    document.querySelector("#life"+lives).classList.add("sprite4");
    lives--;
    //console.log("function fireclick2");
    document.querySelector(".minus_heart").classList.add("flash");
    document.querySelector("#firedrop2_container").classList.add("pause");
    document.querySelector("#firedrop2_sprite").classList.add("disappear");
    restart_firedrop2();
  }

function fireClick3() { 
  document.querySelector("#life"+lives).classList.add("sprite4");
  document.querySelector("#life"+lives).classList.remove("sprite3");
  //console.log("function fireclick3");
  lives--;
  document.querySelector("#firedrop3_container").classList.add("pause");
  document.querySelector(".minus_heart").classList.add("flash");
  restart_firedrop3();
  document.querySelector("#firedrop3_sprite").classList.add("disappear");
  
}

function fireClick4() { 
  document.querySelector("#life"+lives).classList.remove("sprite3");
  document.querySelector("#life"+lives).classList.add("sprite4");
  lives--;
  //console.log("function fireclick4");
  document.querySelector(".minus_heart").classList.add("flash");
  document.querySelector("#firedrop4_container").classList.add("pause");
  document.querySelector("#firedrop4_sprite").classList.add("disappear");
  restart_firedrop4();
}

function fireClick5() { 
  document.querySelector("#life"+lives).classList.remove("sprite3");
  document.querySelector("#life"+lives).classList.add("sprite4");
  lives--;
  //console.log("function fireclick5");
  document.querySelector(".minus_heart").classList.add("flash");
  document.querySelector("#firedrop5_container").classList.add("pause");
  document.querySelector("#firedrop5_sprite").classList.add("disappear");
  restart_firedrop5();
}

function fireClick6() { 
  document.querySelector("#life"+lives).classList.remove("sprite3");
  document.querySelector("#life"+lives).classList.add("sprite4");
  lives--;
  //console.log("function fireclick6");
  document.querySelector(".minus_heart").classList.add("flash");
  document.querySelector("#firedrop6_container").classList.add("pause");
  document.querySelector("#firedrop6_sprite").classList.add("disappear");
  restart_firedrop6();
}



// start of the game
window.addEventListener("load", start);
let points = 0;
let lives = 3;
document.querySelector("#score_number").textContent=points;


//start animations
function start() {
  console.log("function start");
  document.querySelector("#waterdrop1_container").classList.add("fall_waterdrop_1");
  document.querySelector("#waterdrop1_container").classList.add("pos5");
  document.querySelector("#waterdrop1_container").addEventListener("click", waterClick1);
  document.querySelector("#waterdrop1_container").addEventListener("animationiteration", newPos);
  
  document.querySelector("#waterdrop2_container").classList.add("fall_waterdrop_2");
  document.querySelector("#waterdrop2_container").classList.add("pos6");
  document.querySelector("#waterdrop2_container").addEventListener("click", waterClick1);  
  document.querySelector("#waterdrop2_container").addEventListener("animationiteration", newPos);

  document.querySelector("#waterdrop3_container").classList.add("fall_waterdrop_1");
  document.querySelector("#waterdrop3_container").classList.add("pos4");
  document.querySelector("#waterdrop3_container").addEventListener("click", waterClick1);  
  document.querySelector("#waterdrop3_container").addEventListener("animationiteration", newPos);



  document.querySelector("#heart_container").classList.add("pos21");
  document.querySelector("#heart_container").classList.add("fall_heart");
  document.querySelector("#heart_container").addEventListener("click", heartClick);
  document.querySelector("#heart_container").addEventListener("animationiteration", newPos);



 document.querySelector("#firedrop1_sprite").classList.add("pos3");
 document.querySelector("#firedrop1_container").classList.add("fall_firedrop_1");
  document.querySelector("#firedrop1_container").addEventListener("click", fireClick1);


  document.querySelector("#firedrop2_sprite").classList.add("pos4");
  document.querySelector("#firedrop2_container").classList.add("fall_firedrop_2");
  document.querySelector("#firedrop2_container").addEventListener("click", fireClick2);

  document.querySelector("#firedrop3_sprite").classList.add("pos26");
  document.querySelector("#firedrop3_container").classList.add("fall_firedrop_3");
  document.querySelector("#firedrop3_container").addEventListener("click", fireClick3);

  document.querySelector("#firedrop4_sprite").classList.add("pos27");
  document.querySelector("#firedrop4_container").classList.add("fall_firedrop_4");
  document.querySelector("#firedrop4_container").addEventListener("click", fireClick4);

  document.querySelector("#firedrop5_sprite").classList.add("pos28");
  document.querySelector("#firedrop5_container").classList.add("fall_firedrop_5");
  document.querySelector("#firedrop5_container").addEventListener("click", fireClick5);

  document.querySelector("#firedrop6_sprite").classList.add("pos29");
  document.querySelector("#firedrop6_container").classList.add("fall_firedrop_6");
  document.querySelector("#firedrop6_container").addEventListener("click", fireClick6);
}

// restart animations
function restart_waterdrop1() {
  setTimeout ( () => {
    console.log("function restart waterdrop1");
    console.log(this);
    this.classList.value= "";
    this.offsetHeight;
    this.firstElementChild.classList.remove("disappear");
    let randPos = Math.floor(Math.random()*9)+1;
    console.log(randPos);
    this.classList.add("position" + randPos);
    this.classList.add("fall_waterdrop_1");
    document.querySelector(".plus_waterdrop").classList.remove("flash");
  }, 2000);
}


function restart_heart() {
  console.log("restart heart");
  setTimeout( ()  => {
    console.log(this);
    this.classList.value= "";
    this.offsetHeight;
    this.firstElementChild.classList.remove("disappear");
    let randPos = Math.floor(Math.random()*9)+1;
    console.log(randPos);
    this.classList.add("position" + randPos);
    this.classList.add("fall_heart");
    document.querySelector(".plus_heart").classList.remove("flash");
  }, 2000); // sth is wrong with heart reappearing after clicking on a firedrop - it disappears right after appearing on the top of the screeen
}

 function restart_firedrop1() {
  console.log("restart firedrop1");
  setTimeout( ()  =>  {
    document.querySelector("#firedrop1_container").classList.remove("pause");
    document.querySelector("#firedrop1_container").classList.remove("fall_firedrop_1");
    // this.classList.value= "";
    // this.offsetHeight;
    // this.firstElementChild.classList.remove("disappear");
    // let randPos = Math.floor(Math.random()*9)+1;
    // console.log(randPos);
    // this.firstElementChild.classList.add("pos3");
    document.querySelector("#firedrop1_sprite").classList.remove("disappear");
    // this.classList.add("fall_firedrop_1");
    document.querySelector("#firedrop1_sprite").classList.remove("pos3");
    document.querySelector(".minus_heart").classList.remove("flash");
    document.querySelector("#firedrop1_container").offsetHeight;
    start();
  }, 2000);
 }

 function restart_firedrop2() {
  console.log("restart firedrop2");
  setTimeout(function() {
    document.querySelector("#firedrop2_container").classList.remove("pause");
    document.querySelector("#firedrop2_container").classList.remove("fall_firedrop_2");
    document.querySelector("#firedrop2_sprite").classList.remove("disappear");
    document.querySelector(".minus_heart").classList.remove("flash");
    document.querySelector("#firedrop2_container").offsetHeight;
    start();
  }, 2000);
 }

 function restart_firedrop3() {
  //console.log("restart firedrop3");
  setTimeout(function() {
    document.querySelector("#firedrop3_container").classList.remove("pause");
    document.querySelector("#firedrop3_container").classList.remove("fall_firedrop_3");
    document.querySelector("#firedrop3_sprite").classList.remove("disappear");
    document.querySelector(".minus_heart").classList.remove("flash");
    document.querySelector("#firedrop3_container").offsetHeight;
    start();
  }, 2000);
 }

 function restart_firedrop4() {
  //console.log("restart firedrop4");
  setTimeout(function() {
    document.querySelector("#firedrop4_container").classList.remove("pause");
    document.querySelector("#firedrop4_container").classList.remove("fall_firedrop_4");
    document.querySelector("#firedrop4_sprite").classList.remove("disappear");
    document.querySelector(".minus_heart").classList.remove("flash");
    document.querySelector("#firedrop4_container").offsetHeight;
    start();
  }, 2000);
 }

 function restart_firedrop5() {
  //console.log("restart firedrop5");
  setTimeout(function() {
    document.querySelector("#firedrop5_container").classList.remove("pause");
    document.querySelector("#firedrop5_container").classList.remove("fall_firedrop_5");
    document.querySelector("#firedrop5_sprite").classList.remove("disappear");
    document.querySelector(".minus_heart").classList.remove("flash");
    document.querySelector("#firedrop5_container").offsetHeight;
    start();
  }, 2000);
 }

 function restart_firedrop6() {
  //console.log("restart firedrop6");
  setTimeout(function() {
    document.querySelector("#firedrop6_container").classList.remove("pause");
    document.querySelector("#firedrop6_container").classList.remove("fall_firedrop_6");
    document.querySelector("#firedrop6_sprite").classList.remove("disappear");
    document.querySelector(".minus_heart").classList.remove("flash");
    document.querySelector("#firedrop6_container").offsetHeight;
    start();
  }, 2000);
 }




 // random positions for sprites
function newPos() {
  //setTimeout(function() {
    console.log("newPos function");
    console.log(this);
    // document.querySelector("#waterdrop1_container").classList.value= " ";
    this.classList.value = "";
    // document.querySelector("#waterdrop1_container").offsetHeight;
    this.offsetHeight;
    // document.querySelector("#waterdrop1_container").classList.add("fall_waterdrop_1");
    this.classList.add("fall_waterdrop_1");
    let randPos = Math.floor(Math.random()*9)+1;
    console.log(randPos);
    // document.querySelector("#waterdrop1_container").classList.add("position" + randPos);
    this.classList.add("position" + randPos);
  //}, 2000);
} // should i add an eventListener animationiteration here?