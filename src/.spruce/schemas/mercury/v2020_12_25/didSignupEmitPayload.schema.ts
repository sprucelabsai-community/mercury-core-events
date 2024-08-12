import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import personWithMacSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/personWithMac.schema'

const didSignupEmitPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.DidSignupEmitPayloadSchema  = {
	id: 'didSignupEmitPayload',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** . */
	            'person': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: personWithMacSchema_v2020_12_25,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(didSignupEmitPayloadSchema)

export default didSignupEmitPayloadSchema
