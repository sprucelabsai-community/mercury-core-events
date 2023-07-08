import { SchemaRegistry } from '@sprucelabs/schema'
import getRoleEmitTargetSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/getRoleEmitTarget.schema'
import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import { SpruceSchemas } from '../../schemas.types'

const getRoleEmitTargetAndPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.GetRoleEmitTargetAndPayloadSchema =
	{
		id: 'getRoleEmitTargetAndPayload',
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
				options: { schema: getRoleEmitTargetSchema_v2020_12_25 },
			},
		},
	}

SchemaRegistry.getInstance().trackSchema(getRoleEmitTargetAndPayloadSchema)

export default getRoleEmitTargetAndPayloadSchema
