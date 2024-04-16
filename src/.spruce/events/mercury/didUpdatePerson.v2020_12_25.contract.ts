import '#spruce/permissions/permissions.types'
import { buildEventContract } from '@sprucelabs/mercury-types'
import didUpdatePersonEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/didUpdatePersonEmitTargetAndPayload.schema'

const didUpdatePersonEventContract = buildEventContract({
    eventSignatures: {
        'did-update-person::v2020_12_25': {
            isGlobal: true,

            listenPermissions: {
                contractId: 'people-contract',
                permissionIdsAny: ['can-listen-to-did-update'],
            },
            emitPayloadSchema: didUpdatePersonEmitTargetAndPayloadSchema,
        },
    },
})
export default didUpdatePersonEventContract

export type DidUpdatePersonEventContract = typeof didUpdatePersonEventContract
