import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import linkSchema_v2020_07_22 from '#spruce/schemas/spruce/v2020_07_22/link.schema'
import choiceSchema_v2020_07_22 from '#spruce/schemas/spruce/v2020_07_22/choice.schema'

const sendMessageMessagePayloadSchema: SpruceSchemas.Mercury.v2020_12_25.SendMessageMessagePayloadSchema  = {
	id: 'sendMessageMessagePayload',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** . An arbitrary id that can be used to track this message when being sent and not yet assigned an Id. */
	            'trackingId': {
	                type: 'id',
	                hint: 'An arbitrary id that can be used to track this message when being sent and not yet assigned an Id.',
	                options: undefined
	            },
	            /** . If this message is a reply to another message, this is the id of that original message. */
	            'inReplyToMessageId': {
	                type: 'id',
	                hint: 'If this message is a reply to another message, this is the id of that original message.',
	                options: undefined
	            },
	            /** . */
	            'classification': {
	                type: 'select',
	                isRequired: true,
	                options: {choices: [{"value":"auth","label":"Auth"},{"value":"transactional","label":"transactional"},{"value":"promotional","label":"Promotional"},{"value":"incoming","label":"incoming"}],}
	            },
	            /** . */
	            'subject': {
	                type: 'text',
	                options: undefined
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
	                type: 'schema',
	                isArray: true,
	                minArrayLength: 0,
	                options: {schema: linkSchema_v2020_07_22,}
	            },
	            /** . */
	            'choices': {
	                type: 'schema',
	                isArray: true,
	                options: {schema: choiceSchema_v2020_07_22,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(sendMessageMessagePayloadSchema)

export default sendMessageMessagePayloadSchema
