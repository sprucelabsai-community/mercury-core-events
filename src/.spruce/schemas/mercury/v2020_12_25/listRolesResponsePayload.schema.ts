import { SchemaRegistry } from '@sprucelabs/schema'
import listRoleSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/listRole.schema'
import { SpruceSchemas } from '../../schemas.types'

const listRolesResponsePayloadSchema: SpruceSchemas.Mercury.v2020_12_25.ListRolesResponsePayloadSchema =
	{
		id: 'listRolesResponsePayload',
		version: 'v2020_12_25',
		namespace: 'Mercury',
		name: '',
		fields: {
			/** . */
			roles: {
				type: 'schema',
				isRequired: true,
				isArray: true,
				minArrayLength: 0,
				options: { schema: listRoleSchema_v2020_12_25 },
			},
		},
	}

SchemaRegistry.getInstance().trackSchema(listRolesResponsePayloadSchema)

export default listRolesResponsePayloadSchema
