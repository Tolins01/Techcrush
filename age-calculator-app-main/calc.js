const dayInput = document.querySelector("#day");
const monthInput = document.querySelector("#month");
const yearInput = document.querySelector("#year");

const yearValue = document.querySelector(".age-year");
const monthValue = document.querySelector(".age-month");
const dayValue = document.querySelector(".age-day");

const button = document.querySelector(".button");

const currentDate = new Date();
let currentYear = currentDate.getFullYear();

let active = false;


function highlightErrorState() {
    document.querySelectorAll("label").forEach(label => {
        label.classList.add("text-red-600");
        label.classList.remove("text-gray-600", "text-gray-500");
    });

    document.querySelectorAll("input").forEach(input => {
        input.classList.add("active");
    });
}

function clearErrorHighlight() {
    document.querySelectorAll("label").forEach(label => {
        label.classList.add("text-gray-600");
        label.classList.remove("text-red-600");
    });

    document.querySelectorAll("input").forEach(input => {
        input.classList.remove("active");
    });
}

function resetMessages() {
    document.querySelectorAll(".required-active").forEach(e => {
        e.classList.remove("required-active");
        e.classList.add("required");
    });

    document.querySelectorAll(
        ".valid-month-active, .valid-date-active, .valid-day-active, .past-active"
    ).forEach(e => {
        e.classList.remove(
            "valid-month-active",
            "valid-date-active",
            "valid-day-active",
            "past-active"
        );
        if (!e.classList.contains("valid-month")) e.classList.add("valid-month");
        if (!e.classList.contains("valid-date")) e.classList.add("valid-date");
        if (!e.classList.contains("valid-day")) e.classList.add("valid-day");
        if (!e.classList.contains("past")) e.classList.add("past");
    });
}


function calAge() {
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();

    const birthYear = parseInt(yearInput.value);
    const birthMonth = parseInt(monthInput.value);
    const birthDay = parseInt(dayInput.value);

    let years = currentYear - birthYear;
    let months = currentMonth - birthMonth;
    let days = currentDay - birthDay;

    if (days < 0) {
        months--;
        const daysInPrevMonth = new Date(currentYear, currentMonth - 1, 0).getDate();
        days += daysInPrevMonth;
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    if (years < 0) {
        years = 0;
    }

    yearValue.textContent = years;
    monthValue.textContent = months;
    dayValue.textContent = days;
}


// Validation Function

function validateInputs() {
    active = false;
    resetMessages();
    clearErrorHighlight();

    const day = dayInput.value.trim();
    const month = monthInput.value.trim();
    const year = yearInput.value.trim();
    const dayNum = parseInt(day);
    const monthNum = parseInt(month);
    const yearNum = parseInt(year);

    if (day === "" && month === "" && year === "") {
       document.querySelectorAll(".required").forEach(msg => {
            msg.classList.add("required-active");
            msg.classList.remove("required");
        });
        active = true;
        highlightErrorState();
    return;
    }else if (day === "") {
    document.querySelector(".required.day").classList.add("required-active");
    document.querySelector(".required.day").classList.remove("required");
    active = true;
    highlightErrorState(); 
    return;
    }
    else if (month === "") {
    document.querySelector(".required.month").classList.add("required-active");
    document.querySelector(".required.month").classList.remove("required");
    active = true;
    highlightErrorState(); 
    return; 
    }else if (year === "") {
    document.querySelector(".required.year").classList.add("required-active");
    document.querySelector(".required.year").classList.remove("required");
    active = true;
    highlightErrorState(); 
    return;
    }else {
        active = false;
        clearErrorHighlight();
        resetMessages();
    }




    if (yearNum > currentYear) {
        document.querySelector(".past").classList.add("past-active");
        document.querySelector(".past").classList.remove("past");
        active = true;
    }

    if (monthNum > 12) {
        document.querySelector(".valid-month").classList.add("valid-month-active");
        document.querySelector(".valid-month").classList.remove("valid-month");
        active = true;
    }

    if (dayNum > 31) {
        document.querySelector(".valid-day").classList.add("valid-day-active");
        document.querySelector(".valid-day").classList.remove("valid-day");
        active = true;
    }

   
    const specialMonth = [4, 6, 9, 11];

    if (monthNum === 2 && dayNum > 29) {
        document.querySelector(".valid-date").classList.add("valid-date-active");
        document.querySelector(".valid-date").classList.remove("valid-date");
        active = true;
    }

    if (specialMonth.includes(monthNum) && dayNum > 30) {
        document.querySelector(".valid-date").classList.add("valid-date-active");
        document.querySelector(".valid-date").classList.remove("valid-date");
        active = true;
    }


 
    if (active === true) {
        highlightErrorState();   
    }
}


button.addEventListener("click", (e) => {
    e.preventDefault();

    validateInputs();

    if (active === false) {
        calAge();
    }
});
