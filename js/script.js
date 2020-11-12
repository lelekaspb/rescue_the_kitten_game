
// start of the game
window.addEventListener("load", start);
let points = 0;
let lives = 3;
let timeLeft = 60;
let gameIsPaused = false;
let gameHasEnded = false;
let settingsAreOpen = false;
document.querySelector("#score_number").textContent=points;


//start animations
function start() {
  console.log("function start");

  timeLeft = 60;
  lives = 3;
  points = 0;

  document.querySelector("#score_number").textContent=points;

  startTimer();

  document.querySelector("#time_background").classList.remove("shrink");
  document.querySelector("#time_background").classList.add("shrink");
  document.querySelector("#time_background").addEventListener("animationend", removeShrink)
  ;

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

  document.querySelector("#heart_container").classList.add("hidden");

  // document.querySelector("#heart_container").classList.add("pos21");
  // document.querySelector("#heart_container").classList.add("fall_heart");
  // document.querySelector("#heart_container").addEventListener("click", heartClick);
  // document.querySelector("#heart_container").addEventListener("animationiteration", newPos);



 document.querySelector("#firedrop1_container").classList.add("pos3");
 document.querySelector("#firedrop1_container").classList.add("fall_firedrop_1");
  document.querySelector("#firedrop1_container").addEventListener("click", fireClick1);


  document.querySelector("#firedrop2_container").classList.add("pos4");
  document.querySelector("#firedrop2_container").classList.add("fall_firedrop_2");
  document.querySelector("#firedrop2_container").addEventListener("click", fireClick2);

  document.querySelector("#firedrop3_container").classList.add("pos26");
  document.querySelector("#firedrop3_container").classList.add("fall_firedrop_3");
  document.querySelector("#firedrop3_container").addEventListener("click", fireClick3);

  document.querySelector("#firedrop4_container").classList.add("pos27");
  document.querySelector("#firedrop4_container").classList.add("fall_firedrop_4");
  document.querySelector("#firedrop4_container").addEventListener("click", fireClick4);

  document.querySelector("#firedrop5_container").classList.add("pos28");
  document.querySelector("#firedrop5_container").classList.add("fall_firedrop_5");
  document.querySelector("#firedrop5_container").addEventListener("click", fireClick5);

  document.querySelector("#firedrop6_container").classList.add("pos29");
  document.querySelector("#firedrop6_container").classList.add("fall_firedrop_6");
  document.querySelector("#firedrop6_container").addEventListener("click", fireClick6);

    // Adding click event to new pause button
    document.querySelector("#settings").addEventListener("click", openSettings);
    document.querySelector("#pause").addEventListener("click", pauseGame);

    // Adding click event to restart button
    document.querySelector("#restart").addEventListener("click", restartOnButton);
}


// heart sprite falling function
function startHeart() {
  document.querySelector("#heart_container").classList.remove("hidden");
  document.querySelector("#heart_container").classList.add("pos21");
  document.querySelector("#heart_container").classList.add("fall_heart");
  document.querySelector("#heart_container").addEventListener("click", heartClick);
  document.querySelector("#heart_container").addEventListener("animationiteration", newPos);
}


// click functions
function waterClick1() {
  points++;
  document.querySelector("#score_number").textContent=points;
  document.querySelector(".plus_waterdrop").classList.add("flash");
  this.classList.add("pause");
  this.firstElementChild.classList.add("disappear");
  if (points >= 20) {
    levelComplete();
  }
  this.addEventListener("animationend", restart_waterdrop1);
}


function heartClick() {
  //console.log(this);
  lives++;
  document.querySelector("#life"+lives).classList.remove("sprite4");
  document.querySelector("#life"+lives).classList.add("sprite3");
  console.log("function heartClick");
  document.querySelector(".plus_heart").classList.add("flash");
  this.classList.add("pause");
  this.firstElementChild.classList.add("disappear");
  if (lives < 3) {
    this.addEventListener("animationend", restart_heart);
  }
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
  if (lives <= 0) {
    gameOver();
  } else {
    startHeart();
  }
  //startFiredrop1();
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
    if (lives <= 0) {
      gameOver();
    } else {
      startHeart();
    }
    restart_firedrop2();
  }

function fireClick3() { 
  document.querySelector("#life"+lives).classList.add("sprite4");
  document.querySelector("#life"+lives).classList.remove("sprite3");
  //console.log("function fireclick3");
  lives--;
  document.querySelector("#firedrop3_container").classList.add("pause");
  document.querySelector(".minus_heart").classList.add("flash");
  document.querySelector("#firedrop3_sprite").classList.add("disappear");
  if (lives <= 0) {
    gameOver();
  } else {
    startHeart();
  }
  restart_firedrop3();  
}

function fireClick4() { 
  document.querySelector("#life"+lives).classList.remove("sprite3");
  document.querySelector("#life"+lives).classList.add("sprite4");
  lives--;
  //console.log("function fireclick4");
  document.querySelector(".minus_heart").classList.add("flash");
  document.querySelector("#firedrop4_container").classList.add("pause");
  document.querySelector("#firedrop4_sprite").classList.add("disappear");
  if (lives <= 0) {
    gameOver();
  } else {
    startHeart();
  }
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
  if (lives <= 0) {
    gameOver();
  } else {
    startHeart();
  }
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
  if (lives <= 0) {
    gameOver();
  } else {
    startHeart();
  }
  restart_firedrop6();
}




