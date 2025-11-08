import '#spruce/permissions/permissions.types'
import requestDataDeletedEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/requestDataDeletedEmitTargetAndPayload.schema'
import requestDataDeletedRespondPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/requestDataDeletedRespondPayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'


const requestDataDeletedEventContract = buildEventContract({
    eventSignatures: {
        'request-data-deleted::v2020_12_25': {
            
            description: "Request to have your personal data deleted!",
            
            feed: {"template":"I delete my personal info!"},
            
            
            emitPayloadSchema: requestDataDeletedEmitTargetAndPayloadSchema,
            responsePayloadSchema: requestDataDeletedRespondPayloadSchema,
            
            
        }
    }
})
export default requestDataDeletedEventContract

export type RequestDataDeletedEventContract = typeof requestDataDeletedEventContract
