import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const updateOrgEmitPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.UpdateOrgEmitPayloadSchema  = {
	id: 'updateOrgEmitPayload',
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
	            /** Address. */
	            'address': {
	                label: 'Address',
	                type: 'address',
	                options: undefined
	            },
	            /** Public. Is this organization viewable by guests? */
	            'isPublic': {
	                label: 'Public',
	                type: 'boolean',
	                hint: 'Is this organization viewable by guests?',
	                defaultValue: false,
	                options: undefined
	            },
	            /** . */
	            'dateCreated': {
	                type: 'dateTime',
	                options: undefined
	            },
	            /** . */
	            'dateDeleted': {
	                type: 'dateTime',
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(updateOrgEmitPayloadSchema)

export default updateOrgEmitPayloadSchema
