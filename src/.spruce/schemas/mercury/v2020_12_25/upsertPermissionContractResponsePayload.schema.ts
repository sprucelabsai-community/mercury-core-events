import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import permissionContractSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/permissionContract.schema'

const upsertPermissionContractResponsePayloadSchema: SpruceSchemas.Mercury.v2020_12_25.UpsertPermissionContractResponsePayloadSchema  = {
	id: 'upsertPermissionContractResponsePayload',
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

SchemaRegistry.getInstance().trackSchema(upsertPermissionContractResponsePayloadSchema)

export default upsertPermissionContractResponsePayloadSchema
