# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Nesta parte do documento, abordaremos a especificação do projeto "Obra Aqui" a partir da perspectiva do usuário. Aqui está uma visão geral do que será abordado:

Definição do Problema:
-Descreveremos os desafios enfrentados no setor da construção civil que motivaram a criação do projeto "Obra Aqui". Isso nos ajudará a entender o contexto em que a aplicação será desenvolvida.

Diagrama de Personas:
-Desenvolveremos um ou mais diagramas de personas para representar os diferentes perfis de usuários que interagem com a aplicação. Isso nos ajudará a compreender as necessidades, expectativas e comportamentos dos usuários finais.

Ferramentas utilizadas: 
-Software de diagramação como Lucidchart, draw.io ou até mesmo papel e lápis.

Histórias de Usuários:
-Identificaremos e descreveremos as histórias de usuários, que são narrativas breves que descrevem uma funcionalidade ou tarefa específica que um usuário deseja realizar usando a aplicação.
-Ferramentas utilizadas: Documentos colaborativos, ferramentas de gestão de projetos como Jira ou Trello.

Requisitos Funcionais e Não Funcionais:
-Especificaremos os requisitos funcionais, que descrevem as funções e recursos específicos que a aplicação deve fornecer para atender às necessidades dos usuários.
-Identificaremos os requisitos não funcionais, que descrevem as características que a aplicação deve ter, como desempenho, segurança e usabilidade.
-Ferramentas utilizadas: Documentos colaborativos, ferramentas de gestão de requisitos como ReQtest ou Enterprise Architect.

Restrições do Projeto:
-Discutiremos as restrições do projeto, que podem incluir limitações de tempo, recursos, orçamento e tecnologia.
-Ferramentas utilizadas: Documentos colaborativos, reuniões de equipe para discussão e definição das restrições.
-Ao utilizar estas técnicas e ferramentas, seremos capazes de realizar uma especificação detalhada e abrangente do projeto "Obra Aqui", garantindo que as necessidades dos usuários sejam compreendidas e atendidas de forma eficaz.

## Personas

Persona 1: Pedro, 28 anos, Contador em BH e Noivo Animado

Descrição:
Pedro é um contador de 28 anos que mora em Belo Horizonte.
Ele é noivo e está muito animado com os preparativos para o casamento.
Além de seu trabalho como contador, Pedro é um torcedor fervoroso do Atlético Mineiro (Galo) e adora correr pelas ruas de BH para manter-se ativo.
Ele está na missão de reformar sua casa antes do casamento, para começar essa nova fase com o pé direito.

Necessidades e Objetivos:
Pedro precisa de uma maneira eficiente de gerenciar os projetos de reforma de sua casa enquanto equilibra os preparativos para o casamento e sua rotina de trabalho.
Ele procura por uma solução que forneça informações úteis e dicas práticas para ajudá-lo a realizar as reformas com sucesso, mesmo com sua agenda ocupada.
Pedro quer se sentir apoiado e motivado durante todo o processo de reforma, para garantir que tudo esteja pronto a tempo do casamento.

Desafios:
Equilibrar as demandas de trabalho, os preparativos do casamento e os projetos de reforma da casa pode ser desafiador e estressante para Pedro.
Ele precisa lidar com prazos apertados e garantir que as reformas sejam concluídas sem contratempos, enquanto ainda reserva tempo para suas atividades de lazer e hobbies.

Persona 2: Ana, 32 anos, Engenheira Civil em BH e Mãe de Dois Filhos

Descrição:
Ana é uma engenheira civil de 32 anos que vive em Belo Horizonte.
Ela é mãe de dois filhos pequenos e trabalha em uma empresa de construção civil na cidade.
Ana é uma profissional dedicada e experiente, que está constantemente buscando novas maneiras de aprimorar suas habilidades e conhecimentos na área.

Necessidades e Objetivos:
Ana está sempre em busca de soluções inovadoras para otimizar o processo de construção e reforma de projetos.
Ela precisa de ferramentas e recursos que facilitem a comunicação entre as equipes de trabalho e os clientes, garantindo uma execução eficiente e de alta qualidade dos projetos.
Como mãe ocupada e profissional dedicada, Ana procura por soluções que ajudem a simplificar e agilizar suas tarefas diárias, permitindo-lhe equilibrar sua vida pessoal e profissional com sucesso.

Desafios:
Equilibrar as demandas do trabalho com as responsabilidades familiares pode ser um desafio para Ana, especialmente durante períodos de alta demanda no escritório.
Ela precisa lidar com prazos apertados, orçamentos limitados e garantir a satisfação dos clientes, enquanto ainda encontra tempo para cuidar de sua família e de si mesma.

Persona 3: Luiza, 35 anos, Dona de Casa em BH e Mãe de Três Filhos

Descrição:
Luiza é uma dona de casa de 35 anos que mora em Belo Horizonte.
Ela é mãe de três filhos e dedica a maior parte do seu tempo ao cuidado da família e da casa.
Luiza é uma pessoa organizada e habilidosa, que gosta de manter sua casa limpa, arrumada e funcional para sua família.

Necessidades e Objetivos:
Como dona de casa, Luiza está sempre procurando maneiras de melhorar e atualizar sua casa para atender às necessidades de sua família.
Ela precisa de recursos e orientações práticas que a ajudem a planejar e executar projetos de reforma em sua casa, mesmo com um orçamento limitado.
Luiza procura por soluções que a ajudem a economizar tempo e esforço na realização das tarefas domésticas, permitindo-lhe dedicar mais tempo à sua família e a si mesma.

