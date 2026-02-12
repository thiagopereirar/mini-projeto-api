const productService = require("../services/product.service");

const productController = {
  create: async (req, res) => {
    try {
      const newProduct = await productService.create(req.body);

      return res.status(201).json({
        ok: true,
        erro: null,
        data: newProduct,
      });
    } catch (error) {
      return res.status(400).json({
        ok: false,
        erro: error.message,
        data: null,
      });
    }
  },

  list: async (req, res) => {
    try {
      const products = await productService.list();
      return res.status(200).json({
        ok: true,
        erro: null,
        data: products,
      });
    } catch (error) {
      return res.status(500).json({
        ok: false,
        erro: "Erro interno ao listar produtos",
        data: null,
      });
    }
  },

  findById: async (req, res) => {
    try {
      const product = await productService.findById(req.params.id);
      return res.status(200).json({
        ok: true,
        erro: null,
        data: product,
      });
    } catch (error) {
      return res.status(404).json({
        ok: false,
        erro: error.message,
        data: null,
      });
    }
  },

  update: async (req, res) => {
    try {
      const updatedProduct = await productService.update(
        req.params.id,
        req.body,
      );
      return res.status(200).json({
        ok: true,
        erro: null,
        data: updatedProduct,
      });
    } catch (error) {
      return res.status(400).json({
        ok: false,
        erro: error.message,
        data: null,
      });
    }
  },

  delete: async (req, res) => {
    try {
      await productService.delete(req.params.id);
      return res.status(200).json({
        ok: true,
        erro: null,
        data: "Produto removido com sucesso",
      });
    } catch (error) {
      return res.status(400).json({
        ok: false,
        erro: error.message,
        data: null,
      });
    }
  },
};

module.exports = productController;
