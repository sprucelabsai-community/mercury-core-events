import '#spruce/permissions/permissions.types'
import { buildEventContract } from '@sprucelabs/mercury-types'
import didLeaveOrganizationEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/didLeaveOrganizationEmitTargetAndPayload.schema'
import didLeaveOrganizationResponsePayloadSchema from '#spruce/schemas/mercury/v2020_12_25/didLeaveOrganizationResponsePayload.schema'

const didLeaveOrganizationEventContract = buildEventContract({
    eventSignatures: {
        'did-leave-organization::v2020_12_25': {
            emitPayloadSchema: didLeaveOrganizationEmitTargetAndPayloadSchema,
            responsePayloadSchema: didLeaveOrganizationResponsePayloadSchema,
        },
    },
})
export default didLeaveOrganizationEventContract

export type DidLeaveOrganizationEventContract =
    typeof didLeaveOrganizationEventContract
