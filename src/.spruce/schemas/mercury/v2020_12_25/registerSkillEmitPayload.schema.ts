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
	            /** Published. Does this skill show up in the marketplace and can other devs use it as a dependency? */
	            'isPublished': {
	                label: 'Published',
	                type: 'boolean',
	                hint: 'Does this skill show up in the marketplace and can other devs use it as a dependency?',
	                options: undefined
	            },
	            /** Global. Does this skill require needing to be installed anywhere. */
	            'canBeInstalled': {
	                label: 'Global',
	                type: 'boolean',
	                hint: 'Does this skill require needing to be installed anywhere.',
	                defaultValue: true,
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
