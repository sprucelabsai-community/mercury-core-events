import '#spruce/permissions/permissions.types'
import getConversationTopicsEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/getConversationTopicsEmitTargetAndPayload.schema'
import getConversationTopicsResponsePayloadSchema from '#spruce/schemas/mercury/v2020_12_25/getConversationTopicsResponsePayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'


const getConversationTopicsEventContract = buildEventContract({
    eventSignatures: {
        'get-conversation-topics::v2020_12_25': {
            
            description: `The topics you've said you want to talk about.`,
            
            
            
            emitPayloadSchema: getConversationTopicsEmitTargetAndPayloadSchema,
            responsePayloadSchema: getConversationTopicsResponsePayloadSchema,
            
            
        }
    }
})
export default getConversationTopicsEventContract

export type GetConversationTopicsEventContract = typeof getConversationTopicsEventContract