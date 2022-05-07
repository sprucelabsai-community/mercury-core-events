import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import feedSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/feed.schema'
import eventPagingResponseSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/eventPagingResponse.schema'

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
	                options: {schema: feedSchema_v2020_12_25,}
	            },
	            /** . */
	            'paging': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: eventPagingResponseSchema_v2020_12_25,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(getFeedResponsePayloadSchema)

export default getFeedResponsePayloadSchema
