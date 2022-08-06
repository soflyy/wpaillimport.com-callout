<?php
/**
 * Plugin Name:       Callout
 * Description:       Callout block for WP All Import's documentation.
 * Requires at least: 5.9
 * Requires PHP:      7.0
 * Version:           0.1.3
 * Author:            Diego Marigno
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       callout
 *
 * @package           wpai
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function wpai_callout_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'wpai_callout_block_init' );
