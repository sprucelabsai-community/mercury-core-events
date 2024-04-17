import { SchemaRegistry } from '@sprucelabs/schema'
import securityQuestionSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/securityQuestion.schema'
import { SpruceSchemas } from '../../schemas.types'

const signupEmitPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.SignupEmitPayloadSchema =
    {
        id: 'signupEmitPayload',
        version: 'v2020_12_25',
        namespace: 'Mercury',
        name: '',
        fields: {
            /** . */
            phone: {
                type: 'phone',
                isRequired: true,
                options: undefined,
            },
            /** . */
            firstName: {
                type: 'text',
                options: undefined,
            },
            /** . */
            lastName: {
                type: 'text',
                options: undefined,
            },
            /** . */
            password: {
                type: 'text',
                isRequired: true,
                options: undefined,
            },
            /** . */
            passwordConfirm: {
                type: 'text',
                isRequired: true,
                options: undefined,
            },
            /** . */
            securityQuestions: {
                type: 'schema',
                isRequired: true,
                isArray: true,
                minArrayLength: 2,
                options: { schema: securityQuestionSchema_v2020_12_25 },
            },
        },
    }

SchemaRegistry.getInstance().trackSchema(signupEmitPayloadSchema)

export default signupEmitPayloadSchema
