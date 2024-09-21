from conta import Conta

class Banco:
    def __init__(self):
        self.contas = []

    def cadastro(self, conta):
        self.contas.append(conta)

    def deposito(self, numero, valor, data=None):
        conta = self.busca_conta(numero)
        if conta:
            conta.deposita(valor, data)
        else:
            return False

    def saque(self, numero, valor, data=None):
        conta = self.busca_conta(numero)
        if conta:
            return conta.saca(valor, data)
        else:
            return False

    def saldo(self, numero):
        conta = self.busca_conta(numero)
        if conta:
            return conta.saldo
        else:
            return False

    def transfere(self, origem, destino, valor, data=None):
        conta_origem = self.busca_conta(origem)
        conta_destino = self.busca_conta(destino)
        if conta_origem and conta_destino:
            return conta_origem.transfere_para(conta_destino, valor, data)
        else:
            return False

    def busca_conta(self, numero):
        for conta in self.contas:
            if conta.numero == numero:
                return conta
        return None
