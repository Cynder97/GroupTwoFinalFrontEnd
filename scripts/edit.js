//Grabs the data from the form in edit.html
//Need to get backend setup so the links can be placed properly
addEventListener("DOMContentLoaded", async function(){
    document.querySelector("#updatebttn").addEventListener("click", updateCourse)
    const urlparam = new URLSearchParams(window.location.search)
    const courseDataBaseID = urlparam.get('id')
    const response = await fetch("https://therapeutic-roan-raven.glitch.me/api/courses/" + courseDataBaseID)
    if(response.ok){
        let course = await response.json()
        document.querySelector("#courseDatabaseId").value = course._id
        document.querySelector("#title").value = course.title
        document.querySelector("#courseID").value = course.courseID
        document.querySelector("#instructor").value = course.instructor
        document.querySelector("#startDate").value = course.startDate.substring(0,10)
        document.querySelector("#endDate").value = course.endDate.substring(0,10)
        document.querySelector("#description").value = course.description
    }
})
//Sends the updated data to the database
async function updateCourse(){
    const courseDataBaseID = document.querySelector("#courseDataBaseId").value
    const course = {
        _id: document.querySelector("#courseDatabaseId").value,
        title: document.querySelector("#title").value,
        courseID: document.querySelector("#courseID").value,
        instructor: document.querySelector("#instructor").value,
        startDate: document.querySelector("#startDate").value,
        endDate: document.querySelector("#endDate").value,
        description: document.querySelector("#description").value
    }
    const response = await fetch("https://therapeutic-roan-raven.glitch.me/api/courses/" + courseDataBaseID,{
        method: "PUT",
        headers: {"Content-Type" : "application/json"},
    body: JSON.stringify(course)

})

if(response.ok){
    alert("Updated Course")
}
else{
    document.querySelector("#error").innerHTML = "Cannot update course"
}

}
