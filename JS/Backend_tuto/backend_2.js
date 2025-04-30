in index.js 
app.get('/') route...so instead of not found , that text will come...

***How to add static files [photo/video] in our express project***
  - create a folder public outside src [root path]
  - only inside public folder the photos are need to uploaded
  - in app.js (where the middlewares are declared)
        app.use(express.static('public'); 

we can also add index.html file inside the public folder, -> which will be displayed on backend hosted domain
{can also ask copilot to beautify with css}

______________________________________________________________________________________________________________

View : {MVC architecture}
------
    template engines -> ejs, pug , handlebare.js  {html code directly talks with backend};
    template engine -> server side rendering [SSR]

    ## setup ejs template engine in nodejs express  
          - npm install ejs
          - create a views folder outside source, and add ejs files inside it .
          - keep all your views file inside views folder
          - for ex : index.ejs, contact.ejs
          - go to app.js and add following code.
              app.set('view engine' , 'ejs');
              app.set('views','./views');
          - use res.render() method to render your template engine.
______________________________________________________________________________________________________________
            
Login in to mongodb atlas -> create a cluster -> compass -> paste the connection string in mongodb compass(after all process, then inser your password in the string)
  (ip address : 0.0.0.0/0)
  ->add new database -> role read and write

cluster -> where our db need to store
