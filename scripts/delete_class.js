addEventListener("DOMContentLoaded", async function(){
    document.querySelector("#deletebtn").addEventListener("click", deleteCourse);
    getAllCourses()
})

async function getAllCourses(){
    const response = await fetch("https://therapeutic-roan-raven.glitch.me/api/courses")
    if(response.ok){
        const courses = await response.json()
        let html = ""
        for(let course of courses){
            html += `<option value="${course._id}">${course.title}</option>`
        }
        document.querySelector("#courseDropDown").innerHTML = html
    }
}

async function deleteCourse(){
    const courseID = document.querySelector("#courseDropDown option:ckecked").value
    const response = await fetch("https://therapeutic-roan-raven.glitch.me/api/courses/" + courseID, {
        method: "DELETE"
    }) 
    if(response.ok){
        getAllCourses()
    }
    else{
        document.querySelector("error").innerHTML = "Cannot delete course"
    }
}
