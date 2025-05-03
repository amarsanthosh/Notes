Token gen


const jwt = require('jwt
const secret = "a long string"

const tokenPayload = {
  id : '',
  email : ' ' ,
  role : 'admin'
}

token = jwt.sign(tokenPayload,secret,{
  expireIn : '25',
});
console.log("token : ", token)

where to send token and why ?
   send jwt token in register and login routes.
   because to maintain session on client side.  
   

Postman post-script to store token in environment :
---------------------------------------------------

  const response = pm.response.json();
  if(response.status && response.token){
      pm.environment.set('JWT_TOKEN',response.token);
  }


------------------------------------------------------------
  how  we taking token from headers

exports.verifyAuthToken = async function (req,res){
  try{
    const header = req.headers;
    let token;
    if(header.authorization){
      token = header.authorization.split(' ')[1];
    }
    const decoded = tokenService.verifyToken(token);
    res.json({
      status : true,
      message : 'token verification successful',
      data : decoded,
    });
  } catch(error){
    res.status(400).json({
      status : false,
      message : error.message,
    })
  }
}

______________________________________________

debug nodejs app
- easy and simple way is to use vscode debugger.
- Other way is to use inspect flag and use devtools to debug
  * add following script in package.json
      "debug" : "node inspect index.js"

_____________________________________________________

const restricAcccess = function (req,res,next){
  try{
    const header = req.headers;
    let token;
    if(header.authorization){
      token = header.authorization.split(' ')[1];
    }
    const decoded = tokenService.verifyToken(token);
    next();
  }catch (error){
    res.status(400).json({
      status : false,
      message : error.message,
      }
  }
}

___________________________________________________________

Diffrent ways to use middleware in nodejs : 
-----------------------------------------

  - a common middlewares for each routes
  * we use router.use() method to include common middleware
  
  - use more than one common middleware
   * method1 : using router.use() multiple times.
   * method2 : using array of middlewares
  
  - A specific middle ware for each route
   * method1 : add middleware as previous arguments.
   * method2 : array of middlewares
   * method3 : using router.use()


How to handle errors in nodejs express ? 
using following errorHandler in last line of app.js

app.use((err,req,res,next)=>{
  console.error(err.stack);
  res.status(500).send('Something broke!);
});

