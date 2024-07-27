import '#spruce/permissions/permissions.types'
import didLoginEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/didLoginEmitTargetAndPayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'


const didLoginEventContract = buildEventContract({
    eventSignatures: {
        'did-login::v2020_12_25': {
            isGlobal: true,
            
            listenPermissions: {"contractId":"people-contract","permissionIdsAny":["can-listen-to-did-login"]},
            emitPayloadSchema: didLoginEmitTargetAndPayloadSchema,
            
            
            
        }
    }
})
export default didLoginEventContract

export type DidLoginEventContract = typeof didLoginEventContract