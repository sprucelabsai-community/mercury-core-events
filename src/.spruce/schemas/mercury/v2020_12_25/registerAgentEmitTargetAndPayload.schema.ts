import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import registerAgentEmitTargetSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/registerAgentEmitTarget.schema'
import registerAgentEmitPayloadSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/registerAgentEmitPayload.schema'

const registerAgentEmitTargetAndPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.RegisterAgentEmitTargetAndPayloadSchema  = {
	id: 'registerAgentEmitTargetAndPayload',
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
	                options: {schema: registerAgentEmitTargetSchema_v2020_12_25,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: registerAgentEmitPayloadSchema_v2020_12_25,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(registerAgentEmitTargetAndPayloadSchema)

export default registerAgentEmitTargetAndPayloadSchema
