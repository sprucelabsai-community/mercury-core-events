import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import feedSchema_v2020_07_22 from '#spruce/schemas/spruce/v2020_07_22/feed.schema'
import eventPagingResponseSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventPagingResponse.schema'

const getFeedResponsePayloadSchema: SpruceSchemas.Mercury.v2020_12_25.GetFeedResponsePayloadSchema  = {
	id: 'getFeedResponsePayload',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** . */
	            'feed': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: feedSchema_v2020_07_22,}
	            },
	            /** . */
	            'paging': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: eventPagingResponseSchema_v2021_09_13,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(getFeedResponsePayloadSchema)

export default getFeedResponsePayloadSchema
