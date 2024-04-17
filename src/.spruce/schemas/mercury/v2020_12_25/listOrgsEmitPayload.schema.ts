import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventPagingRequestSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventPagingRequest.schema'

const listOrgsEmitPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.ListOrgsEmitPayloadSchema  = {
	id: 'listOrgsEmitPayload',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** . */
	            'shouldOnlyShowMine': {
	                type: 'boolean',
	                options: undefined
	            },
	            /** . */
	            'shouldOnlyShowWhereIAmEmployed': {
	                type: 'boolean',
	                options: undefined
	            },
	            /** . */
	            'shouldIncludePrivateOrganizations': {
	                type: 'boolean',
	                options: undefined
	            },
	            /** . */
	            'paging': {
	                type: 'schema',
	                options: {schema: eventPagingRequestSchema_v2021_09_13,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(listOrgsEmitPayloadSchema)

export default listOrgsEmitPayloadSchema
