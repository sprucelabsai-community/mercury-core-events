import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const listInstalledSkillsSkillsResponsePayloadSchema: SpruceSchemas.Mercury.v2020_12_25.ListInstalledSkillsSkillsResponsePayloadSchema  = {
	id: 'listInstalledSkillsSkillsResponsePayload',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** Id. */
	            'id': {
	                label: 'Id',
	                type: 'id',
	                isRequired: true,
	                options: undefined
	            },
	            /** Name. */
	            'name': {
	                label: 'Name',
	                type: 'text',
	                isRequired: true,
	                options: undefined
	            },
	            /** Description. */
	            'description': {
	                label: 'Description',
	                type: 'text',
	                options: undefined
	            },
	            /** Namespace. */
	            'slug': {
	                label: 'Namespace',
	                type: 'text',
	                isRequired: true,
	                options: undefined
	            },
	            /** . */
	            'dateCreated': {
	                type: 'number',
	                isRequired: true,
	                options: undefined
	            },
	            /** . */
	            'dateDeleted': {
	                type: 'number',
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(listInstalledSkillsSkillsResponsePayloadSchema)

export default listInstalledSkillsSkillsResponsePayloadSchema
