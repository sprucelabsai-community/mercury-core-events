import '#spruce/permissions/permissions.types'
import createRoleEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/createRoleEmitTargetAndPayload.schema'
import createRoleResponsePayloadSchema from '#spruce/schemas/mercury/v2020_12_25/createRoleResponsePayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'


const createRoleEventContract = buildEventContract({
    eventSignatures: {
        'create-role::v2020_12_25': {
            
            description: "Create a new role at your organization.",
            
            
            
            
            emitPayloadSchema: createRoleEmitTargetAndPayloadSchema,
            responsePayloadSchema: createRoleResponsePayloadSchema,
            
            
        }
    }
})
export default createRoleEventContract

export type CreateRoleEventContract = typeof createRoleEventContract
