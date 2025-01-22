import '#spruce/permissions/permissions.types'
import getPersonEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/getPersonEmitTargetAndPayload.schema'
import getPersonResponsePayloadSchema from '#spruce/schemas/mercury/v2020_12_25/getPersonResponsePayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'


const getPersonEventContract = buildEventContract({
    eventSignatures: {
        'get-person::v2020_12_25': {
            
            description: `Get details about a person (or yourself)`,
            aiInstructions: `Get details about the logged in person. The API right now won't let someone get another person's profile, so ignore the target for now and don't mention getting a person by id. Make sure to pass payload.shouldIncludePrivateFields as true during all conversations.`,
            
            
            emitPayloadSchema: getPersonEmitTargetAndPayloadSchema,
            responsePayloadSchema: getPersonResponsePayloadSchema,
            
            
        }
    }
})
export default getPersonEventContract

export type GetPersonEventContract = typeof getPersonEventContract