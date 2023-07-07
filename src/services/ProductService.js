class ProductService {
  constructor() {
    this.nextId = 4;
    this.products = [
      {
        id: 1,
        name: "Parfem",
        count: 0,
      },
      {
        id: 2,
        name: "Pivo",
        count: 3,
      },
      {
        id: 3,
        name: "Cokolada",
        count: 15,
      },
    ];
  }
  getAll() {
    return this.products;
  }
  get(id) {
    return this.products.find((product) => product.id === Number(id));
  }
  increment(id) {
    const product = this.products.find((product) => product.id === id);
    product.count++;
    return product;
  }

  decrement(id) {
    const product = this.products.find((product) => product.id === Number(id));
    if (product.count <= 0) {
      return false; // nema na lageru
    }
    product.count--;
    return product;
  }
  search(term) {
    return this.products.filter((product) =>
      product.name.toLocaleLowerCase().includes(term.toLocaleLowerCase())
    );
  }
}
const productService = new ProductService();
export default productService;
