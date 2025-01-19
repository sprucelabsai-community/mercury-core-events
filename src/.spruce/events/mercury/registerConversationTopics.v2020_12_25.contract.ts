import '#spruce/permissions/permissions.types'
import registerConversationTopicsEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/registerConversationTopicsEmitTargetAndPayload.schema'
import registerConversationTopicsResponsePayloadSchema from '#spruce/schemas/mercury/v2020_12_25/registerConversationTopicsResponsePayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'


const registerConversationTopicsEventContract = buildEventContract({
    eventSignatures: {
        'register-conversation-topics::v2020_12_25': {
            
            description: `Tell Mercury the topics you wanna talk about.`,
            
            
            
            emitPayloadSchema: registerConversationTopicsEmitTargetAndPayloadSchema,
            responsePayloadSchema: registerConversationTopicsResponsePayloadSchema,
            
            
        }
    }
})
export default registerConversationTopicsEventContract

export type RegisterConversationTopicsEventContract = typeof registerConversationTopicsEventContract