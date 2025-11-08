import '#spruce/permissions/permissions.types'
import unregisterListenersEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/unregisterListenersEmitTargetAndPayload.schema'
import unregisterListenersResponsePayloadSchema from '#spruce/schemas/mercury/v2020_12_25/unregisterListenersResponsePayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'


const unregisterListenersEventContract = buildEventContract({
    eventSignatures: {
        'unregister-listeners::v2020_12_25': {
            
            description: "Tell the mercury the events you no longer want to listen to.",
            
            
            
            
            emitPayloadSchema: unregisterListenersEmitTargetAndPayloadSchema,
            responsePayloadSchema: unregisterListenersResponsePayloadSchema,
            
            
        }
    }
})
export default unregisterListenersEventContract

export type UnregisterListenersEventContract = typeof unregisterListenersEventContract
