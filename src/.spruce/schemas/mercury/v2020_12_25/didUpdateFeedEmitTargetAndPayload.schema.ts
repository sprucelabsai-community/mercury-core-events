import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import eventTargetSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventTarget.schema'

const didUpdateFeedEmitTargetAndPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.DidUpdateFeedEmitTargetAndPayloadSchema  = {
	id: 'didUpdateFeedEmitTargetAndPayload',
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
	                options: {schema: eventTargetSchema_v2021_09_13,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(didUpdateFeedEmitTargetAndPayloadSchema)

export default didUpdateFeedEmitTargetAndPayloadSchema
