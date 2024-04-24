import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const listSecurityQuestionsEmitTargetSchema: SpruceSchemas.Mercury.v2020_12_25.ListSecurityQuestionsEmitTargetSchema  = {
	id: 'listSecurityQuestionsEmitTarget',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** . */
	            'phone': {
	                type: 'phone',
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(listSecurityQuestionsEmitTargetSchema)

export default listSecurityQuestionsEmitTargetSchema
