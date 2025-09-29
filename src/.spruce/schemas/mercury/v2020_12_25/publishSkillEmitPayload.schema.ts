import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const publishSkillEmitPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.PublishSkillEmitPayloadSchema  = {
	id: 'publishSkillEmitPayload',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** . */
	            'canBeInstalled': {
	                type: 'boolean',
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(publishSkillEmitPayloadSchema)

export default publishSkillEmitPayloadSchema
