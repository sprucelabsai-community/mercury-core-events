import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import fullPermissionContractSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/fullPermissionContract.schema'

const syncPermissionContractsResponsePayloadSchema: SpruceSchemas.Mercury.v2020_12_25.SyncPermissionContractsResponsePayloadSchema  = {
	id: 'syncPermissionContractsResponsePayload',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** . */
	            'contractRecords': {
	                type: 'schema',
	                isRequired: true,
	                isArray: true,
	                minArrayLength: 0,
	                options: {schema: fullPermissionContractSchema_v2020_12_25,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(syncPermissionContractsResponsePayloadSchema)

export default syncPermissionContractsResponsePayloadSchema
