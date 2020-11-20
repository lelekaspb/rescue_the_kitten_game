
// start of the game
window.addEventListener("load", welcome);
let points = 0;
let lives = 3;
let durationOfGame = 60;
let timeLeft;
// Variable to hold the setTimeOut in function startTimer, 
// so that it can be cleared at end of game using clearTimeout(timeTracker)
let timeTracker;
let gameIsPaused = false;
let gameHasEnded = false;
let settingsAreOpen = false;
let bgMusic = document.querySelector("#bgMusic");
let clickSound = document.querySelector("#click_sound");
document.querySelector("#score_number").textContent=points;

//List of sounds

//click waterdrop sound
let waterSound = document.querySelector("#waterSound1");

//Click firedrop sound
let fireSound = document.querySelector("#fireSound1");

//click heart sound
let heartSound = document.querySelector("#heartSound");

//level complete sound
let levelCompleteSound = document.querySelector("#levelCompleteSound");

//game over sound
let gameOverSound = document.querySelector("#gameOverSound");

function welcome() {
  document.querySelector("#title_screen").classList.remove("hidden");
  document.querySelector("#game_screen").classList.add("hidden");
  document.querySelector("#instructions").classList.add("hidden");
  document.querySelector("#title_screen_i").addEventListener("click", instructions);
  document.querySelector("#title_screen_btn").addEventListener("click", start);
}

function welcome1() {
  clickSound.play();
  // document.querySelector("#settings_open").classList.add("hidden");
 
   if (settingsAreOpen == true) {
      console.log("settings are set to CLOSE");
      document.querySelector("#settings_open").classList.add("hidden");
      settingsAreOpen = false;
     } else {
      console.log("settings are set to OPEN");
      document.querySelector("#settings_open").classList.remove("hidden");
      settingsAreOpen = true;
     }

  document.querySelector("#title_screen").classList.remove("hidden");
  document.querySelector("#game_screen").classList.add("hidden");
  document.querySelector("#instructions").classList.add("hidden");
  document.querySelector("#title_screen_i").addEventListener("click", instructions);
  document.querySelector("#title_screen_btn").addEventListener("click", start);
}


function instructions() {
  clickSound.play();
  document.querySelector("#title_screen").classList.add("hidden");
  document.querySelector("#game_screen").classList.add("hidden");
  document.querySelector("#instructions").classList.remove("hidden");
  document.querySelector("#instructions_button").addEventListener("click", start);
  document.querySelector("#instructions_button_back").addEventListener("click", welcome1);
}

//start game
function start() {
  clickSound.play();
  console.log("function start");
  document.querySelector("#title_screen").classList.add("hidden");
  document.querySelector("#instructions").classList.add("hidden"); 
  document.querySelector("#game_screen").classList.remove("hidden");
  document.querySelector("#level_complete").classList.add("hidden");
  document.querySelector("#game_over").classList.add("hidden");
  
  clear();
  gameHasEnded = false;
  gameIsPaused = false;
  timeLeft = durationOfGame;
  lives = 3;
  points = 0;
  document.querySelector("#score_number").textContent=points;
  startTimer();
  
    setTimeout( ()=> {
    playBackgroundMusic();
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
    document.querySelector("#no_sound").addEventListener("click", muteSound);
    }, 500);
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

  document.querySelector("#waterdrop3_container").classList.add("fall_waterdrop_2");
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
  console.log("waterdrop click function");
  console.log(waterClick1.caller);
  //this.removeEventListener("click", waterClick1);
  points++;
  //play sound
  if (points < 20) {
    waterSound.currentTime = 0;
    waterSound.play();
  }
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
  } else if (gameIsPaused == false) {
    this.addEventListener("animationend", restart_waterdrop1);
  }
  
}


