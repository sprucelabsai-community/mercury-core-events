import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

const listSchemaTargetSchema: SpruceSchemas.Mercury.v2020_12_25.ListSchemaTargetSchema =
    {
        id: 'listSchemaTarget',
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
        },
    }

SchemaRegistry.getInstance().trackSchema(listSchemaTargetSchema)

export default listSchemaTargetSchema
