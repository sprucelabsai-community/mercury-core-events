import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const loginEmitPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.LoginEmitPayloadSchema  = {
	id: 'loginEmitPayload',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** . */
	            'password': {
	                type: 'text',
	                isRequired: true,
	                options: undefined
	            },
	            /** . */
	            'macAddress': {
	                type: 'id',
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(loginEmitPayloadSchema)

export default loginEmitPayloadSchema
