import '#spruce/permissions/permissions.types'
import registerSkillEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/registerSkillEmitTargetAndPayload.schema'
import registerSkillResponsePayloadSchema from '#spruce/schemas/mercury/v2020_12_25/registerSkillResponsePayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'


const registerSkillEventContract = buildEventContract({
    eventSignatures: {
        'register-skill::v2020_12_25': {
            
            description: `Tell me about the new skill you want me to learn! 💪`,
            
            
            
            emitPayloadSchema: registerSkillEmitTargetAndPayloadSchema,
            responsePayloadSchema: registerSkillResponsePayloadSchema,
            
            
        }
    }
})
export default registerSkillEventContract

export type RegisterSkillEventContract = typeof registerSkillEventContract