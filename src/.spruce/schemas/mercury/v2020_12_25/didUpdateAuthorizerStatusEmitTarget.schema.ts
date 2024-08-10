import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const didUpdateAuthorizerStatusEmitTargetSchema: SpruceSchemas.Mercury.v2020_12_25.DidUpdateAuthorizerStatusEmitTargetSchema  = {
	id: 'didUpdateAuthorizerStatusEmitTarget',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** . */
	            'organizationId': {
	                type: 'id',
	                options: undefined
	            },
	            /** . */
	            'locationId': {
	                type: 'id',
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(didUpdateAuthorizerStatusEmitTargetSchema)

export default didUpdateAuthorizerStatusEmitTargetSchema
