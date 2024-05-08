const auth = require("../../middleware/auth.middleware");
const allowRole = require("../../middleware/rbac.middleware");
const { setPath, uploader } = require("../../middleware/uploader.middleware");
const { bodyValidator } = require("../../middleware/validator.middleware");
const categoryCtrl = require("./category.controller");
const { categoryCreateDTO, categoryUpdateDTO } = require("./category.dto");

const router = require("express").Router()
router.get('/home-list', categoryCtrl.listForHome);
router.get('/:slug/detail', categoryCtrl.getCategoryBySlug)
router.route('/')
    .post(
        auth, 
        allowRole('admin'), 
        setPath('category'), 
        uploader.single('image'), 
        bodyValidator(categoryCreateDTO),
        categoryCtrl.create
    )
    .get(
        auth,
        allowRole("admin"),
        categoryCtrl.index
    )

router.route('/:id')
    .get(
        auth,
        allowRole('admin'),
        categoryCtrl.show
    )
    .put(
        auth,
        allowRole('admin'),
        setPath('category'),
        uploader.single('image'),
        bodyValidator(categoryUpdateDTO, ['image']),
        categoryCtrl.update
    )
    .delete(
        auth,
        allowRole('admin'),
        categoryCtrl.delete
    )

module.exports = router;