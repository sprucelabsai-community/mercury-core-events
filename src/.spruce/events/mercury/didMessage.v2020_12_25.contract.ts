import '#spruce/permissions/permissions.types'
import { buildEventContract } from '@sprucelabs/mercury-types'
import didMessageEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/didMessageEmitTargetAndPayload.schema'
import didMessageResponsePayloadSchema from '#spruce/schemas/mercury/v2020_12_25/didMessageResponsePayload.schema'

const didMessageEventContract = buildEventContract({
	eventSignatures: {
		'did-message::v2020_12_25': {
			emitPermissions: {
				contractId: 'emit-messaging',
				permissionIdsAny: ['can-emit-did-message-event'],
			},
			listenPermissions: {
				contractId: 'emit-messaging',
				permissionIdsAny: ['can-listen-to-did-message-event'],
			},
			emitPayloadSchema: didMessageEmitTargetAndPayloadSchema,
			responsePayloadSchema: didMessageResponsePayloadSchema,
		},
	},
})
export default didMessageEventContract

export type DidMessageEventContract = typeof didMessageEventContract
