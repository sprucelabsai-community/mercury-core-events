import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const getAgentNameResponsePayloadSchema: SpruceSchemas.Mercury.v2020_12_25.GetAgentNameResponsePayloadSchema  = {
	id: 'getAgentNameResponsePayload',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** . */
	            'name': {
	                type: 'text',
	                isRequired: true,
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(getAgentNameResponsePayloadSchema)

export default getAgentNameResponsePayloadSchema
