import '#spruce/permissions/permissions.types'
import setAuthorizorStatusEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/setAuthorizorStatusEmitTargetAndPayload.schema'
import setAuthorizerStatusResponsePayloadSchema from '#spruce/schemas/mercury/v2020_12_25/setAuthorizerStatusResponsePayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'


const setAuthorizorStatusEventContract = buildEventContract({
    eventSignatures: {
        'set-authorizor-status::v2020_12_25': {
            
            description: "Set someone's authorizer status. E.g. are \"clockedIn\" or \"onPremise\"",
            
            
            
            
            emitPayloadSchema: setAuthorizorStatusEmitTargetAndPayloadSchema,
            responsePayloadSchema: setAuthorizerStatusResponsePayloadSchema,
            
            
        }
    }
})
export default setAuthorizorStatusEventContract

export type SetAuthorizorStatusEventContract = typeof setAuthorizorStatusEventContract
