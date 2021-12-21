import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import fullMessageChoicesSchema_v2020_07_22 from '#spruce/schemas/spruce/v2020_07_22/fullMessageChoices.schema'

const sendMessageMessagePayloadSchema: SpruceSchemas.Mercury.v2020_12_25.SendMessageMessagePayloadSchema  = {
	id: 'sendMessageMessagePayload',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** . */
	            'classification': {
	                type: 'select',
	                isRequired: true,
	                options: {choices: [{"value":"auth","label":"Auth"},{"value":"transactional","label":"transactional"},{"value":"promotional","label":"Promotional"},{"value":"incoming","label":"incoming"}],}
	            },
	            /** . */
	            'body': {
	                type: 'text',
	                isRequired: true,
	                options: undefined
	            },
	            /** . */
	            'context': {
	                type: 'raw',
	                isPrivate: true,
	                options: {valueType: `Record<string, any>`,}
	            },
	            /** . */
	            'topicId': {
	                type: 'id',
	                options: undefined
	            },
	            /** . */
	            'links': {
	                type: 'text',
	                isArray: true,
	                options: undefined
	            },
	            /** . */
	            'choices': {
	                type: 'schema',
	                isArray: true,
	                options: {schema: fullMessageChoicesSchema_v2020_07_22,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(sendMessageMessagePayloadSchema)

export default sendMessageMessagePayloadSchema
