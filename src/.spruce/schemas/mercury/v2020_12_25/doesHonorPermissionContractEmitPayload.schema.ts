import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const doesHonorPermissionContractEmitPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.DoesHonorPermissionContractEmitPayloadSchema  = {
	id: 'doesHonorPermissionContractEmitPayload',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	importsWhenRemote: ['import * as MercuryTypes from \'@sprucelabs/mercury-types\'',],
	    fields: {
	            /** . */
	            'id': {
	                type: 'raw',
	                isRequired: true,
	                options: {valueType: `MercuryTypes.PermissionContractId`,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(doesHonorPermissionContractEmitPayloadSchema)

export default doesHonorPermissionContractEmitPayloadSchema
