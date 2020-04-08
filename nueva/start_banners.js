BBWEB_ADSERVER = false;

function loadAdv()
{
	if (!BBWEB_ADSERVER)
		return false;
	
	if (!isBrowserAllowed())
		return false;
	
	// Creamos los objetos
	objDiv = document.getElementById("dv_adv"); // DIV
	objIfr = document.getElementById("if_adv"); // Iframe                           

	// Cargamos la ruta del Iframe
	objIfr.src=BBWEB_ADSERVER;

	// Hacemos la capa visible
	objDiv.style.display = "block";
	objDiv.style.visibility = "visible"	;
	return true;                             
}

function unLoadAdv()
{
	if (!isBrowserAllowed())
		return false;
		
	// Creamos los objetos
	objDiv = document.getElementById("dv_adv"); // DIV
	objIfr = document.getElementById("if_adv"); // Iframe
   
	// Dejamos el iframe sin src
	objIfr.src="about:blank";
	
	objDiv.style.display = "none";

	return true;
} 

/* Genericas */

function trackImpresionInterstitialGeneric()
{
	var randomnumber = Math.round(Math.random()*10000000000);
	var objInterstitial = document.getElementById("if_adv_interstitial");
	objInterstitial.src="http://cdn.publicidad.net/generic/boombang/pack/interstitial/impresion.html?"+randomnumber;
}

function trackImpresionObjetovirtualGeneric()
{
	var randomnumber = Math.round(Math.random()*10000000000);
	var objObjetovirtual = document.getElementById("if_adv_interstitial");
	objObjetovirtual.src="http://cdn.publicidad.net/generic/boombang/pack/objeto/impresion.html?"+randomnumber;
}

function trackImpresionSalaGeneric()
{
	var randomnumber = Math.round(Math.random()*10000000000);
	var objSala = document.getElementById("if_adv_interstitial");
	objSala.src="http://cdn.publicidad.net/generic/boombang/pack/sala/impresion.html?"+randomnumber;
}

function trackImpresionVideoGeneric()
{
	var randomnumber = Math.round(Math.random()*10000000000);
	var objSala = document.getElementById("if_adv_interstitial");
	objSala.src="http://cdn.publicidad.net/generic/boombang/pack/sala/video.html?"+randomnumber;
}

/* Genericas 2*/

function trackImpresionInterstitialGeneric2()
{
	var randomnumber = Math.round(Math.random()*10000000000);
	var objInterstitial = document.getElementById("if_adv_interstitial");
	objInterstitial.src="http://ae.spublicidad.net/boombang/interstitial_2/impresion.html?"+randomnumber;
}

function trackImpresionObjetovirtualGeneric2()
{
	var randomnumber = Math.round(Math.random()*10000000000);
	var objObjetovirtual = document.getElementById("if_adv_interstitial");
	objObjetovirtual.src="http://ae.spublicidad.net/boombang/objeto-virtual_2/impresion.html?"+randomnumber;
}

function trackImpresionSalaGeneric2()
{
	var randomnumber = Math.round(Math.random()*10000000000);
	var objSala = document.getElementById("if_adv_interstitial");
	objSala.src="http://ae.spublicidad.net/boombang/sala-personalizada_2/impresion.html?"+randomnumber;
}

function trackImpresionEmax()
{
	var randomnumber = Math.round(Math.random()*10000000000);
	var sala = document.getElementById("if_adv_interstitial");
	sala.src="http://cdn.publicidad.net/aff/boombang/sala/impresion.html?"+randomnumber;
}

/**
 * Checks if the user's web browser is allowed to show ads.
 * Showing ads is restricted in most web browsers because they can not render
 * the ads in front of the flash movie without using the wmode=opaque property.
 */
function isBrowserAllowed()
{
	return true; // All browsers allowed.
	//return navigator.userAgent.match('MSIE') != null;
}
