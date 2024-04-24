import '#spruce/permissions/permissions.types'
import signupEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/signupEmitTargetAndPayload.schema'
import signupResponsePayloadSchema from '#spruce/schemas/mercury/v2020_12_25/signupResponsePayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'


const signupEventContract = buildEventContract({
    eventSignatures: {
        'signup::v2020_12_25': {
            
            
            
            emitPayloadSchema: signupEmitTargetAndPayloadSchema,
            responsePayloadSchema: signupResponsePayloadSchema,
            
            
        }
    }
})
export default signupEventContract

export type SignupEventContract = typeof signupEventContract