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
	            /** . The person to set the status for. If empty, looks at logged in person's status. */
	            'personId': {
	                type: 'id',
	                hint: 'The person to set the status for. If empty, looks at logged in person\'s status.',
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(setAuthorizerStatusEmitTargetSchema)

export default setAuthorizerStatusEmitTargetSchema
