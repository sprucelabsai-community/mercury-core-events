import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const removeRoleEmitTargetSchema: SpruceSchemas.Mercury.v2020_12_25.RemoveRoleEmitTargetSchema  = {
	id: 'removeRoleEmitTarget',
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

SchemaRegistry.getInstance().trackSchema(removeRoleEmitTargetSchema)

export default removeRoleEmitTargetSchema
