import { SchemaRegistry } from '@sprucelabs/schema'
import registerConversationTopicsEmitPayloadSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/registerConversationTopicsEmitPayload.schema'
import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import { SpruceSchemas } from '../../schemas.types'

const registerConversationTopicsEmitTargetAndPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.RegisterConversationTopicsEmitTargetAndPayloadSchema =
    {
        id: 'registerConversationTopicsEmitTargetAndPayload',
        version: 'v2020_12_25',
        namespace: 'Mercury',
        name: '',
        fields: {
            /** Source. */
            source: {
                label: 'Source',
                type: 'schema',
                options: { schema: eventSourceSchema_v2021_09_13 },
            },
            /** . */
            payload: {
                type: 'schema',
                isRequired: true,
                options: {
                    schema: registerConversationTopicsEmitPayloadSchema_v2020_12_25,
                },
            },
        },
    }

SchemaRegistry.getInstance().trackSchema(
    registerConversationTopicsEmitTargetAndPayloadSchema
)

export default registerConversationTopicsEmitTargetAndPayloadSchema