Desafios:
Gerenciar uma casa com três filhos pode ser desafiador para Luiza, especialmente quando se trata de equilibrar as demandas diárias da família com projetos de reforma e manutenção da casa.
Ela precisa encontrar maneiras eficientes de realizar as tarefas domésticas e os projetos de reforma, sem comprometer o bem-estar de sua família ou sua própria saúde e felicidade.


## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE`                                |PARA ... `MOTIVO/VALOR`                 |
|--------------------|-------------------------------------------------------------------|----------------------------------------|
|Pedro, o Noivo Animado  | Registrar meus custos                                         | Não estourar o orçamento               |
|Ana, a Engenheira Civi  |Compartilhar documentos e informações                          | Permitir que possam administrar contas |
|Luiza, a Dona de Casa   |Encontrar inspiração e ideias projetos de reforma em minha casa| Torná-la mais funcional e acolhedora para minha família |
 
## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

Requisitos Funcionais (RF):

RF1: Autenticação de Usuário
Permitir que os usuários façam login na plataforma usando suas credenciais de usuário registradas.

RF2: Cadastro de Usuário
Possibilitar que novos usuários se cadastrem na plataforma, fornecendo informações como nome, e-mail, senha e outras informações relevantes.

RF3: Gerenciamento de Perfil
Permitir que os usuários editem e atualizem suas informações de perfil, incluindo dados pessoais e preferências de contato.

RF4: Lista de Tarefas
Disponibilizar uma funcionalidade onde os usuários possam criar, visualizar, editar e excluir listas de tarefas relacionadas às reformas em suas casas.

RF5: Compartilhamento de Documentos
Permitir que os usuários compartilhem documentos e informações relevantes com outras partes envolvidas nos projetos, como equipes de trabalho e clientes.

RF6: Notificações
Implementar um sistema de notificações para alertar os usuários sobre novas tarefas atribuídas, prazos próximos e outras atualizações importantes.

RF7: Inspiração e Ideias
Fornecer uma seção onde os usuários possam encontrar inspiração e ideias para projetos de reforma em suas casas, incluindo fotos, vídeos e artigos informativos.

RF8: Tutoriais e Guias Passo a Passo
Oferecer recursos educacionais, tutoriais e guias passo a passo que ajudem os usuários a realizar projetos de reforma específicos com sucesso, mesmo sem experiência prévia.

Requisitos Não Funcionais (RNF):

RNF1: Usabilidade
Garantir que a interface da aplicação seja intuitiva, de fácil navegação e acessível para usuários com diferentes níveis de habilidade.

RNF2: Desempenho
Assegurar que a aplicação seja responsiva e tenha tempos de carregamento rápidos, mesmo sob carga pesada de usuários ou em conexões de internet mais lentas.

RNF3: Segurança
Implementar medidas de segurança robustas, como criptografia de dados e autenticação de dois fatores, para proteger a privacidade e a integridade das informações dos usuários.

RNF4: Confiabilidade
Garantir que a aplicação seja estável e confiável, minimizando o tempo de inatividade e evitando falhas ou erros inesperados durante o uso.

RNF5: Suporte Multiplataforma
Certificar-se de que a aplicação seja compatível com uma variedade de dispositivos e sistemas operacionais, incluindo desktops, laptops, tablets e smartphones.

RNF6: Escalabilidade
Projetar a aplicação com capacidade de escalonamento para lidar com um aumento no número de usuários e volume de dados ao longo do tempo, sem comprometer o desempenho.

## Restrições

Restrição 01: O projeto deverá ser entregue até o final do semestre.
A solução deve ser desenvolvida dentro do prazo estabelecido até o final do semestre acadêmico, respeitando os cronogramas e prazos definidos.

Restrição 02: Não pode ser desenvolvido um módulo de backend.
A solução não pode incluir o desenvolvimento de um módulo de backend para gerenciamento de dados e lógica de negócios. Isso implica que a solução deve ser construída utilizando tecnologias frontend ou abordagens que não dependam de um servidor backend dedicado.

Restrição 03: A solução deve ser desenvolvida utilizando tecnologias de código aberto.
Todos os recursos e tecnologias utilizados na solução devem ser de código aberto e de livre acesso para garantir a acessibilidade e a facilidade de manutenção futura.

Restrição 04: A solução deve ser compatível com navegadores web modernos.
A aplicação deve ser projetada e testada para funcionar de forma consistente e adequada nos principais navegadores web, como Google Chrome, Mozilla Firefox, Safari e Microsoft Edge, garantindo uma experiência de usuário uniforme.

Restrição 05: O projeto deve respeitar as regulamentações de proteção de dados.
Todas as informações dos usuários devem ser tratadas com o devido cuidado e proteção de acordo com as leis e regulamentações de proteção de dados, como GDPR (Regulamento Geral de Proteção de Dados) e LGPD (Lei Geral de Proteção de Dados).

Restrição 06: A solução deve ser acessível para pessoas com deficiência.
A aplicação deve ser desenvolvida seguindo as diretrizes de acessibilidade web, como as definidas pelo W3C, para garantir que seja utilizável por pessoas com diferentes tipos de deficiência, incluindo deficiências visuais, auditivas, motoras e cognitivas.

Restrição 07: A solução não pode infringir direitos autorais ou propriedade intelectual de terceiros.
Todos os recursos, conteúdos e materiais utilizados na solução devem ser de propriedade legal ou devidamente licenciados para uso, evitando qualquer violação de direitos autorais ou propriedade intelectual.
