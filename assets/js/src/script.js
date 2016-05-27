( function( $ ) {

	function addBlacklistClass() {
		$( 'a' ).each( function() {
			if ( this.href.indexOf('/wp-admin/') !== -1 || 
				 this.href.indexOf('/wp-login.php') !== -1 ) {
				$( this ).addClass( 'wp-link' );
			}
		});
	}

	$( function() {

		addBlacklistClass();

		var settings = { 
			anchors: 'a',
			blacklist: '.wp-link',
			onStart: {
				duration: 280,
				render: function ( $container ) {
					$container.addClass( 'slide-out' );
				}
			},
			onAfter: function( $container ) {

				addBlacklistClass();

				var $hash = $( window.location.hash );

				if ( $hash.length !== 0 ) {

					var offsetTop = $hash.offset().top;

					$( 'body, html' ).animate( {
							scrollTop: ( offsetTop - 60 ),
						}, {
							duration: 280
					} );
				}

				$container.removeClass( 'slide-out' );
			}
		};

		$( '#page' ).smoothState( settings );
	} );

})( jQuery );