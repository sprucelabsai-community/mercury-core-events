import { SchemaRegistry } from '@sprucelabs/schema'
import syncPermissionContractsEmitPayloadSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/syncPermissionContractsEmitPayload.schema'
import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import eventTargetSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventTarget.schema'
import { SpruceSchemas } from '../../schemas.types'

const syncPermissionContractsEmitTargetAndPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.SyncPermissionContractsEmitTargetAndPayloadSchema =
    {
        id: 'syncPermissionContractsEmitTargetAndPayload',
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
            target: {
                type: 'schema',
                options: { schema: eventTargetSchema_v2021_09_13 },
            },
            /** . */
            payload: {
                type: 'schema',
                isRequired: true,
                options: {
                    schema: syncPermissionContractsEmitPayloadSchema_v2020_12_25,
                },
            },
        },
    }

SchemaRegistry.getInstance().trackSchema(
    syncPermissionContractsEmitTargetAndPayloadSchema
)

export default syncPermissionContractsEmitTargetAndPayloadSchema
