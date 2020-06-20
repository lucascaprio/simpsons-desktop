abc = 10;
$(document).ready(init);

function init()
{
	corners();
	draggable();
	paraEstudo();
	menu();
	configuracoes();
	usuarios();
	perfil();
	historia();
	premios();
	musicas();
	fotos();
}

function configuracoes()
{
	//Configurações
	$('#configuracoes').click(function()
	{
		$('#janConfiguracoes').slideDown(1000);
		$('#menu').hide();
		abc++;
		$("#janConfiguracoes").css('z-index', abc)
	});
	$('#janConfiguracoes').click(function()
	{
		$('#menu').hide();
		abc++;
		$("#janConfiguracoes").css('z-index', abc)
	});
	$('#xConfiguracoes').click(function()
	{
		$('#janConfiguracoes').hide();
	});
	
	//trocar Backgrounds
	$('#back1').click(function()
	{
		$('#main').css('background-image', 'url(common/img/backgrounds/bg_body_1.jpg)');
		$('#main').css('display','none');
		$('#main').fadeIn(2000);
		
		setTimeout(function() 
		{
			$('body').css('background-image', 'url(common/img/backgrounds/bg_body_1.jpg)');
    	},2000);
	});
	$('#back2').click(function()
	{
		$('#main').css('background-image', 'url(common/img/backgrounds/bg_body_2.jpg)');
		$('#main').css('display','none');
		$('#main').fadeIn(2000);
		
		setTimeout(function() 
		{
			$('body').css('background-image', 'url(common/img/backgrounds/bg_body_2.jpg)');
    	},2000);		
	});
	$('#back3').click(function()
	{
		$('#main').css('background-image', 'url(common/img/backgrounds/bg_body_3.jpg)');
		$('#main').css('display','none');
		$('#main').fadeIn(2000);
	
		setTimeout(function() 
		{
			$('body').css('background-image', 'url(common/img/backgrounds/bg_body_3.jpg)');
    	},2000);
	});
	$('#back4').click(function()
	{
		$('#main').css('background-image', 'url(common/img/backgrounds/bg_body_4.jpg)');
		$('#main').css('display','none');
		$('#main').fadeIn(2000);
		
		setTimeout(function() 
		{
			$('body').css('background-image', 'url(common/img/backgrounds/bg_body_4.jpg)');
    	},2000);
	});
	$('#back5').click(function()
	{
		$('#main').css('background-image', 'url(common/img/backgrounds/bg_body_5.jpg)');
		$('#main').css('display','none');
		$('#main').fadeIn(2000);
		
		setTimeout(function() 
		{
			$('body').css('background-image', 'url(common/img/backgrounds/bg_body_5.jpg)');
    	},2000);
	});
	$('#back6').click(function()
	{
		$('#main').css('background-image', 'url(common/img/backgrounds/bg_body_6.jpg)');
		$('#main').css('display','none');
		$('#main').fadeIn(2000);
		
		setTimeout(function() 
		{
			$('body').css('background-image', 'url(common/img/backgrounds/bg_body_6.jpg)');
    	},2000);
	});
	$('#back7').click(function()
	{
		$('#main').css('background-image', 'url(common/img/backgrounds/bg_body_7.jpg)');
		$('#main').css('display','none');
		$('#main').fadeIn(2000);
		
		setTimeout(function() 
		{
			$('body').css('background-image', 'url(common/img/backgrounds/bg_body_7.jpg)');
    	},2000);
	});
	$('#back8').click(function()
	{
		$('#main').css('background-image', 'url(common/img/backgrounds/bg_body_8.jpg)');
		$('#main').css('display','none');
		$('#main').fadeIn(2000);
		
		setTimeout(function() 
		{
			$('body').css('background-image', 'url(common/img/backgrounds/bg_body_8.jpg)');
    	},2000);
	});
	$('#back9').click(function()
	{
		$('#main').css('background-image', 'url(common/img/backgrounds/bg_body_9.jpg)');
		$('#main').css('display','none');
		$('#main').fadeIn(2000);
		
		setTimeout(function() 
		{
			$('body').css('background-image', 'url(common/img/backgrounds/bg_body_9.jpg)');
    	},2000);
	});
	$('#back10').click(function()
	{
		$('#main').css('background-image', 'url(common/img/backgrounds/bg_body_10.jpg)');
		$('#main').css('display','none');
		$('#main').fadeIn(2000);
		
		setTimeout(function() 
		{
			$('body').css('background-image', 'url(common/img/backgrounds/bg_body_10.jpg)');
    	},2000);
	});
	$('#back11').click(function()
	{
		$('#main').css('background-image', 'url(common/img/backgrounds/bg_body_11.jpg)');
		$('#main').css('display','none');
		$('#main').fadeIn(2000);
		
		setTimeout(function() 
		{
			$('body').css('background-image', 'url(common/img/backgrounds/bg_body_11.jpg)');
    	},2000);
	});
	$('#back12').click(function()
	{
		$('#main').css('background-image', 'url(common/img/backgrounds/bg_body_12.jpg)');
		$('#main').css('display','none');
		$('#main').fadeIn(2000);
		
		setTimeout(function() 
		{
			$('body').css('background-image', 'url(common/img/backgrounds/bg_body_12.jpg)');
    	},2000);
	});
}//Configurações

function menu()
{
	//Abrir Menu
	$('#rosca').click(function(){$("#menu").toggle(500); abc++; $("#menu").css('z-index', abc);
	});
	
	//Reiniciar
	$('#reiniciar').click(function(){window.location.href = "index.html";});
}//menu

