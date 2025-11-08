import '#spruce/permissions/permissions.types'
import getAgentEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/getAgentEmitTargetAndPayload.schema'
import getAgentResponsePayloadSchema from '#spruce/schemas/mercury/v2020_12_25/getAgentResponsePayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'


const getAgentEventContract = buildEventContract({
    eventSignatures: {
        'get-agent::v2020_12_25': {
            
            description: "Register a new ai agent. You can name it, give it a role, etc.",
            
            
            
            
            emitPayloadSchema: getAgentEmitTargetAndPayloadSchema,
            responsePayloadSchema: getAgentResponsePayloadSchema,
            
            
        }
    }
})
export default getAgentEventContract

export type GetAgentEventContract = typeof getAgentEventContract
