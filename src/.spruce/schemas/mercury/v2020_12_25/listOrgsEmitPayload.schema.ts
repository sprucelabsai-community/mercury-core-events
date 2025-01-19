import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventPagingRequestSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventPagingRequest.schema'

const listOrgsEmitPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.ListOrgsEmitPayloadSchema  = {
	id: 'listOrgsEmitPayload',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** . Will only return organizations where a person has a role (including guest). */
	            'shouldOnlyShowMine': {
	                type: 'boolean',
	                hint: 'Will only return organizations where a person has a role (including guest).',
	                options: undefined
	            },
	            /** . Will only return organizations where a person has a role that indicates they work there. */
	            'shouldOnlyShowWhereIAmEmployed': {
	                type: 'boolean',
	                hint: 'Will only return organizations where a person has a role that indicates they work there.',
	                options: undefined
	            },
	            /** . Will include organizations that are marked as private. You have to have permissions to see these (usually means employed there as owner). */
	            'shouldIncludePrivateOrganizations': {
	                type: 'boolean',
	                hint: 'Will include organizations that are marked as private. You have to have permissions to see these (usually means employed there as owner).',
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
