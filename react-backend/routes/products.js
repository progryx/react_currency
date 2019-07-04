var express = require('express');
var router = express.Router();

const products = [
    {
        id: 1,
        name: 'Разработка сайта',
        img: 'https://seogroup.com.ua/wp-content/uploads/2017/10/service_img_1.png',
        price: 1500
    }, {
        id: 2,
        name: 'Разработка MOB',
        img: 'http://ssg-dv.ru/wp-content/uploads/2016/09/3.jpg',
        price: 3700
    }, {
        id: 3,
        name: 'Продвижение SEO',
        img: 'https://media-bro.ru/images/ok-illustration-seo.jpg',
        price: 950
    }
];

let cart = [{

}];

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.json(products);
});

router.get('/cart', function (req, res, next) {
    res.json(cart);
});


router.post('/add', function (req, res, next) {
    const id = req.body.id;
    const count = req.body.count;
    const cart = products.map( p => {
        if (p.id === id) {
            cart.push(p);
        }
    })

});

module.exports = router;
