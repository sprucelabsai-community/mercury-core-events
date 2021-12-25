import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import removeRoleEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/removeRoleEmitTargetAndPayload.schema'
import removeRoleResponsePayloadSchema from '#spruce/schemas/mercury/v2020_12_25/removeRoleResponsePayload.schema'

const removeRoleEventContract = buildEventContract({
	eventSignatures: {
		'remove-role::v2020_12_25': {
			emitPayloadSchema: removeRoleEmitTargetAndPayloadSchema,
			responsePayloadSchema: removeRoleResponsePayloadSchema,
			emitPermissionContract: buildPermissionContract({
				id: 'hiring-and-promoting',
				name: 'Hiring and promoting contract',
				description:
					'Various permissions related to emitting hiring and promoting people at organizations and locations.',
				requireAllPermissions: false,
				permissions: [
					{
						id: 'can-hire-person',
						name: 'Hire a person',
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
						},
					},
					{
						id: 'can-fire-person',
						name: 'Fire a person',
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
						},
					},
					{
						id: 'hire-and-promote-when-not-installed',
						name: 'Can hire even when not installed.',
						defaults: {
							skill: false,
						},
					},
				],
			}),
		},
	},
})
export default removeRoleEventContract

export type RemoveRoleEventContract = typeof removeRoleEventContract
