
// start of the game
window.addEventListener("load", welcome);
let points = 0;
let lives = 3;
let timeLeft = 60;
let gameIsPaused = false;
let gameHasEnded = false;
let settingsAreOpen = false;
document.querySelector("#score_number").textContent=points;

function welcome() {
  document.querySelector("#title_screen").classList.remove("hidden");
  document.querySelector("#game_screen").classList.add("hidden");
  document.querySelector("#instructions").classList.add("hidden");
  document.querySelector("#title_screen_i").addEventListener("click", instructions);
  document.querySelector("#title_screen_btn").addEventListener("click", start);
}

function instructions() {
  document.querySelector("#title_screen").classList.add("hidden");
  document.querySelector("#game_screen").classList.add("hidden");
  document.querySelector("#instructions").classList.remove("hidden");
  document.querySelector("#instructions_button").addEventListener("click", start);
  document.querySelector("#instructions_button_back").addEventListener("click", welcome);
}

//start game
function start() {
  console.log("function start");
  document.querySelector("#title_screen").classList.add("hidden");
  document.querySelector("#instructions").classList.add("hidden"); 
  document.querySelector("#game_screen").classList.remove("hidden");
  clear();
  console.log("classes cleared");
  gameHasEnded = false;
  startTimer();
  console.log("started startTimer");
  timeLeft = 60;
  lives = 3;
  points = 0;
  console.log("reset variables");
  document.querySelector("#score_number").textContent=points;
  //console.log(timeLeft+" seconds left after starting start");
  
   setTimeout( ()=> {
    
    //console.log(timeLeft+" seconds left inside setTimeout");
    document.querySelector("#time_background").classList.remove("shrink");
    document.querySelector("#time_background").classList.add("shrink");
    document.querySelector("#time_background").addEventListener("animationend", removeShrink);
    startAnimations();
    // Adding click event to pause button
    document.querySelector("#settings").addEventListener("click", openSettings);
    document.querySelector("#pause").addEventListener("click", pauseGame);  
    // Adding click event to exit button
    document.querySelector("#exit").addEventListener("click", exit);  
    // Adding click event to restart button
    document.querySelector("#restart").addEventListener("click", restartOnButton);
   }, 500);
  //console.log(timeLeft+" seconds left after setting setTimeout");
}


//function that starts all the animations
function startAnimations() {
  document.querySelector("#waterdrop1_container").classList.add("fall_waterdrop_1");
  document.querySelector("#waterdrop1_container").classList.add("pos5");
  document.querySelector("#waterdrop1_container").addEventListener("click", waterClick1);
  document.querySelector("#waterdrop1_container").addEventListener("animationiteration", newPosForWater);
  
  document.querySelector("#waterdrop2_container").classList.add("fall_waterdrop_2");
  document.querySelector("#waterdrop2_container").classList.add("pos6");
  document.querySelector("#waterdrop2_container").addEventListener("click", waterClick1);  
  document.querySelector("#waterdrop2_container").addEventListener("animationiteration", newPosForWater);

  document.querySelector("#waterdrop3_container").classList.add("fall_waterdrop_1");
  document.querySelector("#waterdrop3_container").classList.add("pos4");
  document.querySelector("#waterdrop3_container").addEventListener("click", waterClick1);  
  document.querySelector("#waterdrop3_container").addEventListener("animationiteration", newPosForWater);

  document.querySelector("#heart_container").classList.add("hidden");

 document.querySelector("#firedrop1_container").classList.add("pos3");
 document.querySelector("#firedrop1_container").classList.add("fall_firedrop_1");
  document.querySelector("#firedrop1_container").addEventListener("click", fireClick1);

  document.querySelector("#firedrop2_container").classList.add("pos4");
  document.querySelector("#firedrop2_container").classList.add("fall_firedrop_2");
  document.querySelector("#firedrop2_container").addEventListener("click", fireClick1);

  document.querySelector("#firedrop3_container").classList.add("pos26");
  document.querySelector("#firedrop3_container").classList.add("fall_firedrop_3");
  document.querySelector("#firedrop3_container").addEventListener("click", fireClick1);

  document.querySelector("#firedrop4_container").classList.add("pos27");
  document.querySelector("#firedrop4_container").classList.add("fall_firedrop_4");
  document.querySelector("#firedrop4_container").addEventListener("click", fireClick1);

  document.querySelector("#firedrop5_container").classList.add("pos28");
  document.querySelector("#firedrop5_container").classList.add("fall_firedrop_5");
  document.querySelector("#firedrop5_container").addEventListener("click", fireClick1);

  document.querySelector("#firedrop6_container").classList.add("pos29");
  document.querySelector("#firedrop6_container").classList.add("fall_firedrop_6");
  document.querySelector("#firedrop6_container").addEventListener("click", fireClick1);

  document.querySelector("#firedrop1_sprite").classList.add("fire_animation_1");
  document.querySelector("#firedrop2_sprite").classList.add("fire_animation_2");
  document.querySelector("#firedrop3_sprite").classList.add("fire_animation_1");
  document.querySelector("#firedrop4_sprite").classList.add("fire_animation_2");
  document.querySelector("#firedrop5_sprite").classList.add("fire_animation");
  document.querySelector("#firedrop6_sprite").classList.add("fire_animation_2");

  console.log(timeLeft + "seconds left by the end of startAnimations function");

  setTimeout ( () => {
    
    document.querySelector("#firedrop7_container").classList.add("pos25");
    document.querySelector("#firedrop7_container").classList.add("fall_firedrop_2");
    document.querySelector("#firedrop7_container").addEventListener("click", fireClick1);

    document.querySelector("#firedrop8_container").classList.add("pos12");
    document.querySelector("#firedrop8_container").classList.add("fall_firedrop_3");
    document.querySelector("#firedrop8_container").addEventListener("click", fireClick1);

    document.querySelector("#firedrop9_container").classList.add("pos24");
    document.querySelector("#firedrop9_container").classList.add("fall_firedrop_4");
    document.querySelector("#firedrop9_container").addEventListener("click", fireClick1);

    document.querySelector("#firedrop10_container").classList.add("pos23");
    document.querySelector("#firedrop10_container").classList.add("fall_firedrop_5");
    document.querySelector("#firedrop10_container").addEventListener("click", fireClick1);

    document.querySelector("#firedrop11_container").classList.add("pos11");
    document.querySelector("#firedrop11_container").classList.add("fall_firedrop_6");
    document.querySelector("#firedrop11_container").addEventListener("click", fireClick1);

    document.querySelector("#firedrop7_sprite").classList.add("fire_animation_1");
    document.querySelector("#firedrop8_sprite").classList.add("fire_animation_2");
    document.querySelector("#firedrop9_sprite").classList.add("fire_animation_1");
    document.querySelector("#firedrop10_sprite").classList.add("fire_animation_2");
    document.querySelector("#firedrop11_sprite").classList.add("fire_animation");
  }, 15000);
}

