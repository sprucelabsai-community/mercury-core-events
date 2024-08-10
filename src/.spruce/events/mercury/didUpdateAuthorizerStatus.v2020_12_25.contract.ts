import '#spruce/permissions/permissions.types'
import didUpdateAuthorizerStatusEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/didUpdateAuthorizerStatusEmitTargetAndPayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'


const didUpdateAuthorizerStatusEventContract = buildEventContract({
    eventSignatures: {
        'did-update-authorizer-status::v2020_12_25': {
            
            
            listenPermissions: {"contractId":"people-contract","permissionIdsAny":["can-listen-to-authorizor-status-changes"]},
            emitPayloadSchema: didUpdateAuthorizerStatusEmitTargetAndPayloadSchema,
            
            
            
        }
    }
})
export default didUpdateAuthorizerStatusEventContract

export type DidUpdateAuthorizerStatusEventContract = typeof didUpdateAuthorizerStatusEventContract