import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import chatBotCallbacksSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/chatBotCallbacks.schema'

const chatbotSchema: SpruceSchemas.Mercury.v2020_12_25.ChatbotSchema  = {
	id: 'chatbot',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** . */
	            'yourJobIfYouChooseToAcceptItIs': {
	                type: 'text',
	                isRequired: true,
	                options: undefined
	            },
	            /** . */
	            'weAreDoneWhen': {
	                type: 'text',
	                isRequired: true,
	                options: undefined
	            },
	            /** . */
	            'pleaseKeepInMindThat': {
	                type: 'text',
	                isArray: true,
	                options: undefined
	            },
	            /** . */
	            'stateSchema': {
	                type: 'raw',
	                options: {valueType: `SpruceSchema.Schema`,}
	            },
	            /** . */
	            'callbacks': {
	                type: 'schema',
	                isArray: true,
	                minArrayLength: 0,
	                options: {schema: chatBotCallbacksSchema_v2020_12_25,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(chatbotSchema)

export default chatbotSchema
