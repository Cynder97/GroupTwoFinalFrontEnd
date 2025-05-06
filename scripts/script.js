addEventListener("DOMContentLoaded", async function(){
    const response = await fetch("https://therapeutic-roan-raven.glitch.me/api/courses")
    const courses = await response.json()

    let html = ""
    for(let course of courses){
        let courseDatabaseID = course._id
        html +=`<li>${course.title} - ${course.courseID} - <a href="details.html?id=${courseDatabaseID}">Details</a> - <a href="edit.html?id=${courseDatabaseID}">Edit Course</a></li>`
    }

    document.querySelector("#list_of_enrolled_courses").innerHTML = html

    document.querySelector("#logout").onclick = function() {
      window.location.href = "/login.html";
    };
})
