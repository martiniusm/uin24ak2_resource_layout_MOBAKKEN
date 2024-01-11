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
function generateCategoryList() {
    var categoryList = document.getElementById("categoryList");

    // Loop through resources array
    for (var i = 0; i < resources.length; i++) {
        // Create closure to capture correct category value
        (function () {
            var category = resources[i].category;

            // Create list item for each category
            var listItem = document.createElement("li");

            // Create heading for the category
            var heading = document.createElement("h2");
            heading.textContent = category;
            heading.onclick = function() {
                toggleInfo(category);
            };

            // Create div for additional information
            var infoDiv = document.createElement("div");
            infoDiv.id = category + "Info";
            infoDiv.className = "hidden";

            // Create paragraph for text
            var textParagraph = document.createElement("p");
            textParagraph.textContent = resources[i].text;

            // Create list for sources
            var sourcesList = document.createElement("ul");

            // Loop through sources array
            for (var j = 0; j < resources[i].sources.length; j++) {
                var source = resources[i].sources[j];

                // Create list item for each source
                var sourceItem = document.createElement("li");

                // Create anchor for the source link
                var sourceLink = document.createElement("a");
                sourceLink.href = source.url;
                sourceLink.textContent = source.title;

                // Append source link to list item
                sourceItem.appendChild(sourceLink);

                // Append list item to sources list
                sourcesList.appendChild(sourceItem);
            }

            // Append heading, text, and sources list to info div
            infoDiv.appendChild(textParagraph);
            infoDiv.appendChild(sourcesList);

            // Append heading and info div to list item
            listItem.appendChild(heading);
            listItem.appendChild(infoDiv);

            // Append list item to category list
            categoryList.appendChild(listItem);
        })();
    }
}

// Call the function to generate the category list
generateCategoryList();

// Function to toggle the visibility of the additional information
function toggleInfo(category) {
    var infoDiv = document.getElementById(category + "Info");
    if (infoDiv.className === "hidden") {
        infoDiv.className = "visible";
    } else {
        infoDiv.className = "hidden";
    }
}


