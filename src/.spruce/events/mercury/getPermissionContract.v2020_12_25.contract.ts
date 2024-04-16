import '#spruce/permissions/permissions.types'
import { buildEventContract } from '@sprucelabs/mercury-types'
import getPermissionContractEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/getPermissionContractEmitTargetAndPayload.schema'
import getPermissionContractResponsePayloadSchema from '#spruce/schemas/mercury/v2020_12_25/getPermissionContractResponsePayload.schema'

const getPermissionContractEventContract = buildEventContract({
    eventSignatures: {
        'get-permission-contract::v2020_12_25': {
            emitPayloadSchema: getPermissionContractEmitTargetAndPayloadSchema,
            responsePayloadSchema: getPermissionContractResponsePayloadSchema,
        },
    },
})
export default getPermissionContractEventContract

export type GetPermissionContractEventContract =
    typeof getPermissionContractEventContract
