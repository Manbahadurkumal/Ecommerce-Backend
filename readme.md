# api , ecommerse
-Auth module 
    -register 
        ->/register post
    -Activate
        ->/activate/token->get
    -Login
        ->/login => post 
    -Profile
        ->after login / me =>get
    -Change password
        ->after login/ change-passoword ->post
    -Logout
        ->after login/logout =>get
    -Forget password
        ->request for password =>post/forget-password
    -Reset password 
        ->post/reset-password

-Banner module 
     -Create
        =>/banner post  protected
    -Read
        =>/banner get list all protected
        =>/banner/:id get detail protected
        =>/banner/home get list public
    -Update
        =>/banner/:id put update protected
    -Delete
        =>/banner/:id delete protected

Brand module 
     -Create
        =>/brand post  protected
    -Read
        =>/brand get list all protected
        =>/brand/:id get detail protected
        =>/brand/home get list public
        =>/brand/:slug/by-slug getlist Detail of the category with product public
    -Update
        =>/brand/:id put update protected
    -Delete
        =>/brand/:id delete protected

Category module 
     -Create
        =>/category post  protected
    -Read
        =>/category get list all protected
        =>/category/:id get detail protected
        =>/category/home get list public
        =>/category/:slug/by-slug getlist Detail of the category with product public
    -Update
        =>/category/:id put update protected
    -Delete
        =>/category/:id delete protected

User Module
    -Create
        =>/user post
            (Customer, seller, admin)
    -Read
        =>/user => list all
        =>/user/:id =>detail
        =>/user?role=admin

Product module 
     -Create
        =>/product post  protected(admin, seller)
    -Read
        =>/product get list all protected
        =>/product/:id get detail protected
        =>/product/home get list public
        =>/product/:slug/by-slug getlist Detail of the category with product public
    -Update
        =>/product/:id put update protected
    -Delete
        =>/product/:id delete protected

Cart/Order
    -Create/Update
        =>/cart/create ->post(protected, admin, customer)
        =>/order/create ->post(protected, admin, customer)
    -Read
        =>/cart/list =>get(protected, admin, customer)
        =>/order/list =>get(protected, admin, customer)
    -Delete
        =>/cart/:id =>Delete(protected, admin, customer)

Payment modules
    -live https
    -purchase
    -commission

Offers Promo
Blog/Reviews

Postman
Insomia
thunder clinet extension
postman extension
Documentation
    -swagger


// response.send("Hello world");
    // response.end()
    // response.render()
    // response.download()
    // response.status().json()
    // response.sendStatus()

// app.post()
// app.put()
// app.patch()
// app.delete()
// 404 Route
// 200 response
// validation call
    //fail ===>400, 422
// Error page
    //fail ===>404
// Authentication
    //fail ===>401
// Authorization
    //fail ===>403

# Middleware
-route ===> A --->B --->c--->D====>Response
-(req: REquest, res: Response, next: NextFunction)
    //req.params
    //req.value
    next()
    res.json()
(req, res, next)
    //req.manipulate
    next()

sending payload 
Reveiveing Payload


CORS 
    =>Cross Origin Reference Site
        --> FE (domain)
            --abc.com
        -->BE(domain)
            --api.abc.com
                abc.com:portno

yup==>FE
ajv
zod
joi==>BE
regex password validation
joi validation error