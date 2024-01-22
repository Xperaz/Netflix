
export const checkDataIsValid = (email, password, name) => {
    if (name !== null) {
        const isValidName = /^[a-zA-Z]+(?:\s[a-zA-Z]+)?$/.test(name);
        if (!isValidName) {
            return "Please enter a valid full name. Use only alphabetical characters and spaces. ";
        }
    }
    const isValidEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);

    const isValidPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

    if (!isValidEmail) return "Email is not valid";
    if (!isValidPassword) return "Password must be Minimum eight characters, at least one uppercase and one lowercase letter, one number and one special character:";

    return null;
}