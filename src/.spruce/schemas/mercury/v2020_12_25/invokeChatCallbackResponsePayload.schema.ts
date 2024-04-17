import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

const invokeChatCallbackResponsePayloadSchema: SpruceSchemas.Mercury.v2020_12_25.InvokeChatCallbackResponsePayloadSchema =
    {
        id: 'invokeChatCallbackResponsePayload',
        version: 'v2020_12_25',
        namespace: 'Mercury',
        name: '',
        fields: {
            /** . */
            message: {
                type: 'text',
                isRequired: true,
                options: undefined,
            },
        },
    }

SchemaRegistry.getInstance().trackSchema(
    invokeChatCallbackResponsePayloadSchema
)

export default invokeChatCallbackResponsePayloadSchema
