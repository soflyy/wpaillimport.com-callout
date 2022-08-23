/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps } from '@wordpress/block-editor';
import infoIcon from './info-icon.svg';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save( { attributes } ) {

	const {
		postType,
		pluginName,
		linkLabel,
		linkUrl,
	} = attributes;

	const mySwitch = value => {
		switch(value) {
			case 'users':
				return 'WordPress users';
			case 'comments':
				return 'WordPress comments';
			case 'taxonomies':
				return 'WordPress taxonomies';
			case 'products':
				return 'WooCommerce products';
			case 'orders':
				return 'WooCommerce orders';
			case 'customers':
				return 'WooCommerce customers';
			case 'reviews':
				return 'WooCommerce reviews';
			case 'coupons':
				return 'WooCommerce coupons';
			case 'gfentries':
				return 'Gravity Forms Entries';
		  }
	};

	return (
		<div { ...useBlockProps.save() }>
			<div class="wp-block-wpai-callout-wrapper">
				<div class="wp-block-wpai-callout-outer">
				<img src={infoIcon} class="wp-block-wpai-callout-info-icon"></img>
				</div>
				<div class="wp-block-wpai-callout-inner">
					<span class="wp-block-wpai-callout-inner-text">This documentation covers how to <b>{ ( pluginName === 'wpai' ) ? "import " : "export " } 
					{ mySwitch(postType) }</b>
					{" "}using <b>{ ( pluginName === 'wpai' ) ? "WP All Import" : "WP All Export" }</b>. 
					For a broader look at <b>{ ( pluginName === 'wpai' ) ? "importing " : "exporting " } 
					{ mySwitch(postType) }</b>, check out:</span>
					<a href={ linkUrl } style={{textTransform: 'capitalize'}} class="wp-block-wpai-callout-link">
						<div class="wp-block-wpai-callout-link-text">{ linkLabel ? linkLabel :  ( ( pluginName === 'wpai' ) ? "Import" : "Export" ) + " " + mySwitch(postType) }</div>
						<img src="https://www.wpallimport.com/wp-content/plugins/dc-nav/static/text-link-arrow-teal.svg" class="wp-block-wpai-callout-link-arrow"></img>
					</a>
				</div>
			</div>
		</div>
	);
}