interface GoodsProps {
    name: string;
    price: number;
    image: string;
}

class Goods {
    name: string;
    price: number;
    image: string;

    constructor(a: string, b: number, c: string) {
        this.name = a;
        this.price = b;
        this.image = c;
    }

    draw(): HTMLDivElement {
        let div = document.createElement('div');
        let h1 = document.createElement('h1');
        let p = document.createElement('p');
        let img = document.createElement('img');

        div.setAttribute('class', 'goods');
        h1.innerHTML = this.name;
        div.append(h1);
        p.setAttribute('class', 'price');
        p.innerHTML = this.price.toString();
        div.append(p);
        img.setAttribute('src', this.image);
        div.append(img);

        return div;
    }
}

// Example usage
const goods_1:Goods = new Goods('apple', 23.5, 'https://cdn0.iconfinder.com/data/icons/fruity-3/512/Apple-48.png');
console.log(goods_1);

// Append the goods to the page
document.querySelector('.out-3')?.append(goods_1.draw());

const good2 = new Goods('banana', 30, 'https://cdn0.iconfinder.com/data/icons/fruity-3/512/Apple-48.png');
document.querySelector('.out-4')?.append(good2.draw());