import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import getLocationTargetSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/getLocationTarget.schema'

const getLocationEmitTargetAndPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.GetLocationEmitTargetAndPayloadSchema  = {
	id: 'getLocationEmitTargetAndPayload',
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
	                options: {schema: getLocationTargetSchema_v2020_12_25,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(getLocationEmitTargetAndPayloadSchema)

export default getLocationEmitTargetAndPayloadSchema
