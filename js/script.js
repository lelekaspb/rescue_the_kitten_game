
// click functions
function waterClick1() {
  // count +1 waterdrop
  console.log("function waterclick1");
  document.querySelector(".plus_waterdrop").classList.add("flash");
  document.querySelector("#waterdrop1_container").classList.add("pause");
  document.querySelector("#waterdrop1_sprite").classList.add("disappear");
}

function waterClick2() {
  // count +1 waterdrop
  console.log("function waterclick2");
  document.querySelector(".plus_waterdrop").classList.add("flash");
  document.querySelector("#waterdrop2_container").classList.add("pause");
  document.querySelector("#waterdrop2_sprite").classList.
  add("disappear");
  }

 function fireClick1() { 
 //   // count -1 heart
  console.log("function fireclick1");
  document.querySelector(".minus_heart").classList.add("flash");
  document.querySelector("#firedrop1_container").classList.add("pause");
  document.querySelector("#firedrop1_sprite").classList.add("disappear");
  restart_firedrop1();
 }

 function fireClick2() { 
   // count -1 heart
  console.log("function fireclick2");
  document.querySelector(".minus_heart").classList.add("flash");
  document.querySelector("#firedrop2_container").classList.add("pause");
  document.querySelector("#firedrop2_sprite").classList.add("disappear");
  restart_firedrop2();
  }

function heartClick() {
// count +1 heart
  console.log("function heartClick");
  document.querySelector(".plus_heart").classList.add("flash");
  document.querySelector("#heart_container").classList.add("pause");
  document.querySelector("#heart_sprite").classList.add("disappear");
}

// start and restart animations
window.addEventListener("load", start);

function start() {
  //console.log("function start");
  document.querySelector("#waterdrop1_container").classList.add("fall_waterdrop_1");
  document.querySelector("#waterdrop1_sprite").classList.add("pos5");
  document.querySelector("#waterdrop1_sprite").addEventListener("click", waterClick1);
  document.querySelector("#waterdrop1_container").addEventListener("animationend", restart_waterdrop1);

  
  document.querySelector("#waterdrop2_container").classList.add("fall_waterdrop_2");
  document.querySelector("#waterdrop2_sprite").classList.add("pos6");
  document.querySelector("#waterdrop2_sprite").addEventListener("click", waterClick2);  
  document.querySelector("#waterdrop2_container").addEventListener("animationend", restart_waterdrop2);


  document.querySelector("#heart_sprite").classList.add("pos21");
  document.querySelector("#heart_container").classList.add("fall_heart");
  document.querySelector("#heart_sprite").addEventListener("click", heartClick);
  document.querySelector("#heart_container").addEventListener("animationend", restart_heart);

 document.querySelector("#firedrop1_sprite").classList.add("pos3");
 document.querySelector("#firedrop1_container").classList.add("fall_firedrop_1");
  document.querySelector("#firedrop1_sprite").addEventListener("click", fireClick1);
  // document.querySelector("#firedrop1_container").addEventListener("animationend", restart_firedrop1);

  document.querySelector("#firedrop2_sprite").classList.add("pos4");
  document.querySelector("#firedrop2_container").classList.add("fall_firedrop_2");
  document.querySelector("#firedrop2_sprite").addEventListener("click", fireClick2);

  // document.querySelector("#firedrop3_sprite").classList.add("pos26");
  // document.querySelector("#firedrop3_container").classList.add("fall_firedrop_3");
  // document.querySelector("#firedrop3_sprite").addEventListener("click", fireClick3);
}

function restart_waterdrop1() {
  setTimeout(function() {
  //console.log("function restart");
    document.querySelector("#waterdrop1_container").classList.remove("pause");
    document.querySelector("#waterdrop1_container").classList.remove("fall_waterdrop_1");
    document.querySelector("#waterdrop1_sprite").classList.remove("disappear");
    document.querySelector("#waterdrop1_sprite").classList.remove("pos5");
    document.querySelector(".plus_waterdrop").classList.remove("flash");
    document.querySelector("#waterdrop1_container").offsetHeight;
    start();
  }, 2000);
}

function restart_waterdrop2() {
  setTimeout(function() {
    document.querySelector("#waterdrop2_container").classList.remove("pause");
    document.querySelector("#waterdrop2_container").classList.remove("fall_waterdrop_2");
    document.querySelector("#waterdrop2_sprite").classList.remove("disappear");
    document.querySelector("#waterdrop2_sprite").classList.remove("pos5");
    document.querySelector(".plus_waterdrop").classList.remove("flash");
    document.querySelector("#waterdrop2_container").offsetHeight;
    start();
  }, 2000);
}

function restart_heart() {
  //console.log("restart heart");
  setTimeout(function() {
    document.querySelector("#heart_container").classList.remove("pause");
    document.querySelector("#heart_container").classList.remove("fall_heart");
    document.querySelector("#heart_sprite").classList.remove("disappear");
    document.querySelector("#heart_sprite").classList.remove("pos21");
    document.querySelector(".plus_heart").classList.remove("flash");
    document.querySelector("#heart_container").offsetHeight;
    start();
  }, 2000);
}

 function restart_firedrop1() {
  //console.log("restart firedrop1");
  setTimeout(function() {
    document.querySelector("#firedrop1_container").classList.remove("pause");
    document.querySelector("#firedrop1_container").classList.remove("fall_firedrop_1");
    document.querySelector("#firedrop1_sprite").classList.remove("disappear");
    // document.querySelector("#firedrop1_sprite").classList.remove("pos3");
    document.querySelector(".minus_heart").classList.remove("flash");
    document.querySelector("#firedrop1_container").offsetHeight;
    start();
  }, 2000);
 }

 function restart_firedrop2() {
  //console.log("restart firedrop2");
  setTimeout(function() {
    document.querySelector("#firedrop2_container").classList.remove("pause");
    document.querySelector("#firedrop2_container").classList.remove("fall_firedrop_2");
    document.querySelector("#firedrop2_sprite").classList.remove("disappear");
    document.querySelector(".minus_heart").classList.remove("flash");
    document.querySelector("#firedrop2_container").offsetHeight;
    start();
  }, 2000);
 }

