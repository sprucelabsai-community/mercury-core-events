import '#spruce/permissions/permissions.types'
import getAnonymousPersonEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/getAnonymousPersonEmitTargetAndPayload.schema'
import getAnonyomousPersonResponsePayloadSchema from '#spruce/schemas/mercury/v2020_12_25/getAnonyomousPersonResponsePayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'


const getAnonymousPersonEventContract = buildEventContract({
    eventSignatures: {
        'get-anonymous-person::v2020_12_25': {
            
            
            
            emitPayloadSchema: getAnonymousPersonEmitTargetAndPayloadSchema,
            responsePayloadSchema: getAnonyomousPersonResponsePayloadSchema,
            
            
        }
    }
})
export default getAnonymousPersonEventContract

export type GetAnonymousPersonEventContract = typeof getAnonymousPersonEventContract