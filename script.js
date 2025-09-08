// Função para alternar entre as abas
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Função para calcular calorias com base no tempo
function calculateCalories() {
    var speed = document.getElementById('speed').value;
    var weight = document.getElementById('weight').value;
    var time = document.getElementById('time').value;
    var result = speed * weight * 0.0175 * time;
    document.getElementById('result').innerHTML = "Você queimou aproximadamente " + result.toFixed(2) + " calorias.";
}

// Função para calcular calorias com base na distância
function calculateCaloriesDistance() {
    var speed = document.getElementById('speed-distance').value;
    var weight = document.getElementById('weight-distance').value;
    var distance = document.getElementById('distance').value;
    // Considerando que a velocidade está em km/h, converter distância em km para tempo em horas
    var time = distance / speed; // Tempo em horas
    var result = speed * weight * 0.0175 * time * 60; // Ajustar fórmula para usar tempo em horas
    document.getElementById('result-distance').innerHTML = "Você queimou aproximadamente " + result.toFixed(2) + " calorias.";
}

// Função para calcular calorias com base no tempo e distância
function calculateCaloriesTimeDistance() {
    var weight = parseFloat(document.getElementById('weight-td').value);
    var timeMinutes = parseFloat(document.getElementById('time-td').value);
    var distanceKm = parseFloat(document.getElementById('distance-td').value);

    if (isNaN(weight) || isNaN(timeMinutes) || isNaN(distanceKm) || timeMinutes <= 0) {
        document.getElementById('result-time-distance').innerHTML = "Por favor, preencha valores válidos (tempo > 0).";
        return;
    }

    var timeHours = timeMinutes / 60; // Converter tempo para horas
    var speed = distanceKm / timeHours; // km/h
    var result = speed * weight * 0.0175 * timeMinutes; // Fórmula usando tempo em minutos
    document.getElementById('result-time-distance').innerHTML = "Você queimou aproximadamente " + result.toFixed(2) + " calorias.";
}

// Ativar a primeira aba por padrão ao carregar a página
window.onload = function() {
    document.getElementsByClassName('tablinks')[0].click();
};
