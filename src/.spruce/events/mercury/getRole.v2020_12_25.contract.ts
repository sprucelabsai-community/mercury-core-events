import '#spruce/permissions/permissions.types'
import getRoleEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/getRoleEmitTargetAndPayload.schema'
import getRoleResponsePayloadSchema from '#spruce/schemas/mercury/v2020_12_25/getRoleResponsePayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'


const getRoleEventContract = buildEventContract({
    eventSignatures: {
        'get-role::v2020_12_25': {
            
            description: `Get a role by id.`,
            
            
            
            emitPayloadSchema: getRoleEmitTargetAndPayloadSchema,
            responsePayloadSchema: getRoleResponsePayloadSchema,
            
            
        }
    }
})
export default getRoleEventContract

export type GetRoleEventContract = typeof getRoleEventContract