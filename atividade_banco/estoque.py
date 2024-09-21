from produto import Produto

class Estoque:
    def __init__(self):
        self.produtos = {}

    def compra(self, codigo, quant, valor):
        if codigo in self.produtos:
            produto = self.produtos[codigo]
            produto.compra(quant, valor)
        else:
            print("Produto não encontrado.")

    def venda(self, codigo, quant):
        if codigo in self.produtos:
            produto = self.produtos[codigo]
            return produto.venda(quant)
        else:
            print("Produto não encontrado.")

    def adicionar_produto(self, codigo, descricao, preco_compra, preco_venda, estoque_minimo, fornecedor):
        if codigo not in self.produtos:
            self.produtos[codigo] = Produto(codigo, descricao, preco_compra, preco_venda, 0, estoque_minimo, fornecedor)
        else:
            print("Produto já existe no estoque.")
