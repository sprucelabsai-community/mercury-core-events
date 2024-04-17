import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import permissionContractSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/permissionContract.schema'

const listPermissionContractsPermissionContractsSchema: SpruceSchemas.Mercury.v2020_12_25.ListPermissionContractsPermissionContractsSchema  = {
	id: 'listPermissionContractsPermissionContracts',
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
	    }
}

SchemaRegistry.getInstance().trackSchema(listPermissionContractsPermissionContractsSchema)

export default listPermissionContractsPermissionContractsSchema
