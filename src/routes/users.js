const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Users route');
});

router.get('/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`User with ID: ${userId}`);
});

router.post('/create-user', (req, res) => {
    const newUser = req.body;   
    res.status(201).send(`User created: ${JSON.stringify(newUser)}`);
});

router.put('/update-user/:id', (req, res) => {
    const userId = req.params.id;
    const updatedUser = req.body;   
    res.send(`User with ID: ${userId} updated to: ${JSON.stringify(updatedUser)}`);
});

router.delete('/delete-user/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`User with ID: ${userId} deleted`);
});

module.exports = router;