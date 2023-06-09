class DonutMaker {
    constructor(){
    this.donutClick = 0;
    this.donutCount = 1;
    
    this.autoClickerCount = 0;
    this.autoClickerCost = 100;

    }

    donutClicked() {
        this.donutClick = this.donutClick + this.donutCount

    }

    getDonutClicked() {
        return this.donutClick;
    }

    addAutoClicker() {
        if (this.donutClick >= this.autoClickerCost) {
            this.donutClick = this.donutClick - this.autoClickerCost;
            this.autoClickerCount++;
            this.increaseAutoClickerCost()
        }
    }

    increaseAutoClickerCost() {
        this.autoClickerCost = this.autoClickerCost + this.autoClickerCost * .1;
        
    }

    getAutoClickerCount() {
        return this.autoClickerCount;
    }

    getAutoClickerCost() {
        return this.autoClickerCost;
    }

    makeAutoClickerWork() {
        this.donutClick = this.autoClickerCount + this.donutClick * this.donutCount;
    }

    getDonutValue() {
        return this.donutCount;
    }

    restartGame() {
        this.donutCount = 0;
        this.autoClickerCount = 0;
        this.autoClickerCost = 100;
    }
}