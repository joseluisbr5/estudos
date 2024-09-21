class Fornecedor:
    def __init__(self, cnpj, nome):
        self.cnpj = cnpj
        self.nome = nome

class Produto:
    def __init__(self, codigo, descricao, preco_compra, preco_venda, quantidade, estoque_minimo, fornecedor):
        self.codigo = codigo
        self.descricao = descricao
        self.preco_compra = preco_compra
        self.preco_venda = preco_venda
        self.quantidade = quantidade
        self.estoque_minimo = estoque_minimo
        self.fornecedor = fornecedor

    def compra(self, quant, valor):
        self.quantidade += quant
        self.preco_compra = valor / quant

    def venda(self, quant):
        if self.quantidade >= quant:
            self.quantidade -= quant
            return quant * self.preco_venda
        else:
            return 0
