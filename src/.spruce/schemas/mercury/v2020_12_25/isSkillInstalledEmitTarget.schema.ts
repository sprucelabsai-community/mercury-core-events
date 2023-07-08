import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

const isSkillInstalledEmitTargetSchema: SpruceSchemas.Mercury.v2020_12_25.IsSkillInstalledEmitTargetSchema =
	{
		id: 'isSkillInstalledEmitTarget',
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

SchemaRegistry.getInstance().trackSchema(isSkillInstalledEmitTargetSchema)

export default isSkillInstalledEmitTargetSchema
