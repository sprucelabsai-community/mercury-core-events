import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

const registerPushTokenEmitPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.RegisterPushTokenEmitPayloadSchema =
	{
		id: 'registerPushTokenEmitPayload',
		version: 'v2020_12_25',
		namespace: 'Mercury',
		name: '',
		fields: {
			/** . */
			iosToken: {
				type: 'id',
				options: undefined,
			},
			/** . */
			androidToken: {
				type: 'id',
				options: undefined,
			},
		},
	}

SchemaRegistry.getInstance().trackSchema(registerPushTokenEmitPayloadSchema)

export default registerPushTokenEmitPayloadSchema
