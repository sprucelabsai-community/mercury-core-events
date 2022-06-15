import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const registerSkillEmitPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.RegisterSkillEmitPayloadSchema  = {
	id: 'registerSkillEmitPayload',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
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
	            /** Public. */
	            'isPublic': {
	                label: 'Public',
	                type: 'boolean',
	                options: undefined
	            },
	            /** Namespace. */
	            'slug': {
	                label: 'Namespace',
	                type: 'text',
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(registerSkillEmitPayloadSchema)

export default registerSkillEmitPayloadSchema
