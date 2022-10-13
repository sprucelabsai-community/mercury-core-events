import didUpdatePersonEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/didUpdatePersonEmitTargetAndPayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'


const didUpdatePersonEventContract = buildEventContract({
    eventSignatures: {
        'did-update-person::v2020_12_25': {
            isGlobal: true,
            emitPayloadSchema: didUpdatePersonEmitTargetAndPayloadSchema,
            
            
            
        }
    }
})
export default didUpdatePersonEventContract

export type DidUpdatePersonEventContract = typeof didUpdatePersonEventContract