import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import syncPermissionContractsTargetPayloadSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/syncPermissionContractsTargetPayload.schema'
import syncPermissionContractsEmitPayloadSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/syncPermissionContractsEmitPayload.schema'

const syncPermissionContractsEmitTargetAndPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.SyncPermissionContractsEmitTargetAndPayloadSchema  = {
	id: 'syncPermissionContractsEmitTargetAndPayload',
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
	                options: {schema: syncPermissionContractsTargetPayloadSchema_v2021_09_13,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: syncPermissionContractsEmitPayloadSchema_v2020_12_25,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(syncPermissionContractsEmitTargetAndPayloadSchema)

export default syncPermissionContractsEmitTargetAndPayloadSchema
