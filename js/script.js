//adding animations and positions to the sprites
document.querySelector("#waterdrop1_container").classList.add("fall_waterdrop_1");
document.querySelector("#waterdrop1_sprite").classList.add("pos5");

document.querySelector("#waterdrop2_container").classList.add("fall_waterdrop_2");
document.querySelector("#waterdrop2_sprite").classList.add("pos6");

document.querySelector("#heart_sprite").classList.add("pos21");
document.querySelector("#heart_container").classList.add("fall_heart");


document.querySelector("#firedrop1_sprite").classList.add("pos3");
document.querySelector("#firedrop1_container").classList.add("fall_firedrop_1");

document.querySelector("#firedrop2_sprite").classList.add("pos4");
document.querySelector("#firedrop2_container").classList.add("fall_firedrop_2");

// making the sprites clickable
document.querySelector("#waterdrop1_sprite").addEventListener("click", waterClick1);
document.querySelector(".sprite2").addEventListener("click", fireClick);
document.querySelector(".sprite5").addEventListener("click", heartClick);

function waterClick1() {
  // pop-up message +waterdrop
  // count +1 waterdrop
  document.querySelector("#waterdrop1_container").classList.add("pause");
  document.querySelector("#waterdrop1_sprite").classList.add("disappear");
}


