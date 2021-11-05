import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const voteForFeatureEmitPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.VoteForFeatureEmitPayloadSchema  = {
	id: 'voteForFeatureEmitPayload',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** . */
	            'featureKey': {
	                type: 'id',
	                isRequired: true,
	                options: undefined
	            },
	            /** . */
	            'skillNamespace': {
	                type: 'id',
	                isRequired: true,
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(voteForFeatureEmitPayloadSchema)

export default voteForFeatureEmitPayloadSchema
