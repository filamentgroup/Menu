# Menu

jQuery/Shoestring plugin for progressively enhanced menus

[![Filament Group](http://filamentgroup.com/images/fg-logo-positive-sm-crop.png) ](http://www.filamentgroup.com/)

## Getting Started
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/filamentgroup/menu/master/dist/menu.min.js
[max]: https://raw.github.com/filamentgroup/menu/master/dist/menu.js

In your web page:

```html
<script src="shoestring.js"></script>
<script src="dist/menu.min.js"></script>
<script>
$(function($) {
	$( document ).bind( "enhance", function(){
		$( "body" ).addClass( "enhanced" );
	});

	$( document ).trigger( "enhance" );
});
</script>
```

## Demo
Check the demo [here](http://filamentgroup.github.io/Menu/examples/)

## Release History
v0.1.0 - First release
