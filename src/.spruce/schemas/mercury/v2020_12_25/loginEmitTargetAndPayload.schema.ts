import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import loginEmitTargetSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/loginEmitTarget.schema'
import loginEmitPayloadSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/loginEmitPayload.schema'

const loginEmitTargetAndPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.LoginEmitTargetAndPayloadSchema  = {
	id: 'loginEmitTargetAndPayload',
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
	                options: {schema: loginEmitTargetSchema_v2020_12_25,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: loginEmitPayloadSchema_v2020_12_25,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(loginEmitTargetAndPayloadSchema)

export default loginEmitTargetAndPayloadSchema
