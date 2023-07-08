import { SchemaRegistry } from '@sprucelabs/schema'
import updateRoleEmitPayloadSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/updateRoleEmitPayload.schema'
import updateRoleEmitTargetSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/updateRoleEmitTarget.schema'
import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import { SpruceSchemas } from '../../schemas.types'

const updateRoleEmitTargetAndPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.UpdateRoleEmitTargetAndPayloadSchema =
	{
		id: 'updateRoleEmitTargetAndPayload',
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
				options: { schema: updateRoleEmitTargetSchema_v2020_12_25 },
			},
			/** . */
			payload: {
				type: 'schema',
				options: { schema: updateRoleEmitPayloadSchema_v2020_12_25 },
			},
		},
	}

SchemaRegistry.getInstance().trackSchema(updateRoleEmitTargetAndPayloadSchema)

export default updateRoleEmitTargetAndPayloadSchema
