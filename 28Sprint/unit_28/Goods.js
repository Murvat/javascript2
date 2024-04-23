class Goods {
    constructor(a, b, c) {
        this.name = a;
        this.price = b;
        this.image = c;
    }
    draw() {
        let div = document.createElement('div')
        let h1 = document.createElement('h1');
        let p = document.createElement('p');
        let img = document.createElement('img');

        div.setAttribute('class', 'goods')
        h1.innerHTML = this.name;
        div.append(h1);
        p.setAttribute('class', 'price')
        p.innerHTML = this.price;
        div.append(p)
        img.setAttribute('src', this.image)
        div.append(img)

        return div;
    }
}

// const goods_1 = new Goods('apple', 23.5, 'https://cdn0.iconfinder.com/data/icons/fruity-3/512/Apple-48.png', 400);
// console.log(goods_1);
const goods_1 = new Goods('apple', 23.5, 'https://cdn0.iconfinder.com/data/icons/fruity-3/512/Apple-48.png', 400);
console.log(goods_1);
// И теперь выведем на страницу
document.querySelector('.out-3').append(goods_1.draw());
let good2 = new Goods('banana', 30, 'https://cdn0.iconfinder.com/data/icons/fruity-3/512/Apple-48.png', 400)
document.querySelector('.out-4').append(good2.draw());
