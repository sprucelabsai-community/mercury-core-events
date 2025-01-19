import '#spruce/permissions/permissions.types'
import listPeopleEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/listPeopleEmitTargetAndPayload.schema'
import listPeopleResponsePayloadSchema from '#spruce/schemas/mercury/v2020_12_25/listPeopleResponsePayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'


const listPeopleEventContract = buildEventContract({
    eventSignatures: {
        'list-people::v2020_12_25': {
            
            description: `Listing people.`,
            
            
            
            emitPayloadSchema: listPeopleEmitTargetAndPayloadSchema,
            responsePayloadSchema: listPeopleResponsePayloadSchema,
            
            
        }
    }
})
export default listPeopleEventContract

export type ListPeopleEventContract = typeof listPeopleEventContract