import '#spruce/permissions/permissions.types'
import createLocationEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/createLocationEmitTargetAndPayload.schema'
import createLocationResponsePayloadSchema from '#spruce/schemas/mercury/v2020_12_25/createLocationResponsePayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'


const createLocationEventContract = buildEventContract({
    eventSignatures: {
        'create-location::v2020_12_25': {
            
            description: "Create a new location at your organization.",
            
            
            
            
            emitPayloadSchema: createLocationEmitTargetAndPayloadSchema,
            responsePayloadSchema: createLocationResponsePayloadSchema,
            
            
        }
    }
})
export default createLocationEventContract

export type CreateLocationEventContract = typeof createLocationEventContract
