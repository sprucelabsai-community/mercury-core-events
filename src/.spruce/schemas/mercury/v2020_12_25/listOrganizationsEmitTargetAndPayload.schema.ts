import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import listOrgsEmitTargetSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/listOrgsEmitTarget.schema'
import listOrgsEmitPayloadSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/listOrgsEmitPayload.schema'

const listOrganizationsEmitTargetAndPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.ListOrganizationsEmitTargetAndPayloadSchema  = {
	id: 'listOrganizationsEmitTargetAndPayload',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** Source. */
	            'source': {
	                label: 'Source',
	                type: 'schema',
	                options: {schema: eventSourceSchema_v2021_09_13,}
	            },
	            /** . */
	            'target': {
	                type: 'schema',
	                options: {schema: listOrgsEmitTargetSchema_v2020_12_25,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                options: {schema: listOrgsEmitPayloadSchema_v2020_12_25,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(listOrganizationsEmitTargetAndPayloadSchema)

export default listOrganizationsEmitTargetAndPayloadSchema
