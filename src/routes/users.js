module.exports = (app) => {
    const findAll = (req, res) => {
        app.services.user.findAll()
        .then(result => res.status(200).json(result));
    };
    
    const create = (req, res) => {
        app.services.user.create(req.body)
        .then(result => res.status(201).json(result));
    }

    return { findAll, create };
};