import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

const invokeChatCallbackTargetSchema: SpruceSchemas.Mercury.v2020_12_25.InvokeChatCallbackTargetSchema =
    {
        id: 'invokeChatCallbackTarget',
        version: 'v2020_12_25',
        namespace: 'Mercury',
        name: '',
        fields: {
            /** . */
            skillId: {
                type: 'id',
                isRequired: true,
                options: undefined,
            },
            /** . */
            chatPersonId: {
                type: 'id',
                isRequired: true,
                options: undefined,
            },
        },
    }

SchemaRegistry.getInstance().trackSchema(invokeChatCallbackTargetSchema)

export default invokeChatCallbackTargetSchema
