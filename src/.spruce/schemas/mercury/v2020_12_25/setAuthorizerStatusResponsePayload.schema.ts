import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const setAuthorizerStatusResponsePayloadSchema: SpruceSchemas.Mercury.v2020_12_25.SetAuthorizerStatusResponsePayloadSchema  = {
	id: 'setAuthorizerStatusResponsePayload',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	    }
}

SchemaRegistry.getInstance().trackSchema(setAuthorizerStatusResponsePayloadSchema)

export default setAuthorizerStatusResponsePayloadSchema
