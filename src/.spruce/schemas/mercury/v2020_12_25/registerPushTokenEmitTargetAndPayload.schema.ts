import { SchemaRegistry } from '@sprucelabs/schema'
import registerPushTokenEmitPayloadSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/registerPushTokenEmitPayload.schema'
import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import { SpruceSchemas } from '../../schemas.types'

const registerPushTokenEmitTargetAndPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.RegisterPushTokenEmitTargetAndPayloadSchema =
    {
        id: 'registerPushTokenEmitTargetAndPayload',
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
                options: {
                    schema: registerPushTokenEmitPayloadSchema_v2020_12_25,
                },
            },
        },
    }

SchemaRegistry.getInstance().trackSchema(
    registerPushTokenEmitTargetAndPayloadSchema
)

export default registerPushTokenEmitTargetAndPayloadSchema
