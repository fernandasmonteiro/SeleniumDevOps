# Projeto de Automação de Testes - curso da Qazando 

Projeto de Automação de Testes realizado em Java utilizando
java e jUnit para rodar os testes. 

Foi configurado um arquivo YML para que fosse possível rodar o teste
na pipeline cada vez que fosse feito um pull_request para o git-hub. 

Para isso foi necessário configurar esse arquivo com as informações referentes
ao passo a passo para rodar o teste:

1) A cada pull request no gitHub a pipeline é iniciada;
2) Clonar o repositório;
3) Instalar e configurar as ferramentas necessárias: Java, Maven e ChromeDriver;
4) Comando para rodar o teste via comandLine. 


