class Valid2 extends Valid {
    error_message: string; // New property for error messages

    constructor(a: string, b: string) {
        super(a, b); // Call the parent class constructor
        this.error_message = ''; // Initialize error_message
    }

    validate(): boolean {
        this.error_message = ''; // Reset error message
        super.validate(); // Call the parent class's validate method

        if (this.isValid === false) {
            this.error_message = 'password error'; // Set error message for password
            return this.isValid;
        } else if (this.email === '') {
            this.isValid = false; // Set isValid to false for empty email
            this.error_message = 'email error'; // Set error message for email
            return this.isValid;
        } else {
            return this.isValid; // Return isValid if no errors
        }
    }
}

// Example usage
const v12 = new Valid2('test@ua.ua', 'qwertyu');
console.log(v12.validate()); // true
console.log(v12.isValid);    // true
console.log(v12.error_message); // ''

const v13 = new Valid2('test@ua.ua', 'qwe');
console.log(v13.validate()); // false
console.log(v13.isValid);    // false
console.log(v13.error_message); // 'password error'

const v14 = new Valid2('', 'qwertyu');
console.log(v14.validate()); // false
console.log(v14.isValid);    // false
console.log(v14.error_message); // 'email error'