import { SchemaRegistry } from '@sprucelabs/schema'
import registeredListenerSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/registeredListener.schema'
import { SpruceSchemas } from '../../schemas.types'

const registerListenersEmitPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.RegisterListenersEmitPayloadSchema =
	{
		id: 'registerListenersEmitPayload',
		version: 'v2020_12_25',
		namespace: 'Mercury',
		name: '',
		fields: {
			/** . */
			events: {
				type: 'schema',
				isRequired: true,
				isArray: true,
				options: { schema: registeredListenerSchema_v2020_12_25 },
			},
			/** . */
			fullyQualifiedEventNames: {
				type: 'text',
				isArray: true,
				options: undefined,
			},
		},
	}

SchemaRegistry.getInstance().trackSchema(registerListenersEmitPayloadSchema)

export default registerListenersEmitPayloadSchema
