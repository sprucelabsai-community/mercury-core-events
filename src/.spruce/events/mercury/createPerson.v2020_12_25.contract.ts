import '#spruce/permissions/permissions.types'
import createPersonEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/createPersonEmitTargetAndPayload.schema'
import createPersonResponsePayloadSchema from '#spruce/schemas/mercury/v2020_12_25/createPersonResponsePayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'


const createPersonEventContract = buildEventContract({
    eventSignatures: {
        'create-person::v2020_12_25': {
            
            description: `Create person.`,
            
            
            
            emitPayloadSchema: createPersonEmitTargetAndPayloadSchema,
            responsePayloadSchema: createPersonResponsePayloadSchema,
            
            
        }
    }
})
export default createPersonEventContract

export type CreatePersonEventContract = typeof createPersonEventContract