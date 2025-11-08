import '#spruce/permissions/permissions.types'
import syncEventContractsEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/syncEventContractsEmitTargetAndPayload.schema'
import syncEventContractsResponsePayloadSchema from '#spruce/schemas/mercury/v2020_12_25/syncEventContractsResponsePayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'


const syncEventContractsEventContract = buildEventContract({
    eventSignatures: {
        'sync-event-contracts::v2020_12_25': {
            
            description: "Keep all your events in sync by registering new ones and removing old ones in a single call!",
            
            
            
            
            emitPayloadSchema: syncEventContractsEmitTargetAndPayloadSchema,
            responsePayloadSchema: syncEventContractsResponsePayloadSchema,
            
            
        }
    }
})
export default syncEventContractsEventContract

export type SyncEventContractsEventContract = typeof syncEventContractsEventContract
