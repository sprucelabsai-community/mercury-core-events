import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const listInstalledSkillsEmitPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.ListInstalledSkillsEmitPayloadSchema  = {
	id: 'listInstalledSkillsEmitPayload',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** . */
	            'shouldShowGlobalSkills': {
	                type: 'boolean',
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(listInstalledSkillsEmitPayloadSchema)

export default listInstalledSkillsEmitPayloadSchema
