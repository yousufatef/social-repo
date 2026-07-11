const express = require('express');

const router = express.Router();
const UserRepo = require('../repos/user-repo');

router.get('/users', async (req, res) => {
    const users = await UserRepo.find();
    res.send(users);
});

router.get('/users/:id', async (req, res) => {
    const {id} = req.params;
    const user = await UserRepo.findById(id);
   
    if (user) {
        res.send(user);
    } else {
        
        return res.status(404).send({ message: 'User not found' });    
    }

});

router.post('/create-user', async (req, res) => {
    const newUser = req.body;   
    const createdUser = await UserRepo.insert(newUser);
    res.status(201).send(createdUser);
});

router.put('/update-user/:id', async (req, res) => {
    const userId = req.params.id;
    const updatedUser = req.body;   
    const user = await UserRepo.update({...updatedUser, id: userId});
    res.send(user);
});

router.delete('/delete-user/:id', async (req, res) => {
    const userId = req.params.id;
    const user = await UserRepo.delete(userId);
    res.send(user);
});

module.exports = router;