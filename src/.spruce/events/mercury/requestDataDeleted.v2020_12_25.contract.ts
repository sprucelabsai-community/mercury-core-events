import '#spruce/permissions/permissions.types'
import { buildEventContract } from '@sprucelabs/mercury-types'
import requestDataDeletedEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/requestDataDeletedEmitTargetAndPayload.schema'
import requestDataDeletedRespondPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/requestDataDeletedRespondPayload.schema'

const requestDataDeletedEventContract = buildEventContract({
    eventSignatures: {
        'request-data-deleted::v2020_12_25': {
            emitPayloadSchema: requestDataDeletedEmitTargetAndPayloadSchema,
            responsePayloadSchema: requestDataDeletedRespondPayloadSchema,
        },
    },
})
export default requestDataDeletedEventContract

export type RequestDataDeletedEventContract =
    typeof requestDataDeletedEventContract
