import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

const listInstalledSkillsSkillsResponsePayloadSchema: SpruceSchemas.Mercury.v2020_12_25.ListInstalledSkillsSkillsResponsePayloadSchema =
    {
        id: 'listInstalledSkillsSkillsResponsePayload',
        version: 'v2020_12_25',
        namespace: 'Mercury',
        name: '',
        fields: {
            /** Id. */
            id: {
                label: 'Id',
                type: 'id',
                isRequired: true,
                options: undefined,
            },
            /** Name. */
            name: {
                label: 'Name',
                type: 'text',
                isRequired: true,
                options: undefined,
            },
            /** Description. */
            description: {
                label: 'Description',
                type: 'text',
                options: undefined,
            },
            /** Namespace. */
            slug: {
                label: 'Namespace',
                type: 'text',
                isRequired: true,
                options: undefined,
            },
            /** Published. Does this skill show up in the marketplace and can other devs use it as a dependency? */
            isPublished: {
                label: 'Published',
                type: 'boolean',
                hint: 'Does this skill show up in the marketplace and can other devs use it as a dependency?',
                options: undefined,
            },
            /** Global. Does this skill require needing to be installed anywhere. */
            canBeInstalled: {
                label: 'Global',
                type: 'boolean',
                hint: 'Does this skill require needing to be installed anywhere.',
                defaultValue: true,
                options: undefined,
            },
            /** . */
            dateCreated: {
                type: 'dateTime',
                isRequired: true,
                options: undefined,
            },
            /** . */
            dateDeleted: {
                type: 'dateTime',
                options: undefined,
            },
        },
    }

SchemaRegistry.getInstance().trackSchema(
    listInstalledSkillsSkillsResponsePayloadSchema
)

export default listInstalledSkillsSkillsResponsePayloadSchema
