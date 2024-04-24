import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const securityQuestionSchema: SpruceSchemas.Mercury.v2020_12_25.SecurityQuestionSchema  = {
	id: 'securityQuestion',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** . */
	            'question': {
	                type: 'text',
	                isRequired: true,
	                options: undefined
	            },
	            /** . */
	            'answer': {
	                type: 'text',
	                isRequired: true,
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(securityQuestionSchema)

export default securityQuestionSchema
