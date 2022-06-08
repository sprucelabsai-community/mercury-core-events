import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const didLeaveOrganizationResponsePayloadSchema: SpruceSchemas.Mercury.v2020_12_25.DidLeaveOrganizationResponsePayloadSchema  = {
	id: 'didLeaveOrganizationResponsePayload',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	    }
}

SchemaRegistry.getInstance().trackSchema(didLeaveOrganizationResponsePayloadSchema)

export default didLeaveOrganizationResponsePayloadSchema
