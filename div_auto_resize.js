/**
 * Automatic DIV resizing between the minimum and maximum window heights
 */
function DivAutoResize( div, minWidth, minHeight, maxWidth, maxHeight )
{
	this.div = div;
	this.minWidth = minWidth;
	this.minHeight = minHeight;
	this.maxWidth = maxWidth;
	this.maxHeight = maxHeight;
	
	var o = this;
	this.addWindowEvent( 'onload', this, this.onLoadDiv );
	this.addWindowEvent( 'onresize', this, this.onResizeDiv );
}

DivAutoResize.prototype = {
	addWindowEvent: function( eventName, scope, func )
	{
		var oldEvent = window[ eventName ];
		if (typeof window[ eventName ] != 'function') window[ eventName ] = function(){ func.call( scope ); };
		else
		{
			window[ eventName ] = function()
			{ 
				if( oldEvent ) oldEvent();
				func.call( scope );
			}
		}
		
	},

	getWinSize: function()
	{
		var winH, winW;
		if (window.innerWidth)
		{
			winW = window.innerWidth;
			winH = window.innerHeight;
		}
		else if (document.body && document.body.offsetWidth)
		{
			winW = document.body.offsetWidth;
			winH = document.body.offsetHeight;
		}
		return { height: winH, width: winW };
	},
	
	onLoadDiv: function()
	{
		this.updateSize();
	},
	
	onResizeDiv: function()
	{
		this.updateSize();
	},
	
	updateSize: function()
	{
		var winSize = this.getWinSize();
		var newWidth = winSize.width;
		var newHeight = winSize.height;
		
		if (newWidth < this.minWidth)
			newWidth = this.minWidth;
		else if (newWidth > this.maxWidth)
			newWidth = this.maxWidth;
		
		if (newHeight < this.minHeight)
			newHeight = this.minHeight;
		else if (newHeight > this.maxHeight)
			newHeight = this.maxHeight;
		
		/*
		 for IE on PC, turn off the disabled scrollbar 
		 on the right when there's no content to scroll
		*/
/*		if( document.all ) document.body.scroll = ( w!="100%" || h!="100%" )? "auto" : "no";*/
		
		this.div.style.width = newWidth + "px";
		this.div.style.height = newHeight + "px";
	}
}