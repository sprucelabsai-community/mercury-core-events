import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import chatbotSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/chatbot.schema'

const registerChatBotsPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.RegisterChatBotsPayloadSchema  = {
	id: 'registerChatBotsPayload',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** . */
	            'bots': {
	                type: 'schema',
	                isRequired: true,
	                isArray: true,
	                minArrayLength: 0,
	                options: {schema: chatbotSchema_v2020_12_25,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(registerChatBotsPayloadSchema)

export default registerChatBotsPayloadSchema
