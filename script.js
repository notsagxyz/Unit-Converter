function conversor() {
    const metersInput = document.getElementById('meters').value;
    
    if (meters) {
        const centimeters = metersInput * 100;
        document.getElementById('result').innerText = `${metersInput} meters are ${centimeters} centimeters.`;
    } else {
        document.getElementById('result').innerText = 'Please enter a valid number.';
    }

    
}

