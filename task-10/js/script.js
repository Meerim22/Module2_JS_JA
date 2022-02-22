document.write(`<strong>Ex-1</strong><br>`)
class Restaurant {
    constructor(name, type, serNum = 0, status, served = 0) {
        this.name = name;
        this.type = type;
        this.status = status;
        this.served = served;
        this.serNum = serNum;
    }
    sayName() {
        document.write(`<br><b>Ресторан:</b> ${this.name} <br> <b>Тип кухни:</b> ${this.type} <br>`);
    };
    setStatus(status) {
        this.status = status;
    }
    showStatus() {
        if (this.status) {
            document.write("<b>Статус:</b> Открытый <br>")
        }
        else {
            document.write("<b>Статус:</b> Закрытый <br>")
        }
    }
    serve() {
        return this.served++;
    }
    setServed(numberOfServed){
        this.serNum += numberOfServed;
        return this.serNum;
    }
    showTotal() {
        document.write(`<b>Посетители-1:</b> ${this.served}<br>`);
        document.write(`<b>Посетители-2:</b> ${this.serNum}<br>`);
    }
    showTotalServed() {
        document.write(`<b>Всего посетителей:</b> ${this.served + this.serNum}<br>`);
    }
}

const rest = new Restaurant("Мейлин", "Итальянский");
rest.sayName();
rest.setStatus(true);
rest.showStatus();
rest.serve(); rest.serve(); rest.serve();
rest.setServed(15); // Здесь можно менять число "Посетители-2"
rest.showTotal();
rest.showTotalServed();


document.write(`<br><br><br><strong>Ex-2</strong><br>`)
class Cars {
    constructor(brand, year, power, color) {
        this.brand = brand;
        this.year = year;
        this.power = power;
        this.color = color;
    }
    draw() {
        document.write(` <br><b>Марка авто:</b> ${this.brand} <br> <b>Год выпуска:</b> ${this.year} 
        <br> <b>Мощность двигателя:</b> ${this.power} <br> <b>Цвет машины:</b> ${this.color} <br> `)
    };
}

class ElectroCars extends Cars {
    constructor(brand, year, power, color, battery, promote) {
        super(brand, year, power, color)
        this.battery = battery;
        this.promote = promote;
    }
    sayBattery() {
        document.write(`<b>Объем акумлятора:</b> ${this.battery} <br>`)
    }
    sayPromote() {
        document.write(`<b>Реклама:</b> ${this.promote}`)
    }
}

const drawElectroCars = new ElectroCars("Acura NSX", "2015", "3", "оранжевый", "45", "Наши машины самые лучшие!");
const drawCars = new Cars("Toyota", "2020", "4", "белый");
drawElectroCars.draw();
drawCars.draw();
drawElectroCars.sayBattery();
drawElectroCars.sayPromote();