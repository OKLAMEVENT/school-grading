// const students = {
//     name: "michael", 
//     age: "40", 
//     level: "400"
// }
// students.name = "shegun"
// students.gender = "male"
// console.log(students["name"])
// console.log(students["age"])
// console.log(students["level"])
// console.log(students.gender)
// name: "shegun",
// gender: "male",
// nmme2: "victor",
// gender2: "male",
// name3: "mary",
// gender: "female"
function add() {
    const followers = {
        name: "shegun",
        gender: "male",
        name2: "victor",
        gender2: "male",
        name: "mary",
        gender3:"female"
    }
    // followers.name = "shegun",
    // followers.gender = "male",
    // followers.name2 = "victor",
    // followers.gender2 = "male",
    // followers.name3 = "mary",
    // followers.gender3 = "female"
    const me =document.querySelector(".follower")
    const nameInput = document.getElementById("name-input").value;
    const addName = document.getElementById("add_name")
    me.innerHTML = followers

}
// me.innerHTML = followers
// delete followers.name2
// delete followers.gender2
// console.log(add)