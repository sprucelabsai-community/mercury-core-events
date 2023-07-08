import { SchemaRegistry } from '@sprucelabs/schema'
import updateOrgEmitPayloadSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/updateOrgEmitPayload.schema'
import updateOrgEmitTargetSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/updateOrgEmitTarget.schema'
import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import { SpruceSchemas } from '../../schemas.types'

const updateOrganizationEmitTargetAndPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.UpdateOrganizationEmitTargetAndPayloadSchema =
	{
		id: 'updateOrganizationEmitTargetAndPayload',
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
				options: { schema: updateOrgEmitTargetSchema_v2020_12_25 },
			},
			/** . */
			payload: {
				type: 'schema',
				options: { schema: updateOrgEmitPayloadSchema_v2020_12_25 },
			},
		},
	}

SchemaRegistry.getInstance().trackSchema(
	updateOrganizationEmitTargetAndPayloadSchema
)

export default updateOrganizationEmitTargetAndPayloadSchema
