import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import listInstalledSkillsSkillsResponsePayloadSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/listInstalledSkillsSkillsResponsePayload.schema'

const listInstalledSkillsResponsePayloadSchema: SpruceSchemas.Mercury.v2020_12_25.ListInstalledSkillsResponsePayloadSchema  = {
	id: 'listInstalledSkillsResponsePayload',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** . */
	            'skills': {
	                type: 'schema',
	                isRequired: true,
	                isArray: true,
	                minArrayLength: 0,
	                options: {schema: listInstalledSkillsSkillsResponsePayloadSchema_v2020_12_25,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(listInstalledSkillsResponsePayloadSchema)

export default listInstalledSkillsResponsePayloadSchema
