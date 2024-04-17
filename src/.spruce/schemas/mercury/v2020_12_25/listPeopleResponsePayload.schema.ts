import { SchemaRegistry } from '@sprucelabs/schema'
import listPersonSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/list-person.schema'
import { SpruceSchemas } from '../../schemas.types'

const listPeopleResponsePayloadSchema: SpruceSchemas.Mercury.v2020_12_25.ListPeopleResponsePayloadSchema =
    {
        id: 'listPeopleResponsePayload',
        version: 'v2020_12_25',
        namespace: 'Mercury',
        name: '',
        fields: {
            /** . */
            people: {
                type: 'schema',
                isRequired: true,
                isArray: true,
                minArrayLength: 0,
                options: { schema: listPersonSchema_v2020_12_25 },
            },
        },
    }

SchemaRegistry.getInstance().trackSchema(listPeopleResponsePayloadSchema)

export default listPeopleResponsePayloadSchema
