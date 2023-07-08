import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

const getPersonEmitTargetSchema: SpruceSchemas.Mercury.v2020_12_25.GetPersonEmitTargetSchema =
	{
		id: 'getPersonEmitTarget',
		version: 'v2020_12_25',
		namespace: 'Mercury',
		name: '',
		fields: {
			/** . */
			personId: {
				type: 'id',
				options: undefined,
			},
			/** . */
			phone: {
				type: 'phone',
				options: undefined,
			},
			/** . */
			locationId: {
				type: 'id',
				options: undefined,
			},
		},
	}

SchemaRegistry.getInstance().trackSchema(getPersonEmitTargetSchema)

export default getPersonEmitTargetSchema