// restart animations
function restart_waterdrop1() {
  setTimeout ( () => {
    //console.log("function restart waterdrop1");
    //console.log(this);
    this.classList.value= "";
    this.offsetHeight;
    this.firstElementChild.classList.remove("disappear");
    let randPos = Math.floor(Math.random()*9)+1;
    //console.log(randPos);
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
  //console.log("restart firedrop1");
  setTimeout( ()  =>  {
    document.querySelector("#firedrop1_container").classList.remove("pause");
    document.querySelector("#firedrop1_container").classList.remove("fall_firedrop_1");
    document.querySelector("#firedrop1_sprite").classList.remove("disappear");
    // this.classList.add("fall_firedrop_1");
    document.querySelector("#firedrop1_sprite").classList.remove("pos3");
    document.querySelector(".minus_heart").classList.remove("flash");
    document.querySelector("#firedrop1_container").offsetHeight;
    //start();
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
    //start();
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
    //start();
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
    //start();
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
    //start();
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
    //start();
  }, 2000);
 }

 // remove the shrink class from the time runner
 function removeShrink() {
  document.querySelector("#time_background").classList.remove("shrink");
 }


 // random positions for sprites
 function newPos() {
  this.classList.value = "";
  this.offsetHeight;
  this.classList.add("fall_waterdrop_1");
  let randPos = Math.floor(Math.random()*9)+1;
  this.classList.add("position" + randPos);
} 


// timing
function startTimer() {
  if (gameIsPaused == false) {
    if (timeLeft == 0 || lives < 1) {
      gameOver();
    } else {
      setTimeout(showTime, 1000);
      // document.querySelector("#time_background").classList.add("shrink");
    }
  }
}

function showTime() {
  if (timeLeft > 0) {
    timeLeft--;
    startTimer();
  } else {
    gameOver();
  }
}


// game over function
function gameOver() {
  console.log("game over function");
  if (gameHasEnded == false) {
    // here I have to remove all the falling classes from containers, remove eventListeners, add "restart button", and change the gameHasEnded to true
    document.querySelector("#waterdrop1_container").classList.value = "";
    document.querySelector("#waterdrop2_container").classList.value = "";
    document.querySelector("#waterdrop3_container").classList.value = "";
    document.querySelector("#heart_container").classList.value = "";
    document.querySelector("#firedrop1_container").classList.value = "";
    document.querySelector("#firedrop2_container").classList.value = "";
    document.querySelector("#firedrop3_container").classList.value = "";
    document.querySelector("#firedrop4_container").classList.value = "";
    document.querySelector("#firedrop5_container").classList.value = "";
    document.querySelector("#firedrop6_container").classList.value = "";

    document.querySelector("#time_background").classList.value = "";

    document.querySelector("#waterdrop1_container").removeEventListener("click", waterClick1);
    document.querySelector("#waterdrop2_container").removeEventListener("click", waterClick1);
    document.querySelector("#waterdrop3_container").removeEventListener("click", waterClick1);
    document.querySelector("#heart_container").removeEventListener("click", heartClick);
    document.querySelector("#firedrop1_container").removeEventListener("click", fireClick1);
    document.querySelector("#firedrop2_container").removeEventListener("click", fireClick2);
    document.querySelector("#firedrop3_container").removeEventListener("click", fireClick3);
    document.querySelector("#firedrop4_container").removeEventListener("click", fireClick4);
    document.querySelector("#firedrop5_container").removeEventListener("click", fireClick5);
    document.querySelector("#firedrop6_container").removeEventListener("click", fireClick6);

    document.querySelector("#game_over").classList.remove("hidden");

    // Adding a "Restart Game" button
    document.querySelector("#restart_game_btn").addEventListener("click", restartGame);

    // changing the game running status
    gameHasEnded = true;
  }
}


// level complete function
function levelComplete() {
  document.querySelector("#level_complete").classList.remove("hidden");
  // here I have to remove all the falling classes from containers, remove eventListeners, add "next level button", and change the gameHasEnded to true
}


// function that opens detailed settings board
function openSettings() {
  if (settingsAreOpen == false) {
    console.log("settings are set to OPEN");
    document.querySelector("#settings_open").classList.remove("hidden");
    settingsAreOpen = true;
  } else {
    console.log("settings are set to CLOSE");
    document.querySelector("#settings_open").classList.add("hidden");
    settingsAreOpen = false;
  }
}



// pause function
function pauseGame() {
  if (gameIsPaused == false) {

    console.log("game is set to PAUSED");
    // pause containers animations (fall)
    document.querySelector("#waterdrop1_container").classList.add("pause");
    document.querySelector("#waterdrop2_container").classList.add("pause");
    document.querySelector("#waterdrop3_container").classList.add("pause");
    document.querySelector("#heart_container").classList.add("pause");
    document.querySelector("#firedrop1_container").classList.add("pause");
    document.querySelector("#firedrop2_container").classList.add("pause");
    document.querySelector("#firedrop3_container").classList.add("pause");
    document.querySelector("#firedrop4_container").classList.add("pause");
    document.querySelector("#firedrop5_container").classList.add("pause");
    document.querySelector("#firedrop6_container").classList.add("pause");

    // pause the time runner
    document.querySelector("#time_background").classList.add("pause");

    // remove all eventListeners
    document.querySelector("#waterdrop1_container").removeEventListener("click", waterClick1);
    document.querySelector("#waterdrop2_container").removeEventListener("click", waterClick1);
    document.querySelector("#waterdrop3_container").removeEventListener("click", waterClick1);
    document.querySelector("#heart_container").removeEventListener("click", heartClick);
    document.querySelector("#firedrop1_container").removeEventListener("click", fireClick1);
    document.querySelector("#firedrop2_container").removeEventListener("click", fireClick2);
    document.querySelector("#firedrop3_container").removeEventListener("click", fireClick3);
    document.querySelector("#firedrop4_container").removeEventListener("click", fireClick4);
    document.querySelector("#firedrop5_container").removeEventListener("click", fireClick5);
    document.querySelector("#firedrop6_container").removeEventListener("click", fireClick6);
    gameIsPaused = true;

  } else {
    console.log("Game is set to NOT PAUSED");
    // start game if paused...
    // remove all paused classes
    document.querySelector("#waterdrop1_container").classList.remove("pause");
    document.querySelector("#waterdrop2_container").classList.remove("pause");
    document.querySelector("#waterdrop3_container").classList.remove("pause");
    document.querySelector("#heart_container").classList.remove("pause");
    document.querySelector("#firedrop1_container").classList.remove("pause");
    document.querySelector("#firedrop2_container").classList.remove("pause");
    document.querySelector("#firedrop3_container").classList.remove("pause");
    document.querySelector("#firedrop4_container").classList.remove("pause");
    document.querySelector("#firedrop5_container").classList.remove("pause");
    document.querySelector("#firedrop6_container").classList.remove("pause");

    // unpause the time runner
    document.querySelector("#time_background").classList.remove("pause");

    // add all eventListeners
    document.querySelector("#waterdrop1_container").addEventListener("click", waterClick1);
    document.querySelector("#waterdrop2_container").addEventListener("click", waterClick1);
    document.querySelector("#waterdrop3_container").addEventListener("click", waterClick1);
    document.querySelector("#heart_container").addEventListener("click", heartClick);
    document.querySelector("#firedrop1_container").addEventListener("click", fireClick1);
    document.querySelector("#firedrop2_container").addEventListener("click", fireClick2);
    document.querySelector("#firedrop3_container").addEventListener("click", fireClick3);
    document.querySelector("#firedrop4_container").addEventListener("click", fireClick4);
    document.querySelector("#firedrop5_container").addEventListener("click", fireClick5);
    document.querySelector("#firedrop6_container").addEventListener("click", fireClick6);
    gameIsPaused = false;

    // Start counter again
    startTimer();
  }
}


// restart game function
function restartGame() {
  console.log("restart game function");
  // hiding unused screens (title, instructions, gameover, levelcomplete)
  document.querySelector("#title_screen").classList.add("hidden");
  document.querySelector("#instructions").classList.add("hidden"); // actually this one shows up before the game background screen - have to fix it later
  document.querySelector("#game_over").classList.add("hidden");
  document.querySelector("#level_complete").classList.add("hidden");

  // reset variables
  lives = 3;
  points = 0;
  timeLeft = 60;

  // remove all paused classes (animations) ???
  // document.querySelector("#waterdrop1_container").classList.remove("pause");
  // document.querySelector("#waterdrop2_container").classList.remove("pause");
  // document.querySelector("#waterdrop3_container").classList.remove("pause");
  // document.querySelector("#heart_container").classList.remove("pause");
  // document.querySelector("#firedrop1_container").classList.remove("pause");
  // document.querySelector("#firedrop2_container").classList.remove("pause");
  // document.querySelector("#firedrop3_container").classList.remove("pause");
  // document.querySelector("#firedrop4_container").classList.remove("pause");
  // document.querySelector("#firedrop5_container").classList.remove("pause");
  // document.querySelector("#firedrop6_container").classList.remove("pause");

  // Reset game run status to "running"
  gameHasEnded = false;

  // refilling the UI hearts (lives)
  document.querySelector("#life1").classList.remove("sprite4");
  document.querySelector("#life2").classList.remove("sprite4");
  document.querySelector("#life3").classList.remove("sprite4");
  document.querySelector("#life1").classList.add("sprite3");
  document.querySelector("#life2").classList.add("sprite3");
  document.querySelector("#life3").classList.add("sprite3");

  console.log(points);


  // Calling the start function
  start();
}



// function that restarts the game after clicking on the restart button
function restartOnButton() {
  console.log("restartOnButton function");
  location.reload();
}