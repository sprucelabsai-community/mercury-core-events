import '#spruce/permissions/permissions.types'
import listLocationsEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/listLocationsEmitTargetAndPayload.schema'
import listLocationsResponsePayloadSchema from '#spruce/schemas/mercury/v2020_12_25/listLocationsResponsePayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'


const listLocationsEventContract = buildEventContract({
    eventSignatures: {
        'list-locations::v2020_12_25': {
            
            description: `Look through all locations.`,
            aiInstructions: `Lists all locations. It can be useful to ask if the user if they want to filter by organization and if so, have them select one first (list-organizations event).`,
            
            
            emitPayloadSchema: listLocationsEmitTargetAndPayloadSchema,
            responsePayloadSchema: listLocationsResponsePayloadSchema,
            
            
        }
    }
})
export default listLocationsEventContract

export type ListLocationsEventContract = typeof listLocationsEventContract