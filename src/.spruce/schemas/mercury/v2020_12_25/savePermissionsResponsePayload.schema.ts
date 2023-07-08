import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const savePermissionsResponsePayloadSchema: SpruceSchemas.Mercury.v2020_12_25.SavePermissionsResponsePayloadSchema  = {
	id: 'savePermissionsResponsePayload',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** . */
	            'success': {
	                type: 'boolean',
	                isRequired: true,
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(savePermissionsResponsePayloadSchema)

export default savePermissionsResponsePayloadSchema
