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
import { RadioControl, SelectControl, TextControl } from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( { attributes, setAttributes } ) {

	const {
		postType,
		pluginName,
		linkLabel,
		linkUrl,
	} = attributes;

	const onChangePost = newValue => {
		setAttributes( { postType: newValue } );
	};

	const onChangePlugin = newValue => {
		setAttributes ( { pluginName: newValue } );
	};

	const onChangeLabel = newValue => {
		setAttributes ( { linkLabel: newValue } );
	};

	const onChangeUrl = newValue => {
		setAttributes ( { linkUrl: newValue } );
	};


	return (
		<div { ...useBlockProps() }>
			<RadioControl
				label="Select plugin"
				selected={ pluginName }
				options={ [
					{ label: 'WP All Import', value: 'wpai' },
					{ label: 'WP All Export', value: 'wpae' },
				] }
				onChange={ onChangePlugin }
			/>
			<SelectControl
            	label="Post type"
            	value={ postType }
            	options={ [
					{ label: 'WordPress Users', value: 'users' },
					{ label: 'WordPress Comments', value: 'comments' },
					{ label: 'Taxonomies (categories and tags)', value: 'taxonomies'},
                	{ label: 'WooCommerce Products', value: 'products' },
                	{ label: 'WooCommerce Orders', value: 'orders' },
                	{ label: 'WooCommerce Customers', value: 'customers' },
					{ label: 'WooCommerce Reviews', value: 'reviews' },
					{ label: 'WooCommerce Coupons', value: 'coupons' },
					{ label: 'Gravity Forms Entries', value: 'gfentries' },
            	] }
            	onChange={ onChangePost }
            	__nextHasNoMarginBottom
       		/>
			<TextControl
				label="Link Label (optional)"
				value= { linkLabel }
				onChange={ onChangeLabel }
			/>
			<TextControl
				label="Link URL"
				value= { linkUrl }
				onChange={ onChangeUrl }
			/>
		</div>
	);
}