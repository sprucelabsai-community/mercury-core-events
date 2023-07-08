import { SchemaRegistry } from '@sprucelabs/schema'
import getResolvedPermissionsContractEmitPayloadSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/getResolvedPermissionsContractEmitPayload.schema'
import getResolvedPermissionsContractEmitTargetSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/getResolvedPermissionsContractEmitTarget.schema'
import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import { SpruceSchemas } from '../../schemas.types'

const getResolvedPermissionsContractEmitTargetAndPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.GetResolvedPermissionsContractEmitTargetAndPayloadSchema =
	{
		id: 'getResolvedPermissionsContractEmitTargetAndPayload',
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
				options: {
					schema: getResolvedPermissionsContractEmitTargetSchema_v2020_12_25,
				},
			},
			/** . */
			payload: {
				type: 'schema',
				isRequired: true,
				options: {
					schema: getResolvedPermissionsContractEmitPayloadSchema_v2020_12_25,
				},
			},
		},
	}

SchemaRegistry.getInstance().trackSchema(
	getResolvedPermissionsContractEmitTargetAndPayloadSchema
)

export default getResolvedPermissionsContractEmitTargetAndPayloadSchema
