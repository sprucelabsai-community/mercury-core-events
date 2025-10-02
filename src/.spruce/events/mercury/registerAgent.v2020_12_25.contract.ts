import '#spruce/permissions/permissions.types'
import registerAgentEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/registerAgentEmitTargetAndPayload.schema'
import registerAgentResponsePayloadSchema from '#spruce/schemas/mercury/v2020_12_25/registerAgentResponsePayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'


const registerAgentEventContract = buildEventContract({
    eventSignatures: {
        'register-agent::v2020_12_25': {
            
            description: `Register a new ai agent. You can name it, give it a role, etc.`,
            
            
            
            emitPayloadSchema: registerAgentEmitTargetAndPayloadSchema,
            responsePayloadSchema: registerAgentResponsePayloadSchema,
            
            
        }
    }
})
export default registerAgentEventContract

export type RegisterAgentEventContract = typeof registerAgentEventContract