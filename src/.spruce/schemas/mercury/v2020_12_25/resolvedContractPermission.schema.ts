import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const resolvedContractPermissionSchema: SpruceSchemas.Mercury.v2020_12_25.ResolvedContractPermissionSchema  = {
	id: 'resolvedContractPermission',
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
	            'can': {
	                type: 'boolean',
	                isRequired: true,
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(resolvedContractPermissionSchema)

export default resolvedContractPermissionSchema
