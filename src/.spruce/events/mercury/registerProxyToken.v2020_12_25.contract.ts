import '#spruce/permissions/permissions.types'
import registerProxyTokenEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/registerProxyTokenEmitTargetAndPayload.schema'
import registerProxyTokenResponsePayloadSchema from '#spruce/schemas/mercury/v2020_12_25/registerProxyTokenResponsePayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'


const registerProxyTokenEventContract = buildEventContract({
    eventSignatures: {
        'register-proxy-token::v2020_12_25': {
            
            description: `Set a token to let others make requests on your behalf. Can only do 1 at a time for now.`,
            
            
            
            emitPayloadSchema: registerProxyTokenEmitTargetAndPayloadSchema,
            responsePayloadSchema: registerProxyTokenResponsePayloadSchema,
            
            
        }
    }
})
export default registerProxyTokenEventContract

export type RegisterProxyTokenEventContract = typeof registerProxyTokenEventContract