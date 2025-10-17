const { Sequilize } = require("sequalize");

const Sequelize = new Sequilize("testdb", "root", "password", {host: "", dialect: ""});

const User = sequalize.define("User", {
    name: {
        type: DataTypes.String,
        allowNull: false,
    },
    email: {

    }
});

const test () {
    await sequalize.authenticate();

    await sequalize.sync();

    const newUser = await User.create({
        name: "",
        email: ""
    });
}