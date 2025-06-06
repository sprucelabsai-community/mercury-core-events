/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable no-redeclare */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/order */

export { SpruceSchemas } from '@sprucelabs/spruce-core-schemas/build/.spruce/schemas/core.schemas.types'

import { default as SchemaEntity } from '@sprucelabs/schema'



import * as SpruceSchema from '@sprucelabs/schema'

import '@sprucelabs/spruce-event-utils'
import * as MercuryTypes from '@sprucelabs/mercury-types'
import '@sprucelabs/mercury-types'

declare module '@sprucelabs/spruce-core-schemas/build/.spruce/schemas/core.schemas.types' {


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface DidUpdatePersonEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource | undefined | null
				
				'target'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventTarget | undefined | null
				
				'payload': SpruceSchemas.Mercury.v2020_12_25.DidUpdatePersonEmitPayload
		}

		interface DidUpdatePersonEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'didUpdatePersonEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.DidUpdatePersonEmitPayloadSchema,}
			            },
			    }
		}

		interface DidUpdatePersonEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.DidUpdatePersonEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface DidInstallEmitTarget {
			
				
				'organizationId': string
				
				'skillId': string
		}

		interface DidInstallEmitTargetSchema extends SpruceSchema.Schema {
			id: 'didInstallEmitTarget',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'organizationId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'skillId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface DidInstallEmitTargetEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.DidInstallEmitTargetSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface DidInstallEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource | undefined | null
				
				'target': SpruceSchemas.Mercury.v2020_12_25.DidInstallEmitTarget
		}

		interface DidInstallEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'didInstallEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.DidInstallEmitTargetSchema,}
			            },
			    }
		}

		interface DidInstallEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.DidInstallEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface DidInstallResponsePayload {
			
		}

		interface DidInstallResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'didInstallResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			    }
		}

		interface DidInstallResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.DidInstallResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface DidJoinOrganizationEmitTarget {
			
				
				'organizationId': string
				
				'locationId'?: string | undefined | null
		}

		interface DidJoinOrganizationEmitTargetSchema extends SpruceSchema.Schema {
			id: 'didJoinOrganizationEmitTarget',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'organizationId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'locationId': {
			                type: 'id',
			                options: undefined
			            },
			    }
		}

		interface DidJoinOrganizationEmitTargetEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.DidJoinOrganizationEmitTargetSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface DidJoinOrganizationEmitPayload {
			
				
				'personId': string
				
				'roleId': string
				
				'isFirstRole': boolean
				
				'macAddress'?: string | undefined | null
		}

		interface DidJoinOrganizationEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'didJoinOrganizationEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'personId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'roleId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'isFirstRole': {
			                type: 'boolean',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'macAddress': {
			                type: 'id',
			                options: undefined
			            },
			    }
		}

		interface DidJoinOrganizationEmitPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.DidJoinOrganizationEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface DidJoinOrganizationEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource | undefined | null
				
				'target': SpruceSchemas.Mercury.v2020_12_25.DidJoinOrganizationEmitTarget
				
				'payload': SpruceSchemas.Mercury.v2020_12_25.DidJoinOrganizationEmitPayload
		}

		interface DidJoinOrganizationEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'didJoinOrganizationEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.DidJoinOrganizationEmitTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.DidJoinOrganizationEmitPayloadSchema,}
			            },
			    }
		}

		interface DidJoinOrganizationEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.DidJoinOrganizationEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface MessageTemplateAddons {
			
				
				'nextINeedYouTo'?: string[] | undefined | null
				
				'youShouldKnowThat'?: string[] | undefined | null
				
				'links'?: SpruceSchemas.Spruce.v2020_07_22.Link[] | undefined | null
		}

		interface MessageTemplateAddonsSchema extends SpruceSchema.Schema {
			id: 'messageTemplateAddons',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'nextINeedYouTo': {
			                type: 'text',
			                isArray: true,
			                options: undefined
			            },
			            /** . */
			            'youShouldKnowThat': {
			                type: 'text',
			                isArray: true,
			                options: undefined
			            },
			            /** . */
			            'links': {
			                type: 'schema',
			                isArray: true,
			                minArrayLength: 0,
			                options: {schema: SpruceSchemas.Spruce.v2020_07_22.LinkSchema,}
			            },
			    }
		}

		interface MessageTemplateAddonsEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.MessageTemplateAddonsSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface DidJoinOrganizationResponsePayload {
			
				
				'messaging'?: SpruceSchemas.Mercury.v2020_12_25.MessageTemplateAddons | undefined | null
		}

		interface DidJoinOrganizationResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'didJoinOrganizationResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'messaging': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.MessageTemplateAddonsSchema,}
			            },
			    }
		}

		interface DidJoinOrganizationResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.DidJoinOrganizationResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface DidLeaveOrganizationEmitTarget {
			
				
				'organizationId': string
				
				'locationId'?: string | undefined | null
		}

		interface DidLeaveOrganizationEmitTargetSchema extends SpruceSchema.Schema {
			id: 'didLeaveOrganizationEmitTarget',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'organizationId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'locationId': {
			                type: 'id',
			                options: undefined
			            },
			    }
		}

		interface DidLeaveOrganizationEmitTargetEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.DidLeaveOrganizationEmitTargetSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface DidLeaveOrganizationEmitPayload {
			
				
				'personId': string
				
				'roleId': string
				
				'isLastRole': boolean
		}

		interface DidLeaveOrganizationEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'didLeaveOrganizationEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'personId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'roleId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'isLastRole': {
			                type: 'boolean',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface DidLeaveOrganizationEmitPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.DidLeaveOrganizationEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface DidLeaveOrganizationEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource | undefined | null
				
				'target': SpruceSchemas.Mercury.v2020_12_25.DidLeaveOrganizationEmitTarget
				
				'payload': SpruceSchemas.Mercury.v2020_12_25.DidLeaveOrganizationEmitPayload
		}

		interface DidLeaveOrganizationEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'didLeaveOrganizationEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.DidLeaveOrganizationEmitTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.DidLeaveOrganizationEmitPayloadSchema,}
			            },
			    }
		}

		interface DidLeaveOrganizationEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.DidLeaveOrganizationEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface DidLeaveOrganizationResponsePayload {
			
		}

		interface DidLeaveOrganizationResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'didLeaveOrganizationResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			    }
		}

		interface DidLeaveOrganizationResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.DidLeaveOrganizationResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface DidLoginEmitPayload {
			
				
				'person': SpruceSchemas.Mercury.v2020_12_25.PersonWithMac
		}

		interface DidLoginEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'didLoginEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'person': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.PersonWithMacSchema,}
			            },
			    }
		}

		interface DidLoginEmitPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.DidLoginEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface DidLoginEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource | undefined | null
				
				'target'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventTarget | undefined | null
				
				'payload': SpruceSchemas.Mercury.v2020_12_25.DidLoginEmitPayload
		}

		interface DidLoginEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'didLoginEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.DidLoginEmitPayloadSchema,}
			            },
			    }
		}

		interface DidLoginEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.DidLoginEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface DidMessageEmitPayload {
			
				
				'message': SpruceSchemas.Spruce.v2020_07_22.Message
				
				'conversationState'?: string | undefined | null
				
				'topic'?: string | undefined | null
		}

		interface DidMessageEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'didMessageEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'message': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Spruce.v2020_07_22.MessageSchema,}
			            },
			            /** . */
			            'conversationState': {
			                type: 'text',
			                options: undefined
			            },
			            /** . */
			            'topic': {
			                type: 'text',
			                options: undefined
			            },
			    }
		}

		interface DidMessageEmitPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.DidMessageEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface DidMessageEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource | undefined | null
				
				'target'?: SpruceSchemas.Spruce.v2020_07_22.MessageTarget | undefined | null
				
				'payload': SpruceSchemas.Mercury.v2020_12_25.DidMessageEmitPayload
		}

		interface DidMessageEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'didMessageEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Spruce.v2020_07_22.MessageTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.DidMessageEmitPayloadSchema,}
			            },
			    }
		}

		interface DidMessageEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.DidMessageEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ConversationTopic {
			
				
				'key': string
				
				'confidence': number
				
				'label': string
		}

		interface ConversationTopicSchema extends SpruceSchema.Schema {
			id: 'conversationTopic',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'key': {
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'confidence': {
			                type: 'number',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'label': {
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface ConversationTopicEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ConversationTopicSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface DidMessageResponsePayload {
			
				
				'transitionConversationTo'?: ("greeting" | "discovery" | "topic" | "closing") | undefined | null
				
				'repairs'?: string[] | undefined | null
				
				'topicChangers'?: string[] | undefined | null
				
				'utterance'?: string | undefined | null
				
				'suggestedTopics'?: SpruceSchemas.Mercury.v2020_12_25.ConversationTopic[] | undefined | null
		}

		interface DidMessageResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'didMessageResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'transitionConversationTo': {
			                type: 'select',
			                options: {choices: [{"label":"Greeting","value":"greeting"},{"label":"Discovery","value":"discovery"},{"label":"Topic","value":"topic"},{"label":"Closing","value":"closing"}],}
			            },
			            /** . */
			            'repairs': {
			                type: 'text',
			                isArray: true,
			                options: undefined
			            },
			            /** . */
			            'topicChangers': {
			                type: 'text',
			                isArray: true,
			                options: undefined
			            },
			            /** . */
			            'utterance': {
			                type: 'text',
			                options: undefined
			            },
			            /** . */
			            'suggestedTopics': {
			                type: 'schema',
			                isArray: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.ConversationTopicSchema,}
			            },
			    }
		}

		interface DidMessageResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.DidMessageResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface DidSignupEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource | undefined | null
				
				'target'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventTarget | undefined | null
				
				'payload': SpruceSchemas.Mercury.v2020_12_25.DidSignupEmitPayload
		}

		interface DidSignupEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'didSignupEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.DidSignupEmitPayloadSchema,}
			            },
			    }
		}

		interface DidSignupEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.DidSignupEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface PersonWithMac {
			
				/** Id. */
				'id': string
				/** First name. */
				'firstName'?: string | undefined | null
				/** Last name. */
				'lastName'?: string | undefined | null
				/** Casual name. The name you can use when talking to this person. */
				'casualName': string
				/** Timezone. */
				'timezone'?: ("UTC" | "Pacific/Honolulu" | "America/Anchorage" | "America/Los_Angeles" | "America/Denver" | "America/Phoenix" | "America/Chicago" | "America/Guatemala" | "America/New_York" | "America/Panama" | "America/Sao_Paulo" | "America/Argentina/Buenos_Aires" | "Europe/London" | "Europe/Berlin" | "Europe/Athens" | "Europe/Moscow" | "Africa/Lagos" | "Africa/Cairo" | "Africa/Johannesburg" | "Asia/Dubai" | "Asia/Karachi" | "Asia/Kolkata" | "Asia/Shanghai" | "Asia/Tokyo" | "Asia/Seoul" | "Australia/Perth" | "Australia/Adelaide" | "Australia/Sydney" | "Pacific/Auckland" | "Pacific/Port_Moresby") | undefined | null
				/** Phone. A number that can be texted */
				'phone'?: string | undefined | null
				/** Username. An optional username if the person does not want to login using their phone */
				'username'?: string | undefined | null
				/** Avatar src. */
				'avatar'?: SpruceSchema.ImageFieldValue | undefined | null
				
				'dateCreated': SpruceSchema.DateTimeFieldValue
				
				'dateUpdated'?: SpruceSchema.DateTimeFieldValue | undefined | null
				
				'dateScrambled'?: SpruceSchema.DateTimeFieldValue | undefined | null
				
				'macAddress'?: string | undefined | null
		}

		interface PersonWithMacSchema extends SpruceSchema.Schema {
			id: 'personWithMac',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Id. */
			            'id': {
			                label: 'Id',
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** First name. */
			            'firstName': {
			                label: 'First name',
			                type: 'text',
			                isPrivate: true,
			                options: undefined
			            },
			            /** Last name. */
			            'lastName': {
			                label: 'Last name',
			                type: 'text',
			                isPrivate: true,
			                options: undefined
			            },
			            /** Casual name. The name you can use when talking to this person. */
			            'casualName': {
			                label: 'Casual name',
			                type: 'text',
			                isRequired: true,
			                hint: 'The name you can use when talking to this person.',
			                options: undefined
			            },
			            /** Timezone. */
			            'timezone': {
			                label: 'Timezone',
			                type: 'select',
			                options: {choices: [{"value":"UTC","label":"UTC"},{"value":"Pacific/Honolulu","label":"Hawaii Time"},{"value":"America/Anchorage","label":"Alaska Time"},{"value":"America/Los_Angeles","label":"Pacific Time"},{"value":"America/Denver","label":"Mountain Time"},{"value":"America/Phoenix","label":"Phoenix Time (No DST)"},{"value":"America/Chicago","label":"Central Time"},{"value":"America/Guatemala","label":"Central Standard Time (No DST)"},{"value":"America/New_York","label":"Eastern Time"},{"value":"America/Panama","label":"Eastern Standard Time (No DST)"},{"value":"America/Sao_Paulo","label":"Brasília Time"},{"value":"America/Argentina/Buenos_Aires","label":"Argentina Time (No DST)"},{"value":"Europe/London","label":"UK Time"},{"value":"Europe/Berlin","label":"Central Europe Time"},{"value":"Europe/Athens","label":"Eastern Europe Time"},{"value":"Europe/Moscow","label":"Moscow Time"},{"value":"Africa/Lagos","label":"West Africa Time"},{"value":"Africa/Cairo","label":"Eastern Africa Time"},{"value":"Africa/Johannesburg","label":"South Africa Time"},{"value":"Asia/Dubai","label":"Gulf Standard Time"},{"value":"Asia/Karachi","label":"Pakistan Time"},{"value":"Asia/Kolkata","label":"India Time"},{"value":"Asia/Shanghai","label":"China Time"},{"value":"Asia/Tokyo","label":"Japan Time"},{"value":"Asia/Seoul","label":"Korea Time"},{"value":"Australia/Perth","label":"Western Australia Time"},{"value":"Australia/Adelaide","label":"Central Australia Time"},{"value":"Australia/Sydney","label":"Eastern Australia Time"},{"value":"Pacific/Auckland","label":"New Zealand Time"},{"value":"Pacific/Port_Moresby","label":"Papua New Guinea Time (No DST)"}],}
			            },
			            /** Phone. A number that can be texted */
			            'phone': {
			                label: 'Phone',
			                type: 'phone',
			                isPrivate: true,
			                hint: 'A number that can be texted',
			                options: undefined
			            },
			            /** Username. An optional username if the person does not want to login using their phone */
			            'username': {
			                label: 'Username',
			                type: 'text',
			                isPrivate: true,
			                hint: 'An optional username if the person does not want to login using their phone',
			                options: undefined
			            },
			            /** Avatar src. */
			            'avatar': {
			                label: 'Avatar src',
			                type: 'image',
			                options: {requiredSizes: ["*"],}
			            },
			            /** . */
			            'dateCreated': {
			                type: 'dateTime',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'dateUpdated': {
			                type: 'dateTime',
			                options: undefined
			            },
			            /** . */
			            'dateScrambled': {
			                type: 'dateTime',
			                options: undefined
			            },
			            /** . */
			            'macAddress': {
			                type: 'text',
			                options: undefined
			            },
			    }
		}

		interface PersonWithMacEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.PersonWithMacSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface DidSignupEmitPayload {
			
				
				'person': SpruceSchemas.Mercury.v2020_12_25.PersonWithMac
		}

		interface DidSignupEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'didSignupEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'person': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.PersonWithMacSchema,}
			            },
			    }
		}

		interface DidSignupEmitPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.DidSignupEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface DidUpdateAuthorizerStatusEmitTarget {
			
				
				'organizationId'?: string | undefined | null
				
				'locationId'?: string | undefined | null
		}

		interface DidUpdateAuthorizerStatusEmitTargetSchema extends SpruceSchema.Schema {
			id: 'didUpdateAuthorizerStatusEmitTarget',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'organizationId': {
			                type: 'id',
			                options: undefined
			            },
			            /** . */
			            'locationId': {
			                type: 'id',
			                options: undefined
			            },
			    }
		}

		interface DidUpdateAuthorizerStatusEmitTargetEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.DidUpdateAuthorizerStatusEmitTargetSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface UpdateAuthorizerStatusPerson {
			
				
				'id': string
				
				'casualName': string
		}

		interface UpdateAuthorizerStatusPersonSchema extends SpruceSchema.Schema {
			id: 'updateAuthorizerStatusPerson',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'id': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'casualName': {
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface UpdateAuthorizerStatusPersonEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.UpdateAuthorizerStatusPersonSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface DidUpdateAuthorizerStatusEmitPayload {
			
				
				'person': SpruceSchemas.Mercury.v2020_12_25.UpdateAuthorizerStatusPerson
				
				'statuses': ("clockedIn" | "clockedOut" | "onPrem" | "offPrem")[]
		}

		interface DidUpdateAuthorizerStatusEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'didUpdateAuthorizerStatusEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'person': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.UpdateAuthorizerStatusPersonSchema,}
			            },
			            /** . */
			            'statuses': {
			                type: 'select',
			                isRequired: true,
			                isArray: true,
			                minArrayLength: 0,
			                options: {choices: [{"label":"Clocked in","value":"clockedIn"},{"label":"Clocked out","value":"clockedOut"},{"label":"On premises","value":"onPrem"},{"label":"Off premises","value":"offPrem"}],}
			            },
			    }
		}

		interface DidUpdateAuthorizerStatusEmitPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.DidUpdateAuthorizerStatusEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface DidUpdateAuthorizerStatusEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource | undefined | null
				
				'target'?: SpruceSchemas.Mercury.v2020_12_25.DidUpdateAuthorizerStatusEmitTarget | undefined | null
				
				'payload': SpruceSchemas.Mercury.v2020_12_25.DidUpdateAuthorizerStatusEmitPayload
		}

		interface DidUpdateAuthorizerStatusEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'didUpdateAuthorizerStatusEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.DidUpdateAuthorizerStatusEmitTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.DidUpdateAuthorizerStatusEmitPayloadSchema,}
			            },
			    }
		}

		interface DidUpdateAuthorizerStatusEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.DidUpdateAuthorizerStatusEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface DidUpdateFeedEmitTarget {
			
				
				'locationId'?: string | undefined | null
				
				'organizationId'?: string | undefined | null
				
				'skillId'?: string | undefined | null
		}

		interface DidUpdateFeedEmitTargetSchema extends SpruceSchema.Schema {
			id: 'didUpdateFeedEmitTarget',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'locationId': {
			                type: 'id',
			                options: undefined
			            },
			            /** . */
			            'organizationId': {
			                type: 'id',
			                options: undefined
			            },
			            /** . */
			            'skillId': {
			                type: 'id',
			                options: undefined
			            },
			    }
		}

		interface DidUpdateFeedEmitTargetEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.DidUpdateFeedEmitTargetSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface DidUpdateFeedEmitPayload {
			
				
				'item': SpruceSchemas.Spruce.v2020_07_22.FeedItem
		}

		interface DidUpdateFeedEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'didUpdateFeedEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'item': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Spruce.v2020_07_22.FeedItemSchema,}
			            },
			    }
		}

		interface DidUpdateFeedEmitPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.DidUpdateFeedEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface DidUpdateFeedEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource | undefined | null
				
				'target'?: SpruceSchemas.Mercury.v2020_12_25.DidUpdateFeedEmitTarget | undefined | null
				
				'payload': SpruceSchemas.Mercury.v2020_12_25.DidUpdateFeedEmitPayload
		}

		interface DidUpdateFeedEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'didUpdateFeedEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.DidUpdateFeedEmitTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.DidUpdateFeedEmitPayloadSchema,}
			            },
			    }
		}

		interface DidUpdateFeedEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.DidUpdateFeedEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface DidUpdatePersonEmitPayload {
			
				
				'person': SpruceSchemas.Spruce.v2020_07_22.Person
		}

		interface DidUpdatePersonEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'didUpdatePersonEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'person': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Spruce.v2020_07_22.PersonSchema,}
			            },
			    }
		}

		interface DidUpdatePersonEmitPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.DidUpdatePersonEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface AddRoleEmitTarget {
			
				
				'organizationId'?: string | undefined | null
				
				'locationId'?: string | undefined | null
		}

		interface AddRoleEmitTargetSchema extends SpruceSchema.Schema {
			id: 'addRoleEmitTarget',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'organizationId': {
			                type: 'id',
			                options: undefined
			            },
			            /** . */
			            'locationId': {
			                type: 'id',
			                options: undefined
			            },
			    }
		}

		interface AddRoleEmitTargetEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.AddRoleEmitTargetSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface AddRoleEmitPayload {
			
				
				'personId': string
				
				'roleId': string
		}

		interface AddRoleEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'addRoleEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'personId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'roleId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface AddRoleEmitPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.AddRoleEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface AddRoleEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource | undefined | null
				
				'target'?: SpruceSchemas.Mercury.v2020_12_25.AddRoleEmitTarget | undefined | null
				
				'payload': SpruceSchemas.Mercury.v2020_12_25.AddRoleEmitPayload
		}

		interface AddRoleEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'addRoleEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.AddRoleEmitTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.AddRoleEmitPayloadSchema,}
			            },
			    }
		}

		interface AddRoleEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.AddRoleEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface AddRoleResponsePayload {
			
		}

		interface AddRoleResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'addRoleResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			    }
		}

		interface AddRoleResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.AddRoleResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface AuthenticateEmitPayload {
			
				
				'token'?: string | undefined | null
				
				'skillId'?: string | undefined | null
				
				'apiKey'?: string | undefined | null
		}

		interface AuthenticateEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'authenticateEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'token': {
			                type: 'text',
			                options: undefined
			            },
			            /** . */
			            'skillId': {
			                type: 'text',
			                options: undefined
			            },
			            /** . */
			            'apiKey': {
			                type: 'text',
			                options: undefined
			            },
			    }
		}

		interface AuthenticateEmitPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.AuthenticateEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface AuthenticateEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource | undefined | null
				
				'payload'?: SpruceSchemas.Mercury.v2020_12_25.AuthenticateEmitPayload | undefined | null
		}

		interface AuthenticateEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'authenticateEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.AuthenticateEmitPayloadSchema,}
			            },
			    }
		}

		interface AuthenticateEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.AuthenticateEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface AuthSchema {
			
				
				'person'?: SpruceSchemas.Spruce.v2020_07_22.Person | undefined | null
				
				'skill'?: SpruceSchemas.Spruce.v2020_07_22.Skill | undefined | null
		}

		interface AuthSchemaSchema extends SpruceSchema.Schema {
			id: 'authSchema',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'person': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Spruce.v2020_07_22.PersonSchema,}
			            },
			            /** . */
			            'skill': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Spruce.v2020_07_22.SkillSchema,}
			            },
			    }
		}

		interface AuthSchemaEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.AuthSchemaSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface AuthenticateResponsePayload {
			
				
				'type': ("authenticated" | "anonymous")
				
				'auth': SpruceSchemas.Mercury.v2020_12_25.AuthSchema
		}

		interface AuthenticateResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'authenticateResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'type': {
			                type: 'select',
			                isRequired: true,
			                options: {choices: [{"value":"authenticated","label":"Authenticated"},{"value":"anonymous","label":"Anonymous"}],}
			            },
			            /** . */
			            'auth': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.AuthSchemaSchema,}
			            },
			    }
		}

		interface AuthenticateResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.AuthenticateResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface CanListenEmitPayload {
			
				
				'authorizerStatuses'?: ("clockedIn" | "clockedOut" | "onPrem" | "offPrem") | undefined | null
				
				'fullyQualifiedEventName': string
		}

		interface CanListenEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'canListenEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'authorizerStatuses': {
			                type: 'select',
			                options: {choices: [{"label":"Clocked in","value":"clockedIn"},{"label":"Clocked out","value":"clockedOut"},{"label":"On premises","value":"onPrem"},{"label":"Off premises","value":"offPrem"}],}
			            },
			            /** . */
			            'fullyQualifiedEventName': {
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface CanListenEmitPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.CanListenEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface CanListenEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource | undefined | null
				
				'payload': SpruceSchemas.Mercury.v2020_12_25.CanListenEmitPayload
		}

		interface CanListenEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'canListenEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.CanListenEmitPayloadSchema,}
			            },
			    }
		}

		interface CanListenEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.CanListenEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface CanListenResponsePayload {
			
				
				'can'?: boolean | undefined | null
		}

		interface CanListenResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'canListenResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'can': {
			                type: 'boolean',
			                options: undefined
			            },
			    }
		}

		interface CanListenResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.CanListenResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ConfirmPinEmitTarget {
			
				
				'locationId'?: string | undefined | null
		}

		interface ConfirmPinEmitTargetSchema extends SpruceSchema.Schema {
			id: 'confirmPinEmitTarget',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'locationId': {
			                type: 'id',
			                options: undefined
			            },
			    }
		}

		interface ConfirmPinEmitTargetEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ConfirmPinEmitTargetSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ConfirmPinEmitPayload {
			
				
				'challenge': string
				
				'pin': string
				
				'macAddress'?: string | undefined | null
		}

		interface ConfirmPinEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'confirmPinEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'challenge': {
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'pin': {
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'macAddress': {
			                type: 'id',
			                options: undefined
			            },
			    }
		}

		interface ConfirmPinEmitPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ConfirmPinEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ConfirmPinEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource | undefined | null
				
				'target'?: SpruceSchemas.Mercury.v2020_12_25.ConfirmPinEmitTarget | undefined | null
				
				'payload': SpruceSchemas.Mercury.v2020_12_25.ConfirmPinEmitPayload
		}

		interface ConfirmPinEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'confirmPinEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.ConfirmPinEmitTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.ConfirmPinEmitPayloadSchema,}
			            },
			    }
		}

		interface ConfirmPinEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ConfirmPinEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ConfirmPinRespondPayload {
			
				
				'person': SpruceSchemas.Spruce.v2020_07_22.Person
				
				'token': string
		}

		interface ConfirmPinRespondPayloadSchema extends SpruceSchema.Schema {
			id: 'confirmPinRespondPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'person': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Spruce.v2020_07_22.PersonSchema,}
			            },
			            /** . */
			            'token': {
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface ConfirmPinRespondPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ConfirmPinRespondPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface CreateLocationEmitTarget {
			
				
				'organizationId': string
		}

		interface CreateLocationEmitTargetSchema extends SpruceSchema.Schema {
			id: 'createLocationEmitTarget',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'organizationId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface CreateLocationEmitTargetEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.CreateLocationEmitTargetSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface CreateLocationEmitPayload {
			
				/** Name. */
				'name': string
				/** Location number. You can use other symbols, like # or dashes. #123 or 32-US-5 */
				'num'?: string | undefined | null
				/** Public. Is this location viewable by guests? */
				'isPublic'?: boolean | undefined | null
				/** Main Phone. */
				'phone'?: string | undefined | null
				/** Timezone. */
				'timezone'?: ("UTC" | "Pacific/Honolulu" | "America/Anchorage" | "America/Los_Angeles" | "America/Denver" | "America/Phoenix" | "America/Chicago" | "America/Guatemala" | "America/New_York" | "America/Panama" | "America/Sao_Paulo" | "America/Argentina/Buenos_Aires" | "Europe/London" | "Europe/Berlin" | "Europe/Athens" | "Europe/Moscow" | "Africa/Lagos" | "Africa/Cairo" | "Africa/Johannesburg" | "Asia/Dubai" | "Asia/Karachi" | "Asia/Kolkata" | "Asia/Shanghai" | "Asia/Tokyo" | "Asia/Seoul" | "Australia/Perth" | "Australia/Adelaide" | "Australia/Sydney" | "Pacific/Auckland" | "Pacific/Port_Moresby") | undefined | null
				/** Address. */
				'address'?: SpruceSchema.AddressFieldValue | undefined | null
				/** Virtual. Is this a virtual location? */
				'isVirtual'?: boolean | undefined | null
				
				'dateDeleted'?: SpruceSchema.DateTimeFieldValue | undefined | null
				
				'slug'?: string | undefined | null
		}

		interface CreateLocationEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'createLocationEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Name. */
			            'name': {
			                label: 'Name',
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			            /** Location number. You can use other symbols, like # or dashes. #123 or 32-US-5 */
			            'num': {
			                label: 'Location number',
			                type: 'text',
			                hint: 'You can use other symbols, like # or dashes. #123 or 32-US-5',
			                options: undefined
			            },
			            /** Public. Is this location viewable by guests? */
			            'isPublic': {
			                label: 'Public',
			                type: 'boolean',
			                hint: 'Is this location viewable by guests?',
			                defaultValue: false,
			                options: undefined
			            },
			            /** Main Phone. */
			            'phone': {
			                label: 'Main Phone',
			                type: 'phone',
			                options: undefined
			            },
			            /** Timezone. */
			            'timezone': {
			                label: 'Timezone',
			                type: 'select',
			                options: {choices: [{"value":"UTC","label":"UTC"},{"value":"Pacific/Honolulu","label":"Hawaii Time"},{"value":"America/Anchorage","label":"Alaska Time"},{"value":"America/Los_Angeles","label":"Pacific Time"},{"value":"America/Denver","label":"Mountain Time"},{"value":"America/Phoenix","label":"Phoenix Time (No DST)"},{"value":"America/Chicago","label":"Central Time"},{"value":"America/Guatemala","label":"Central Standard Time (No DST)"},{"value":"America/New_York","label":"Eastern Time"},{"value":"America/Panama","label":"Eastern Standard Time (No DST)"},{"value":"America/Sao_Paulo","label":"Brasília Time"},{"value":"America/Argentina/Buenos_Aires","label":"Argentina Time (No DST)"},{"value":"Europe/London","label":"UK Time"},{"value":"Europe/Berlin","label":"Central Europe Time"},{"value":"Europe/Athens","label":"Eastern Europe Time"},{"value":"Europe/Moscow","label":"Moscow Time"},{"value":"Africa/Lagos","label":"West Africa Time"},{"value":"Africa/Cairo","label":"Eastern Africa Time"},{"value":"Africa/Johannesburg","label":"South Africa Time"},{"value":"Asia/Dubai","label":"Gulf Standard Time"},{"value":"Asia/Karachi","label":"Pakistan Time"},{"value":"Asia/Kolkata","label":"India Time"},{"value":"Asia/Shanghai","label":"China Time"},{"value":"Asia/Tokyo","label":"Japan Time"},{"value":"Asia/Seoul","label":"Korea Time"},{"value":"Australia/Perth","label":"Western Australia Time"},{"value":"Australia/Adelaide","label":"Central Australia Time"},{"value":"Australia/Sydney","label":"Eastern Australia Time"},{"value":"Pacific/Auckland","label":"New Zealand Time"},{"value":"Pacific/Port_Moresby","label":"Papua New Guinea Time (No DST)"}],}
			            },
			            /** Address. */
			            'address': {
			                label: 'Address',
			                type: 'address',
			                options: undefined
			            },
			            /** Virtual. Is this a virtual location? */
			            'isVirtual': {
			                label: 'Virtual',
			                type: 'boolean',
			                hint: 'Is this a virtual location?',
			                options: undefined
			            },
			            /** . */
			            'dateDeleted': {
			                type: 'dateTime',
			                options: undefined
			            },
			            /** . */
			            'slug': {
			                type: 'text',
			                options: undefined
			            },
			    }
		}

		interface CreateLocationEmitPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.CreateLocationEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface CreateLocationEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource | undefined | null
				
				'target': SpruceSchemas.Mercury.v2020_12_25.CreateLocationEmitTarget
				
				'payload': SpruceSchemas.Mercury.v2020_12_25.CreateLocationEmitPayload
		}

		interface CreateLocationEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'createLocationEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.CreateLocationEmitTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.CreateLocationEmitPayloadSchema,}
			            },
			    }
		}

		interface CreateLocationEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.CreateLocationEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface CreateLocationResponsePayload {
			
				
				'location': SpruceSchemas.Spruce.v2020_07_22.Location
		}

		interface CreateLocationResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'createLocationResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'location': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Spruce.v2020_07_22.LocationSchema,}
			            },
			    }
		}

		interface CreateLocationResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.CreateLocationResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface CreateOrgEmitPayload {
			
				/** Name. */
				'name': string
				/** Address. */
				'address'?: SpruceSchema.AddressFieldValue | undefined | null
				
				'slug'?: string | undefined | null
				/** Public. Is this organization viewable by guests? */
				'isPublic'?: boolean | undefined | null
		}

		interface CreateOrgEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'createOrgEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Name. */
			            'name': {
			                label: 'Name',
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			            /** Address. */
			            'address': {
			                label: 'Address',
			                type: 'address',
			                options: undefined
			            },
			            /** . */
			            'slug': {
			                type: 'text',
			                options: undefined
			            },
			            /** Public. Is this organization viewable by guests? */
			            'isPublic': {
			                label: 'Public',
			                type: 'boolean',
			                hint: 'Is this organization viewable by guests?',
			                defaultValue: false,
			                options: undefined
			            },
			    }
		}

		interface CreateOrgEmitPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.CreateOrgEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface CreateOrganizationEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource | undefined | null
				
				'payload': SpruceSchemas.Mercury.v2020_12_25.CreateOrgEmitPayload
		}

		interface CreateOrganizationEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'createOrganizationEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.CreateOrgEmitPayloadSchema,}
			            },
			    }
		}

		interface CreateOrganizationEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.CreateOrganizationEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface CreateOrgResponsePayload {
			
				
				'organization': SpruceSchemas.Spruce.v2020_07_22.Organization
		}

		interface CreateOrgResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'createOrgResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'organization': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Spruce.v2020_07_22.OrganizationSchema,}
			            },
			    }
		}

		interface CreateOrgResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.CreateOrgResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface CreatePersonEmitPayload {
			
				/** First name. */
				'firstName'?: string | undefined | null
				/** Last name. */
				'lastName'?: string | undefined | null
				/** Timezone. */
				'timezone'?: ("UTC" | "Pacific/Honolulu" | "America/Anchorage" | "America/Los_Angeles" | "America/Denver" | "America/Phoenix" | "America/Chicago" | "America/Guatemala" | "America/New_York" | "America/Panama" | "America/Sao_Paulo" | "America/Argentina/Buenos_Aires" | "Europe/London" | "Europe/Berlin" | "Europe/Athens" | "Europe/Moscow" | "Africa/Lagos" | "Africa/Cairo" | "Africa/Johannesburg" | "Asia/Dubai" | "Asia/Karachi" | "Asia/Kolkata" | "Asia/Shanghai" | "Asia/Tokyo" | "Asia/Seoul" | "Australia/Perth" | "Australia/Adelaide" | "Australia/Sydney" | "Pacific/Auckland" | "Pacific/Port_Moresby") | undefined | null
				/** Avatar src. */
				'avatar'?: SpruceSchema.ImageFieldValue | undefined | null
				
				'dateScrambled'?: SpruceSchema.DateTimeFieldValue | undefined | null
				/** Phone. A number that can be texted */
				'phone'?: string | undefined | null
				/** Username. An optional username if the person does not want to login using their phone */
				'username'?: string | undefined | null
				
				'password'?: string | undefined | null
				
				'securityQuestions'?: SpruceSchemas.Mercury.v2020_12_25.SecurityQuestion[] | undefined | null
		}

		interface CreatePersonEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'createPersonEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** First name. */
			            'firstName': {
			                label: 'First name',
			                type: 'text',
			                isPrivate: true,
			                options: undefined
			            },
			            /** Last name. */
			            'lastName': {
			                label: 'Last name',
			                type: 'text',
			                isPrivate: true,
			                options: undefined
			            },
			            /** Timezone. */
			            'timezone': {
			                label: 'Timezone',
			                type: 'select',
			                options: {choices: [{"value":"UTC","label":"UTC"},{"value":"Pacific/Honolulu","label":"Hawaii Time"},{"value":"America/Anchorage","label":"Alaska Time"},{"value":"America/Los_Angeles","label":"Pacific Time"},{"value":"America/Denver","label":"Mountain Time"},{"value":"America/Phoenix","label":"Phoenix Time (No DST)"},{"value":"America/Chicago","label":"Central Time"},{"value":"America/Guatemala","label":"Central Standard Time (No DST)"},{"value":"America/New_York","label":"Eastern Time"},{"value":"America/Panama","label":"Eastern Standard Time (No DST)"},{"value":"America/Sao_Paulo","label":"Brasília Time"},{"value":"America/Argentina/Buenos_Aires","label":"Argentina Time (No DST)"},{"value":"Europe/London","label":"UK Time"},{"value":"Europe/Berlin","label":"Central Europe Time"},{"value":"Europe/Athens","label":"Eastern Europe Time"},{"value":"Europe/Moscow","label":"Moscow Time"},{"value":"Africa/Lagos","label":"West Africa Time"},{"value":"Africa/Cairo","label":"Eastern Africa Time"},{"value":"Africa/Johannesburg","label":"South Africa Time"},{"value":"Asia/Dubai","label":"Gulf Standard Time"},{"value":"Asia/Karachi","label":"Pakistan Time"},{"value":"Asia/Kolkata","label":"India Time"},{"value":"Asia/Shanghai","label":"China Time"},{"value":"Asia/Tokyo","label":"Japan Time"},{"value":"Asia/Seoul","label":"Korea Time"},{"value":"Australia/Perth","label":"Western Australia Time"},{"value":"Australia/Adelaide","label":"Central Australia Time"},{"value":"Australia/Sydney","label":"Eastern Australia Time"},{"value":"Pacific/Auckland","label":"New Zealand Time"},{"value":"Pacific/Port_Moresby","label":"Papua New Guinea Time (No DST)"}],}
			            },
			            /** Avatar src. */
			            'avatar': {
			                label: 'Avatar src',
			                type: 'image',
			                options: {requiredSizes: ["*"],}
			            },
			            /** . */
			            'dateScrambled': {
			                type: 'dateTime',
			                options: undefined
			            },
			            /** Phone. A number that can be texted */
			            'phone': {
			                label: 'Phone',
			                type: 'phone',
			                isPrivate: true,
			                hint: 'A number that can be texted',
			                options: undefined
			            },
			            /** Username. An optional username if the person does not want to login using their phone */
			            'username': {
			                label: 'Username',
			                type: 'text',
			                isPrivate: true,
			                hint: 'An optional username if the person does not want to login using their phone',
			                options: undefined
			            },
			            /** . */
			            'password': {
			                type: 'text',
			                options: undefined
			            },
			            /** . */
			            'securityQuestions': {
			                type: 'schema',
			                isArray: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.SecurityQuestionSchema,}
			            },
			    }
		}

		interface CreatePersonEmitPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.CreatePersonEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface CreatePersonEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource | undefined | null
				
				'payload'?: SpruceSchemas.Mercury.v2020_12_25.CreatePersonEmitPayload | undefined | null
		}

		interface CreatePersonEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'createPersonEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.CreatePersonEmitPayloadSchema,}
			            },
			    }
		}

		interface CreatePersonEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.CreatePersonEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface CreatePersonResponsePayload {
			
				
				'person': SpruceSchemas.Spruce.v2020_07_22.Person
		}

		interface CreatePersonResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'createPersonResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'person': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Spruce.v2020_07_22.PersonSchema,}
			            },
			    }
		}

		interface CreatePersonResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.CreatePersonResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface CreateRoleEmitTarget {
			
				
				'organizationId': string
		}

		interface CreateRoleEmitTargetSchema extends SpruceSchema.Schema {
			id: 'createRoleEmitTarget',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'organizationId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface CreateRoleEmitTargetEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.CreateRoleEmitTargetSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface CreateRoleEmitPayload {
			
				/** Name. */
				'name': string
				/** Base. A best practices starting point for a role based on the generalized roles at a company. */
				'base'?: ("owner" | "groupManager" | "manager" | "teammate" | "anonymous" | "loggedIn" | "guest") | undefined | null
				/** Description. */
				'description'?: string | undefined | null
				
				'dateDeleted'?: number | undefined | null
				/** Public. Should I let people that are not part of this organization this role? */
				'isPublic'?: boolean | undefined | null
				
				'isMeta'?: boolean | undefined | null
		}

		interface CreateRoleEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'createRoleEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Name. */
			            'name': {
			                label: 'Name',
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			            /** Base. A best practices starting point for a role based on the generalized roles at a company. */
			            'base': {
			                label: 'Base',
			                type: 'select',
			                hint: 'A best practices starting point for a role based on the generalized roles at a company.',
			                options: {choices: [{"label":"Owner","value":"owner"},{"label":"Group manager","value":"groupManager"},{"label":"Manager","value":"manager"},{"label":"Teammate","value":"teammate"},{"label":"Anonymous","value":"anonymous"},{"label":"Logged in","value":"loggedIn"},{"label":"Guest","value":"guest"}],}
			            },
			            /** Description. */
			            'description': {
			                label: 'Description',
			                type: 'text',
			                options: undefined
			            },
			            /** . */
			            'dateDeleted': {
			                type: 'number',
			                options: undefined
			            },
			            /** Public. Should I let people that are not part of this organization this role? */
			            'isPublic': {
			                label: 'Public',
			                type: 'boolean',
			                hint: 'Should I let people that are not part of this organization this role?',
			                options: undefined
			            },
			            /** . */
			            'isMeta': {
			                type: 'boolean',
			                options: undefined
			            },
			    }
		}

		interface CreateRoleEmitPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.CreateRoleEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface CreateRoleEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource | undefined | null
				
				'target': SpruceSchemas.Mercury.v2020_12_25.CreateRoleEmitTarget
				
				'payload': SpruceSchemas.Mercury.v2020_12_25.CreateRoleEmitPayload
		}

		interface CreateRoleEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'createRoleEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.CreateRoleEmitTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.CreateRoleEmitPayloadSchema,}
			            },
			    }
		}

		interface CreateRoleEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.CreateRoleEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface CreateRoleResponsePayload {
			
				
				'role': SpruceSchemas.Spruce.v2020_07_22.Role
		}

		interface CreateRoleResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'createRoleResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'role': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Spruce.v2020_07_22.RoleSchema,}
			            },
			    }
		}

		interface CreateRoleResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.CreateRoleResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface DeleteLocationEmitTarget {
			
				
				'locationId': string
		}

		interface DeleteLocationEmitTargetSchema extends SpruceSchema.Schema {
			id: 'deleteLocationEmitTarget',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'locationId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface DeleteLocationEmitTargetEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.DeleteLocationEmitTargetSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface DeleteLocationEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource | undefined | null
				
				'target': SpruceSchemas.Mercury.v2020_12_25.DeleteLocationEmitTarget
		}

		interface DeleteLocationEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'deleteLocationEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.DeleteLocationEmitTargetSchema,}
			            },
			    }
		}

		interface DeleteLocationEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.DeleteLocationEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface DeleteLocationResponsePayload {
			
				
				'location': SpruceSchemas.Spruce.v2020_07_22.Location
		}

		interface DeleteLocationResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'deleteLocationResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'location': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Spruce.v2020_07_22.LocationSchema,}
			            },
			    }
		}

		interface DeleteLocationResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.DeleteLocationResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface DeleteOrganizationEmitTarget {
			
				
				'organizationId': string
		}

		interface DeleteOrganizationEmitTargetSchema extends SpruceSchema.Schema {
			id: 'deleteOrganizationEmitTarget',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'organizationId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface DeleteOrganizationEmitTargetEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.DeleteOrganizationEmitTargetSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface DeleteOrganizationEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource | undefined | null
				
				'target': SpruceSchemas.Mercury.v2020_12_25.DeleteOrganizationEmitTarget
		}

		interface DeleteOrganizationEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'deleteOrganizationEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.DeleteOrganizationEmitTargetSchema,}
			            },
			    }
		}

		interface DeleteOrganizationEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.DeleteOrganizationEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface DeleteOrgResponsePayload {
			
				
				'organization': SpruceSchemas.Spruce.v2020_07_22.Organization
		}

		interface DeleteOrgResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'deleteOrgResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'organization': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Spruce.v2020_07_22.OrganizationSchema,}
			            },
			    }
		}

		interface DeleteOrgResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.DeleteOrgResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface DeleteRoleEmitTarget {
			
				
				'roleId': string
				
				'organizationId': string
		}

		interface DeleteRoleEmitTargetSchema extends SpruceSchema.Schema {
			id: 'deleteRoleEmitTarget',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'roleId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'organizationId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface DeleteRoleEmitTargetEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.DeleteRoleEmitTargetSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface DeleteRoleEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource | undefined | null
				
				'target': SpruceSchemas.Mercury.v2020_12_25.DeleteRoleEmitTarget
		}

		interface DeleteRoleEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'deleteRoleEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.DeleteRoleEmitTargetSchema,}
			            },
			    }
		}

		interface DeleteRoleEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.DeleteRoleEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface DeleteRoleResponsePayload {
			
				
				'role': SpruceSchemas.Spruce.v2020_07_22.Role
		}

		interface DeleteRoleResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'deleteRoleResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'role': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Spruce.v2020_07_22.RoleSchema,}
			            },
			    }
		}

		interface DeleteRoleResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.DeleteRoleResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface DoesHonorPermissionContractEmitTarget {
			
				
				'organizationId'?: string | undefined | null
				
				'locationId'?: string | undefined | null
		}

		interface DoesHonorPermissionContractEmitTargetSchema extends SpruceSchema.Schema {
			id: 'doesHonorPermissionContractEmitTarget',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'organizationId': {
			                type: 'id',
			                options: undefined
			            },
			            /** . */
			            'locationId': {
			                type: 'id',
			                options: undefined
			            },
			    }
		}

		interface DoesHonorPermissionContractEmitTargetEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.DoesHonorPermissionContractEmitTargetSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface DoesHonorPermissionContractEmitPayload {
			
				
				'id': (MercuryTypes.PermissionContractId)
		}

		interface DoesHonorPermissionContractEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'doesHonorPermissionContractEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			importsWhenRemote: ['import * as MercuryTypes from \'@sprucelabs/mercury-types\'',],
			    fields: {
			            /** . */
			            'id': {
			                type: 'raw',
			                isRequired: true,
			                options: {valueType: `MercuryTypes.PermissionContractId`,}
			            },
			    }
		}

		interface DoesHonorPermissionContractEmitPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.DoesHonorPermissionContractEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface DoesHonorPermissionContractEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource | undefined | null
				
				'target'?: SpruceSchemas.Mercury.v2020_12_25.DoesHonorPermissionContractEmitTarget | undefined | null
				
				'payload': SpruceSchemas.Mercury.v2020_12_25.DoesHonorPermissionContractEmitPayload
		}

		interface DoesHonorPermissionContractEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'doesHonorPermissionContractEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.DoesHonorPermissionContractEmitTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.DoesHonorPermissionContractEmitPayloadSchema,}
			            },
			    }
		}

		interface DoesHonorPermissionContractEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.DoesHonorPermissionContractEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface DoesHonorPermissionContractRespondPayload {
			
				
				'doesHonor': boolean
		}

		interface DoesHonorPermissionContractRespondPayloadSchema extends SpruceSchema.Schema {
			id: 'doesHonorPermissionContractRespondPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'doesHonor': {
			                type: 'boolean',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface DoesHonorPermissionContractRespondPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.DoesHonorPermissionContractRespondPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface GetAnonyomousPersonEmitTarget {
			
				
				'organizationId'?: string | undefined | null
				
				'locationId'?: string | undefined | null
		}

		interface GetAnonyomousPersonEmitTargetSchema extends SpruceSchema.Schema {
			id: 'getAnonyomousPersonEmitTarget',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'organizationId': {
			                type: 'id',
			                options: undefined
			            },
			            /** . */
			            'locationId': {
			                type: 'id',
			                options: undefined
			            },
			    }
		}

		interface GetAnonyomousPersonEmitTargetEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.GetAnonyomousPersonEmitTargetSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface GetAnonymousPersonEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource | undefined | null
				
				'target'?: SpruceSchemas.Mercury.v2020_12_25.GetAnonyomousPersonEmitTarget | undefined | null
		}

		interface GetAnonymousPersonEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'getAnonymousPersonEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.GetAnonyomousPersonEmitTargetSchema,}
			            },
			    }
		}

		interface GetAnonymousPersonEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.GetAnonymousPersonEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface GetAnonyomousPersonResponsePayload {
			
				
				'person': SpruceSchemas.Spruce.v2020_07_22.Person
		}

		interface GetAnonyomousPersonResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'getAnonyomousPersonResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'person': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Spruce.v2020_07_22.PersonSchema,}
			            },
			    }
		}

		interface GetAnonyomousPersonResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.GetAnonyomousPersonResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface GetConversationTopicsEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource | undefined | null
		}

		interface GetConversationTopicsEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'getConversationTopicsEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			    }
		}

		interface GetConversationTopicsEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.GetConversationTopicsEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface GetConversationTopicsTopic {
			
				
				'key': string
		}

		interface GetConversationTopicsTopicSchema extends SpruceSchema.Schema {
			id: 'getConversationTopicsTopic',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'key': {
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface GetConversationTopicsTopicEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.GetConversationTopicsTopicSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface GetConversationTopicsResponsePayload {
			
				
				'topics': SpruceSchemas.Mercury.v2020_12_25.GetConversationTopicsTopic[]
		}

		interface GetConversationTopicsResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'getConversationTopicsResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'topics': {
			                type: 'schema',
			                isRequired: true,
			                isArray: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.GetConversationTopicsTopicSchema,}
			            },
			    }
		}

		interface GetConversationTopicsResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.GetConversationTopicsResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface GetEventContractsTarget {
			
				
				'namespaces'?: string[] | undefined | null
		}

		interface GetEventContractsTargetSchema extends SpruceSchema.Schema {
			id: 'getEventContractsTarget',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'namespaces': {
			                type: 'id',
			                isArray: true,
			                options: undefined
			            },
			    }
		}

		interface GetEventContractsTargetEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.GetEventContractsTargetSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface GetEventContractsEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource | undefined | null
				
				'target'?: SpruceSchemas.Mercury.v2020_12_25.GetEventContractsTarget | undefined | null
		}

		interface GetEventContractsEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'getEventContractsEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.GetEventContractsTargetSchema,}
			            },
			    }
		}

		interface GetEventContractsEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.GetEventContractsEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface GetEventContractsResponsePayload {
			
				
				'contracts': SpruceSchemas.Mercury.v2020_12_25.EventContract[]
		}

		interface GetEventContractsResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'getEventContractsResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'contracts': {
			                type: 'schema',
			                isRequired: true,
			                isArray: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.EventContractSchema,}
			            },
			    }
		}

		interface GetEventContractsResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.GetEventContractsResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface GetFeedEmitTarget {
			
				
				'locationId'?: string | undefined | null
				
				'organizationId'?: string | undefined | null
		}

		interface GetFeedEmitTargetSchema extends SpruceSchema.Schema {
			id: 'getFeedEmitTarget',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'locationId': {
			                type: 'id',
			                options: undefined
			            },
			            /** . */
			            'organizationId': {
			                type: 'id',
			                options: undefined
			            },
			    }
		}

		interface GetFeedEmitTargetEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.GetFeedEmitTargetSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface GetFeedEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource | undefined | null
				
				'target'?: SpruceSchemas.Mercury.v2020_12_25.GetFeedEmitTarget | undefined | null
				
				'payload': SpruceSchemas.Mercury.v2020_12_25.GetFeedEmitPayload
		}

		interface GetFeedEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'getFeedEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.GetFeedEmitTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.GetFeedEmitPayloadSchema,}
			            },
			    }
		}

		interface GetFeedEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.GetFeedEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface GetFeedPagingRequest {
			
				
				'next'?: string | undefined | null
				
				'previous'?: string | undefined | null
		}

		interface GetFeedPagingRequestSchema extends SpruceSchema.Schema {
			id: 'getFeedPagingRequest',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'next': {
			                type: 'id',
			                options: undefined
			            },
			            /** . */
			            'previous': {
			                type: 'id',
			                options: undefined
			            },
			    }
		}

		interface GetFeedPagingRequestEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.GetFeedPagingRequestSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface FeedPredicate {
			
				
				'target'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventTarget | undefined | null
				
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource | undefined | null
		}

		interface FeedPredicateSchema extends SpruceSchema.Schema {
			id: 'feedPredicate',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'target': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventTargetSchema,}
			            },
			            /** . */
			            'source': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			    }
		}

		interface FeedPredicateEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.FeedPredicateSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface GetFeedEmitPayload {
			
				
				'paging'?: SpruceSchemas.Mercury.v2020_12_25.GetFeedPagingRequest | undefined | null
				
				'predicates': SpruceSchemas.Mercury.v2020_12_25.FeedPredicate[]
		}

		interface GetFeedEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'getFeedEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'paging': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.GetFeedPagingRequestSchema,}
			            },
			            /** . */
			            'predicates': {
			                type: 'schema',
			                isRequired: true,
			                isArray: true,
			                minArrayLength: 0,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.FeedPredicateSchema,}
			            },
			    }
		}

		interface GetFeedEmitPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.GetFeedEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface GetFeedResponsePayload {
			
				
				'feed': SpruceSchemas.Spruce.v2020_07_22.Feed
				
				'paging': SpruceSchemas.SpruceEventUtils.v2021_09_13.EventPagingResponse
		}

		interface GetFeedResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'getFeedResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'feed': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Spruce.v2020_07_22.FeedSchema,}
			            },
			            /** . */
			            'paging': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventPagingResponseSchema,}
			            },
			    }
		}

		interface GetFeedResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.GetFeedResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface GetLocationTarget {
			
				
				'locationId': string
		}

		interface GetLocationTargetSchema extends SpruceSchema.Schema {
			id: 'getLocationTarget',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'locationId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface GetLocationTargetEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.GetLocationTargetSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface GetLocationEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource | undefined | null
				
				'target': SpruceSchemas.Mercury.v2020_12_25.GetLocationTarget
		}

		interface GetLocationEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'getLocationEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.GetLocationTargetSchema,}
			            },
			    }
		}

		interface GetLocationEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.GetLocationEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface GetLocationResponsePayload {
			
				
				'location': SpruceSchemas.Spruce.v2020_07_22.Location
		}

		interface GetLocationResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'getLocationResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'location': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Spruce.v2020_07_22.LocationSchema,}
			            },
			    }
		}

		interface GetLocationResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.GetLocationResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface GetOrganizationEmitTarget {
			
				
				'organizationId': string
		}

		interface GetOrganizationEmitTargetSchema extends SpruceSchema.Schema {
			id: 'getOrganizationEmitTarget',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'organizationId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface GetOrganizationEmitTargetEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.GetOrganizationEmitTargetSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface GetOrganizationEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource | undefined | null
				
				'target': SpruceSchemas.Mercury.v2020_12_25.GetOrganizationEmitTarget
		}

		interface GetOrganizationEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'getOrganizationEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.GetOrganizationEmitTargetSchema,}
			            },
			    }
		}

		interface GetOrganizationEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.GetOrganizationEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface GetOrgResponsePayload {
			
				
				'organization': SpruceSchemas.Spruce.v2020_07_22.Organization
		}

		interface GetOrgResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'getOrgResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'organization': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Spruce.v2020_07_22.OrganizationSchema,}
			            },
			    }
		}

		interface GetOrgResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.GetOrgResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface GetPermissionContractEmitTarget {
			
				
				'organizationId': string
				
				'permissionContractId': string
				
				'roleId'?: string | undefined | null
		}

		interface GetPermissionContractEmitTargetSchema extends SpruceSchema.Schema {
			id: 'getPermissionContractEmitTarget',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'organizationId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'permissionContractId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'roleId': {
			                type: 'id',
			                options: undefined
			            },
			    }
		}

		interface GetPermissionContractEmitTargetEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.GetPermissionContractEmitTargetSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface GetPermissionContractEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource | undefined | null
				
				'target': SpruceSchemas.Mercury.v2020_12_25.GetPermissionContractEmitTarget
		}

		interface GetPermissionContractEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'getPermissionContractEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.GetPermissionContractEmitTargetSchema,}
			            },
			    }
		}

		interface GetPermissionContractEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.GetPermissionContractEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface GetPermissionContractResponsePayload {
			
				
				'permissionContract': SpruceSchemas.Mercury.v2020_12_25.PermissionContract
				
				'skillId'?: string | undefined | null
		}

		interface GetPermissionContractResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'getPermissionContractResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'permissionContract': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.PermissionContractSchema,}
			            },
			            /** . */
			            'skillId': {
			                type: 'id',
			                options: undefined
			            },
			    }
		}

		interface GetPermissionContractResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.GetPermissionContractResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface GetPersonEmitTarget {
			
				
				'personId'?: string | undefined | null
				
				'phone'?: string | undefined | null
				
				'locationId'?: string | undefined | null
		}

		interface GetPersonEmitTargetSchema extends SpruceSchema.Schema {
			id: 'getPersonEmitTarget',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'personId': {
			                type: 'id',
			                options: undefined
			            },
			            /** . */
			            'phone': {
			                type: 'phone',
			                options: undefined
			            },
			            /** . */
			            'locationId': {
			                type: 'id',
			                options: undefined
			            },
			    }
		}

		interface GetPersonEmitTargetEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.GetPersonEmitTargetSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface GetPersonEmitPayload {
			
				/** . Includes PII fields like full name and phone number. */
				'shouldIncludePrivateFields'?: boolean | undefined | null
		}

		interface GetPersonEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'getPersonEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . Includes PII fields like full name and phone number. */
			            'shouldIncludePrivateFields': {
			                type: 'boolean',
			                hint: 'Includes PII fields like full name and phone number.',
			                options: undefined
			            },
			    }
		}

		interface GetPersonEmitPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.GetPersonEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface GetPersonEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource | undefined | null
				
				'target'?: SpruceSchemas.Mercury.v2020_12_25.GetPersonEmitTarget | undefined | null
				
				'payload'?: SpruceSchemas.Mercury.v2020_12_25.GetPersonEmitPayload | undefined | null
		}

		interface GetPersonEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'getPersonEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.GetPersonEmitTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.GetPersonEmitPayloadSchema,}
			            },
			    }
		}

		interface GetPersonEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.GetPersonEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface GetPersonResponsePayload {
			
				
				'person': SpruceSchemas.Spruce.v2020_07_22.Person
		}

		interface GetPersonResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'getPersonResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'person': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Spruce.v2020_07_22.PersonSchema,}
			            },
			    }
		}

		interface GetPersonResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.GetPersonResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface GetResolvedPermissionsContractEmitTarget {
			
				
				'locationId'?: string | undefined | null
				
				'organizationId'?: string | undefined | null
				
				'roleId'?: string | undefined | null
				
				'contractPersonId'?: string | undefined | null
				
				'contractSkillId'?: string | undefined | null
		}

		interface GetResolvedPermissionsContractEmitTargetSchema extends SpruceSchema.Schema {
			id: 'getResolvedPermissionsContractEmitTarget',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'locationId': {
			                type: 'id',
			                options: undefined
			            },
			            /** . */
			            'organizationId': {
			                type: 'id',
			                options: undefined
			            },
			            /** . */
			            'roleId': {
			                type: 'id',
			                options: undefined
			            },
			            /** . */
			            'contractPersonId': {
			                type: 'id',
			                options: undefined
			            },
			            /** . */
			            'contractSkillId': {
			                type: 'id',
			                options: undefined
			            },
			    }
		}

		interface GetResolvedPermissionsContractEmitTargetEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.GetResolvedPermissionsContractEmitTargetSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface GetResolvedPermissionsContractEmitPayload {
			
				
				'contractId': string
		}

		interface GetResolvedPermissionsContractEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'getResolvedPermissionsContractEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'contractId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface GetResolvedPermissionsContractEmitPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.GetResolvedPermissionsContractEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface GetResolvedPermissionsContractEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource | undefined | null
				
				'target'?: SpruceSchemas.Mercury.v2020_12_25.GetResolvedPermissionsContractEmitTarget | undefined | null
				
				'payload': SpruceSchemas.Mercury.v2020_12_25.GetResolvedPermissionsContractEmitPayload
		}

		interface GetResolvedPermissionsContractEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'getResolvedPermissionsContractEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.GetResolvedPermissionsContractEmitTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.GetResolvedPermissionsContractEmitPayloadSchema,}
			            },
			    }
		}

		interface GetResolvedPermissionsContractEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.GetResolvedPermissionsContractEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface GetResolvedPermissionsContractRespondPayload {
			
				
				'resolvedContract': SpruceSchemas.Mercury.v2020_12_25.ResolvedContract
		}

		interface GetResolvedPermissionsContractRespondPayloadSchema extends SpruceSchema.Schema {
			id: 'getResolvedPermissionsContractRespondPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'resolvedContract': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.ResolvedContractSchema,}
			            },
			    }
		}

		interface GetResolvedPermissionsContractRespondPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.GetResolvedPermissionsContractRespondPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ResolvedContractPermission {
			
				
				'id': string
				
				'can': boolean
				
				'byStatus': SpruceSchemas.Mercury.v2020_12_25.StatusFlags
		}

		interface ResolvedContractPermissionSchema extends SpruceSchema.Schema {
			id: 'resolvedContractPermission',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'id': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'can': {
			                type: 'boolean',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'byStatus': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.StatusFlagsSchema,}
			            },
			    }
		}

		interface ResolvedContractPermissionEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ResolvedContractPermissionSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ResolvedContract {
			
				
				'contractId': string
				
				'permissions': SpruceSchemas.Mercury.v2020_12_25.ResolvedContractPermission[]
		}

		interface ResolvedContractSchema extends SpruceSchema.Schema {
			id: 'resolvedContract',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'contractId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'permissions': {
			                type: 'schema',
			                isRequired: true,
			                isArray: true,
			                minArrayLength: 0,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.ResolvedContractPermissionSchema,}
			            },
			    }
		}

		interface ResolvedContractEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ResolvedContractSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface GetRoleEmitTarget {
			
				
				'roleId': string
		}

		interface GetRoleEmitTargetSchema extends SpruceSchema.Schema {
			id: 'getRoleEmitTarget',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'roleId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface GetRoleEmitTargetEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.GetRoleEmitTargetSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface GetRoleEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource | undefined | null
				
				'target': SpruceSchemas.Mercury.v2020_12_25.GetRoleEmitTarget
		}

		interface GetRoleEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'getRoleEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.GetRoleEmitTargetSchema,}
			            },
			    }
		}

		interface GetRoleEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.GetRoleEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface GetRoleResponsePayload {
			
				
				'role': SpruceSchemas.Spruce.v2020_07_22.Role
		}

		interface GetRoleResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'getRoleResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'role': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Spruce.v2020_07_22.RoleSchema,}
			            },
			    }
		}

		interface GetRoleResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.GetRoleResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface GetSkillEmitTarget {
			
				
				'skillId': string
		}

		interface GetSkillEmitTargetSchema extends SpruceSchema.Schema {
			id: 'getSkillEmitTarget',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'skillId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface GetSkillEmitTargetEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.GetSkillEmitTargetSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface GetSkillEmitPayload {
			
				
				'shouldIncludeApiKey'?: boolean | undefined | null
		}

		interface GetSkillEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'getSkillEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'shouldIncludeApiKey': {
			                type: 'boolean',
			                options: undefined
			            },
			    }
		}

		interface GetSkillEmitPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.GetSkillEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface GetSkillEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource | undefined | null
				
				'target': SpruceSchemas.Mercury.v2020_12_25.GetSkillEmitTarget
				
				'payload'?: SpruceSchemas.Mercury.v2020_12_25.GetSkillEmitPayload | undefined | null
		}

		interface GetSkillEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'getSkillEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.GetSkillEmitTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.GetSkillEmitPayloadSchema,}
			            },
			    }
		}

		interface GetSkillEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.GetSkillEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface GetSkillResponsePayload {
			
				
				'skill': SpruceSchemas.Spruce.v2020_07_22.Skill
		}

		interface GetSkillResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'getSkillResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'skill': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Spruce.v2020_07_22.SkillSchema,}
			            },
			    }
		}

		interface GetSkillResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.GetSkillResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface HealthEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource | undefined | null
		}

		interface HealthEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'healthEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			    }
		}

		interface HealthEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.HealthEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface HealthCheckItem {
			
				
				'status'?: ("passed") | undefined | null
		}

		interface HealthCheckItemSchema extends SpruceSchema.Schema {
			id: 'healthCheckItem',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'status': {
			                type: 'select',
			                options: {choices: [{"value":"passed","label":"Passed"}],}
			            },
			    }
		}

		interface HealthCheckItemEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.HealthCheckItemSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface HealthResponsePayload {
			
				
				'skill'?: SpruceSchemas.Mercury.v2020_12_25.HealthCheckItem | undefined | null
				
				'mercury'?: SpruceSchemas.Mercury.v2020_12_25.HealthCheckItem | undefined | null
		}

		interface HealthResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'healthResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'skill': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.HealthCheckItemSchema,}
			            },
			            /** . */
			            'mercury': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.HealthCheckItemSchema,}
			            },
			    }
		}

		interface HealthResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.HealthResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface InstallSkillEmitTarget {
			
				
				'organizationId': string
		}

		interface InstallSkillEmitTargetSchema extends SpruceSchema.Schema {
			id: 'installSkillEmitTarget',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'organizationId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface InstallSkillEmitTargetEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.InstallSkillEmitTargetSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface InstallSkillEmitPayload {
			
				
				'skillId': string
				
				'shouldNotifySkillOfInstall'?: boolean | undefined | null
		}

		interface InstallSkillEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'installSkillEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'skillId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'shouldNotifySkillOfInstall': {
			                type: 'boolean',
			                options: undefined
			            },
			    }
		}

		interface InstallSkillEmitPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.InstallSkillEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface InstallSkillEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource | undefined | null
				
				'target': SpruceSchemas.Mercury.v2020_12_25.InstallSkillEmitTarget
				
				'payload': SpruceSchemas.Mercury.v2020_12_25.InstallSkillEmitPayload
		}

		interface InstallSkillEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'installSkillEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.InstallSkillEmitTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.InstallSkillEmitPayloadSchema,}
			            },
			    }
		}

		interface InstallSkillEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.InstallSkillEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface InstallSkillResponsePayload {
			
		}

		interface InstallSkillResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'installSkillResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			    }
		}

		interface InstallSkillResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.InstallSkillResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface IsSkillInstalledEmitTarget {
			
				
				'organizationId': string
		}

		interface IsSkillInstalledEmitTargetSchema extends SpruceSchema.Schema {
			id: 'isSkillInstalledEmitTarget',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'organizationId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface IsSkillInstalledEmitTargetEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.IsSkillInstalledEmitTargetSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface IsSkillInstalledEmitPayload {
			
				
				'skillId'?: string | undefined | null
				
				'namespace'?: string | undefined | null
		}

		interface IsSkillInstalledEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'isSkillInstalledEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'skillId': {
			                type: 'id',
			                options: undefined
			            },
			            /** . */
			            'namespace': {
			                type: 'id',
			                options: undefined
			            },
			    }
		}

		interface IsSkillInstalledEmitPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.IsSkillInstalledEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface IsSkillInstalledEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource | undefined | null
				
				'target': SpruceSchemas.Mercury.v2020_12_25.IsSkillInstalledEmitTarget
				
				'payload'?: SpruceSchemas.Mercury.v2020_12_25.IsSkillInstalledEmitPayload | undefined | null
		}

		interface IsSkillInstalledEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'isSkillInstalledEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.IsSkillInstalledEmitTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.IsSkillInstalledEmitPayloadSchema,}
			            },
			    }
		}

		interface IsSkillInstalledEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.IsSkillInstalledEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface IsSkillInstalledResponsePayload {
			
				
				'isInstalled': boolean
		}

		interface IsSkillInstalledResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'isSkillInstalledResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'isInstalled': {
			                type: 'boolean',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface IsSkillInstalledResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.IsSkillInstalledResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ListInstalledSkillsEmitTarget {
			
				
				'organizationId': string
		}

		interface ListInstalledSkillsEmitTargetSchema extends SpruceSchema.Schema {
			id: 'listInstalledSkillsEmitTarget',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'organizationId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface ListInstalledSkillsEmitTargetEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ListInstalledSkillsEmitTargetSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ListInstalledSkillsEmitPayload {
			
				
				'shouldShowGlobalSkills'?: boolean | undefined | null
		}

		interface ListInstalledSkillsEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'listInstalledSkillsEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'shouldShowGlobalSkills': {
			                type: 'boolean',
			                options: undefined
			            },
			    }
		}

		interface ListInstalledSkillsEmitPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ListInstalledSkillsEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ListInstalledSkillsEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource | undefined | null
				
				'target': SpruceSchemas.Mercury.v2020_12_25.ListInstalledSkillsEmitTarget
				
				'payload'?: SpruceSchemas.Mercury.v2020_12_25.ListInstalledSkillsEmitPayload | undefined | null
		}

		interface ListInstalledSkillsEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'listInstalledSkillsEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.ListInstalledSkillsEmitTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.ListInstalledSkillsEmitPayloadSchema,}
			            },
			    }
		}

		interface ListInstalledSkillsEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ListInstalledSkillsEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ListInstalledSkillsSkillsResponsePayload {
			
				/** Id. */
				'id': string
				/** Name. */
				'name': string
				/** Description. */
				'description'?: string | undefined | null
				/** Namespace. */
				'slug': string
				/** Published. Does this skill show up in the marketplace and can other devs use it as a dependency? */
				'isPublished'?: boolean | undefined | null
				/** Global. Does this skill require needing to be installed anywhere. */
				'canBeInstalled'?: boolean | undefined | null
				
				'dateCreated': SpruceSchema.DateTimeFieldValue
				
				'dateDeleted'?: SpruceSchema.DateTimeFieldValue | undefined | null
		}

		interface ListInstalledSkillsSkillsResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'listInstalledSkillsSkillsResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Id. */
			            'id': {
			                label: 'Id',
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** Name. */
			            'name': {
			                label: 'Name',
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			            /** Description. */
			            'description': {
			                label: 'Description',
			                type: 'text',
			                options: undefined
			            },
			            /** Namespace. */
			            'slug': {
			                label: 'Namespace',
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			            /** Published. Does this skill show up in the marketplace and can other devs use it as a dependency? */
			            'isPublished': {
			                label: 'Published',
			                type: 'boolean',
			                hint: 'Does this skill show up in the marketplace and can other devs use it as a dependency?',
			                options: undefined
			            },
			            /** Global. Does this skill require needing to be installed anywhere. */
			            'canBeInstalled': {
			                label: 'Global',
			                type: 'boolean',
			                hint: 'Does this skill require needing to be installed anywhere.',
			                defaultValue: true,
			                options: undefined
			            },
			            /** . */
			            'dateCreated': {
			                type: 'dateTime',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'dateDeleted': {
			                type: 'dateTime',
			                options: undefined
			            },
			    }
		}

		interface ListInstalledSkillsSkillsResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ListInstalledSkillsSkillsResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ListInstalledSkillsResponsePayload {
			
				
				'skills': SpruceSchemas.Mercury.v2020_12_25.ListInstalledSkillsSkillsResponsePayload[]
		}

		interface ListInstalledSkillsResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'listInstalledSkillsResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'skills': {
			                type: 'schema',
			                isRequired: true,
			                isArray: true,
			                minArrayLength: 0,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.ListInstalledSkillsSkillsResponsePayloadSchema,}
			            },
			    }
		}

		interface ListInstalledSkillsResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ListInstalledSkillsResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ListLocationsEmitTarget {
			
				/** . Will filter locations by this organization. */
				'organizationId'?: string | undefined | null
				
				'locationIds'?: string[] | undefined | null
		}

		interface ListLocationsEmitTargetSchema extends SpruceSchema.Schema {
			id: 'listLocationsEmitTarget',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . Will filter locations by this organization. */
			            'organizationId': {
			                type: 'id',
			                hint: 'Will filter locations by this organization.',
			                options: undefined
			            },
			            /** . */
			            'locationIds': {
			                type: 'id',
			                isArray: true,
			                options: undefined
			            },
			    }
		}

		interface ListLocationsEmitTargetEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ListLocationsEmitTargetSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ListLocationsEmitPayload {
			
				/** . Will only return locations where a person has a role that respresent they work there. */
				'shouldOnlyShowWhereIAmEmployed'?: boolean | undefined | null
				
				'paging'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventPagingRequest | undefined | null
		}

		interface ListLocationsEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'listLocationsEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . Will only return locations where a person has a role that respresent they work there. */
			            'shouldOnlyShowWhereIAmEmployed': {
			                type: 'boolean',
			                hint: 'Will only return locations where a person has a role that respresent they work there.',
			                options: undefined
			            },
			            /** . */
			            'paging': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventPagingRequestSchema,}
			            },
			    }
		}

		interface ListLocationsEmitPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ListLocationsEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ListLocationsEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource | undefined | null
				
				'target'?: SpruceSchemas.Mercury.v2020_12_25.ListLocationsEmitTarget | undefined | null
				
				'payload'?: SpruceSchemas.Mercury.v2020_12_25.ListLocationsEmitPayload | undefined | null
		}

		interface ListLocationsEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'listLocationsEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.ListLocationsEmitTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.ListLocationsEmitPayloadSchema,}
			            },
			    }
		}

		interface ListLocationsEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ListLocationsEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ListLocationsResponsePayload {
			
				
				'locations': SpruceSchemas.Spruce.v2020_07_22.Location[]
		}

		interface ListLocationsResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'listLocationsResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'locations': {
			                type: 'schema',
			                isRequired: true,
			                isArray: true,
			                minArrayLength: 0,
			                options: {schema: SpruceSchemas.Spruce.v2020_07_22.LocationSchema,}
			            },
			    }
		}

		interface ListLocationsResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ListLocationsResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ListOrgsEmitTarget {
			
				
				'organizationIds'?: string[] | undefined | null
				
				'personId'?: string | undefined | null
				
				'namespace'?: string | undefined | null
		}

		interface ListOrgsEmitTargetSchema extends SpruceSchema.Schema {
			id: 'listOrgsEmitTarget',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'organizationIds': {
			                type: 'id',
			                isArray: true,
			                minArrayLength: 0,
			                options: undefined
			            },
			            /** . */
			            'personId': {
			                type: 'id',
			                options: undefined
			            },
			            /** . */
			            'namespace': {
			                type: 'id',
			                options: undefined
			            },
			    }
		}

		interface ListOrgsEmitTargetEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ListOrgsEmitTargetSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ListOrganizationsEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource | undefined | null
				
				'target'?: SpruceSchemas.Mercury.v2020_12_25.ListOrgsEmitTarget | undefined | null
				
				'payload'?: SpruceSchemas.Mercury.v2020_12_25.ListOrgsEmitPayload | undefined | null
		}

		interface ListOrganizationsEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'listOrganizationsEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.ListOrgsEmitTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.ListOrgsEmitPayloadSchema,}
			            },
			    }
		}

		interface ListOrganizationsEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ListOrganizationsEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ListOrgsEmitPayload {
			
				/** . Will only return organizations where a person has a role (including guest). */
				'shouldOnlyShowMine'?: boolean | undefined | null
				/** . Will only return organizations where a person has a role that indicates they work there. */
				'shouldOnlyShowWhereIAmEmployed'?: boolean | undefined | null
				/** . Will include organizations that are marked as private. You have to have permissions to see these (usually means employed there as owner). */
				'shouldIncludePrivateOrganizations'?: boolean | undefined | null
				
				'paging'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventPagingRequest | undefined | null
		}

		interface ListOrgsEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'listOrgsEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . Will only return organizations where a person has a role (including guest). */
			            'shouldOnlyShowMine': {
			                type: 'boolean',
			                hint: 'Will only return organizations where a person has a role (including guest).',
			                options: undefined
			            },
			            /** . Will only return organizations where a person has a role that indicates they work there. */
			            'shouldOnlyShowWhereIAmEmployed': {
			                type: 'boolean',
			                hint: 'Will only return organizations where a person has a role that indicates they work there.',
			                options: undefined
			            },
			            /** . Will include organizations that are marked as private. You have to have permissions to see these (usually means employed there as owner). */
			            'shouldIncludePrivateOrganizations': {
			                type: 'boolean',
			                hint: 'Will include organizations that are marked as private. You have to have permissions to see these (usually means employed there as owner).',
			                options: undefined
			            },
			            /** . */
			            'paging': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventPagingRequestSchema,}
			            },
			    }
		}

		interface ListOrgsEmitPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ListOrgsEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ListOrgsResponsePayload {
			
				
				'organizations': SpruceSchemas.Spruce.v2020_07_22.Organization[]
		}

		interface ListOrgsResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'listOrgsResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'organizations': {
			                type: 'schema',
			                isRequired: true,
			                isArray: true,
			                minArrayLength: 0,
			                options: {schema: SpruceSchemas.Spruce.v2020_07_22.OrganizationSchema,}
			            },
			    }
		}

		interface ListOrgsResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ListOrgsResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ListPeopleEmitTarget {
			
				
				'organizationId'?: string | undefined | null
				
				'locationId'?: string | undefined | null
		}

		interface ListPeopleEmitTargetSchema extends SpruceSchema.Schema {
			id: 'listPeopleEmitTarget',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'organizationId': {
			                type: 'id',
			                options: undefined
			            },
			            /** . */
			            'locationId': {
			                type: 'id',
			                options: undefined
			            },
			    }
		}

		interface ListPeopleEmitTargetEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ListPeopleEmitTargetSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ListPeopleEmitPayload {
			
				
				'personIds'?: string[] | undefined | null
				
				'roleBases'?: string[] | undefined | null
				
				'roleIds'?: string[] | undefined | null
				
				'shouldIncludePrivateFields'?: boolean | undefined | null
				
				'updatedAfter'?: SpruceSchema.DateTimeFieldValue | undefined | null
				
				'macAddresses'?: string[] | undefined | null
		}

		interface ListPeopleEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'listPeopleEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'personIds': {
			                type: 'id',
			                isArray: true,
			                options: undefined
			            },
			            /** . */
			            'roleBases': {
			                type: 'text',
			                isArray: true,
			                options: undefined
			            },
			            /** . */
			            'roleIds': {
			                type: 'id',
			                isArray: true,
			                options: undefined
			            },
			            /** . */
			            'shouldIncludePrivateFields': {
			                type: 'boolean',
			                options: undefined
			            },
			            /** . */
			            'updatedAfter': {
			                type: 'dateTime',
			                options: undefined
			            },
			            /** . */
			            'macAddresses': {
			                type: 'text',
			                isArray: true,
			                options: undefined
			            },
			    }
		}

		interface ListPeopleEmitPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ListPeopleEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ListPeopleEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource | undefined | null
				
				'target'?: SpruceSchemas.Mercury.v2020_12_25.ListPeopleEmitTarget | undefined | null
				
				'payload'?: SpruceSchemas.Mercury.v2020_12_25.ListPeopleEmitPayload | undefined | null
		}

		interface ListPeopleEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'listPeopleEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.ListPeopleEmitTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.ListPeopleEmitPayloadSchema,}
			            },
			    }
		}

		interface ListPeopleEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ListPeopleEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ListPerson {
			
				/** Id. */
				'id': string
				/** First name. */
				'firstName'?: string | undefined | null
				/** Last name. */
				'lastName'?: string | undefined | null
				/** Casual name. The name you can use when talking to this person. */
				'casualName': string
				/** Timezone. */
				'timezone'?: ("UTC" | "Pacific/Honolulu" | "America/Anchorage" | "America/Los_Angeles" | "America/Denver" | "America/Phoenix" | "America/Chicago" | "America/Guatemala" | "America/New_York" | "America/Panama" | "America/Sao_Paulo" | "America/Argentina/Buenos_Aires" | "Europe/London" | "Europe/Berlin" | "Europe/Athens" | "Europe/Moscow" | "Africa/Lagos" | "Africa/Cairo" | "Africa/Johannesburg" | "Asia/Dubai" | "Asia/Karachi" | "Asia/Kolkata" | "Asia/Shanghai" | "Asia/Tokyo" | "Asia/Seoul" | "Australia/Perth" | "Australia/Adelaide" | "Australia/Sydney" | "Pacific/Auckland" | "Pacific/Port_Moresby") | undefined | null
				/** Phone. A number that can be texted */
				'phone'?: string | undefined | null
				/** Username. An optional username if the person does not want to login using their phone */
				'username'?: string | undefined | null
				/** Avatar src. */
				'avatar'?: SpruceSchema.ImageFieldValue | undefined | null
				
				'dateCreated': SpruceSchema.DateTimeFieldValue
				
				'dateUpdated'?: SpruceSchema.DateTimeFieldValue | undefined | null
				
				'dateScrambled'?: SpruceSchema.DateTimeFieldValue | undefined | null
				
				'roleIds'?: string[] | undefined | null
				
				'macAddress'?: string | undefined | null
		}

		interface ListPersonSchema extends SpruceSchema.Schema {
			id: 'list-person',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Id. */
			            'id': {
			                label: 'Id',
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** First name. */
			            'firstName': {
			                label: 'First name',
			                type: 'text',
			                isPrivate: true,
			                options: undefined
			            },
			            /** Last name. */
			            'lastName': {
			                label: 'Last name',
			                type: 'text',
			                isPrivate: true,
			                options: undefined
			            },
			            /** Casual name. The name you can use when talking to this person. */
			            'casualName': {
			                label: 'Casual name',
			                type: 'text',
			                isRequired: true,
			                hint: 'The name you can use when talking to this person.',
			                options: undefined
			            },
			            /** Timezone. */
			            'timezone': {
			                label: 'Timezone',
			                type: 'select',
			                options: {choices: [{"value":"UTC","label":"UTC"},{"value":"Pacific/Honolulu","label":"Hawaii Time"},{"value":"America/Anchorage","label":"Alaska Time"},{"value":"America/Los_Angeles","label":"Pacific Time"},{"value":"America/Denver","label":"Mountain Time"},{"value":"America/Phoenix","label":"Phoenix Time (No DST)"},{"value":"America/Chicago","label":"Central Time"},{"value":"America/Guatemala","label":"Central Standard Time (No DST)"},{"value":"America/New_York","label":"Eastern Time"},{"value":"America/Panama","label":"Eastern Standard Time (No DST)"},{"value":"America/Sao_Paulo","label":"Brasília Time"},{"value":"America/Argentina/Buenos_Aires","label":"Argentina Time (No DST)"},{"value":"Europe/London","label":"UK Time"},{"value":"Europe/Berlin","label":"Central Europe Time"},{"value":"Europe/Athens","label":"Eastern Europe Time"},{"value":"Europe/Moscow","label":"Moscow Time"},{"value":"Africa/Lagos","label":"West Africa Time"},{"value":"Africa/Cairo","label":"Eastern Africa Time"},{"value":"Africa/Johannesburg","label":"South Africa Time"},{"value":"Asia/Dubai","label":"Gulf Standard Time"},{"value":"Asia/Karachi","label":"Pakistan Time"},{"value":"Asia/Kolkata","label":"India Time"},{"value":"Asia/Shanghai","label":"China Time"},{"value":"Asia/Tokyo","label":"Japan Time"},{"value":"Asia/Seoul","label":"Korea Time"},{"value":"Australia/Perth","label":"Western Australia Time"},{"value":"Australia/Adelaide","label":"Central Australia Time"},{"value":"Australia/Sydney","label":"Eastern Australia Time"},{"value":"Pacific/Auckland","label":"New Zealand Time"},{"value":"Pacific/Port_Moresby","label":"Papua New Guinea Time (No DST)"}],}
			            },
			            /** Phone. A number that can be texted */
			            'phone': {
			                label: 'Phone',
			                type: 'phone',
			                isPrivate: true,
			                hint: 'A number that can be texted',
			                options: undefined
			            },
			            /** Username. An optional username if the person does not want to login using their phone */
			            'username': {
			                label: 'Username',
			                type: 'text',
			                isPrivate: true,
			                hint: 'An optional username if the person does not want to login using their phone',
			                options: undefined
			            },
			            /** Avatar src. */
			            'avatar': {
			                label: 'Avatar src',
			                type: 'image',
			                options: {requiredSizes: ["*"],}
			            },
			            /** . */
			            'dateCreated': {
			                type: 'dateTime',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'dateUpdated': {
			                type: 'dateTime',
			                options: undefined
			            },
			            /** . */
			            'dateScrambled': {
			                type: 'dateTime',
			                options: undefined
			            },
			            /** . */
			            'roleIds': {
			                type: 'text',
			                isArray: true,
			                options: undefined
			            },
			            /** . */
			            'macAddress': {
			                type: 'id',
			                options: undefined
			            },
			    }
		}

		interface ListPersonEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ListPersonSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ListPeopleResponsePayload {
			
				
				'people': SpruceSchemas.Mercury.v2020_12_25.ListPerson[]
		}

		interface ListPeopleResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'listPeopleResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'people': {
			                type: 'schema',
			                isRequired: true,
			                isArray: true,
			                minArrayLength: 0,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.ListPersonSchema,}
			            },
			    }
		}

		interface ListPeopleResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ListPeopleResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ListPermissionContractsEmitTarget {
			
				
				'organizationId'?: string | undefined | null
				
				'namespaces'?: string[] | undefined | null
		}

		interface ListPermissionContractsEmitTargetSchema extends SpruceSchema.Schema {
			id: 'listPermissionContractsEmitTarget',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'organizationId': {
			                type: 'id',
			                options: undefined
			            },
			            /** . */
			            'namespaces': {
			                type: 'id',
			                isArray: true,
			                options: undefined
			            },
			    }
		}

		interface ListPermissionContractsEmitTargetEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ListPermissionContractsEmitTargetSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ListPermissionContractsEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource | undefined | null
				
				'target'?: SpruceSchemas.Mercury.v2020_12_25.ListPermissionContractsEmitTarget | undefined | null
		}

		interface ListPermissionContractsEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'listPermissionContractsEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.ListPermissionContractsEmitTargetSchema,}
			            },
			    }
		}

		interface ListPermissionContractsEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ListPermissionContractsEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ListPermissionContractsPermissionContracts {
			
				
				'id': string
				
				'skillId'?: string | undefined | null
				
				'contract': SpruceSchemas.Mercury.v2020_12_25.PermissionContract
		}

		interface ListPermissionContractsPermissionContractsSchema extends SpruceSchema.Schema {
			id: 'listPermissionContractsPermissionContracts',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'id': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'skillId': {
			                type: 'id',
			                options: undefined
			            },
			            /** . */
			            'contract': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.PermissionContractSchema,}
			            },
			    }
		}

		interface ListPermissionContractsPermissionContractsEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ListPermissionContractsPermissionContractsSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ListPermissionContractsResponsePayload {
			
				
				'permissionContracts': SpruceSchemas.Mercury.v2020_12_25.ListPermissionContractsPermissionContracts[]
		}

		interface ListPermissionContractsResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'listPermissionContractsResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'permissionContracts': {
			                type: 'schema',
			                isRequired: true,
			                isArray: true,
			                minArrayLength: 0,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.ListPermissionContractsPermissionContractsSchema,}
			            },
			    }
		}

		interface ListPermissionContractsResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ListPermissionContractsResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ListRolesEmitTarget {
			
				
				'organizationId'?: string | undefined | null
				
				'locationId'?: string | undefined | null
				
				'personId'?: string | undefined | null
		}

		interface ListRolesEmitTargetSchema extends SpruceSchema.Schema {
			id: 'listRolesEmitTarget',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'organizationId': {
			                type: 'id',
			                options: undefined
			            },
			            /** . */
			            'locationId': {
			                type: 'id',
			                options: undefined
			            },
			            /** . */
			            'personId': {
			                type: 'id',
			                options: undefined
			            },
			    }
		}

		interface ListRolesEmitTargetEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ListRolesEmitTargetSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ListRolesEmitPayload {
			
				
				'shouldIncludePrivateRoles'?: boolean | undefined | null
				
				'shouldIncludeMetaRoles'?: boolean | undefined | null
				
				'shouldIncludeAllLocations'?: boolean | undefined | null
		}

		interface ListRolesEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'listRolesEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'shouldIncludePrivateRoles': {
			                type: 'boolean',
			                options: undefined
			            },
			            /** . */
			            'shouldIncludeMetaRoles': {
			                type: 'boolean',
			                options: undefined
			            },
			            /** . */
			            'shouldIncludeAllLocations': {
			                type: 'boolean',
			                options: undefined
			            },
			    }
		}

		interface ListRolesEmitPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ListRolesEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ListRolesEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource | undefined | null
				
				'target'?: SpruceSchemas.Mercury.v2020_12_25.ListRolesEmitTarget | undefined | null
				
				'payload'?: SpruceSchemas.Mercury.v2020_12_25.ListRolesEmitPayload | undefined | null
		}

		interface ListRolesEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'listRolesEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.ListRolesEmitTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.ListRolesEmitPayloadSchema,}
			            },
			    }
		}

		interface ListRolesEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ListRolesEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ListSchemaTarget {
			
				
				'organizationId'?: string | undefined | null
				
				'locationId'?: string | undefined | null
		}

		interface ListSchemaTargetSchema extends SpruceSchema.Schema {
			id: 'listSchemaTarget',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'organizationId': {
			                type: 'id',
			                options: undefined
			            },
			            /** . */
			            'locationId': {
			                type: 'id',
			                options: undefined
			            },
			    }
		}

		interface ListSchemaTargetEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ListSchemaTargetSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ListRole {
			
				/** Id. */
				'id': string
				/** Name. */
				'name': string
				/** Base. A best practices starting point for a role based on the generalized roles at a company. */
				'base'?: ("owner" | "groupManager" | "manager" | "teammate" | "anonymous" | "loggedIn" | "guest") | undefined | null
				/** Description. */
				'description'?: string | undefined | null
				
				'dateCreated': number
				
				'dateDeleted'?: number | undefined | null
				
				'organizationId'?: string | undefined | null
				/** Public. Should I let people that are not part of this organization this role? */
				'isPublic'?: boolean | undefined | null
				
				'isMeta'?: boolean | undefined | null
				
				'target'?: SpruceSchemas.Mercury.v2020_12_25.ListSchemaTarget | undefined | null
		}

		interface ListRoleSchema extends SpruceSchema.Schema {
			id: 'listRole',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Id. */
			            'id': {
			                label: 'Id',
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** Name. */
			            'name': {
			                label: 'Name',
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			            /** Base. A best practices starting point for a role based on the generalized roles at a company. */
			            'base': {
			                label: 'Base',
			                type: 'select',
			                hint: 'A best practices starting point for a role based on the generalized roles at a company.',
			                options: {choices: [{"label":"Owner","value":"owner"},{"label":"Group manager","value":"groupManager"},{"label":"Manager","value":"manager"},{"label":"Teammate","value":"teammate"},{"label":"Anonymous","value":"anonymous"},{"label":"Logged in","value":"loggedIn"},{"label":"Guest","value":"guest"}],}
			            },
			            /** Description. */
			            'description': {
			                label: 'Description',
			                type: 'text',
			                options: undefined
			            },
			            /** . */
			            'dateCreated': {
			                type: 'number',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'dateDeleted': {
			                type: 'number',
			                options: undefined
			            },
			            /** . */
			            'organizationId': {
			                type: 'id',
			                options: undefined
			            },
			            /** Public. Should I let people that are not part of this organization this role? */
			            'isPublic': {
			                label: 'Public',
			                type: 'boolean',
			                hint: 'Should I let people that are not part of this organization this role?',
			                options: undefined
			            },
			            /** . */
			            'isMeta': {
			                type: 'boolean',
			                options: undefined
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.ListSchemaTargetSchema,}
			            },
			    }
		}

		interface ListRoleEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ListRoleSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ListRolesResponsePayload {
			
				
				'roles': SpruceSchemas.Mercury.v2020_12_25.ListRole[]
		}

		interface ListRolesResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'listRolesResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'roles': {
			                type: 'schema',
			                isRequired: true,
			                isArray: true,
			                minArrayLength: 0,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.ListRoleSchema,}
			            },
			    }
		}

		interface ListRolesResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ListRolesResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ListSecurityQuestionsEmitTarget {
			
				
				'phone'?: string | undefined | null
				
				'username'?: string | undefined | null
		}

		interface ListSecurityQuestionsEmitTargetSchema extends SpruceSchema.Schema {
			id: 'listSecurityQuestionsEmitTarget',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'phone': {
			                type: 'phone',
			                options: undefined
			            },
			            /** . */
			            'username': {
			                type: 'text',
			                options: undefined
			            },
			    }
		}

		interface ListSecurityQuestionsEmitTargetEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ListSecurityQuestionsEmitTargetSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ListSecurityQuestionsEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource | undefined | null
				
				'target'?: SpruceSchemas.Mercury.v2020_12_25.ListSecurityQuestionsEmitTarget | undefined | null
		}

		interface ListSecurityQuestionsEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'listSecurityQuestionsEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.ListSecurityQuestionsEmitTargetSchema,}
			            },
			    }
		}

		interface ListSecurityQuestionsEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ListSecurityQuestionsEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ListSecurityQuestionsResponsePayload {
			
				
				'questions': string[]
		}

		interface ListSecurityQuestionsResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'listSecurityQuestionsResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'questions': {
			                type: 'text',
			                isRequired: true,
			                isArray: true,
			                minArrayLength: 0,
			                options: undefined
			            },
			    }
		}

		interface ListSecurityQuestionsResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ListSecurityQuestionsResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ListSkillsEmitPayload {
			
				
				'shouldOnlyShowMine'?: boolean | undefined | null
				
				'namespaces'?: string[] | undefined | null
				
				'shouldShowGlobalSkills'?: boolean | undefined | null
				
				'shouldOnlyShowInstallableSkills'?: boolean | undefined | null
		}

		interface ListSkillsEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'listSkillsEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'shouldOnlyShowMine': {
			                type: 'boolean',
			                options: undefined
			            },
			            /** . */
			            'namespaces': {
			                type: 'id',
			                isArray: true,
			                options: undefined
			            },
			            /** . */
			            'shouldShowGlobalSkills': {
			                type: 'boolean',
			                options: undefined
			            },
			            /** . */
			            'shouldOnlyShowInstallableSkills': {
			                type: 'boolean',
			                options: undefined
			            },
			    }
		}

		interface ListSkillsEmitPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ListSkillsEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ListSkillsEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource | undefined | null
				
				'payload'?: SpruceSchemas.Mercury.v2020_12_25.ListSkillsEmitPayload | undefined | null
		}

		interface ListSkillsEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'listSkillsEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.ListSkillsEmitPayloadSchema,}
			            },
			    }
		}

		interface ListSkillsEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ListSkillsEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ListSkillsSkill {
			
				/** Id. */
				'id': string
				/** Name. */
				'name': string
				/** Description. */
				'description'?: string | undefined | null
				/** Namespace. */
				'slug': string
				/** Published. Does this skill show up in the marketplace and can other devs use it as a dependency? */
				'isPublished'?: boolean | undefined | null
				/** Global. Does this skill require needing to be installed anywhere. */
				'canBeInstalled'?: boolean | undefined | null
				
				'dateCreated': SpruceSchema.DateTimeFieldValue
				
				'dateDeleted'?: SpruceSchema.DateTimeFieldValue | undefined | null
		}

		interface ListSkillsSkillSchema extends SpruceSchema.Schema {
			id: 'listSkillsSkill',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Id. */
			            'id': {
			                label: 'Id',
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** Name. */
			            'name': {
			                label: 'Name',
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			            /** Description. */
			            'description': {
			                label: 'Description',
			                type: 'text',
			                options: undefined
			            },
			            /** Namespace. */
			            'slug': {
			                label: 'Namespace',
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			            /** Published. Does this skill show up in the marketplace and can other devs use it as a dependency? */
			            'isPublished': {
			                label: 'Published',
			                type: 'boolean',
			                hint: 'Does this skill show up in the marketplace and can other devs use it as a dependency?',
			                options: undefined
			            },
			            /** Global. Does this skill require needing to be installed anywhere. */
			            'canBeInstalled': {
			                label: 'Global',
			                type: 'boolean',
			                hint: 'Does this skill require needing to be installed anywhere.',
			                defaultValue: true,
			                options: undefined
			            },
			            /** . */
			            'dateCreated': {
			                type: 'dateTime',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'dateDeleted': {
			                type: 'dateTime',
			                options: undefined
			            },
			    }
		}

		interface ListSkillsSkillEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ListSkillsSkillSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ListSkillsResponsePayload {
			
				
				'skills': SpruceSchemas.Mercury.v2020_12_25.ListSkillsSkill[]
		}

		interface ListSkillsResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'listSkillsResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'skills': {
			                type: 'schema',
			                isRequired: true,
			                isArray: true,
			                minArrayLength: 0,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.ListSkillsSkillSchema,}
			            },
			    }
		}

		interface ListSkillsResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ListSkillsResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface LoginEmitTarget {
			
				
				'phone'?: string | undefined | null
				
				'username'?: string | undefined | null
				
				'locationId'?: string | undefined | null
		}

		interface LoginEmitTargetSchema extends SpruceSchema.Schema {
			id: 'loginEmitTarget',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'phone': {
			                type: 'text',
			                options: undefined
			            },
			            /** . */
			            'username': {
			                type: 'text',
			                options: undefined
			            },
			            /** . */
			            'locationId': {
			                type: 'id',
			                options: undefined
			            },
			    }
		}

		interface LoginEmitTargetEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.LoginEmitTargetSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface LoginEmitPayload {
			
				
				'password': string
				
				'macAddress'?: string | undefined | null
		}

		interface LoginEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'loginEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'password': {
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'macAddress': {
			                type: 'id',
			                options: undefined
			            },
			    }
		}

		interface LoginEmitPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.LoginEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface LoginEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource | undefined | null
				
				'target'?: SpruceSchemas.Mercury.v2020_12_25.LoginEmitTarget | undefined | null
				
				'payload': SpruceSchemas.Mercury.v2020_12_25.LoginEmitPayload
		}

		interface LoginEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'loginEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.LoginEmitTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.LoginEmitPayloadSchema,}
			            },
			    }
		}

		interface LoginEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.LoginEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface LoginResponsePayload {
			
				
				'token': string
				
				'person': SpruceSchemas.Spruce.v2020_07_22.Person
		}

		interface LoginResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'loginResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'token': {
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'person': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Spruce.v2020_07_22.PersonSchema,}
			            },
			    }
		}

		interface LoginResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.LoginResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface LogoutEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource | undefined | null
		}

		interface LogoutEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'logoutEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			    }
		}

		interface LogoutEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.LogoutEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface LogoutResponsePayload {
			
		}

		interface LogoutResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'logoutResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			    }
		}

		interface LogoutResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.LogoutResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface RegisterConversationTopicEmitPayloadTopic {
			
				/** Key. A way to identify this topic, must be unique for your skill. */
				'key': string
		}

		interface RegisterConversationTopicEmitPayloadTopicSchema extends SpruceSchema.Schema {
			id: 'registerConversationTopicEmitPayloadTopic',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Key. A way to identify this topic, must be unique for your skill. */
			            'key': {
			                label: 'Key',
			                type: 'text',
			                isRequired: true,
			                hint: 'A way to identify this topic, must be unique for your skill.',
			                options: undefined
			            },
			    }
		}

		interface RegisterConversationTopicEmitPayloadTopicEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.RegisterConversationTopicEmitPayloadTopicSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface RegisterConversationTopicsEmitPayload {
			
				
				'topics': SpruceSchemas.Mercury.v2020_12_25.RegisterConversationTopicEmitPayloadTopic[]
		}

		interface RegisterConversationTopicsEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'registerConversationTopicsEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'topics': {
			                type: 'schema',
			                isRequired: true,
			                isArray: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.RegisterConversationTopicEmitPayloadTopicSchema,}
			            },
			    }
		}

		interface RegisterConversationTopicsEmitPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.RegisterConversationTopicsEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface RegisterConversationTopicsEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource | undefined | null
				
				'payload': SpruceSchemas.Mercury.v2020_12_25.RegisterConversationTopicsEmitPayload
		}

		interface RegisterConversationTopicsEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'registerConversationTopicsEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.RegisterConversationTopicsEmitPayloadSchema,}
			            },
			    }
		}

		interface RegisterConversationTopicsEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.RegisterConversationTopicsEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface RegisterConversationTopicsResponsePayload {
			
		}

		interface RegisterConversationTopicsResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'registerConversationTopicsResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			    }
		}

		interface RegisterConversationTopicsResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.RegisterConversationTopicsResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface RegisterDeviceEmitPayload {
			
				
				'macAddress': string
		}

		interface RegisterDeviceEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'registerDeviceEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'macAddress': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface RegisterDeviceEmitPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.RegisterDeviceEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface RegisterDeviceEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource | undefined | null
				
				'payload': SpruceSchemas.Mercury.v2020_12_25.RegisterDeviceEmitPayload
		}

		interface RegisterDeviceEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'registerDeviceEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.RegisterDeviceEmitPayloadSchema,}
			            },
			    }
		}

		interface RegisterDeviceEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.RegisterDeviceEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface RegisterDeviceResponsePayload {
			
		}

		interface RegisterDeviceResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'registerDeviceResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			    }
		}

		interface RegisterDeviceResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.RegisterDeviceResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface RegisterEventsEmitPayload {
			
				
				'contract': SpruceSchemas.Mercury.v2020_12_25.EventContract
		}

		interface RegisterEventsEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'registerEventsEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			importsWhenRemote: ['import \'@sprucelabs/mercury-types\'',],
			    fields: {
			            /** . */
			            'contract': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.EventContractSchema,}
			            },
			    }
		}

		interface RegisterEventsEmitPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.RegisterEventsEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface RegisterEventsEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource | undefined | null
				
				'payload': SpruceSchemas.Mercury.v2020_12_25.RegisterEventsEmitPayload
		}

		interface RegisterEventsEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'registerEventsEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.RegisterEventsEmitPayloadSchema,}
			            },
			    }
		}

		interface RegisterEventsEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.RegisterEventsEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface RegisterEventsResponsePayload {
			
				/** Fully qualified event names. */
				'fqens': string[]
		}

		interface RegisterEventsResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'registerEventsResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Fully qualified event names. */
			            'fqens': {
			                label: 'Fully qualified event names',
			                type: 'text',
			                isRequired: true,
			                isArray: true,
			                options: undefined
			            },
			    }
		}

		interface RegisterEventsResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.RegisterEventsResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface RegisteredListener {
			
				
				'eventName': string
				
				'isGlobal'?: boolean | undefined | null
		}

		interface RegisteredListenerSchema extends SpruceSchema.Schema {
			id: 'registeredListener',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: 'Registered listener',
			    fields: {
			            /** . */
			            'eventName': {
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'isGlobal': {
			                type: 'boolean',
			                options: undefined
			            },
			    }
		}

		interface RegisteredListenerEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.RegisteredListenerSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface RegisterListenersEmitPayload {
			
				
				'events': SpruceSchemas.Mercury.v2020_12_25.RegisteredListener[]
				
				'fullyQualifiedEventNames'?: string[] | undefined | null
		}

		interface RegisterListenersEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'registerListenersEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'events': {
			                type: 'schema',
			                isRequired: true,
			                isArray: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.RegisteredListenerSchema,}
			            },
			            /** . */
			            'fullyQualifiedEventNames': {
			                type: 'text',
			                isArray: true,
			                options: undefined
			            },
			    }
		}

		interface RegisterListenersEmitPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.RegisterListenersEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface RegisterListenersEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource | undefined | null
				
				'payload': SpruceSchemas.Mercury.v2020_12_25.RegisterListenersEmitPayload
		}

		interface RegisterListenersEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'registerListenersEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.RegisterListenersEmitPayloadSchema,}
			            },
			    }
		}

		interface RegisterListenersEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.RegisterListenersEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface RegisterProxyTokenEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource | undefined | null
		}

		interface RegisterProxyTokenEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'registerProxyTokenEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			    }
		}

		interface RegisterProxyTokenEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.RegisterProxyTokenEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface RegisterProxyTokenResponsePayload {
			
				/** Generate token. */
				'token': string
		}

		interface RegisterProxyTokenResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'registerProxyTokenResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Generate token. */
			            'token': {
			                label: 'Generate token',
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface RegisterProxyTokenResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.RegisterProxyTokenResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface RegisterPushTokenEmitPayload {
			
				
				'iosToken'?: string | undefined | null
				
				'androidToken'?: string | undefined | null
		}

		interface RegisterPushTokenEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'registerPushTokenEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'iosToken': {
			                type: 'id',
			                options: undefined
			            },
			            /** . */
			            'androidToken': {
			                type: 'id',
			                options: undefined
			            },
			    }
		}

		interface RegisterPushTokenEmitPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.RegisterPushTokenEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface RegisterPushTokenEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource | undefined | null
				
				'payload'?: SpruceSchemas.Mercury.v2020_12_25.RegisterPushTokenEmitPayload | undefined | null
		}

		interface RegisterPushTokenEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'registerPushTokenEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.RegisterPushTokenEmitPayloadSchema,}
			            },
			    }
		}

		interface RegisterPushTokenEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.RegisterPushTokenEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface RegisterPushTokenResponsePayload {
			
		}

		interface RegisterPushTokenResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'registerPushTokenResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			    }
		}

		interface RegisterPushTokenResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.RegisterPushTokenResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface RegisterSkillEmitPayload {
			
				/** Name. */
				'name': string
				/** Description. */
				'description'?: string | undefined | null
				/** Published. Does this skill show up in the marketplace and can other devs use it as a dependency? */
				'isPublished'?: boolean | undefined | null
				/** Global. Does this skill require needing to be installed anywhere. */
				'canBeInstalled'?: boolean | undefined | null
				/** Namespace. */
				'slug'?: string | undefined | null
		}

		interface RegisterSkillEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'registerSkillEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Name. */
			            'name': {
			                label: 'Name',
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			            /** Description. */
			            'description': {
			                label: 'Description',
			                type: 'text',
			                options: undefined
			            },
			            /** Published. Does this skill show up in the marketplace and can other devs use it as a dependency? */
			            'isPublished': {
			                label: 'Published',
			                type: 'boolean',
			                hint: 'Does this skill show up in the marketplace and can other devs use it as a dependency?',
			                options: undefined
			            },
			            /** Global. Does this skill require needing to be installed anywhere. */
			            'canBeInstalled': {
			                label: 'Global',
			                type: 'boolean',
			                hint: 'Does this skill require needing to be installed anywhere.',
			                defaultValue: true,
			                options: undefined
			            },
			            /** Namespace. */
			            'slug': {
			                label: 'Namespace',
			                type: 'text',
			                options: undefined
			            },
			    }
		}

		interface RegisterSkillEmitPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.RegisterSkillEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface RegisterSkillEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource | undefined | null
				
				'payload': SpruceSchemas.Mercury.v2020_12_25.RegisterSkillEmitPayload
		}

		interface RegisterSkillEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'registerSkillEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.RegisterSkillEmitPayloadSchema,}
			            },
			    }
		}

		interface RegisterSkillEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.RegisterSkillEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface RegisterSkillResponsePayload {
			
				
				'skill': SpruceSchemas.Spruce.v2020_07_22.Skill
		}

		interface RegisterSkillResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'registerSkillResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'skill': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Spruce.v2020_07_22.SkillSchema,}
			            },
			    }
		}

		interface RegisterSkillResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.RegisterSkillResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface RemoveRoleEmitTarget {
			
				
				'organizationId'?: string | undefined | null
				
				'locationId'?: string | undefined | null
		}

		interface RemoveRoleEmitTargetSchema extends SpruceSchema.Schema {
			id: 'removeRoleEmitTarget',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'organizationId': {
			                type: 'id',
			                options: undefined
			            },
			            /** . */
			            'locationId': {
			                type: 'id',
			                options: undefined
			            },
			    }
		}

		interface RemoveRoleEmitTargetEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.RemoveRoleEmitTargetSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface RemoveRoleEmitPayload {
			
				
				'personId': string
				
				'roleId': string
		}

		interface RemoveRoleEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'removeRoleEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'personId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'roleId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface RemoveRoleEmitPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.RemoveRoleEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface RemoveRoleEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource | undefined | null
				
				'target'?: SpruceSchemas.Mercury.v2020_12_25.RemoveRoleEmitTarget | undefined | null
				
				'payload': SpruceSchemas.Mercury.v2020_12_25.RemoveRoleEmitPayload
		}

		interface RemoveRoleEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'removeRoleEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.RemoveRoleEmitTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.RemoveRoleEmitPayloadSchema,}
			            },
			    }
		}

		interface RemoveRoleEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.RemoveRoleEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface RemoveRoleResponsePayload {
			
		}

		interface RemoveRoleResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'removeRoleResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			    }
		}

		interface RemoveRoleResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.RemoveRoleResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface RequestDataDeletedEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource | undefined | null
		}

		interface RequestDataDeletedEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'requestDataDeletedEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			    }
		}

		interface RequestDataDeletedEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.RequestDataDeletedEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface RequestDataDeletedRespondPayload {
			
		}

		interface RequestDataDeletedRespondPayloadSchema extends SpruceSchema.Schema {
			id: 'requestDataDeletedRespondPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			    }
		}

		interface RequestDataDeletedRespondPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.RequestDataDeletedRespondPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface RequestPinEmitPayload {
			
				
				'phone': string
		}

		interface RequestPinEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'requestPinEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'phone': {
			                type: 'phone',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface RequestPinEmitPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.RequestPinEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface RequestPinEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource | undefined | null
				
				'payload': SpruceSchemas.Mercury.v2020_12_25.RequestPinEmitPayload
		}

		interface RequestPinEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'requestPinEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.RequestPinEmitPayloadSchema,}
			            },
			    }
		}

		interface RequestPinEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.RequestPinEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface RequestPinResponsePayload {
			
				
				'challenge': string
		}

		interface RequestPinResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'requestPinResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'challenge': {
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface RequestPinResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.RequestPinResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ResetPasswordEmitTarget {
			
				
				'phone'?: string | undefined | null
				
				'username'?: string | undefined | null
		}

		interface ResetPasswordEmitTargetSchema extends SpruceSchema.Schema {
			id: 'resetPasswordEmitTarget',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'phone': {
			                type: 'phone',
			                options: undefined
			            },
			            /** . */
			            'username': {
			                type: 'text',
			                options: undefined
			            },
			    }
		}

		interface ResetPasswordEmitTargetEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ResetPasswordEmitTargetSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ResetPasswordEmitPayload {
			
				
				'securityQuestions': SpruceSchemas.Mercury.v2020_12_25.SecurityQuestion[]
				
				'newPassword': string
				
				'newPasswordConfirm': string
		}

		interface ResetPasswordEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'resetPasswordEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'securityQuestions': {
			                type: 'schema',
			                isRequired: true,
			                isArray: true,
			                minArrayLength: 0,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.SecurityQuestionSchema,}
			            },
			            /** . */
			            'newPassword': {
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'newPasswordConfirm': {
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface ResetPasswordEmitPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ResetPasswordEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ResetPasswordEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource | undefined | null
				
				'target'?: SpruceSchemas.Mercury.v2020_12_25.ResetPasswordEmitTarget | undefined | null
				
				'payload': SpruceSchemas.Mercury.v2020_12_25.ResetPasswordEmitPayload
		}

		interface ResetPasswordEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'resetPasswordEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.ResetPasswordEmitTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.ResetPasswordEmitPayloadSchema,}
			            },
			    }
		}

		interface ResetPasswordEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ResetPasswordEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ResetPasswordResponsePayload {
			
				
				'person': SpruceSchemas.Spruce.v2020_07_22.Person
		}

		interface ResetPasswordResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'resetPasswordResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'person': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Spruce.v2020_07_22.PersonSchema,}
			            },
			    }
		}

		interface ResetPasswordResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ResetPasswordResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface SavePermissionsEmitTarget {
			
				
				'locationId'?: string | undefined | null
				
				'organizationId'?: string | undefined | null
				
				'permissionPersonId'?: string | undefined | null
				
				'permissionSkillId'?: string | undefined | null
				
				'permissionContractId': string
				
				'roleId'?: string | undefined | null
		}

		interface SavePermissionsEmitTargetSchema extends SpruceSchema.Schema {
			id: 'savePermissionsEmitTarget',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'locationId': {
			                type: 'id',
			                options: undefined
			            },
			            /** . */
			            'organizationId': {
			                type: 'id',
			                options: undefined
			            },
			            /** . */
			            'permissionPersonId': {
			                type: 'id',
			                options: undefined
			            },
			            /** . */
			            'permissionSkillId': {
			                type: 'id',
			                options: undefined
			            },
			            /** . */
			            'permissionContractId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'roleId': {
			                type: 'id',
			                options: undefined
			            },
			    }
		}

		interface SavePermissionsEmitTargetEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.SavePermissionsEmitTargetSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface SavePermissionsPermission {
			
				/** id. Hyphen separated id for this permission, e.g. can-unlock-doors */
				'id': string
				
				'can': SpruceSchemas.Mercury.v2020_12_25.StatusFlags
		}

		interface SavePermissionsPermissionSchema extends SpruceSchema.Schema {
			id: 'savePermissionsPermission',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** id. Hyphen separated id for this permission, e.g. can-unlock-doors */
			            'id': {
			                label: 'id',
			                type: 'text',
			                isRequired: true,
			                hint: 'Hyphen separated id for this permission, e.g. can-unlock-doors',
			                options: undefined
			            },
			            /** . */
			            'can': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.StatusFlagsSchema,}
			            },
			    }
		}

		interface SavePermissionsPermissionEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.SavePermissionsPermissionSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface SavePermissionsEmitPayload {
			
				
				'permissions': SpruceSchemas.Mercury.v2020_12_25.SavePermissionsPermission[]
		}

		interface SavePermissionsEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'savePermissionsEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'permissions': {
			                type: 'schema',
			                isRequired: true,
			                isArray: true,
			                minArrayLength: 1,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.SavePermissionsPermissionSchema,}
			            },
			    }
		}

		interface SavePermissionsEmitPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.SavePermissionsEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface SavePermissionsEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource | undefined | null
				
				'target': SpruceSchemas.Mercury.v2020_12_25.SavePermissionsEmitTarget
				
				'payload': SpruceSchemas.Mercury.v2020_12_25.SavePermissionsEmitPayload
		}

		interface SavePermissionsEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'savePermissionsEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.SavePermissionsEmitTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.SavePermissionsEmitPayloadSchema,}
			            },
			    }
		}

		interface SavePermissionsEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.SavePermissionsEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface SavePermissionsResponsePayload {
			
				
				'success': boolean
		}

		interface SavePermissionsResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'savePermissionsResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'success': {
			                type: 'boolean',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface SavePermissionsResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.SavePermissionsResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ScrambleAccountEmitTarget {
			
				
				'personId'?: string | undefined | null
		}

		interface ScrambleAccountEmitTargetSchema extends SpruceSchema.Schema {
			id: 'scrambleAccountEmitTarget',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'personId': {
			                type: 'id',
			                options: undefined
			            },
			    }
		}

		interface ScrambleAccountEmitTargetEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ScrambleAccountEmitTargetSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ScrambleAccountEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource | undefined | null
				
				'target'?: SpruceSchemas.Mercury.v2020_12_25.ScrambleAccountEmitTarget | undefined | null
		}

		interface ScrambleAccountEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'scrambleAccountEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.ScrambleAccountEmitTargetSchema,}
			            },
			    }
		}

		interface ScrambleAccountEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ScrambleAccountEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ScrambleAccountResponsePayload {
			
		}

		interface ScrambleAccountResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'scrambleAccountResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			    }
		}

		interface ScrambleAccountResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ScrambleAccountResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface SendMessageTarget {
			
				
				'locationId'?: string | undefined | null
				
				'personId'?: string | undefined | null
				
				'organizationId'?: string | undefined | null
				
				'skillId'?: string | undefined | null
				
				'roleId'?: string | undefined | null
				
				'phone'?: string | undefined | null
		}

		interface SendMessageTargetSchema extends SpruceSchema.Schema {
			id: 'sendMessageTarget',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'locationId': {
			                type: 'id',
			                options: undefined
			            },
			            /** . */
			            'personId': {
			                type: 'id',
			                options: undefined
			            },
			            /** . */
			            'organizationId': {
			                type: 'id',
			                options: undefined
			            },
			            /** . */
			            'skillId': {
			                type: 'id',
			                options: undefined
			            },
			            /** . */
			            'roleId': {
			                type: 'id',
			                options: undefined
			            },
			            /** . */
			            'phone': {
			                type: 'phone',
			                options: undefined
			            },
			    }
		}

		interface SendMessageTargetEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.SendMessageTargetSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface SendMessageEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource | undefined | null
				
				'target'?: SpruceSchemas.Mercury.v2020_12_25.SendMessageTarget | undefined | null
				
				'payload': SpruceSchemas.Mercury.v2020_12_25.SendMessageEmitPayload
		}

		interface SendMessageEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'sendMessageEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.SendMessageTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.SendMessageEmitPayloadSchema,}
			            },
			    }
		}

		interface SendMessageEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.SendMessageEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface SendMessageMessagePayload {
			
				/** . An arbitrary id that can be used to track this message when being sent and not yet assigned an Id. */
				'trackingId'?: string | undefined | null
				
				'classification': ("auth" | "transactional" | "promotional" | "incoming")
				
				'body': string
				
				'context'?: (Record<string, any>) | undefined | null
				
				'topicId'?: string | undefined | null
				
				'links'?: SpruceSchemas.Spruce.v2020_07_22.Link[] | undefined | null
				
				'choices'?: SpruceSchemas.Spruce.v2020_07_22.Choice[] | undefined | null
		}

		interface SendMessageMessagePayloadSchema extends SpruceSchema.Schema {
			id: 'sendMessageMessagePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . An arbitrary id that can be used to track this message when being sent and not yet assigned an Id. */
			            'trackingId': {
			                type: 'id',
			                hint: 'An arbitrary id that can be used to track this message when being sent and not yet assigned an Id.',
			                options: undefined
			            },
			            /** . */
			            'classification': {
			                type: 'select',
			                isRequired: true,
			                options: {choices: [{"value":"auth","label":"Auth"},{"value":"transactional","label":"transactional"},{"value":"promotional","label":"Promotional"},{"value":"incoming","label":"incoming"}],}
			            },
			            /** . */
			            'body': {
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'context': {
			                type: 'raw',
			                isPrivate: true,
			                options: {valueType: `Record<string, any>`,}
			            },
			            /** . */
			            'topicId': {
			                type: 'id',
			                options: undefined
			            },
			            /** . */
			            'links': {
			                type: 'schema',
			                isArray: true,
			                minArrayLength: 0,
			                options: {schema: SpruceSchemas.Spruce.v2020_07_22.LinkSchema,}
			            },
			            /** . */
			            'choices': {
			                type: 'schema',
			                isArray: true,
			                options: {schema: SpruceSchemas.Spruce.v2020_07_22.ChoiceSchema,}
			            },
			    }
		}

		interface SendMessageMessagePayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.SendMessageMessagePayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface SendMessageEmitPayload {
			
				
				'message': SpruceSchemas.Mercury.v2020_12_25.SendMessageMessagePayload
		}

		interface SendMessageEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'sendMessageEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'message': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.SendMessageMessagePayloadSchema,}
			            },
			    }
		}

		interface SendMessageEmitPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.SendMessageEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface SendMessageResponsePayload {
			
				
				'message': SpruceSchemas.Spruce.v2020_07_22.Message
		}

		interface SendMessageResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'sendMessageResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'message': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Spruce.v2020_07_22.MessageSchema,}
			            },
			    }
		}

		interface SendMessageResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.SendMessageResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface SetAuthorizerStatusEmitTarget {
			
				
				'locationId': string
				/** . The person to set the status for. If empty, looks at logged in person's status. */
				'personId'?: string | undefined | null
		}

		interface SetAuthorizerStatusEmitTargetSchema extends SpruceSchema.Schema {
			id: 'setAuthorizerStatusEmitTarget',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'locationId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** . The person to set the status for. If empty, looks at logged in person's status. */
			            'personId': {
			                type: 'id',
			                hint: 'The person to set the status for. If empty, looks at logged in person\'s status.',
			                options: undefined
			            },
			    }
		}

		interface SetAuthorizerStatusEmitTargetEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.SetAuthorizerStatusEmitTargetSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface SetAuthorizerStatusEmitPayload {
			
				/** Status. */
				'statuses': ("clockedIn" | "clockedOut" | "onPrem" | "offPrem")[]
		}

		interface SetAuthorizerStatusEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'setAuthorizerStatusEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Status. */
			            'statuses': {
			                label: 'Status',
			                type: 'select',
			                isRequired: true,
			                isArray: true,
			                minArrayLength: 0,
			                options: {choices: [{"label":"Clocked in","value":"clockedIn"},{"label":"Clocked out","value":"clockedOut"},{"label":"On premises","value":"onPrem"},{"label":"Off premises","value":"offPrem"}],}
			            },
			    }
		}

		interface SetAuthorizerStatusEmitPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.SetAuthorizerStatusEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface SetAuthorizorStatusEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource | undefined | null
				
				'target': SpruceSchemas.Mercury.v2020_12_25.SetAuthorizerStatusEmitTarget
				
				'payload': SpruceSchemas.Mercury.v2020_12_25.SetAuthorizerStatusEmitPayload
		}

		interface SetAuthorizorStatusEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'setAuthorizorStatusEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.SetAuthorizerStatusEmitTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.SetAuthorizerStatusEmitPayloadSchema,}
			            },
			    }
		}

		interface SetAuthorizorStatusEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.SetAuthorizorStatusEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface SetAuthorizerStatusResponsePayload {
			
		}

		interface SetAuthorizerStatusResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'setAuthorizerStatusResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			    }
		}

		interface SetAuthorizerStatusResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.SetAuthorizerStatusResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface SignupEmitTarget {
			
				
				'locationId'?: string | undefined | null
		}

		interface SignupEmitTargetSchema extends SpruceSchema.Schema {
			id: 'signupEmitTarget',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'locationId': {
			                type: 'id',
			                options: undefined
			            },
			    }
		}

		interface SignupEmitTargetEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.SignupEmitTargetSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface SignupEmitPayload {
			
				
				'phone'?: string | undefined | null
				
				'username'?: string | undefined | null
				
				'firstName'?: string | undefined | null
				
				'lastName'?: string | undefined | null
				
				'password': string
				
				'macAddress'?: string | undefined | null
				
				'passwordConfirm': string
				
				'securityQuestions': SpruceSchemas.Mercury.v2020_12_25.SecurityQuestion[]
		}

		interface SignupEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'signupEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'phone': {
			                type: 'phone',
			                options: undefined
			            },
			            /** . */
			            'username': {
			                type: 'text',
			                options: undefined
			            },
			            /** . */
			            'firstName': {
			                type: 'text',
			                options: undefined
			            },
			            /** . */
			            'lastName': {
			                type: 'text',
			                options: undefined
			            },
			            /** . */
			            'password': {
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'macAddress': {
			                type: 'id',
			                options: undefined
			            },
			            /** . */
			            'passwordConfirm': {
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'securityQuestions': {
			                type: 'schema',
			                isRequired: true,
			                isArray: true,
			                minArrayLength: 2,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.SecurityQuestionSchema,}
			            },
			    }
		}

		interface SignupEmitPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.SignupEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface SignupEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource | undefined | null
				
				'target'?: SpruceSchemas.Mercury.v2020_12_25.SignupEmitTarget | undefined | null
				
				'payload': SpruceSchemas.Mercury.v2020_12_25.SignupEmitPayload
		}

		interface SignupEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'signupEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.SignupEmitTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.SignupEmitPayloadSchema,}
			            },
			    }
		}

		interface SignupEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.SignupEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface SignupResponsePayload {
			
				
				'token': string
				
				'person': SpruceSchemas.Spruce.v2020_07_22.Person
		}

		interface SignupResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'signupResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'token': {
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'person': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Spruce.v2020_07_22.PersonSchema,}
			            },
			    }
		}

		interface SignupResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.SignupResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface SubmitErrorMessageFeedbackEmitPayload {
			
				/** Error code. */
				'errorCode'?: string | undefined | null
				/** Error message. */
				'errorMessage': string
				/** Stack traces. */
				'stackTrace': string
				/** Href. */
				'fromHref': string
				
				'thoughts': string
		}

		interface SubmitErrorMessageFeedbackEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'submitErrorMessageFeedbackEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Error code. */
			            'errorCode': {
			                label: 'Error code',
			                type: 'text',
			                options: undefined
			            },
			            /** Error message. */
			            'errorMessage': {
			                label: 'Error message',
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			            /** Stack traces. */
			            'stackTrace': {
			                label: 'Stack traces',
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			            /** Href. */
			            'fromHref': {
			                label: 'Href',
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'thoughts': {
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface SubmitErrorMessageFeedbackEmitPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.SubmitErrorMessageFeedbackEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface SubmitErrorMessageFeedbackEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource | undefined | null
				
				'payload': SpruceSchemas.Mercury.v2020_12_25.SubmitErrorMessageFeedbackEmitPayload
		}

		interface SubmitErrorMessageFeedbackEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'submitErrorMessageFeedbackEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.SubmitErrorMessageFeedbackEmitPayloadSchema,}
			            },
			    }
		}

		interface SubmitErrorMessageFeedbackEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.SubmitErrorMessageFeedbackEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface SyncEventContractsEmitPayload {
			
				
				'contract': SpruceSchemas.Mercury.v2020_12_25.EventContract
		}

		interface SyncEventContractsEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'syncEventContractsEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			importsWhenRemote: ['import \'@sprucelabs/mercury-types\'',],
			    fields: {
			            /** . */
			            'contract': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.EventContractSchema,}
			            },
			    }
		}

		interface SyncEventContractsEmitPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.SyncEventContractsEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface SyncEventContractsEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource | undefined | null
				
				'payload': SpruceSchemas.Mercury.v2020_12_25.SyncEventContractsEmitPayload
		}

		interface SyncEventContractsEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'syncEventContractsEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.SyncEventContractsEmitPayloadSchema,}
			            },
			    }
		}

		interface SyncEventContractsEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.SyncEventContractsEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface SyncEventContractsResponsePayload {
			
				/** Event names. */
				'fqens': string[]
		}

		interface SyncEventContractsResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'syncEventContractsResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Event names. */
			            'fqens': {
			                label: 'Event names',
			                type: 'text',
			                isRequired: true,
			                isArray: true,
			                minArrayLength: 0,
			                options: undefined
			            },
			    }
		}

		interface SyncEventContractsResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.SyncEventContractsResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface SyncPermissionContractsEmitPayload {
			
				/** Contracts. */
				'contracts': SpruceSchemas.Mercury.v2020_12_25.PermissionContract[]
		}

		interface SyncPermissionContractsEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'syncPermissionContractsEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Contracts. */
			            'contracts': {
			                label: 'Contracts',
			                type: 'schema',
			                isRequired: true,
			                isArray: true,
			                minArrayLength: 0,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.PermissionContractSchema,}
			            },
			    }
		}

		interface SyncPermissionContractsEmitPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.SyncPermissionContractsEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface SyncPermissionContractsResponsePayload {
			
				
				'contractRecords': SpruceSchemas.Mercury.v2020_12_25.FullPermissionContract[]
		}

		interface SyncPermissionContractsResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'syncPermissionContractsResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'contractRecords': {
			                type: 'schema',
			                isRequired: true,
			                isArray: true,
			                minArrayLength: 0,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.FullPermissionContractSchema,}
			            },
			    }
		}

		interface SyncPermissionContractsResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.SyncPermissionContractsResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface SyncPermissionContractsEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource | undefined | null
				
				'target'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventTarget | undefined | null
				
				'payload': SpruceSchemas.Mercury.v2020_12_25.SyncPermissionContractsEmitPayload
		}

		interface SyncPermissionContractsEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'syncPermissionContractsEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.SyncPermissionContractsEmitPayloadSchema,}
			            },
			    }
		}

		interface SyncPermissionContractsEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.SyncPermissionContractsEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface FullPermissionContract {
			
				
				'id': string
				
				'skillId'?: string | undefined | null
				
				'target'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventTarget | undefined | null
				
				'contract': SpruceSchemas.Mercury.v2020_12_25.PermissionContract
		}

		interface FullPermissionContractSchema extends SpruceSchema.Schema {
			id: 'fullPermissionContract',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'id': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'skillId': {
			                type: 'id',
			                options: undefined
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventTargetSchema,}
			            },
			            /** . */
			            'contract': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.PermissionContractSchema,}
			            },
			    }
		}

		interface FullPermissionContractEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.FullPermissionContractSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface UnInstallSkillEmitTarget {
			
				
				'skillId': string
				
				'organizationId': string
		}

		interface UnInstallSkillEmitTargetSchema extends SpruceSchema.Schema {
			id: 'unInstallSkillEmitTarget',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'skillId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'organizationId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface UnInstallSkillEmitTargetEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.UnInstallSkillEmitTargetSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface UninstallSkillEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource | undefined | null
				
				'target': SpruceSchemas.Mercury.v2020_12_25.UnInstallSkillEmitTarget
		}

		interface UninstallSkillEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'uninstallSkillEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.UnInstallSkillEmitTargetSchema,}
			            },
			    }
		}

		interface UninstallSkillEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.UninstallSkillEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface UnInstallSkillResponsePayload {
			
		}

		interface UnInstallSkillResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'unInstallSkillResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			    }
		}

		interface UnInstallSkillResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.UnInstallSkillResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface UnregisterConversationTopicsEmitPayload {
			
				
				'topics'?: string[] | undefined | null
				
				'shouldUnregisterAll'?: boolean | undefined | null
		}

		interface UnregisterConversationTopicsEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'unregisterConversationTopicsEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'topics': {
			                type: 'text',
			                isArray: true,
			                options: undefined
			            },
			            /** . */
			            'shouldUnregisterAll': {
			                type: 'boolean',
			                options: undefined
			            },
			    }
		}

		interface UnregisterConversationTopicsEmitPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.UnregisterConversationTopicsEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface UnregisterConversationTopicsEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource | undefined | null
				
				'payload'?: SpruceSchemas.Mercury.v2020_12_25.UnregisterConversationTopicsEmitPayload | undefined | null
		}

		interface UnregisterConversationTopicsEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'unregisterConversationTopicsEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.UnregisterConversationTopicsEmitPayloadSchema,}
			            },
			    }
		}

		interface UnregisterConversationTopicsEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.UnregisterConversationTopicsEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface UnregisterConversationTopicsResponsePayload {
			
		}

		interface UnregisterConversationTopicsResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'unregisterConversationTopicsResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			    }
		}

		interface UnregisterConversationTopicsResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.UnregisterConversationTopicsResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface UnregisterEventsEmitPayload {
			
				
				'eventNames'?: string[] | undefined | null
				
				'shouldUnregisterAll'?: boolean | undefined | null
		}

		interface UnregisterEventsEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'unregisterEventsEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'eventNames': {
			                type: 'text',
			                isArray: true,
			                options: undefined
			            },
			            /** . */
			            'shouldUnregisterAll': {
			                type: 'boolean',
			                options: undefined
			            },
			    }
		}

		interface UnregisterEventsEmitPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.UnregisterEventsEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface UnregisterEventsEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource | undefined | null
				
				'payload'?: SpruceSchemas.Mercury.v2020_12_25.UnregisterEventsEmitPayload | undefined | null
		}

		interface UnregisterEventsEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'unregisterEventsEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.UnregisterEventsEmitPayloadSchema,}
			            },
			    }
		}

		interface UnregisterEventsEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.UnregisterEventsEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface UnregisterEventsResponsePayload {
			
		}

		interface UnregisterEventsResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'unregisterEventsResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			    }
		}

		interface UnregisterEventsResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.UnregisterEventsResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface UnregisterListenersEmitPayload {
			
				
				'fullyQualifiedEventNames'?: string[] | undefined | null
				
				'shouldUnregisterAll'?: boolean | undefined | null
		}

		interface UnregisterListenersEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'unregisterListenersEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'fullyQualifiedEventNames': {
			                type: 'text',
			                isArray: true,
			                options: undefined
			            },
			            /** . */
			            'shouldUnregisterAll': {
			                type: 'boolean',
			                options: undefined
			            },
			    }
		}

		interface UnregisterListenersEmitPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.UnregisterListenersEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface UnregisterListenersEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource | undefined | null
				
				'payload'?: SpruceSchemas.Mercury.v2020_12_25.UnregisterListenersEmitPayload | undefined | null
		}

		interface UnregisterListenersEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'unregisterListenersEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.UnregisterListenersEmitPayloadSchema,}
			            },
			    }
		}

		interface UnregisterListenersEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.UnregisterListenersEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface UnregisterListenersResponsePayload {
			
				
				'unregisterCount': number
		}

		interface UnregisterListenersResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'unregisterListenersResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'unregisterCount': {
			                type: 'number',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface UnregisterListenersResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.UnregisterListenersResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface UnregisterSkillEmitTarget {
			
				
				'skillId': string
		}

		interface UnregisterSkillEmitTargetSchema extends SpruceSchema.Schema {
			id: 'unregisterSkillEmitTarget',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'skillId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface UnregisterSkillEmitTargetEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.UnregisterSkillEmitTargetSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface UnregisterSkillEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource | undefined | null
				
				'target': SpruceSchemas.Mercury.v2020_12_25.UnregisterSkillEmitTarget
		}

		interface UnregisterSkillEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'unregisterSkillEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.UnregisterSkillEmitTargetSchema,}
			            },
			    }
		}

		interface UnregisterSkillEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.UnregisterSkillEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface UnregisterSkillResponsePayload {
			
		}

		interface UnregisterSkillResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'unregisterSkillResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			    }
		}

		interface UnregisterSkillResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.UnregisterSkillResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface UpdateLocationEmitTarget {
			
				
				'locationId': string
		}

		interface UpdateLocationEmitTargetSchema extends SpruceSchema.Schema {
			id: 'updateLocationEmitTarget',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'locationId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface UpdateLocationEmitTargetEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.UpdateLocationEmitTargetSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface UpdateLocationEmitPayload {
			
				/** Name. */
				'name'?: string | undefined | null
				/** Location number. You can use other symbols, like # or dashes. #123 or 32-US-5 */
				'num'?: string | undefined | null
				/** Slug. */
				'slug'?: string | undefined | null
				/** Public. Is this location viewable by guests? */
				'isPublic'?: boolean | undefined | null
				/** Main Phone. */
				'phone'?: string | undefined | null
				/** Timezone. */
				'timezone'?: ("UTC" | "Pacific/Honolulu" | "America/Anchorage" | "America/Los_Angeles" | "America/Denver" | "America/Phoenix" | "America/Chicago" | "America/Guatemala" | "America/New_York" | "America/Panama" | "America/Sao_Paulo" | "America/Argentina/Buenos_Aires" | "Europe/London" | "Europe/Berlin" | "Europe/Athens" | "Europe/Moscow" | "Africa/Lagos" | "Africa/Cairo" | "Africa/Johannesburg" | "Asia/Dubai" | "Asia/Karachi" | "Asia/Kolkata" | "Asia/Shanghai" | "Asia/Tokyo" | "Asia/Seoul" | "Australia/Perth" | "Australia/Adelaide" | "Australia/Sydney" | "Pacific/Auckland" | "Pacific/Port_Moresby") | undefined | null
				/** Address. */
				'address'?: SpruceSchema.AddressFieldValue | undefined | null
				/** Virtual. Is this a virtual location? */
				'isVirtual'?: boolean | undefined | null
				
				'dateCreated'?: SpruceSchema.DateTimeFieldValue | undefined | null
				
				'dateDeleted'?: SpruceSchema.DateTimeFieldValue | undefined | null
				
				'organizationId'?: string | undefined | null
		}

		interface UpdateLocationEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'updateLocationEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Name. */
			            'name': {
			                label: 'Name',
			                type: 'text',
			                options: undefined
			            },
			            /** Location number. You can use other symbols, like # or dashes. #123 or 32-US-5 */
			            'num': {
			                label: 'Location number',
			                type: 'text',
			                hint: 'You can use other symbols, like # or dashes. #123 or 32-US-5',
			                options: undefined
			            },
			            /** Slug. */
			            'slug': {
			                label: 'Slug',
			                type: 'text',
			                options: undefined
			            },
			            /** Public. Is this location viewable by guests? */
			            'isPublic': {
			                label: 'Public',
			                type: 'boolean',
			                hint: 'Is this location viewable by guests?',
			                defaultValue: false,
			                options: undefined
			            },
			            /** Main Phone. */
			            'phone': {
			                label: 'Main Phone',
			                type: 'phone',
			                options: undefined
			            },
			            /** Timezone. */
			            'timezone': {
			                label: 'Timezone',
			                type: 'select',
			                options: {choices: [{"value":"UTC","label":"UTC"},{"value":"Pacific/Honolulu","label":"Hawaii Time"},{"value":"America/Anchorage","label":"Alaska Time"},{"value":"America/Los_Angeles","label":"Pacific Time"},{"value":"America/Denver","label":"Mountain Time"},{"value":"America/Phoenix","label":"Phoenix Time (No DST)"},{"value":"America/Chicago","label":"Central Time"},{"value":"America/Guatemala","label":"Central Standard Time (No DST)"},{"value":"America/New_York","label":"Eastern Time"},{"value":"America/Panama","label":"Eastern Standard Time (No DST)"},{"value":"America/Sao_Paulo","label":"Brasília Time"},{"value":"America/Argentina/Buenos_Aires","label":"Argentina Time (No DST)"},{"value":"Europe/London","label":"UK Time"},{"value":"Europe/Berlin","label":"Central Europe Time"},{"value":"Europe/Athens","label":"Eastern Europe Time"},{"value":"Europe/Moscow","label":"Moscow Time"},{"value":"Africa/Lagos","label":"West Africa Time"},{"value":"Africa/Cairo","label":"Eastern Africa Time"},{"value":"Africa/Johannesburg","label":"South Africa Time"},{"value":"Asia/Dubai","label":"Gulf Standard Time"},{"value":"Asia/Karachi","label":"Pakistan Time"},{"value":"Asia/Kolkata","label":"India Time"},{"value":"Asia/Shanghai","label":"China Time"},{"value":"Asia/Tokyo","label":"Japan Time"},{"value":"Asia/Seoul","label":"Korea Time"},{"value":"Australia/Perth","label":"Western Australia Time"},{"value":"Australia/Adelaide","label":"Central Australia Time"},{"value":"Australia/Sydney","label":"Eastern Australia Time"},{"value":"Pacific/Auckland","label":"New Zealand Time"},{"value":"Pacific/Port_Moresby","label":"Papua New Guinea Time (No DST)"}],}
			            },
			            /** Address. */
			            'address': {
			                label: 'Address',
			                type: 'address',
			                options: undefined
			            },
			            /** Virtual. Is this a virtual location? */
			            'isVirtual': {
			                label: 'Virtual',
			                type: 'boolean',
			                hint: 'Is this a virtual location?',
			                options: undefined
			            },
			            /** . */
			            'dateCreated': {
			                type: 'dateTime',
			                options: undefined
			            },
			            /** . */
			            'dateDeleted': {
			                type: 'dateTime',
			                options: undefined
			            },
			            /** . */
			            'organizationId': {
			                type: 'id',
			                options: undefined
			            },
			    }
		}

		interface UpdateLocationEmitPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.UpdateLocationEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface UpdateLocationEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource | undefined | null
				
				'target': SpruceSchemas.Mercury.v2020_12_25.UpdateLocationEmitTarget
				
				'payload'?: SpruceSchemas.Mercury.v2020_12_25.UpdateLocationEmitPayload | undefined | null
		}

		interface UpdateLocationEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'updateLocationEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.UpdateLocationEmitTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.UpdateLocationEmitPayloadSchema,}
			            },
			    }
		}

		interface UpdateLocationEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.UpdateLocationEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface UpdateLocationResponsePayload {
			
				
				'location': SpruceSchemas.Spruce.v2020_07_22.Location
		}

		interface UpdateLocationResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'updateLocationResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'location': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Spruce.v2020_07_22.LocationSchema,}
			            },
			    }
		}

		interface UpdateLocationResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.UpdateLocationResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface UpdateOrgEmitTarget {
			
				
				'organizationId': string
		}

		interface UpdateOrgEmitTargetSchema extends SpruceSchema.Schema {
			id: 'updateOrgEmitTarget',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'organizationId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface UpdateOrgEmitTargetEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.UpdateOrgEmitTargetSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface UpdateOrgEmitPayload {
			
				/** Name. */
				'name'?: string | undefined | null
				/** Address. */
				'address'?: SpruceSchema.AddressFieldValue | undefined | null
				/** Public. Is this organization viewable by guests? */
				'isPublic'?: boolean | undefined | null
				
				'dateCreated'?: SpruceSchema.DateTimeFieldValue | undefined | null
				
				'dateDeleted'?: SpruceSchema.DateTimeFieldValue | undefined | null
		}

		interface UpdateOrgEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'updateOrgEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Name. */
			            'name': {
			                label: 'Name',
			                type: 'text',
			                options: undefined
			            },
			            /** Address. */
			            'address': {
			                label: 'Address',
			                type: 'address',
			                options: undefined
			            },
			            /** Public. Is this organization viewable by guests? */
			            'isPublic': {
			                label: 'Public',
			                type: 'boolean',
			                hint: 'Is this organization viewable by guests?',
			                defaultValue: false,
			                options: undefined
			            },
			            /** . */
			            'dateCreated': {
			                type: 'dateTime',
			                options: undefined
			            },
			            /** . */
			            'dateDeleted': {
			                type: 'dateTime',
			                options: undefined
			            },
			    }
		}

		interface UpdateOrgEmitPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.UpdateOrgEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface UpdateOrganizationEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource | undefined | null
				
				'target': SpruceSchemas.Mercury.v2020_12_25.UpdateOrgEmitTarget
				
				'payload'?: SpruceSchemas.Mercury.v2020_12_25.UpdateOrgEmitPayload | undefined | null
		}

		interface UpdateOrganizationEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'updateOrganizationEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.UpdateOrgEmitTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.UpdateOrgEmitPayloadSchema,}
			            },
			    }
		}

		interface UpdateOrganizationEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.UpdateOrganizationEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface UpdateOrg {
			
				/** Name. */
				'name'?: string | undefined | null
				/** Address. */
				'address'?: SpruceSchema.AddressFieldValue | undefined | null
				/** Slug. */
				'slug'?: string | undefined | null
				/** Public. Is this organization viewable by guests? */
				'isPublic'?: boolean | undefined | null
				
				'dateCreated'?: SpruceSchema.DateTimeFieldValue | undefined | null
				
				'dateDeleted'?: SpruceSchema.DateTimeFieldValue | undefined | null
		}

		interface UpdateOrgSchema extends SpruceSchema.Schema {
			id: 'updateOrg',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Name. */
			            'name': {
			                label: 'Name',
			                type: 'text',
			                options: undefined
			            },
			            /** Address. */
			            'address': {
			                label: 'Address',
			                type: 'address',
			                options: undefined
			            },
			            /** Slug. */
			            'slug': {
			                label: 'Slug',
			                type: 'text',
			                options: undefined
			            },
			            /** Public. Is this organization viewable by guests? */
			            'isPublic': {
			                label: 'Public',
			                type: 'boolean',
			                hint: 'Is this organization viewable by guests?',
			                defaultValue: false,
			                options: undefined
			            },
			            /** . */
			            'dateCreated': {
			                type: 'dateTime',
			                options: undefined
			            },
			            /** . */
			            'dateDeleted': {
			                type: 'dateTime',
			                options: undefined
			            },
			    }
		}

		interface UpdateOrgEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.UpdateOrgSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface UpdateOrgResponsePayload {
			
				
				'organization': SpruceSchemas.Mercury.v2020_12_25.UpdateOrg
		}

		interface UpdateOrgResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'updateOrgResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'organization': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.UpdateOrgSchema,}
			            },
			    }
		}

		interface UpdateOrgResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.UpdateOrgResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface UpdatePersonEmitTarget {
			
				
				'personId'?: string | undefined | null
				
				'organizationId'?: string | undefined | null
				
				'locationId'?: string | undefined | null
		}

		interface UpdatePersonEmitTargetSchema extends SpruceSchema.Schema {
			id: 'updatePersonEmitTarget',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'personId': {
			                type: 'id',
			                options: undefined
			            },
			            /** . */
			            'organizationId': {
			                type: 'id',
			                options: undefined
			            },
			            /** . */
			            'locationId': {
			                type: 'id',
			                options: undefined
			            },
			    }
		}

		interface UpdatePersonEmitTargetEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.UpdatePersonEmitTargetSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface SecurityQuestion {
			
				
				'question': string
				
				'answer': string
		}

		interface SecurityQuestionSchema extends SpruceSchema.Schema {
			id: 'securityQuestion',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'question': {
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'answer': {
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface SecurityQuestionEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.SecurityQuestionSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface UpdatePersonEmitPayload {
			
				/** First name. */
				'firstName'?: string | undefined | null
				/** Last name. */
				'lastName'?: string | undefined | null
				/** Timezone. */
				'timezone'?: ("UTC" | "Pacific/Honolulu" | "America/Anchorage" | "America/Los_Angeles" | "America/Denver" | "America/Phoenix" | "America/Chicago" | "America/Guatemala" | "America/New_York" | "America/Panama" | "America/Sao_Paulo" | "America/Argentina/Buenos_Aires" | "Europe/London" | "Europe/Berlin" | "Europe/Athens" | "Europe/Moscow" | "Africa/Lagos" | "Africa/Cairo" | "Africa/Johannesburg" | "Asia/Dubai" | "Asia/Karachi" | "Asia/Kolkata" | "Asia/Shanghai" | "Asia/Tokyo" | "Asia/Seoul" | "Australia/Perth" | "Australia/Adelaide" | "Australia/Sydney" | "Pacific/Auckland" | "Pacific/Port_Moresby") | undefined | null
				/** Avatar src. */
				'avatar'?: SpruceSchema.ImageFieldValue | undefined | null
				/** Phone. A number that can be texted */
				'phone'?: string | undefined | null
				/** Username. An optional username if the person does not want to login using their phone */
				'username'?: string | undefined | null
				
				'password'?: string | undefined | null
				
				'securityQuestions'?: SpruceSchemas.Mercury.v2020_12_25.SecurityQuestion[] | undefined | null
		}

		interface UpdatePersonEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'updatePersonEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** First name. */
			            'firstName': {
			                label: 'First name',
			                type: 'text',
			                isPrivate: true,
			                options: undefined
			            },
			            /** Last name. */
			            'lastName': {
			                label: 'Last name',
			                type: 'text',
			                isPrivate: true,
			                options: undefined
			            },
			            /** Timezone. */
			            'timezone': {
			                label: 'Timezone',
			                type: 'select',
			                options: {choices: [{"value":"UTC","label":"UTC"},{"value":"Pacific/Honolulu","label":"Hawaii Time"},{"value":"America/Anchorage","label":"Alaska Time"},{"value":"America/Los_Angeles","label":"Pacific Time"},{"value":"America/Denver","label":"Mountain Time"},{"value":"America/Phoenix","label":"Phoenix Time (No DST)"},{"value":"America/Chicago","label":"Central Time"},{"value":"America/Guatemala","label":"Central Standard Time (No DST)"},{"value":"America/New_York","label":"Eastern Time"},{"value":"America/Panama","label":"Eastern Standard Time (No DST)"},{"value":"America/Sao_Paulo","label":"Brasília Time"},{"value":"America/Argentina/Buenos_Aires","label":"Argentina Time (No DST)"},{"value":"Europe/London","label":"UK Time"},{"value":"Europe/Berlin","label":"Central Europe Time"},{"value":"Europe/Athens","label":"Eastern Europe Time"},{"value":"Europe/Moscow","label":"Moscow Time"},{"value":"Africa/Lagos","label":"West Africa Time"},{"value":"Africa/Cairo","label":"Eastern Africa Time"},{"value":"Africa/Johannesburg","label":"South Africa Time"},{"value":"Asia/Dubai","label":"Gulf Standard Time"},{"value":"Asia/Karachi","label":"Pakistan Time"},{"value":"Asia/Kolkata","label":"India Time"},{"value":"Asia/Shanghai","label":"China Time"},{"value":"Asia/Tokyo","label":"Japan Time"},{"value":"Asia/Seoul","label":"Korea Time"},{"value":"Australia/Perth","label":"Western Australia Time"},{"value":"Australia/Adelaide","label":"Central Australia Time"},{"value":"Australia/Sydney","label":"Eastern Australia Time"},{"value":"Pacific/Auckland","label":"New Zealand Time"},{"value":"Pacific/Port_Moresby","label":"Papua New Guinea Time (No DST)"}],}
			            },
			            /** Avatar src. */
			            'avatar': {
			                label: 'Avatar src',
			                type: 'image',
			                options: {requiredSizes: ["*"],}
			            },
			            /** Phone. A number that can be texted */
			            'phone': {
			                label: 'Phone',
			                type: 'phone',
			                isPrivate: true,
			                hint: 'A number that can be texted',
			                options: undefined
			            },
			            /** Username. An optional username if the person does not want to login using their phone */
			            'username': {
			                label: 'Username',
			                type: 'text',
			                isPrivate: true,
			                hint: 'An optional username if the person does not want to login using their phone',
			                options: undefined
			            },
			            /** . */
			            'password': {
			                type: 'text',
			                options: undefined
			            },
			            /** . */
			            'securityQuestions': {
			                type: 'schema',
			                isArray: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.SecurityQuestionSchema,}
			            },
			    }
		}

		interface UpdatePersonEmitPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.UpdatePersonEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface UpdatePersonResponsePayload {
			
				
				'person': SpruceSchemas.Spruce.v2020_07_22.Person
		}

		interface UpdatePersonResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'updatePersonResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'person': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Spruce.v2020_07_22.PersonSchema,}
			            },
			    }
		}

		interface UpdatePersonResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.UpdatePersonResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface UpdateRoleEmitTarget {
			
				
				'roleId': string
		}

		interface UpdateRoleEmitTargetSchema extends SpruceSchema.Schema {
			id: 'updateRoleEmitTarget',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'roleId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface UpdateRoleEmitTargetEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.UpdateRoleEmitTargetSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface UpdateRoleEmitPayload {
			
				/** Name. */
				'name'?: string | undefined | null
				/** Base. A best practices starting point for a role based on the generalized roles at a company. */
				'base'?: ("owner" | "groupManager" | "manager" | "teammate" | "anonymous" | "loggedIn" | "guest") | undefined | null
				/** Description. */
				'description'?: string | undefined | null
				
				'dateDeleted'?: number | undefined | null
				
				'organizationId'?: string | undefined | null
				/** Public. Should I let people that are not part of this organization this role? */
				'isPublic'?: boolean | undefined | null
		}

		interface UpdateRoleEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'updateRoleEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Name. */
			            'name': {
			                label: 'Name',
			                type: 'text',
			                options: undefined
			            },
			            /** Base. A best practices starting point for a role based on the generalized roles at a company. */
			            'base': {
			                label: 'Base',
			                type: 'select',
			                hint: 'A best practices starting point for a role based on the generalized roles at a company.',
			                options: {choices: [{"label":"Owner","value":"owner"},{"label":"Group manager","value":"groupManager"},{"label":"Manager","value":"manager"},{"label":"Teammate","value":"teammate"},{"label":"Anonymous","value":"anonymous"},{"label":"Logged in","value":"loggedIn"},{"label":"Guest","value":"guest"}],}
			            },
			            /** Description. */
			            'description': {
			                label: 'Description',
			                type: 'text',
			                options: undefined
			            },
			            /** . */
			            'dateDeleted': {
			                type: 'number',
			                options: undefined
			            },
			            /** . */
			            'organizationId': {
			                type: 'id',
			                options: undefined
			            },
			            /** Public. Should I let people that are not part of this organization this role? */
			            'isPublic': {
			                label: 'Public',
			                type: 'boolean',
			                hint: 'Should I let people that are not part of this organization this role?',
			                options: undefined
			            },
			    }
		}

		interface UpdateRoleEmitPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.UpdateRoleEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface UpdateRoleEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource | undefined | null
				
				'target': SpruceSchemas.Mercury.v2020_12_25.UpdateRoleEmitTarget
				
				'payload'?: SpruceSchemas.Mercury.v2020_12_25.UpdateRoleEmitPayload | undefined | null
		}

		interface UpdateRoleEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'updateRoleEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.UpdateRoleEmitTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.UpdateRoleEmitPayloadSchema,}
			            },
			    }
		}

		interface UpdateRoleEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.UpdateRoleEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface UpdateRoleResponsePayload {
			
				
				'role': SpruceSchemas.Spruce.v2020_07_22.Role
		}

		interface UpdateRoleResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'updateRoleResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'role': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Spruce.v2020_07_22.RoleSchema,}
			            },
			    }
		}

		interface UpdateRoleResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.UpdateRoleResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface UpsertPermissionContractEmitTarget {
			
				
				'organizationId': string
				
				'permissionContractId': string
				
				'roleId': string
				
				'skillId'?: string | undefined | null
		}

		interface UpsertPermissionContractEmitTargetSchema extends SpruceSchema.Schema {
			id: 'upsertPermissionContractEmitTarget',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'organizationId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'permissionContractId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'roleId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'skillId': {
			                type: 'id',
			                options: undefined
			            },
			    }
		}

		interface UpsertPermissionContractEmitTargetEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.UpsertPermissionContractEmitTargetSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface UpsertPermissionContractsEmitPayload {
			
				/** Name. Human readable name for this contract */
				'name': string
				/** Description. */
				'description'?: string | undefined | null
				/** Require all permissions. */
				'requireAllPermissions'?: boolean | undefined | null
				
				'permissions': SpruceSchemas.Mercury.v2020_12_25.Permission[]
		}

		interface UpsertPermissionContractsEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'upsertPermissionContractsEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Name. Human readable name for this contract */
			            'name': {
			                label: 'Name',
			                type: 'text',
			                isRequired: true,
			                hint: 'Human readable name for this contract',
			                options: undefined
			            },
			            /** Description. */
			            'description': {
			                label: 'Description',
			                type: 'text',
			                options: undefined
			            },
			            /** Require all permissions. */
			            'requireAllPermissions': {
			                label: 'Require all permissions',
			                type: 'boolean',
			                defaultValue: false,
			                options: undefined
			            },
			            /** . */
			            'permissions': {
			                type: 'schema',
			                isRequired: true,
			                isArray: true,
			                minArrayLength: 0,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.PermissionSchema,}
			            },
			    }
		}

		interface UpsertPermissionContractsEmitPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.UpsertPermissionContractsEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface UpsertPermissionContractEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource | undefined | null
				
				'target': SpruceSchemas.Mercury.v2020_12_25.UpsertPermissionContractEmitTarget
				
				'payload': SpruceSchemas.Mercury.v2020_12_25.UpsertPermissionContractsEmitPayload
		}

		interface UpsertPermissionContractEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'upsertPermissionContractEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.UpsertPermissionContractEmitTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.UpsertPermissionContractsEmitPayloadSchema,}
			            },
			    }
		}

		interface UpsertPermissionContractEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.UpsertPermissionContractEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface UpsertPermissionContractResponsePayload {
			
				
				'permissionContract': SpruceSchemas.Mercury.v2020_12_25.PermissionContract
		}

		interface UpsertPermissionContractResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'upsertPermissionContractResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'permissionContract': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.PermissionContractSchema,}
			            },
			    }
		}

		interface UpsertPermissionContractResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.UpsertPermissionContractResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface VoteForFeatureEmitPayload {
			
				
				'featureKey': string
				
				'skillNamespace': string
		}

		interface VoteForFeatureEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'voteForFeatureEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'featureKey': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'skillNamespace': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface VoteForFeatureEmitPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.VoteForFeatureEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface VoteForFeatureEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource | undefined | null
				
				'payload': SpruceSchemas.Mercury.v2020_12_25.VoteForFeatureEmitPayload
		}

		interface VoteForFeatureEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'voteForFeatureEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.VoteForFeatureEmitPayloadSchema,}
			            },
			    }
		}

		interface VoteForFeatureEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.VoteForFeatureEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface VoteForFeatureResponsePayload {
			
				
				'totalVotes': number
		}

		interface VoteForFeatureResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'voteForFeatureResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'totalVotes': {
			                type: 'number',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface VoteForFeatureResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.VoteForFeatureResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface UpdatePersonEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource | undefined | null
				
				'target'?: SpruceSchemas.Mercury.v2020_12_25.UpdatePersonEmitTarget | undefined | null
				
				'payload'?: SpruceSchemas.Mercury.v2020_12_25.UpdatePersonEmitPayload | undefined | null
		}

		interface UpdatePersonEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'updatePersonEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			            /** . */
			            'target': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.UpdatePersonEmitTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.UpdatePersonEmitPayloadSchema,}
			            },
			    }
		}

		interface UpdatePersonEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.UpdatePersonEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface WhoamiEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource | undefined | null
		}

		interface WhoamiEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'whoamiEmitTargetAndPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** Source. */
			            'source': {
			                label: 'Source',
			                type: 'schema',
			                options: {schema: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSourceSchema,}
			            },
			    }
		}

		interface WhoamiEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.WhoamiEmitTargetAndPayloadSchema> {}

	}

}
