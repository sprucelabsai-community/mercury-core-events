import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import listSchemaTargetSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/listSchemaTarget.schema'

const listRoleSchema: SpruceSchemas.Mercury.v2020_12_25.ListRoleSchema  = {
	id: 'listRole',
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
	            /** Base. Used to determine the default permissions when this role is created and the fallback for when a permission is not set on this role. */
	            'base': {
	                label: 'Base',
	                type: 'select',
	                hint: 'Used to determine the default permissions when this role is created and the fallback for when a permission is not set on this role.',
	                options: {choices: [{"label":"Owner","value":"owner"},{"label":"Group manager","value":"groupManager"},{"label":"Manager","value":"manager"},{"label":"Teammate","value":"teammate"},{"label":"Anonymous","value":"anonymous"},{"label":"Logged in","value":"loggedIn"},{"label":"Guest","value":"guest"}],}
	            },
	            /** Description. */
	            'description': {
	                label: 'Description',
	                type: 'text',
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
	            /** . */
	            'isMeta': {
	                type: 'boolean',
	                options: undefined
	            },
	            /** . */
	            'target': {
	                type: 'schema',
	                options: {schema: listSchemaTargetSchema_v2020_12_25,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(listRoleSchema)

export default listRoleSchema
