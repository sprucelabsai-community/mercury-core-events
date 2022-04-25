import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const messagiingSchema: SpruceSchemas.Mercury.v2020_12_25.MessagiingSchema  = {
	id: 'messagiing',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** . */
	            'nextINeedYouTo': {
	                type: 'text',
	                options: undefined
	            },
	            /** . */
	            'youShouldKnowThat': {
	                type: 'text',
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

SchemaRegistry.getInstance().trackSchema(messagiingSchema)

export default messagiingSchema
