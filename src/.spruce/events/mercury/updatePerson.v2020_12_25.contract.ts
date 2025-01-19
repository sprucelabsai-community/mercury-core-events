import '#spruce/permissions/permissions.types'
import updatePersonEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/updatePersonEmitTargetAndPayload.schema'
import updatePersonResponsePayloadSchema from '#spruce/schemas/mercury/v2020_12_25/updatePersonResponsePayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'


const updatePersonEventContract = buildEventContract({
    eventSignatures: {
        'update-person::v2020_12_25': {
            
            description: `Update person.`,
            aiInstructions: `This will let a person update their own or somenone else's profile. But, the API won't let anyone update someone else's profile for now.`,
            
            
            emitPayloadSchema: updatePersonEmitTargetAndPayloadSchema,
            responsePayloadSchema: updatePersonResponsePayloadSchema,
            
            
        }
    }
})
export default updatePersonEventContract

export type UpdatePersonEventContract = typeof updatePersonEventContract