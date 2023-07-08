import { SchemaRegistry } from '@sprucelabs/schema'
import createLocationEmitPayloadSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/createLocationEmitPayload.schema'
import createLocationEmitTargetSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/createLocationEmitTarget.schema'
import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import { SpruceSchemas } from '../../schemas.types'

const createLocationEmitTargetAndPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.CreateLocationEmitTargetAndPayloadSchema =
	{
		id: 'createLocationEmitTargetAndPayload',
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
				isRequired: true,
				options: { schema: createLocationEmitTargetSchema_v2020_12_25 },
			},
			/** . */
			payload: {
				type: 'schema',
				isRequired: true,
				options: { schema: createLocationEmitPayloadSchema_v2020_12_25 },
			},
		},
	}

SchemaRegistry.getInstance().trackSchema(
	createLocationEmitTargetAndPayloadSchema
)

export default createLocationEmitTargetAndPayloadSchema
