import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

const listPeopleEmitTargetSchema: SpruceSchemas.Mercury.v2020_12_25.ListPeopleEmitTargetSchema =
    {
        id: 'listPeopleEmitTarget',
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

SchemaRegistry.getInstance().trackSchema(listPeopleEmitTargetSchema)

export default listPeopleEmitTargetSchema
