import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const deleteLocationEmitTargetSchema: SpruceSchemas.Mercury.v2020_12_25.DeleteLocationEmitTargetSchema  = {
	id: 'deleteLocationEmitTarget',
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
	    }
}

SchemaRegistry.getInstance().trackSchema(deleteLocationEmitTargetSchema)

export default deleteLocationEmitTargetSchema
