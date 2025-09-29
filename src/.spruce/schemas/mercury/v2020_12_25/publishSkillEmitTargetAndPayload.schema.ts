import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import publishSkillEmitTargetSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/publishSkillEmitTarget.schema'
import publishSkillEmitPayloadSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/publishSkillEmitPayload.schema'

const publishSkillEmitTargetAndPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.PublishSkillEmitTargetAndPayloadSchema  = {
	id: 'publishSkillEmitTargetAndPayload',
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
	                options: {schema: publishSkillEmitTargetSchema_v2020_12_25,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                options: {schema: publishSkillEmitPayloadSchema_v2020_12_25,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(publishSkillEmitTargetAndPayloadSchema)

export default publishSkillEmitTargetAndPayloadSchema
