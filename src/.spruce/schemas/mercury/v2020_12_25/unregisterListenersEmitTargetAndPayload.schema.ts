import { SchemaRegistry } from '@sprucelabs/schema'
import unregisterListenersEmitPayloadSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/unregisterListenersEmitPayload.schema'
import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import { SpruceSchemas } from '../../schemas.types'

const unregisterListenersEmitTargetAndPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.UnregisterListenersEmitTargetAndPayloadSchema =
	{
		id: 'unregisterListenersEmitTargetAndPayload',
		version: 'v2020_12_25',
		namespace: 'Mercury',
		name: '',
		fields: {
			/** Source. */
			source: {
				label: 'Source',
				type: 'schema',
				options: { schema: eventSourceSchema_v2021_09_13 },
			},
			/** . */
			payload: {
				type: 'schema',
				options: { schema: unregisterListenersEmitPayloadSchema_v2020_12_25 },
			},
		},
	}

SchemaRegistry.getInstance().trackSchema(
	unregisterListenersEmitTargetAndPayloadSchema
)

export default unregisterListenersEmitTargetAndPayloadSchema
