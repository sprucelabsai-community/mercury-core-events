import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const chatBotCallbacksSchema: SpruceSchemas.Mercury.v2020_12_25.ChatBotCallbacksSchema  = {
	id: 'chatBotCallbacks',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** . */
	            'placeholder': {
	                type: 'id',
	                isRequired: true,
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(chatBotCallbacksSchema)

export default chatBotCallbacksSchema
