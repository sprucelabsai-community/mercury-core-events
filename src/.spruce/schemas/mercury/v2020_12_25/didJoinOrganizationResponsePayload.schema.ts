import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import messagiingSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/messagiing.schema'

const didJoinOrganizationResponsePayloadSchema: SpruceSchemas.Mercury.v2020_12_25.DidJoinOrganizationResponsePayloadSchema  = {
	id: 'didJoinOrganizationResponsePayload',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** . */
	            'messaging': {
	                type: 'schema',
	                options: {schema: messagiingSchema_v2020_12_25,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(didJoinOrganizationResponsePayloadSchema)

export default didJoinOrganizationResponsePayloadSchema
