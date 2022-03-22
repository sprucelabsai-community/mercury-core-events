import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import listPermissionContractsEmitTargetSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/listPermissionContractsEmitTarget.schema'

const listPermissionContractsEmitTargetAndPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.ListPermissionContractsEmitTargetAndPayloadSchema  = {
	id: 'listPermissionContractsEmitTargetAndPayload',
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
	                options: {schema: listPermissionContractsEmitTargetSchema_v2020_12_25,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(listPermissionContractsEmitTargetAndPayloadSchema)

export default listPermissionContractsEmitTargetAndPayloadSchema
