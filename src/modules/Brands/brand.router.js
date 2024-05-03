const auth = require("../../middleware/auth.middleware");
const allowRole = require("../../middleware/rbac.middleware");
const { setPath, uploader } = require("../../middleware/uploader.middleware");
const { bodyValidator } = require("../../middleware/validator.middleware");
const brandCtrl = require("./brand.controller");
const { BrandCreateDTO, BrandUpdateDTO } = require("./brand.dto");

const router = require("express").Router()

router.get('/home-list', brandCtrl.listForHome);

router.route('/')
    .post(
        auth, 
        allowRole('admin'), 
        setPath('brands'), 
        uploader.single('image'), 
        bodyValidator(BrandCreateDTO, ['image']),
        brandCtrl.create
    )// create 
    .get(
        auth,
        allowRole("admin"),
        brandCtrl.index
    );//list all

router.route('/:id')
    .get(
        auth,
        allowRole('admin'),
        brandCtrl.show
    )// show detail
    .put(
        auth,
        allowRole('admin'),
        setPath('brands'),
        uploader.single('image'),
        bodyValidator(BrandUpdateDTO, ['image']),
        brandCtrl.update
    )//partial updates   --<>--Patch==>replace the entire resource 
    .delete(
        auth,
        allowRole('admin'),
        brandCtrl.delete
    )//delete

module.exports = router;