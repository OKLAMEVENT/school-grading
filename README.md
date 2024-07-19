ction check_score() {
    // let button = document.querySelector(".check");
    let score = document.querySelector(".score").value;
    let grade = document.querySelector(".grading");
    // console.log(input);
    if(score >= 75 && score <=100) {
        let check_score = ("you got A");
        grade.innerHTML = check_score;
        grade.style.backgroundColor = "black";
        grade.style.color = "white";
        // score.style.display = "none";
    } else if (score >= 65 && score<= 74) {
        let check_score = ("you got B");
        grade.innerHTML = check_score;
        grade.style.backgroundColor = "black";
        grade.style.color = "white";
        // score.style.display = "none";
    } else if(score >= 55 && score <= 64){
        let check_score = ("you got C");
        grade.innerHTML = check_score;
        grade.style.backgroundColor = "black";
        grade.style.color = "white";
        // score.style.display = "none";
    } else if (score>=45 && score <= 54){
        let check_score = ("your got D");
        grade.innerHTML = check_score;
        grade.style.backgroundColor = "black";
        grade.style.color = "white";
        // score.style.display = "none";
    }else if (score >= 40 && score <= 44){
        let check_score = ("you got E");
        grade.innerHTML = check_score;
        grade.style.backgroundColor = "blue";
        grade.style.color = "white";
        // score.style.display = "none";
    } else if(score >= 0 && score <= 40) {
        let check_score = ("you got F");
        grade.innerHTML = check_score;
        grade.style.backgroundColor = "red";
        grade.style.color = "black";
        // score.style.display = "none";
    } else {
        let check_score = ("are you sure you wrote the test?");
        grade.innerHTML = check_score;
        grade.style.backgroundColor = "#6d545475";
        grade.style.color = "white";
        grade.style.width = "400px";
        grade.style.height = "100px";
        grade.style.fontSize = "30px"
        
    }
}
// let x = 2;
// switch(x) {
//     case 1:
//         console.log("1 here");
//         break;
//     case 2: 
//         console.log("2 here");
//         break;
//     case 3:
//         console.log("4 here");
//         break;
//     default:
//         console.log("default case")
// }
// let date = new Date();
// let days = date.getDay();
// let day = document.querySelector(".day")
// // console.log(date.getDay());
// switch(days){
//     case 0:
//         let day_0 = "sunday";
//         day.innerHTML = day_0;
//         break;
//     case 1:
//         let day_1 = ("monday");
//         day.innerHTML = day_1;
//         break;
//     case 2:
//         let day_2 = ("tuesday");
//         day.innerHTML = day_2;
//         break
//     case 3:
//         let day_3 = ("wednesday");
//         day.innerHTML = day_3;
//         break;
//     case 4:
//         let day_4 = ("thursday");
//         day.innerHTML = day_4;
//         break;
//     case 5:
//         let day_5 = ("friday");
//         day.innerHTML = day_5
//         break;
//     case 6:
//         let day_6 = ("saturday");
//         day.innerHTML = day_6
//         break;
//     default:
//         let other = ("default case")
        
// }
let date = new Date();
let days = date.getDay();
let day = document.querySelector(".day")
if(days === 0) {
    let day_0 = "sunday";
    day.innerHTML = day_0;
}else if(days === 1){
    let day_1 = "monday";
        day.innerHTML = day_1;
}else if(days === 2) {
    let day_2 = "tuesday";
        day.innerHTML = day_2;
}else if(days === 3){
    let day_3 = "wednesday";
        day.innerHTML = day_3;
}else if(days === 4) {
    let day_4 = "thursday";
        day.innerHTML = day_4;
}else if (days === 5) {
    let day_5 = "friday";
        day.innerHTML = day_5;
}else if (days === 6) {
    let day_6 = "saturday";
        day.innerHTML = day_6;
}else {
    let days = "others";
     day.innerHTML = "choose day";
}
