$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/cadastro_usuario.feature");
formatter.feature({
  "name": "Cadastro de usuário //essa parte não é obrigatória",
  "description": "  Eu como usuário do sistema\n  Quero me cadastrar\n  Para finalizar uma compra no site //o para é o valor agregado ao que será entregue",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@cadastro_de_usuario"
    }
  ]
});
formatter.background({
  "name": "Acessar tela de cadastro",
  "description": "",
  "keyword": "Contexto"
});
formatter.step({
  "name": "que estou na tela de cadastro de usuário",
  "keyword": "Dado "
});
formatter.match({
  "location": "CadastroUsuarioSteps.que_estou_na_tela_de_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Cadastrar usuário com sucesso",
  "description": "",
  "keyword": "Cenário",
  "tags": [
    {
      "name": "@cadastro_de_usuario"
    },
    {
      "name": "@cadastro_usuario_sucesso"
    }
  ]
});
formatter.step({
  "name": "preencho todos os campos obrigatórios",
  "keyword": "E "
});
formatter.match({
  "location": "CadastroUsuarioSteps.preencho_campos_obrigatorios()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clico em cadastrar",
  "keyword": "Quando "
});
formatter.match({
  "location": "CadastroUsuarioSteps.clico_cadastrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "vejo mensagem de usuário cadastrado com sucesso",
  "keyword": "Então "
});
formatter.match({
  "location": "CadastroUsuarioSteps.vejo_mensagem_cadastro_sucesso()"
});
formatter.result({
  "status": "passed"
});
});