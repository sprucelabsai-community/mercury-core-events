import '#spruce/permissions/permissions.types'
import registerDeviceEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/registerDeviceEmitTargetAndPayload.schema'
import registerDeviceResponsePayloadSchema from '#spruce/schemas/mercury/v2020_12_25/registerDeviceResponsePayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'


const registerDeviceEventContract = buildEventContract({
    eventSignatures: {
        'register-device::v2020_12_25': {
            
            
            
            emitPayloadSchema: registerDeviceEmitTargetAndPayloadSchema,
            responsePayloadSchema: registerDeviceResponsePayloadSchema,
            
            
        }
    }
})
export default registerDeviceEventContract

export type RegisterDeviceEventContract = typeof registerDeviceEventContract