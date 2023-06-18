import '#spruce/permissions/permissions.types'
import { buildEventContract } from '@sprucelabs/mercury-types'
import registerPushTokenEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/registerPushTokenEmitTargetAndPayload.schema'
import registerPushTokenResponsePayloadSchema from '#spruce/schemas/mercury/v2020_12_25/registerPushTokenResponsePayload.schema'

const registerPushTokenEventContract = buildEventContract({
	eventSignatures: {
		'register-push-token::v2020_12_25': {
			emitPayloadSchema: registerPushTokenEmitTargetAndPayloadSchema,
			responsePayloadSchema: registerPushTokenResponsePayloadSchema,
		},
	},
})
export default registerPushTokenEventContract

export type RegisterPushTokenEventContract =
	typeof registerPushTokenEventContract
