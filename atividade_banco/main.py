from conta import Conta
from banco import Banco

# Crie um banco
meu_banco = Banco()

# Crie algumas contas
cliente1 = Cliente("João", "Silva", "12345678900")
conta1 = Conta(cliente1, "001", 1000.0, 500.0)
conta2 = Conta(cliente1, "002", 2000.0, 1000.0)

# Adicione as contas ao banco
meu_banco.cadastro(conta1)
meu_banco.cadastro(conta2)

# Realize algumas operações bancárias
meu_banco.deposito("001", 500.0)
meu_banco.saque("002", 300.0)

# Exiba o saldo das contas
print("Saldo da conta 001:", meu_banco.saldo("001"))
print("Saldo da conta 002:", meu_banco.saldo("002"))
