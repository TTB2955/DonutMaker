const donutMaker = new DonutMaker()


const aboutUs = document.querySelector(".about-us")
const dev = document.querySelector(".dev")
const resetBtn = document.querySelector(".reset")

const donutCount = document.querySelector(".donut-count")
const donutBtn = document.querySelector(".make-donut")
const donutValue = document.querySelector(".donut-value")

const acValue = document.querySelector(".ac-count")
const acBtn = document.querySelector(".ac-btn")
const acCost = document.querySelector(".ac-cost")

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


const autoClicker = setInterval(autoClick, 1000)

function autoClick() {
updateDonutClicked(donutCount, donutMaker)
donutMaker.makeAutoClickerWork()
enableAutoClickerBtn()
// enableMultiplierBtn()
}

const makeDonutBtn = (donutBtn, donutCount, donutMaker) => {
donutBtn.addEventListener("click", () => {
    donutMaker.donutClicked()
    // updateDonutCount(donutCount, donutMaker) the function is wrong
    updateDonutClicked(donutCount, donutMaker);
})
}

const makeAutoClickerBtn = (acValue, acBtn, acCost, donutMaker) => {
acBtn.addEventListener("click", () => {
    donutMaker.addAutoClicker()
    updateAutoClickerCount(acValue, donutMaker)
    updateAutoClickerCost(acCost, donutMaker)
})
}

function enableAutoClickerBtn() {
if (donutMaker.donutClick >= donutMaker.autoClickerCost) {
    acBtn.removeAttribute("disabled")
} else {
    acBtn.disabled = true
}
}

makeDonutBtn(donutBtn, donutCount, donutMaker)

makeAutoClickerBtn(acValue, acBtn, acCost, donutMaker)

updateDonutValue(donutValue, donutMaker)

clearScreen(resetBtn)