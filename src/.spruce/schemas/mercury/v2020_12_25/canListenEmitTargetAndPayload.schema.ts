import { SchemaRegistry } from '@sprucelabs/schema'
import canListenEmitPayloadSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/canListenEmitPayload.schema'
import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import { SpruceSchemas } from '../../schemas.types'

const canListenEmitTargetAndPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.CanListenEmitTargetAndPayloadSchema =
    {
        id: 'canListenEmitTargetAndPayload',
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
                options: { schema: canListenEmitPayloadSchema_v2020_12_25 },
            },
        },
    }

SchemaRegistry.getInstance().trackSchema(canListenEmitTargetAndPayloadSchema)

export default canListenEmitTargetAndPayloadSchema