// heart sprite falling function
function startHeart() {
  document.querySelector("#heart_container").classList.value= "";
  document.querySelector("#heart_container").offsetHeight;
  document.querySelector("#heart_sprite").classList.remove("disappear");

  document.querySelector("#heart_container").classList.remove("hidden");
  document.querySelector("#heart_container").classList.add("pos21");
  document.querySelector("#heart_container").classList.add("fall_heart");
  document.querySelector("#heart_container").addEventListener("click", heartClick);
  document.querySelector("#heart_container").addEventListener("animationiteration", newPosForHeart);
}


// click functions
function waterClick1() {
  points++;
  document.querySelector("#score_number").textContent=points;
  document.querySelector("#plus_waterdrop").parentElement.classList.value="";
  let randPos = Math.floor(Math.random()*9)+1;
  document.querySelector("#plus_waterdrop").parentElement.classList.add("pos_popup_"+randPos);
  document.querySelector("#plus_waterdrop").classList.add("flash");
  document.querySelector("#plus_waterdrop").addEventListener("animationend", removeFlash);
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
  document.querySelector("#plus_heart").parentElement.classList.value="";
  let randPos = Math.floor(Math.random()*9)+1;
  document.querySelector("#plus_heart").parentElement.classList.add("pos_popup_"+randPos);
  document.querySelector("#plus_heart").classList.add("flash");
  document.querySelector("#plus_heart").addEventListener("animationend", removeFlash);
  this.classList.add("pause");
  this.firstElementChild.classList.add("disappear");
  if (lives < 3) {
    this.addEventListener("animationend", restart_heart);
    console.log("you have less than 3 lives " + lives);
  } else {
    console.log("you have 3 or more lives " + lives);
    this.removeEventListener("animationend", restart_heart);
  }
  
}



 function fireClick1() { 
  document.querySelector("#life"+lives).classList.remove("sprite3");
  document.querySelector("#life"+lives).classList.add("sprite4");
  lives--;
  console.log("function fireclick1");
  document.querySelector("#minus_heart").parentElement.classList.value="";
  let randPos = Math.floor(Math.random()*9)+1;
  document.querySelector("#minus_heart").parentElement.classList.add("pos_popup_"+randPos);
  document.querySelector("#minus_heart").classList.add("flash");
  document.querySelector("#minus_heart").addEventListener("animationend", removeFlash);
  this.firstElementChild.classList.add("shake");
  setTimeout ( () => {
    this.firstElementChild.classList.remove("shake");
  }, 1100);
  console.log("you have "+lives+" lives");
  if (lives <= 0) {
    console.log("call gameOver function");
    gameOver();
  } else {
    console.log("call startHeart function");
    startHeart();
  }
 
 }