function heartClick() {
  //console.log(this);
  lives++;
  document.querySelector("#life"+lives).classList.remove("sprite4");
  document.querySelector("#life"+lives).classList.add("sprite3");
  console.log("function heartClick");
  //this.removeEventListener("click", heartClick);
  //play sound
  heartSound.currentTime = 0;
  heartSound.play();
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
  //this.removeEventListener("click", fireClick1);
  //play sound
  if (lives > 0) {
    console.log("lives < 3");
    fireSound.currentTime = 0;
    fireSound.play();
  } 
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
  //setTimeout ( () => {
    console.log("function restart waterdrop1");
    
    //console.log(restart_waterdrop1.caller);
    this.classList.value= "";
    this.offsetHeight;
    this.firstElementChild.classList.remove("disappear");
    // if (gameIsPaused == false) {   
      let randPos = Math.floor(Math.random()*9)+1;
      this.classList.add("position" + randPos);
      this.classList.add("fall_waterdrop_1");
  // }
    document.querySelector("#plus_waterdrop").classList.remove("flash");
    console.log(timeLeft + "seconds left");
  //}, 2000);
}


function restart_heart() {
  console.log("restart heart");
  setTimeout( ()  => {
    this.classList.value= "";
    this.offsetHeight;
    this.firstElementChild.classList.remove("disappear");
    let randPos = Math.floor(Math.random()*9)+1;
    this.classList.add("position" + randPos);
    this.classList.add("fall_heart");
    document.querySelector("#plus_heart").classList.remove("flash");
  }, 2000); 
}




function playBackgroundMusic() {
  console.log("function playBackgroundMusic()");
  bgMusic.currentTime = 0;
  bgMusic.play();
}

function pauseBackgroundMusic() {
  console.log("function pauseBackgroundMusic");
  bgMusic.pause();
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
  //this.removeEventListener("animationiteration", newPosForWater); //Magnus solution
  this.classList.value = "";
  this.offsetHeight;
  // if (gameIsPaused == false) {  
    this.classList.add("fall_waterdrop_1");
    let randPos = Math.floor(Math.random()*9)+1;
    this.classList.add("position" + randPos);
  // }
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
      if (timeLeft == 0) { 
        if (points >= 20) {
          //if no time left and points >= 20, call levelComplete
          levelComplete();
        }else {
          //if no time left and points < 20, call the game over function
          gameOver();
        }

      } else {
        //if there is time left, start a timeout of 1 second
        timeTracker = setTimeout(showTime, 1000);
      }
   } 
}


