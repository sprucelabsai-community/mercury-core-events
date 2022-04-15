import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const getPermissionContractTargetPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.GetPermissionContractTargetPayloadSchema  = {
	id: 'getPermissionContractTargetPayload',
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
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(getPermissionContractTargetPayloadSchema)

export default getPermissionContractTargetPayloadSchema
