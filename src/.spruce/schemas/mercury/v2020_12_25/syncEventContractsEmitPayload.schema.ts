import { SchemaRegistry } from '@sprucelabs/schema'
import eventContractSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/eventContract.schema'
import { SpruceSchemas } from '../../schemas.types'

const syncEventContractsEmitPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.SyncEventContractsEmitPayloadSchema =
    {
        id: 'syncEventContractsEmitPayload',
        version: 'v2020_12_25',
        namespace: 'Mercury',
        name: '',
        importsWhenRemote: ["import '@sprucelabs/mercury-types'"],
        fields: {
            /** . */
            contract: {
                type: 'schema',
                isRequired: true,
                options: { schema: eventContractSchema_v2020_12_25 },
            },
        },
    }

SchemaRegistry.getInstance().trackSchema(syncEventContractsEmitPayloadSchema)

export default syncEventContractsEmitPayloadSchema
