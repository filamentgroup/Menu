/*global jQuery:true*/
(function($) {
	test( "only one menu can be opened at a time", function(){
		expect(3);
		var $options1 = $( "#options-1" );
		var $options2 = $( "#options-2" );

		$options1.one("Menu:open", function(){
			ok( true, "open called on first menu" );
		});

		$options1.one("Menu:close", function(){
			ok( true, "open called on first menu" );
		});

		$options2.one("Menu:open", function(){
			ok( true, "open called on first menu" );
		});

		$options1.data("Menu").open();
		$options2.data("Menu").open();
	});
}(jQuery));
