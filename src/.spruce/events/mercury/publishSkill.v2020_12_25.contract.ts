import '#spruce/permissions/permissions.types'
import publishSkillEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/publishSkillEmitTargetAndPayload.schema'
import publishSkillResponsePayloadSchema from '#spruce/schemas/mercury/v2020_12_25/publishSkillResponsePayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'


const publishSkillEventContract = buildEventContract({
    eventSignatures: {
        'publish-skill::v2020_12_25': {
            
            description: `Publish a skill so others can find it and install it.`,
            
            
            
            emitPayloadSchema: publishSkillEmitTargetAndPayloadSchema,
            responsePayloadSchema: publishSkillResponsePayloadSchema,
            
            
        }
    }
})
export default publishSkillEventContract

export type PublishSkillEventContract = typeof publishSkillEventContract