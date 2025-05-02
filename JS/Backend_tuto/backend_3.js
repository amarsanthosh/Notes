
add 'prettier' depedency to format easier

and add scripts , package.json from the avinash_backend tuto git {d.congig, controller, models}

  in postman -> create new environment, and a BASE URL, to avoid repeating 
_______________________________________________________________________________________________


1. User registration and login : 

async registerUser(email,password){
  const salt = await bcrypt.genSalt(12);
  const hashedPassword = await bcrypt.hash(password,salt);
  const obj = {
    email,
    password: hashedPassword,
  };
  await UserModel.create(obj);
}
  
async login(email,password){
  const user = await UserModel.findOne({email});
  if(!user){
    throw new Error("user with email not found");
  }
  const status = await brcypt.compare(password,user.password);
  if(!status){
    throw new Error("Incorrect password");
  }
}



2. 
STEPS  to get app password in gamil.

  -manage google passwprd
 - search "app password"
 - sign in with app password
 - 2 step verification (enables)
 - give app name then click
 - password will be generated, copy it





//////////////////////////////

node mailer   --> learn.js

sample code to send mail

const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
  service : 'gmail',
  auth : {
    user : <EMAIL>,
    pass : <EMAIL_PASS>,
  },
});

const otp = 1234;,

const mailOptions = {
  from : ' <EMAIL> ', 
  to : '<receiver email> ' ,
  subject: 'OTP VERIFICATION',
  html: `
    <h1> Your otp is : ${otp} </h1>
  `,
};
transport.sendMail(mailOptions);


/////////////////////////////////////////
#environment file(.env)
-make sure to add this in .gitignore file.
  eg:
    EMAIL = sample@gmail.com
    PASSWORD = samplePassword

--how to access .env code in nodejs
-'process.env.EMAIL'
-before that you need 'dotenv' package.
- And include following code top of 'index.js' filr,

const dotenv = require('dotnenv');
dotenv.config();
