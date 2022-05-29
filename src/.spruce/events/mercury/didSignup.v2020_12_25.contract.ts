import { buildEventContract } from '@sprucelabs/mercury-types'
import didSignupEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/didSignupEmitTargetAndPayload.schema'

const didSignupEventContract = buildEventContract({
	eventSignatures: {
		'did-signup::v2020_12_25': {
			isGlobal: true,
			emitPayloadSchema: didSignupEmitTargetAndPayloadSchema,
		},
	},
})
export default didSignupEventContract

export type DidSignupEventContract = typeof didSignupEventContract
