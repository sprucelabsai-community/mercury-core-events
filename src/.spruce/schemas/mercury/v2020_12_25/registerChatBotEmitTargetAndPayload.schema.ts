import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import registerChatBotsPayloadSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/registerChatBotsPayload.schema'

const registerChatBotEmitTargetAndPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.RegisterChatBotEmitTargetAndPayloadSchema  = {
	id: 'registerChatBotEmitTargetAndPayload',
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
	            'payload': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: registerChatBotsPayloadSchema_v2020_12_25,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(registerChatBotEmitTargetAndPayloadSchema)

export default registerChatBotEmitTargetAndPayloadSchema
