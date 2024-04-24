import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const deleteRoleEmitTargetSchema: SpruceSchemas.Mercury.v2020_12_25.DeleteRoleEmitTargetSchema  = {
	id: 'deleteRoleEmitTarget',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** . */
	            'roleId': {
	                type: 'id',
	                isRequired: true,
	                options: undefined
	            },
	            /** . */
	            'organizationId': {
	                type: 'id',
	                isRequired: true,
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(deleteRoleEmitTargetSchema)

export default deleteRoleEmitTargetSchema
