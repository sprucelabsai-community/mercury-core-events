import '#spruce/permissions/permissions.types'
import { buildEventContract } from '@sprucelabs/mercury-types'
import registerChatBotEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/registerChatBotEmitTargetAndPayload.schema'
import registerChatBotsResponsePayloadSchema from '#spruce/schemas/mercury/v2020_12_25/registerChatBotsResponsePayload.schema'

const registerChatBotEventContract = buildEventContract({
	eventSignatures: {
		'register-chat-bot::v2020_12_25': {
			listenPermissions: {
				contractId: 'chat-bot-contract',
				permissionIdsAny: ['can-register-chat-bot'],
			},
			emitPayloadSchema: registerChatBotEmitTargetAndPayloadSchema,
			responsePayloadSchema: registerChatBotsResponsePayloadSchema,
		},
	},
})
export default registerChatBotEventContract

export type RegisterChatBotEventContract = typeof registerChatBotEventContract
