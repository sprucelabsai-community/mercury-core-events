import { SchemaRegistry } from '@sprucelabs/schema'
import getFeedEmitPayloadSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/getFeedEmitPayload.schema'
import getFeedEmitTargetSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/getFeedEmitTarget.schema'
import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import { SpruceSchemas } from '../../schemas.types'

const getFeedEmitTargetAndPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.GetFeedEmitTargetAndPayloadSchema =
	{
		id: 'getFeedEmitTargetAndPayload',
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
				options: { schema: getFeedEmitTargetSchema_v2020_12_25 },
			},
			/** . */
			payload: {
				type: 'schema',
				isRequired: true,
				options: { schema: getFeedEmitPayloadSchema_v2020_12_25 },
			},
		},
	}

SchemaRegistry.getInstance().trackSchema(getFeedEmitTargetAndPayloadSchema)

export default getFeedEmitTargetAndPayloadSchema
