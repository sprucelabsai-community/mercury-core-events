import '#spruce/permissions/permissions.types'
import healthEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/healthEmitTargetAndPayload.schema'
import healthResponsePayloadSchema from '#spruce/schemas/mercury/v2020_12_25/healthResponsePayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'


const healthEventContract = buildEventContract({
    eventSignatures: {
        'health::v2020_12_25': {
            
            
            
            emitPayloadSchema: healthEmitTargetAndPayloadSchema,
            responsePayloadSchema: healthResponsePayloadSchema,
            
            
        }
    }
})
export default healthEventContract

export type HealthEventContract = typeof healthEventContract