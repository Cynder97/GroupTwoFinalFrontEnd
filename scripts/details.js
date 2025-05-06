addEventListener("DOMContentLoaded", async function(){
    const urlparam = new URLSearchParams(window.location.search)
    const courseDatabaseID = urlparam.get("id")
    console.log(courseDatabaseID)

    const response = await fetch("https://therapeutic-roan-raven.glitch.me" + courseDatabaseID)
    const course = await response.json()
    console.log(course)

    let heading = ""
    heading += `Welcome to the ${course.title} page`
    document.querySelector("#header").innerHTML = heading

    let html = ""
    html += `
    <h3>Course ID - ${course.courseID}</h3>
    <h3>Instructor - ${course.instructor}</h3>
    <h3>Description - ${course.description}</h3>
    `
    document.querySelector("#description").innerHTML = html
})
