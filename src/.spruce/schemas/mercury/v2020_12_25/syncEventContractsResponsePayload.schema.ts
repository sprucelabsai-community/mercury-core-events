import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const syncEventContractsResponsePayloadSchema: SpruceSchemas.Mercury.v2020_12_25.SyncEventContractsResponsePayloadSchema  = {
	id: 'syncEventContractsResponsePayload',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** Event names. */
	            'fqens': {
	                label: 'Event names',
	                type: 'text',
	                isRequired: true,
	                isArray: true,
	                minArrayLength: 0,
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(syncEventContractsResponsePayloadSchema)

export default syncEventContractsResponsePayloadSchema
