<?php
	/**
	 * Enqueue required scripts.
	 */
	add_action( 'wp_enqueue_scripts', function() {
		
		wp_enqueue_style( 'parent-style', trailingslashit( get_template_directory_uri() ) . 'style.css' );
		wp_enqueue_script( 'smootstate-js', 'https://cdnjs.cloudflare.com/ajax/libs/smoothState.js/0.7.2/jquery.smoothState.min.js', array( 'jquery' ), '0.7.2' );
		wp_enqueue_script( 'script-js', trailingslashit( get_stylesheet_directory_uri() ) . 'assets/js/script.min.js' , array( 'jquery', 'smootstate-js' ), '1.0.0', true );
		
	} );
