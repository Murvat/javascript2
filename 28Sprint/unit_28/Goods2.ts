class Goods2 extends Goods {
    sale: boolean; // New property for sale status

    constructor(a: string, b: number, c: string, d: number, e: boolean) {
        super(a, b, c); // Call the parent class constructor
        this.sale = e; // Initialize the new property
    }

    draw(): HTMLDivElement {
        const div = super.draw(); // Call the parent class's draw method

        // Add a sale banner if the item is on sale
        if (this.sale) {
            const saleBanner = document.createElement('h2');
            saleBanner.textContent = 'Распродажа'; // Sale banner text
            div.append(saleBanner);
        }

        return div;
    }
}

// Example usage
const goods_7 = new Goods2('apple', 23.5, 'https://cdn0.iconfinder.com/data/icons/fruity-3/512/Apple-48.png', 400, true);
console.log(goods_7);

// Append the goods to the page
document.querySelector('.out-7')?.append(goods_7.draw());