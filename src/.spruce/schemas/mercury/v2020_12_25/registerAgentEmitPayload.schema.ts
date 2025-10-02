import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import registerAgentSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/registerAgent.schema'

const registerAgentEmitPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.RegisterAgentEmitPayloadSchema  = {
	id: 'registerAgentEmitPayload',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** . */
	            'agent': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: registerAgentSchema_v2020_12_25,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(registerAgentEmitPayloadSchema)

export default registerAgentEmitPayloadSchema
