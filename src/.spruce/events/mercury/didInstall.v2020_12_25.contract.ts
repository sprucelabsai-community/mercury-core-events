import '#spruce/permissions/permissions.types'
import { buildEventContract } from '@sprucelabs/mercury-types'
import didInstallEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/didInstallEmitTargetAndPayload.schema'
import didInstallResponsePayloadSchema from '#spruce/schemas/mercury/v2020_12_25/didInstallResponsePayload.schema'

const didInstallEventContract = buildEventContract({
    eventSignatures: {
        'did-install::v2020_12_25': {
            emitPayloadSchema: didInstallEmitTargetAndPayloadSchema,
            responsePayloadSchema: didInstallResponsePayloadSchema,
        },
    },
})
export default didInstallEventContract

export type DidInstallEventContract = typeof didInstallEventContract
