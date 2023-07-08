import { SchemaRegistry } from '@sprucelabs/schema'
import chatbotCallbacksSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/chatbotCallbacks.schema'
import { SpruceSchemas } from '../../schemas.types'

const chatbotSchema: SpruceSchemas.Mercury.v2020_12_25.ChatbotSchema = {
	id: 'chatbot',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	fields: {
		/** . */
		title: {
			type: 'text',
			isRequired: true,
			options: undefined,
		},
		/** . */
		yourJobIfYouChooseToAcceptItIs: {
			type: 'text',
			isRequired: true,
			options: undefined,
		},
		/** . */
		weAreDoneWhen: {
			type: 'text',
			isRequired: true,
			options: undefined,
		},
		/** . */
		pleaseKeepInMindThat: {
			type: 'text',
			isArray: true,
			options: undefined,
		},
		/** . */
		stateSchema: {
			type: 'raw',
			options: { valueType: `SpruceSchema.Schema` },
		},
		/** . */
		model: {
			type: 'id',
			options: undefined,
		},
		/** . */
		promptTemplate: {
			type: 'text',
			options: undefined,
		},
		/** . */
		callbacks: {
			type: 'schema',
			isArray: true,
			minArrayLength: 0,
			options: { schema: chatbotCallbacksSchema_v2020_12_25 },
		},
	},
}

SchemaRegistry.getInstance().trackSchema(chatbotSchema)

export default chatbotSchema
