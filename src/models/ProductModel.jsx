export default class ProductModel {
  constructor(obj) {
    Object.assign(this, {
      name: '',
      price: '',
      color: '',
      img: ''
    }, obj);
  }
}
