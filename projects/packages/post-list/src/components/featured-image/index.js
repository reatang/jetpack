/**
 * External dependencies
 */
import { Tooltip, Icon } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { image } from '@wordpress/icons';

export default function FeaturedImage( { url, thumb } ) {
	if ( ! url ) {
		return (
			<Tooltip
				text={ __( 'No featured image set.', 'jetpack-post-list' ) }
				position="top"
				className="jetpack-post-list__featured-image-tooltip"
			>
				<div className="post-list__post-featured-image">
					<Icon icon={ image } size={ 48 } />
				</div>
			</Tooltip>
		);
	}

	return (
		// TODO: Pass the right alt text to the client.
		<img
			alt=""
			className="post-list__post-featured-image"
			src={ thumb }
			width="50px"
			height="50px"
		/>
	);
}
