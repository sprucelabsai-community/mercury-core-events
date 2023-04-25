import '#spruce/permissions/permissions.types'
import { buildEventContract } from '@sprucelabs/mercury-types'
import invokeChatCallbackEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/invokeChatCallbackEmitTargetAndPayload.schema'
import invokeChatCallbackResponsePayloadSchema from '#spruce/schemas/mercury/v2020_12_25/invokeChatCallbackResponsePayload.schema'

const invokeChatCallbackEventContract = buildEventContract({
	eventSignatures: {
		'invoke-chat-callback::v2020_12_25': {
			listenPermissions: {
				contractId: 'chat-bot-contract',
				permissionIdsAny: ['can-register-chat-bot'],
			},
			emitPayloadSchema: invokeChatCallbackEmitTargetAndPayloadSchema,
			responsePayloadSchema: invokeChatCallbackResponsePayloadSchema,
		},
	},
})
export default invokeChatCallbackEventContract

export type InvokeChatCallbackEventContract =
	typeof invokeChatCallbackEventContract
