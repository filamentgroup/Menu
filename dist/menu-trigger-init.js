/*! Menu - v0.1.4 - 2017-03-18
* https://github.com/filamentgroup/menu
* Copyright (c) 2017 Scott Jehl; Licensed MIT */
/* global Menutrigger:true */
(function( Menutrigger, $ ) {

	var pluginName = "menu-trigger",
		initSelector = "[data-" + pluginName + "]";

	$.fn[ pluginName ] = function(){
		return this.each(function(){
			new Menutrigger( this ).init();
		});
	};

	// auto-init on enhance (which is called on domready)
	$( document ).bind( "enhance", function( e ){
		$( initSelector, e.target )[ pluginName ]();
	});

}( Menutrigger, jQuery, this ));

