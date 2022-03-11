// {
//     "id": 1,
//     "name": "커피 컵",
//     "price": 10000,
//     "imageUrl": "https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/assignment_image/cafe_coffee_cup.png",
//     "productOptions": []
// }

export default class Product {
  id;
  name;
  price;
  imageUrl;
  productOptions;
  constructor(id, name, price, imageUrl, productOptions) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.imageUrl = imageUrl;
    this.productOptions = [...productOptions];
  }
}
