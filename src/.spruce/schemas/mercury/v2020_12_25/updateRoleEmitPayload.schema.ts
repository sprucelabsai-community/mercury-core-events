import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const updateRoleEmitPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.UpdateRoleEmitPayloadSchema  = {
	id: 'updateRoleEmitPayload',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** Name. */
	            'name': {
	                label: 'Name',
	                type: 'text',
	                options: undefined
	            },
	            /** Base. A best practices starting point for a role based on the generalized roles at a company. */
	            'base': {
	                label: 'Base',
	                type: 'select',
	                hint: 'A best practices starting point for a role based on the generalized roles at a company.',
	                options: {choices: [{"label":"Owner","value":"owner"},{"label":"Group manager","value":"groupManager"},{"label":"Manager","value":"manager"},{"label":"Teammate","value":"teammate"},{"label":"Anonymous","value":"anonymous"},{"label":"Logged in","value":"loggedIn"},{"label":"Guest","value":"guest"}],}
	            },
	            /** Description. */
	            'description': {
	                label: 'Description',
	                type: 'text',
	                options: undefined
	            },
	            /** . */
	            'dateDeleted': {
	                type: 'number',
	                options: undefined
	            },
	            /** . */
	            'organizationId': {
	                type: 'id',
	                options: undefined
	            },
	            /** Public. Should I let people that are not part of this organization this role? */
	            'isPublic': {
	                label: 'Public',
	                type: 'boolean',
	                hint: 'Should I let people that are not part of this organization this role?',
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(updateRoleEmitPayloadSchema)

export default updateRoleEmitPayloadSchema
