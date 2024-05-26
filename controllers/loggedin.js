const db = require("../routes/db-config")
const jwt = require("jsonwebtoken");
const loggedIn = (req, res, next) => {
    console.log(req?.cookies)
    if (!req.cookies.userRegistered) return next();
    try {
        const decoded = jwt.verify(req.cookies.userRegistered,"vwdqxikuevdckvdcevetcvkee()(E)ECrcjenbxbxdkx");
        console.log(decoded)
        
        db.query('SELECT * FROM registered WHERE id =?',[decoded.id], (err,result)=>{
            if(err)return next();
            req.user = result[0];
            return next();
        })
    } catch (err) {
        if(err) return next()
    }
}



module.exports = loggedIn;