function usuarios()
{
	$('#usuarios').click(function()
	{
		$('#janUsuarios').slideDown(1000);
		$('#menu').hide();
		abc++;
		$("#janUsuarios").css('z-index', abc)
	});
	$('#janUsuarios').click(function()
	{
		$('#menu').hide();
		abc++;
		$("#janUsuarios").css('z-index', abc)
	});
	$('#xUsuarios').click(function()
	{
		$('#janUsuarios').hide();
	});
	
	//trocar usuários
	$('#homer').click(function()
	{
		$('#main').css('background-image', 'url(common/img/backgrounds/bg_body_1.jpg)');
		$('#main').css('display','none');
		$('#main').fadeIn(2000);
		
		setTimeout(function() 
		{
			$('body').css('background-image', 'url(common/img/backgrounds/bg_body_1.jpg)');
    	},2000);
		
		$('.foto').css('background', 'url(common/img/usuarios/homer.jpg)');
		$('.foto').css('display','none');
		$('.foto').fadeIn(2000);
		
		setTimeout(function() 
		{
			$('.foto2').css('background', 'url(common/img/usuarios/homer.jpg)');
    	},2000);
		
		$('.nomeInd').html('Homer Simpsons');
		$('#linkInd').attr('href', 'http://pt.wikipedia.org/wiki/Homer_Simpson');
		$('#txtInd').html('<p>Homer Jay Simpson é um personagem de desenho animado criado por Matt Groening para Os Simpsons, uma série de televisão da FOX. É o pai da família Simpson. Sua primeira aparição na televisão ocorreu em 19 de abril de 1987. Matt Groening o criou enquanto este estava na sala de espera do escritório de James L. Brooks. Ele havia sido chamado para apresentar uma série de curtas baseado em Life in Hell, mas, em vez disso, disso, criou um elenco de novos personagens. Ele nomeou o pai da família com o nome de seu pai, Homer Groening.</p><p>Homer é o pai desajeitado da família Simpson. Com sua esposa, Marge, ele tem três filhos: Bart, Lisa e Maggie. Como o sustentador da família, ele trabalha na Usina Nuclear de Springfield.</p>');
	});
	$('#marge').click(function()
	{
		$('#main').css('background-image', 'url(common/img/backgrounds/bg_body_2.jpg)');
		$('#main').css('display','none');
		$('#main').fadeIn(2000);
		
		setTimeout(function() 
		{
			$('body').css('background-image', 'url(common/img/backgrounds/bg_body_2.jpg)');
    	},2000);
		
		$('.foto').css('background', 'url(common/img/usuarios/marge.jpg)');
		$('.foto').css('display','none');
		$('.foto').fadeIn(2000);
		
		setTimeout(function() 
		{
			$('.foto2').css('background', 'url(common/img/usuarios/marge.jpg)');
    	},2000);
		
		$('.nomeInd').html('Marge Simpsons');
		$('#linkInd').attr('href', 'http://pt.wikipedia.org/wiki/Marge_Simpson');
		$('#txtInd').html('<p>Marjorie "Marge" Bouvier Simpson é a esposa de Homer Simpson e mãe de Lisa, Bart e Maggie Simpson no desenho animado Os Simpsons. Ela é mais conhecida por causa de seus longos cabelos azuis e de sua personalidade muito paciente. Mesmo Homer aprontando inúmeras confusões, ela continua sendo uma esposa fiel e dedicada, assim como é para com os filhos.</p><p>Com poucas exceções, Marge gasta a maior parte de seu tempo como dona de casa, cuidando de Maggie, ajudando Lisa ou defendendo Bart da raiva de seu pai. Seu nome é baseado no nome da mãe de Matt Groening, criador da série, Marge Groening. Marge Simpson é na verdade um estereótipo de dona de casa suburbana dos anos 1950.</p>');
	});
	$('#maggie').click(function()
	{
		$('#main').css('background-image', 'url(common/img/backgrounds/bg_body_3.jpg)');
		$('#main').css('display','none');
		$('#main').fadeIn(2000);
		
		setTimeout(function() 
		{
			$('body').css('background-image', 'url(common/img/backgrounds/bg_body_3.jpg)');
    	},2000);
		
		$('.foto').css('background', 'url(common/img/usuarios/maggie.jpg)');
		$('.foto').css('display','none');
		$('.foto').fadeIn(2000);
		
		setTimeout(function() 
		{
			$('.foto2').css('background', 'url(common/img/usuarios/maggie.jpg)');
    	},2000);
		
		$('.nomeInd').html('Maggie Simpsons');
		$('#linkInd').attr('href', 'http://pt.wikipedia.org/wiki/Maggie_Simpson');
		$('#txtInd').html('<p>Margaret "Maggie" Simpson Bouvier é uma personagem fictício que aparece no desenho animado Os Simpsons. Ela é a filha mais nova dos personagens principais Homer e Marge, eternamente um bebê.</p><p>Maggie nasceu em 1990, de acordo com a cronologia do desenho (embora ela seja um bebê tanto em 1987 quanto em 2010). Seu dia exato de nascimento é desconhecido, embora ela tenha sido concebida em 19 de Novembro, o que leva a um aniversário por volta de 2 de Setembro.</p><p>Sua fama se dá por ela frequentemente cair no chão tentando andar e chupando a sua chupeta. Maggie tem esse nome em homenagem à irmã mais nova do criador Matt Groening, Margaret "Maggie" Groening.</p>');
	});
	$('#bart').click(function()
	{
		$('#main').css('background-image', 'url(common/img/backgrounds/bg_body_4.jpg)');
		$('#main').css('display','none');
		$('#main').fadeIn(2000);
		
		setTimeout(function() 
		{
			$('body').css('background-image', 'url(common/img/backgrounds/bg_body_4.jpg)');
    	},2000);
		
		$('.foto').css('background', 'url(common/img/usuarios/bart.jpg)');
		$('.foto').css('display','none');
		$('.foto').fadeIn(2000);
		
		setTimeout(function() 
		{
			$('.foto2').css('background', 'url(common/img/usuarios/bart.jpg)');
    	},2000);
		
		$('.nomeInd').html('Bart Simpsons');
		$('#linkInd').attr('href', 'http://pt.wikipedia.org/wiki/Bart_Simpson');
		$('#txtInd').html('<p>Bartholomew "Bart" Jo-jo Simpson é um dos personagens do desenho animado Os Simpsons (The Simpsons, em inglês). A sua voz é intrepertada pela atriz Nancy cartwright e a sua primeira aparição na televisão foi no programa The Tracey Ulman Show, em 19 de Abril de 1987. É filho de Homer e Marge Simpson ele tem 10 anos de idade desde a estréia do show. Bart estuda na escola municipal de Springfield, é considerado um aluno péssimo. Seus principais antagonistas são Sideshow Bob, os valentões Jimbo, Dolph e Kearney, o desajustado Nelson, o Zelador Willie e o diretor Seymour Skinner.</p>');
	});
	$('#lisa').click(function()
	{
		$('#main').css('background-image', 'url(common/img/backgrounds/bg_body_5.jpg)');
		$('#main').css('display','none');
		$('#main').fadeIn(2000);
		
		setTimeout(function() 
		{
			$('body').css('background-image', 'url(common/img/backgrounds/bg_body_5.jpg)');
    	},2000);
		
		$('.foto').css('background', 'url(common/img/usuarios/lisa.jpg)');
		$('.foto').css('display','none');
		$('.foto').fadeIn(2000);
		
		setTimeout(function() 
		{
			$('.foto2').css('background', 'url(common/img/usuarios/lisa.jpg)');
    	},2000);
		
		$('.nomeInd').html('Lisa Simpsons');
		$('#linkInd').attr('href', 'http://pt.wikipedia.org/wiki/Lisa_Simpson');
		$('#txtInd').html('<p>Elisabeth Marie Simpson Bouvier, mais conhecida como Lisa Simpson, é uma personagem ficticia da série de televisão americana The Simpsons. Seu nome é uma homenagem à irmã de Matt Groening, o criador do desenho. A voz original em inglês é de Yeardley Smith. No Brasil, foi dublada por Nair Amorim (primeira a sétima temporada), Priscila Amorim (oitava a décima quarta temporada) e Flávia Saddy (desde a décima quinta temporada).</p><p>Lisa é a filha do meio de Homer e Marge Simpson é uma menina extremamente inteligente: com apenas 8 anos, possui um QI de 156[1] ou 159, um dos mais altos dentre todos os personagens da série. Ela também toca saxofone barítono.</p>');
	});
	$('#sideshow').click(function()
	{
		$('#main').css('background-image', 'url(common/img/backgrounds/bg_body_6.jpg)');
		$('#main').css('display','none');
		$('#main').fadeIn(2000);
		
		setTimeout(function() 
		{
			$('body').css('background-image', 'url(common/img/backgrounds/bg_body_6.jpg)');
    	},2000);
		
		$('.foto').css('background', 'url(common/img/usuarios/sideshowbob.jpg)');
		$('.foto').css('display','none');
		$('.foto').fadeIn(2000);
		
		setTimeout(function() 
		{
			$('.foto2').css('background', 'url(common/img/usuarios/sideshowbob.jpg)');
    	},2000);
		
		$('.nomeInd').html('Sideshow Bob');
		$('#linkInd').attr('href', 'http://pt.wikipedia.org/wiki/Sideshow_Bob');
		$('#txtInd').html('<p>Robert Underdunk Terwilliger, ou Sideshow Bob é um personagem fictício da série de animação Os Simpsons. É facilmente reconhecível por sua cabeleira semelhante a uma palmeira e seus pés enormes. Era apresentador de TV juntamente com Krusty.</p><p>Embora não aparente pela sua estrutura pequena, o "Sideshow" Bob Terwilliger tem um grande problema. Depois de anos sendo sócio de Krusty, o Palhaço, e de frustrar suas palhaçadas sádicas, Sideshow Bob finalmente tentou, sem sucesso, incriminar falsamente seu atormentador. Depois de um tempo na prisão, Bob tentou se reabilitar, casando-se com Selma Bouvier (eles se divorciaram depois que ele tentou dinamitá-la), assassinando a família Simpson, concorrendo a prefeito e explodindo a cidade.</p>'); 
	});
	$('#jeff').click(function()
	{
		$('#main').css('background-image', 'url(common/img/backgrounds/bg_body_7.jpg)');
		$('#main').css('display','none');
		$('#main').fadeIn(2000);
		
		setTimeout(function() 
		{
			$('body').css('background-image', 'url(common/img/backgrounds/bg_body_7.jpg)');
    	},2000);
		
		$('.foto').css('background', 'url(common/img/usuarios/jeffalbertson.jpg)');
		$('.foto').css('display','none');
		$('.foto').fadeIn(2000);
		
		setTimeout(function() 
		{
			$('.foto2').css('background', 'url(common/img/usuarios/jeffalbertson.jpg)');
    	},2000);
		
		$('.nomeInd').html('Jeff Albertson');
		$('#linkInd').attr('href', 'http://pt.wikipedia.org/wiki/Comic_Book_Guy');
		$('#txtInd').html('<p>Comic Book Guy (ou simplesmente cara da loja de quadrinhos) é um homem obeso solteiro e sem amigos. Ele tem uma loja de quadrinhos e figuras de ação, que fica em Springfield, a Masmorra do Andróide. Não se sabe muito sobre ele, mas teve um episódio no qual ele era o protagonista. Nesse episódio ele tem um enfarte, tendo que deixar sua loja nas mãos de Bart e Milhouse. Nesse mesmo episódio ele se apaixona por Agnes Skinner, mãe do Diretor Skinner. Seu nome é Jeff Albertson.</p><p>Há ainda outro episódio em que "O Cara dos Quadrinhos" disputa o amor de Edna Krabappel com o Diretor Skinner (devidamente vestido de Mulher Gato em um encontro de fãs de HQ).</p>');
	});
	$('#burns').click(function()
	{
		$('#main').css('background-image', 'url(common/img/backgrounds/bg_body_8.jpg)');
		$('#main').css('display','none');
		$('#main').fadeIn(2000);
		
		setTimeout(function() 
		{
			$('body').css('background-image', 'url(common/img/backgrounds/bg_body_8.jpg)');
    	},2000);
		
		$('.foto').css('background', 'url(common/img/usuarios/srburns.jpg)');
		$('.foto').css('display','none');
		$('.foto').fadeIn(2000);
		
		setTimeout(function() 
		{
			$('.foto2').css('background', 'url(common/img/usuarios/srburns.jpg)');
    	},2000);
		
		$('.nomeInd').html('Sr. Burns');
		$('#linkInd').attr('href', 'http://pt.wikipedia.org/wiki/Montgomery_Burns');
		$('#txtInd').html('<p>Charles Montgomery Plantagenet Schicklgruber Burns é um personagem do desenho Os Simpsons, nascendo no dia 15 de agosto de 1906, filho de Elizabeth Montgomery.</p><p>É o homem mais rico de Springfield; dono da Usina Nuclear (Brasil) e Central Nuclear (Portugal) onde Homer Simpson trabalha, do Casino e de um hotel; guarda 1 trilhão de dólares em dinheiro na carteira (em uma única nota feita pelo Governo). Tem como fiel empregado o Sr. Waylon Smithers, de quem é totalmente dependente.</p><p>Seus pontos mais marcantes são: sua velhice, magreza, arrogância, ganância, possível pacto com o Diabo, autoritarismo, extrema fraqueza física, egoísmo, megalomania, desprezo vindo dos outros, etc.</p>');
	});
	$('#porcoaranha').click(function()
	{
		$('#main').css('background-image', 'url(common/img/backgrounds/bg_body_9.jpg)');
		$('#main').css('display','none');
		$('#main').fadeIn(2000);
		
		setTimeout(function() 
		{
			$('body').css('background-image', 'url(common/img/backgrounds/bg_body_9.jpg)');
    	},2000);
		
		$('.foto').css('background', 'url(common/img/usuarios/porcoaranha.jpg)');
		$('.foto').css('display','none');
		$('.foto').fadeIn(2000);
		
		setTimeout(function() 
		{
			$('.foto2').css('background', 'url(common/img/usuarios/porcoaranha.jpg)');
    	},2000);
		
		$('.nomeInd').html('Porco-Aranha');
		$('#linkInd').attr('href', 'http://pt.simpsons.wikia.com/wiki/Porco-Aranha');
		$('#txtInd').html('<p>Porco-Aranha é o porco de estimação de Homer.</p><p>Homer encontra pela primeira vez o porco-aranha quando ele e Bart estão no Krusty Burger. Ele está sendo usado em um vídeo comercial para um novo hambúrguer, o "ABC". Depois que o comercial é envolto Krusty diz para matar o porco. Homer ouve e exclama: "Você não pode matá-lo! Ele tá usando roupa de gente!", como Plopper estava usando um chapéu de cozinheiro. Porco-aranha evita a sua morte, graças a Homer e os dois tornam-se bastante próximos, mesmo quase se beijando.</p><p>Homer trata ele mais como um filho do que Bart, o que gera inveja em Bart.</p>');
	});
	$('#fattony').click(function()
	{
		$('#main').css('background-image', 'url(common/img/backgrounds/bg_body_10.jpg)');
		$('#main').css('display','none');
		$('#main').fadeIn(2000);
		
		setTimeout(function() 
		{
			$('body').css('background-image', 'url(common/img/backgrounds/bg_body_10.jpg)');
    	},2000);
		
		$('.foto').css('background', 'url(common/img/usuarios/fattony.jpg)');
		$('.foto').css('display','none');
		$('.foto').fadeIn(2000);
		
		setTimeout(function() 
		{
			$('.foto2').css('background', 'url(common/img/usuarios/fattony.jpg)');
    	},2000);
		
		$('.nomeInd').html('Fat Tony');
		$('#linkInd').attr('href', 'http://pt.wikipedia.org/wiki/Fat_Tony');
		$('#txtInd').html('<p>Marian Anthony "Fat Tony" D Amico ou Tony Gordo, como é conhecido no Brasil, é um personagem de Os Simpsons criado por Matt Groening.</p><p>Tony é um Mafioso ítalo-americano no estilo de Poderoso Chefão das redondezas de Springfield. Ele e seus homens conseguem qualquer coisa através de seus métodos sujos. Possui o Clube dos Legitímos Homens de Negócios, que fica abaixo de um prédio no centro da cidade. Na versão inglesa, é dublado pelo ator Joe Mantegna.</p>');
	});
	$('#duffman').click(function()
	{
		$('#main').css('background-image', 'url(common/img/backgrounds/bg_body_11.jpg)');
		$('#main').css('display','none');
		$('#main').fadeIn(2000);
		
		setTimeout(function() 
		{
			$('body').css('background-image', 'url(common/img/backgrounds/bg_body_11.jpg)');
    	},2000);
		
		$('.foto').css('background', 'url(common/img/usuarios/duffman.jpg)');
		$('.foto').css('display','none');
		$('.foto').fadeIn(2000);
		
		setTimeout(function() 
		{
			$('.foto2').css('background', 'url(common/img/usuarios/duffman.jpg)');
    	},2000);
		
		$('.nomeInd').html('Duffman');
		$('#linkInd').attr('href', 'http://pt.simpsons.wikia.com/wiki/Duffman');
		$('#txtInd').html('<p>O Duffman é o garoto-propaganda da Duff.</p><p>Ele apareceu poucas (ou muitas) vezes nos capítulos. Diversas vezes pode ser visto no fundo do cenário, mas poucas vezes é visto falando. Diversos atores já foram o Duffman, pois diversos já morreram.</p><p>Como foi dito uma vez: "Duffman nunca morre, só os atores que o interpretam".</p>');
	});
}//usuarios

