import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const signupEmitTargetSchema: SpruceSchemas.Mercury.v2020_12_25.SignupEmitTargetSchema  = {
	id: 'signupEmitTarget',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** . */
	            'locationId': {
	                type: 'id',
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(signupEmitTargetSchema)

export default signupEmitTargetSchema
