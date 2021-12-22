import { buildEventContract } from '@sprucelabs/mercury-types'
import { buildPermissionContract } from '@sprucelabs/mercury-types'
import setRoleEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/setRoleEmitTargetAndPayload.schema'
import setRoleResponsePayloadSchema from '#spruce/schemas/mercury/v2020_12_25/setRoleResponsePayload.schema'

const setRoleEventContract = buildEventContract({
	eventSignatures: {
		'set-role::v2020_12_25': {
			emitPayloadSchema: setRoleEmitTargetAndPayloadSchema,
			responsePayloadSchema: setRoleResponsePayloadSchema,
			emitPermissionContract: buildPermissionContract({
				id: 'hiring-and-promoting',
				name: 'Hiring and promoting contract',
				description:
					'Various permissions related to emitting hiring and promoting people at organizations and locations.',
				requireAllPermissions: false,
				permissions: [
					{
						id: 'hiring-and-promoting',
						name: 'Hire a person',
						defaults: {
							owner: {
								default: true,
							},
							groupManager: {
								clockedIn: true,
							},
							manager: {
								clockedIn: true,
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
export default setRoleEventContract

export type SetRoleEventContract = typeof setRoleEventContract
