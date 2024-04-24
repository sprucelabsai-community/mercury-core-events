import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import securityQuestionSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/securityQuestion.schema'

const resetPasswordEmitPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.ResetPasswordEmitPayloadSchema  = {
	id: 'resetPasswordEmitPayload',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** . */
	            'securityQuestions': {
	                type: 'schema',
	                isRequired: true,
	                isArray: true,
	                minArrayLength: 0,
	                options: {schema: securityQuestionSchema_v2020_12_25,}
	            },
	            /** . */
	            'newPassword': {
	                type: 'text',
	                isRequired: true,
	                options: undefined
	            },
	            /** . */
	            'newPasswordConfirm': {
	                type: 'text',
	                isRequired: true,
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(resetPasswordEmitPayloadSchema)

export default resetPasswordEmitPayloadSchema
