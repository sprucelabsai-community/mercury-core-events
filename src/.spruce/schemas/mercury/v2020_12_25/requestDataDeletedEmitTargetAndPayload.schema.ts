import { SchemaRegistry } from '@sprucelabs/schema'
import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import { SpruceSchemas } from '../../schemas.types'

const requestDataDeletedEmitTargetAndPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.RequestDataDeletedEmitTargetAndPayloadSchema =
    {
        id: 'requestDataDeletedEmitTargetAndPayload',
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
        },
    }

SchemaRegistry.getInstance().trackSchema(
    requestDataDeletedEmitTargetAndPayloadSchema
)

export default requestDataDeletedEmitTargetAndPayloadSchema
