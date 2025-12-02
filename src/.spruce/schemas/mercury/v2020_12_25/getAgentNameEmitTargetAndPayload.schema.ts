import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'

const getAgentNameEmitTargetAndPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.GetAgentNameEmitTargetAndPayloadSchema  = {
	id: 'getAgentNameEmitTargetAndPayload',
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
	    }
}

SchemaRegistry.getInstance().trackSchema(getAgentNameEmitTargetAndPayloadSchema)

export default getAgentNameEmitTargetAndPayloadSchema
