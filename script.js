const btnEl = document.getElementById("btn")/*here we have written 
btnEl = document.getElementById("btn") it means that we are going to 
write JS for button .*/
const jokeEl = document.getElementById("joke")

const apiKey = "V1CZUukAgO5SCBiLL0PI6obCeXWSr29S042scfCq";

const options ={
    method: "GET",
    headers:{
        "X-Api-Key": apiKey,
    },
}

const apiURL = 'https://api.api-ninjas.com/v1/dadjokes?limit=1'

async function getJoke(){ 
    jokeEl.innerText= "updating..."
    btnEl.disabled ="true"
    btnEl.innerText="Loading..."
    const response = await fetch(apiURL, options)
    const data =await response.json()
    btnEl.disabled ="false"
    btnEl.innerText="Tell me a joke"

    jokeEl.innerText= data[0].joke
}



btnEl.addEventListener("click", getJoke)


