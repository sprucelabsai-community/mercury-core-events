import '#spruce/permissions/permissions.types'
import confirmPinEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/confirmPinEmitTargetAndPayload.schema'
import confirmPinRespondPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/confirmPinRespondPayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'


const confirmPinEventContract = buildEventContract({
    eventSignatures: {
        'confirm-pin::v2020_12_25': {
            
            
            
            emitPayloadSchema: confirmPinEmitTargetAndPayloadSchema,
            responsePayloadSchema: confirmPinRespondPayloadSchema,
            
            
        }
    }
})
export default confirmPinEventContract

export type ConfirmPinEventContract = typeof confirmPinEventContract