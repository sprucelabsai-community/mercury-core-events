import '#spruce/permissions/permissions.types'
import getResolvedPermissionsContractEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/getResolvedPermissionsContractEmitTargetAndPayload.schema'
import getResolvedPermissionsContractRespondPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/getResolvedPermissionsContractRespondPayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'


const getResolvedPermissionsContractEventContract = buildEventContract({
    eventSignatures: {
        'get-resolved-permissions-contract::v2020_12_25': {
            
            description: `Get resolved permission contract`,
            
            
            
            emitPayloadSchema: getResolvedPermissionsContractEmitTargetAndPayloadSchema,
            responsePayloadSchema: getResolvedPermissionsContractRespondPayloadSchema,
            
            
        }
    }
})
export default getResolvedPermissionsContractEventContract

export type GetResolvedPermissionsContractEventContract = typeof getResolvedPermissionsContractEventContract