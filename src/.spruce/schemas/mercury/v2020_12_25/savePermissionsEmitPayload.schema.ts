import { SchemaRegistry } from '@sprucelabs/schema'
import savePermissionsPermissionSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/savePermissionsPermission.schema'
import { SpruceSchemas } from '../../schemas.types'

const savePermissionsEmitPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.SavePermissionsEmitPayloadSchema =
	{
		id: 'savePermissionsEmitPayload',
		version: 'v2020_12_25',
		namespace: 'Mercury',
		name: '',
		fields: {
			/** . */
			permissions: {
				type: 'schema',
				isRequired: true,
				isArray: true,
				minArrayLength: 1,
				options: { schema: savePermissionsPermissionSchema_v2020_12_25 },
			},
		},
	}

SchemaRegistry.getInstance().trackSchema(savePermissionsEmitPayloadSchema)

export default savePermissionsEmitPayloadSchema
