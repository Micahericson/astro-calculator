
var planets = [ 
    ['Pluto', 0.06], 
    ['Neptune', 1.148], 
    ['Uranus', 0.917], 
    ['Saturn', 1.139], 
    ['Jupiter', 2.640], 
    ['Mars', 0.3895], 
    ['Moon', 0.1655], 
    ['Earth', 1], 
    ['Venus', 0.9032], 
    ['Mercury', 0.377], 
    ['Sun', 27.9] 
];
let planetSelect = document.getElementById("planets");

planets.reverse().forEach(planet => {
    let option = document.createElement("option");
    option.value = planet[0];
    option.textContent = planet[0];
    planetSelect.appendChild(option);
});

function calculateWeight(weight, planetName) { 
 
    let planet = planets.find(planet => planet[0] === planetName);
    return planet ? weight * planet[1] : "Planet not found";
} 
function handleClickEvent(e) {
    
    let userWeight = parseFloat(document.getElementById("user-weight").value);  
    let planetName = document.getElementById("planets").value; 
    let result = calculateWeight(userWeight, planetName);
   
    document.getElementById("output").textContent = 
    `If you were on ${planetName}, you would weigh ${result}lbs!`;
}   
    document.getElementById("calculate-button").onclick = handleClickEvent;
