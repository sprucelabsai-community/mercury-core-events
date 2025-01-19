import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventPagingRequestSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventPagingRequest.schema'

const listLocationsEmitPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.ListLocationsEmitPayloadSchema  = {
	id: 'listLocationsEmitPayload',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** . Will only return locations where a person has a role that respresent they work there. */
	            'shouldOnlyShowWhereIAmEmployed': {
	                type: 'boolean',
	                hint: 'Will only return locations where a person has a role that respresent they work there.',
	                options: undefined
	            },
	            /** . */
	            'paging': {
	                type: 'schema',
	                options: {schema: eventPagingRequestSchema_v2021_09_13,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(listLocationsEmitPayloadSchema)

export default listLocationsEmitPayloadSchema
