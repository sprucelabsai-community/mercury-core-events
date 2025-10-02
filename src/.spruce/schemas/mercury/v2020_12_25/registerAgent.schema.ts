import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const registerAgentSchema: SpruceSchemas.Mercury.v2020_12_25.RegisterAgentSchema  = {
	id: 'registerAgent',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** Name. What is the name of your new AI Agent? */
	            'name': {
	                label: 'Name',
	                type: 'text',
	                isRequired: true,
	                hint: 'What is the name of your new AI Agent?',
	                options: undefined
	            },
	            /** System Prompt. How should your AI Agent behave? This is injected into every conversation to guide its responses. */
	            'systemPrompt': {
	                label: 'System Prompt',
	                type: 'text',
	                isRequired: true,
	                hint: 'How should your AI Agent behave? This is injected into every conversation to guide its responses.',
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(registerAgentSchema)

export default registerAgentSchema
