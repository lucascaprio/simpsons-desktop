abc = 11;
abcd = 12;

$(document).ready(anima);

function init2()
{
	abcd--;
	$('#rosquinha2').css('background-image','url(common/img/entrada/r'+abcd+'.png)');
}

function init()
{
	abc--;
	$('#rosquinha').css('background-image','url(common/img/entrada/r'+abc+'.png)');
	$('#rosquinha').css('display','none');
	$('#rosquinha').fadeIn(1000);

	
	if(abc == 0)
	{
		window.location.href = "simpsons.html";
	}
}

function anima()
{
	$('#rgrande').hide();
	tempo1 = setInterval('init()',1000);
	tempo2 = setInterval('init2()',1000);
	tempoPont = setInterval('pontos()',1000);		
}

p = 0;
function pontos()
{
	p++;
	if(p == 0)
	{
		$('#pont').html("");
	}
	if(p == 1)
	{
		$('#pont').html(".");
	}
	if(p == 2)
	{
		$('#pont').html("..");
	}
	if(p == 3)
	{
		$('#pont').html("...");
		p = -1;
	}
}
