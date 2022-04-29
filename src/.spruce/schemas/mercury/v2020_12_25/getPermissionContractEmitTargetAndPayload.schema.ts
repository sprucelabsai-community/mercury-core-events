import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import getPermissionContractEmitTargetSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/getPermissionContractEmitTarget.schema'

const getPermissionContractEmitTargetAndPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.GetPermissionContractEmitTargetAndPayloadSchema  = {
	id: 'getPermissionContractEmitTargetAndPayload',
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
	                options: {schema: getPermissionContractEmitTargetSchema_v2020_12_25,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(getPermissionContractEmitTargetAndPayloadSchema)

export default getPermissionContractEmitTargetAndPayloadSchema
