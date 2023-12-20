import '#spruce/permissions/permissions.types'
import { buildEventContract } from '@sprucelabs/mercury-types'
import resetPasswordEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/resetPasswordEmitTargetAndPayload.schema'
import resetPasswordResponsePayloadSchema from '#spruce/schemas/mercury/v2020_12_25/resetPasswordResponsePayload.schema'

const resetPasswordEventContract = buildEventContract({
	eventSignatures: {
		'reset-password::v2020_12_25': {
			emitPayloadSchema: resetPasswordEmitTargetAndPayloadSchema,
			responsePayloadSchema: resetPasswordResponsePayloadSchema,
		},
	},
})
export default resetPasswordEventContract

export type ResetPasswordEventContract = typeof resetPasswordEventContract
