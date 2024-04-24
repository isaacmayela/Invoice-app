export function LoginEmailValidators() {
    const validations = {
        required: "L'email est requis",
        pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: 'Addrèsse email invalide'
        }
    }

    return validations
}

export function LoginPasswordValidators() {
    const validations = {
        required: "Le mot de passe est requis",
        // pattern: {
        //     value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/,
        //     message: 'Mot de passe faible'
        // }
    }

    return validations
}

export function usernameGenerator(first_name) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
    let randomString = '';
    for (let i = 0; i < 12; i++) {
        randomString += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    const username = first_name + "-" + randomString
    return username;
}
