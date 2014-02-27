/*
 * menu plugin
 *
 * Copyright (c) 2013 Filament Group, Inc.
 * Licensed under MIT
 */

(function( $, w ) {
	"use strict";

	var componentName = "Menu",
		at = {
			ariaHidden: "aria-hidden"
		};

	var menu = function( element ){
		if( !element ){
			throw new Error( "Element required to initialize object" );
		}
		this.element = element;
		this.$element = $( element );
	};

	menu.prototype.opened = true;

	menu.prototype.open = function( trigger, sendFocus ){
		if( this.opened ){
			return;
		}
		this.$element.attr( at.ariaHidden, false );

		this.$element.data( componentName + "-trigger", trigger );
		this.opened = true;
		var $focusable = this.$element.find( "a,[tabindex],input" );
		if( $focusable.length && sendFocus !== false ){
			$focusable[ 0 ].focus();
		}
		this.$element.trigger( componentName + ":open" );
	};

	menu.prototype.close = function(){
		if( !this.opened ){
			return;
		}
		this.$element.attr( at.ariaHidden, true );
		this.opened = false;
		var $trigger = this.$element.data( componentName + "-trigger" );
		if( $trigger ){
			$trigger.focus();
		}
		this.$element.trigger( componentName + ":close" );
	};

	menu.prototype.toggle = function(){
		this[ this.opened ? "close" : "open" ]();
	};

	menu.prototype.init = function(){
		// prevent re-init
		if( this.$element.data( componentName ) ) {
			return;
		}
		this.$element.data( componentName, this );

		this.$element.attr( "role", "menu" );
		this.close();
		var self = this;

		// close on any click, even on the menu
		$( document ).bind( "mouseup", function(){
			self.close();
		} );

		this.$element.trigger( componentName + ":init" );
	};

	w[ componentName ] = menu;

}( jQuery, this ));

