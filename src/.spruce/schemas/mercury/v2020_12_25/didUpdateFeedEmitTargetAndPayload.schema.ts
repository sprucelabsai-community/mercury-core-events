import { SchemaRegistry } from '@sprucelabs/schema'
import didUpdateFeedEmitPayloadSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/didUpdateFeedEmitPayload.schema'
import didUpdateFeedEmitTargetSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/didUpdateFeedEmitTarget.schema'
import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import { SpruceSchemas } from '../../schemas.types'

const didUpdateFeedEmitTargetAndPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.DidUpdateFeedEmitTargetAndPayloadSchema =
	{
		id: 'didUpdateFeedEmitTargetAndPayload',
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
			target: {
				type: 'schema',
				options: { schema: didUpdateFeedEmitTargetSchema_v2020_12_25 },
			},
			/** . */
			payload: {
				type: 'schema',
				isRequired: true,
				options: { schema: didUpdateFeedEmitPayloadSchema_v2020_12_25 },
			},
		},
	}

SchemaRegistry.getInstance().trackSchema(
	didUpdateFeedEmitTargetAndPayloadSchema
)

export default didUpdateFeedEmitTargetAndPayloadSchema
