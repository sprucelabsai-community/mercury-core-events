import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const voteForFeatureResponsePayloadSchema: SpruceSchemas.Mercury.v2020_12_25.VoteForFeatureResponsePayloadSchema  = {
	id: 'voteForFeatureResponsePayload',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** . */
	            'totalVotes': {
	                type: 'number',
	                isRequired: true,
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(voteForFeatureResponsePayloadSchema)

export default voteForFeatureResponsePayloadSchema
