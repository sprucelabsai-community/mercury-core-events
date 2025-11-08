import '#spruce/permissions/permissions.types'
import getEventContractsEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/getEventContractsEmitTargetAndPayload.schema'
import getEventContractsResponsePayloadSchema from '#spruce/schemas/mercury/v2020_12_25/getEventContractsResponsePayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'


const getEventContractsEventContract = buildEventContract({
    eventSignatures: {
        'get-event-contracts::v2020_12_25': {
            
            description: "Get all the events available. Optionally target skills to get just their events.",
            
            
            
            
            emitPayloadSchema: getEventContractsEmitTargetAndPayloadSchema,
            responsePayloadSchema: getEventContractsResponsePayloadSchema,
            
            
        }
    }
})
export default getEventContractsEventContract

export type GetEventContractsEventContract = typeof getEventContractsEventContract
