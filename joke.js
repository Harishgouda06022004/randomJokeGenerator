const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";

let getJoke = () => {
    jokeContainer.classList.remove("fade");
    fetch(url)
        .then(data => data.json())
        .then(item => {
            if (item.type === "single") {
                // Single-part joke
                jokeContainer.textContent = item.joke;
                jokeContainer.classList.add("fade")
            } else if (item.type === "twopart") {
                // Two-part joke
                jokeContainer.textContent = `${item.setup} - ${item.delivery}`;
                jokeContainer.classList.add("fade")
            }
        })
        .catch(err => {
            jokeContainer.textContent = "Oops! Couldn't fetch a joke. Try again later.";
            console.error(err);
        });
};

btn.addEventListener("click", getJoke);
getJoke();
