import '#spruce/permissions/permissions.types'
import requestPinEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/requestPinEmitTargetAndPayload.schema'
import requestPinResponsePayloadSchema from '#spruce/schemas/mercury/v2020_12_25/requestPinResponsePayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'


const requestPinEventContract = buildEventContract({
    eventSignatures: {
        'request-pin::v2020_12_25': {
            
            description: "Trying to login! I can send you a pin if you need one!",
            
            
            
            
            emitPayloadSchema: requestPinEmitTargetAndPayloadSchema,
            responsePayloadSchema: requestPinResponsePayloadSchema,
            
            
        }
    }
})
export default requestPinEventContract

export type RequestPinEventContract = typeof requestPinEventContract
