import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import upsertPermissionContractEmitTargetSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/upsertPermissionContractEmitTarget.schema'
import upsertPermissionContractsEmitPayloadSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/upsertPermissionContractsEmitPayload.schema'

const upsertPermissionContractEmitTargetAndPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.UpsertPermissionContractEmitTargetAndPayloadSchema  = {
	id: 'upsertPermissionContractEmitTargetAndPayload',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** Source. */
	            'source': {
	                label: 'Source',
	                type: 'schema',
	                options: {schema: eventSourceSchema_v2021_09_13,}
	            },
	            /** . */
	            'target': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: upsertPermissionContractEmitTargetSchema_v2020_12_25,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: upsertPermissionContractsEmitPayloadSchema_v2020_12_25,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(upsertPermissionContractEmitTargetAndPayloadSchema)

export default upsertPermissionContractEmitTargetAndPayloadSchema
