import '#spruce/permissions/permissions.types'
import sendMessageEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/sendMessageEmitTargetAndPayload.schema'
import sendMessageResponsePayloadSchema from '#spruce/schemas/mercury/v2020_12_25/sendMessageResponsePayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'


const sendMessageEventContract = buildEventContract({
    eventSignatures: {
        'send-message::v2020_12_25': {
            
            description: "Send a message to a person, place, or thing.",
            
            
            
            
            emitPayloadSchema: sendMessageEmitTargetAndPayloadSchema,
            responsePayloadSchema: sendMessageResponsePayloadSchema,
            
            
        }
    }
})
export default sendMessageEventContract

export type SendMessageEventContract = typeof sendMessageEventContract
