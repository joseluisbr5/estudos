
class Produto{
    constructor(){
        this.id = 1;
        this.arrayProdutos = [];
        this.editId = null;
        }
    salvar(){
        let produto = this.lerDados();

       if( this.validaCampos(produto)){
        if(this.editId == null){
            this.adicionar(produto);
        }else{
            this.atualizar(this.editId, produto);
        }
       }

        this.listaTabela();
        this.cancelar();
    }
   Cancelar(){
        document.getElementById('produto').value = ''
        document.getElementById('valor').value = ''
   }
    
    listaTabela(){
        let tbody = document.getElementById('tbody');
        tbody.innerText = '';

        for(let i = 0; i < this.arrayProdutos.length; i++){
            let tr = tbody.insertRow();

            let td_id = tr.insertCell();
            let td_produto= tr.insertCell();
            let td_valor = tr.insertCell();
            let td_acoes = tr.insertCell();
            
            td_id.innerText = this.arrayProdutos[i].id;
            td_produto.innerText = this.arrayProdutos[i].nomeProduto;
            td_valor.innerText = this.arrayProdutos[i].valor;

            td_id.classList.add('center');
            td_acoes.classList.add('center');
            
            let imgEdit = document.createElement('img');
            imgEdit.src = 'img/editar-texto.png';
            imgEdit.setAttribute("onclick", "produto.editar("+JSON.stringify(this.arrayProdutos[i])+ ")");
            td_acoes.appendChild(imgEdit);

            let imgDelete = document.createElement('img');
            imgDelete.src = 'img/excluir.png';
            imgDelete.setAttribute("onclick", "produto.deletar("+this.arrayProdutos[i].id+ ")");
            td_acoes.appendChild(imgDelete);

            

        }
    }
    adicionar(produto){
        produto.valor = parseFloat(produto.valor);

        this.arrayProdutos.push(produto);
        this.id++;
    }
    atualizar(id, produto){
        for(let i = 0; i < this.arrayProdutos.length; i++){
            if(this.arrayProdutos[i].id == id){
                this.arrayProdutos[i].nomeProduto = produto.nomeProduto;
                this.arrayProdutos[i].valor = produto.valor;
            }
        }
    }
    editar(dados){
        this.editId = dados.id;
        document.getElementById('produto').value = dados.nomeProduto;
        document.getElementById('valor').value = dados.valor;

        document.getElementById('btn1').innerText = 'Atualizar';
    }

    lerDados(){
        let produto = {}
       
       produto.id = this.id;
       produto.nomeProduto = document.getElementById('produto').value;
       produto.valor = document.getElementById('valor').value;

        return produto;

    }
    validaCampos(produto){
        let msg = '';

        if(produto.nomeProduto == ''){
            msg += '- informe o nome do produto'
        }
        if(produto.valor == ''){
            msg += '- informe o valor do produto \n'
        }
        if(msg != ''){
            alert(msg);
            return false
        }
        return true;
        
        }
    cancelar(){
            document.getElementById('produto').value = '';
            document.getElementById('valor').value = '';

            document.getElementById('btn1').innerText = 'Salvar';

            this.editId = null;


        }
     deletar(id){

            if(confirm('Deseja realmente deletar o produto do ID' + id + '?')){
            let tbody = document.getElementById('tbody');

           for(let i = 0; i < this.arrayProdutos.length; i++){
            if(this.arrayProdutos[i].id == id){
                this.arrayProdutos.splice(i, 1);

                tbody.deleteRow(i);
            }
            }
           }
        }
    }

    var produto = new Produto()


