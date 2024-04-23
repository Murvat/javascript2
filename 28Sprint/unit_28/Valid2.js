class Valid2 extends Valid {
    constructor(a, b) {
        super(a, b);
        this.error_message = '';
    }

    validate() {
        this.error_message = '';
        super.validate();

        if (this.isValid === false) {
            this.error_message = 'password error';
            return this.isValid;
        } else if (this.email === '') {
            this.isValid = false;
            this.error_message = 'email error';
            return this.isValid;
        } else {
            return this.isValid;
        }
    }
}

const v12 = new Valid2('test@ua.ua', 'qwertyu');
console.log(v12.validate());
console.log(v12.isValid);
console.log(v12.error_message);

const v13 = new Valid2('test@ua.ua', 'qwe');
console.log(v13.validate());
console.log(v13.isValid);
console.log(v13.error_message);

const v14 = new Valid2('', 'qwertyu');
console.log(v14.validate());
console.log(v14.isValid);
console.log(v14.error_message);