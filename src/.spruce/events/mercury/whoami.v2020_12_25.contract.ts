import '#spruce/permissions/permissions.types'
import { buildEventContract } from '@sprucelabs/mercury-types'
import authenticateResponsePayloadSchema from '#spruce/schemas/mercury/v2020_12_25/authenticateResponsePayload.schema'
import whoamiEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/whoamiEmitTargetAndPayload.schema'

const whoamiEventContract = buildEventContract({
    eventSignatures: {
        'whoami::v2020_12_25': {
            emitPayloadSchema: whoamiEmitTargetAndPayloadSchema,
            responsePayloadSchema: authenticateResponsePayloadSchema,
        },
    },
})
export default whoamiEventContract

export type WhoamiEventContract = typeof whoamiEventContract
