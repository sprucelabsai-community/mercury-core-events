export { default as permissionDefaultsSchema } from './.spruce/schemas/mercury/v2020_12_25/permissionDefaults.schema'
export { default as eventContractSchema } from './.spruce/schemas/mercury/v2020_12_25/eventContract.schema'
export { default as eventSignatureSchema } from './.spruce/schemas/mercury/v2020_12_25/eventSignature.schema'
export { default as eventSignaturesByNameSchema } from './.spruce/schemas/mercury/v2020_12_25/eventSignaturesByName.schema'
export { default as permissionSchema } from './.spruce/schemas/mercury/v2020_12_25/permission.schema'
export { default as permissionContractSchema } from './.spruce/schemas/mercury/v2020_12_25/permissionContract.schema'
export { default as statusFlagsSchema } from './.spruce/schemas/mercury/v2020_12_25/statusFlags.schema'
export { default as messageTemplateAddonsSchema } from './.spruce/schemas/mercury/v2020_12_25/messageTemplateAddons.schema'
export { default as registeredListenerSchema } from './.spruce/schemas/mercury/v2020_12_25/registeredListener.schema'

export * from './.spruce/schemas/schemas.types'
import { SkillEventContract } from '@sprucelabs/mercury-types'
import { default as coreEventContractsSplit } from '#spruce/events/events.contract'

export const coreEventContracts: [SkillEventContract] = [
    //@ts-ignore
    coreEventContractsSplit.reduce(
        (contract, current) => {
            Object.keys(current.eventSignatures).forEach((name) => {
                //@ts-ignore
                contract.eventSignatures[name] = current.eventSignatures[name]
            })
            return contract
        },
        { eventSignatures: {} }
    ),
]

export * from '#spruce/events/events.contract'
export * from '#spruce/permissions/permissions.types'
export { SkillEventContract } from '@sprucelabs/mercury-types'
