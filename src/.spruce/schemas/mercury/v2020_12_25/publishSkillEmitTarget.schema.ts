import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const publishSkillEmitTargetSchema: SpruceSchemas.Mercury.v2020_12_25.PublishSkillEmitTargetSchema  = {
	id: 'publishSkillEmitTarget',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** . */
	            'skillId': {
	                type: 'id',
	                isRequired: true,
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(publishSkillEmitTargetSchema)

export default publishSkillEmitTargetSchema
