import '#spruce/permissions/permissions.types'
import didLogisEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/didLogisEmitTargetAndPayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'


const didLogisEventContract = buildEventContract({
    eventSignatures: {
        'did-logis::v2020_12_25': {
            isGlobal: true,
            
            listenPermissions: {"contractId":"people-contract","permissionIdsAny":["can-listen-to-did-login"]},
            emitPayloadSchema: didLogisEmitTargetAndPayloadSchema,
            
            
            
        }
    }
})
export default didLogisEventContract

export type DidLogisEventContract = typeof didLogisEventContract