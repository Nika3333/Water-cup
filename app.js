const addBtn = document.getElementById('add-water')
const removeBtn = document.getElementById('remove-water')
const fillBtn = document.getElementById('fill')
const emphtyBtn = document.getElementById('emphty')
const displayCurrentWaterLevel = document.getElementById('display-current-water-level')
const water = document.querySelector('.water')
let currentWaterLevel = 90 // Deafult water height value 
displayCurrentWaterLevel.textContent = `${currentWaterLevel}%`

addBtn.addEventListener('click', ()=>{
    if (currentWaterLevel < 100) {
        water.style.height = `${currentWaterLevel += 10}%`
    }
    displayCurrentWaterLevel.textContent = `${currentWaterLevel}%`
})

removeBtn.addEventListener('click', ()=>{
    if (currentWaterLevel > 0) {
        water.style.height = `${currentWaterLevel -= 10}%`
        displayCurrentWaterLevel.textContent = `${currentWaterLevel}%`
    }
})

fillBtn.addEventListener('click', ()=>{
    if (currentWaterLevel < 90) {
        water.style.height = `${currentWaterLevel = 100}%`
        displayCurrentWaterLevel.textContent = `${currentWaterLevel}%`
    }
})

emphtyBtn.addEventListener('click', ()=>{
    if (currentWaterLevel > 0) {
        water.style.height = `${currentWaterLevel = 0}%`
        displayCurrentWaterLevel.textContent = `${currentWaterLevel}%`
    }
})
