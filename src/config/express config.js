const express = require('express')
const app = express();
const authRoute = require("../modules/Auth/auth.router")
app.use(authRoute)

//  /about ===> get request
app.get("/about", (request, response)=>{
    const data = {
        title:"Building Global IT Professionals Since 2008",
        summary: "Broadway Infosys is one of the best inclusive computer training institutes in Kathmandu, Nepal. Established in 2008, our professional IT Training and Development center has been employing experts in this field to impart professional education to trainees.    ",
        content: [
            {
                title: "Broadway History",
                content:`<div class="col col-sm-6">
                <p bis_size="{" x="">Broadway Infosys is one of the best inclusive computer training institutes in Kathmandu, Nepal. Established in 2008, our professional IT Training and Development center has been employing experts in this field to impart professional education to trainees. We offer well-structured complete professional training in various Programming Languages, Graphics &amp; Multimedia, Web Designing as well as Development Training that is based upon the current recruitment needs in the IT market.</p>
                <p bis_size="{" x="">To summarize, Broadway Infosys is a complete learning institute that not only provides training on various IT courses but also prepares students to smartly handle the real working environment.</p>
                <div bis_size="{" x="">
                <h3 bis_size="{" x="">We are dedicated and committed towards:</h3>
                <ul bis_size="{" x="">
                <li bis_size="{" x="">Providing quality IT training to the aspiring IT professionals</li>
                <li bis_size="{" x="">Availability of highly qualified and experienced instructors</li>
                <li bis_size="{" x="">Assigning project works as per the nature of the courses</li>
                <li bis_size="{" x="">Conducting regular project work evaluation sessions</li>
                <li bis_size="{" x="">Identifying trainees' skills and knowledge gaps</li>
                <li bis_size="{" x="">Taking corrective actions to enhance trainees' skills</li>
                <li bis_size="{" x="">Providing internship and job placement facilities to the trainees</li>
                <li bis_size="{" x="">Building long-term trustful relationship with the trainees</li>
                </ul>
                <p bis_size="{" x="">Since establishment, we have successfully established and maintained network with more than fifty IT and other companies which has made us able to offer and provide our students with internship and job opportunities.</p>
                </div>
                </div>`,
            images: [
                '/about-us/1633368094.Group@660-min.jpg',
                '/about-us/1633368094.Group@660-min.jpg',
                '/about-us/1633368094.Group@660-min.jpg'
            ]
            },
            {
                title: "Our Vision & Mission",
                content: `<p>"To empower the nation through generation of computer literates and competent IT professionals who could serve as valuable resource and responsible innovative citizens."</p>

                <p>"Broadway Infosys Nepal's team is and will be dedicated to develop and impart quality IT training and service to all; achieving excellence in creative, innovative and up to-date teaching-learning, facilitating effective interactions among faculty, management and students and acting as a contributing institution for the employees, society and all stakeholders."</p>`
            }
        ]
    }
    response.json({
        result: data,
        message: "Sucess",
        meta: null
    })
});
// dynamic routing, params
app.get("/:productSlug", (req, res)=>{
    //filter
    const params = req.params; //ob object of params
    //data fetch
    let data = null;
    //TODO: Data fetch based on params
    const dbData = null;
    if(dbData){
        res.json({
            result: params,
            message: "Sucess",
            meta: ""
        })    
    }else{
        res.status(404).json({
            result: null,
            message: "Data not found",
            meta: ""
        })
    }

    
})
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
// 400, 422, 401, 403, 404, 200, 204
app.use("/", (request, response)=>{
    // response.send("Hello world");
    // response.end()
    // response.render()
    // response.download()
    // response.status().json()
    // response.sendStatus()
    response.json({
        result:"any",
        message: "success",
        meta:null
    })
})
// in use if i send url then it is response
// if i send call back then it is request
module.exports = app;