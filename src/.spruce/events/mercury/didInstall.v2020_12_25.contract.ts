import '#spruce/permissions/permissions.types'
import didInstallEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/didInstallEmitTargetAndPayload.schema'
import didInstallResponsePayloadSchema from '#spruce/schemas/mercury/v2020_12_25/didInstallResponsePayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'


const didInstallEventContract = buildEventContract({
    eventSignatures: {
        'did-install::v2020_12_25': {
            
            description: `Triggered when your skill is installed at an organization.`,
            
            
            
            emitPayloadSchema: didInstallEmitTargetAndPayloadSchema,
            responsePayloadSchema: didInstallResponsePayloadSchema,
            
            
        }
    }
})
export default didInstallEventContract

export type DidInstallEventContract = typeof didInstallEventContract