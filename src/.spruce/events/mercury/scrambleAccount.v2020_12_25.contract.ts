import '#spruce/permissions/permissions.types'
import scrambleAccountEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/scrambleAccountEmitTargetAndPayload.schema'
import scrambleAccountResponsePayloadSchema from '#spruce/schemas/mercury/v2020_12_25/scrambleAccountResponsePayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'


const scrambleAccountEventContract = buildEventContract({
    eventSignatures: {
        'scramble-account::v2020_12_25': {
            
            description: `Scramble your account so it no longer can be tied back to you! 🎩`,
            
            
            
            emitPayloadSchema: scrambleAccountEmitTargetAndPayloadSchema,
            responsePayloadSchema: scrambleAccountResponsePayloadSchema,
            
            
        }
    }
})
export default scrambleAccountEventContract

export type ScrambleAccountEventContract = typeof scrambleAccountEventContract