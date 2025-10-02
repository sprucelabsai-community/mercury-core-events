import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import agentSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/agent.schema'

const registerAgentResponsePayloadSchema: SpruceSchemas.Mercury.v2020_12_25.RegisterAgentResponsePayloadSchema  = {
	id: 'registerAgentResponsePayload',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** . */
	            'agent': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: agentSchema_v2020_12_25,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(registerAgentResponsePayloadSchema)

export default registerAgentResponsePayloadSchema
