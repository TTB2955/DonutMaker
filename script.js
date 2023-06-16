// Instantiate new object
const donutMaker = new DonutMaker()

// target HTML classes
const aboutUs = document.querySelector(".about-us")
const dev = document.querySelector(".dev")
const resetBtn = document.querySelector(".reset")

const donutCount = document.querySelector(".donut-count")
const donutBtn = document.querySelector(".get-donut")
const donutValue = document.querySelector(".donut-value")

const acValue = document.querySelector(".ac-count")
const acBtn = document.querySelector(".ac-btn")
const acCost = document.querySelector(".ac-cost")

// text boxes & Reset button functionality
const about = () => {
if (aboutUs.style.display === "block") {
    aboutUs.style.display = "none"
} else {
    aboutUs.style.display = "block"
}
}

const showDev = () => {
if (dev.style.display === "block") {
    dev.style.display = "none"
} else {
    dev.style.display = "block"
}
}

const clearScreen = resetBtn => {
resetBtn.addEventListener("click", () => {
    location.reload()
})
}

// Create update functions
const updateDonutClicked = (donutCount, donutMaker) => {
donutCount.textContent = Math.round(donutMaker.getDonutClicked())
}

const updateAutoClickerCount = (acValue, donutMaker) => {
acValue.textContent = Math.round(donutMaker.getAutoClickerCount())
}

const updateAutoClickerCost = (acCost, donutMaker) => {
acCost.textContent = Math.round(donutMaker.getAutoClickerCost())
}

const updateDonutValue = (donutValue, donutMaker) => {
donutValue.textContent = donutMaker.getDonutValue().toFixed(1)
}

// Create Auto Clicker
const autoClicker = setInterval(autoClick, 1000)

function autoClick() {
updateDonutClicked(donutCount, donutMaker)
donutMaker.makeAutoClickerWork()
enableAutoClickerBtn()
enableMultiplierBtn()
}

// Create button functionality
const makeDonutBtn = (donutBtn, donutCount, donutMaker) => {
donutBtn.addEventListener("click", () => {
    donutMaker.donutClicked()
    updateDonutCount(donutCount, donutMaker)
})
}

const makeAutoClickerBtn = (acValue, acBtn, acCost, donutMaker) => {
acBtn.addEventListener("click", () => {
    donutMaker.addAutoClicker()
    updateAutoClickerCount(acValue, donutMaker)
    updateAutoClickerCost(acCost, donutMaker)
})
}

// Enabling autoclickers and multipliers
function enableAutoClickerBtn() {
if (donutMaker.donutClick >= donutMaker.autoClickerCost) {
    acBtn.removeAttribute("disabled")
} else {
    acBtn.disabled = true
}
}

// Calling the functions
makeDonutBtn(donutBtn, donutCount, donutMaker)

makeAutoClickerBtn(acValue, acBtn, acCost, donutMaker)

updateDonutValue(donutValue, donutMaker)

clearScreen(resetBtn)