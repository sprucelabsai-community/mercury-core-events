import '#spruce/permissions/permissions.types'
import registerProxyTokenEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/registerProxyTokenEmitTargetAndPayload.schema'
import registerProxyTokenResponsePayloadSchema from '#spruce/schemas/mercury/v2020_12_25/registerProxyTokenResponsePayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'


const registerProxyTokenEventContract = buildEventContract({
    eventSignatures: {
        'register-proxy-token::v2020_12_25': {
            
            
            
            emitPayloadSchema: registerProxyTokenEmitTargetAndPayloadSchema,
            responsePayloadSchema: registerProxyTokenResponsePayloadSchema,
            
            
        }
    }
})
export default registerProxyTokenEventContract

export type RegisterProxyTokenEventContract = typeof registerProxyTokenEventContract