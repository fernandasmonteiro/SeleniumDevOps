$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/login.feature");
formatter.feature({
  "name": "Login",
  "description": "   Eu como usuário do sistema\n   Quero fazer login\n   Para fazer uma compra no site",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.background({
  "name": "Acessar tela de Login",
  "description": "",
  "keyword": "Contexto"
});
formatter.step({
  "name": "que estou na tela de login",
  "keyword": "Dado "
});
formatter.match({
  "location": "LoginSteps.que_estou_na_tela_de_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login com sucesso",
  "description": "",
  "keyword": "Cenário",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@login-sucesso"
    }
  ]
});
formatter.step({
  "name": "preencho login \"eduardo.finotti@qazando.com\" e senha \"123456\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "LoginSteps.preencho_login_e_senha(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clico em Login",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.clico_em_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "vejo mensagem de login com sucesso",
  "keyword": "Então "
});
formatter.match({
  "location": "LoginSteps.vejo_mensagem_login_sucesso()"
});
formatter.result({
  "status": "passed"
});
});