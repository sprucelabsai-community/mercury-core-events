import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const registerEventsResponsePayloadSchema: SpruceSchemas.Mercury.v2020_12_25.RegisterEventsResponsePayloadSchema  = {
	id: 'registerEventsResponsePayload',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** Fully qualified event names. */
	            'fqens': {
	                label: 'Fully qualified event names',
	                type: 'text',
	                isRequired: true,
	                isArray: true,
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(registerEventsResponsePayloadSchema)

export default registerEventsResponsePayloadSchema
