function verifyWord() {
    let userInput = document.querySelector("#texto-esquerda");
    let userResult = document.querySelector("#texto-direita");

    if (userInput.value == "Júlio") {
        window.location = "https://juliodeoliveira.github.io/portfolio";
    }
    else if (userInput.value == "Keven") {
        window.location = "https://juliodeoliveira.github.io/portfolio-keven/portfolio";
    }

    else if (userInput.value == "Eduardo") {
        window.location = "https://eduardo21072005.github.io/portifolio/startbootstrap-resume-gh-pages/index.html";

    }

    else if (userInput.value == "Cauã") {
        window.location = "https://cauam1203.netlify.app/";
    }
    else if (userInput.value == "Rhuan") {
        window.location = "https://mostmagic.github.io/OnePage1";
        console.log("Teste");
    } else {
        userResult.innerHTML = "";
    }
}
