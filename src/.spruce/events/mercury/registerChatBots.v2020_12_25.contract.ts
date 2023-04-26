import '#spruce/permissions/permissions.types'
import { buildEventContract } from '@sprucelabs/mercury-types'
import registerChatBotsEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/registerChatBotsEmitTargetAndPayload.schema'
import registerChatBotsResponsePayloadSchema from '#spruce/schemas/mercury/v2020_12_25/registerChatBotsResponsePayload.schema'

const registerChatBotsEventContract = buildEventContract({
	eventSignatures: {
		'register-chat-bots::v2020_12_25': {
			listenPermissions: {
				contractId: 'chat-bot-contract',
				permissionIdsAny: ['can-register-chat-bots'],
			},
			emitPayloadSchema: registerChatBotsEmitTargetAndPayloadSchema,
			responsePayloadSchema: registerChatBotsResponsePayloadSchema,
		},
	},
})
export default registerChatBotsEventContract

export type RegisterChatBotsEventContract = typeof registerChatBotsEventContract
