class Data:
    def __init__(self, dia, mes, ano):
        self.dia = dia
        self.mes = mes
        self.ano = ano

class Historico:
    def __init__(self, data_abertura):
        self.data_abertura = data_abertura
        self.transacoes = []

    def imprime(self):
        print("Data de abertura da conta:", self.data_abertura.dia, "/", self.data_abertura.mes, "/", self.data_abertura.ano)
        print("Transações:")
        for transacao in self.transacoes:
            print(transacao)

class Cliente:
    def __init__(self, nome, sobrenome, cpf):
        self.nome = nome
        self.sobrenome = sobrenome
        self.cpf = cpf

class Conta:
    _total_contas = 0

    def __init__(self, cliente, saldo=0.0, limite=0.0):
        Conta._total_contas += 1
        self.numero = str(Conta._total_contas)
        self.saldo = saldo
        self.limite = limite
        self.cliente = cliente
        self.historico = Historico(Data(1, 1, 2024))

    def deposita(self, valor, data=None):
        self.saldo += valor
        if data:
            self.historico.transacoes.append(f"Depósito de R$ {valor} na data {data.dia}/{data.mes}/{data.ano}")
        else:
            self.historico.transacoes.append(f"Depósito de R$ {valor}")

    def saca(self, valor, data=None):
        if self.saldo >= valor:
            self.saldo -= valor
            if data:
                self.historico.transacoes.append(f"Saque de R$ {valor} na data {data.dia}/{data.mes}/{data.ano}")
            else:
                self.historico.transacoes.append(f"Saque de R$ {valor}")
            return True
        else:
            return False

    def transfere_para(self, destino, valor, data=None):
        if self.saca(valor, data):
            destino.deposita(valor, data)
            if data:
                self.historico.transacoes.append(f"Transferência de R$ {valor} para conta {destino.numero} na data {data.dia}/{data.mes}/{data.ano}")
            else:
                self.historico.transacoes.append(f"Transferência de R$ {valor} para conta {destino.numero}")
            return True
        else:
            return False

    def extrato(self):
        print("Extrato da conta:")
        print("Número da Conta:", self.numero)
        print("Saldo:", self.saldo)
        print("Limite:", self.limite)
        print("Cliente:", self.cliente.nome, self.cliente.sobrenome)
        self.historico.imprime()

    def calcula_juros(self, taxa, data=None):
        juros = self.limite * (taxa / 100)
        self.saldo -= juros
        if data:
            self.historico.transacoes.append(f"Cálculo de juros na data {data.dia}/{data.mes}/{data.ano}")
        else:
            self.historico.transacoes.append("Cálculo de juros")
