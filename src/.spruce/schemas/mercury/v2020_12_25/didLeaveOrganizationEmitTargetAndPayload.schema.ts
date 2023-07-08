import { SchemaRegistry } from '@sprucelabs/schema'
import didLeaveOrganizationEmitPayloadSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/didLeaveOrganizationEmitPayload.schema'
import didLeaveOrganizationEmitTargetSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/didLeaveOrganizationEmitTarget.schema'
import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import { SpruceSchemas } from '../../schemas.types'

const didLeaveOrganizationEmitTargetAndPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.DidLeaveOrganizationEmitTargetAndPayloadSchema =
	{
		id: 'didLeaveOrganizationEmitTargetAndPayload',
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
				options: { schema: didLeaveOrganizationEmitTargetSchema_v2020_12_25 },
			},
			/** . */
			payload: {
				type: 'schema',
				isRequired: true,
				options: { schema: didLeaveOrganizationEmitPayloadSchema_v2020_12_25 },
			},
		},
	}

SchemaRegistry.getInstance().trackSchema(
	didLeaveOrganizationEmitTargetAndPayloadSchema
)

export default didLeaveOrganizationEmitTargetAndPayloadSchema
