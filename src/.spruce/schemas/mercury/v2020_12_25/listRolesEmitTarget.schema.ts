import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

const listRolesEmitTargetSchema: SpruceSchemas.Mercury.v2020_12_25.ListRolesEmitTargetSchema =
    {
        id: 'listRolesEmitTarget',
        version: 'v2020_12_25',
        namespace: 'Mercury',
        name: '',
        fields: {
            /** . */
            organizationId: {
                type: 'id',
                options: undefined,
            },
            /** . */
            locationId: {
                type: 'id',
                options: undefined,
            },
            /** . */
            personId: {
                type: 'id',
                options: undefined,
            },
        },
    }

SchemaRegistry.getInstance().trackSchema(listRolesEmitTargetSchema)

export default listRolesEmitTargetSchema
