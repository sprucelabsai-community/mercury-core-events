import '#spruce/permissions/permissions.types'
import { buildEventContract } from '@sprucelabs/mercury-types'
import getFeedEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/getFeedEmitTargetAndPayload.schema'
import getFeedResponsePayloadSchema from '#spruce/schemas/mercury/v2020_12_25/getFeedResponsePayload.schema'

const getFeedEventContract = buildEventContract({
    eventSignatures: {
        'get-feed::v2020_12_25': {
            emitPayloadSchema: getFeedEmitTargetAndPayloadSchema,
            responsePayloadSchema: getFeedResponsePayloadSchema,
        },
    },
})
export default getFeedEventContract

export type GetFeedEventContract = typeof getFeedEventContract
