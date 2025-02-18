import '#spruce/permissions/permissions.types'
import deleteRoleEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/deleteRoleEmitTargetAndPayload.schema'
import deleteRoleResponsePayloadSchema from '#spruce/schemas/mercury/v2020_12_25/deleteRoleResponsePayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'


const deleteRoleEventContract = buildEventContract({
    eventSignatures: {
        'delete-role::v2020_12_25': {
            
            description: `Delete a role.`,
            
            
            
            emitPayloadSchema: deleteRoleEmitTargetAndPayloadSchema,
            responsePayloadSchema: deleteRoleResponsePayloadSchema,
            
            
        }
    }
})
export default deleteRoleEventContract

export type DeleteRoleEventContract = typeof deleteRoleEventContract