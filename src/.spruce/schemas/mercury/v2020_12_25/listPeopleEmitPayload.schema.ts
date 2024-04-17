import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const listPeopleEmitPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.ListPeopleEmitPayloadSchema  = {
	id: 'listPeopleEmitPayload',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** . */
	            'personIds': {
	                type: 'id',
	                isArray: true,
	                options: undefined
	            },
	            /** . */
	            'roleBases': {
	                type: 'text',
	                isArray: true,
	                options: undefined
	            },
	            /** . */
	            'roleIds': {
	                type: 'id',
	                isArray: true,
	                options: undefined
	            },
	            /** . */
	            'shouldIncludePrivateFields': {
	                type: 'boolean',
	                options: undefined
	            },
	            /** . */
	            'updatedAfter': {
	                type: 'dateTime',
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(listPeopleEmitPayloadSchema)

export default listPeopleEmitPayloadSchema
