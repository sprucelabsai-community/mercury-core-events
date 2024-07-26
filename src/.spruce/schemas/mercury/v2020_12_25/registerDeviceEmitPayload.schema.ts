import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const registerDeviceEmitPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.RegisterDeviceEmitPayloadSchema  = {
	id: 'registerDeviceEmitPayload',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** . */
	            'macAddress': {
	                type: 'id',
	                isRequired: true,
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(registerDeviceEmitPayloadSchema)

export default registerDeviceEmitPayloadSchema
