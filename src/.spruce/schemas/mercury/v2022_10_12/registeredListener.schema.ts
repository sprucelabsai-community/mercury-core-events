import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const registeredListenerSchema: SpruceSchemas.Mercury.v2022_10_12.RegisteredListenerSchema  = {
	id: 'registeredListener',
	version: 'v2022_10_12',
	namespace: 'Mercury',
	name: 'Registered listener',
	    fields: {
	            /** . */
	            'eventName': {
	                type: 'text',
	                isRequired: true,
	                options: undefined
	            },
	            /** . */
	            'isGlobal': {
	                type: 'boolean',
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(registeredListenerSchema)

export default registeredListenerSchema
