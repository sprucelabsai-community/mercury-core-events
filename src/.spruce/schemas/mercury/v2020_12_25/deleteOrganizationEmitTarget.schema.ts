import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const deleteOrganizationEmitTargetSchema: SpruceSchemas.Mercury.v2020_12_25.DeleteOrganizationEmitTargetSchema  = {
	id: 'deleteOrganizationEmitTarget',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** . */
	            'organizationId': {
	                type: 'id',
	                isRequired: true,
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(deleteOrganizationEmitTargetSchema)

export default deleteOrganizationEmitTargetSchema
