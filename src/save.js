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

	const mySwitchType = value => {
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
				return 'Gravity Forms entries';
			case 'posts':
				return 'WordPress posts';
			case 'acf':
				return 'Advanced Custom Fields';
			case 'toolset':
				return 'Toolset Types data';
		  }
	};

	const mySwitchName = value => {
		switch(value) {
			case 'wpai':
				return <b>WP All Import</b>;
			case 'wpae':
				return <b>WP All Export</b>;
			case 'both':
			case 'bulk':
				return <span><b>WP All Import</b> and <b>WP All Export</b></span>;
		  }
	};

	const mySwitchAction = value => {
		switch(value) {
			case 'wpai':
				return 'import';
			case 'wpae':
				return 'export';
			case 'both':
				return 'migrate';
			case 'bulk':
				return 'bulk edit';
		  }
	};

	const mySwitchActIng = value => {
		switch(value) {
			case 'wpai':
				return <b>importing</b>;
			case 'wpae':
				return <b>exporting</b>;
			case 'both':
				return <b>migrating</b>;
			case 'bulk':
				return <b>bulk editing</b>;
		  }
	};

	return (
		<div { ...useBlockProps.save() }>
			<div class="wp-block-wpai-callout-wrapper">
				<div class="wp-block-wpai-callout-outer">
				<img src="https://www.wpallimport.com/wp-content/plugins/dc-nav/static/info-icon.svg" class="wp-block-wpai-callout-info-icon"></img>
				</div>
				<div class="wp-block-wpai-callout-inner">
					<span class="wp-block-wpai-callout-inner-text">This documentation covers how to <b>{ mySwitchAction(pluginName) } { mySwitchType(postType) }</b> using { mySwitchName(pluginName) }. 
					For a broader look at { mySwitchActIng(pluginName) } <b>{ mySwitchType(postType) }</b>, check out:</span>
					<a href={ linkUrl } style={{textTransform: 'capitalize'}} class="wp-block-wpai-callout-link">
						<div class="wp-block-wpai-callout-link-text">{ linkLabel ? linkLabel : mySwitchAction(pluginName) + " " + mySwitchType(postType) }</div>
						<img src="https://www.wpallimport.com/wp-content/plugins/dc-nav/static/text-link-arrow-teal.svg" class="wp-block-wpai-callout-link-arrow"></img>
					</a>
				</div>
			</div>
		</div>
	);
}