const app = Vue.createApp({
  //data, functions
  data() {
      return {
          url: 'https://www.italiantranslationalliance.org',
          showBooks: true,
          characters : [
            {

            }
          ],
          name: "Zahra Nakajima", 
          concept:  "Space Smuggler", 
          skills:  ["Nimble", "Smart"], 
          frailty:  "Merciful", 
          gear:  ["Knife", "Low O2 Supplement"],
          goal:  "obtain unknown technology",
          motive:  "save her planet from atmosphere collapse.",
          nemesis:  "The Naturalist Order",
          luck: 6
      }
  },
  methods: {
      toggleShowBooks() {
          this.showBooks = !this.showBooks
      },
      toggleFav(book) {
          book.isFav = !book.isFav
      },
  },
  computed: {
      filteredBooks() {
          return this.books.filter((book) => book.isFav)
      }
  }
})

app.mount('#app')






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

  /*
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

document.getElementById("name").innerHTML = myChar.name
document.getElementById("concept").innerHTML = myChar.concept
document.getElementById("skills").innerHTML = myChar.skills.join(', ')
document.getElementById("frailty").innerHTML = myChar.frailty
document.getElementById("gear").innerHTML = myChar.gear.join(', ')
document.getElementById("goal-motive").innerHTML = myChar.goal  + " / " + myChar.motive
document.getElementById("nemesis").innerHTML = myChar.nemesis
document.getElementById("luck").innerHTML = myChar.luck
*/