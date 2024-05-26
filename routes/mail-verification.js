// Assuming you're using Express.js
const express = require('express');
const router = express.Router();
const db = require("../routes/db-config");




// Define the route for email verification
router.get('/mail-verification', async (req, res) => {
    const { token } = req.query;

    // Log the received token
    console.log('Received token:', token);

    try {
        // Retrieve the user based on the token and update their status
        db.query('SELECT * FROM registered WHERE verify_token = ?',[token],(err,result)=>{

        if (result && result.length > 0) {
            const user = result[0];
            // Update user's verify_status to TRUE
            db.query('UPDATE Registered SET verified = ? WHERE verify_token = ?', [true, token]);
            return res.render('verification-success'); // Render a success page
        } else {
            return res.status(400).send('Invalid token or user not found.');
        }
    })
    } catch (error) {
        console.error('Error verifying email:', error);
        return res.status(500).send('Internal Server Error');
    }
});


module.exports = router;