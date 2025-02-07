import '#spruce/permissions/permissions.types'
import authenticateEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/authenticateEmitTargetAndPayload.schema'
import authenticateResponsePayloadSchema from '#spruce/schemas/mercury/v2020_12_25/authenticateResponsePayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'


const authenticateEventContract = buildEventContract({
    eventSignatures: {
        'authenticate::v2020_12_25': {
            
            description: `Authenticate as a person or as a skill.`,
            
            
            
            emitPayloadSchema: authenticateEmitTargetAndPayloadSchema,
            responsePayloadSchema: authenticateResponsePayloadSchema,
            
            
        }
    }
})
export default authenticateEventContract

export type AuthenticateEventContract = typeof authenticateEventContract