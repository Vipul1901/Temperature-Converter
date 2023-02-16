const cels = document.getElementById("Celsius");
const fahr = document.getElementById("Fahrenheit");
const kel = document.getElementById("Kelvin");


function computeTemp(event){
    const currentValue = +event.target.value;
    switch (event.target.name) {
        case "Celsius":
            kel.value=(currentValue+273.32)
            fahr.value=(currentValue*1.8 + 32)
            break;
        case "Fahrenheit":
            cels.value = ((currentValue-32)/1.8)
            kel.value = ((currentValue-32)/1.8 + 273.32)
            break;
        case "Kelvin":
            cels.value = (currentValue-273.32)
            fahr.value = ((currentValue-273.32)*1.8+32)
            break;
    
        default:
            break;
    }

}