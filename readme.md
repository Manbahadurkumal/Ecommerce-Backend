# api , ecommerse
-Auth module 
    -register 
        ->/register post
    -Activate
        ->/:token/activate->get
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


Register Data
    -->name, email, password, role, image
        -->store this on db
            -->User has to activate the account via email

SMTP
    ==>smtp, pop3, imap
    smtp ===>25 blocked ISP, 2525, 587, 465

        gmail, live, custom domain

sender
 NOde app =====> SMTP server ===> Queue build ===>Reveiver Mail

 Test
 sending domain verify ==>hosting live
    Node app ====> Smtp server ===>Queue build ===>Fake make reveiver

Host    ===>gmail
User    ===>gmail address
Password    ===>gmail pwd




## Database
-storage units

SQL
    -query
        -mysql, postgres, oracle, mssql,...

NoSQL
    -function
        -mongodb,counchdb, ...
    document based db
Mongodb Server(Community)
MOngodb Shell(server access via terminal)
Mongodb Compass (GUI application to use mongodb)

localize
cloud service 512mb free At las


mangodb

id: mk9307888
password: 4jgYMHbnT0t4Dgv0

id: ManBahadurKumal
password: Tan100Ki

prottocol  ===>mongodb, mongodb+srv
host       ===>localhost, 127.0.0.1, <cluster hostaddress>
port       ===>27017
user       ===>not required for localhost, at las --->ManBahadurKumal
password   ===>not required for localhost, at las --->db pwd
db         ===>your dbname

synopsis ==>structure
C ->Create
    --->db.<collectionName>.insertOne(<JSON Object>)
    --->db.<collectionName>.insertMany([JSON Object])
    eg.
        db.users.insertOne({
            name: "Manish Kumal",
            email: "mk9307888@gmail.com",
            role: "admin",
            status: "inactive",
            password: "",
            activationToken: "",
            image: ""
        });

R ->Read
    ---->db.<collectionName>.find()
    ---->db.<collectionName>.findOne()

    Args
        (filter)
        ->filter is a json data type
        ~where clause in sql

        {key: value} ===>where key = 'value'
        {key: value, key1: value}   ==>key = 'value' and key1 = 'value'
        //key = 'value' or key1 = 'value'

U ->Update
    -->db.<collectionName>.updateOne()
    -->db.<collectionName>.updateMany()
    Args
        filter ===>find filter as asme as that 
        body =====>
            {
                $set: <updateBody>
            }
        options: 
            ======>{upsert: <boolean>}

D ->Delete
    --->db.<collectionName>.deleteOne()
    --->db.<collectionName>.deleteMany()



filter
    $or, $and, $gt, $gte, $lt, $lte, $eq, $ne, $text, $in, %nin

    {
        $<or, and, in ,nin>:[{key: <value/expression>},{key: <value/expression>}]
    }
    {
        key: {$<gt, gte, lt, lte, eq,ne>: <value/expression>}
    }

projection
    {key: 1, key: 0}
option
     sort
==>find(filter, projection, options)
     ~
        SELECT
            <projection keys>
        FROM
            <collectionName>
        WHERE
            <filter condition>
        ORDER BY <options.sorting direction>
        LIMIT <options.limit number>
    
    db.users.find(
        {$or: [{role: "admin"},{role: "seller"}]},
        {name: 1, email:1},
        {sorting: {name: "asc", limit: 5}}
    )

    SELECT
        _id, name, email
    FROM users
    WHERE role = 'admin' or role= 'seller'
    ORDER BY  name asc
    LIMIT 5

    Core usages

    ORM/ODM USAGES
        ---->Data structure provider
        ORM/ODM
             ===>Object Relational Mapping/Modelling
             ====>Object Document Mapping/Modelling

        DB tables   ====>Project MOdel definition

        ORM/ODM
            ----->Table/Collection names should be always plural form of your data/entity

            eg.
                 users, products, histories
            ----> All the models/Repo in your project should be in singular cas
            eg.
                User, Product, History
            --->All the colums/keys of a table/ collection is the property of your model class
            eg
                users===> _id, name, email, password,...
                --->UserModel ===>object ===>propety
            ===>functions

    Mongodb
        ===>mongoose

    SQL server
        ==>sequelize, typeorm, prisma

# Identify the Entity
ER Diagram
Ecommerce
    -banners

    -users
    -category
    -brand
    -product
    -order

    -transactions
    -offers
    -coupons/vouchers
    -reviews

    -Inventory MS
        -Order
        -Stock
        -payment/Cash flow
    -Logistic MS
        -tracking 
        -delivery status

