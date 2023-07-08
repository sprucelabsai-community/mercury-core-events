import { SchemaRegistry } from '@sprucelabs/schema'
import savePermissionsEmitPayloadSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/savePermissionsEmitPayload.schema'
import savePermissionsEmitTargetSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/savePermissionsEmitTarget.schema'
import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import { SpruceSchemas } from '../../schemas.types'

const savePermissionsEmitTargetAndPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.SavePermissionsEmitTargetAndPayloadSchema =
	{
		id: 'savePermissionsEmitTargetAndPayload',
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
				options: { schema: savePermissionsEmitTargetSchema_v2020_12_25 },
			},
			/** . */
			payload: {
				type: 'schema',
				isRequired: true,
				options: { schema: savePermissionsEmitPayloadSchema_v2020_12_25 },
			},
		},
	}

SchemaRegistry.getInstance().trackSchema(
	savePermissionsEmitTargetAndPayloadSchema
)

export default savePermissionsEmitTargetAndPayloadSchema
