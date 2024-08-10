import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import didUpdateAuthorizerStatusEmitTargetSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/didUpdateAuthorizerStatusEmitTarget.schema'
import didUpdateAuthorizerStatusEmitPayloadSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/didUpdateAuthorizerStatusEmitPayload.schema'

const didUpdateAuthorizerStatusEmitTargetAndPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.DidUpdateAuthorizerStatusEmitTargetAndPayloadSchema  = {
	id: 'didUpdateAuthorizerStatusEmitTargetAndPayload',
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
	                options: {schema: didUpdateAuthorizerStatusEmitTargetSchema_v2020_12_25,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: didUpdateAuthorizerStatusEmitPayloadSchema_v2020_12_25,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(didUpdateAuthorizerStatusEmitTargetAndPayloadSchema)

export default didUpdateAuthorizerStatusEmitTargetAndPayloadSchema
