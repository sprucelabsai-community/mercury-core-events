import { SchemaRegistry } from '@sprucelabs/schema'
import resolvedContractSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/resolvedContract.schema'
import { SpruceSchemas } from '../../schemas.types'

const getResolvedPermissionsContractRespondPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.GetResolvedPermissionsContractRespondPayloadSchema =
	{
		id: 'getResolvedPermissionsContractRespondPayload',
		version: 'v2020_12_25',
		namespace: 'Mercury',
		name: '',
		fields: {
			/** . */
			resolvedContract: {
				type: 'schema',
				isRequired: true,
				options: { schema: resolvedContractSchema_v2020_12_25 },
			},
		},
	}

SchemaRegistry.getInstance().trackSchema(
	getResolvedPermissionsContractRespondPayloadSchema
)

export default getResolvedPermissionsContractRespondPayloadSchema
