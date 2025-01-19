import '#spruce/permissions/permissions.types'
import syncPermissionContractsEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/syncPermissionContractsEmitTargetAndPayload.schema'
import syncPermissionContractsResponsePayloadSchema from '#spruce/schemas/mercury/v2020_12_25/syncPermissionContractsResponsePayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'


const syncPermissionContractsEventContract = buildEventContract({
    eventSignatures: {
        'sync-permission-contracts::v2020_12_25': {
            
            description: `Sync your permission contracts.`,
            
            
            
            emitPayloadSchema: syncPermissionContractsEmitTargetAndPayloadSchema,
            responsePayloadSchema: syncPermissionContractsResponsePayloadSchema,
            
            
        }
    }
})
export default syncPermissionContractsEventContract

export type SyncPermissionContractsEventContract = typeof syncPermissionContractsEventContract