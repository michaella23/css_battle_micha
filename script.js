const header = document.getElementById("header")


function loadHeader() {
    header.innerHTML += `
        <img src="../../grid.png" alt="grid with squares of different shades of green, as on GitHub" class="grid-img">
        <h1>30 days of CSS Battle</h1>
        <img src="../../grid.png" alt="grid with squares of different shades of green, as on GitHub" class="grid-img">
    `
}

loadHeader()

const mainContainer = document.getElementById("main-container")
const solutionsOfTheDay = document.querySelectorAll(".solution-of-the-day")

for (let i=1; i<=30; i++) {

    const imgPath = `src/day${[i]}/solution.png`
    const solutionEl = document.createElement("div")
    solutionEl.setAttribute("class", "solution-of-the-day")
    const placeholderEl = document.createElement("div")
    placeholderEl.setAttribute("class", "placeholder")
    const anchorEl = document.createElement("a")
    anchorEl.setAttribute("class", "solution-link")
    anchorEl.href = `src/day${[i]}/index.html`
    anchorEl.textContent = `Day ${i}`
    const imageEl = document.createElement("img")

    fetch(imgPath)
        .then(res => {
            if (res.ok) {
                imageEl.setAttribute("class", "solution-img")
                imageEl.setAttribute("alt", `preview of day${[i]} solution`)
                imageEl.src = imgPath
            } else {
                imageEl.src = ""
            }
        })
        .catch(err => {
            if (err) {
                console.err(('Error fetching the image:', err))
                imageEl.src = ""
            }
        })

    placeholderEl.appendChild(imageEl)
    solutionEl.appendChild(placeholderEl)
    solutionEl.appendChild(anchorEl)

    mainContainer.appendChild(solutionEl)

}