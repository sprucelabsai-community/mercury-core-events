import { SchemaRegistry } from '@sprucelabs/schema'
import permissionContractSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/permissionContract.schema'
import { SpruceSchemas } from '../../schemas.types'

const syncPermissionContractsEmitPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.SyncPermissionContractsEmitPayloadSchema =
    {
        id: 'syncPermissionContractsEmitPayload',
        version: 'v2020_12_25',
        namespace: 'Mercury',
        name: '',
        fields: {
            /** Contracts. */
            contracts: {
                label: 'Contracts',
                type: 'schema',
                isRequired: true,
                isArray: true,
                minArrayLength: 0,
                options: { schema: permissionContractSchema_v2020_12_25 },
            },
        },
    }

SchemaRegistry.getInstance().trackSchema(
    syncPermissionContractsEmitPayloadSchema
)

export default syncPermissionContractsEmitPayloadSchema
