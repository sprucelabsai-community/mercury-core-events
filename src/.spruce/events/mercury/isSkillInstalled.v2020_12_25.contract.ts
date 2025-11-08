import '#spruce/permissions/permissions.types'
import isSkillInstalledEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/isSkillInstalledEmitTargetAndPayload.schema'
import isSkillInstalledResponsePayloadSchema from '#spruce/schemas/mercury/v2020_12_25/isSkillInstalledResponsePayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'


const isSkillInstalledEventContract = buildEventContract({
    eventSignatures: {
        'is-skill-installed::v2020_12_25': {
            
            description: "Check if a skill is installed at an organization.",
            
            
            
            
            emitPayloadSchema: isSkillInstalledEmitTargetAndPayloadSchema,
            responsePayloadSchema: isSkillInstalledResponsePayloadSchema,
            
            
        }
    }
})
export default isSkillInstalledEventContract

export type IsSkillInstalledEventContract = typeof isSkillInstalledEventContract
