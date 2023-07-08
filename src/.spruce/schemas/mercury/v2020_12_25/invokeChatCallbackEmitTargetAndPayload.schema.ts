import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import invokeChatCallbackTargetSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/invokeChatCallbackTarget.schema'
import invokeChatCallbackPayloadSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/invokeChatCallbackPayload.schema'

const invokeChatCallbackEmitTargetAndPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.InvokeChatCallbackEmitTargetAndPayloadSchema  = {
	id: 'invokeChatCallbackEmitTargetAndPayload',
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
	                isRequired: true,
	                options: {schema: invokeChatCallbackTargetSchema_v2020_12_25,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: invokeChatCallbackPayloadSchema_v2020_12_25,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(invokeChatCallbackEmitTargetAndPayloadSchema)

export default invokeChatCallbackEmitTargetAndPayloadSchema
