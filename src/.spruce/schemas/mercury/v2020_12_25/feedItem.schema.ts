import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import choiceSchema_v2020_07_22 from '#spruce/schemas/spruce/v2020_07_22/choice.schema'
import linkSchema_v2020_07_22 from '#spruce/schemas/spruce/v2020_07_22/link.schema'

const feedItemSchema: SpruceSchemas.Mercury.v2020_12_25.FeedItemSchema  = {
	id: 'feedItem',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** . */
	            'id': {
	                type: 'id',
	                isRequired: true,
	                options: undefined
	            },
	            /** . */
	            'isMe': {
	                type: 'boolean',
	                options: undefined
	            },
	            /** . */
	            'message': {
	                type: 'text',
	                isRequired: true,
	                options: undefined
	            },
	            /** . */
	            'dateCreated': {
	                type: 'dateTime',
	                isRequired: true,
	                options: undefined
	            },
	            /** . */
	            'note': {
	                type: 'text',
	                options: undefined
	            },
	            /** . */
	            'isSprucebot': {
	                type: 'boolean',
	                options: undefined
	            },
	            /** . */
	            'source': {
	                type: 'raw',
	                options: {valueType: `Record<string, any>`,}
	            },
	            /** . */
	            'fromCasualName': {
	                type: 'text',
	                isRequired: true,
	                options: undefined
	            },
	            /** . */
	            'avatar': {
	                type: 'image',
	                options: {requiredSizes: ["*"],}
	            },
	            /** . */
	            'choices': {
	                type: 'schema',
	                isArray: true,
	                options: {schema: choiceSchema_v2020_07_22,}
	            },
	            /** . */
	            'links': {
	                type: 'schema',
	                isArray: true,
	                minArrayLength: 0,
	                options: {schema: linkSchema_v2020_07_22,}
	            },
	            /** . */
	            'toCasualName': {
	                type: 'text',
	                options: undefined
	            },
	            /** . */
	            'fromPersonId': {
	                type: 'id',
	                options: undefined
	            },
	            /** . */
	            'toPersonId': {
	                type: 'id',
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(feedItemSchema)

export default feedItemSchema
