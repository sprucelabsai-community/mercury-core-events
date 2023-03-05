import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import feedItemSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/feedItem.schema'

const feedSchema: SpruceSchemas.Mercury.v2020_12_25.FeedSchema  = {
	id: 'feed',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** . */
	            'items': {
	                type: 'schema',
	                isRequired: true,
	                isArray: true,
	                minArrayLength: 0,
	                options: {schema: feedItemSchema_v2020_12_25,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(feedSchema)

export default feedSchema
