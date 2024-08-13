import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const confirmPinEmitTargetSchema: SpruceSchemas.Mercury.v2020_12_25.ConfirmPinEmitTargetSchema  = {
	id: 'confirmPinEmitTarget',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** . */
	            'locationId': {
	                type: 'id',
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(confirmPinEmitTargetSchema)

export default confirmPinEmitTargetSchema
