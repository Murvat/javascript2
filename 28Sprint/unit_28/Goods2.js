class Goods2 extends Goods {
    constructor(a, b, c, d, e) {
        super(a, b, c, d)
        this.sale = e;
    }
    draw() {
        const div = super.draw();
        if (this.sale) {
            let s = document.createElement('h2');
            s.textContent = 'Pаспродажа';
            div.append(s);
        }
        return div;

    }
}

const goods_7 = new Goods2('apple', 23.5, 'https://cdn0.iconfinder.com/data/icons/fruity-3/512/Apple-48.png', 400, true);
console.log(goods_7);
// И теперь выведем на страницу
document.querySelector('.out-7').append(goods_7.draw());