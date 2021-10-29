var twistCounter = 0;
var selector = document.getElementById("modifiers").value;

function selectModifier(selector) {
    selector = document.getElementById("modifiers").value;
}

function getRandomArrayElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function rollD6() {
    let result = Math.floor(Math.random() * 6) + 1;
    return result;
}

function myOracle(modifier){
    var white  = rollD6();
    var black  = rollD6();
    var advantage  = rollD6();
    var disadvantage = rollD6();

    let oracle = "";

    function yesNo (black, white) {
        if (white > black) {
            return "Yes";
        } 
        else if (white === black) {
            twistCounter++;
            return "Yes";
        }
        else {
            return "No";
        } 
    }

    function andBut(black, white) {
        if (black === white) {
            return ", but...";
        }
        else if (black < 4 && white < 4) {
            return ", but...";
        } 
        else if (black > 3 && white > 3) {
            return ", and...";
        } else return "";
    }
  
    if (modifier == "advantage" && advantage > white) {
        return oracle = yesNo(black, advantage) + andBut(black, advantage);
    }
    else if (modifier == "disadvantage" && disadvantage > black) {
        return oracle = yesNo(disadvantage, white) + andBut(disadvantage, white);
    }
    else {
        return oracle = yesNo(black, white) + andBut(black, white);
        }
    }


function resetTwistCounter() {
    if (twistCounter >= 3) {
      twistCounter = 0;
    }
}

document.getElementById("twist-counter").innerHTML = 'twist counter: ' + window.twistCounter;

function invokeOracle(){
    var selector = document.getElementById("modifiers").value;
    var oracle = myOracle(selector);

    document.getElementById("twist-counter").innerHTML = 'twist counter: ' + window.twistCounter;
    document.getElementById("oracle").innerHTML = oracle;

    if (twistCounter == 3) {
        console.log(getRandomArrayElement(subject));

        var subj = getRandomArrayElement(subject);
        var act = getRandomArrayElement(action);

        document.getElementById("subject-action").innerHTML = subj + " " + act;
        //document.getElementById("").innerHTML = getRandomArrayElement(nextScene);
    } else {
        document.getElementById("subject-action").innerHTML = "";
    }

    resetTwistCounter();

}



class Character {
    constructor(
      name, 
      concept, 
      skills, 
      frailty, 
      gear, 
      goal, 
      motive, 
      nemesis) {
        this.name = name;
        this.concept = concept;
        this.skills = skills;
        this.frailty = frailty;
        this.gear = gear;
        this.goal = goal;
        this.motive = motive;
        this.nemesis = nemesis;
        this.luck = 6;
    }
  }


let myChar = new Character(
  "Zahra Nakajima", 
  "Space Smuggler", 
  ["Nimble", "Smart"], 
  "Merciful", 
  ["Knife", 
  "Low O2 Supplement"],
  "obtain unknown technology",
  "save her planet from atmosphere collapse.",
  "The Naturalist Order",
  );

document.getElementById("name").innerHTML = myChar.name;
document.getElementById("concept").innerHTML = myChar.concept;
document.getElementById("skills").innerHTML = myChar.skills.join(', ');
document.getElementById("frailty").innerHTML = myChar.frailty;
document.getElementById("gear").innerHTML = myChar.gear.join(', ');
document.getElementById("goal-motive").innerHTML = myChar.goal  + " / " + myChar.motive;
document.getElementById("nemesis").innerHTML = myChar.nemesis;
document.getElementById("luck").innerHTML = myChar.luck;