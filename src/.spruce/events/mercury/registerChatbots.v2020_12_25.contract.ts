import '#spruce/permissions/permissions.types'
import registerChatbotsEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/registerChatbotsEmitTargetAndPayload.schema'
import registerChatbotsResponsePayloadSchema from '#spruce/schemas/mercury/v2020_12_25/registerChatbotsResponsePayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'


const registerChatbotsEventContract = buildEventContract({
    eventSignatures: {
        'register-chatbots::v2020_12_25': {
            isGlobal: true,
            
            listenPermissions: {"contractId":"chatbot-contract","permissionIdsAny":["can-register-chatbots"]},
            emitPayloadSchema: registerChatbotsEmitTargetAndPayloadSchema,
            responsePayloadSchema: registerChatbotsResponsePayloadSchema,
            
            
        }
    }
})
export default registerChatbotsEventContract

export type RegisterChatbotsEventContract = typeof registerChatbotsEventContract