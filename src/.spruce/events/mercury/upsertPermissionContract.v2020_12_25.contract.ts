import '#spruce/permissions/permissions.types'
import upsertPermissionContractEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/upsertPermissionContractEmitTargetAndPayload.schema'
import upsertPermissionContractResponsePayloadSchema from '#spruce/schemas/mercury/v2020_12_25/upsertPermissionContractResponsePayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'


const upsertPermissionContractEventContract = buildEventContract({
    eventSignatures: {
        'upsert-permission-contract::v2020_12_25': {
            
            
            
            emitPayloadSchema: upsertPermissionContractEmitTargetAndPayloadSchema,
            responsePayloadSchema: upsertPermissionContractResponsePayloadSchema,
            
            
        }
    }
})
export default upsertPermissionContractEventContract

export type UpsertPermissionContractEventContract = typeof upsertPermissionContractEventContract