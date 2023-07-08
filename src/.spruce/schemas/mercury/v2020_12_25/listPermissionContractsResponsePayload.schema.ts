import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import listPermissionContractsPermissionContractsSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/listPermissionContractsPermissionContracts.schema'

const listPermissionContractsResponsePayloadSchema: SpruceSchemas.Mercury.v2020_12_25.ListPermissionContractsResponsePayloadSchema  = {
	id: 'listPermissionContractsResponsePayload',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** . */
	            'permissionContracts': {
	                type: 'schema',
	                isRequired: true,
	                isArray: true,
	                minArrayLength: 0,
	                options: {schema: listPermissionContractsPermissionContractsSchema_v2020_12_25,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(listPermissionContractsResponsePayloadSchema)

export default listPermissionContractsResponsePayloadSchema
