import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const eventPagingResponseSchema: SpruceSchemas.Mercury.v2020_12_25.EventPagingResponseSchema  = {
	id: 'eventPagingResponse',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** . */
	            'cursorId': {
	                type: 'id',
	                isRequired: true,
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(eventPagingResponseSchema)

export default eventPagingResponseSchema
