var age = document.getElementById("age");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var male = document.getElementById("m");
var female = document.getElementById("f");
var form = document.getElementById("form");
let resultArea = document.querySelector(".comment");

modalContent = document.querySelector(".modal-content");
modalText = document.querySelector("#modalText");
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

function calculateRisk() {
    console.log("Calculating................................................................");
  
    // Récupérer les valeurs du formulaire
    const age = parseFloat(document.getElementById('age').value);
    const sex = parseInt(document.getElementById('sex').value);
    const rna = parseFloat(document.getElementById('rna').value);
    console.log(age + " " + sex + " " + rna);
  
    // Vérifier si les valeurs sont valides
    if (isNaN(age) || isNaN(rna)) {
        alert("Veuillez entrer des valeurs valides pour l'âge et le RNA biomarker.");
        return;
    }
  
    // Calculer le facteur de risque
    const riskEstimate = 1 ;
    console.log(riskEstimate);
  
    // Afficher la div de résultat
    const resultCard = document.getElementById('resultCard');
    resultCard.style.display = 'block'; // Afficher la div
  
    // Sélectionner la lumière et le texte du résultat
    const resultText = document.getElementById('resultText');
    
    // Sélectionner l'élément de la jauge
    const gaugeElement = document.querySelector('.gauge');
  
    // Mettre à jour l'affichage en fonction du résultat
    if (riskEstimate >1) {
        resultText.innerHTML = `High risk of Parkinson's disease `;
        resultText.classList.add('high-risk');
        resultText.classList.remove('low-risk');
        gaugeElement.classList.remove('gauge--green');
        gaugeElement.classList.add('gauge--red');
    } else {
        resultText.innerHTML = `Low risk of Parkinson's disease `;
        resultText.classList.add('low-risk');
        resultText.classList.remove('high-risk');
        gaugeElement.classList.remove('gauge--red');
        gaugeElement.classList.add('gauge--green');
    }
  }
  