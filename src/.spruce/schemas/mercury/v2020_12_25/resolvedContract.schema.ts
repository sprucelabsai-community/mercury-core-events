import { SchemaRegistry } from '@sprucelabs/schema'
import resolvedContractPermissionSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/resolvedContractPermission.schema'
import { SpruceSchemas } from '../../schemas.types'

const resolvedContractSchema: SpruceSchemas.Mercury.v2020_12_25.ResolvedContractSchema =
    {
        id: 'resolvedContract',
        version: 'v2020_12_25',
        namespace: 'Mercury',
        name: '',
        fields: {
            /** . */
            contractId: {
                type: 'id',
                isRequired: true,
                options: undefined,
            },
            /** . */
            permissions: {
                type: 'schema',
                isRequired: true,
                isArray: true,
                minArrayLength: 0,
                options: {
                    schema: resolvedContractPermissionSchema_v2020_12_25,
                },
            },
        },
    }

SchemaRegistry.getInstance().trackSchema(resolvedContractSchema)

export default resolvedContractSchema
