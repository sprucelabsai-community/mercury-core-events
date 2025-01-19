import '#spruce/permissions/permissions.types'
import unregisterEventsEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/unregisterEventsEmitTargetAndPayload.schema'
import unregisterEventsResponsePayloadSchema from '#spruce/schemas/mercury/v2020_12_25/unregisterEventsResponsePayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'


const unregisterEventsEventContract = buildEventContract({
    eventSignatures: {
        'unregister-events::v2020_12_25': {
            
            description: `Tell the world to forget about the events you share`,
            
            
            
            emitPayloadSchema: unregisterEventsEmitTargetAndPayloadSchema,
            responsePayloadSchema: unregisterEventsResponsePayloadSchema,
            
            
        }
    }
})
export default unregisterEventsEventContract

export type UnregisterEventsEventContract = typeof unregisterEventsEventContract