import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

const registeredListenerSchema: SpruceSchemas.Mercury.v2020_12_25.RegisteredListenerSchema =
	{
		id: 'registeredListener',
		version: 'v2020_12_25',
		namespace: 'Mercury',
		name: 'Registered listener',
		fields: {
			/** . */
			eventName: {
				type: 'text',
				isRequired: true,
				options: undefined,
			},
			/** . */
			isGlobal: {
				type: 'boolean',
				options: undefined,
			},
		},
	}

SchemaRegistry.getInstance().trackSchema(registeredListenerSchema)

export default registeredListenerSchema
