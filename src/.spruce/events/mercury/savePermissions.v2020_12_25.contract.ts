import '#spruce/permissions/permissions.types'
import { buildEventContract } from '@sprucelabs/mercury-types'
import savePermissionsEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/savePermissionsEmitTargetAndPayload.schema'
import savePermissionsResponsePayloadSchema from '#spruce/schemas/mercury/v2020_12_25/savePermissionsResponsePayload.schema'

const savePermissionsEventContract = buildEventContract({
    eventSignatures: {
        'save-permissions::v2020_12_25': {
            emitPayloadSchema: savePermissionsEmitTargetAndPayloadSchema,
            responsePayloadSchema: savePermissionsResponsePayloadSchema,
        },
    },
})
export default savePermissionsEventContract

export type SavePermissionsEventContract = typeof savePermissionsEventContract
