import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const listSkillsSkillsResponsePayloadSchema: SpruceSchemas.Mercury.v2020_12_25.ListSkillsSkillsResponsePayloadSchema  = {
	id: 'listSkillsSkillsResponsePayload',
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
	            /** Public. */
	            'isPublic': {
	                label: 'Public',
	                type: 'boolean',
	                options: undefined
	            },
	            /** . */
	            'dateCreated': {
	                type: 'dateTime',
	                isRequired: true,
	                options: undefined
	            },
	            /** . */
	            'dateDeleted': {
	                type: 'dateTime',
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(listSkillsSkillsResponsePayloadSchema)

export default listSkillsSkillsResponsePayloadSchema
