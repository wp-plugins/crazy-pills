<?php
/*
Plugin Name:	Crazy Pills
Description:	Stop the shortcode madness with Crazy Pills. Build buttons, boxes, beautiful lists, and highlight text right from your editor, with live preview.
Author:			Hassan Derakhshandeh
Version:		0.2.1
Author URI:		http://tween.ir/


		* 	Copyright (C) 2011  Hassan Derakhshandeh
		*	http://tween.ir/
		*	hassan.derakhshandeh@gmail.com

		This program is free software; you can redistribute it and/or modify
		it under the terms of the GNU General Public License as published by
		the Free Software Foundation; either version 2 of the License, or
		(at your option) any later version.

		This program is distributed in the hope that it will be useful,
		but WITHOUT ANY WARRANTY; without even the implied warranty of
		MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
		GNU General Public License for more details.

		You should have received a copy of the GNU General Public License
		along with this program; if not, write to the Free Software
		Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
*/

class CrazyPills {

	private $base_url;

	function CrazyPills() {
		add_action( 'init', array( &$this, 'add_button_3' ) );
		add_filter( 'mce_css', array( &$this, 'mce_css' ) );
		add_action( 'template_redirect', array( &$this, 'stylesheet' ), 100 );
		$this->base_url = trailingslashit( plugins_url( '', __FILE__ ) );
	}

	/**
	 * Load stylesheet for editor preview
	 *
	 * @link http://codex.wordpress.org/Plugin_API/Filter_Reference/mce_css
	 * @return string mce_css
	 * @since 0.1
	 */
	function mce_css( $mce_css ) {
		if( ! empty( $mce_css ) ) $mce_css .= ',';
		$mce_css .= $this->base_url . 'css/styles.css';
		if( is_rtl() ) {
			$mce_css .= ',' . $this->base_url . 'css/rtl.css';
		}
		return $mce_css;
	}

	function add_button_3() {
		if ( current_user_can('edit_posts') &&  current_user_can('edit_pages') ) {
			add_filter( 'mce_external_plugins', array( &$this, 'add_plugin_3' ) );
			add_filter( 'mce_buttons_3', array( &$this, 'register_button_3' ) );
		}
	}

	function register_button_3( $buttons ) {
		array_push( $buttons, 'callouts', 'highlights', 'buttons', 'checks', 'bullets' );
		return $buttons;
	}

	function add_plugin_3( $plugin_array ) {
		$plugin_array['callouts'] = $this->base_url . 'js/editor.js';
		$plugin_array['highlights'] = $this->base_url . 'js/editor.js';
		$plugin_array['buttons'] = $this->base_url . 'js/editor.js';
		$plugin_array['checks'] = $this->base_url . 'js/editor.js';
		$plugin_array['bullets'] = $this->base_url . 'js/editor.js';
		return $plugin_array;
	}

	function stylesheet() {
		wp_enqueue_style( 'crazypills', $this->base_url . 'css/styles.css', array(), '0.2.1' );
		if( is_rtl() ) {
			wp_enqueue_style( 'crazypills-rtl', $this->base_url . 'css/rtl.css', array(), '0.2.1' );
		}
	}
}
new CrazyPills;