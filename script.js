//Registrace na očkování
const age = 65
const nameUser = prompt("Zadej své celé jméno")
const ageUser = Number(prompt("Zadej svůj věk."))


if (ageUser >= age) {
    document.body.innerHTML += "<p>Věk je v pořádku.</p>"

    const loginUser = prompt("Zadej své heslo!")
    {
        
        if (loginUser.length >= 8){
            document.body.innerHTML += "<p>Heslo je v pořádku"
        } else if (loginUser.length < 8){
            document.body.innerHTML += "<p>Slabé heslo</p>"
        }
    }
} else {
    document.body.innerHTML += "<p>Nízký věk uživatele.</p>"
}