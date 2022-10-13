import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import registeredListenerSchema_v2022_10_12 from '#spruce/schemas/mercury/v2022_10_12/registeredListener.schema'

const registerListenersEmitPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.RegisterListenersEmitPayloadSchema  = {
	id: 'registerListenersEmitPayload',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** . */
	            'events': {
	                type: 'schema',
	                isRequired: true,
	                isArray: true,
	                options: {schema: registeredListenerSchema_v2022_10_12,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(registerListenersEmitPayloadSchema)

export default registerListenersEmitPayloadSchema
