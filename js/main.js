// Add Active Class To Buttons

let btn = document.querySelectorAll("button");
let custom = document.querySelector("#custom");


// Add Bill And People Values
let bill = document.querySelector("#bill");
let people = document.querySelector("#people");
let tipNum = document.querySelector("#tip-number");
let totalNum = document.querySelector("#total-number");

let mainMoney = 0;
let addMoney = 0;


btn[0].onclick = function () {
    for (i = 0; i < btn.length; i++) {
        if (btn[i].classList.contains("active-button")) {
            btn[i].classList.remove("active-button");
        }
    }
    btn[0].classList.add("active-button");
    mainMoney = +bill.value / +people.value;
    if (btn[0].classList.contains("active-button")) {
        addMoney = mainMoney * 5 / 100;
    } else if (btn[1].classList.contains("active-button")) {
        addMoney = mainMoney * 10 / 100;
    } else if (btn[2].classList.contains("active-button")) {
        addMoney = mainMoney * 15 / 100;
    } else if (btn[3].classList.contains("active-button")) {
        addMoney = mainMoney * 25 / 100;
    } else if (btn[4].classList.contains("active-button")) {
        addMoney = mainMoney * 50 / 100;
    } else if (custom.value != "") {
        addMoney = mainMoney * +custom.value / 100;
    } else {
        addMoney = 0;
    }    
    if (addMoney.toFixed(2) != NaN && addMoney.toFixed(2) != Infinity && (addMoney + mainMoney).toFixed(2) != NaN && (addMoney + mainMoney).toFixed(2) != Infinity) {
        tipNum.innerHTML = `<h1>$${addMoney.toFixed(2)}</h1>`; 
        totalNum.innerHTML = `<h1>$${(addMoney + mainMoney).toFixed(2)}</h1>`;
    } else {
        tipNum.innerHTML = `<h1>$0.00</h1>`;
        totalNum.innerHTML = `<h1>$0.00</h1>`;
    }
}

btn[1].onclick = function () {
    for (i = 0; i < btn.length; i++) {
        if (btn[i].classList.contains("active-button")) {
            btn[i].classList.remove("active-button");
        }
    }
    btn[1].classList.add("active-button");
    mainMoney = +bill.value / +people.value;
    if (btn[0].classList.contains("active-button")) {
        addMoney = mainMoney * 5 / 100;
    } else if (btn[1].classList.contains("active-button")) {
        addMoney = mainMoney * 10 / 100;
    } else if (btn[2].classList.contains("active-button")) {
        addMoney = mainMoney * 15 / 100;
    } else if (btn[3].classList.contains("active-button")) {
        addMoney = mainMoney * 25 / 100;
    } else if (btn[4].classList.contains("active-button")) {
        addMoney = mainMoney * 50 / 100;
    } else if (custom.value != "") {
        addMoney = mainMoney * +custom.value / 100;
    } else {
        addMoney = 0;
    }    
    if (addMoney.toFixed(2) != NaN && addMoney.toFixed(2) != Infinity && (addMoney + mainMoney).toFixed(2) != NaN && (addMoney + mainMoney).toFixed(2) != Infinity) {
        tipNum.innerHTML = `<h1>$${addMoney.toFixed(2)}</h1>`; 
        totalNum.innerHTML = `<h1>$${(addMoney + mainMoney).toFixed(2)}</h1>`;
    } else {
        tipNum.innerHTML = `<h1>$0.00</h1>`;
        totalNum.innerHTML = `<h1>$0.00</h1>`;
    }
}

btn[2].onclick = function () {
    for (i = 0; i < btn.length; i++) {
        if (btn[i].classList.contains("active-button")) {
            btn[i].classList.remove("active-button");
        }
    }
    btn[2].classList.add("active-button");
    mainMoney = +bill.value / +people.value;
    if (btn[0].classList.contains("active-button")) {
        addMoney = mainMoney * 5 / 100;
    } else if (btn[1].classList.contains("active-button")) {
        addMoney = mainMoney * 10 / 100;
    } else if (btn[2].classList.contains("active-button")) {
        addMoney = mainMoney * 15 / 100;
    } else if (btn[3].classList.contains("active-button")) {
        addMoney = mainMoney * 25 / 100;
    } else if (btn[4].classList.contains("active-button")) {
        addMoney = mainMoney * 50 / 100;
    } else if (custom.value != "") {
        addMoney = mainMoney * +custom.value / 100;
    } else {
        addMoney = 0;
    }    
    if (addMoney.toFixed(2) != NaN && addMoney.toFixed(2) != Infinity && (addMoney + mainMoney).toFixed(2) != NaN && (addMoney + mainMoney).toFixed(2) != Infinity) {
        tipNum.innerHTML = `<h1>$${addMoney.toFixed(2)}</h1>`; 
        totalNum.innerHTML = `<h1>$${(addMoney + mainMoney).toFixed(2)}</h1>`;
    } else {
        tipNum.innerHTML = `<h1>$0.00</h1>`;
        totalNum.innerHTML = `<h1>$0.00</h1>`;
    }
}

