import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

const invokeChatCallbackPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.InvokeChatCallbackPayloadSchema =
    {
        id: 'invokeChatCallbackPayload',
        version: 'v2020_12_25',
        namespace: 'Mercury',
        name: '',
        fields: {
            /** . */
            placeholder: {
                type: 'id',
                isRequired: true,
                options: undefined,
            },
            /** . */
            state: {
                type: 'raw',
                options: { valueType: `Record<string, any>` },
            },
        },
    }

SchemaRegistry.getInstance().trackSchema(invokeChatCallbackPayloadSchema)

export default invokeChatCallbackPayloadSchema
