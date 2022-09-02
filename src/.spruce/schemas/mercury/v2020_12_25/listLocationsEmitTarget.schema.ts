import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const listLocationsEmitTargetSchema: SpruceSchemas.Mercury.v2020_12_25.ListLocationsEmitTargetSchema  = {
	id: 'listLocationsEmitTarget',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** . */
	            'organizationId': {
	                type: 'id',
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(listLocationsEmitTargetSchema)

export default listLocationsEmitTargetSchema
