import '#spruce/permissions/permissions.types'
import didUpdateFeedEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/didUpdateFeedEmitTargetAndPayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'


const didUpdateFeedEventContract = buildEventContract({
    eventSignatures: {
        'did-update-feed::v2020_12_25': {
            
            
            listenPermissions: {"contractId":"feed-contract","permissionIdsAny":["can-subscribe-to-feed-updates"]},
            emitPayloadSchema: didUpdateFeedEmitTargetAndPayloadSchema,
            
            
            
        }
    }
})
export default didUpdateFeedEventContract

export type DidUpdateFeedEventContract = typeof didUpdateFeedEventContract