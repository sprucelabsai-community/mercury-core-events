import { SchemaRegistry } from '@sprucelabs/schema'
import deleteRoleEmitTargetSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/deleteRoleEmitTarget.schema'
import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import { SpruceSchemas } from '../../schemas.types'

const deleteRoleEmitTargetAndPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.DeleteRoleEmitTargetAndPayloadSchema =
	{
		id: 'deleteRoleEmitTargetAndPayload',
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
				options: { schema: deleteRoleEmitTargetSchema_v2020_12_25 },
			},
		},
	}

SchemaRegistry.getInstance().trackSchema(deleteRoleEmitTargetAndPayloadSchema)

export default deleteRoleEmitTargetAndPayloadSchema
