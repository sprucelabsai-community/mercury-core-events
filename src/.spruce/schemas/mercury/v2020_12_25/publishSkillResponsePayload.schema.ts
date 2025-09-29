import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import publishedSkillSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/publishedSkill.schema'

const publishSkillResponsePayloadSchema: SpruceSchemas.Mercury.v2020_12_25.PublishSkillResponsePayloadSchema  = {
	id: 'publishSkillResponsePayload',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** . */
	            'skill': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: publishedSkillSchema_v2020_12_25,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(publishSkillResponsePayloadSchema)

export default publishSkillResponsePayloadSchema