btn[3].onclick = function () {
    for (i = 0; i < btn.length; i++) {
        if (btn[i].classList.contains("active-button")) {
            btn[i].classList.remove("active-button");
        }
    }
    btn[3].classList.add("active-button");
    mainMoney = +bill.value / +people.value;
    if (btn[0].classList.contains("active-button")) {
        addMoney = mainMoney * 5 / 100;
    } else if (btn[1].classList.contains("active-button")) {
        addMoney = mainMoney * 10 / 100;
    } else if (btn[2].classList.contains("active-button")) {
        addMoney = mainMoney * 15 / 100;
    } else if (btn[3].classList.contains("active-button")) {
        addMoney = mainMoney * 25 / 100;
    } else if (btn[4].classList.contains("active-button")) {
        addMoney = mainMoney * 50 / 100;
    } else if (custom.value != "") {
        addMoney = mainMoney * +custom.value / 100;
    } else {
        addMoney = 0;
    }    
    if (addMoney.toFixed(2) != NaN && addMoney.toFixed(2) != Infinity && (addMoney + mainMoney).toFixed(2) != NaN && (addMoney + mainMoney).toFixed(2) != Infinity) {
        tipNum.innerHTML = `<h1>$${addMoney.toFixed(2)}</h1>`; 
        totalNum.innerHTML = `<h1>$${(addMoney + mainMoney).toFixed(2)}</h1>`;
    } else {
        tipNum.innerHTML = `<h1>$0.00</h1>`;
        totalNum.innerHTML = `<h1>$0.00</h1>`;
    }
}

btn[4].onclick = function () {
    for (i = 0; i < btn.length; i++) {
        if (btn[i].classList.contains("active-button")) {
            btn[i].classList.remove("active-button");
        }
    }
    btn[4].classList.add("active-button");
    mainMoney = +bill.value / +people.value;
    if (btn[0].classList.contains("active-button")) {
        addMoney = mainMoney * 5 / 100;
    } else if (btn[1].classList.contains("active-button")) {
        addMoney = mainMoney * 10 / 100;
    } else if (btn[2].classList.contains("active-button")) {
        addMoney = mainMoney * 15 / 100;
    } else if (btn[3].classList.contains("active-button")) {
        addMoney = mainMoney * 25 / 100;
    } else if (btn[4].classList.contains("active-button")) {
        addMoney = mainMoney * 50 / 100;
    } else if (custom.value != "") {
        addMoney = mainMoney * +custom.value / 100;
    } else {
        addMoney = 0;
    }    
    if (addMoney.toFixed(2) != NaN && addMoney.toFixed(2) != Infinity && (addMoney + mainMoney).toFixed(2) != NaN && (addMoney + mainMoney).toFixed(2) != Infinity) {
        tipNum.innerHTML = `<h1>$${addMoney.toFixed(2)}</h1>`; 
        totalNum.innerHTML = `<h1>$${(addMoney + mainMoney).toFixed(2)}</h1>`;
    } else {
        tipNum.innerHTML = `<h1>$0.00</h1>`;
        totalNum.innerHTML = `<h1>$0.00</h1>`;
    }
}

custom.onfocus = function () {
    for (i = 0; i < btn.length; i++) {
        if (btn[i].classList.contains("active-button")) {
            btn[i].classList.remove("active-button")
        }
    }
}

custom.onblur = function () {
    mainMoney = +bill.value / +people.value;
    if (btn[0].classList.contains("active-button")) {
        addMoney = mainMoney * 5 / 100;
    } else if (btn[1].classList.contains("active-button")) {
        addMoney = mainMoney * 10 / 100;
    } else if (btn[2].classList.contains("active-button")) {
        addMoney = mainMoney * 15 / 100;
    } else if (btn[3].classList.contains("active-button")) {
        addMoney = mainMoney * 25 / 100;
    } else if (btn[4].classList.contains("active-button")) {
        addMoney = mainMoney * 50 / 100;
    } else if (custom.value != "") {
        addMoney = mainMoney * +custom.value / 100;
    } else {
        addMoney = 0;
    }    
    if (addMoney.toFixed(2) != NaN && addMoney.toFixed(2) != Infinity && (addMoney + mainMoney).toFixed(2) != NaN && (addMoney + mainMoney).toFixed(2) != Infinity) {
        tipNum.innerHTML = `<h1>$${addMoney.toFixed(2)}</h1>`; 
        totalNum.innerHTML = `<h1>$${(addMoney + mainMoney).toFixed(2)}</h1>`;
    } else {
        tipNum.innerHTML = `<h1>$0.00</h1>`;
        totalNum.innerHTML = `<h1>$0.00</h1>`;
    }
}

