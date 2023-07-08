import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import statusFlagsSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/statusFlags.schema'

const savePermissionsPermissionSchema: SpruceSchemas.Mercury.v2020_12_25.SavePermissionsPermissionSchema  = {
	id: 'savePermissionsPermission',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** id. Hyphen separated id for this permission, e.g. can-unlock-doors */
	            'id': {
	                label: 'id',
	                type: 'text',
	                isRequired: true,
	                hint: 'Hyphen separated id for this permission, e.g. can-unlock-doors',
	                options: undefined
	            },
	            /** . */
	            'can': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: statusFlagsSchema_v2020_12_25,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(savePermissionsPermissionSchema)

export default savePermissionsPermissionSchema
