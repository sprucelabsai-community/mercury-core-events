import { SchemaRegistry } from '@sprucelabs/schema'
import createOrgEmitPayloadSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/createOrgEmitPayload.schema'
import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import { SpruceSchemas } from '../../schemas.types'

const createOrganizationEmitTargetAndPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.CreateOrganizationEmitTargetAndPayloadSchema =
	{
		id: 'createOrganizationEmitTargetAndPayload',
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
			payload: {
				type: 'schema',
				isRequired: true,
				options: { schema: createOrgEmitPayloadSchema_v2020_12_25 },
			},
		},
	}

SchemaRegistry.getInstance().trackSchema(
	createOrganizationEmitTargetAndPayloadSchema
)

export default createOrganizationEmitTargetAndPayloadSchema
