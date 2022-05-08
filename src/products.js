const products = [
  {
    id: 1,
    name: 'panadol',
    price: 3,
    img: 'https://i-cf65.ch-static.com/content/dam/cf-consumer-healthcare/panadol/en_ie/ireland-products/panadol-extra/MGK5158-GSK-Panadol-Extra-455x455.png?auto=format',
  },
  {
    id: 2,
    name: 'ibuprofen',
    price: 5,
    img: 'data:image/jpeg;base64,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',
  },
  {
    id: 3,
    name: 'vaseline',
    price: 1,
    img: 'https://www.luluhypermarket.com/medias/1364439-08.jpg-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNjA0NTl8aW1hZ2UvanBlZ3xoZDMvaDcxLzEyNDUxOTI4ODk5NjE0LzEzNjQ0MzktMDguanBnXzEyMDBXeDEyMDBIfDE3NzdmMTEwOGU1NGMxYzgwYTYyMTQ2NmY2OWU4Y2QxOTFlZDJiZDU3NjlhOTkzNzNlYWJjOGVlNmI3ZjZhOWY',
  },
];

export { products };
