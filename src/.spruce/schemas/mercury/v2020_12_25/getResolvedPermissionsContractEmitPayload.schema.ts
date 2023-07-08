import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const getResolvedPermissionsContractEmitPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.GetResolvedPermissionsContractEmitPayloadSchema  = {
	id: 'getResolvedPermissionsContractEmitPayload',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** . */
	            'contractId': {
	                type: 'id',
	                isRequired: true,
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(getResolvedPermissionsContractEmitPayloadSchema)

export default getResolvedPermissionsContractEmitPayloadSchema
