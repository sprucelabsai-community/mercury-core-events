import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import didJoinOrganizationEmitTargetSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/didJoinOrganizationEmitTarget.schema'
import didJoinOrganizationEmitPayloadSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/didJoinOrganizationEmitPayload.schema'

const didJoinOrganizationEmitTargetAndPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.DidJoinOrganizationEmitTargetAndPayloadSchema  = {
	id: 'didJoinOrganizationEmitTargetAndPayload',
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
	                options: {schema: didJoinOrganizationEmitTargetSchema_v2020_12_25,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: didJoinOrganizationEmitPayloadSchema_v2020_12_25,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(didJoinOrganizationEmitTargetAndPayloadSchema)

export default didJoinOrganizationEmitTargetAndPayloadSchema
