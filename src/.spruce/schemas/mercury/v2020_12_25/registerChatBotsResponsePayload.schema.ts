import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const registerChatBotsResponsePayloadSchema: SpruceSchemas.Mercury.v2020_12_25.RegisterChatBotsResponsePayloadSchema  = {
	id: 'registerChatBotsResponsePayload',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** . */
	            'totalRegisteredBots': {
	                type: 'number',
	                isRequired: true,
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(registerChatBotsResponsePayloadSchema)

export default registerChatBotsResponsePayloadSchema