function musicas()
{
	$('#iconMus').dblclick(function()
	{
		$('#janMusicas').slideDown(1000);
		$('#menu').hide();
		abc++;
		$("#janMusicas").css('z-index', abc)
	});
	$('#musicas').click(function()
	{
		$('#janMusicas').slideDown(1000);
		$('#menu').hide();
		abc++;
		$("#janMusicas").css('z-index', abc)
	});
	$('#janMusicas').click(function()
	{
		$('#menu').hide();
		abc++;
		$("#janMusicas").css('z-index', abc)
	});
	$('#xMusicas').click(function()
	{
		$('#janMusicas').hide();
	});
	
	//player das músicas
	$('#player').click(function()
	{
		$('#menu').hide();
		abc++;
		$("#player").css('z-index', abc)
	});
	$('#xPlayer').click(function()
	{
		$('#audio').attr('src', '');
		$('#player').hide();
	});
	
	//tocar musicas
	navegador = navigator.appName;
	
	$('#music1').click(function()
	{
		$('#player').slideDown();
		abc++;
		$("#player").css('z-index', abc);
			
		if(navegador == "Microsoft Internet Explorer")
		{
			$('#audio').attr('src', 'common/musicas/01_do_the_bartman.mp3');
		}
		else
		{
			$('#audio').attr('src', 'common/musicas/01_do_the_bartman.wav');
		}
	});
	$('#music2').click(function()
	{
		$('#player').slideDown();
		abc++;
		$("#player").css('z-index', abc);
			
		if(navegador == "Microsoft Internet Explorer")
		{
			$('#audio').attr('src', 'common/musicas/02_school_days.mp3');
		}
		else
		{
			$('#audio').attr('src', 'common/musicas/02_school_days.wav');
		}
	});
	$('#music3').click(function()
	{
		$('#player').slideDown();
		abc++;
		$("#player").css('z-index', abc);
			
		if(navegador == "Microsoft Internet Explorer")
		{
			$('#audio').attr('src', 'common/musicas/03_born_under_a_bad.mp3');
		}
		else
		{
			$('#audio').attr('src', 'common/musicas/03_born_under_a_bad.wav');
		}
	});
	$('#music4').click(function()
	{
		$('#player').slideDown();
		abc++;
		$("#player").css('z-index', abc);
			
		if(navegador == "Microsoft Internet Explorer")
		{
			$('#audio').attr('src', 'common/musicas/04_moanin_lisa_blues.mp3');
		}
		else
		{
			$('#audio').attr('src', 'common/musicas/04_moanin_lisa_blues.wav');
		}
	});
	$('#music5').click(function()
	{
		$('#player').slideDown();
		abc++;
		$("#player").css('z-index', abc);
			
		if(navegador == "Microsoft Internet Explorer")
		{
			$('#audio').attr('src', 'common/musicas/05_deep_deep_trouble.mp3');
		}
		else
		{
			$('#audio').attr('src', 'common/musicas/05_deep_deep_trouble.wav');
		}
	});
	$('#music6').click(function()
	{
		$('#player').slideDown();
		abc++;
		$("#player").css('z-index', abc);
			
		if(navegador == "Microsoft Internet Explorer")
		{
			$('#audio').attr('src', 'common/musicas/06_god_bless_the_child.mp3');
		}
		else
		{
			$('#audio').attr('src', 'common/musicas/06_god_bless_the_child.wav');
		}
	});
	$('#music7').click(function()
	{
		$('#player').slideDown();
		abc++;
		$("#player").css('z-index', abc);
			
		if(navegador == "Microsoft Internet Explorer")
		{
			$('#audio').attr('src', 'common/musicas/07_i_love_to_see_you_smile.mp3');
		}
		else
		{
			$('#audio').attr('src', 'common/musicas/07_i_love_to_see_you_smile.wav');
		}
	});
	$('#music8').click(function()
	{
		$('#player').slideDown();
		abc++;
		$("#player").css('z-index', abc);
			
		if(navegador == "Microsoft Internet Explorer")
		{
			$('#audio').attr('src', 'common/musicas/08_springfield_soul_stew.mp3');
		}
		else
		{
			$('#audio').attr('src', 'common/musicas/08_springfield_soul_stew.wav');
		}
	});
	$('#music9').click(function()
	{
		$('#player').slideDown();
		abc++;
		$("#player").css('z-index', abc);
			
		if(navegador == "Microsoft Internet Explorer")
		{
			$('#audio').attr('src', 'common/musicas/09_look_at_all_those_idiots.mp3');
		}
		else
		{
			$('#audio').attr('src', 'common/musicas/09_look_at_all_those_idiots.wav');
		}
	});
	$('#music10').click(function()
	{
		$('#player').slideDown();
		abc++;
		$("#player").css('z-index', abc);
			
		if(navegador == "Microsoft Internet Explorer")
		{
			$('#audio').attr('src', 'common/musicas/10_sibling_rivalry.mp3');
		}
		else
		{
			$('#audio').attr('src', 'common/musicas/10_sibling_rivalry.wav');
		}
	});
}//musicas

