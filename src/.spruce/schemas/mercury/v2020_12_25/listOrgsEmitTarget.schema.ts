import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const listOrgsEmitTargetSchema: SpruceSchemas.Mercury.v2020_12_25.ListOrgsEmitTargetSchema  = {
	id: 'listOrgsEmitTarget',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** . */
	            'organizationIds': {
	                type: 'id',
	                isArray: true,
	                minArrayLength: 0,
	                options: undefined
	            },
	            /** . */
	            'personId': {
	                type: 'id',
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(listOrgsEmitTargetSchema)

export default listOrgsEmitTargetSchema