// restart animations
function restart_waterdrop1() {
  setTimeout ( () => {
    console.log("function restart waterdrop1");
    //console.log(this);
    this.classList.value= "";
    this.offsetHeight;
    this.firstElementChild.classList.remove("disappear");
    let randPos = Math.floor(Math.random()*9)+1;
    //console.log(randPos);
    this.classList.add("position" + randPos);
    this.classList.add("fall_waterdrop_1");
    document.querySelector("#plus_waterdrop").classList.remove("flash");
    console.log(timeLeft + "seconds left");
  }, 2000);
}


function restart_heart() {
  console.log("restart heart");
  setTimeout( ()  => {
    //console.log(this);
    this.classList.value= "";
    this.offsetHeight;
    this.firstElementChild.classList.remove("disappear");
    let randPos = Math.floor(Math.random()*9)+1;
    //console.log(randPos);
    this.classList.add("position" + randPos);
    this.classList.add("fall_heart");
    document.querySelector("#plus_heart").classList.remove("flash");
  }, 2000); // sth is wrong with heart reappearing after clicking on a firedrop - it disappears right after appearing on the top of the screeen
}


 // remove the shrink class from the time runner
 function removeShrink() {
  document.querySelector("#time_background").classList.remove("shrink");
 }


 // remove the flash class from the minus heart popup
 function removeFlash() {
   this.classList.remove("flash");
 }
 


 // random positions for sprites
 function newPosForWater() {
  this.classList.value = "";
  this.offsetHeight;
  this.classList.add("fall_waterdrop_1");
  let randPos = Math.floor(Math.random()*9)+1;
  this.classList.add("position" + randPos);
} 

function newPosForHeart() {
  this.classList.value = "";
  this.offsetHeight;
  this.classList.add("fall_heart");
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


//function that removes animation and position classes, as well as the eventListeners
function clear() {
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
  document.querySelector("#firedrop7_container").classList.value = "";
  document.querySelector("#firedrop8_container").classList.value = "";
  document.querySelector("#firedrop9_container").classList.value = "";
  document.querySelector("#firedrop10_container").classList.value = "";
  document.querySelector("#firedrop11_container").classList.value = "";

  document.querySelector("#firedrop1_sprite").classList.remove("fire_animation_1");
  document.querySelector("#firedrop2_sprite").classList.remove("fire_animation_2");
  document.querySelector("#firedrop3_sprite").classList.remove("fire_animation_1");
  document.querySelector("#firedrop4_sprite").classList.remove("fire_animation_2");
  document.querySelector("#firedrop5_sprite").classList.remove("fire_animation");
  document.querySelector("#firedrop6_sprite").classList.remove("fire_animation_2");
  document.querySelector("#firedrop7_sprite").classList.remove("fire_animation_2");
  document.querySelector("#firedrop8_sprite").classList.remove("fire_animation_1");
  document.querySelector("#firedrop9_sprite").classList.remove("fire_animation_2");
  document.querySelector("#firedrop10_sprite").classList.remove("fire_animation");
  document.querySelector("#firedrop11_sprite").classList.remove("fire_animation_2");

  document.querySelector("#time_background").classList.value = "";

  document.querySelector("#minus_heart").classList.remove("flash");

  document.querySelector("#waterdrop1_container").removeEventListener("click", waterClick1);
  document.querySelector("#waterdrop2_container").removeEventListener("click", waterClick1);
  document.querySelector("#waterdrop3_container").removeEventListener("click", waterClick1);
  document.querySelector("#heart_container").removeEventListener("click", heartClick);
  document.querySelector("#firedrop1_container").removeEventListener("click", fireClick1);
  document.querySelector("#firedrop2_container").removeEventListener("click", fireClick1);
  document.querySelector("#firedrop3_container").removeEventListener("click", fireClick1);
  document.querySelector("#firedrop4_container").removeEventListener("click", fireClick1);
  document.querySelector("#firedrop5_container").removeEventListener("click", fireClick1);
  document.querySelector("#firedrop6_container").removeEventListener("click", fireClick1);
  document.querySelector("#firedrop7_container").removeEventListener("click", fireClick1);
  document.querySelector("#firedrop8_container").removeEventListener("click", fireClick1);
  document.querySelector("#firedrop9_container").removeEventListener("click", fireClick1);
  document.querySelector("#firedrop10_container").removeEventListener("click", fireClick1);
  document.querySelector("#firedrop11_container").removeEventListener("click", fireClick1);
}

// game over function
function gameOver() {
  document.querySelector("#game_screen").classList.add("hidden");
  console.log("game over function");
  console.log(gameOver.caller);
  if (gameHasEnded == false) {
    clear();
    document.querySelector("#game_over").classList.remove("hidden");
    // Adding a "Restart Game" button
    document.querySelector("#restart_game_btn").addEventListener("click", restartGame);
    document.querySelector("#quit_game_over").addEventListener("click", exit);
    // changing the game running status
    gameHasEnded = true;
  }
}


// level complete function
function levelComplete() {
  document.querySelector("#game_screen").classList.add("hidden");
  console.log("level complete function");
  if (gameHasEnded == false) {
    console.log(gameHasEnded);
    document.querySelector("#level_complete").classList.remove("hidden");
    clear();
    document.querySelector("#play_again_btn").addEventListener("click", restartGame);
    document.querySelector("#quit_level_complete").addEventListener("click", exit);
    // changing the game running status
    gameHasEnded = true;
  }
  console.log(gameHasEnded);
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
    document.querySelector("#firedrop7_container").classList.add("pause");
    document.querySelector("#firedrop8_container").classList.add("pause");
    document.querySelector("#firedrop9_container").classList.add("pause");
    document.querySelector("#firedrop10_container").classList.add("pause");
    document.querySelector("#firedrop11_container").classList.add("pause");

    // pause the time runner
    document.querySelector("#time_background").classList.add("pause");

    // remove all eventListeners
    document.querySelector("#waterdrop1_container").removeEventListener("click", waterClick1);
    document.querySelector("#waterdrop2_container").removeEventListener("click", waterClick1);
    document.querySelector("#waterdrop3_container").removeEventListener("click", waterClick1);
    document.querySelector("#heart_container").removeEventListener("click", heartClick);
    document.querySelector("#firedrop1_container").removeEventListener("click", fireClick1);
    document.querySelector("#firedrop2_container").removeEventListener("click", fireClick1);
    document.querySelector("#firedrop3_container").removeEventListener("click", fireClick1);
    document.querySelector("#firedrop4_container").removeEventListener("click", fireClick1);
    document.querySelector("#firedrop5_container").removeEventListener("click", fireClick1);
    document.querySelector("#firedrop6_container").removeEventListener("click", fireClick1);
    document.querySelector("#firedrop7_container").removeEventListener("click", fireClick1);
    document.querySelector("#firedrop8_container").removeEventListener("click", fireClick1);
    document.querySelector("#firedrop9_container").removeEventListener("click", fireClick1);
    document.querySelector("#firedrop10_container").removeEventListener("click", fireClick1);
    document.querySelector("#firedrop11_container").removeEventListener("click", fireClick1);
    gameIsPaused = true;

    document.querySelector("#play").addEventListener("click", unPauseGame);

  } 
}

