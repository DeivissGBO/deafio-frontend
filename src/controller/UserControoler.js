const User = require('../model/User');
module.exports = {
    async store(req, res) {
        try {
            //const { nome, telefone, idade } = req.body;

            const user = await User.create(req.body);

            return res.json(user);
        } catch (err) {
            console.log(err);
            return res.status(400).send({ error: "Erro ao criar usuário" });
        }

    },

    async index(req, res) {
        try {
            const users = await User.find();
            return res.send(users);

        } catch (err) {
            console.log(err);
            return res.status(400).send({ error: "Erro ao carregar usuários" });
        }

    }

}