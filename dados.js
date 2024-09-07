let dados = [
    {
        titulo: "Rayssa Leal",
        descricao: "Rayssa Leal, a Fadinha, é uma skatista brasileira que conquistou o mundo com seu talento e carisma. Aos poucos anos, ela já coleciona títulos e inspira milhões de jovens.",
        link: "https://pt.wikipedia.org/wiki/Rayssa_Leal",
        tags: "skate fada sk8"
    },
    {
        titulo: "Beatriz Souza",
        descricao: "Beatriz Souza é uma judoca brasileira que se destacou nos Jogos Olímpicos de Paris 2024, conquistando a medalha de ouro e inspirando novas gerações de atletas.",
        link: "https://pt.wikipedia.org/wiki/Beatriz_Souza",
        tags: "judoca judo olimpica"
    },
    {
        titulo: "Rebeca Andrade",
        descricao: "Rebeca Andrade é uma ginasta brasileira que conquistou o mundo com suas acrobacias e força. Aos poucos anos, ela já coleciona títulos e é considerada uma das maiores ginastas da história do Brasil.",
        link: "https://pt.wikipedia.org/wiki/Rebeca_Andrade",
        tags: "ginastica ginasta ouro acrobacias"
    },
    {
        titulo: "Arthur Zanetti",
        descricao: "Arthur Zanetti é um ginasta brasileiro, campeão olímpico nas argolas, conhecido por sua força e precisão nas competições internacionais.",
        link: "https://pt.wikipedia.org/wiki/Arthur_Zanetti",
        tags: "ginastica argolas força olimpico"
    },
    {
        titulo: "Thiago Braz",
        descricao: "Thiago Braz é um atleta brasileiro especializado no salto com vara. Conquistou a medalha de ouro nos Jogos Olímpicos do Rio 2016, quebrando o recorde olímpico.",
        link: "https://pt.wikipedia.org/wiki/Thiago_Braz",
        tags: "salto com vara atletismo recorde"
    },
    {
        titulo: "Sarah Menezes",
        descricao: "Sarah Menezes é uma judoca brasileira que fez história ao conquistar a medalha de ouro nos Jogos Olímpicos de Londres 2012 na categoria até 48kg.",
        link: "https://pt.wikipedia.org/wiki/Sarah_Menezes",
        tags: "judoca judo ouro 48kg"
    },
    {
        titulo: "Isaquias Queiroz",
        descricao: "Isaquias Queiroz é um canoísta brasileiro que se destacou nos Jogos Olímpicos do Rio 2016, ganhando três medalhas e se tornando um dos maiores atletas da canoagem.",
        link: "https://pt.wikipedia.org/wiki/Isaquias_Queiroz",
        tags: "canoagem olimpico medalhista"
    },
    {
        titulo: "Martine Grael",
        descricao: "Martine Grael é uma velejadora brasileira que conquistou a medalha de ouro nos Jogos Olímpicos do Rio 2016, na classe 49erFX, ao lado de Kahena Kunze.",
        link: "https://pt.wikipedia.org/wiki/Martine_Grael",
        tags: "vela velejadora 49erFX"
    },
    {
        titulo: "Kahena Kunze",
        descricao: "Kahena Kunze é uma velejadora brasileira, campeã olímpica ao lado de Martine Grael nos Jogos do Rio 2016, na classe 49erFX.",
        link: "https://pt.wikipedia.org/wiki/Kahena_Kunze",
        tags: "vela velejadora 49erFX"
    },
    {
        titulo: "Maurren Maggi",
        descricao: "Maurren Maggi é uma atleta brasileira especialista no salto em distância, conquistando a medalha de ouro nos Jogos Olímpicos de Pequim 2008.",
        link: "https://pt.wikipedia.org/wiki/Maurren_Maggi",
        tags: "salto em distância atletismo ouro"
    },
    {
        titulo: "Vanderlei Cordeiro de Lima",
        descricao: "Vanderlei Cordeiro de Lima é um maratonista brasileiro conhecido por seu espírito esportivo, após ser interrompido na maratona de Atenas 2004 e ainda assim conquistar o bronze.",
        link: "https://pt.wikipedia.org/wiki/Vanderlei_Cordeiro_de_Lima",
        tags: "maratona atletismo olimpico bronze"
    },
    {
        titulo: "Adhemar Ferreira da Silva",
        descricao: "Adhemar Ferreira da Silva foi um atleta brasileiro bicampeão olímpico no salto triplo, com vitórias em Helsinque 1952 e Melbourne 1956.",
        link: "https://pt.wikipedia.org/wiki/Adhemar_Ferreira_da_Silva",
        tags: "salto triplo atletismo bicampeão"
    },
    {
        titulo: "Robert Scheidt",
        descricao: "Robert Scheidt é um dos maiores velejadores brasileiros, com cinco medalhas olímpicas em sua carreira, incluindo duas de ouro.",
        link: "https://pt.wikipedia.org/wiki/Robert_Scheidt",
        tags: "vela velejador medalhista ouro"
    },
    {
        titulo: "Alison dos Santos",
        descricao: "Alison dos Santos é um corredor brasileiro especialista nos 400 metros com barreiras, medalhista de bronze nos Jogos Olímpicos de Tóquio 2020.",
        link: "https://pt.wikipedia.org/wiki/Alison_dos_Santos",
        tags: "400m barreiras atletismo bronze"
    },
    {
        titulo: "Rafaela Silva",
        descricao: "Rafaela Silva é uma judoca brasileira que conquistou a medalha de ouro nos Jogos Olímpicos do Rio 2016, tornando-se uma inspiração para muitos jovens.",
        link: "https://pt.wikipedia.org/wiki/Rafaela_Silva",
        tags: "judoca judo olimpica ouro"
    },
    {
        titulo: "Diego Hypólito",
        descricao: "Diego Hypólito é um ginasta brasileiro especialista no solo, tendo conquistado a medalha de prata nos Jogos Olímpicos do Rio 2016.",
        link: "https://pt.wikipedia.org/wiki/Diego_Hypólito",
        tags: "ginastica solo olimpico prata"
    },
    {
        titulo: "Mayra Aguiar",
        descricao: "Mayra Aguiar é uma judoca brasileira, medalhista olímpica em três edições consecutivas (2012, 2016, 2020), conhecida por sua força e técnica.",
        link: "https://pt.wikipedia.org/wiki/Mayra_Aguiar",
        tags: "judoca judo olimpica medalhista"
    },
    {
        titulo: "Hugo Calderano",
        descricao: "Hugo Calderano é um jogador brasileiro de tênis de mesa, considerado um dos melhores atletas do mundo na modalidade e finalista em várias competições internacionais.",
        link: "https://pt.wikipedia.org/wiki/Hugo_Calderano",
        tags: "tênis de mesa jogador olimpico"
    },
    {
        titulo: "Ana Marcela Cunha",
        descricao: "Ana Marcela Cunha é uma nadadora brasileira especialista em maratonas aquáticas, medalhista de ouro nos Jogos Olímpicos de Tóquio 2020.",
        link: "https://pt.wikipedia.org/wiki/Ana_Marcela_Cunha",
        tags: "natação maratona aquática ouro"
    },
    {
        titulo: "Daniel Dias",
        descricao: "Daniel Dias é um nadador paralímpico brasileiro, o maior medalhista da natação paralímpica, com dezenas de medalhas em várias edições dos Jogos Paralímpicos.",
        link: "https://pt.wikipedia.org/wiki/Daniel_Dias",
        tags: "paralimpico natação medalhista ouro"
    },
    {
        titulo: "Fernanda Garay",
        descricao: "Fernanda Garay é uma jogadora brasileira de vôlei, campeã olímpica em Londres 2012 e destaque por sua habilidade no ataque e na defesa.",
        link: "https://pt.wikipedia.org/wiki/Fernanda_Garay",
        tags: "vôlei jogadora olimpica campeã"
    }
];