function unPauseGame() {
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
    document.querySelector("#firedrop7_container").classList.remove("pause");
    document.querySelector("#firedrop8_container").classList.remove("pause");
    document.querySelector("#firedrop9_container").classList.remove("pause");
    document.querySelector("#firedrop10_container").classList.remove("pause");
    document.querySelector("#firedrop11_container").classList.remove("pause");

    // unpause the time runner
    document.querySelector("#time_background").classList.remove("pause");

    // add all eventListeners
    document.querySelector("#waterdrop1_container").addEventListener("click", waterClick1);
    document.querySelector("#waterdrop2_container").addEventListener("click", waterClick1);
    document.querySelector("#waterdrop3_container").addEventListener("click", waterClick1);
    document.querySelector("#heart_container").addEventListener("click", heartClick);
    document.querySelector("#firedrop1_container").addEventListener("click", fireClick1);
    document.querySelector("#firedrop2_container").addEventListener("click", fireClick1);
    document.querySelector("#firedrop3_container").addEventListener("click", fireClick1);
    document.querySelector("#firedrop4_container").addEventListener("click", fireClick1);
    document.querySelector("#firedrop5_container").addEventListener("click", fireClick1);
    document.querySelector("#firedrop6_container").addEventListener("click", fireClick1);
    document.querySelector("#firedrop7_container").addEventListener("click", fireClick1);
    document.querySelector("#firedrop8_container").addEventListener("click", fireClick1);
    document.querySelector("#firedrop9_container").addEventListener("click", fireClick1);
    document.querySelector("#firedrop10_container").addEventListener("click", fireClick1);
    document.querySelector("#firedrop11_container").addEventListener("click", fireClick1);
    gameIsPaused = false;

    // Start counter again
    startTimer();
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

  // Reset game run status to not "running"
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



// function that restarts the game after clicking on the exit button
function exit() {
  console.log("exit function");
  location.reload();
}

// function that restarts the game without going back to the welcome screen
function restartOnButton() {
  console.log("restart on button function");

  if (gameHasEnded == false) {
    clear();
    // changing the game running status
    gameHasEnded = true;
  }
 
  setTimeout (restartGame, 500);

  start();
  //console.log(timeLeft + "seconds left");
}

