import '#spruce/permissions/permissions.types'
import updateOrganizationEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/updateOrganizationEmitTargetAndPayload.schema'
import updateOrgResponsePayloadSchema from '#spruce/schemas/mercury/v2020_12_25/updateOrgResponsePayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'


const updateOrganizationEventContract = buildEventContract({
    eventSignatures: {
        'update-organization::v2020_12_25': {
            
            description: `Update your organization.`,
            
            
            
            emitPayloadSchema: updateOrganizationEmitTargetAndPayloadSchema,
            responsePayloadSchema: updateOrgResponsePayloadSchema,
            
            
        }
    }
})
export default updateOrganizationEventContract

export type UpdateOrganizationEventContract = typeof updateOrganizationEventContract