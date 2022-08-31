// get main variables
let input = document.querySelector(".get-repos input");
let spanBtn = document.querySelector(".get-button");
let reposData = document.querySelector(".show-data");


// spanBtn function
spanBtn.onclick = function () {
    getRepos()
}


// get repos function
function getRepos() {
    if (input.value == "") {

        reposData.innerHTML = "<span>Please Write Github Username</span>";

    } else {

        fetch(`https://api.github.com/users/${input.value}/repos`)
            .then((res) => res.json())
            .then((repos) => {

                // empty the span
                reposData.innerHTML = '';
                
                //loop on repositories
                repos.forEach(repo => {
                    
                    // create main div
                    let mainDiv = document.createElement("div")
                    
                    // get name of repos
                    let repoName = document.createTextNode(repo.name)

                    // append name to main div
                    mainDiv.appendChild(repoName)

                    // create repo url anchor
                    let repoUrl = document.createElement("a")

                    // create repo url text
                    let urlText = document.createTextNode(`visit`)

                    // append the repo url text
                    repoUrl.appendChild(urlText)

                    // add href
                    repoUrl.href = `https://github.com/${input.value}/${repo.name}`

                    // set attr blank
                    repoUrl.setAttribute("target","_blank")

                    // append url to the main div
                    mainDiv.appendChild(repoUrl)

                    // create starts count span
                    let starSpan = document.createElement("span")

                    // create the stars count text
                    let starsText = document.createTextNode(`Stars ${repo.stargazers_count}`)

                    // add stars count text to starSpan 
                    starSpan.appendChild(starsText)

                    // append stars count span to main div
                    mainDiv.appendChild(starSpan)

                    // add class on main div
                    mainDiv.className = 'repo-box'

                    // append the  mainn div to container
                    reposData.appendChild(mainDiv)

                });

            });;
    }
}