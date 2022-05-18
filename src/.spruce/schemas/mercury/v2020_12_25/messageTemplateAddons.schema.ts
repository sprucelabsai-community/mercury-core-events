import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const messageTemplateAddonsSchema: SpruceSchemas.Mercury.v2020_12_25.MessageTemplateAddonsSchema  = {
	id: 'messageTemplateAddons',
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

SchemaRegistry.getInstance().trackSchema(messageTemplateAddonsSchema)

export default messageTemplateAddonsSchema
