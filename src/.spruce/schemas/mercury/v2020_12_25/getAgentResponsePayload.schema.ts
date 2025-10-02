import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import agentSchema_v2020_07_22 from '#spruce/schemas/spruce/v2020_07_22/agent.schema'

const getAgentResponsePayloadSchema: SpruceSchemas.Mercury.v2020_12_25.GetAgentResponsePayloadSchema  = {
	id: 'getAgentResponsePayload',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** . */
	            'agent': {
	                type: 'schema',
	                options: {schema: agentSchema_v2020_07_22,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(getAgentResponsePayloadSchema)

export default getAgentResponsePayloadSchema
