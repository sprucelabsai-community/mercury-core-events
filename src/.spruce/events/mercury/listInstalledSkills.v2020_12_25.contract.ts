import '#spruce/permissions/permissions.types'
import listInstalledSkillsEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/listInstalledSkillsEmitTargetAndPayload.schema'
import listInstalledSkillsResponsePayloadSchema from '#spruce/schemas/mercury/v2020_12_25/listInstalledSkillsResponsePayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'


const listInstalledSkillsEventContract = buildEventContract({
    eventSignatures: {
        'list-installed-skills::v2020_12_25': {
            
            description: `List skills`,
            
            
            
            emitPayloadSchema: listInstalledSkillsEmitTargetAndPayloadSchema,
            responsePayloadSchema: listInstalledSkillsResponsePayloadSchema,
            
            
        }
    }
})
export default listInstalledSkillsEventContract

export type ListInstalledSkillsEventContract = typeof listInstalledSkillsEventContract