// script.js
document.getElementById('measurement-form').addEventListener('submit', (event) => {
    event.preventDefault();

    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);

    const measurements = calculateMeasurements(height, weight);
    displayMeasurements(measurements);
});

function calculateMeasurements(height, weight) {
    // Basic formulas based on average ratios for women
    const bmi = weight / ((height / 100) ** 2); // BMI = weight (kg) / (height (m))^2

    let bust, waist, hips;

    // Use BMI to derive body measurements (these are rough estimates)
    if (bmi < 18.5) { // Underweight
        bust = height * 0.45; // 45% of height
        waist = bust * 0.70; // 70% of bust
        hips = bust * 0.90;  // 90% of bust
    } else if (bmi < 24.9) { // Normal weight
        bust = height * 0.50; // 50% of height
        waist = bust * 0.65; // 65% of bust
        hips = bust * 0.95;  // 95% of bust
    } else { // Overweight and Obesity
        bust = height * 0.55; // 55% of height
        waist = bust * 0.75; // 75% of bust
        hips = bust * 1.05;  // 105% of bust
    }

    return { bust, waist, hips };
}

function displayMeasurements(measurements) {
    const resultDiv = document.getElementById('measurements-result');
    resultDiv.innerHTML = `
        <h2>Estimated Measurements</h2>
        <p>Bust: ${measurements.bust.toFixed(2)} cm</p>
        <p>Waist: ${measurements.waist.toFixed(2)} cm</p>
        <p>Hips: ${measurements.hips.toFixed(2)} cm</p>
    `;
}
