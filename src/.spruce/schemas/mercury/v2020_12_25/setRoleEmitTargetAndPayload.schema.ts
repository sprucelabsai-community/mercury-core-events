import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import setRoleEmitTargetSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/setRoleEmitTarget.schema'
import setRoleEmitPayloadSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/setRoleEmitPayload.schema'

const setRoleEmitTargetAndPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.SetRoleEmitTargetAndPayloadSchema  = {
	id: 'setRoleEmitTargetAndPayload',
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
	                options: {schema: setRoleEmitTargetSchema_v2020_12_25,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: setRoleEmitPayloadSchema_v2020_12_25,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(setRoleEmitTargetAndPayloadSchema)

export default setRoleEmitTargetAndPayloadSchema
