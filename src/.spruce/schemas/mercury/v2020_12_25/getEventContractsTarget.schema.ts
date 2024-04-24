import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const getEventContractsTargetSchema: SpruceSchemas.Mercury.v2020_12_25.GetEventContractsTargetSchema  = {
	id: 'getEventContractsTarget',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** . */
	            'namespaces': {
	                type: 'id',
	                isArray: true,
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(getEventContractsTargetSchema)

export default getEventContractsTargetSchema
