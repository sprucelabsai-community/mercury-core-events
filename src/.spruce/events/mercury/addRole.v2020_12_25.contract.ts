import '#spruce/permissions/permissions.types'
import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import addRoleEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/addRoleEmitTargetAndPayload.schema'
import addRoleResponsePayloadSchema from '#spruce/schemas/mercury/v2020_12_25/addRoleResponsePayload.schema'

const addRoleEventContract = buildEventContract({
    eventSignatures: {
        'add-role::v2020_12_25': {
            emitPayloadSchema: addRoleEmitTargetAndPayloadSchema,
            responsePayloadSchema: addRoleResponsePayloadSchema,
            emitPermissionContract: buildPermissionContract({
                id: 'hiring-and-promoting-contract',
                name: 'Hiring and promoting contract',
                description:
                    'Various permissions related to emitting hiring and promoting people at organizations and locations.',
                requireAllPermissions: false,
                permissions: [
                    {
                        id: 'can-hire-person',
                        name: 'Hire a person.',
                        description:
                            'by default, a manager and above can hire someone. This means the ability to invite someone with a specific role.',
                        defaults: {
                            owner: {
                                default: true,
                            },
                            groupManager: {
                                default: true,
                            },
                            manager: {
                                default: true,
                            },
                            skill: true,
                        },
                    },
                    {
                        id: 'can-fire-person',
                        name: 'Fire a person.',
                        description:
                            'By default, managers and above can fire someone.',
                        defaults: {
                            owner: {
                                default: true,
                            },
                            groupManager: {
                                default: true,
                            },
                            manager: {
                                default: true,
                            },
                            skill: true,
                        },
                    },
                    {
                        id: 'hire-and-promote-when-not-installed',
                        name: 'Can hire even when not installed.',
                        description:
                            'This only applies to skills. It gives them the ability to add people to your organization without being installed.',
                        defaults: {
                            skill: false,
                        },
                    },
                ],
            }),
        },
    },
})
export default addRoleEventContract

export type AddRoleEventContract = typeof addRoleEventContract
