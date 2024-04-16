import '#spruce/permissions/permissions.types'
import { buildEventContract } from '@sprucelabs/mercury-types'
import syncPermissionContractsEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/syncPermissionContractsEmitTargetAndPayload.schema'
import syncPermissionContractsResponsePayloadSchema from '#spruce/schemas/mercury/v2020_12_25/syncPermissionContractsResponsePayload.schema'

const syncPermissionContractsEventContract = buildEventContract({
    eventSignatures: {
        'sync-permission-contracts::v2020_12_25': {
            emitPayloadSchema:
                syncPermissionContractsEmitTargetAndPayloadSchema,
            responsePayloadSchema: syncPermissionContractsResponsePayloadSchema,
        },
    },
})
export default syncPermissionContractsEventContract

export type SyncPermissionContractsEventContract =
    typeof syncPermissionContractsEventContract
