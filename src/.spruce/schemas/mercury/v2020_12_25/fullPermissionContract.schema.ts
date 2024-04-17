import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventTargetSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventTarget.schema'
import permissionContractSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/permissionContract.schema'

const fullPermissionContractSchema: SpruceSchemas.Mercury.v2020_12_25.FullPermissionContractSchema  = {
	id: 'fullPermissionContract',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** . */
	            'id': {
	                type: 'id',
	                isRequired: true,
	                options: undefined
	            },
	            /** . */
	            'skillId': {
	                type: 'id',
	                options: undefined
	            },
	            /** . */
	            'target': {
	                type: 'schema',
	                options: {schema: eventTargetSchema_v2021_09_13,}
	            },
	            /** . */
	            'contract': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: permissionContractSchema_v2020_12_25,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(fullPermissionContractSchema)

export default fullPermissionContractSchema
