/*o JavaScript vai percorrer o HTML e vai pegar esses elementos automaticamente por conta do 'getElementById' */
const nomeCompletoInput = document.getElementById('nomeCompletoCadastro');
const dataNascimentoInput = document.getElementById('dataNascimentoCadastro');
const emailInput = document.getElementById('emailCadastro');
const senhaInput = document.getElementById('senhaCadastro');
const tabelaCadastroDiv = document.getElementById('tabelaCadastro');

const pessoas = JSON.parse(localStorage.getItem("pessoasCadastro"));//coloca entre "" o nome da chave que você quer pegar

for (let index = 0; index < pessoas.length; index++){
    mostraPessoa(pessoas[index]);
}

function mostraPessoa(batata){

    console.log(nomeCompletoInput.value); /* "value" funciona em tags de INPUT, TEXTEAREA e SELECT */
    console.log(dataNascimentoInput.value);
    console.log(emailInput.value);
    console.log(senhaInput.value); 
    console.log(tabelaCadastroDiv); /* "value" não é usado quando se há uma classe DIV, ele é usado apenas para INPUT, TEXTAREA e SELECT */

    tabelaCadastroDiv.innerHTML += `<span style="color: Red; background-Color: Green;">Nome: ${batata.nome}</span><br>`;
    tabelaCadastroDiv.innerHTML += `<span style="color: White; background-Color: Black;">Data de Nascimento: ${batata.data} </span><br>`;
    tabelaCadastroDiv.innerHTML += `<span style="color: Yellow; background-Color: Purple;">Email: ${batata.email}        </span><br>`;
    tabelaCadastroDiv.innerHTML += `<span style="color: Grey; background-Color: Blue;">Senha: ${batata.senha}            </span><br>`;
    tabelaCadastroDiv.innerHTML += `<p></p>`

}

function cadastrarUsuario(){
    const pessoa = {};

    let pessoasCadastradas = JSON.parse(localStorage.getItem("pessoasCadastro"));
    if(!pessoasCadastradas){
        pessoasCadastradas = [];
    }

    pessoasCadastradas.push(pessoa);

    pessoa.nome = nomeCompletoInput.value;
    pessoa.data = dataNascimentoInput.value;
    pessoa.email = emailInput.value;
    pessoa.senha = senhaInput.value;

    localStorage.setItem("pessoasCadastro", JSON.stringify(pessoasCadastradas)); //JSON.stringfy pega o objeto e transforma em texto

    mostraPessoa(pessoa);

    console.log("Usuário cadastrado");
    return false;
}

