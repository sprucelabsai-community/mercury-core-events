import '#spruce/permissions/permissions.types'
import updateOrganizationEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/updateOrganizationEmitTargetAndPayload.schema'
import updateOrgResponsePayloadSchema from '#spruce/schemas/mercury/v2020_12_25/updateOrgResponsePayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'


const updateOrganizationEventContract = buildEventContract({
    eventSignatures: {
        'update-organization::v2020_12_25': {
            
            description: `Update your organization.`,
            aiInstructions: `This will allow someone to update any organization where they work (if they have permissions). Since you need an organization's id, you will have to start with the list-organizations event.`,
            
            
            emitPayloadSchema: updateOrganizationEmitTargetAndPayloadSchema,
            responsePayloadSchema: updateOrgResponsePayloadSchema,
            
            
        }
    }
})
export default updateOrganizationEventContract

export type UpdateOrganizationEventContract = typeof updateOrganizationEventContract