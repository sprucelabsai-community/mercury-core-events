import '#spruce/permissions/permissions.types'
import createOrganizationEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/createOrganizationEmitTargetAndPayload.schema'
import createOrgResponsePayloadSchema from '#spruce/schemas/mercury/v2020_12_25/createOrgResponsePayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'


const createOrganizationEventContract = buildEventContract({
    eventSignatures: {
        'create-organization::v2020_12_25': {
            
            description: `Create your organization.`,
            
            
            
            emitPayloadSchema: createOrganizationEmitTargetAndPayloadSchema,
            responsePayloadSchema: createOrgResponsePayloadSchema,
            
            
        }
    }
})
export default createOrganizationEventContract

export type CreateOrganizationEventContract = typeof createOrganizationEventContract