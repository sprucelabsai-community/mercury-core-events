import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import chatbotSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/chatbot.schema'

const registerChatBotsResponsePayloadSchema: SpruceSchemas.Mercury.v2020_12_25.RegisterChatBotsResponsePayloadSchema  = {
	id: 'registerChatBotsResponsePayload',
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

SchemaRegistry.getInstance().trackSchema(registerChatBotsResponsePayloadSchema)

export default registerChatBotsResponsePayloadSchema