function perfil()
{
	$('#iconPer').dblclick(function()
	{
		$('#janPerfil').slideDown(1000);
		$('#menu').hide();
		abc++;
		$("#janPerfil").css('z-index', abc)
	});
	$('#perfil').click(function()
	{
		$('#janPerfil').slideDown(1000);
		$('#menu').hide();
		abc++;
		$("#janPerfil").css('z-index', abc)
	});
	$('#janPerfil').click(function()
	{
		$('#menu').hide();
		abc++;
		$("#janPerfil").css('z-index', abc)
	});
	$('#xPerfil').click(function()
	{
		$('#janPerfil').hide();
	});
}//perfil

function fotos()
{
	$('#iconFot').dblclick(function()
	{
		$('#janFotos').slideDown(1000);
		$('#menu').hide();
		abc++;
		$("#janFotos").css('z-index', abc)
	});
	$('#fotos').click(function()
	{
		$('#janFotos').slideDown(1000);
		$('#menu').hide();
		abc++;
		$("#janFotos").css('z-index', abc)
	});
	$('#janFotos').click(function()
	{
		$('#menu').hide();
		abc++;
		$("#janFotos").css('z-index', abc)
	});
	$('#xFotos').click(function()
	{
		$('#janFotos').hide();
	});
	
	//ampliarFotos
	$('#ampliarFotos').click(function()
	{
		$('#menu').hide();
		abc++;
		$("#ampliarFotos").css('z-index', abc)
	});
	$('#xAmpliarFotos').click(function()
	{
		$('#ampliarFotos').hide();
	});
	
	//hover das setas
	$('#seta1').hover
	(
		function()
		{
			$('#seta1').css('background-image', 'url(common/img/seta_1.png)');
		},
		function()
		{
			$('#seta1').css('background', 'transparent');
		}
	);
	$('#seta2').hover
	(
		function()
		{
			$('#seta2').css('background-image', 'url(common/img/seta_2.png)');
		},
		function()
		{
			$('#seta2').css('background', 'transparent');
		}
	);
	
	fotoAtual = 0;
	
	//mostrar fotos
	$('#foto1').click(function()
	{
		fotoAtual = 1;
		$('#fotoAmpliada').attr('src', 'common/img/fotos/foto_1.png');
		$('#descricaoFotos').html('Família Simpsons');
		
		abc++;
		$('#ampliarFotos').slideDown(1000);
		$('#ampliarFotos').css('z-index', abc);
	});
	$('#foto2').click(function()
	{
		fotoAtual = 2;
		$('#fotoAmpliada').attr('src', 'common/img/fotos/foto_2.png');
		$('#descricaoFotos').html('Bart Simpsons');
		
		abc++;
		$('#ampliarFotos').slideDown(1000);
		$('#ampliarFotos').css('z-index', abc);
	});
	$('#foto3').click(function()
	{
		fotoAtual = 3;
		$('#fotoAmpliada').attr('src', 'common/img/fotos/foto_3.png');
		$('#descricaoFotos').html('Ronaldo e Homer');
		
		abc++;
		$('#ampliarFotos').slideDown(1000);
		$('#ampliarFotos').css('z-index', abc);
	});
	$('#foto4').click(function()
	{
		fotoAtual = 4;
		$('#fotoAmpliada').attr('src', 'common/img/fotos/foto_4.png');
		$('#descricaoFotos').html('Natal dos Simpsons');
		
		abc++;
		$('#ampliarFotos').slideDown(1000);
		$('#ampliarFotos').css('z-index', abc);
	});
	$('#foto5').click(function()
	{
		fotoAtual = 5;
		$('#fotoAmpliada').attr('src', 'common/img/fotos/foto_5.png');
		$('#descricaoFotos').html('Piquenique dos Simpsons');
		
		abc++;
		$('#ampliarFotos').slideDown(1000);
		$('#ampliarFotos').css('z-index', abc);
	});
	$('#foto6').click(function()
	{
		fotoAtual = 6;
		$('#fotoAmpliada').attr('src', 'common/img/fotos/foto_6.png');
		$('#descricaoFotos').html('Simpsons Beatles');
		
		abc++;
		$('#ampliarFotos').slideDown(1000);
		$('#ampliarFotos').css('z-index', abc);
	});
	$('#foto7').click(function()
	{
		fotoAtual = 7;
		$('#fotoAmpliada').attr('src', 'common/img/fotos/foto_7.png');
		$('#descricaoFotos').html('Bart, Maggie e Lisa');
		
		abc++;
		$('#ampliarFotos').slideDown(1000);
		$('#ampliarFotos').css('z-index', abc);
	});
	$('#foto8').click(function()
	{
		fotoAtual = 8;
		$('#fotoAmpliada').attr('src', 'common/img/fotos/foto_8.png');
		$('#descricaoFotos').html('50 Cent e Bart');
		
		abc++;
		$('#ampliarFotos').slideDown(1000);
		$('#ampliarFotos').css('z-index', abc);
	});
	$('#foto9').click(function()
	{
		fotoAtual = 9;
		$('#fotoAmpliada').attr('src', 'common/img/fotos/foto_9.png');
		$('#descricaoFotos').html('Casal Simpsons');
		
		abc++;
		$('#ampliarFotos').slideDown(1000);
		$('#ampliarFotos').css('z-index', abc);
	});
	$('#foto10').click(function()
	{
		fotoAtual = 10;
		$('#fotoAmpliada').attr('src', 'common/img/fotos/foto_10.png');
		$('#descricaoFotos').html('Bar do Moe');
		
		abc++;
		$('#ampliarFotos').slideDown(1000);
		$('#ampliarFotos').css('z-index', abc);
	});
	$('#foto11').click(function()
	{
		fotoAtual = 11;
		$('#fotoAmpliada').attr('src', 'common/img/fotos/foto_11.png');
		$('#descricaoFotos').html('Férias dos Simpsons');
		
		abc++;
		$('#ampliarFotos').slideDown(1000);
		$('#ampliarFotos').css('z-index', abc);
	});
	$('#foto12').click(function()
	{
		fotoAtual = 12;
		$('#fotoAmpliada').attr('src', 'common/img/fotos/foto_12.png');
		$('#descricaoFotos').html('Homer no Trabalho');
		
		abc++;
		$('#ampliarFotos').slideDown(1000);
		$('#ampliarFotos').css('z-index', abc);
	});
	$('#foto13').click(function()
	{
		fotoAtual = 13;
		$('#fotoAmpliada').attr('src', 'common/img/fotos/foto_13.png');
		$('#descricaoFotos').html('Homer em casa');
		
		abc++;
		$('#ampliarFotos').slideDown(1000);
		$('#ampliarFotos').css('z-index', abc);
	});
	$('#foto14').click(function()
	{
		fotoAtual = 14;
		$('#fotoAmpliada').attr('src', 'common/img/fotos/foto_14.png');
		$('#descricaoFotos').html('Homer cortando suas unhas');
		
		abc++;
		$('#ampliarFotos').slideDown(1000);
		$('#ampliarFotos').css('z-index', abc);
	});
	$('#foto15').click(function()
	{
		fotoAtual = 15;
		$('#fotoAmpliada').attr('src', 'common/img/fotos/foto_15.png');
		$('#descricaoFotos').html('Homer de jamaicano');
		
		abc++;
		$('#ampliarFotos').slideDown(1000);
		$('#ampliarFotos').css('z-index', abc);
	});
	$('#foto16').click(function()
	{
		fotoAtual = 16;
		$('#fotoAmpliada').attr('src', 'common/img/fotos/foto_16.png');
		$('#descricaoFotos').html('Homer e Bart');
		
		abc++;
		$('#ampliarFotos').slideDown(1000);
		$('#ampliarFotos').css('z-index', abc);
	});
	
	
	//passar fotos
	$('#seta1').click(function()
	{
		if(fotoAtual == 16)
		{
			fotoAtual = 0;
		}
		fotoAtual++;
		$('#fotoAmpliada').attr('src', 'common/img/fotos/foto_'+ fotoAtual +'.png');
		
		switch(fotoAtual)
		{
			case 1: $('#descricaoFotos').html('Família Simpsons'); break;
			case 2: $('#descricaoFotos').html('Bart Simpsons'); break;
			case 3: $('#descricaoFotos').html('Ronaldo e Homer'); break;
			case 4: $('#descricaoFotos').html('Natal dos Simpsons'); break;
			case 5: $('#descricaoFotos').html('Piquenique dos Simpsons'); break;
			case 6: $('#descricaoFotos').html('Simpsons Beatles'); break;
			case 7: $('#descricaoFotos').html('Bart, Maggie e Lisa'); break;
			case 8: $('#descricaoFotos').html('50 Cent e Bart'); break;
			case 9: $('#descricaoFotos').html('Casal Simpsons'); break;
			case 10: $('#descricaoFotos').html('Bar do Moe'); break;
			case 11: $('#descricaoFotos').html('Férias dos Simpsons'); break;
			case 12: $('#descricaoFotos').html('Homer no Trabalho'); break;
			case 13: $('#descricaoFotos').html('Homer em casa'); break;
			case 14: $('#descricaoFotos').html('Homer cortando suas unhas'); break;
			case 15: $('#descricaoFotos').html('Homer de jamaicano'); break;
			case 16: $('#descricaoFotos').html('Homer e Bart'); break;
		}
	});
	$('#seta2').click(function()
	{
		if(fotoAtual == 1)
		{
			fotoAtual = 17;
		}
		fotoAtual--;
		$('#fotoAmpliada').attr('src', 'common/img/fotos/foto_'+ fotoAtual +'.png');
		
		switch(fotoAtual)
		{
			case 1: $('#descricaoFotos').html('Família Simpsons'); break;
			case 2: $('#descricaoFotos').html('Bart Simpsons'); break;
			case 3: $('#descricaoFotos').html('Ronaldo e Homer'); break;
			case 4: $('#descricaoFotos').html('Natal dos Simpsons'); break;
			case 5: $('#descricaoFotos').html('Piquenique dos Simpsons'); break;
			case 6: $('#descricaoFotos').html('Simpsons Beatles'); break;
			case 7: $('#descricaoFotos').html('Bart, Maggie e Lisa'); break;
			case 8: $('#descricaoFotos').html('50 Cent e Bart'); break;
			case 9: $('#descricaoFotos').html('Casal Simpsons'); break;
			case 10: $('#descricaoFotos').html('Bar do Moe'); break;
			case 11: $('#descricaoFotos').html('Férias dos Simpsons'); break;
			case 12: $('#descricaoFotos').html('Homer no Trabalho'); break;
			case 13: $('#descricaoFotos').html('Homer em casa'); break;
			case 14: $('#descricaoFotos').html('Homer cortando suas unhas'); break;
			case 15: $('#descricaoFotos').html('Homer de jamaicano'); break;
			case 16: $('#descricaoFotos').html('Homer e Bart'); break;
		}
	});
	
}//fotos

