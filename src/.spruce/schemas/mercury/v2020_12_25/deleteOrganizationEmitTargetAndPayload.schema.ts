import { SchemaRegistry } from '@sprucelabs/schema'
import deleteOrganizationEmitTargetSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/deleteOrganizationEmitTarget.schema'
import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import { SpruceSchemas } from '../../schemas.types'

const deleteOrganizationEmitTargetAndPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.DeleteOrganizationEmitTargetAndPayloadSchema =
	{
		id: 'deleteOrganizationEmitTargetAndPayload',
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
				options: { schema: deleteOrganizationEmitTargetSchema_v2020_12_25 },
			},
		},
	}

SchemaRegistry.getInstance().trackSchema(
	deleteOrganizationEmitTargetAndPayloadSchema
)

export default deleteOrganizationEmitTargetAndPayloadSchema
