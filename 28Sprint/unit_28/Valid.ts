class Valid {
    email: string;       // Email property
    password: string;    // Password property
    isValid: boolean;    // Validation status

    constructor(a: string, b: string) {
        this.email = a;  // Initialize email
        this.password = b; // Initialize password
        this.isValid = false; // Initialize isValid as false
    }

    validate(): boolean {
        this.isValid = this.password.length > 6; // Validate password length
        return this.isValid; // Return validation status
    }
}

// Example usage
const v1 = new Valid('test@ua.ua', 'qwertyu');
console.log(v1.validate()); // true
console.log(v1.isValid);    // true

const v2 = new Valid('test@ua.ua', 'qwe');
console.log(v2.validate()); // false
console.log(v2.isValid);    // false