import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import permissionContractSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/permissionContract.schema'

const getPermissionContractResponsePayloadSchema: SpruceSchemas.Mercury.v2020_12_25.GetPermissionContractResponsePayloadSchema  = {
	id: 'getPermissionContractResponsePayload',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** . */
	            'permissionContract': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: permissionContractSchema_v2020_12_25,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(getPermissionContractResponsePayloadSchema)

export default getPermissionContractResponsePayloadSchema
