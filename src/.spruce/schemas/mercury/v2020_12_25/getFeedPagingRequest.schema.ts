import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const getFeedPagingRequestSchema: SpruceSchemas.Mercury.v2020_12_25.GetFeedPagingRequestSchema  = {
	id: 'getFeedPagingRequest',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** . */
	            'next': {
	                type: 'id',
	                options: undefined
	            },
	            /** . */
	            'previous': {
	                type: 'id',
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(getFeedPagingRequestSchema)

export default getFeedPagingRequestSchema
