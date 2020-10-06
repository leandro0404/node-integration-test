
var waterfall = require('async-waterfall');
const gerarCpf = require('gerar-cpf')
var expect = require("chai").expect;

describe('Cadastro de person', function () {

   it('cadastro person execucao de fluxo pessoa fisica', done => {
       waterfall(
           [
               createPerson,
               buscarPessoaCadastrada,
               verificandoPessoa,               
               function () {
                   done();
               }
           ],
           done
       );
   });

   
   it('verificacao de natureza', done => {
    waterfall(
        [
            verificaNatureza,              
            function () {
                done();
            }
        ],
        done
    );
});

});

function  createPerson(callback)
{

 var cpf = gerarCpf();

 //console.log(`cadastrei uma pessoa com cpf ${cpf}`)

 callback(null,cpf);

}


function  buscarPessoaCadastrada(cpf,callback)
{
 //console.log(`buscando pessoa cadastrada ${cpf}`)

 var person = {
   documentNumber : cpf,
   name : "fulano de tal",
   year : 33

 }

 callback(null,person);

}

function  verificandoPessoa(person,callback)
{
// console.log("verificando pessoa cadastrada")
// console.log(person);
 expect(person.name).to.equal("fulano de tal");
 callback(null);

}

function  verificaNatureza(callback)
{

 callback(null);

}