let username = prompt("Your Username")
while (username === null || username.length <= 1) {
    username = prompt("Your Username")
}
let password = prompt("Your password (must be more than 8 charahters)")
while ( password.length <= 8 || password === null || password.length === 0) {
  password = prompt("Must be more than 8 charahters")
}
let clicks = 0

let a = document.getElementById('hi')

a.textContent = "ChatGpt : Hi " + username + "Im ChatGpt"

let b = document.getElementById('hi1')


b.addEventListener('click',()=>{
    
if (clicks === 0 ) {
    a.textContent = "ChatGpt : How are you????"
    
    b.textContent = "You : Im fine thanks,what about you"
 
}


if (clicks === 1) {
    a.textContent = "ChatGpt : Im fine too thanks what you want to learn,ask me"

    b.textContent = "You : Ok"
}

if (clicks === 2) {
    window.location.href = "https://chatgpt.com"
}

clicks++
})
