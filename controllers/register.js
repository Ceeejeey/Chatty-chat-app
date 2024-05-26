const db = require("../routes/db-config");
const bcrypt = require("bcryptjs");
const randomstring = require("randomstring")
const sendMail = require("../controllers/sendMail");

const register = async (req, res) => {
    const { email, password: Npassword, username } = req.body; // Extract username from req.body
    if (!email || !Npassword || !username) { // Check if username is provided
        return res.json({ status: "error", error: "Please Enter Your email, Username, and Password" });
    } else {
        db.query('SELECT email FROM Registered WHERE email = ?', [email], async (err, result) => {
            if (err) throw err;
            if (result[0]) {
                return res.json({ status: "error", error: "Email has already been registered" });
            } else {
                try {
                    const hashedPassword = await bcrypt.hash(Npassword, 8);
                    const randomToken = randomstring.generate();
                    
                    db.query("INSERT INTO Registered SET ?", { email: email, password: hashedPassword, username: username, verify_token: randomToken }, (error, results) => {
                        if (error) {
                            console.error("Error inserting user:", error);
                            return res.status(500).json({ status: "error", error: "Internal Server Error" });
                        }

                        // Send verification email
                        const verificationLink = `http://localhost:5000/mail-verification?token=${randomToken}`;
                        const content = `<p>Hi ${username},</p><p>Please <a href="${verificationLink}">verify your email</a>.</p>`;
                        sendMail(email, content);

                        return res.json({ status: "success", success: "User has been registered Check your mail" });
                    });
                } catch (error) {
                    console.error("Error hashing password:", error);
                    return res.status(500).json({ status: "error", error: "Internal Server Error" });
                }
            }
        });
    }
}

module.exports = register;
