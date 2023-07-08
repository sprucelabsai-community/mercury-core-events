import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

const registerPushTokenResponsePayloadSchema: SpruceSchemas.Mercury.v2020_12_25.RegisterPushTokenResponsePayloadSchema =
	{
		id: 'registerPushTokenResponsePayload',
		version: 'v2020_12_25',
		namespace: 'Mercury',
		name: '',
		fields: {},
	}

SchemaRegistry.getInstance().trackSchema(registerPushTokenResponsePayloadSchema)

export default registerPushTokenResponsePayloadSchema
