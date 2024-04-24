import '#spruce/permissions/permissions.types'
import deleteOrganizationEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/deleteOrganizationEmitTargetAndPayload.schema'
import deleteOrgResponsePayloadSchema from '#spruce/schemas/mercury/v2020_12_25/deleteOrgResponsePayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'


const deleteOrganizationEventContract = buildEventContract({
    eventSignatures: {
        'delete-organization::v2020_12_25': {
            
            
            
            emitPayloadSchema: deleteOrganizationEmitTargetAndPayloadSchema,
            responsePayloadSchema: deleteOrgResponsePayloadSchema,
            
            
        }
    }
})
export default deleteOrganizationEventContract

export type DeleteOrganizationEventContract = typeof deleteOrganizationEventContract