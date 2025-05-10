addEventListener("DOMContentLoaded", async function () {
    const urlparam = new URLSearchParams(window.location.search)
    const courseDatabaseID = urlparam.get("id")
    console.log(courseDatabaseID)

    const response = await fetch("https://therapeutic-roan-raven.glitch.me/api/courses/" + courseDatabaseID)
    const course = await response.json()
    console.log(course)

    let html = ""
    html += `
    <h3>Course ID - ${course.courseID}</h3>
    <h3>Instructor - ${course.instructor}</h3>
    <h3>Description - ${course.description}</h3>
    <button id="Add${course.courseID}" type="button" onclick="addToCart()">Add To Cart</button>
    `
    document.querySelector("#list_of_enrolled_courses").innerHTML = html
})

function addToCart() {
    console.log("Works")
}