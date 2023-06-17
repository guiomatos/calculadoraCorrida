function calculateCalories() {
    var speed = document.getElementById('speed').value;
    var weight = document.getElementById('weight').value;
    var time = document.getElementById('time').value;
    var result = speed * weight * 0.0175 * time;
    document.getElementById('result').innerHTML = "Você queimou aproximadamente " + result.toFixed(2) + " calorias.";
}
