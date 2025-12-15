const displayJoke = document.getElementById("joke");
const submitButton = document.getElementById("submitButton");


async function getJoke() {
     document.querySelector('span').classList.add("animate-rotate4s")
    try {
        const res = await fetch("https://official-joke-api.appspot.com/random_joke");
        const data = await res.json();
        console.log(data)
        const jokeQuestion = data.setup || data.joke;   // for single jokes
        const jokeAnswer = data.punchline || "";         // delivery exists only on 2-part jokes

        // Updating jokes
       displayJoke.innerHTML = `${jokeQuestion}<br><br>
                                ${jokeAnswer}`  
      setTimeout(()=>{ document.querySelector('span').classList.remove("animate-rotate4s")},4000)                   
     
    } catch (err) {
        console.log(err.message);
    }
}

getJoke()


submitButton.addEventListener("click",getJoke);
