import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

const chatbotCallbacksSchema: SpruceSchemas.Mercury.v2020_12_25.ChatbotCallbacksSchema =
	{
		id: 'chatbotCallbacks',
		version: 'v2020_12_25',
		namespace: 'Mercury',
		name: '',
		fields: {
			/** . */
			placeholder: {
				type: 'id',
				isRequired: true,
				options: undefined,
			},
			/** . */
			useThisWhenever: {
				type: 'text',
				isRequired: true,
				options: undefined,
			},
		},
	}

SchemaRegistry.getInstance().trackSchema(chatbotCallbacksSchema)

export default chatbotCallbacksSchema
