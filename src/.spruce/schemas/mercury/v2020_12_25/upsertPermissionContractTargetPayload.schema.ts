import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const upsertPermissionContractTargetPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.UpsertPermissionContractTargetPayloadSchema  = {
	id: 'upsertPermissionContractTargetPayload',
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
	            /** . */
	            'permissionContractId': {
	                type: 'id',
	                isRequired: true,
	                options: undefined
	            },
	            /** . */
	            'roleId': {
	                type: 'id',
	                isRequired: true,
	                options: undefined
	            },
	            /** . */
	            'skillId': {
	                type: 'id',
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(upsertPermissionContractTargetPayloadSchema)

export default upsertPermissionContractTargetPayloadSchema
