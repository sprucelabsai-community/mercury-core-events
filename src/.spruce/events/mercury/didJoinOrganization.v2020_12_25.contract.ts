import '#spruce/permissions/permissions.types'
import didJoinOrganizationEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/didJoinOrganizationEmitTargetAndPayload.schema'
import didJoinOrganizationResponsePayloadSchema from '#spruce/schemas/mercury/v2020_12_25/didJoinOrganizationResponsePayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'


const didJoinOrganizationEventContract = buildEventContract({
    eventSignatures: {
        'did-join-organization::v2020_12_25': {
            
            
            
            emitPayloadSchema: didJoinOrganizationEmitTargetAndPayloadSchema,
            responsePayloadSchema: didJoinOrganizationResponsePayloadSchema,
            
            
        }
    }
})
export default didJoinOrganizationEventContract

export type DidJoinOrganizationEventContract = typeof didJoinOrganizationEventContract