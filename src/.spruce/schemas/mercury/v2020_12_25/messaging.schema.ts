import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const messagingSchema: SpruceSchemas.Mercury.v2020_12_25.MessagingSchema  = {
	id: 'messaging',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** . */
	            'nextINeedYouTo': {
	                type: 'text',
	                isArray: true,
	                options: undefined
	            },
	            /** . */
	            'youShouldKnowThat': {
	                type: 'text',
	                isArray: true,
	                options: undefined
	            },
	            /** . */
	            'links': {
	                type: 'text',
	                isArray: true,
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(messagingSchema)

export default messagingSchema
