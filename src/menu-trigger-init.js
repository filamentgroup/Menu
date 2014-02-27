/*
 * menu trigger plugin
 *
 * Copyright (c) 2013 Filament Group, Inc.
 * Licensed under MIT
 */

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

