const products = require("./products");

const productRepository = {
  create: async (newProduct) => {
    if (!newProduct) throw new Error("Falha ao criar o produto");
    products.push(newProduct);
    return newProduct;
  },

  list: async () => {
    return products;
  },

  findById: async (id) => {
    return products.find((p) => p.id === Number(id));
  },

  update: async (id, updatedData) => {
    const index = products.findIndex((product) => product.id === Number(id));
    if (index === -1) return null;

    products[index] = { ...products[index], ...updatedData };
    return products[index];
  },

  delete: async (id) => {
    const index = products.findIndex((product) => product.id === Number(id));
    if (index === -1) return false;

    products.splice(index, 1);
    return true;
  },
};

module.exports = productRepository;