# Ecommerce
-banners
table banners{
  _id ObjectId
  title text 
  link text 
  stauts STATUS [default: 'inactive']
  image text 
  createdBy ObjectId [ref: > users._id, default: null]
  createdAt datetime
  updatedBy ObjectId [ref: > users._id, default: null]
  updatedAt datetime
}
-users
    enum ROLE{
        admin
        seller
        customer
    }
enum STATUS{
  active
  inactive
}
table users{
  _id ObjectId
  name text
  email text [unique]
  password text
  role ROLE [default: 'customer']
  stauts STATUS [default: 'inactive']
  activationToken text
  image text
  phone text
  address json
  createdBy ObjectId [ref: - users._id, default: null]
  createdAt datetime
  updatedBy ObjectId [ref: - users._id, default: null]
  updatedAt datetime
}
-category
table categories{
  _id ObjectId
  title text [unique]
  slug text [unique]
  parentId ObjectId [ref: > categories._id, default: null]
  stauts STATUS [default: 'inactive']
  image text
  
  createdBy ObjectId [ref: > users._id, default: null]
  createdAt datetime
  updatedBy ObjectId [ref: > users._id, default: null]
  updatedAt datetime
}
-brand
table brands{
  _id ObjectId
  title text [unique]
  slug text [unique]
  stauts STATUS [default: 'inactive']
  image text
  homeSection bool [default: false]
  createdBy ObjectId [ref: > users._id, default: null]
  createdAt datetime
  updatedBy ObjectId [ref: > users._id, default: null]
  updatedAt datetime
}
-product
table products{
  _id ObjectId
  title text [unique]
  slug text [unique]
  summary text
  description text
  categories objectId [ref: <> categories._id, default: null]
  price number
  discount number
  afterDiscount number
  brand ObjectId [ref: - categories._id]

  stock number
  sku text

  featured bool [default: false]
  seller ObjectId [ref: -users._id]
  stauts STATUS [default: 'inactive']
  image text 
  createdBy ObjectId [ref: > users._id, default: null]
  createdAt datetime
  updatedBy ObjectId [ref: > users._id, default: null]
  updatedAt datetime
}
-order
enum cartStatus{
  pending
  cancelled
  confirmed
  completed

}
table cartDetails {
  _id ObjectId
  orderId ObjectId [ref: - orders._id ]
  buyerId ObjectId [ref: < users._id ]
  productId ObjectId [ref: - products._id ]
  quantity number
  price number
  amount number
  status cartStatus [default: 'pending']
  isPaid bool
  createdBy ObjectId [ref: > users._id, default: null]
  createdAt datetime
  updatedBy ObjectId [ref: > users._id, default: null]
  updatedAt datetime

}
enum orderStatus{
  pending
  processing
  canclled
  confirmed
  delivered

}
table orders {
  _id ObjectId
  buyerId ObjectId [ref: < users._id ]
  orderDate date
  orderDetail ObjectId [ref: < cartDetails._id]
  subTotal number
  discount number
  deliveryAmount number
  tax amount
  serviceCharge number
  totalAmount number
  isPaid bool [default: false]
  status orderStatus [default: 'pending']
  createdBy ObjectId [ref: > users._id, default: null]
  createdAt datetime
  updatedBy ObjectId [ref: > users._id, default: null]
  updatedAt datetime

}



Application ER(add createdBy, createdAt, updatedBy, updatedAt, deletedBy, deletedAt for each section)
--->School Management System
    -->Students
        id,name, email, dob, adress,phone
    -->guardians
        id,name, email, phone, address,gender
    -->studentGuardians
        id, studentId, guardianId
    -->Classes
        id, name
    -->Sections
        id, name 
    -->Teachers
        id, name, phone, address, email
    -->Subject
        id, name
    -->subTeacher
        id, teacherId, subjectId
    -->classSub
        id, classId, subjectId
    -->classSection
        id, sectionID, classId, classTeacherID, monitorId
    -->classStudent
        id, studentID, classSectionId
    -->classRoutine
        id, classSectionId, day, period, subjectId, teacherId
    -->Attendance
        id, classSectionId, date, studentId, status, remarks, teacherId
    -->Exam
        id, classSectionId, startDate, endDate, examType
    -->examshedule
        id, examId, date, subjectId, passMark, fullMark, practicalMark
    -->Results
        id, studentId, examId, sheduleId, obtMarks, remarks, division, percentage