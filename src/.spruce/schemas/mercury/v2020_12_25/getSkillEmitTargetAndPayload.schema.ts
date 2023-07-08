import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import getSkillEmitTargetSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/getSkillEmitTarget.schema'
import getSkillEmitPayloadSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/getSkillEmitPayload.schema'

const getSkillEmitTargetAndPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.GetSkillEmitTargetAndPayloadSchema  = {
	id: 'getSkillEmitTargetAndPayload',
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
	                options: {schema: getSkillEmitTargetSchema_v2020_12_25,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                options: {schema: getSkillEmitPayloadSchema_v2020_12_25,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(getSkillEmitTargetAndPayloadSchema)

export default getSkillEmitTargetAndPayloadSchema
