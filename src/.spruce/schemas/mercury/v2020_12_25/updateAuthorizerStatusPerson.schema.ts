import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const updateAuthorizerStatusPersonSchema: SpruceSchemas.Mercury.v2020_12_25.UpdateAuthorizerStatusPersonSchema  = {
	id: 'updateAuthorizerStatusPerson',
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
	            'casualName': {
	                type: 'text',
	                isRequired: true,
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(updateAuthorizerStatusPersonSchema)

export default updateAuthorizerStatusPersonSchema
