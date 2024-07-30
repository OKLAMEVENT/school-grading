function add() {
    // alert()
    let members = ["precious", "vicky", "amanda", "samson", "michael"];
    // let dis = document.querySelector(".plus")
    // let add = document.querySelector(".adds").value;
    // members.push("jude", "martins", "osondu")
    // dis.innerHTML = members;
    // console.log(add + dis + add);
    // console.log(members)
     
    let nameInput = document.getElementById("name-input").value;
    let addButton = document.getElementById("add_name");
    members.push(nameInput)
    let home = document.querySelector(".house")
    home.innerHTML = members
    // console.log(members)
    // addButton.addEventListener("click", (members) =>
    // let name = nameInput.members;
    // if (nameInput === (name)) {
    //     alert = ("name already in the list!");
    //     name.innerHTML = nameInput
    // } else{
    //     name.push("daizy");
    //     name.innerHTML = nameInput
    // }
}