const { getAllUsers, getDetailUser } = require("./usuariosCtrl");

let userRq = (req, res) => {
    let { name } = req.query

    try {
        let result;
        name
            ? result = getDetailUser(name)
            : result = getAllUsers()

        res.status(202).json(result)

    } catch (error) {
        res.status(404).json({ error: error.message })
    }

}

module.exports = userRq