# language: pt

@cadastro_de_usuario
Funcionalidade: Cadastro de usuário //essa parte não é obrigatória
  Eu como usuário do sistema
  Quero me cadastrar
  Para finalizar uma compra no site //o para é o valor agregado ao que será entregue

  Contexto: Acessar tela de cadastro
    Dado que estou na tela de cadastro de usuário

  @cadastro_usuario_sucesso
  Cenário: Cadastrar usuário com sucesso
    E preencho todos os campos obrigatórios
    Quando clico em cadastrar
    Então vejo mensagem de usuário cadastrado com sucesso

  @cadastro_dados_invalidos
  Esquema do Cenario: Validar <nomeDoCenario>
    Quando preencho o campo "<nome>", "<email>" e "<senha>"
    E clico em cadastrar
    Entao vejo mensagem de cadastro inválido

    Exemplos:
    |nomeDoCenario                              |nome    |email         | senha|
    |Nome em branco na tela de cadastro         |        |qa@qazando.com|012345|
    |Validar senha em branco na tela de cadastro|Fernanda|qa@qazando.com|      |
    |Validar email em branco na tela de cadastro|Fernanda|              |012345|



