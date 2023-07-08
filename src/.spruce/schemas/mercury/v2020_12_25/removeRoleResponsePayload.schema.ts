import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

const removeRoleResponsePayloadSchema: SpruceSchemas.Mercury.v2020_12_25.RemoveRoleResponsePayloadSchema =
	{
		id: 'removeRoleResponsePayload',
		version: 'v2020_12_25',
		namespace: 'Mercury',
		name: '',
		fields: {},
	}

SchemaRegistry.getInstance().trackSchema(removeRoleResponsePayloadSchema)

export default removeRoleResponsePayloadSchema
