var twistCounter = 0;
var selector = document.getElementById("modifiers").value;
var combatSelector = document.getElementById("fight-modifiers").value;
var luck = 6;
var opponentLuck = 6;

const getRandomArrayElement = array => array[Math.floor(Math.random() * array.length)];

const rollD6 = () => Math.floor(Math.random() * 6) + 1;


function selectModifier() {
    selector = document.getElementById("modifiers").value;
    combatSelector = document.getElementById("fight-modifiers").value;
}

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
    let oracle = myOracle(combatSelector);
    let damage = 0;

    if (oracle === "Yes, and...") {
        damage = 3;
        opponentLuck = opponentLuck - damage;
    }
    else if (oracle === "Yes") {
        damage = 2;
        opponentLuck = opponentLuck - damage;
    }
    else if (oracle === "Yes, but...") {
        damage = 1;
        opponentLuck = opponentLuck - damage;
    }
    else if (oracle === "No, but...") {
        damage = -1;
        luck = luck + damage;
    }
    else if (oracle === "No") {
        damage = -2;
        luck = luck + damage;
    }
    else if (oracle === "No, and...") {
        damage = -3;
        luck = luck + damage;
    }
    return damage;
    //console.log(damage, opponentLuck, luck);
}

function victory() {
    let outcome = "continue";
    if (opponentLuck <= 0) {
        outcome = "win";
    }
    else if (luck <= 0) {
        outcome = "lose";
    } 
    return outcome;
}

function renderLuck(luck) {
    let bullet = "";
    for (i = 0; i < luck; i++) {
        bullet += "&#11044";
    }
    return bullet;
}

function resetLuck() {
    luck = 6;
    opponentLuck = 6;
    document.getElementById("char-luck").innerHTML = renderLuck(luck);
    document.getElementById("opponent-luck").innerHTML = renderLuck(opponentLuck);
}

function fight() {
    // invoke combat
    let damage = combat();
    // interpreta damage in messaggio

    if (damage < 0) {
        document.getElementById("combat-outcome").innerHTML = "You Take " + Math.abs(damage) + " Harm";
    }
    else {
        document.getElementById("combat-outcome").innerHTML = "You Cause " + Math.abs(damage) + " Harm";
    }
    // renderLuck
    document.getElementById("char-luck").innerHTML = renderLuck(luck);
    document.getElementById("opponent-luck").innerHTML = renderLuck(opponentLuck);
    
    // controlla vittoria
    // interpreta messaggio di vittoria
    // inibire pulsante combat (opzionale) se finito
    let outcome = victory();

    switch (outcome) {
        case "win":
            document.getElementById("combat-outcome").innerHTML = "You Win!";
            opponentLuck = 6
            document.getElementById("opponent-luck").innerHTML = renderLuck(opponentLuck);
            break;
        case "lose":
            document.getElementById("combat-outcome").innerHTML = "You Lose!";
            document.getElementById("fight-button").setAttribute("disabled");
            break;
    }
}

function startCombat(){
    document.getElementById('start-combat').style.display = 'none';
    document.getElementById("fight-button").removeAttribute("disabled");
    document.getElementById("combat-outcome").innerHTML = "";
    document.getElementById('combat-run').style.display = 'block';
}

function endCombat() {
    document.getElementById("fight-button").removeAttribute("disabled");
    document.getElementById('combat-run').style.display = 'none';
    document.getElementById('start-combat').style.display = 'block';
    resetLuck();
    document.getElementById("combat-outcome").innerHTML = "";
}

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

function editCharSheet() {
    document.getElementById('edit-char-sheet').style.display = 'none';
    document.getElementById('save-char-sheet').style.display = 'inline';
    document.getElementById('name').setAttribute('contenteditable','true');
    document.getElementById('concept').setAttribute('contenteditable','true');
    document.getElementById('skills').setAttribute('contenteditable','true');
    document.getElementById('frailty').setAttribute('contenteditable','true');
    document.getElementById('gear').setAttribute('contenteditable','true');
    document.getElementById('goal-motive').setAttribute('contenteditable','true');
    document.getElementById('nemesis').setAttribute('contenteditable','true');
}

function saveCharSheet() {
    document.getElementById('save-char-sheet').style.display = 'none';
    document.getElementById('edit-char-sheet').style.display = 'inline';
    localStorage.setItem('charSheet', true);
    localStorage.setItem('name', document.getElementById('name').textContent);
    localStorage.setItem('concept', document.getElementById('concept').textContent);
    localStorage.setItem('skills', document.getElementById('skills').textContent);
    localStorage.setItem('frailty', document.getElementById('frailty').textContent);
    localStorage.setItem('gear', document.getElementById('gear').textContent);
    localStorage.setItem('goal-motive', document.getElementById('goal-motive').textContent);
    localStorage.setItem('nemesis', document.getElementById('nemesis').textContent);
    }
     
    if(localStorage.getItem('charSheet')){
        document.getElementById("name").textContent = localStorage.getItem('name');
        document.getElementById("concept").textContent = localStorage.getItem('concept');
        document.getElementById("skills").textContent = localStorage.getItem('skills');
        document.getElementById("frailty").textContent = localStorage.getItem('frailty');
        document.getElementById("gear").textContent = localStorage.getItem('gear');
        document.getElementById("goal-motive").textContent = localStorage.getItem('goal-motive');
        document.getElementById("nemesis").textContent = localStorage.getItem('nemesis');
    }

function resetCharSheet() {
    localStorage.setItem('charSheet', false);
    document.getElementById("name").textContent = "Character Name";
    document.getElementById("concept").textContent = "Concept";
    document.getElementById("skills").textContent = "Skills";
    document.getElementById("frailty").textContent = "Frailty";
    document.getElementById("gear").textContent = "Gear";
    document.getElementById("goal-motive").textContent = "Goal and Motive";
    document.getElementById("nemesis").textContent = "Nemesis";
}

if(!localStorage.getItem('charSheet')) {
    resetCharSheet();
}

document.getElementById("char-luck").innerHTML = renderLuck(luck);
document.getElementById("opponent-luck").innerHTML = renderLuck(opponentLuck);
document.getElementById("twist-counter").innerHTML = twistCounter;
//document.getElementById("luck").innerHTML = '<strong>' + luck + '</strong>';

// get random icon from icon folder
const iconpath = 'assets/icons/';
var myModal = document.getElementById("story-dice");
var myModalBody = document.getElementById("story-dice-body");

//$('.el').append("<img src='"+path+imgs[i]+"'>").hide().fadeIn(2000);

// function generateStoryDice() {

// }

myModal.addEventListener('show.bs.modal', function () {
    let n = document.getElementById("story-dice-n").value
    myModalBody.innerHTML = "";
    for (i = 0; i < n; i++) {
        let icon = getRandomArrayElement(icons);
        let div = document.createElement('div');
        div.className = "col-4 my-1";
        console.log(div);
        div.innerHTML = '<img src="' + iconpath + icon + '" width="100">'
        myModalBody.appendChild(div);
        //<div class="col-md-4"><img src="assets/icons/whale-tail.svg" alt=""></div>
    }
})