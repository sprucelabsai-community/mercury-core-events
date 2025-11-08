import '#spruce/permissions/permissions.types'
import voteForFeatureEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/voteForFeatureEmitTargetAndPayload.schema'
import voteForFeatureResponsePayloadSchema from '#spruce/schemas/mercury/v2020_12_25/voteForFeatureResponsePayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'


const voteForFeatureEventContract = buildEventContract({
    eventSignatures: {
        'vote-for-feature::v2020_12_25': {
            
            description: "Vote for a feature and let the Sprucebot team know your thoughts!",
            
            
            
            
            emitPayloadSchema: voteForFeatureEmitTargetAndPayloadSchema,
            responsePayloadSchema: voteForFeatureResponsePayloadSchema,
            
            
        }
    }
})
export default voteForFeatureEventContract

export type VoteForFeatureEventContract = typeof voteForFeatureEventContract
