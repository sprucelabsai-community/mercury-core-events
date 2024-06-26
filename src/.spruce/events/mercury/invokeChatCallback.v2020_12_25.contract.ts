import '#spruce/permissions/permissions.types'
import invokeChatCallbackEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/invokeChatCallbackEmitTargetAndPayload.schema'
import invokeChatCallbackResponsePayloadSchema from '#spruce/schemas/mercury/v2020_12_25/invokeChatCallbackResponsePayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'


const invokeChatCallbackEventContract = buildEventContract({
    eventSignatures: {
        'invoke-chat-callback::v2020_12_25': {
            
            
            listenPermissions: {"contractId":"chatbot-contract","permissionIdsAny":["can-register-chatbots"]},
            emitPayloadSchema: invokeChatCallbackEmitTargetAndPayloadSchema,
            responsePayloadSchema: invokeChatCallbackResponsePayloadSchema,
            
            
        }
    }
})
export default invokeChatCallbackEventContract

export type InvokeChatCallbackEventContract = typeof invokeChatCallbackEventContract