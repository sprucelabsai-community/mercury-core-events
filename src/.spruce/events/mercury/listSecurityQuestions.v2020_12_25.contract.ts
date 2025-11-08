import '#spruce/permissions/permissions.types'
import listSecurityQuestionsEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/listSecurityQuestionsEmitTargetAndPayload.schema'
import listSecurityQuestionsResponsePayloadSchema from '#spruce/schemas/mercury/v2020_12_25/listSecurityQuestionsResponsePayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'


const listSecurityQuestionsEventContract = buildEventContract({
    eventSignatures: {
        'list-security-questions::v2020_12_25': {
            
            description: "Get security questions. If a phone supplied in target it will look for security questions used by that person during signup.",
            
            
            
            
            emitPayloadSchema: listSecurityQuestionsEmitTargetAndPayloadSchema,
            responsePayloadSchema: listSecurityQuestionsResponsePayloadSchema,
            
            
        }
    }
})
export default listSecurityQuestionsEventContract

export type ListSecurityQuestionsEventContract = typeof listSecurityQuestionsEventContract
