import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

const didLeaveOrganizationEmitPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.DidLeaveOrganizationEmitPayloadSchema =
	{
		id: 'didLeaveOrganizationEmitPayload',
		version: 'v2020_12_25',
		namespace: 'Mercury',
		name: '',
		fields: {
			/** . */
			personId: {
				type: 'id',
				isRequired: true,
				options: undefined,
			},
			/** . */
			roleId: {
				type: 'id',
				isRequired: true,
				options: undefined,
			},
			/** . */
			isLastRole: {
				type: 'boolean',
				isRequired: true,
				options: undefined,
			},
		},
	}

SchemaRegistry.getInstance().trackSchema(didLeaveOrganizationEmitPayloadSchema)

export default didLeaveOrganizationEmitPayloadSchema
