import '#spruce/permissions/permissions.types'
import didLeaveOrganizationEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/didLeaveOrganizationEmitTargetAndPayload.schema'
import didLeaveOrganizationResponsePayloadSchema from '#spruce/schemas/mercury/v2020_12_25/didLeaveOrganizationResponsePayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'


const didLeaveOrganizationEventContract = buildEventContract({
    eventSignatures: {
        'did-leave-organization::v2020_12_25': {
            
            description: `Triggered when you remove a person from an organization or location at an organization.`,
            
            
            
            emitPayloadSchema: didLeaveOrganizationEmitTargetAndPayloadSchema,
            responsePayloadSchema: didLeaveOrganizationResponsePayloadSchema,
            
            
        }
    }
})
export default didLeaveOrganizationEventContract

export type DidLeaveOrganizationEventContract = typeof didLeaveOrganizationEventContract