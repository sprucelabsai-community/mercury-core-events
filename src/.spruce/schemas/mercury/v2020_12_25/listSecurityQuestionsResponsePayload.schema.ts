import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

const listSecurityQuestionsResponsePayloadSchema: SpruceSchemas.Mercury.v2020_12_25.ListSecurityQuestionsResponsePayloadSchema =
    {
        id: 'listSecurityQuestionsResponsePayload',
        version: 'v2020_12_25',
        namespace: 'Mercury',
        name: '',
        fields: {
            /** . */
            questions: {
                type: 'text',
                isRequired: true,
                isArray: true,
                minArrayLength: 0,
                options: undefined,
            },
        },
    }

SchemaRegistry.getInstance().trackSchema(
    listSecurityQuestionsResponsePayloadSchema
)

export default listSecurityQuestionsResponsePayloadSchema
