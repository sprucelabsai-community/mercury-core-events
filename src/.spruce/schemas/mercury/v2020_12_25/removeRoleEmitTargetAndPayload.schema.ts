import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import removeRoleEmitTargetSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/removeRoleEmitTarget.schema'
import removeRoleEmitPayloadSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/removeRoleEmitPayload.schema'

const removeRoleEmitTargetAndPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.RemoveRoleEmitTargetAndPayloadSchema  = {
	id: 'removeRoleEmitTargetAndPayload',
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
	                options: {schema: removeRoleEmitTargetSchema_v2020_12_25,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: removeRoleEmitPayloadSchema_v2020_12_25,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(removeRoleEmitTargetAndPayloadSchema)

export default removeRoleEmitTargetAndPayloadSchema
