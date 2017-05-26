const levelup = require('level')
const db = levelup('../mydb')
const products = [
  {
    id: 1,
    productName: 'Short Sleeve Basic Tee',
    price:  15.99,
    description:  'Womens 100% cotton short sleeve basic tee for any occasion.',
    image: 'http://photobyjohnny.com/ITEM_IMAGE/WT1/WT1-BLACK-1.jpg'
  },
  {
    id: 2,
    productName: 'Floral Print Vneck Tunic Shirt with Bell Sleve',
    price: 24.99,
    description:  'Womens 100% cotton floral print tunic for any semi-casual occasion.',
    image: 'http://photobyjohnny.com/ITEM_IMAGE/WT1210/WT1210-BLACK-1.jpg'
  },
  {
    id: 3,
    productName: 'Ribbed Sleeveless Tank Top',
    price:  9.99,
    description:  'Womens ribbed tank top perfect for any sunny occasion.',
    image: 'http://photobyjohnny.com/ITEM_IMAGE/WT16/WT16-BLACK-1.jpg'
  },
  {
    id: 4,
    productName: 'Basic Short Sleeve Vneck Tunic Dress',
    price:  17.99,
    description:  'Womens basic tunic dress for any beach occasion.',
    image: 'http://photobyjohnny.com/ITEM_IMAGE/WT769/WT769-AQUA-1.jpg'
  },
  {
    id: 5,
    productName: 'Short Sleeve Basic Tee',
    price:  15.99,
    description:  'Womens 100% cotton short sleeve basic tee for any occasion.',
    image: 'http://photobyjohnny.com/ITEM_IMAGE/WT1/WT1-BLACK-1.jpg'
  },
  {
    id: 6,
    productName: 'Floral Print Vneck Tunic Shirt with Bell Sleve',
    price: 24.99,
    description:  'Womens 100% cotton floral print tunic for any semi-casual occasion.',
    image: 'http://photobyjohnny.com/ITEM_IMAGE/WT1210/WT1210-BLACK-1.jpg'
  },
  {
    id: 7,
    productName: 'Ribbed Sleeveless Tank Top',
    price:  9.99,
    description:  'Womens ribbed tank top perfect for any sunny occasion.',
    image: 'http://photobyjohnny.com/ITEM_IMAGE/WT16/WT16-BLACK-1.jpg'
  },
  {
    id: 8,
    productName: 'Basic Short Sleeve Vneck Tunic Dress',
    price:  17.99,
    description:  'Womens basic tunic dress for any beach occasion.',
    image: 'http://photobyjohnny.com/ITEM_IMAGE/WT769/WT769-AQUA-1.jpg'
  }
]

db.put('products', JSON.stringify(products), err => {
  if (err) return console.log('Wrong!', err)
})
