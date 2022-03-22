import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import permissionContractSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/permissionContract.schema'
import listPermissionContractsResponsePayloadSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/listPermissionContractsResponsePayload.schema'

const listPermissionContractsResponsePayloadSchema: SpruceSchemas.Mercury.v2020_12_25.ListPermissionContractsResponsePayloadSchema  = {
	id: 'listPermissionContractsResponsePayload',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** . */
	            'id': {
	                type: 'id',
	                isRequired: true,
	                options: undefined
	            },
	            /** . */
	            'skillId': {
	                type: 'id',
	                options: undefined
	            },
	            /** . */
	            'contract': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: permissionContractSchema_v2020_12_25,}
	            },
	            /** . */
	            'permissionContracts': {
	                type: 'schema',
	                isRequired: true,
	                isArray: true,
	                minArrayLength: 0,
	                options: {schema: listPermissionContractsResponsePayloadSchema_v2020_12_25,}
	            },
	            /** . */
	            'count': {
	                type: 'number',
	                isRequired: true,
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(listPermissionContractsResponsePayloadSchema)

export default listPermissionContractsResponsePayloadSchema
