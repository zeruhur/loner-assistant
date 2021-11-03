var twistCounter = 0;
var selector = document.getElementById("modifiers").value;

function selectModifier(selector) {
    selector = document.getElementById("modifiers").value;
}

const getRandomArrayElement = array => array[Math.floor(Math.random() * array.length)];

const rollD6 = () => Math.floor(Math.random() * 6) + 1;

function resetOracle() {
    document.getElementById("oracle").className = "d-none";
    document.getElementById("subject-action").className = "d-none";
}

function resetScene() {
    document.getElementById("next-scene").className = "d-none";
}

function resetHook() {
    document.getElementById("hook-p").className = "d-none";
}

function resetOpenQuestion() {
    document.getElementById("open-question").className = "d-none";
}

function resetTwistCounter() {
    if (twistCounter >= 3) {
      twistCounter = 0;
    }
}

function myOracle(modifier){
    let white  = rollD6();
    let black  = rollD6();
    let advantage  = rollD6();
    let disadvantage = rollD6();

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

function combat() {
    let oracle = myOracle(selector);
    let damage = 0;
    let hit = 0;

    if (oracle === "Yes, and...") {
        hit = 3;
    }
    else if (oracle === "Yes") {
        hit = 2;
    }
    else if (oracle === "Yes, but...") {
        hit = 1;
    }
    else if (oracle === "No, but...") {
        damage = 1;
    }
    else if (oracle === "No") {
        damage = 2;
    }
    else if (oracle === "No, and...") {
        damage = 3;
    }

}


document.getElementById("twist-counter").innerHTML = window.twistCounter;

function invokeOracle(){
    let selector = document.getElementById("modifiers").value;
    let oracle = myOracle(selector);

    resetHook();
    resetScene();
    resetOpenQuestion();
    document.getElementById("oracle").className = "display-2 d-block";

    document.getElementById("twist-counter").innerHTML = twistCounter;
    document.getElementById("oracle").innerHTML = oracle;
    

    if (twistCounter == 3) {
        document.getElementById("twist-counter").className = "badge bg-danger";

        var subj = getRandomArrayElement(subject);
        var act = getRandomArrayElement(action);

        document.getElementById("subject-action").className = "d-block";
        document.getElementById("twist").innerHTML = subj + " " + act;
    } else {
        document.getElementById("subject-action").className = "d-none";
        document.getElementById("twist-counter").className = "badge bg-dark";
    }

    resetTwistCounter();

}

function askNextScene() {
    resetOracle();
    resetScene();
    resetHook();
    resetOpenQuestion();
    document.getElementById("next-scene").className = "d-block";
    document.getElementById("nxt-scn").innerHTML = "The next scene is <strong>" + getRandomArrayElement(nextScene) + "</strong>";
}

function generateHook() {
    resetOracle();
    resetScene();
    resetHook();
    resetOpenQuestion();

    document.getElementById("hook-p").className = "d-block";

    document.getElementById("who").innerHTML = "<strong>Who?</strong> " + getRandomArrayElement(who);
    document.getElementById("what").innerHTML = "<strong>What?</strong> " + getRandomArrayElement(what);
    document.getElementById("why").innerHTML = "<strong>Why?</strong> " + getRandomArrayElement(why);
    document.getElementById("where").innerHTML = "<strong>Where?</strong> " + getRandomArrayElement(where);
    document.getElementById("how").innerHTML = "<strong>How?</strong> " + getRandomArrayElement(how);
    document.getElementById("obstacle").innerHTML = "<strong>Obstacle?</strong> " + getRandomArrayElement(obstacle);

}

function askOpenQuestion() {
    resetOracle();
    resetScene();
    resetHook();
    resetOpenQuestion();

    document.getElementById("open-question").className = "d-block";

    document.getElementById("verb").innerHTML = getRandomArrayElement(verbs);
    document.getElementById("adjective").innerHTML = getRandomArrayElement(adjectives);
    document.getElementById("noun").innerHTML = getRandomArrayElement(nouns);

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
document.getElementById("skills").innerHTML = myChar.skills.map(n => "<li>" + n + "</li>").join("");
document.getElementById("frailty").innerHTML = myChar.frailty;
document.getElementById("gear").innerHTML = myChar.gear.map(n => "<li>" + n + "</li>").join("");
document.getElementById("goal-motive").innerHTML = myChar.goal  + " / " + myChar.motive;
document.getElementById("nemesis").innerHTML = myChar.nemesis;
document.getElementById("luck").innerHTML = myChar.luck;