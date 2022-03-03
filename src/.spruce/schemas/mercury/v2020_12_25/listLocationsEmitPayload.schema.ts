import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventPagingSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventPaging.schema'

const listLocationsEmitPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.ListLocationsEmitPayloadSchema  = {
	id: 'listLocationsEmitPayload',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** . */
	            'includePrivateLocations': {
	                type: 'boolean',
	                options: undefined
	            },
	            /** . */
	            'paging': {
	                type: 'schema',
	                options: {schema: eventPagingSchema_v2021_09_13,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(listLocationsEmitPayloadSchema)

export default listLocationsEmitPayloadSchema
