import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const sendMessageTargetSchema: SpruceSchemas.Mercury.v2020_12_25.SendMessageTargetSchema  = {
	id: 'sendMessageTarget',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** . */
	            'locationId': {
	                type: 'id',
	                options: undefined
	            },
	            /** . */
	            'personId': {
	                type: 'id',
	                options: undefined
	            },
	            /** . */
	            'organizationId': {
	                type: 'id',
	                options: undefined
	            },
	            /** . */
	            'skillId': {
	                type: 'id',
	                options: undefined
	            },
	            /** . */
	            'roleId': {
	                type: 'id',
	                options: undefined
	            },
	            /** . */
	            'phone': {
	                type: 'phone',
	                options: undefined
	            },
	            /** . */
	            'email': {
	                type: 'email',
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(sendMessageTargetSchema)

export default sendMessageTargetSchema
