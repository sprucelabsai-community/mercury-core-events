import '#spruce/permissions/permissions.types'
import registerEventsEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/registerEventsEmitTargetAndPayload.schema'
import registerEventsResponsePayloadSchema from '#spruce/schemas/mercury/v2020_12_25/registerEventsResponsePayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'


const registerEventsEventContract = buildEventContract({
    eventSignatures: {
        'register-events::v2020_12_25': {
            
            description: `Tell the world about the events you share`,
            
            
            
            emitPayloadSchema: registerEventsEmitTargetAndPayloadSchema,
            responsePayloadSchema: registerEventsResponsePayloadSchema,
            
            
        }
    }
})
export default registerEventsEventContract

export type RegisterEventsEventContract = typeof registerEventsEventContract