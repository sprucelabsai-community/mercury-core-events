import '#spruce/permissions/permissions.types'
import updateLocationEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/updateLocationEmitTargetAndPayload.schema'
import updateLocationResponsePayloadSchema from '#spruce/schemas/mercury/v2020_12_25/updateLocationResponsePayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'


const updateLocationEventContract = buildEventContract({
    eventSignatures: {
        'update-location::v2020_12_25': {
            
            description: `Update a new location at your organization.`,
            
            
            
            emitPayloadSchema: updateLocationEmitTargetAndPayloadSchema,
            responsePayloadSchema: updateLocationResponsePayloadSchema,
            
            
        }
    }
})
export default updateLocationEventContract

export type UpdateLocationEventContract = typeof updateLocationEventContract