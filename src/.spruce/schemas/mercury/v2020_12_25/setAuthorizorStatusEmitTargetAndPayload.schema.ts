import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import setAuthorizerStatusEmitTargetSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/setAuthorizerStatusEmitTarget.schema'
import setAuthorizerStatusEmitPayloadSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/setAuthorizerStatusEmitPayload.schema'

const setAuthorizorStatusEmitTargetAndPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.SetAuthorizorStatusEmitTargetAndPayloadSchema  = {
	id: 'setAuthorizorStatusEmitTargetAndPayload',
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
	                isRequired: true,
	                options: {schema: setAuthorizerStatusEmitTargetSchema_v2020_12_25,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: setAuthorizerStatusEmitPayloadSchema_v2020_12_25,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(setAuthorizorStatusEmitTargetAndPayloadSchema)

export default setAuthorizorStatusEmitTargetAndPayloadSchema
