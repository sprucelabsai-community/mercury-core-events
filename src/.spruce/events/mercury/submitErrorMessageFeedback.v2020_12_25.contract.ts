import '#spruce/permissions/permissions.types'
import { buildEventContract } from '@sprucelabs/mercury-types'
import submitErrorMessageFeedbackEmitTargetAndPayloadSchema from '#spruce/schemas/mercury/v2020_12_25/submitErrorMessageFeedbackEmitTargetAndPayload.schema'

const submitErrorMessageFeedbackEventContract = buildEventContract({
    eventSignatures: {
        'submit-error-message-feedback::v2020_12_25': {
            emitPayloadSchema:
                submitErrorMessageFeedbackEmitTargetAndPayloadSchema,
        },
    },
})
export default submitErrorMessageFeedbackEventContract

export type SubmitErrorMessageFeedbackEventContract =
    typeof submitErrorMessageFeedbackEventContract
