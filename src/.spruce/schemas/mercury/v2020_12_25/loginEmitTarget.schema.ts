import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const loginEmitTargetSchema: SpruceSchemas.Mercury.v2020_12_25.LoginEmitTargetSchema  = {
	id: 'loginEmitTarget',
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

SchemaRegistry.getInstance().trackSchema(loginEmitTargetSchema)

export default loginEmitTargetSchema
