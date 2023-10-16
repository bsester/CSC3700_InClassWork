const adminData = require("../routes/admin");
// const Product = require("../models/oproduct");
const Product = require("../models/product");
// let products = [];
exports.getAddProduct = ( req, res, next) => {
    res.render( 'admin/addProduct',
        {
            from: 'addProduct'
        })
}
exports.postAddProduct = ( req, res, next) => {
    let t = req.body.title;
    let a = req.body.author;
    let p = req.body.price
    const product = new Product( t, a, p );
    product.save();
    // products.push({
    //     title: t,
    //     author: a,
    //     price: p
    // })
    res.redirect('/add-product')
}
exports.getProducts = ( req, res, next ) => {
    // const products = Product.fetchAll();
    // res.render( 'showProducts', {
    //     title: "Show Available Products",
    //     from: 'showProducts',
    //     products : products
    // });
<<<<<<< HEAD
    Product.fetchAll( products => {
=======
     Product.fetchAll( products => {
>>>>>>> 61327d83b7cf9cd8f2af96fe208f9a4b30f168c7
        res.render( 'admin/showProductsAdmin', {
            title: "Show Available Products",
            from: 'showProducts',
            products : products
        });
    });
}