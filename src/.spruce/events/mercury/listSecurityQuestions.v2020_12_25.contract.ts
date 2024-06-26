import '#spruce/permissions/permissions.types'
import listSecurityQuestionsEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/listSecurityQuestionsEmitTargetAndPayload.schema'
import listSecurityQuestionsResponsePayloadSchema from '#spruce/schemas/mercury/v2020_12_25/listSecurityQuestionsResponsePayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'


const listSecurityQuestionsEventContract = buildEventContract({
    eventSignatures: {
        'list-security-questions::v2020_12_25': {
            
            
            
            emitPayloadSchema: listSecurityQuestionsEmitTargetAndPayloadSchema,
            responsePayloadSchema: listSecurityQuestionsResponsePayloadSchema,
            
            
        }
    }
})
export default listSecurityQuestionsEventContract

export type ListSecurityQuestionsEventContract = typeof listSecurityQuestionsEventContract