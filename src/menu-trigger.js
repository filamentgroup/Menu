/*
 * menu-trigger plugin
 *
 * Copyright (c) 2013 Filament Group, Inc.
 * Licensed under MIT
 */

(function( $, w ) {
	"use strict";

	var componentName = "Menutrigger";

	var Menutrigger = function( element ){
		if( !element ){
			throw new Error( "Element required to initialize object" );
		}
		this.element = element;
		this.$element = $( element );
		this.$menu = $( "#" +  this.$element.attr( "data-menu-trigger" ) );
		this.menu = this.$menu.data( "Menu" );
	};

	Menutrigger.prototype._bindbehavior = function(){
		var self = this;

		if( this.$element.is( "a" ) ){
			this.$element
				.attr( "role", "button" )
				.bind( "click", function( e ){
					e.preventDefault();
					self.menu.toggle( this );
				});
		}
		else if( this.$element.is( "input" ) ){
			this.$element
				.bind( "input keyup", function( e ){
					if( this.value === "" ){
						self.menu.close();
					}
					else {
						self.menu.open( this, false );
					}
				})
				.bind( "blur", function( e ){
					self.menu.close();
				});
		}
	};

	Menutrigger.prototype.init = function(){
		// prevent re-init
		if( this.$element.data( componentName ) ) {
			return;
		}
		this.$element.data( componentName, this );

		// add attrs
		this.$element.attr( "aria-controls", this.$menu.attr( "id" ) );
		this.$element.attr( "aria-haspopup", "true" );

		this._bindbehavior();

		this.$element.trigger( componentName + ":init" );
	};

	w[ componentName ] = Menutrigger;

}( jQuery, this ));

