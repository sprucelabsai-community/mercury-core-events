import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import getAgentEmitTargetSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/getAgentEmitTarget.schema'

const getAgentEmitTargetAndPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.GetAgentEmitTargetAndPayloadSchema  = {
	id: 'getAgentEmitTargetAndPayload',
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
	                options: {schema: getAgentEmitTargetSchema_v2020_12_25,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(getAgentEmitTargetAndPayloadSchema)

export default getAgentEmitTargetAndPayloadSchema
