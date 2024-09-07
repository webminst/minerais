let dados = [
    {
        nome: "Enxofre",
        grupo: "Calcogênios",
        subgrupo: "Não-metais",
        titulo: "Enxofre: O Elemento da Pólvora e da Vida",
        descricao: "O enxofre é um elemento químico abundante na crosta terrestre, conhecido por seu odor característico de ovo podre. Apresenta uma coloração amarela e é sólido à temperatura ambiente. O enxofre é fundamental para a vida, sendo um componente essencial de aminoácidos, como a cisteína e a metionina. Industrialmente, é utilizado na produção de ácido sulfúrico, um dos produtos químicos mais importantes do mundo. O enxofre também é encontrado em diversas substâncias naturais, como o petróleo e o gás natural.",
        link: "https://didatico.igc.usp.br/minerais/elementos-nativos/enxofre/"
    },
    {
        nome: "Grafite",
        grupo: "Carbono",
        subgrupo: "Alótropos do carbono",
        titulo: "Grafite: O Mineral que Escreve a História",
        descricao: "A grafite é um alótropo do carbono, conhecido por sua estrutura em camadas de átomos de carbono hexagonais. Essa estrutura confere à grafite propriedades únicas, como maciez e a capacidade de deixar marcas em superfícies, tornando-a ideal para a fabricação de lápis. Além disso, a grafite é um excelente condutor de eletricidade e calor, sendo utilizada em diversas aplicações industriais, como a produção de eletrodos e lubrificantes.",
        link: "https://didatico.igc.usp.br/minerais/elementos-nativos/grafita/"
    },
    {
        nome: "Fluorita",
        grupo: "Haletos",
        subgrupo: "Fluoretos",
        titulo: "Fluorita: A Pedra da Diversidade",
        descricao: "A fluorita é um mineral composto principalmente de fluoreto de cálcio (CaF₂). Conhecida por sua variedade de cores vibrantes, como roxo, verde, azul e amarelo, a fluorita é frequentemente utilizada como pedra ornamental e em coleções mineralógicas. Além disso, a fluorita é uma importante fonte de flúor, elemento utilizado na produção de diversos produtos, como pasta de dente e refrigerantes.",
        link: "https://didatico.igc.usp.br/minerais/haloides/fluorita/"
    },
    {
        nome: "Halita",
        grupo: "Haletos",
        subgrupo: "Cloretos",
        titulo: "Halita: O Sal que Saboriza o Mundo",
        descricao: "A halita, ou cloreto de sódio (NaCl), é um mineral essencial para a vida. Ocorre em grandes depósitos evaporíticos, formados pela evaporação da água do mar. A halita é incolor ou branca, mas pode apresentar diversas tonalidades devido a impurezas. Além de ser utilizada como condimento, a halita é empregada em diversos processos industriais.",
        link: "https://didatico.igc.usp.br/minerais/haloides/halita/"
    },
    {
        nome: "Apatita",
        grupo: "Fosfatos",
        subgrupo: "Fosfatos",
        titulo: "Apatita: O Mineral dos Ossos e dos Dentes",
        descricao: "A apatita é um mineral fosfato de cálcio, com fórmula química geral Ca₅(PO₄)₃(F,Cl,OH). É um componente essencial dos ossos e dentes de animais, incluindo os humanos. A apatita também ocorre em rochas ígneas, metamórficas e sedimentares. É uma importante fonte de fósforo, utilizado na produção de fertilizantes e outros produtos químicos.",
        link: "https://didatico.igc.usp.br/minerais/fosfatos/apatita/"
    },
    {
        nome: "Monazita",
        grupo: "Fosfatos",
        subgrupo: "Fosfatos",
        titulo: "Monazita: Tesouro de Terras Raras",
        descricao: "A monazita é um fosfato de terras raras, com fórmula química geral (Ce,La,Th,Nd,Y)PO₄. É um mineral acessório em rochas ígneas e metamórficas, e é uma importante fonte de terras raras, elementos químicos com propriedades magnéticas e luminescentes, utilizados em diversas tecnologias modernas, como eletrônicos e ímãs.",
        link: "https://didatico.igc.usp.br/minerais/fosfatos/monazita/"
    },
    {
        nome: "Barita",
        grupo: "Sulfatos",
        subgrupo: "Sulfatos",
        titulo: "Barita: O Mineral de Alta Densidade",
        descricao: "A barita, ou sulfato de bário (BaSO₄), é um mineral branco ou incolor, conhecido por sua alta densidade. É amplamente utilizado como agente de peso em fluidos de perfuração e como pigmento branco. Devido à sua alta densidade, a barita também é utilizada em blindagem contra radiação.",
        link: "https://didatico.igc.usp.br/minerais/sulfatos/barita/"
    },
    {
        nome: "Gipsita",
        grupo: "Sulfatos",
        subgrupo: "Sulfatos",
        titulo: "Gipsita: O Mineral do Gesso",
        descricao: "A gipsita, ou sulfato de cálcio di-hidratado (CaSO₄·2H₂O), é um mineral muito comum, formado pela evaporação da água do mar. É utilizado na produção de gesso para construção civil, como material de moldagem e escultura, e na fabricação de fertilizantes.",
        link: "https://didatico.igc.usp.br/minerais/sulfatos/gipsita/"
    },
    {
        nome: "Aragonita",
        grupo: "Carbonatos",
        subgrupo: "Carbonatos",
        titulo: "Aragonita: A Gêmea da Calcita",
        descricao: "A aragonita é um carbonato de cálcio (CaCO₃), assim como a calcita, mas com uma estrutura cristalina diferente. Ela se forma em uma variedade de formas cristalinas, incluindo agulhas, estalactites e costras. É um componente comum nas conchas de moluscos e corais. A aragonita é menos estável que a calcita e, com o tempo, tende a se transformar em calcita.",
        link: "https://didatico.igc.usp.br/minerais/carbonatos/aragonita/"
    },
    {
        nome: "Calcita",
        grupo: "Carbonatos",
        subgrupo: "Carbonatos",
        titulo: "Calcita: O Mineral Mais Comum",
        descricao: "A calcita é um carbonato de cálcio (CaCO₃) e um dos minerais mais comuns na crosta terrestre. Forma rochas sedimentares como a caliza e o mármore. É o principal componente das conchas de muitos organismos marinhos. A calcita é utilizada na indústria da construção e como fonte de cálcio.",
        link: "https://didatico.igc.usp.br/minerais/carbonatos/calcita-10/"
    },
    {
        nome: "Dolomita",
        grupo: "Carbonatos",
        subgrupo: "Carbonatos",
        titulo: "Dolomita: Carbonato de Cálcio e Magnésio",
        descricao: "A dolomita é um carbonato duplo de cálcio e magnésio (CaMg(CO₃)₂). É um mineral comum em rochas sedimentárias e metamórficas. A dolomitização é um processo geológico em que a calcita se transforma em dolomita. A dolomita é utilizada como material de construção e como fonte de magnésio.",
        link: "https://didatico.igc.usp.br/minerais/carbonatos/dolomita/"
    },
    {
        nome: "Magnesita",
        grupo: "Carbonatos",
        subgrupo: "Carbonatos",
        titulo: "Magnesita: Fonte de Magnésio",
        descricao: "A magnesita é um carbonato de magnésio (MgCO₃). É um mineral comum em rochas metamórficas e se forma por alteração de outros minerais ricos em magnésio. A magnesita é utilizada na produção de materiais refratários, fertilizantes e compostos químicos de magnésio.",
        link: "https://didatico.igc.usp.br/minerais/carbonatos/magnesita/"
    },
    {
        nome: "Malaquita",
        grupo: "Carbonatos",
        subgrupo: "Carbonatos de cobre",
        titulo: "Malaquita: A Pedra Verde",
        descricao: "A malaquita é um carbonato de cobre hidratado (Cu₂CO₃(OH)₂). É um mineral de cor verde intenso, apreciado por sua beleza e utilizado como pedra ornamental e gema. Se forma por alteração de minerais de cobre na zona de oxidação dos yacimentos. A malaquita também foi utilizada como pigmento.",
        link: "https://didatico.igc.usp.br/minerais/carbonatos/malaquita/"
    },
    {
        nome: "Cassiterita",
        grupo: "Óxidos",
        subgrupo: "Óxidos",
        titulo: "Cassiterita: O Principal Minério de Estanho",
        descricao: "A cassiterita é um óxido de estanho (SnO₂), o principal minério de estanho. É um mineral pesado, de cor marrom escura a preta, com brilho adamantino. A cassiterita se forma em veios hidrotermais e em depósitos de placer. O estanho obtido da cassiterita é utilizado em diversas aplicações, como na produção de latão e solda.",
        link: "https://pt.wikipedia.org/wiki/Cassiterita"
    },
    {
        nome: "Corindon",
        grupo: "Óxidos",
        subgrupo: "Óxidos",
        titulo: "Corindon: A Base do Rubi e da Safira",
        descricao: "O corindon é um óxido de alumínio (Al₂O₃). Quando puro, é incolor, mas as impurezas de cromo, ferro e titânio conferem-lhe as cores vibrantes do rubi e da safira. É um mineral muito duro, segundo apenas ao diamante na escala de Mohs. O corindon é utilizado como abrasivo e como gema.",
        link: "https://pt.wikipedia.org/wiki/Corindon"
    },
    {
        nome: "Goethita",
        grupo: "Óxidos",
        subgrupo: "Óxidos de Ferro",
        titulo: "Goethita: O Minério de Ferro Hidratado",
        descricao: "A goethita é um óxido de ferro hidratado (FeO(OH)). É um mineral de cor marrom amarelada a marrom avermelhada, formado pela alteração de outros minerais de ferro. A goethita é um componente importante dos solos e sedimentos, e também é encontrada em veios e cavidades. É utilizada como pigmento e como minério de ferro.",
        link: "https://pt.wikipedia.org/wiki/Goethita"
    },
    {
        nome: "Hematita",
        grupo: "Óxidos/Hidróxidos",
        subgrupo: "",
        titulo: "Hematita: Um Óxido de Ferro Abundante.",
        descricao: "A hematita é um mineral composto principalmente por óxido de ferro (Fe₂O₃). É um dos minérios de ferro mais comuns e importantes economicamente, devido ao seu alto teor de ferro. Seu nome tem origem no grego 'haima', que significa sangue, em referência à sua cor avermelhada característica em muitas variedades. A hematita pode ser encontrada em diversas formas, desde cristais brilhantes e metálicos até massas terrosas de cor marrom-avermelhada. Além de sua importância industrial, a hematita também é apreciada por colecionadores e utilizada na fabricação de pigmentos e joias.",
        link: "https://didatico.igc.usp.br/minerais/oxidos-hidroxidos/hematita/"
    },
    {
        nome: "Ilmenita",
        grupo: "Óxidos",
        subgrupo: "Óxidos de Ferro e Titânio",
        titulo: "Ilmenita: Fonte de Titânio e Ferro",
        descricao: "A ilmenita é um óxido de ferro e titânio (FeTiO₃). É um mineral de cor negra, com brilho submetálico. A ilmenita é a principal fonte de titânio e também contém ferro. É utilizada na produção de pigmentos, ligas metálicas e materiais cerâmicos.",
        link: "https://pt.wikipedia.org/wiki/Ilmenita"
    },
    {
        nome: "Magnetita",
        grupo: "Óxidos",
        subgrupo: "Óxidos de Ferro",
        titulo: "Magnetita: O Ímã Natural",
        descricao: "A magnetita é um óxido de ferro (Fe₃O₄). É um mineral magnético natural, ou seja, atrai o ferro. A magnetita é de cor negra e tem brilho metálico. É utilizada na produção de ímãs e como minério de ferro.",
        link: "https://pt.wikipedia.org/wiki/Magnetita"
    },
    {
        nome: "Rutilo",
        grupo: "Óxidos",
        subgrupo: "Óxidos",
        titulo: "Rutilo: O Mineral do Titânio",
        descricao: "O rutilo é um dióxido de titânio (TiO₂). É um mineral de cor marrom avermelhada a preta, com brilho metálico. O rutilo é a segunda fonte mais importante de titânio. É utilizado na produção de pigmentos, ligas metálicas e eletrônicos.",
        link: "https://pt.wikipedia.org/wiki/Rutilo"
    },
    {
        nome: "Calcopirita",
        grupo: "Sulfetos",
        subgrupo: "Sulfetos",
        titulo: "Calcopirita: O Minério de Cobre Mais Comum",
        descricao: "A calcopirita é um sulfeto de ferro e cobre (CuFeS₂). É um mineral de cor amarelo latão, com brilho metálico. A calcopirita é o minério de cobre mais comum e uma importante fonte de cobre. É utilizada na produção de cobre metálico e como fonte de ouro e prata.",
        link: "https://pt.wikipedia.org/wiki/Calcopirita"
    },
    {
        nome: "Esfalerita",
        grupo: "Sulfetos",
        subgrupo: "Sulfetos",
        titulo: "Esfalerita: O Principal Minério de Zinco",
        descricao: "A esfalerita é um sulfeto de zinco (ZnS). É um mineral de cor preta, marrom ou amarela, com brilho resinoso. A esfalerita é o principal minério de zinco e uma importante fonte de cádmio. É utilizada na produção de zinco metálico e como fonte de cádmio.",
        link: "https://pt.wikipedia.org/wiki/Esfalerita"
    },
    {
        nome: "Galena",
        grupo: "Sulfetos",
        subgrupo: "Sulfetos",
        titulo: "Galena: O Minério de Chumbo Mais Comum",
        descricao: "A galena é um sulfeto de chumbo (PbS). É um mineral de cor cinza escuro, com alto brilho metálico. A galena é o minério de chumbo mais comum e uma importante fonte de prata. É utilizada na produção de chumbo metálico e como fonte de prata.",
        link: "https://pt.wikipedia.org/wiki/Galena"
    },
    {
        nome: "Pirita",
        grupo: "Sulfetos",
        subgrupo: "Sulfetos",
        titulo: "Pirita: O 'Ouro dos Tolos'",
        descricao: "A pirita é um sulfeto de ferro (FeS₂). É um mineral de cor amarelo latão, com brilho metálico, frequentemente confundido com ouro devido à sua aparência. A pirita é utilizada na produção de ácido sulfúrico e como fonte de ferro.",
        link: "https://pt.wikipedia.org/wiki/Pirita"
    },
    {
        nome: "Pirrotita",
        grupo: "Sulfetos",
        subgrupo: "Sulfetos",
        descricao: "A pirrotita é um sulfeto de ferro não estequiométrico (Fe₁-xS). É um mineral de cor bronzeada a negra, com brilho metálico. A pirrotita é magnética e frequentemente associada a outros minérios de sulfeto. É utilizada na produção de ácido sulfúrico e como fonte de níquel.",
        link: "https://pt.wikipedia.org/wiki/Pirrotita"
    },
    {
        nome: "Berilo",
        grupo: "Silicatos",
        subgrupo: "Ciclossilicatos",
        titulo: "Berilo: Um Mineral de Múltiplas Faces.",
        descricao: "O berilo é um mineral bastante versátil e conhecido por suas vibrantes variedades de cores. Sua fórmula química é Be₃Al₂(SiO₃)₆ e ele se forma em cristais hexagonais que podem variar em tamanho desde pequenos grãos até enormes cristais. Dependendo das impurezas presentes, o berilo pode apresentar cores como verde (esmeralda), azul (água-marinha), rosa (morganita), amarelo (heliodoro) e até incolor (goshenita). Além de sua beleza, o berilo é uma importante fonte de berílio, um metal leve utilizado em diversas aplicações industriais.",
        link: "https://didatico.igc.usp.br/minerais/silicatos/ciclossilicatos/berilo-3/"
    }, 
    {
        nome: "Turmalina",
        grupo: "Silicatos",
        subgrupo: "Borosilicatos",
        titulo: "Turmalina: A Pedra de Múltiplas Cores",
        descricao: "A turmalina é um mineral de boro e silício com uma ampla variedade de cores, devido às diferentes impurezas em sua composição. É conhecida por seu pleocroísmo, ou seja, a mudança de cor quando vista em diferentes ângulos. A turmalina é utilizada como gema e como fonte de boro.",
        link: "https://pt.wikipedia.org/wiki/Turmalina"
    },
    {
        nome: "Biotita",
        grupo: "Silicatos",
        subgrupo: "Micas",
        titulo: "Biotita: A Mica Negra",
        descricao: "A biotita é uma mica negra, rica em ferro e magnésio. É um mineral comum em rochas ígneas e metamórficas. A biotita é utilizada na indústria cerâmica e como isolante elétrico.",
        link: "https://pt.wikipedia.org/wiki/Biotita"
    },
    {
        nome: "Biotita",
        grupo: "Silicatos",
        subgrupo: "Micas",
        titulo: "Biotita: A Mica Negra",
        descricao: "A biotita é uma mica negra, rica em ferro e magnésio. É um mineral comum em rochas ígneas e metamórficas. A biotita é utilizada na indústria cerâmica e como isolante elétrico.",
        link: "https://pt.wikipedia.org/wiki/Biotita"
    },
    {
        nome: "Caulinita",
        grupo: "Silicatos",
        subgrupo: "Filossilicatos",
        titulo: "Caulinita: A Base da Porcelana",
        descricao: "A caulinita é um filossilicato de alumínio hidratado. É um mineral branco e macio, comumente encontrado em solos e rochas sedimentares. A caulinita é o principal componente da argila utilizada na fabricação de porcelana e papel.",
        link: "https://pt.wikipedia.org/wiki/Caulinita"
    },
    {
        nome: "Clorita",
        grupo: "Silicatos",
        subgrupo: "Filossilicatos",
        titulo: "Clorita: A Mica Verde",
        descricao: "A clorita é um grupo de minerais filossilicatos, geralmente de cor verde, ricos em magnésio e ferro. É um mineral comum em rochas metamórficas e em algumas rochas ígneas. A clorita é utilizada como enchimento em tintas e plásticos.",
        link: "https://pt.wikipedia.org/wiki/Clorita"
    },
    {
        nome: "Muscovita",
        grupo: "Silicatos",
        subgrupo: "Micas",
        titulo: "Muscovita: A Mica Branca",
        descricao: "A muscovita é uma mica incolor ou de cor clara, rica em potássio e alumínio. É um mineral comum em rochas ígneas e metamórficas. A muscovita é utilizada na indústria eletrônica e como isolante elétrico.",
        link: "https://pt.wikipedia.org/wiki/Muscovita"
    },
    {
        nome: "Serpentina",
        grupo: "Silicatos",
        subgrupo: "Filossilicatos",
        titulo: "Serpentina: O Mineral Verde Esverdeado",
        descricao: "A serpentina é um grupo de minerais filossilicatos, geralmente de cor verde esverdeada. É um mineral comum em rochas metamórficas e em algumas rochas ígneas. A serpentina é utilizada como material ornamental e como fonte de magnésio.",
        link: "https://pt.wikipedia.org/wiki/Serpentina"
    },
    {
        nome: "Talco",
        grupo: "Silicatos",
        subgrupo: "Filossilicatos",
        titulo: "Talco: O Mineral Mais Macio",
        descricao: "O talco é um filossilicato de magnésio. É o mineral mais macio da escala de Mohs, com dureza 1. É um mineral branco ou cinza, com brilho perláceo. O talco é utilizado na fabricação de cosméticos, papel e cerâmica.",
        link: "https://pt.wikipedia.org/wiki/Talco"
    },
    {
        nome: "Anfibólios",
        grupo: "Silicatos",
        subgrupo: "Inosilicatos",
        titulo: "Anfibólios: Um Grupo de Minerais",
        descricao: "Os anfibólios são um grupo de minerais inossilicatos, com estrutura em cadeia dupla. São geralmente de cor escura, como verde, preto ou marrom. Os anfibólios são comuns em rochas ígneas e metamórficas. Exemplos de anfibólios incluem hornblenda e actinolita.",
        link: "https://pt.wikipedia.org/wiki/Anfibólio"
    },
    {
        nome: "Diopsídio",
        grupo: "Silicatos",
        subgrupo: "Inosilicatos",
        titulo: "Diopsídio: Um Anfibólio Comum",
        descricao: "O diopsídio é um mineral do grupo dos anfibólios, geralmente de cor verde clara a escura. É um mineral comum em rochas metamórficas e algumas rochas ígneas. O diopsídio é utilizado como gema e como material refratário.",
        link: "https://pt.wikipedia.org/wiki/Diopsídio"
    },
    {
        nome: "Espodumênio",
        grupo: "Silicatos",
        subgrupo: "Inosilicatos",
        titulo: "Espodumênio: Fonte de Lítio",
        descricao: "O espodumênio é um inossilicato de lítio e alumínio. É um mineral geralmente incolor ou branco, mas pode apresentar tons de rosa ou lilás. O espodumênio é a principal fonte de lítio, utilizado na produção de baterias e outros produtos eletrônicos.",
        link: "https://pt.wikipedia.org/wiki/Espodumênio"
    },
    {
        nome: "Andaluzita",
        grupo: "Silicatos",
        subgrupo: "Nesosilicatos",
        titulo: "Andaluzita: Um Nesosilicato com Polimorfismo",
        descricao: "A andaluzita é um mineral formado por silicato de alumínio (Al₂SiO₅). É conhecida por ser um dos três polimorfos da sillimanita e da cianita, ou seja, minerais com a mesma composição química, mas diferentes estruturas cristalinas. A andaluzita é encontrada em rochas metamórficas e é utilizada na indústria como material refratário, capaz de resistir a altas temperaturas.",
        link: "https://pt.wikipedia.org/wiki/Andaluzita"
    },
    {
        nome: "Cianita",
        grupo: "Silicatos",
        subgrupo: "Nesosilicatos",
        titulo: "Cianita: Um Mineral com Hábito Cristalino Distintivo",
        descricao: "A cianita é outro membro do grupo dos polimorfos da andaluzita e da sillimanita. Seu aspecto mais característico é sua forma cristalina em lâminas alongadas. É encontrada em rochas metamórficas e, devido à sua alta temperatura de fusão, é utilizada em diversos processos industriais, como na fabricação de materiais refratários.",
        link: "https://pt.wikipedia.org/wiki/Cianita"
    },
    {
        nome: "Estaurolita",
        grupo: "Silicatos",
        subgrupo: "Nesosilicatos",
        titulo: "Estaurolita: O Cristal da Cruz",
        descricao: "A estaurolita é um mineral famoso por seus cristais em forma de cruz, resultado de maclas (crescimento intercrescido de cristais). É um mineral de ferro e alumínio, encontrado em rochas metamórficas. Além de sua beleza, a estaurolita é utilizada como amuleto em algumas culturas.",
        link: "https://pt.wikipedia.org/wiki/Estaurolita"
    },
    {
        nome: "Granada",
        grupo: "Silicatos",
        subgrupo: "Nesosilicatos",
        titulo: "Granada: Uma Gema de Diversas Cores",
        descricao: "A granada é um grupo de minerais com uma ampla variedade de cores e composições químicas. Algumas das variedades mais conhecidas são a almandina (vermelha), a piropo (vermelha), a grossularita (verde) e a espinela (preta). As granadas são utilizadas como gemas e também encontradas em rochas ígneas e metamórficas.",
        link: "https://pt.wikipedia.org/wiki/Granada_(mineral)"
    },
    {
        nome: "Olivina",
        grupo: "Silicatos",
        subgrupo: "Nesosilicatos",
        titulo: "Olivina: Um Mineral do Manto Terrestre",
        descricao: "A olivina é um mineral de silicato de ferro e magnésio, muito comum nas rochas do manto terrestre. Sua cor varia do verde-oliva ao marrom. A olivina é um componente importante das rochas ígneas máficas e ultramáficas, como o basalto e o peridotito.",
        link: "https://pt.wikipedia.org/wiki/Olivino"
    },
    {
        nome: "Sillimanita",
        grupo: "Silicatos",
        subgrupo: "Nesosilicatos",
        titulo: "Sillimanita: Um Mineral Metamórfico",
        descricao: "A sillimanita é um mineral de silicato de alumínio, um dos três polimorfos da andaluzita e da cianita. É encontrada em rochas metamórficas de alto grau e é utilizada na indústria como material refratário, devido à sua alta temperatura de fusão e resistência à corrosão.",
        link: "https://pt.wikipedia.org/wiki/Sillimanita"
    },
    {
        nome: "Titanita",
        grupo: "Silicatos",
        subgrupo: "Nesosilicatos",
        titulo: "Titanita: Um Mineral de Titânio",
        descricao: "A titanita é um mineral de silicato de cálcio e titânio. Apresenta uma variedade de cores, como marrom, amarelo e verde. A titanita é encontrada em rochas ígneas e metamórficas e é uma fonte importante de titânio, utilizado em diversas indústrias.",
        link: "https://pt.wikipedia.org/wiki/Titanita"
    },
    {
        nome: "Zircão",
        grupo: "Silicatos",
        subgrupo: "Nesosilicatos",
        titulo: "Zircão: Um Mineral Muito Antigo",
        descricao: "O zircão é um mineral de silicato de zircônio. É conhecido por ser um dos minerais mais antigos da Terra e é utilizado na datação radiométrica de rochas. O zircão incolor é utilizado como gema, enquanto o zircão com impurezas de urânio é uma fonte de urânio.",
        link: "https://pt.wikipedia.org/wiki/Zircão"
    },
    {
        nome: "Epídoto",
        grupo: "Silicatos",
        subgrupo: "Sorosilicatos",
        titulo: "Epídoto: Um Mineral de Cor Verde",
        descricao: "O epídoto é um mineral do grupo dos sorossilicatos, comumente encontrado em rochas metamórficas. Sua cor varia do verde ao preto, e sua cristalinidade pode ser granular ou fibrosa. É utilizado como gema e como indicador de condições metamórficas.",
        link: "https://pt.wikipedia.org/wiki/Epídoto"
    },
    {
        nome: "Feldspato Potássico",
        grupo: "Silicatos",
        subgrupo: "Tectosilicatos",
        titulo: "Feldspato Potássico: Um Mineral Essencial nas Rochas Ígneas",
        descricao: "O feldspato potássico é um mineral do grupo dos tectosilicatos, rico em potássio. É um dos minerais formadores de rochas mais comuns e é encontrado em granitos, gnaisses e outras rochas ígneas e metamórficas. Suas variedades incluem o ortoclásio e a microclina.",
        link: "https://pt.wikipedia.org/wiki/Feldspato_potássico"
    },
    {
        nome: "Opala",
        grupo: "Silicatos",
        subgrupo: "SiO₂ hidratado",
        titulo: "Opala: A Joia das Cores",
        descricao: "A opala é um mineral amorfo de sílica hidratada, conhecido por seu jogo de cores iridescente, causado pela difração da luz em microestruturas esféricas. É utilizada como gema e encontrada em diversas cores e variedades, como a opala de fogo e a opala negra.",
        link: "https://pt.wikipedia.org/wiki/Opala"
    },
    {
        nome: "Plagioclásio",
        grupo: "Silicatos",
        subgrupo: "Tectosilicatos",
        titulo: "Plagioclásio: Uma Série de Feldspatos",
        descricao: "O plagioclásio é uma série de feldspatos com composição variável entre o albita (rica em sódio) e a anortita (rica em cálcio). É um dos minerais formadores de rochas mais comuns e é encontrado em rochas ígneas e metamórficas. Sua composição varia de acordo com o ambiente geológico de formação.",
        link: "https://pt.wikipedia.org/wiki/Plagioclásio"
    },
    {
        nome: "Quartzo",
        grupo: "Silicatos",
        subgrupo: "Tectossilicatos",
        titulo: "Quartzo: Um Mineral Abundante e Versátil.",
        descricao: "O quartzo é um dos minerais mais comuns e abundantes na crosta terrestre. Sua fórmula química é SiO₂ (dióxido de silício) e sua estrutura cristalina é trigonal. O quartzo é conhecido por sua dureza e resistência à erosão, o que o torna um componente fundamental de muitas rochas ígneas, metamórficas e sedimentares. Devido à sua pureza e beleza, o quartzo é utilizado em diversas aplicações, como na fabricação de vidro, cerâmica, eletrônicos e joias. Além disso, o quartzo apresenta diversas variedades, cada uma com suas características únicas de cor e inclusões, tornando-o um mineral bastante apreciado por colecionadores.",
        link: "https://didatico.igc.usp.br/minerais/silicatos/tectossilicatos/quartzo-3/"
    }
];