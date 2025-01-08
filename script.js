function volume_sphere(event) {
    event.preventDefault(); // Prevent form submission

    let rad = document.getElementById("radius");
    let vol = document.getElementById("volume");
    let value = parseFloat(rad.value); // Use parseFloat for decimals

    if (isNaN(value) || value < 0) {
        vol.value = 'NaN'; // Show error message in volume field
    } else {
        let calc = ((4 / 3) * Math.PI * Math.pow(value, 3)).toFixed(4); // Use Math.PI for better accuracy
        vol.value = calc; // Set the calculated value
    }
}


window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
