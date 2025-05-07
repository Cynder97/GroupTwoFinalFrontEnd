addEventListener("DOMContentLoaded", function(){
    document.querySelector("#addBtn").addEventListener("click", addCourse)
})
//Grabs the data from the form in add_class.html and sends to the database
async function addCourse(){
    const course = {
        title: document.querySelector("#title").value,
        courseID: document.querySelector("#courseID").value,
        instructor: document.querySelector("#instructor").value,
        startDate: document.querySelector("#startDate").value,
        endDate: document.querySelector("#endDate").value,
        description: document.querySelector("#description").value
    }

    const response = await fetch("https://therapeutic-roan-raven.glitch.me/api/courses", {
        method: "POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(course)
    })

    if(response.ok){
        const results = await response.json()
        alert("Added course with ID of " + results._id)

        document.querySelector("form").reset()
    }
    else{
        document.querySelector("#error").innerHTML = "Cannot add course"
    }
}
