import '#spruce/permissions/permissions.types'
import installSkillEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/installSkillEmitTargetAndPayload.schema'
import installSkillResponsePayloadSchema from '#spruce/schemas/mercury/v2020_12_25/installSkillResponsePayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'


const installSkillEventContract = buildEventContract({
    eventSignatures: {
        'install-skill::v2020_12_25': {
            
            description: `Install a skill at your organization.`,
            
            
            
            emitPayloadSchema: installSkillEmitTargetAndPayloadSchema,
            responsePayloadSchema: installSkillResponsePayloadSchema,
            
            
        }
    }
})
export default installSkillEventContract

export type InstallSkillEventContract = typeof installSkillEventContract