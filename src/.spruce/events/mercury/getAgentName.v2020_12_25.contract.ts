import '#spruce/permissions/permissions.types'
import getAgentNameEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/getAgentNameEmitTargetAndPayload.schema'
import getAgentNameResponsePayloadSchema from '#spruce/schemas/mercury/v2020_12_25/getAgentNameResponsePayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'


const getAgentNameEventContract = buildEventContract({
    eventSignatures: {
        'get-agent-name::v2020_12_25': {
            
            description: "Register a new ai agent. You can name it, give it a role, etc.",
            
            
            
            
            emitPayloadSchema: getAgentNameEmitTargetAndPayloadSchema,
            responsePayloadSchema: getAgentNameResponsePayloadSchema,
            
            
        }
    }
})
export default getAgentNameEventContract

export type GetAgentNameEventContract = typeof getAgentNameEventContract
