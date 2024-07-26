import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const registerDeviceResponsePayloadSchema: SpruceSchemas.Mercury.v2020_12_25.RegisterDeviceResponsePayloadSchema  = {
	id: 'registerDeviceResponsePayload',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	    }
}

SchemaRegistry.getInstance().trackSchema(registerDeviceResponsePayloadSchema)

export default registerDeviceResponsePayloadSchema
