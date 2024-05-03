const auth = require("../../middleware/auth.middleware");
const allowRole = require("../../middleware/rbac.middleware");
const { setPath, uploader } = require("../../middleware/uploader.middleware");
const { bodyValidator } = require("../../middleware/validator.middleware");
const productCtrl = require("./product.controller");
const { ProductCreateDTO, ProductUpdateDTO } = require("./product.dto");

const router = require("express").Router()

router.get('/home-list', productCtrl.listForHome);
router.route('/')
    .post(
        auth, 
        allowRole('admin'), 
        setPath('product'), 
        uploader.array('images'), 
        bodyValidator(ProductCreateDTO),
        productCtrl.create
    )
    .get(
        auth,
        allowRole("admin"),
        productCtrl.index
    );

router.route('/:id')
    .get(
        auth,
        allowRole('admin'),
        productCtrl.show
    )
    .put(
        auth,
        allowRole('admin'),
        setPath('product'),
        uploader.array('images'),
        bodyValidator(ProductUpdateDTO, ['images']),
        productCtrl.update
    )
    .delete(
        auth,
        allowRole('admin'),
        productCtrl.delete
    )

module.exports = router;