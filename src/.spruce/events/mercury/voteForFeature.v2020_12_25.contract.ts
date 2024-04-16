import '#spruce/permissions/permissions.types'
import { buildEventContract } from '@sprucelabs/mercury-types'
import voteForFeatureEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/voteForFeatureEmitTargetAndPayload.schema'
import voteForFeatureResponsePayloadSchema from '#spruce/schemas/mercury/v2020_12_25/voteForFeatureResponsePayload.schema'

const voteForFeatureEventContract = buildEventContract({
    eventSignatures: {
        'vote-for-feature::v2020_12_25': {
            emitPayloadSchema: voteForFeatureEmitTargetAndPayloadSchema,
            responsePayloadSchema: voteForFeatureResponsePayloadSchema,
        },
    },
})
export default voteForFeatureEventContract

export type VoteForFeatureEventContract = typeof voteForFeatureEventContract
