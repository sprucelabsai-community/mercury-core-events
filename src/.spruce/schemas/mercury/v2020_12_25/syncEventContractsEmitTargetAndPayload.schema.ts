import { SchemaRegistry } from '@sprucelabs/schema'
import syncEventContractsEmitPayloadSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/syncEventContractsEmitPayload.schema'
import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import { SpruceSchemas } from '../../schemas.types'

const syncEventContractsEmitTargetAndPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.SyncEventContractsEmitTargetAndPayloadSchema =
    {
        id: 'syncEventContractsEmitTargetAndPayload',
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
                    schema: syncEventContractsEmitPayloadSchema_v2020_12_25,
                },
            },
        },
    }

SchemaRegistry.getInstance().trackSchema(
    syncEventContractsEmitTargetAndPayloadSchema
)

export default syncEventContractsEmitTargetAndPayloadSchema
