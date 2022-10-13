import didMessageEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/didMessageEmitTargetAndPayload.schema'
import didMessageResponsePayloadSchema from '#spruce/schemas/mercury/v2020_12_25/didMessageResponsePayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'


const didMessageEventContract = buildEventContract({
    eventSignatures: {
        'did-message::v2020_12_25': {
            
            emitPayloadSchema: didMessageEmitTargetAndPayloadSchema,
            responsePayloadSchema: didMessageResponsePayloadSchema,
            
            
        }
    }
})
export default didMessageEventContract

export type DidMessageEventContract = typeof didMessageEventContract