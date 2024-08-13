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
	                type: 'text',
	                options: undefined
	            },
	            /** . */
	            'username': {
	                type: 'text',
	                options: undefined
	            },
	            /** . */
	            'locationId': {
	                type: 'id',
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(loginEmitTargetSchema)

export default loginEmitTargetSchema
