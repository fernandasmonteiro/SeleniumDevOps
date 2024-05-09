 # language: pt

 @login
 Funcionalidade: Login
   Eu como usuário do sistema
   Quero fazer login
   Para fazer uma compra no site

   Contexto: Acessar tela de Login
     Dado que estou na tela de login

   @login-sucesso
   Cenário: Login com sucesso
     Quando preencho login "eduardo.finotti@qazando.com" e senha "123456"
     E clico em Login
     Então vejo mensagem de login com sucesso

   @login-dados-invalidos
   Esquema do Cenario: Validar: <name>
     Quando preencho login "<user>" e senha "<password>"
     E clico em Login
     Entao vejo mensagem "<message>" de campo não preenchido

     Exemplos:
     | user                      | password | message        | name                     |
     |emailInvalido              |123456    |E-mail inválido.| login com email inválido |
     |                           |123456    |E-mail inválido.| login com email vazio    |
     |eduardo.finotti@qazando.com|00        |Senha inválida. | login com senha inválida |
     |eduardo.finotti@qazando.com|          |Senha inválida. | login com senha vazia    |

