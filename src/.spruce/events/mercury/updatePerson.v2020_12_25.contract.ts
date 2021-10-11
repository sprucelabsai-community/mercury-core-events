import updatePersonEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/updatePersonEmitTargetAndPayload.schema'
import updatePersonResponsePayloadSchema from '#spruce/schemas/mercury/v2020_12_25/updatePersonResponsePayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'


const updatePersonEventContract = buildEventContract({
    eventSignatures: {
        'update-person::v2020_12_25': {
            
            emitPayloadSchema: updatePersonEmitTargetAndPayloadSchema,
            responsePayloadSchema: updatePersonResponsePayloadSchema,
            
            
        }
    }
})
export default updatePersonEventContract

export type UpdatePersonEventContract = typeof updatePersonEventContract