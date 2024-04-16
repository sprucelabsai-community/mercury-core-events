import { SchemaRegistry } from '@sprucelabs/schema'
import statusFlagsSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/statusFlags.schema'
import { SpruceSchemas } from '../../schemas.types'

const resolvedContractPermissionSchema: SpruceSchemas.Mercury.v2020_12_25.ResolvedContractPermissionSchema =
    {
        id: 'resolvedContractPermission',
        version: 'v2020_12_25',
        namespace: 'Mercury',
        name: '',
        fields: {
            /** . */
            id: {
                type: 'id',
                isRequired: true,
                options: undefined,
            },
            /** . */
            can: {
                type: 'boolean',
                isRequired: true,
                options: undefined,
            },
            /** . */
            byStatus: {
                type: 'schema',
                isRequired: true,
                options: { schema: statusFlagsSchema_v2020_12_25 },
            },
        },
    }

SchemaRegistry.getInstance().trackSchema(resolvedContractPermissionSchema)

export default resolvedContractPermissionSchema
