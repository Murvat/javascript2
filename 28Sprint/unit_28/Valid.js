class Valid {
    constructor(a, b,) {
        this.email = a;
        this.password = b;
        this.isValid = false;

    }
    validate() {
        this.isValid = false;
        if (this.password.length > 6) {
            this.isValid = true;
            return this.isValid
        } else {
            this.isValid = false;
            return this.isValid
        }
    }
}

const v1 = new Valid('test@ua.ua', 'qwertyu');
console.log(v1.validate());
console.log(v1.isValid);

const v2 = new Valid('test@ua.ua', 'qwe');
console.log(v2.validate());
console.log(v2.isValid);