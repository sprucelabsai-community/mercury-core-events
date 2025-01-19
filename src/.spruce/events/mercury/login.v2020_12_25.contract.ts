import '#spruce/permissions/permissions.types'
import loginEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/loginEmitTargetAndPayload.schema'
import loginResponsePayloadSchema from '#spruce/schemas/mercury/v2020_12_25/loginResponsePayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'


const loginEventContract = buildEventContract({
    eventSignatures: {
        'login::v2020_12_25': {
            
            description: `Login using a phone and password`,
            
            
            
            emitPayloadSchema: loginEmitTargetAndPayloadSchema,
            responsePayloadSchema: loginResponsePayloadSchema,
            
            
        }
    }
})
export default loginEventContract

export type LoginEventContract = typeof loginEventContract