function historia()
{
	$('#iconHis').dblclick(function()
	{
		$('#janHistoria').slideDown(1000);
		$('#menu').hide();
		abc++;
		$("#janHistoria").css('z-index', abc)
	});
	$('#historia').click(function()
	{
		$('#janHistoria').slideDown(1000);
		$('#menu').hide();
		abc++;
		$("#janHistoria").css('z-index', abc)
	});
	$('#janHistoria').click(function()
	{
		$('#menu').hide();
		abc++;
		$("#janHistoria").css('z-index', abc)
	});
	$('#xHistoria').click(function()
	{
		$('#janHistoria').hide();
	});
}//historia

function premios()
{
	$('#iconPre').dblclick(function()
	{
		$('#janPremios').slideDown(1000);
		$('#menu').hide();
		abc++;
		$("#janPremios").css('z-index', abc)
	});
	$('#premios').click(function()
	{
		$('#janPremios').slideDown(1000);
		$('#menu').hide();
		abc++;
		$("#janPremios").css('z-index', abc)
	});
	$('#janPremios').click(function()
	{
		$('#menu').hide();
		abc++;
		$("#janPremios").css('z-index', abc)
	});
	$('#xPremios').click(function()
	{
		$('#janPremios').hide();
	});
	
	//mostrar premios
	cp1 = 0; cp2 = 0; cp3 = 0; cp4 = 0; cp5 = 0; cp6 = 0;
	$('#clickPre1').click(function()
	{
		cp1++;
		if(cp1 == 1)
		{
			$('#clickPre1').css('background-image', 'url(common/img/bg_seta_2.png)');
			$('#mostraPre1').show();
		}
		else
		{
			$('#clickPre1').css('background-image', 'url(common/img/bg_seta_1.png)');
			$('#mostraPre1').hide();
			cp1 = 0;
		}
	});
	$('#clickPre2').click(function()
	{
		cp2++;
		if(cp2 == 1)
		{
			$('#clickPre2').css('background-image', 'url(common/img/bg_seta_2.png)');
			$('#mostraPre2').show();
		}
		else
		{
			$('#clickPre2').css('background-image', 'url(common/img/bg_seta_1.png)');
			$('#mostraPre2').hide();
			cp2 = 0;
		}
	});
	$('#clickPre3').click(function()
	{
		cp3++;
		if(cp3 == 1)
		{
			$('#clickPre3').css('background-image', 'url(common/img/bg_seta_2.png)');
			$('#mostraPre3').show();
		}
		else
		{
			$('#clickPre3').css('background-image', 'url(common/img/bg_seta_1.png)');
			$('#mostraPre3').hide();
			cp3 = 0;
		}
	});
	$('#clickPre4').click(function()
	{
		cp4++;
		if(cp4 == 1)
		{
			$('#clickPre4').css('background-image', 'url(common/img/bg_seta_2.png)');
			$('#mostraPre4').show();
		}
		else
		{
			$('#clickPre4').css('background-image', 'url(common/img/bg_seta_1.png)');
			$('#mostraPre4').hide();
			cp4 = 0;
		}
	});
	$('#clickPre5').click(function()
	{
		cp5++;
		if(cp5 == 1)
		{
			$('#clickPre5').css('background-image', 'url(common/img/bg_seta_2.png)');
			$('#mostraPre5').show();
		}
		else
		{
			$('#clickPre5').css('background-image', 'url(common/img/bg_seta_1.png)');
			$('#mostraPre5').hide();
			cp5 = 0;
		}
	});
	$('#clickPre6').click(function()
	{
		cp6++;
		if(cp6 == 1)
		{
			$('#clickPre6').css('background-image', 'url(common/img/bg_seta_2.png)');
			$('#mostraPre6').show();
		}
		else
		{
			$('#clickPre6').css('background-image', 'url(common/img/bg_seta_1.png)');
			$('#mostraPre6').hide();
			cp6 = 0;
		}
	});
}//premios

