import '#spruce/permissions/permissions.types'
import listOrganizationsEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/listOrganizationsEmitTargetAndPayload.schema'
import listOrgsResponsePayloadSchema from '#spruce/schemas/mercury/v2020_12_25/listOrgsResponsePayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'


const listOrganizationsEventContract = buildEventContract({
    eventSignatures: {
        'list-organizations::v2020_12_25': {
            
            description: `Look through all organizations.`,
            aiInstructions: `Lists all organizations. You can ignore the target for this event as the payload is where all the useful filters are for our use cases.`,
            
            
            emitPayloadSchema: listOrganizationsEmitTargetAndPayloadSchema,
            responsePayloadSchema: listOrgsResponsePayloadSchema,
            
            
        }
    }
})
export default listOrganizationsEventContract

export type ListOrganizationsEventContract = typeof listOrganizationsEventContract