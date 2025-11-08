import '#spruce/permissions/permissions.types'
import logoutEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/logoutEmitTargetAndPayload.schema'
import logoutResponsePayloadSchema from '#spruce/schemas/mercury/v2020_12_25/logoutResponsePayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'


const logoutEventContract = buildEventContract({
    eventSignatures: {
        'logout::v2020_12_25': {
            
            description: "Logout as a person or skill (skill logout coming soon).",
            
            feed: {"template":"I logged out!"},
            
            
            emitPayloadSchema: logoutEmitTargetAndPayloadSchema,
            responsePayloadSchema: logoutResponsePayloadSchema,
            
            
        }
    }
})
export default logoutEventContract

export type LogoutEventContract = typeof logoutEventContract