function corners()
{
	//colocar bordas
	$('#menu').corner('top');
	$('#area1').corner();
	$('td').corner();
	$('#reiniciar').corner();
	
	$('#indentificacao').corner();
	$('.foto').corner();
	$('.foto2').corner();
	
	$('#iconHis').corner('10px');
	$('#iconPre').corner();
	$('#iconPer').corner();
	$('#iconMus').corner();
	$('#iconFot').corner();
	
	$('#janConfiguracoes').corner();
	$('#janUsuarios').corner();
	$('#janHistoria').corner();
	$('#janPremios').corner();
	$('#janPerfil').corner();
	$('#janMusicas').corner();
	$('#janFotos').corner();
	$('.janDentro').corner();
	$('.bordasAzuis').corner();
	$('.imgInternas').corner();
	$('.users').corner();
	$('.musics').corner();
	$('.fotos').corner();
	
	$('#ampliarFotos').corner();
	$('#ampliarFotosDentro').corner();
	$('#player').corner();
	$('#playerArrastar').corner();
	$('#playerDentro').corner();
}//corners

function draggable()
{
	$('#indentificacao').draggable({containment: '#main', handle: 'h1' });
	$('#janConfiguracoes').draggable({containment: '#main', handle: 'h1' });
	$('#janUsuarios').draggable({containment: '#main', handle: 'h1' });
	$('#janHistoria').draggable({containment: '#main', handle: 'h1' });
	$('#janPremios').draggable({containment: '#main', handle: 'h1' });
	$('#janPerfil').draggable({containment: '#main', handle: 'h1' });
	$('#janMusicas').draggable({containment: '#main', handle: 'h1' });
	$('#janFotos').draggable({containment: '#main', handle: 'h1' });
	
	$('#ampliarFotos').draggable({containment: '#main', handle: '#playerArrastar' });
	$('#player').draggable({containment: '#main', handle: '#playerArrastar' });
	
	$('.icons').draggable({containment: '#main' });
	
}//draggable

function paraEstudo()
{
	//pega o valor da largura do body diminui 170(largura da indentificacao) e 10(margin)
	$("#indentificacao").css('top', '10px');
	localLeft = $("body").width() - 170 - 10;
	$("#indentificacao").css('left', localLeft);
	
	$("#iconHis").css('top', '10px');
	$("#iconHis").css('left', '10px');
		
	//pegar top do icon a cima, com o valor exato em NUMEROS pegando pelo position().top e add na variavel "topDoIconACima" 100(alturaDoIcon) + 10(margin)
	topDoIconACima = $("#iconHis").position().top;
	topDoIconACima = topDoIconACima + 100;
	$("#iconPre").css('top', topDoIconACima );
	$("#iconPre").css('left', '10px');
	
	top2 = $('#iconPre').position().top;
	top2 = top2 + 100;
	$("#iconPer").css('top', top2);
	$("#iconPer").css('left', '10px');
	
	$("#iconMus").css('top', '310px');
	$("#iconMus").css('left', '10px');
	
	$("#iconFot").css('top', '410px');
	$("#iconFot").css('left', '10px');
}//para estudo