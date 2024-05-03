// Copyright Pranav Ramesh 2024
const User = require('../../../../models/User.js');

export default function handler(req, res, next) {
    const { uid, email } = req.body;

    console.log("endpoint hit");

    if (!uid || !email) {
        return res.status(400).send({
            reason: "Missing UID or Email."
        })
    }

    const newUser = new User({
        uid: uid,
        email: email
    })

    newUser.save()
        .then(() => res.status(201).send({ message: 'User registered successfully' }))
        .catch(error => res.status(500).send({ reason: 'An error occurred while registering the user', error: error.message }));



}

