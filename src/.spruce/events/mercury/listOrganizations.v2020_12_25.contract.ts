import '#spruce/permissions/permissions.types'
import listOrganizationsEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/listOrganizationsEmitTargetAndPayload.schema'
import listOrgsResponsePayloadSchema from '#spruce/schemas/mercury/v2020_12_25/listOrgsResponsePayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'


const listOrganizationsEventContract = buildEventContract({
    eventSignatures: {
        'list-organizations::v2020_12_25': {
            
            description: `Look through all organizations.`,
            aiInstructions: `Lists all organizations. You can ignore the target for this event as the payload is where all the useful filters are for our use cases. If another event requires an organizationId, you can use this event to have the user select one first. If there is only one organization, just auto-select it.`,
            
            
            emitPayloadSchema: listOrganizationsEmitTargetAndPayloadSchema,
            responsePayloadSchema: listOrgsResponsePayloadSchema,
            
            
        }
    }
})
export default listOrganizationsEventContract

export type ListOrganizationsEventContract = typeof listOrganizationsEventContract