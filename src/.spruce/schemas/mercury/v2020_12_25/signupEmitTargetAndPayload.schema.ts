import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import signupEmitTargetSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/signupEmitTarget.schema'
import signupEmitPayloadSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/signupEmitPayload.schema'

const signupEmitTargetAndPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.SignupEmitTargetAndPayloadSchema  = {
	id: 'signupEmitTargetAndPayload',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** Source. */
	            'source': {
	                label: 'Source',
	                type: 'schema',
	                options: {schema: eventSourceSchema_v2021_09_13,}
	            },
	            /** . */
	            'target': {
	                type: 'schema',
	                options: {schema: signupEmitTargetSchema_v2020_12_25,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: signupEmitPayloadSchema_v2020_12_25,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(signupEmitTargetAndPayloadSchema)

export default signupEmitTargetAndPayloadSchema
