import '#spruce/permissions/permissions.types'
import registerListenersEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/registerListenersEmitTargetAndPayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'


const registerListenersEventContract = buildEventContract({
    eventSignatures: {
        'register-listeners::v2020_12_25': {
            
            
            
            emitPayloadSchema: registerListenersEmitTargetAndPayloadSchema,
            
            
            
        }
    }
})
export default registerListenersEventContract

export type RegisterListenersEventContract = typeof registerListenersEventContract