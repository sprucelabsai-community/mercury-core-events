import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const resetPasswordEmitTargetSchema: SpruceSchemas.Mercury.v2020_12_25.ResetPasswordEmitTargetSchema  = {
	id: 'resetPasswordEmitTarget',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** . */
	            'phone': {
	                type: 'phone',
	                isRequired: true,
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(resetPasswordEmitTargetSchema)

export default resetPasswordEmitTargetSchema