// Add Bill And People Values
// let bill = document.querySelector("#bill");
// let people = document.querySelector("#people");
// let tipNum = document.querySelector("#tip-number");
// let totalNum = document.querySelector("#total-number");



bill.onblur =  function () {
    mainMoney = +bill.value / +people.value;
    if (btn[0].classList.contains("active-button")) {
        addMoney = mainMoney * 5 / 100;
    } else if (btn[1].classList.contains("active-button")) {
        addMoney = mainMoney * 10 / 100;
    } else if (btn[2].classList.contains("active-button")) {
        addMoney = mainMoney * 15 / 100;
    } else if (btn[3].classList.contains("active-button")) {
        addMoney = mainMoney * 25 / 100;
    } else if (btn[4].classList.contains("active-button")) {
        addMoney = mainMoney * 50 / 100;
    } else if (custom.value != "") {
        addMoney = mainMoney * +custom.value / 100;
    } else {
        addMoney = 0;
    }    
    if (addMoney.toFixed(2) != NaN && addMoney.toFixed(2) != Infinity && (addMoney + mainMoney).toFixed(2) != NaN && (addMoney + mainMoney).toFixed(2) != Infinity) {
        tipNum.innerHTML = `<h1>$${addMoney.toFixed(2)}</h1>`; 
        totalNum.innerHTML = `<h1>$${(addMoney + mainMoney).toFixed(2)}</h1>`;
    } else {
        tipNum.innerHTML = `<h1>$0.00</h1>`;
        totalNum.innerHTML = `<h1>$0.00</h1>`;
    }
}

people.onblur = function () {
    mainMoney = +bill.value / +people.value;
    if (btn[0].classList.contains("active-button")) {
        addMoney = mainMoney * 5 / 100;
    } else if (btn[1].classList.contains("active-button")) {
        addMoney = mainMoney * 10 / 100;
    } else if (btn[2].classList.contains("active-button")) {
        addMoney = mainMoney * 15 / 100;
    } else if (btn[3].classList.contains("active-button")) {
        addMoney = mainMoney * 25 / 100;
    } else if (btn[4].classList.contains("active-button")) {
        addMoney = mainMoney * 50 / 100;
    } else if (custom.value != "") {
        addMoney = mainMoney * +custom.value / 100;
    } else {
        addMoney = 0;
    }
    if (addMoney.toFixed(2) != NaN && addMoney.toFixed(2) != Infinity && (addMoney + mainMoney).toFixed(2) != NaN && (addMoney + mainMoney).toFixed(2) != Infinity) {
        tipNum.innerHTML = `<h1>$${addMoney.toFixed(2)}</h1>`; 
        totalNum.innerHTML = `<h1>$${(addMoney + mainMoney).toFixed(2)}</h1>`;
    } else {
        tipNum.innerHTML = `<h1>$0.00</h1>`;
        totalNum.innerHTML = `<h1>$0.00</h1>`;
    }
}

let reset = document.querySelector("#reset");

reset.onclick = function () {
    bill.value = "";
    people.value = "";
    custom.value = "";
    addMoney = 0;
    mainMoney = 0;
    for (i = 0; i < btn.length; i++) {
        if (btn[i].classList.contains("active-button")) {
            btn[i].classList.remove("active-button")
        }
    }
    if (addMoney.toFixed(2) != NaN && addMoney.toFixed(2) != Infinity && (addMoney + mainMoney).toFixed(2) != NaN && (addMoney + mainMoney).toFixed(2) != Infinity) {
        tipNum.innerHTML = `<h1>$${addMoney.toFixed(2)}</h1>`; 
        totalNum.innerHTML = `<h1>$${(addMoney + mainMoney).toFixed(2)}</h1>`;
    } else {
        tipNum.innerHTML = `<h1>$0.00</h1>`;
        totalNum.innerHTML = `<h1>$0.00</h1>`;
    }
}

// Testing



