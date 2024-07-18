import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const setAuthorizerStatusEmitTargetSchema: SpruceSchemas.Mercury.v2020_12_25.SetAuthorizerStatusEmitTargetSchema  = {
	id: 'setAuthorizerStatusEmitTarget',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** . */
	            'locationId': {
	                type: 'id',
	                isRequired: true,
	                options: undefined
	            },
	            /** . */
	            'personId': {
	                type: 'id',
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(setAuthorizerStatusEmitTargetSchema)

export default setAuthorizerStatusEmitTargetSchema
