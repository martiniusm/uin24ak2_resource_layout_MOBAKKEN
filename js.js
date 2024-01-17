let resourcesHTML = "" 

resources.map(resources => resourcesHTML += `
<li><h2 class="h2Title">${resources.category}</h2></li>
<article>
<h2>${resources.category}</h2>
<p>${resources.text}</p>
<li>
    <a href="${resources.sources}">${resources.sources}</a>
</li> 
<li>
    <a href="${resources.sources.title}">${resources.sources.title}</a>
</li>
<li>
    <a href="${resources.sources.title}">${resources.sources.title}</a>
</li>
</article> `)

const resourcesElement = document.getElementsByTagName("ul")
resourcesElement[0].innerHTML = resourcesHTML