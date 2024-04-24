import '#spruce/permissions/permissions.types'
import listPermissionContractsEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/listPermissionContractsEmitTargetAndPayload.schema'
import listPermissionContractsResponsePayloadSchema from '#spruce/schemas/mercury/v2020_12_25/listPermissionContractsResponsePayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'


const listPermissionContractsEventContract = buildEventContract({
    eventSignatures: {
        'list-permission-contracts::v2020_12_25': {
            
            
            
            emitPayloadSchema: listPermissionContractsEmitTargetAndPayloadSchema,
            responsePayloadSchema: listPermissionContractsResponsePayloadSchema,
            
            
        }
    }
})
export default listPermissionContractsEventContract

export type ListPermissionContractsEventContract = typeof listPermissionContractsEventContract