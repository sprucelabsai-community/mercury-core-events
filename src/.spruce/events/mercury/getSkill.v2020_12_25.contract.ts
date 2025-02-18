import '#spruce/permissions/permissions.types'
import getSkillEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/getSkillEmitTargetAndPayload.schema'
import getSkillResponsePayloadSchema from '#spruce/schemas/mercury/v2020_12_25/getSkillResponsePayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'


const getSkillEventContract = buildEventContract({
    eventSignatures: {
        'get-skill::v2020_12_25': {
            
            description: `Get a skill by id`,
            
            
            
            emitPayloadSchema: getSkillEmitTargetAndPayloadSchema,
            responsePayloadSchema: getSkillResponsePayloadSchema,
            
            
        }
    }
})
export default getSkillEventContract

export type GetSkillEventContract = typeof getSkillEventContract