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
        pattern: {
            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/,
            message: 'Mot de passe faible'
        }
    }

    return validations
}

