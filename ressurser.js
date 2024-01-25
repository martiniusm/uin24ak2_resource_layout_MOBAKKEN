const resources = [
    {
        category: "HTML",
        text: "HTML står for HyperText Markup Language, og er et strukturspråk som brukes for å lage strukturer til nettside- og applikasjonsgrensesnitt.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/html/"
            },
            {
                title: "HTML Living standard",
                url: "https://html.spec.whatwg.org/multipage/"
            },
            {
                title: "HTML.com Tutorials",
                url: "https://html.com/"
            },
        ]
    },
    {
        category: "CSS",
        text: "CSS står for Cascading StyleSheets, og brukes for å sette stilregler på HTML-elementer.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/css/"
            },
            {
                title: "W3C HTML & CSS Standards",
                url: "https://www.w3.org/standards/webdesign/htmlcss.html"
            },
            {
                title: "W3C CSS Validator",
                url: "https://jigsaw.w3.org/css-validator/"
            },
            {
                title: "CSS Tricks",
                url: "https://css-tricks.com/"
            },
        ]
    },
    {
        category: "JavaScript",
        text: "JavaScript er et scriptspråk basert på EcmaScript. JavaScript kjører direkte i nettleseren, og brukes ofte til å manipulere HTML og CSS i webgrensnesnitt.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/js/"
            },
            {
                title: "MDN Web Docs",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        category: "React",
        text: "React er et rammeverk bygget i JavaScript. React bruker komponenter og states for å lage en levende frontend.",
        sources: [
            {
                title: "React documentation",
                url: "https://reactjs.org/docs/getting-started.html"
            },
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/REACT/DEFAULT.ASP"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        category: "Sanity and headless CMS",
        text: "Sanity er et headless CMS som står for innholdsadministrasjon. Innhold hentes inn i applikasjoner via GROQ-spørringer.",
        sources: [
            {
                title: "Sanity documentation",
                url: "https://www.sanity.io/docs"
            },
            {
                title: "OnCrawl: a beginners guide to headless CMS",
                url: "https://www.oncrawl.com/technical-seo/beginners-guide-headless-cms/"
            },
            {
                title: "Section.io: Getting started with Sanity CMS",
                url: "https://www.section.io/engineering-education/getting-started-with-sanity-cms/"
            },
        ]
    },
]
//lager en variabel som henter ut id fra html
const categoryButton = document.getElementById("ButtonTitle") 

//Lager en variabel som skal inneholde html
let category = ""

//Lager en function som skal hente ut kategoriene fra arrayet og legge de inn i html button.
//Lager en teller som skal brukes til å gi hver button en unik id, som senere skal kobles til article.

//Jeg har fått hjelp av medstudent Jonas Andersen Evensen til å lage denne funksjonen.
function displayCategory(){
    let teller = 0
    //Lager en map som skal hente ut kategoriene fra arrayet
    resources.map(resources => {
        teller++
        category += `<li> <button id="${teller}" onClick="DisplayArticle(${teller})" >${resources.category}</button> </li>`
    }
)}
//Kaller på funksjonen
displayCategory()

//Legger inn html i variabelen categoryButton
categoryButton.innerHTML = category
//Lager en variabel som henter ut id fra html
const article = document.getElementById("article")
//Lager en variabel som skal inneholde html
let articleHTML = ""
//
let activeButton = null

function DisplayArticle(tellerID){

    articleHTML = ""
    teller = 0
    resources.map(resources => {
        teller++
        if (teller === tellerID){
            let listHTML = ""
            article.innerHTML = `
            <h2>${resources.category}</h2>
            <p>${resources.text}</p>
             `
            resources.sources.map(source => {
                listHTML += `<li><a href="${source.url}">${source.title}</a></li>`
            })
            article.innerHTML += `<ul>${listHTML}</ul>`
        }   
    })

    const clickedButton = document.getElementById(`${tellerID}`);

    if (activeButton) {
        activeButton.classList.remove("active");
    }

    clickedButton.classList.add("active");
    activeButton = clickedButton;
    
}
DisplayArticle(1)








