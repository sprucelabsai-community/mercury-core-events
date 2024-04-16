import '#spruce/permissions/permissions.types'
import { buildEventContract } from '@sprucelabs/mercury-types'
import listInstalledSkillsEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/listInstalledSkillsEmitTargetAndPayload.schema'
import listInstalledSkillsResponsePayloadSchema from '#spruce/schemas/mercury/v2020_12_25/listInstalledSkillsResponsePayload.schema'

const listInstalledSkillsEventContract = buildEventContract({
    eventSignatures: {
        'list-installed-skills::v2020_12_25': {
            emitPayloadSchema: listInstalledSkillsEmitTargetAndPayloadSchema,
            responsePayloadSchema: listInstalledSkillsResponsePayloadSchema,
        },
    },
})
export default listInstalledSkillsEventContract

export type ListInstalledSkillsEventContract =
    typeof listInstalledSkillsEventContract
