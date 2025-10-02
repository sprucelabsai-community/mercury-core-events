import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const getAgentEmitTargetSchema: SpruceSchemas.Mercury.v2020_12_25.GetAgentEmitTargetSchema  = {
	id: 'getAgentEmitTarget',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** . Coming soon... right now only platform agents are supported. */
	            'organizationId': {
	                type: 'id',
	                hint: 'Coming soon... right now only platform agents are supported.',
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(getAgentEmitTargetSchema)

export default getAgentEmitTargetSchema
