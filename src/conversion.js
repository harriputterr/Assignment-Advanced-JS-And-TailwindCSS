//Loads the Unit Buttons into variables
const tempBtn = document.getElementById("temperatureButton");
tempBtn.addEventListener("click", changeDropDownToTemp);

const distBtn = document.getElementById("distanceButton");
distBtn.addEventListener("click", changeDropDownToDistance);

const weightBtn = document.getElementById("weightButton");
weightBtn.addEventListener("click", changeDropDownToWeight);


// Loads the Drop Down with Temperature Units (Celsius, Fahrenheit)
function changeDropDownToTemp(e){
    e.preventDefault();
    reset();
    const fromDropdown1 = document.getElementById("fromDropDownId1");
    const fromDropdown2 = document.getElementById("fromDropDownId2");
    const toDropdown1 = document.getElementById("toDropDownId1");
    const toDropdown2 = document.getElementById("toDropDownId2");

    fromDropdown1.value = "Celsius";
    fromDropdown1.text = "Celsius";
    fromDropdown2.value = "Fahrenheit";
    fromDropdown2.text = "Fahrenheit";

    toDropdown1.value = "Celsius";
    toDropdown1.text = "Celsius";
    toDropdown2.value = "Fahrenheit";
    toDropdown2.text = "Fahrenheit";
}
// Loads the Drop Down with Distancec Units (Kilometers, Miles)
function changeDropDownToDistance(e){
    e.preventDefault();
    reset() 
    const fromDropdown1 = document.getElementById("fromDropDownId1");
    const fromDropdown2 = document.getElementById("fromDropDownId2");
    const toDropdown1 = document.getElementById("toDropDownId1");
    const toDropdown2 = document.getElementById("toDropDownId2");

    fromDropdown1.value = "Kilometers";
    fromDropdown1.text = "Kilometers";
    fromDropdown2.value = "Miles";
    fromDropdown2.text = "Miles";

    toDropdown1.value = "Kilometers";
    toDropdown1.text = "Kilometers";
    toDropdown2.value = "Miles";
    toDropdown2.text = "Miles";
}

// Loads the Drop Down with Weight Units (Kilograms, Pounds)
function changeDropDownToWeight(e){
    e.preventDefault();
    reset();
    
    const fromDropdown1 = document.getElementById("fromDropDownId1");
    const fromDropdown2 = document.getElementById("fromDropDownId2");

    const toDropdown1 = document.getElementById("toDropDownId1");
    const toDropdown2 = document.getElementById("toDropDownId2");

    fromDropdown1.value = "Pounds";
    fromDropdown1.text = "Pounds";
    fromDropdown2.value = "Kilograms";
    fromDropdown2.text = "Kilograms";

    toDropdown1.value = "Pounds";
    toDropdown1.text = "Pounds";
    toDropdown2.value = "Kilograms";
    toDropdown2.text = "Kilograms";
}

// Converts the value when the Convert Button is clicked
function convert(){
    const toReadOnly = document.getElementById("toReadOnlyValue");
    toReadOnly.value = result();
    
}
// Returns the value after conversion.
let result = () => {
    const fromValue = document.getElementById("fromInput").value;
    const fromChosenDropDown = document.getElementById("fromDropDown").value;
    const toChosenDropDown = document.getElementById("toDropDown").value;

    if (fromChosenDropDown === "Kilometers" && toChosenDropDown === "Miles"){
        return (fromValue/1.609).toFixed(2); 
    }
    else if (fromChosenDropDown === "Miles" && toChosenDropDown === "Kilometers"){
        return (fromValue*1.609).toFixed(2);
    }
    else if (fromChosenDropDown === "Celsius" && toChosenDropDown === "Fahrenheit"){
        return (fromValue * 9/5 + 32).toFixed(2);
    }
    else if (fromChosenDropDown === "Fahrenheit" && toChosenDropDown === "Celsius"){
        return ((fromValue - 32)*(5/9)).toFixed(2);
    }
    else if (fromChosenDropDown === "Pounds" && toChosenDropDown === "Kilograms"){
        return (fromValue/2.205).toFixed(2);
    }
    else if (fromChosenDropDown === "Kilograms" && toChosenDropDown === "Pounds"){
        return (fromValue*2.205).toFixed(2);
    }
    else {
        return fromValue;
    }
}

// Resets from and to values after other Unit buttons are clicked
let reset = () =>{
    const toReadOnly = document.getElementById("toReadOnlyValue");
    toReadOnly.value = 0;
    let fromValue = document.getElementById("fromInput");
    fromValue.value = 0;
}

// Only Resets the to value.
let resetOutputOnly = () =>{
    const toReadOnly = document.getElementById("toReadOnlyValue");
    toReadOnly.value = 0;
}


