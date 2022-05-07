import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const getFeedPredicateSchema: SpruceSchemas.Mercury.v2020_12_25.GetFeedPredicateSchema  = {
	id: 'getFeedPredicate',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** . */
	            'target': {
	                type: 'raw',
	                options: {valueType: `Record<string, any>`,}
	            },
	            /** . */
	            'source': {
	                type: 'raw',
	                options: {valueType: `Record<string, any>`,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(getFeedPredicateSchema)

export default getFeedPredicateSchema
