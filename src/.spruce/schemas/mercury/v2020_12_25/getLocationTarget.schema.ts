import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const getLocationTargetSchema: SpruceSchemas.Mercury.v2020_12_25.GetLocationTargetSchema  = {
	id: 'getLocationTarget',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** . */
	            'locationId': {
	                type: 'id',
	                isRequired: true,
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(getLocationTargetSchema)

export default getLocationTargetSchema
