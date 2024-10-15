class User {
    constructor(name, lastname, email) {
        this.id = Date.now().toString();
        this.name = name;
        this.lastname = lastname;
        this.email = email;
    }
}

const users = [];

const save = (user) => {

    users.push(user);
    
    return user;
}

// Nueva función para obtener todos los usuarios
const getAllUsers = () => {
    return users;
};


module.exports = {
    User,
    save,
    getAllUsers // Asegúrate de exportar la función
};