function showTime() {
  console.log("function showtime");
  //if there is still time left
  if (timeLeft > 0) {
    timeLeft--;
    console.log("time left:" + timeLeft);
    //then, call the startTimer function again (so that it can run one time more)
    startTimer();
  } else {
    //or if no time left - call the gameOver function
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
  clearTimeout(timeTracker);
  stopSounds();
  gameOver.currentTime = 0;
  gameOverSound.play();
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
  //timeLeft = 0;
  document.querySelector("#game_screen").classList.add("hidden");
  console.log("level complete function");
  clearTimeout(timeTracker);
  stopSounds();
  levelCompleteSound.currentTime = 0;
  levelCompleteSound.play();
  //playLevelComplete();
  if (gameHasEnded == false) {
    document.querySelector("#level_complete").classList.remove("hidden");
    //clear();
    document.querySelector("#play_again_btn").addEventListener("click", restartGame);
    document.querySelector("#quit_level_complete").addEventListener("click", exit);
    // changing the game running status
    gameHasEnded = true;
  }
}


// function that opens detailed settings board
function openSettings() {
  clickSound.play();
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

// stop sounds function
function stopSounds() {
  waterSound.pause();
  fireSound.pause();
  heartSound.pause();
  bgMusic.pause();
  bgMusic.currentTime = 0;
  //bgMusic.removeEventListener("ended", playBackgroundMusic);
  gameOverSound.pause ();
  //gameOverSound.removeEventListener("ended", playGameOverRiff);
  levelCompleteSound.pause ();
  //levelCompleteSound.removeEventListener("ended", playLevelCompleteSound);
}




//mute background sound function
function muteSound() {
  console.log("function muteSound()");
  if(bgMusic.muted == false) {
      clickSound.play();
      bgMusic.muted = true;
      gameOverSound.muted = true;
      levelCompleteSound.muted = true;
  } 
  document.querySelector("#sound").addEventListener("click", unMuteSound);
}

function unMuteSound() {
  clickSound.play();
  bgMusic.muted = false;
  gameOverSound.muted = false;
  levelCompleteSound.muted = false;
}

// pause function
function pauseGame() {
  if (gameIsPaused == false) {
    clickSound.play();
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

    //pause the background music
    bgMusic.pause();

    // remove all eventListeners
    document.querySelector("#waterdrop1_container").removeEventListener("click", waterClick1);
    document.querySelector("#waterdrop2_container").removeEventListener("click", waterClick1);
    document.querySelector("#waterdrop3_container").removeEventListener("click", waterClick1);
    
    document.querySelector("#waterdrop1_container").removeEventListener("animationiteration", newPosForWater);
    document.querySelector("#waterdrop2_container").removeEventListener("animationiteration", newPosForWater);
    document.querySelector("#waterdrop3_container").removeEventListener("animationiteration", newPosForWater);
    document.querySelector("#waterdrop1_container").removeEventListener("animationend", restart_waterdrop1);
    document.querySelector("#waterdrop2_container").removeEventListener("animationend", restart_waterdrop1);
    document.querySelector("#waterdrop3_container").removeEventListener("animationend", restart_waterdrop1);

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
    clickSound.play();
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

    //play the background music
    bgMusic.play();

    // add all eventListeners

    document.querySelector("#waterdrop1_container").addEventListener("animationiteration", newPosForWater);
    document.querySelector("#waterdrop2_container").addEventListener("animationiteration", newPosForWater);
    document.querySelector("#waterdrop3_container").addEventListener("animationiteration", newPosForWater);
    document.querySelector("#waterdrop1_container").addEventListener("animationend", restart_waterdrop1);
    document.querySelector("#waterdrop2_container").addEventListener("animationend", restart_waterdrop1);
    document.querySelector("#waterdrop3_container").addEventListener("animationend", restart_waterdrop1);

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
  clickSound.play();
  console.log("restart game function");
  stopSounds();

  // Reset game run status to not "running"
  // gameHasEnded = false;

  // refilling the UI hearts (lives)
  document.querySelector("#life1").classList.remove("sprite4");
  document.querySelector("#life2").classList.remove("sprite4");
  document.querySelector("#life3").classList.remove("sprite4");
  document.querySelector("#life1").classList.add("sprite3");
  document.querySelector("#life2").classList.add("sprite3");
  document.querySelector("#life3").classList.add("sprite3");

  // Calling the start function
  start();
}



// function that reloads the game after clicking on the exit button - to welcome screen
function exit() {
  clickSound.play();
  // refilling the UI hearts (lives)
  document.querySelector("#life1").classList.remove("sprite4");
  document.querySelector("#life2").classList.remove("sprite4");
  document.querySelector("#life3").classList.remove("sprite4");
  document.querySelector("#life1").classList.add("sprite3");
  document.querySelector("#life2").classList.add("sprite3");
  document.querySelector("#life3").classList.add("sprite3");
  // document.querySelector("#game_screen").classList.add("hidden");
  console.log("exit function");
  stopSounds();
  // location.reload();
  welcome1();
}

// function that restarts the game without going back to the welcome screen
function restartOnButton() {
  clickSound.play();
  console.log("restart on button function");
  clear();
  clearTimeout(timeTracker);
  stopSounds();

  // refilling the UI hearts (lives)
  document.querySelector("#life1").classList.remove("sprite4");
  document.querySelector("#life2").classList.remove("sprite4");
  document.querySelector("#life3").classList.remove("sprite4");
  document.querySelector("#life1").classList.add("sprite3");
  document.querySelector("#life2").classList.add("sprite3");
  document.querySelector("#life3").classList.add("sprite3");

  start();
}

