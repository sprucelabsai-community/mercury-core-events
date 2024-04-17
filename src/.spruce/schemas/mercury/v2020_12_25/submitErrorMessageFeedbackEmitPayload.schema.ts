import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const submitErrorMessageFeedbackEmitPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.SubmitErrorMessageFeedbackEmitPayloadSchema  = {
	id: 'submitErrorMessageFeedbackEmitPayload',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** Error code. */
	            'errorCode': {
	                label: 'Error code',
	                type: 'text',
	                options: undefined
	            },
	            /** Error message. */
	            'errorMessage': {
	                label: 'Error message',
	                type: 'text',
	                isRequired: true,
	                options: undefined
	            },
	            /** Stack traces. */
	            'stackTrace': {
	                label: 'Stack traces',
	                type: 'text',
	                isRequired: true,
	                options: undefined
	            },
	            /** Href. */
	            'fromHref': {
	                label: 'Href',
	                type: 'text',
	                isRequired: true,
	                options: undefined
	            },
	            /** . */
	            'thoughts': {
	                type: 'text',
	                isRequired: true,
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(submitErrorMessageFeedbackEmitPayloadSchema)

export default submitErrorMessageFeedbackEmitPayloadSchema
