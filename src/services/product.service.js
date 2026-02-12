const productRepository = require("../database/product.repository");

const productService = {
  create: async (productData) => {
    const { nome, preco } = productData;

    const min_name_length = 2;
    if (
      !nome ||
      typeof nome !== "string" ||
      nome.trim().length < min_name_length
    )
      throw new Error("O nome do produto deve ter pelo menos 2 caracteres");

    if (!preco || preco <= 0) {
      throw new Error("O preço deve ser um valor maior que zero");
    }

    const newProduct = {
      id: Date.now(),
      nome: nome.trim(),
      preco: Number(preco.toFixed(2)),
    };

    return await productRepository.create(newProduct);
  },

  list: async () => {
    return await productRepository.list();
  },

  findById: async (id) => {
    const product = await productRepository.findById(id);

    if (!product) {
      throw new Error("Produto não encontrado");
    }

    return product;
  },

  update: async (id, updatedData) => {
    const product = await productRepository.update(id, updatedData);

    if (!product) {
      throw new Error("Não foi possível atualizar: Produto não encontrado");
    }

    return product;
  },

  delete: async (id) => {
    const success = await productRepository.delete(id);

    if (!success) {
      throw new Error("Não foi possível remover: Produto não encotrado");
    }

    return true;
  },
};

module.exports = productService;
