const jwt = require("jsonwebtoken");
const db = require("../routes/db-config");
const bcryptjs = require("bcryptjs");

const login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.json({ status: "error", error: "Please Enter Your email and Password" });
    } else {
        db.query("SELECT * FROM Registered WHERE email = ?", [email], async (err, result) => {
          
            if (err) {
                res.json({ status: "error", error: "Database query error", details: err });
                return;
            }
            if (!result.length || !(await bcryptjs.compare(password, result[0].password))) {
                return res.json({ status: "error", error: "Incorrect Email or password" });
            } else if (!result[0].verified) { // Check if the user's email is verified
                return res.json({ status: "error", error: "Email not verified. Please verify your email first." });
            
            } else {
                const token = jwt.sign({ id: result[0].Id },"vwdqxikuevdckvdcevetcvkee()(E)ECrcjenbxbxdkx" , {
                    expiresIn: "90d"
                    
                });
                console.log(token)
                console.log(result[0])
                const cookieOption = {
                    expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
                    httpOnly: true
                };
                res.cookie("userRegistered", token, cookieOption);
                return res.json({ status: "success", success: "User has been logged in go to home" });
                
            }
        });
    }
};

module.exports = login;
