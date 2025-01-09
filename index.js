import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import{ref} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js" 
import{getDatabase} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"
import{push} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
   databaseURL: "https://reel-app-e941a-default-rtdb.firebaseio.com/"
}
const app = initializeApp(appSettings)
console.log(app)
const database = getDatabase(app)
const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")
const moviesInDB = ref(database, "movies")



addButtonEl.addEventListener("click", function() {
   let inputValue = inputFieldEl.value
  
   console.log(`${inputValue} added to database`)
   push(moviesInDB, inputValue)
})
