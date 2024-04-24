import '#spruce/permissions/permissions.types'
import scrambleAccountEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/scrambleAccountEmitTargetAndPayload.schema'
import scrambleAccountResponsePayloadSchema from '#spruce/schemas/mercury/v2020_12_25/scrambleAccountResponsePayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'


const scrambleAccountEventContract = buildEventContract({
    eventSignatures: {
        'scramble-account::v2020_12_25': {
            
            
            
            emitPayloadSchema: scrambleAccountEmitTargetAndPayloadSchema,
            responsePayloadSchema: scrambleAccountResponsePayloadSchema,
            
            
        }
    }
})
export default scrambleAccountEventContract

export type ScrambleAccountEventContract = typeof scrambleAccountEventContract