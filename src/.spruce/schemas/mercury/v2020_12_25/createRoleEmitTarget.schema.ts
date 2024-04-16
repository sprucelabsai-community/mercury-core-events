import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

const createRoleEmitTargetSchema: SpruceSchemas.Mercury.v2020_12_25.CreateRoleEmitTargetSchema =
    {
        id: 'createRoleEmitTarget',
        version: 'v2020_12_25',
        namespace: 'Mercury',
        name: '',
        fields: {
            /** . */
            organizationId: {
                type: 'id',
                isRequired: true,
                options: undefined,
            },
        },
    }

SchemaRegistry.getInstance().trackSchema(createRoleEmitTargetSchema)

export default createRoleEmitTargetSchema
