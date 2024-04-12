/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable no-redeclare */

export { SpruceSchemas } from '@sprucelabs/spruce-core-schemas/build/.spruce/schemas/core.schemas.types'

import { default as SchemaEntity } from '@sprucelabs/schema'



import * as SpruceSchema from '@sprucelabs/schema'

import '@sprucelabs/spruce-event-utils'
import '@sprucelabs/mercury-types'

declare module '@sprucelabs/spruce-core-schemas/build/.spruce/schemas/core.schemas.types' {


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface DeleteLocationEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
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

		
		interface AddRoleEmitTarget {
			
				
				'organizationId'?: string| undefined | null
				
				'locationId'?: string| undefined | null
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
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target'?: SpruceSchemas.Mercury.v2020_12_25.AddRoleEmitTarget| undefined | null
				
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
			
				
				'token'?: string| undefined | null
				
				'skillId'?: string| undefined | null
				
				'apiKey'?: string| undefined | null
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
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'payload'?: SpruceSchemas.Mercury.v2020_12_25.AuthenticateEmitPayload| undefined | null
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

		
		interface AuthSchema {
			
				
				'person'?: SpruceSchemas.Spruce.v2020_07_22.Person| undefined | null
				
				'skill'?: SpruceSchemas.Spruce.v2020_07_22.Skill| undefined | null
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
			
				
				'authorizerStatuses'?: ("clockedIn" | "clockedOut" | "onPrem" | "offPrem")| undefined | null
				
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
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
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
			
				
				'can'?: boolean| undefined | null
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

		
		interface ConfirmPinEmitPayload {
			
				
				'challenge': string
				
				'pin': string
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
			    }
		}

		interface ConfirmPinEmitPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ConfirmPinEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ConfirmPinEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
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
				'num'?: string| undefined | null
				/** Public. Is this location viewable by guests? */
				'isPublic'?: boolean| undefined | null
				/** Main Phone. */
				'phone'?: string| undefined | null
				/** Timezone. */
				'timezone'?: ("Pacific/Niue" | "Pacific/Pago_Pago" | "Pacific/Rarotonga" | "Pacific/Honolulu" | "Pacific/Tahiti" | "Pacific/Marquesas" | "Pacific/Gambier" | "America/Adak" | "America/Anchorage" | "America/Juneau" | "America/Metlakatla" | "America/Nome" | "America/Sitka" | "America/Yakutat" | "Pacific/Pitcairn" | "America/Hermosillo" | "America/Dawson_Creek" | "America/Fort_Nelson" | "America/Phoenix" | "America/Los_Angeles" | "America/Tijuana" | "America/Vancouver" | "America/Dawson" | "America/Whitehorse" | "America/Belize" | "America/Costa_Rica" | "America/El_Salvador" | "America/Guatemala" | "America/Managua" | "America/Regina" | "America/Swift_Current" | "America/Tegucigalpa" | "Pacific/Easter" | "Pacific/Galapagos" | "America/Chihuahua" | "America/Mazatlan" | "America/Boise" | "America/Cambridge_Bay" | "America/Denver" | "America/Edmonton" | "America/Inuvik" | "America/Ojinaga" | "America/Yellowknife" | "America/Eirunepe" | "America/Rio_Branco" | "America/Bahia_Banderas" | "America/North_Dakota/Beulah" | "America/North_Dakota/Center" | "America/Chicago" | "America/Indiana/Knox" | "America/Matamoros" | "America/Menominee" | "America/Merida" | "America/Mexico_City" | "America/Monterrey" | "America/North_Dakota/New_Salem" | "America/Rainy_River" | "America/Rankin_Inlet" | "America/Resolute" | "America/Indiana/Tell_City" | "America/Winnipeg" | "America/Bogota" | "America/Cancun" | "America/Jamaica" | "America/Panama" | "America/Guayaquil" | "America/Lima" | "America/Boa_Vista" | "America/Campo_Grande" | "America/Cuiaba" | "America/Manaus" | "America/Porto_Velho" | "America/Barbados" | "America/Martinique" | "America/Puerto_Rico" | "America/Santo_Domingo" | "America/La_Paz" | "America/Santiago" | "America/Havana" | "America/Detroit" | "America/Grand_Turk" | "America/Indiana/Indianapolis" | "America/Iqaluit" | "America/Kentucky/Louisville" | "America/Indiana/Marengo" | "America/Kentucky/Monticello" | "America/New_York" | "America/Nipigon" | "America/Pangnirtung" | "America/Indiana/Petersburg" | "America/Port-au-Prince" | "America/Thunder_Bay" | "America/Toronto" | "America/Indiana/Vevay" | "America/Indiana/Vincennes" | "America/Indiana/Winamac" | "America/Guyana" | "America/Asuncion" | "America/Caracas" | "America/Argentina/Buenos_Aires" | "America/Argentina/Catamarca" | "America/Argentina/Cordoba" | "America/Argentina/Jujuy" | "America/Argentina/La_Rioja" | "America/Argentina/Mendoza" | "America/Argentina/Rio_Gallegos" | "America/Argentina/Salta" | "America/Argentina/San_Juan" | "America/Argentina/San_Luis" | "America/Argentina/Tucuman" | "America/Argentina/Ushuaia" | "Atlantic/Bermuda" | "America/Glace_Bay" | "America/Goose_Bay" | "America/Halifax" | "America/Moncton" | "America/Thule" | "America/Araguaina" | "America/Bahia" | "America/Belem" | "America/Fortaleza" | "America/Maceio" | "America/Recife" | "America/Santarem" | "America/Sao_Paulo" | "Atlantic/Stanley" | "America/Cayenne" | "Antarctica/Palmer" | "America/Punta_Arenas" | "Antarctica/Rothera" | "America/Paramaribo" | "America/Montevideo" | "America/St_Johns" | "America/Noronha" | "Atlantic/South_Georgia" | "America/Miquelon" | "America/Nuuk" | "Atlantic/Cape_Verde" | "Atlantic/Azores" | "UTC" | "America/Scoresbysund" | "Etc/GMT" | "Africa/Abidjan" | "Africa/Bissau" | "America/Danmarkshavn" | "Africa/Monrovia" | "Atlantic/Reykjavik" | "Africa/Sao_Tome" | "Africa/Algiers" | "Africa/Tunis" | "Europe/Dublin" | "Africa/Casablanca" | "Europe/London" | "Africa/Lagos" | "Africa/Ndjamena" | "Atlantic/Canary" | "Atlantic/Faroe" | "Europe/Lisbon" | "Atlantic/Madeira" | "Africa/El_Aaiun" | "Africa/Juba" | "Africa/Khartoum" | "Africa/Maputo" | "Africa/Windhoek" | "Europe/Amsterdam" | "Europe/Andorra" | "Europe/Belgrade" | "Europe/Berlin" | "Europe/Brussels" | "Europe/Budapest" | "Africa/Ceuta" | "Europe/Copenhagen" | "Europe/Gibraltar" | "Europe/Luxembourg" | "Europe/Madrid" | "Europe/Malta" | "Europe/Monaco" | "Europe/Oslo" | "Europe/Paris" | "Europe/Prague" | "Europe/Rome" | "Europe/Stockholm" | "Europe/Tirane" | "Europe/Vienna" | "Europe/Warsaw" | "Europe/Zurich" | "Africa/Cairo" | "Europe/Kaliningrad" | "Africa/Tripoli" | "Africa/Johannesburg" | "Antarctica/Troll" | "Asia/Baghdad" | "Asia/Qatar" | "Asia/Riyadh" | "Africa/Nairobi" | "Asia/Amman" | "Europe/Athens" | "Asia/Beirut" | "Europe/Bucharest" | "Europe/Chisinau" | "Asia/Damascus" | "Asia/Gaza" | "Asia/Hebron" | "Europe/Helsinki" | "Europe/Kiev" | "Asia/Nicosia" | "Europe/Riga" | "Europe/Sofia" | "Europe/Tallinn" | "Europe/Uzhgorod" | "Europe/Vilnius" | "Europe/Zaporozhye" | "Asia/Famagusta" | "Asia/Jerusalem" | "Europe/Kirov" | "Europe/Minsk" | "Europe/Moscow" | "Europe/Simferopol" | "Europe/Istanbul" | "Europe/Volgograd" | "Asia/Yerevan" | "Europe/Astrakhan" | "Asia/Baku" | "Asia/Tbilisi" | "Asia/Dubai" | "Indian/Mauritius" | "Indian/Reunion" | "Europe/Samara" | "Europe/Saratov" | "Indian/Mahe" | "Europe/Ulyanovsk" | "Asia/Kabul" | "Asia/Tehran" | "Indian/Kerguelen" | "Indian/Maldives" | "Antarctica/Mawson" | "Asia/Karachi" | "Asia/Dushanbe" | "Asia/Ashgabat" | "Asia/Samarkand" | "Asia/Tashkent" | "Asia/Aqtau" | "Asia/Aqtobe" | "Asia/Atyrau" | "Asia/Oral" | "Asia/Qyzylorda" | "Asia/Yekaterinburg" | "Asia/Colombo" | "Asia/Kolkata" | "Asia/Kathmandu" | "Asia/Dhaka" | "Asia/Thimphu" | "Asia/Almaty" | "Asia/Qostanay" | "Indian/Chagos" | "Asia/Bishkek" | "Asia/Omsk" | "Asia/Urumqi" | "Antarctica/Vostok" | "Indian/Cocos" | "Asia/Yangon" | "Asia/Barnaul" | "Indian/Christmas" | "Antarctica/Davis" | "Asia/Hovd" | "Asia/Bangkok" | "Asia/Ho_Chi_Minh" | "Asia/Krasnoyarsk" | "Asia/Novokuznetsk" | "Asia/Novosibirsk" | "Asia/Tomsk" | "Asia/Jakarta" | "Asia/Pontianak" | "Australia/Perth" | "Asia/Brunei" | "Asia/Makassar" | "Asia/Macau" | "Asia/Shanghai" | "Asia/Hong_Kong" | "Asia/Irkutsk" | "Asia/Kuala_Lumpur" | "Asia/Kuching" | "Asia/Manila" | "Asia/Singapore" | "Asia/Taipei" | "Asia/Choibalsan" | "Asia/Ulaanbaatar" | "Australia/Eucla" | "Asia/Dili" | "Asia/Jayapura" | "Asia/Tokyo" | "Asia/Pyongyang" | "Asia/Seoul" | "Pacific/Palau" | "Asia/Chita" | "Asia/Khandyga" | "Asia/Yakutsk" | "Australia/Darwin" | "Australia/Adelaide" | "Australia/Broken_Hill" | "Australia/Brisbane" | "Australia/Lindeman" | "Pacific/Guam" | "Pacific/Chuuk" | "Australia/Hobart" | "Antarctica/Macquarie" | "Australia/Melbourne" | "Australia/Sydney" | "Pacific/Port_Moresby" | "Asia/Ust-Nera" | "Asia/Vladivostok" | "Australia/Lord_Howe" | "Pacific/Bougainville" | "Antarctica/Casey" | "Pacific/Kosrae" | "Asia/Magadan" | "Pacific/Noumea" | "Pacific/Norfolk" | "Pacific/Pohnpei" | "Asia/Sakhalin" | "Pacific/Guadalcanal" | "Asia/Srednekolymsk" | "Pacific/Efate" | "Asia/Anadyr" | "Pacific/Fiji" | "Pacific/Tarawa" | "Pacific/Kwajalein" | "Pacific/Majuro" | "Pacific/Nauru" | "Pacific/Auckland" | "Asia/Kamchatka" | "Pacific/Funafuti" | "Pacific/Wake" | "Pacific/Wallis" | "Pacific/Chatham" | "Pacific/Apia" | "Pacific/Fakaofo" | "Pacific/Tongatapu" | "Pacific/Kiritimati")| undefined | null
				/** Address. */
				'address': SpruceSchema.AddressFieldValue
				
				'dateDeleted'?: SpruceSchema.DateTimeFieldValue| undefined | null
				
				'slug'?: string| undefined | null
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
			                options: {choices: [{"value":"Pacific/Niue","label":"Niue Time"},{"value":"Pacific/Pago_Pago","label":"Samoa Standard Time"},{"value":"Pacific/Rarotonga","label":"Cook Islands Standard Time"},{"value":"Pacific/Honolulu","label":"Hawaii-Aleutian Standard Time"},{"value":"Pacific/Tahiti","label":"Tahiti Time"},{"value":"Pacific/Marquesas","label":"Marquesas Time"},{"value":"Pacific/Gambier","label":"Gambier Time"},{"value":"America/Adak","label":"Hawaii-Aleutian Time (Adak)"},{"value":"America/Anchorage","label":"Alaska Time - Anchorage"},{"value":"America/Juneau","label":"Alaska Time - Juneau"},{"value":"America/Metlakatla","label":"Alaska Time - Metlakatla"},{"value":"America/Nome","label":"Alaska Time - Nome"},{"value":"America/Sitka","label":"Alaska Time - Sitka"},{"value":"America/Yakutat","label":"Alaska Time - Yakutat"},{"value":"Pacific/Pitcairn","label":"Pitcairn Time"},{"value":"America/Hermosillo","label":"Mexican Pacific Standard Time"},{"value":"America/Dawson_Creek","label":"Mountain Standard Time - Dawson Creek"},{"value":"America/Fort_Nelson","label":"Mountain Standard Time - Fort Nelson"},{"value":"America/Phoenix","label":"Mountain Standard Time - Phoenix"},{"value":"America/Los_Angeles","label":"Pacific Time - Los Angeles"},{"value":"America/Tijuana","label":"Pacific Time - Tijuana"},{"value":"America/Vancouver","label":"Pacific Time - Vancouver"},{"value":"America/Dawson","label":"Yukon Time - Dawson"},{"value":"America/Whitehorse","label":"Yukon Time - Whitehorse"},{"value":"America/Belize","label":"Central Standard Time - Belize"},{"value":"America/Costa_Rica","label":"Central Standard Time - Costa Rica"},{"value":"America/El_Salvador","label":"Central Standard Time - El Salvador"},{"value":"America/Guatemala","label":"Central Standard Time - Guatemala"},{"value":"America/Managua","label":"Central Standard Time - Managua"},{"value":"America/Regina","label":"Central Standard Time - Regina"},{"value":"America/Swift_Current","label":"Central Standard Time - Swift Current"},{"value":"America/Tegucigalpa","label":"Central Standard Time - Tegucigalpa"},{"value":"Pacific/Easter","label":"Easter Island Time"},{"value":"Pacific/Galapagos","label":"Galapagos Time"},{"value":"America/Chihuahua","label":"Mexican Pacific Time - Chihuahua"},{"value":"America/Mazatlan","label":"Mexican Pacific Time - Mazatlan"},{"value":"America/Boise","label":"Mountain Time - Boise"},{"value":"America/Cambridge_Bay","label":"Mountain Time - Cambridge Bay"},{"value":"America/Denver","label":"Mountain Time - Denver"},{"value":"America/Edmonton","label":"Mountain Time - Edmonton"},{"value":"America/Inuvik","label":"Mountain Time - Inuvik"},{"value":"America/Ojinaga","label":"Mountain Time - Ojinaga"},{"value":"America/Yellowknife","label":"Mountain Time - Yellowknife"},{"value":"America/Eirunepe","label":"Acre Standard Time - Eirunepe"},{"value":"America/Rio_Branco","label":"Acre Standard Time - Rio Branco"},{"value":"America/Bahia_Banderas","label":"Central Time - Bahia Banderas"},{"value":"America/North_Dakota/Beulah","label":"Central Time - Beulah, North Dakota"},{"value":"America/North_Dakota/Center","label":"Central Time - Center, North Dakota"},{"value":"America/Chicago","label":"Central Time - Chicago"},{"value":"America/Indiana/Knox","label":"Central Time - Knox, Indiana"},{"value":"America/Matamoros","label":"Central Time - Matamoros"},{"value":"America/Menominee","label":"Central Time - Menominee"},{"value":"America/Merida","label":"Central Time - Merida"},{"value":"America/Mexico_City","label":"Central Time - Mexico City"},{"value":"America/Monterrey","label":"Central Time - Monterrey"},{"value":"America/North_Dakota/New_Salem","label":"Central Time - New Salem, North Dakota"},{"value":"America/Rainy_River","label":"Central Time - Rainy River"},{"value":"America/Rankin_Inlet","label":"Central Time - Rankin Inlet"},{"value":"America/Resolute","label":"Central Time - Resolute"},{"value":"America/Indiana/Tell_City","label":"Central Time - Tell City, Indiana"},{"value":"America/Winnipeg","label":"Central Time - Winnipeg"},{"value":"America/Bogota","label":"Colombia Standard Time"},{"value":"America/Cancun","label":"Eastern Standard Time - Cancun"},{"value":"America/Jamaica","label":"Eastern Standard Time - Jamaica"},{"value":"America/Panama","label":"Eastern Standard Time - Panama"},{"value":"America/Guayaquil","label":"Ecuador Time"},{"value":"America/Lima","label":"Peru Standard Time"},{"value":"America/Boa_Vista","label":"Amazon Standard Time - Boa Vista"},{"value":"America/Campo_Grande","label":"Amazon Standard Time - Campo Grande"},{"value":"America/Cuiaba","label":"Amazon Standard Time - Cuiaba"},{"value":"America/Manaus","label":"Amazon Standard Time - Manaus"},{"value":"America/Porto_Velho","label":"Amazon Standard Time - Porto Velho"},{"value":"America/Barbados","label":"Atlantic Standard Time - Barbados"},{"value":"America/Martinique","label":"Atlantic Standard Time - Martinique"},{"value":"America/Puerto_Rico","label":"Atlantic Standard Time - Puerto Rico"},{"value":"America/Santo_Domingo","label":"Atlantic Standard Time - Santo Domingo"},{"value":"America/La_Paz","label":"Bolivia Time"},{"value":"America/Santiago","label":"Chile Time"},{"value":"America/Havana","label":"Cuba Time"},{"value":"America/Detroit","label":"Eastern Time - Detroit"},{"value":"America/Grand_Turk","label":"Eastern Time - Grand Turk"},{"value":"America/Indiana/Indianapolis","label":"Eastern Time - Indianapolis"},{"value":"America/Iqaluit","label":"Eastern Time - Iqaluit"},{"value":"America/Kentucky/Louisville","label":"Eastern Time - Louisville"},{"value":"America/Indiana/Marengo","label":"Eastern Time - Marengo, Indiana"},{"value":"America/Kentucky/Monticello","label":"Eastern Time - Monticello, Kentucky"},{"value":"America/New_York","label":"Eastern Time - New York"},{"value":"America/Nipigon","label":"Eastern Time - Nipigon"},{"value":"America/Pangnirtung","label":"Eastern Time - Pangnirtung"},{"value":"America/Indiana/Petersburg","label":"Eastern Time - Petersburg, Indiana"},{"value":"America/Port-au-Prince","label":"Eastern Time - Port-au-Prince"},{"value":"America/Thunder_Bay","label":"Eastern Time - Thunder Bay"},{"value":"America/Toronto","label":"Eastern Time - Toronto"},{"value":"America/Indiana/Vevay","label":"Eastern Time - Vevay, Indiana"},{"value":"America/Indiana/Vincennes","label":"Eastern Time - Vincennes, Indiana"},{"value":"America/Indiana/Winamac","label":"Eastern Time - Winamac, Indiana"},{"value":"America/Guyana","label":"Guyana Time"},{"value":"America/Asuncion","label":"Paraguay Time"},{"value":"America/Caracas","label":"Venezuela Time"},{"value":"America/Argentina/Buenos_Aires","label":"Argentina Standard Time - Buenos Aires"},{"value":"America/Argentina/Catamarca","label":"Argentina Standard Time - Catamarca"},{"value":"America/Argentina/Cordoba","label":"Argentina Standard Time - Cordoba"},{"value":"America/Argentina/Jujuy","label":"Argentina Standard Time - Jujuy"},{"value":"America/Argentina/La_Rioja","label":"Argentina Standard Time - La Rioja"},{"value":"America/Argentina/Mendoza","label":"Argentina Standard Time - Mendoza"},{"value":"America/Argentina/Rio_Gallegos","label":"Argentina Standard Time - Rio Gallegos"},{"value":"America/Argentina/Salta","label":"Argentina Standard Time - Salta"},{"value":"America/Argentina/San_Juan","label":"Argentina Standard Time - San Juan"},{"value":"America/Argentina/San_Luis","label":"Argentina Standard Time - San Luis"},{"value":"America/Argentina/Tucuman","label":"Argentina Standard Time - Tucuman"},{"value":"America/Argentina/Ushuaia","label":"Argentina Standard Time - Ushuaia"},{"value":"Atlantic/Bermuda","label":"Atlantic Time - Bermuda"},{"value":"America/Glace_Bay","label":"Atlantic Time - Glace Bay"},{"value":"America/Goose_Bay","label":"Atlantic Time - Goose Bay"},{"value":"America/Halifax","label":"Atlantic Time - Halifax"},{"value":"America/Moncton","label":"Atlantic Time - Moncton"},{"value":"America/Thule","label":"Atlantic Time - Thule"},{"value":"America/Araguaina","label":"Brasilia Standard Time - Araguaina"},{"value":"America/Bahia","label":"Brasilia Standard Time - Bahia"},{"value":"America/Belem","label":"Brasilia Standard Time - Belem"},{"value":"America/Fortaleza","label":"Brasilia Standard Time - Fortaleza"},{"value":"America/Maceio","label":"Brasilia Standard Time - Maceio"},{"value":"America/Recife","label":"Brasilia Standard Time - Recife"},{"value":"America/Santarem","label":"Brasilia Standard Time - Santarem"},{"value":"America/Sao_Paulo","label":"Brasilia Standard Time - Sao Paulo"},{"value":"Atlantic/Stanley","label":"Falkland Islands Standard Time"},{"value":"America/Cayenne","label":"French Guiana Time"},{"value":"Antarctica/Palmer","label":"Palmer Time"},{"value":"America/Punta_Arenas","label":"Punta Arenas Time"},{"value":"Antarctica/Rothera","label":"Rothera Time"},{"value":"America/Paramaribo","label":"Suriname Time"},{"value":"America/Montevideo","label":"Uruguay Standard Time"},{"value":"America/St_Johns","label":"Newfoundland Time"},{"value":"America/Noronha","label":"Fernando de Noronha Standard Time"},{"value":"Atlantic/South_Georgia","label":"South Georgia Time"},{"value":"America/Miquelon","label":"St. Pierre & Miquelon Time"},{"value":"America/Nuuk","label":"West Greenland Time"},{"value":"Atlantic/Cape_Verde","label":"Cape Verde Standard Time"},{"value":"Atlantic/Azores","label":"Azores Time"},{"value":"UTC","label":"Coordinated Universal Time"},{"value":"America/Scoresbysund","label":"East Greenland Time"},{"value":"Etc/GMT","label":"Greenwich Mean Time"},{"value":"Africa/Abidjan","label":"Greenwich Mean Time - Abidjan"},{"value":"Africa/Bissau","label":"Greenwich Mean Time - Bissau"},{"value":"America/Danmarkshavn","label":"Greenwich Mean Time - Danmarkshavn"},{"value":"Africa/Monrovia","label":"Greenwich Mean Time - Monrovia"},{"value":"Atlantic/Reykjavik","label":"Greenwich Mean Time - Reykjavik"},{"value":"Africa/Sao_Tome","label":"Greenwich Mean Time - São Tomé"},{"value":"Africa/Algiers","label":"Central European Standard Time - Algiers"},{"value":"Africa/Tunis","label":"Central European Standard Time - Tunis"},{"value":"Europe/Dublin","label":"Ireland Time"},{"value":"Africa/Casablanca","label":"Morocco Time"},{"value":"Europe/London","label":"United Kingdom Time"},{"value":"Africa/Lagos","label":"West Africa Standard Time - Lagos"},{"value":"Africa/Ndjamena","label":"West Africa Standard Time - Ndjamena"},{"value":"Atlantic/Canary","label":"Western European Time - Canary"},{"value":"Atlantic/Faroe","label":"Western European Time - Faroe"},{"value":"Europe/Lisbon","label":"Western European Time - Lisbon"},{"value":"Atlantic/Madeira","label":"Western European Time - Madeira"},{"value":"Africa/El_Aaiun","label":"Western Sahara Time"},{"value":"Africa/Juba","label":"Central Africa Time - Juba"},{"value":"Africa/Khartoum","label":"Central Africa Time - Khartoum"},{"value":"Africa/Maputo","label":"Central Africa Time - Maputo"},{"value":"Africa/Windhoek","label":"Central Africa Time - Windhoek"},{"value":"Europe/Amsterdam","label":"Central European Time - Amsterdam"},{"value":"Europe/Andorra","label":"Central European Time - Andorra"},{"value":"Europe/Belgrade","label":"Central European Time - Belgrade"},{"value":"Europe/Berlin","label":"Central European Time - Berlin"},{"value":"Europe/Brussels","label":"Central European Time - Brussels"},{"value":"Europe/Budapest","label":"Central European Time - Budapest"},{"value":"Africa/Ceuta","label":"Central European Time - Ceuta"},{"value":"Europe/Copenhagen","label":"Central European Time - Copenhagen"},{"value":"Europe/Gibraltar","label":"Central European Time - Gibraltar"},{"value":"Europe/Luxembourg","label":"Central European Time - Luxembourg"},{"value":"Europe/Madrid","label":"Central European Time - Madrid"},{"value":"Europe/Malta","label":"Central European Time - Malta"},{"value":"Europe/Monaco","label":"Central European Time - Monaco"},{"value":"Europe/Oslo","label":"Central European Time - Oslo"},{"value":"Europe/Paris","label":"Central European Time - Paris"},{"value":"Europe/Prague","label":"Central European Time - Prague"},{"value":"Europe/Rome","label":"Central European Time - Rome"},{"value":"Europe/Stockholm","label":"Central European Time - Stockholm"},{"value":"Europe/Tirane","label":"Central European Time - Tirane"},{"value":"Europe/Vienna","label":"Central European Time - Vienna"},{"value":"Europe/Warsaw","label":"Central European Time - Warsaw"},{"value":"Europe/Zurich","label":"Central European Time - Zurich"},{"value":"Africa/Cairo","label":"Eastern European Standard Time - Cairo"},{"value":"Europe/Kaliningrad","label":"Eastern European Standard Time - Kaliningrad"},{"value":"Africa/Tripoli","label":"Eastern European Standard Time - Tripoli"},{"value":"Africa/Johannesburg","label":"South Africa Standard Time"},{"value":"Antarctica/Troll","label":"Troll Time"},{"value":"Asia/Baghdad","label":"Arabian Standard Time - Baghdad"},{"value":"Asia/Qatar","label":"Arabian Standard Time - Qatar"},{"value":"Asia/Riyadh","label":"Arabian Standard Time - Riyadh"},{"value":"Africa/Nairobi","label":"East Africa Time"},{"value":"Asia/Amman","label":"Eastern European Time - Amman"},{"value":"Europe/Athens","label":"Eastern European Time - Athens"},{"value":"Asia/Beirut","label":"Eastern European Time - Beirut"},{"value":"Europe/Bucharest","label":"Eastern European Time - Bucharest"},{"value":"Europe/Chisinau","label":"Eastern European Time - Chisinau"},{"value":"Asia/Damascus","label":"Eastern European Time - Damascus"},{"value":"Asia/Gaza","label":"Eastern European Time - Gaza"},{"value":"Asia/Hebron","label":"Eastern European Time - Hebron"},{"value":"Europe/Helsinki","label":"Eastern European Time - Helsinki"},{"value":"Europe/Kiev","label":"Eastern European Time - Kyiv"},{"value":"Asia/Nicosia","label":"Eastern European Time - Nicosia"},{"value":"Europe/Riga","label":"Eastern European Time - Riga"},{"value":"Europe/Sofia","label":"Eastern European Time - Sofia"},{"value":"Europe/Tallinn","label":"Eastern European Time - Tallinn"},{"value":"Europe/Uzhgorod","label":"Eastern European Time - Uzhhorod"},{"value":"Europe/Vilnius","label":"Eastern European Time - Vilnius"},{"value":"Europe/Zaporozhye","label":"Eastern European Time - Zaporozhye"},{"value":"Asia/Famagusta","label":"Famagusta Time"},{"value":"Asia/Jerusalem","label":"Israel Time"},{"value":"Europe/Kirov","label":"Kirov Time"},{"value":"Europe/Minsk","label":"Moscow Standard Time - Minsk"},{"value":"Europe/Moscow","label":"Moscow Standard Time - Moscow"},{"value":"Europe/Simferopol","label":"Moscow Standard Time - Simferopol"},{"value":"Europe/Istanbul","label":"Turkey Time"},{"value":"Europe/Volgograd","label":"Volgograd Standard Time"},{"value":"Asia/Yerevan","label":"Armenia Standard Time"},{"value":"Europe/Astrakhan","label":"Astrakhan Time"},{"value":"Asia/Baku","label":"Azerbaijan Standard Time"},{"value":"Asia/Tbilisi","label":"Georgia Standard Time"},{"value":"Asia/Dubai","label":"Gulf Standard Time"},{"value":"Indian/Mauritius","label":"Mauritius Standard Time"},{"value":"Indian/Reunion","label":"Réunion Time"},{"value":"Europe/Samara","label":"Samara Standard Time"},{"value":"Europe/Saratov","label":"Saratov Time"},{"value":"Indian/Mahe","label":"Seychelles Time"},{"value":"Europe/Ulyanovsk","label":"Ulyanovsk Time"},{"value":"Asia/Kabul","label":"Afghanistan Time"},{"value":"Asia/Tehran","label":"Iran Time"},{"value":"Indian/Kerguelen","label":"French Southern & Antarctic Time"},{"value":"Indian/Maldives","label":"Maldives Time"},{"value":"Antarctica/Mawson","label":"Mawson Time"},{"value":"Asia/Karachi","label":"Pakistan Standard Time"},{"value":"Asia/Dushanbe","label":"Tajikistan Time"},{"value":"Asia/Ashgabat","label":"Turkmenistan Standard Time"},{"value":"Asia/Samarkand","label":"Uzbekistan Standard Time - Samarkand"},{"value":"Asia/Tashkent","label":"Uzbekistan Standard Time - Tashkent"},{"value":"Asia/Aqtau","label":"West Kazakhstan Time - Aqtau"},{"value":"Asia/Aqtobe","label":"West Kazakhstan Time - Aqtobe"},{"value":"Asia/Atyrau","label":"West Kazakhstan Time - Atyrau"},{"value":"Asia/Oral","label":"West Kazakhstan Time - Oral"},{"value":"Asia/Qyzylorda","label":"West Kazakhstan Time - Qyzylorda"},{"value":"Asia/Yekaterinburg","label":"Yekaterinburg Standard Time"},{"value":"Asia/Colombo","label":"India Standard Time - Colombo"},{"value":"Asia/Kolkata","label":"India Standard Time - Kolkata"},{"value":"Asia/Kathmandu","label":"Nepal Time"},{"value":"Asia/Dhaka","label":"Bangladesh Standard Time"},{"value":"Asia/Thimphu","label":"Bhutan Time"},{"value":"Asia/Almaty","label":"East Kazakhstan Time - Almaty"},{"value":"Asia/Qostanay","label":"East Kazakhstan Time - Kostanay"},{"value":"Indian/Chagos","label":"Indian Ocean Time"},{"value":"Asia/Bishkek","label":"Kyrgyzstan Time"},{"value":"Asia/Omsk","label":"Omsk Standard Time"},{"value":"Asia/Urumqi","label":"Urumqi Time"},{"value":"Antarctica/Vostok","label":"Vostok Time"},{"value":"Indian/Cocos","label":"Cocos Islands Time"},{"value":"Asia/Yangon","label":"Myanmar Time"},{"value":"Asia/Barnaul","label":"Barnaul Time"},{"value":"Indian/Christmas","label":"Christmas Island Time"},{"value":"Antarctica/Davis","label":"Davis Time"},{"value":"Asia/Hovd","label":"Hovd Standard Time"},{"value":"Asia/Bangkok","label":"Indochina Time - Bangkok"},{"value":"Asia/Ho_Chi_Minh","label":"Indochina Time - Ho Chi Minh City"},{"value":"Asia/Krasnoyarsk","label":"Krasnoyarsk Standard Time - Krasnoyarsk"},{"value":"Asia/Novokuznetsk","label":"Krasnoyarsk Standard Time - Novokuznetsk"},{"value":"Asia/Novosibirsk","label":"Novosibirsk Standard Time"},{"value":"Asia/Tomsk","label":"Tomsk Time"},{"value":"Asia/Jakarta","label":"Western Indonesia Time - Jakarta"},{"value":"Asia/Pontianak","label":"Western Indonesia Time - Pontianak"},{"value":"Australia/Perth","label":"Australian Western Standard Time"},{"value":"Asia/Brunei","label":"Brunei Darussalam Time"},{"value":"Asia/Makassar","label":"Central Indonesia Time"},{"value":"Asia/Macau","label":"China Standard Time - Macao"},{"value":"Asia/Shanghai","label":"China Standard Time - Shanghai"},{"value":"Asia/Hong_Kong","label":"Hong Kong Standard Time"},{"value":"Asia/Irkutsk","label":"Irkutsk Standard Time"},{"value":"Asia/Kuala_Lumpur","label":"Malaysia Time - Kuala Lumpur"},{"value":"Asia/Kuching","label":"Malaysia Time - Kuching"},{"value":"Asia/Manila","label":"Philippine Standard Time"},{"value":"Asia/Singapore","label":"Singapore Standard Time"},{"value":"Asia/Taipei","label":"Taipei Standard Time"},{"value":"Asia/Choibalsan","label":"Ulaanbaatar Standard Time - Choibalsan"},{"value":"Asia/Ulaanbaatar","label":"Ulaanbaatar Standard Time - Ulaanbaatar"},{"value":"Australia/Eucla","label":"Australian Central Western Standard Time"},{"value":"Asia/Dili","label":"East Timor Time"},{"value":"Asia/Jayapura","label":"Eastern Indonesia Time"},{"value":"Asia/Tokyo","label":"Japan Standard Time"},{"value":"Asia/Pyongyang","label":"Korean Standard Time - Pyongyang"},{"value":"Asia/Seoul","label":"Korean Standard Time - Seoul"},{"value":"Pacific/Palau","label":"Palau Time"},{"value":"Asia/Chita","label":"Yakutsk Standard Time - Chita"},{"value":"Asia/Khandyga","label":"Yakutsk Standard Time - Khandyga"},{"value":"Asia/Yakutsk","label":"Yakutsk Standard Time - Yakutsk"},{"value":"Australia/Darwin","label":"Australian Central Standard Time"},{"value":"Australia/Adelaide","label":"Central Australia Time - Adelaide"},{"value":"Australia/Broken_Hill","label":"Central Australia Time - Broken Hill"},{"value":"Australia/Brisbane","label":"Australian Eastern Standard Time - Brisbane"},{"value":"Australia/Lindeman","label":"Australian Eastern Standard Time - Lindeman"},{"value":"Pacific/Guam","label":"Chamorro Standard Time"},{"value":"Pacific/Chuuk","label":"Chuuk Time"},{"value":"Australia/Hobart","label":"Eastern Australia Time - Hobart"},{"value":"Antarctica/Macquarie","label":"Eastern Australia Time - Macquarie"},{"value":"Australia/Melbourne","label":"Eastern Australia Time - Melbourne"},{"value":"Australia/Sydney","label":"Eastern Australia Time - Sydney"},{"value":"Pacific/Port_Moresby","label":"Papua New Guinea Time"},{"value":"Asia/Ust-Nera","label":"Vladivostok Standard Time - Ust-Nera"},{"value":"Asia/Vladivostok","label":"Vladivostok Standard Time - Vladivostok"},{"value":"Australia/Lord_Howe","label":"Lord Howe Time"},{"value":"Pacific/Bougainville","label":"Bougainville Time"},{"value":"Antarctica/Casey","label":"Casey Time"},{"value":"Pacific/Kosrae","label":"Kosrae Time"},{"value":"Asia/Magadan","label":"Magadan Standard Time"},{"value":"Pacific/Noumea","label":"New Caledonia Standard Time"},{"value":"Pacific/Norfolk","label":"Norfolk Island Time"},{"value":"Pacific/Pohnpei","label":"Ponape Time"},{"value":"Asia/Sakhalin","label":"Sakhalin Standard Time"},{"value":"Pacific/Guadalcanal","label":"Solomon Islands Time"},{"value":"Asia/Srednekolymsk","label":"Srednekolymsk Time"},{"value":"Pacific/Efate","label":"Vanuatu Standard Time"},{"value":"Asia/Anadyr","label":"Anadyr Standard Time"},{"value":"Pacific/Fiji","label":"Fiji Time"},{"value":"Pacific/Tarawa","label":"Gilbert Islands Time"},{"value":"Pacific/Kwajalein","label":"Marshall Islands Time - Kwajalein"},{"value":"Pacific/Majuro","label":"Marshall Islands Time - Majuro"},{"value":"Pacific/Nauru","label":"Nauru Time"},{"value":"Pacific/Auckland","label":"New Zealand Time"},{"value":"Asia/Kamchatka","label":"Petropavlovsk-Kamchatski Standard Time"},{"value":"Pacific/Funafuti","label":"Tuvalu Time"},{"value":"Pacific/Wake","label":"Wake Island Time"},{"value":"Pacific/Wallis","label":"Wallis & Futuna Time"},{"value":"Pacific/Chatham","label":"Chatham Time"},{"value":"Pacific/Apia","label":"Apia Standard Time"},{"value":"Pacific/Fakaofo","label":"Tokelau Time"},{"value":"Pacific/Tongatapu","label":"Tonga Standard Time"},{"value":"Pacific/Kiritimati","label":"Line Islands Time"}],}
			            },
			            /** Address. */
			            'address': {
			                label: 'Address',
			                type: 'address',
			                isRequired: true,
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
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
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
				'address'?: SpruceSchema.AddressFieldValue| undefined | null
				
				'slug'?: string| undefined | null
				/** Public. Is this organization viewable by guests? */
				'isPublic'?: boolean| undefined | null
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
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
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
				'firstName'?: string| undefined | null
				/** Last name. */
				'lastName'?: string| undefined | null
				/** Timezone. */
				'timezone'?: ("Pacific/Niue" | "Pacific/Pago_Pago" | "Pacific/Rarotonga" | "Pacific/Honolulu" | "Pacific/Tahiti" | "Pacific/Marquesas" | "Pacific/Gambier" | "America/Adak" | "America/Anchorage" | "America/Juneau" | "America/Metlakatla" | "America/Nome" | "America/Sitka" | "America/Yakutat" | "Pacific/Pitcairn" | "America/Hermosillo" | "America/Dawson_Creek" | "America/Fort_Nelson" | "America/Phoenix" | "America/Los_Angeles" | "America/Tijuana" | "America/Vancouver" | "America/Dawson" | "America/Whitehorse" | "America/Belize" | "America/Costa_Rica" | "America/El_Salvador" | "America/Guatemala" | "America/Managua" | "America/Regina" | "America/Swift_Current" | "America/Tegucigalpa" | "Pacific/Easter" | "Pacific/Galapagos" | "America/Chihuahua" | "America/Mazatlan" | "America/Boise" | "America/Cambridge_Bay" | "America/Denver" | "America/Edmonton" | "America/Inuvik" | "America/Ojinaga" | "America/Yellowknife" | "America/Eirunepe" | "America/Rio_Branco" | "America/Bahia_Banderas" | "America/North_Dakota/Beulah" | "America/North_Dakota/Center" | "America/Chicago" | "America/Indiana/Knox" | "America/Matamoros" | "America/Menominee" | "America/Merida" | "America/Mexico_City" | "America/Monterrey" | "America/North_Dakota/New_Salem" | "America/Rainy_River" | "America/Rankin_Inlet" | "America/Resolute" | "America/Indiana/Tell_City" | "America/Winnipeg" | "America/Bogota" | "America/Cancun" | "America/Jamaica" | "America/Panama" | "America/Guayaquil" | "America/Lima" | "America/Boa_Vista" | "America/Campo_Grande" | "America/Cuiaba" | "America/Manaus" | "America/Porto_Velho" | "America/Barbados" | "America/Martinique" | "America/Puerto_Rico" | "America/Santo_Domingo" | "America/La_Paz" | "America/Santiago" | "America/Havana" | "America/Detroit" | "America/Grand_Turk" | "America/Indiana/Indianapolis" | "America/Iqaluit" | "America/Kentucky/Louisville" | "America/Indiana/Marengo" | "America/Kentucky/Monticello" | "America/New_York" | "America/Nipigon" | "America/Pangnirtung" | "America/Indiana/Petersburg" | "America/Port-au-Prince" | "America/Thunder_Bay" | "America/Toronto" | "America/Indiana/Vevay" | "America/Indiana/Vincennes" | "America/Indiana/Winamac" | "America/Guyana" | "America/Asuncion" | "America/Caracas" | "America/Argentina/Buenos_Aires" | "America/Argentina/Catamarca" | "America/Argentina/Cordoba" | "America/Argentina/Jujuy" | "America/Argentina/La_Rioja" | "America/Argentina/Mendoza" | "America/Argentina/Rio_Gallegos" | "America/Argentina/Salta" | "America/Argentina/San_Juan" | "America/Argentina/San_Luis" | "America/Argentina/Tucuman" | "America/Argentina/Ushuaia" | "Atlantic/Bermuda" | "America/Glace_Bay" | "America/Goose_Bay" | "America/Halifax" | "America/Moncton" | "America/Thule" | "America/Araguaina" | "America/Bahia" | "America/Belem" | "America/Fortaleza" | "America/Maceio" | "America/Recife" | "America/Santarem" | "America/Sao_Paulo" | "Atlantic/Stanley" | "America/Cayenne" | "Antarctica/Palmer" | "America/Punta_Arenas" | "Antarctica/Rothera" | "America/Paramaribo" | "America/Montevideo" | "America/St_Johns" | "America/Noronha" | "Atlantic/South_Georgia" | "America/Miquelon" | "America/Nuuk" | "Atlantic/Cape_Verde" | "Atlantic/Azores" | "UTC" | "America/Scoresbysund" | "Etc/GMT" | "Africa/Abidjan" | "Africa/Bissau" | "America/Danmarkshavn" | "Africa/Monrovia" | "Atlantic/Reykjavik" | "Africa/Sao_Tome" | "Africa/Algiers" | "Africa/Tunis" | "Europe/Dublin" | "Africa/Casablanca" | "Europe/London" | "Africa/Lagos" | "Africa/Ndjamena" | "Atlantic/Canary" | "Atlantic/Faroe" | "Europe/Lisbon" | "Atlantic/Madeira" | "Africa/El_Aaiun" | "Africa/Juba" | "Africa/Khartoum" | "Africa/Maputo" | "Africa/Windhoek" | "Europe/Amsterdam" | "Europe/Andorra" | "Europe/Belgrade" | "Europe/Berlin" | "Europe/Brussels" | "Europe/Budapest" | "Africa/Ceuta" | "Europe/Copenhagen" | "Europe/Gibraltar" | "Europe/Luxembourg" | "Europe/Madrid" | "Europe/Malta" | "Europe/Monaco" | "Europe/Oslo" | "Europe/Paris" | "Europe/Prague" | "Europe/Rome" | "Europe/Stockholm" | "Europe/Tirane" | "Europe/Vienna" | "Europe/Warsaw" | "Europe/Zurich" | "Africa/Cairo" | "Europe/Kaliningrad" | "Africa/Tripoli" | "Africa/Johannesburg" | "Antarctica/Troll" | "Asia/Baghdad" | "Asia/Qatar" | "Asia/Riyadh" | "Africa/Nairobi" | "Asia/Amman" | "Europe/Athens" | "Asia/Beirut" | "Europe/Bucharest" | "Europe/Chisinau" | "Asia/Damascus" | "Asia/Gaza" | "Asia/Hebron" | "Europe/Helsinki" | "Europe/Kiev" | "Asia/Nicosia" | "Europe/Riga" | "Europe/Sofia" | "Europe/Tallinn" | "Europe/Uzhgorod" | "Europe/Vilnius" | "Europe/Zaporozhye" | "Asia/Famagusta" | "Asia/Jerusalem" | "Europe/Kirov" | "Europe/Minsk" | "Europe/Moscow" | "Europe/Simferopol" | "Europe/Istanbul" | "Europe/Volgograd" | "Asia/Yerevan" | "Europe/Astrakhan" | "Asia/Baku" | "Asia/Tbilisi" | "Asia/Dubai" | "Indian/Mauritius" | "Indian/Reunion" | "Europe/Samara" | "Europe/Saratov" | "Indian/Mahe" | "Europe/Ulyanovsk" | "Asia/Kabul" | "Asia/Tehran" | "Indian/Kerguelen" | "Indian/Maldives" | "Antarctica/Mawson" | "Asia/Karachi" | "Asia/Dushanbe" | "Asia/Ashgabat" | "Asia/Samarkand" | "Asia/Tashkent" | "Asia/Aqtau" | "Asia/Aqtobe" | "Asia/Atyrau" | "Asia/Oral" | "Asia/Qyzylorda" | "Asia/Yekaterinburg" | "Asia/Colombo" | "Asia/Kolkata" | "Asia/Kathmandu" | "Asia/Dhaka" | "Asia/Thimphu" | "Asia/Almaty" | "Asia/Qostanay" | "Indian/Chagos" | "Asia/Bishkek" | "Asia/Omsk" | "Asia/Urumqi" | "Antarctica/Vostok" | "Indian/Cocos" | "Asia/Yangon" | "Asia/Barnaul" | "Indian/Christmas" | "Antarctica/Davis" | "Asia/Hovd" | "Asia/Bangkok" | "Asia/Ho_Chi_Minh" | "Asia/Krasnoyarsk" | "Asia/Novokuznetsk" | "Asia/Novosibirsk" | "Asia/Tomsk" | "Asia/Jakarta" | "Asia/Pontianak" | "Australia/Perth" | "Asia/Brunei" | "Asia/Makassar" | "Asia/Macau" | "Asia/Shanghai" | "Asia/Hong_Kong" | "Asia/Irkutsk" | "Asia/Kuala_Lumpur" | "Asia/Kuching" | "Asia/Manila" | "Asia/Singapore" | "Asia/Taipei" | "Asia/Choibalsan" | "Asia/Ulaanbaatar" | "Australia/Eucla" | "Asia/Dili" | "Asia/Jayapura" | "Asia/Tokyo" | "Asia/Pyongyang" | "Asia/Seoul" | "Pacific/Palau" | "Asia/Chita" | "Asia/Khandyga" | "Asia/Yakutsk" | "Australia/Darwin" | "Australia/Adelaide" | "Australia/Broken_Hill" | "Australia/Brisbane" | "Australia/Lindeman" | "Pacific/Guam" | "Pacific/Chuuk" | "Australia/Hobart" | "Antarctica/Macquarie" | "Australia/Melbourne" | "Australia/Sydney" | "Pacific/Port_Moresby" | "Asia/Ust-Nera" | "Asia/Vladivostok" | "Australia/Lord_Howe" | "Pacific/Bougainville" | "Antarctica/Casey" | "Pacific/Kosrae" | "Asia/Magadan" | "Pacific/Noumea" | "Pacific/Norfolk" | "Pacific/Pohnpei" | "Asia/Sakhalin" | "Pacific/Guadalcanal" | "Asia/Srednekolymsk" | "Pacific/Efate" | "Asia/Anadyr" | "Pacific/Fiji" | "Pacific/Tarawa" | "Pacific/Kwajalein" | "Pacific/Majuro" | "Pacific/Nauru" | "Pacific/Auckland" | "Asia/Kamchatka" | "Pacific/Funafuti" | "Pacific/Wake" | "Pacific/Wallis" | "Pacific/Chatham" | "Pacific/Apia" | "Pacific/Fakaofo" | "Pacific/Tongatapu" | "Pacific/Kiritimati")| undefined | null
				/** Avatar src. */
				'avatar'?: SpruceSchema.ImageFieldValue| undefined | null
				
				'dateScrambled'?: SpruceSchema.DateTimeFieldValue| undefined | null
				/** Phone. A number that can be texted */
				'phone': string
				
				'password'?: string| undefined | null
				
				'securityQuestions'?: SpruceSchemas.Mercury.v2020_12_25.SecurityQuestion[]| undefined | null
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
			                options: {choices: [{"value":"Pacific/Niue","label":"Niue Time"},{"value":"Pacific/Pago_Pago","label":"Samoa Standard Time"},{"value":"Pacific/Rarotonga","label":"Cook Islands Standard Time"},{"value":"Pacific/Honolulu","label":"Hawaii-Aleutian Standard Time"},{"value":"Pacific/Tahiti","label":"Tahiti Time"},{"value":"Pacific/Marquesas","label":"Marquesas Time"},{"value":"Pacific/Gambier","label":"Gambier Time"},{"value":"America/Adak","label":"Hawaii-Aleutian Time (Adak)"},{"value":"America/Anchorage","label":"Alaska Time - Anchorage"},{"value":"America/Juneau","label":"Alaska Time - Juneau"},{"value":"America/Metlakatla","label":"Alaska Time - Metlakatla"},{"value":"America/Nome","label":"Alaska Time - Nome"},{"value":"America/Sitka","label":"Alaska Time - Sitka"},{"value":"America/Yakutat","label":"Alaska Time - Yakutat"},{"value":"Pacific/Pitcairn","label":"Pitcairn Time"},{"value":"America/Hermosillo","label":"Mexican Pacific Standard Time"},{"value":"America/Dawson_Creek","label":"Mountain Standard Time - Dawson Creek"},{"value":"America/Fort_Nelson","label":"Mountain Standard Time - Fort Nelson"},{"value":"America/Phoenix","label":"Mountain Standard Time - Phoenix"},{"value":"America/Los_Angeles","label":"Pacific Time - Los Angeles"},{"value":"America/Tijuana","label":"Pacific Time - Tijuana"},{"value":"America/Vancouver","label":"Pacific Time - Vancouver"},{"value":"America/Dawson","label":"Yukon Time - Dawson"},{"value":"America/Whitehorse","label":"Yukon Time - Whitehorse"},{"value":"America/Belize","label":"Central Standard Time - Belize"},{"value":"America/Costa_Rica","label":"Central Standard Time - Costa Rica"},{"value":"America/El_Salvador","label":"Central Standard Time - El Salvador"},{"value":"America/Guatemala","label":"Central Standard Time - Guatemala"},{"value":"America/Managua","label":"Central Standard Time - Managua"},{"value":"America/Regina","label":"Central Standard Time - Regina"},{"value":"America/Swift_Current","label":"Central Standard Time - Swift Current"},{"value":"America/Tegucigalpa","label":"Central Standard Time - Tegucigalpa"},{"value":"Pacific/Easter","label":"Easter Island Time"},{"value":"Pacific/Galapagos","label":"Galapagos Time"},{"value":"America/Chihuahua","label":"Mexican Pacific Time - Chihuahua"},{"value":"America/Mazatlan","label":"Mexican Pacific Time - Mazatlan"},{"value":"America/Boise","label":"Mountain Time - Boise"},{"value":"America/Cambridge_Bay","label":"Mountain Time - Cambridge Bay"},{"value":"America/Denver","label":"Mountain Time - Denver"},{"value":"America/Edmonton","label":"Mountain Time - Edmonton"},{"value":"America/Inuvik","label":"Mountain Time - Inuvik"},{"value":"America/Ojinaga","label":"Mountain Time - Ojinaga"},{"value":"America/Yellowknife","label":"Mountain Time - Yellowknife"},{"value":"America/Eirunepe","label":"Acre Standard Time - Eirunepe"},{"value":"America/Rio_Branco","label":"Acre Standard Time - Rio Branco"},{"value":"America/Bahia_Banderas","label":"Central Time - Bahia Banderas"},{"value":"America/North_Dakota/Beulah","label":"Central Time - Beulah, North Dakota"},{"value":"America/North_Dakota/Center","label":"Central Time - Center, North Dakota"},{"value":"America/Chicago","label":"Central Time - Chicago"},{"value":"America/Indiana/Knox","label":"Central Time - Knox, Indiana"},{"value":"America/Matamoros","label":"Central Time - Matamoros"},{"value":"America/Menominee","label":"Central Time - Menominee"},{"value":"America/Merida","label":"Central Time - Merida"},{"value":"America/Mexico_City","label":"Central Time - Mexico City"},{"value":"America/Monterrey","label":"Central Time - Monterrey"},{"value":"America/North_Dakota/New_Salem","label":"Central Time - New Salem, North Dakota"},{"value":"America/Rainy_River","label":"Central Time - Rainy River"},{"value":"America/Rankin_Inlet","label":"Central Time - Rankin Inlet"},{"value":"America/Resolute","label":"Central Time - Resolute"},{"value":"America/Indiana/Tell_City","label":"Central Time - Tell City, Indiana"},{"value":"America/Winnipeg","label":"Central Time - Winnipeg"},{"value":"America/Bogota","label":"Colombia Standard Time"},{"value":"America/Cancun","label":"Eastern Standard Time - Cancun"},{"value":"America/Jamaica","label":"Eastern Standard Time - Jamaica"},{"value":"America/Panama","label":"Eastern Standard Time - Panama"},{"value":"America/Guayaquil","label":"Ecuador Time"},{"value":"America/Lima","label":"Peru Standard Time"},{"value":"America/Boa_Vista","label":"Amazon Standard Time - Boa Vista"},{"value":"America/Campo_Grande","label":"Amazon Standard Time - Campo Grande"},{"value":"America/Cuiaba","label":"Amazon Standard Time - Cuiaba"},{"value":"America/Manaus","label":"Amazon Standard Time - Manaus"},{"value":"America/Porto_Velho","label":"Amazon Standard Time - Porto Velho"},{"value":"America/Barbados","label":"Atlantic Standard Time - Barbados"},{"value":"America/Martinique","label":"Atlantic Standard Time - Martinique"},{"value":"America/Puerto_Rico","label":"Atlantic Standard Time - Puerto Rico"},{"value":"America/Santo_Domingo","label":"Atlantic Standard Time - Santo Domingo"},{"value":"America/La_Paz","label":"Bolivia Time"},{"value":"America/Santiago","label":"Chile Time"},{"value":"America/Havana","label":"Cuba Time"},{"value":"America/Detroit","label":"Eastern Time - Detroit"},{"value":"America/Grand_Turk","label":"Eastern Time - Grand Turk"},{"value":"America/Indiana/Indianapolis","label":"Eastern Time - Indianapolis"},{"value":"America/Iqaluit","label":"Eastern Time - Iqaluit"},{"value":"America/Kentucky/Louisville","label":"Eastern Time - Louisville"},{"value":"America/Indiana/Marengo","label":"Eastern Time - Marengo, Indiana"},{"value":"America/Kentucky/Monticello","label":"Eastern Time - Monticello, Kentucky"},{"value":"America/New_York","label":"Eastern Time - New York"},{"value":"America/Nipigon","label":"Eastern Time - Nipigon"},{"value":"America/Pangnirtung","label":"Eastern Time - Pangnirtung"},{"value":"America/Indiana/Petersburg","label":"Eastern Time - Petersburg, Indiana"},{"value":"America/Port-au-Prince","label":"Eastern Time - Port-au-Prince"},{"value":"America/Thunder_Bay","label":"Eastern Time - Thunder Bay"},{"value":"America/Toronto","label":"Eastern Time - Toronto"},{"value":"America/Indiana/Vevay","label":"Eastern Time - Vevay, Indiana"},{"value":"America/Indiana/Vincennes","label":"Eastern Time - Vincennes, Indiana"},{"value":"America/Indiana/Winamac","label":"Eastern Time - Winamac, Indiana"},{"value":"America/Guyana","label":"Guyana Time"},{"value":"America/Asuncion","label":"Paraguay Time"},{"value":"America/Caracas","label":"Venezuela Time"},{"value":"America/Argentina/Buenos_Aires","label":"Argentina Standard Time - Buenos Aires"},{"value":"America/Argentina/Catamarca","label":"Argentina Standard Time - Catamarca"},{"value":"America/Argentina/Cordoba","label":"Argentina Standard Time - Cordoba"},{"value":"America/Argentina/Jujuy","label":"Argentina Standard Time - Jujuy"},{"value":"America/Argentina/La_Rioja","label":"Argentina Standard Time - La Rioja"},{"value":"America/Argentina/Mendoza","label":"Argentina Standard Time - Mendoza"},{"value":"America/Argentina/Rio_Gallegos","label":"Argentina Standard Time - Rio Gallegos"},{"value":"America/Argentina/Salta","label":"Argentina Standard Time - Salta"},{"value":"America/Argentina/San_Juan","label":"Argentina Standard Time - San Juan"},{"value":"America/Argentina/San_Luis","label":"Argentina Standard Time - San Luis"},{"value":"America/Argentina/Tucuman","label":"Argentina Standard Time - Tucuman"},{"value":"America/Argentina/Ushuaia","label":"Argentina Standard Time - Ushuaia"},{"value":"Atlantic/Bermuda","label":"Atlantic Time - Bermuda"},{"value":"America/Glace_Bay","label":"Atlantic Time - Glace Bay"},{"value":"America/Goose_Bay","label":"Atlantic Time - Goose Bay"},{"value":"America/Halifax","label":"Atlantic Time - Halifax"},{"value":"America/Moncton","label":"Atlantic Time - Moncton"},{"value":"America/Thule","label":"Atlantic Time - Thule"},{"value":"America/Araguaina","label":"Brasilia Standard Time - Araguaina"},{"value":"America/Bahia","label":"Brasilia Standard Time - Bahia"},{"value":"America/Belem","label":"Brasilia Standard Time - Belem"},{"value":"America/Fortaleza","label":"Brasilia Standard Time - Fortaleza"},{"value":"America/Maceio","label":"Brasilia Standard Time - Maceio"},{"value":"America/Recife","label":"Brasilia Standard Time - Recife"},{"value":"America/Santarem","label":"Brasilia Standard Time - Santarem"},{"value":"America/Sao_Paulo","label":"Brasilia Standard Time - Sao Paulo"},{"value":"Atlantic/Stanley","label":"Falkland Islands Standard Time"},{"value":"America/Cayenne","label":"French Guiana Time"},{"value":"Antarctica/Palmer","label":"Palmer Time"},{"value":"America/Punta_Arenas","label":"Punta Arenas Time"},{"value":"Antarctica/Rothera","label":"Rothera Time"},{"value":"America/Paramaribo","label":"Suriname Time"},{"value":"America/Montevideo","label":"Uruguay Standard Time"},{"value":"America/St_Johns","label":"Newfoundland Time"},{"value":"America/Noronha","label":"Fernando de Noronha Standard Time"},{"value":"Atlantic/South_Georgia","label":"South Georgia Time"},{"value":"America/Miquelon","label":"St. Pierre & Miquelon Time"},{"value":"America/Nuuk","label":"West Greenland Time"},{"value":"Atlantic/Cape_Verde","label":"Cape Verde Standard Time"},{"value":"Atlantic/Azores","label":"Azores Time"},{"value":"UTC","label":"Coordinated Universal Time"},{"value":"America/Scoresbysund","label":"East Greenland Time"},{"value":"Etc/GMT","label":"Greenwich Mean Time"},{"value":"Africa/Abidjan","label":"Greenwich Mean Time - Abidjan"},{"value":"Africa/Bissau","label":"Greenwich Mean Time - Bissau"},{"value":"America/Danmarkshavn","label":"Greenwich Mean Time - Danmarkshavn"},{"value":"Africa/Monrovia","label":"Greenwich Mean Time - Monrovia"},{"value":"Atlantic/Reykjavik","label":"Greenwich Mean Time - Reykjavik"},{"value":"Africa/Sao_Tome","label":"Greenwich Mean Time - São Tomé"},{"value":"Africa/Algiers","label":"Central European Standard Time - Algiers"},{"value":"Africa/Tunis","label":"Central European Standard Time - Tunis"},{"value":"Europe/Dublin","label":"Ireland Time"},{"value":"Africa/Casablanca","label":"Morocco Time"},{"value":"Europe/London","label":"United Kingdom Time"},{"value":"Africa/Lagos","label":"West Africa Standard Time - Lagos"},{"value":"Africa/Ndjamena","label":"West Africa Standard Time - Ndjamena"},{"value":"Atlantic/Canary","label":"Western European Time - Canary"},{"value":"Atlantic/Faroe","label":"Western European Time - Faroe"},{"value":"Europe/Lisbon","label":"Western European Time - Lisbon"},{"value":"Atlantic/Madeira","label":"Western European Time - Madeira"},{"value":"Africa/El_Aaiun","label":"Western Sahara Time"},{"value":"Africa/Juba","label":"Central Africa Time - Juba"},{"value":"Africa/Khartoum","label":"Central Africa Time - Khartoum"},{"value":"Africa/Maputo","label":"Central Africa Time - Maputo"},{"value":"Africa/Windhoek","label":"Central Africa Time - Windhoek"},{"value":"Europe/Amsterdam","label":"Central European Time - Amsterdam"},{"value":"Europe/Andorra","label":"Central European Time - Andorra"},{"value":"Europe/Belgrade","label":"Central European Time - Belgrade"},{"value":"Europe/Berlin","label":"Central European Time - Berlin"},{"value":"Europe/Brussels","label":"Central European Time - Brussels"},{"value":"Europe/Budapest","label":"Central European Time - Budapest"},{"value":"Africa/Ceuta","label":"Central European Time - Ceuta"},{"value":"Europe/Copenhagen","label":"Central European Time - Copenhagen"},{"value":"Europe/Gibraltar","label":"Central European Time - Gibraltar"},{"value":"Europe/Luxembourg","label":"Central European Time - Luxembourg"},{"value":"Europe/Madrid","label":"Central European Time - Madrid"},{"value":"Europe/Malta","label":"Central European Time - Malta"},{"value":"Europe/Monaco","label":"Central European Time - Monaco"},{"value":"Europe/Oslo","label":"Central European Time - Oslo"},{"value":"Europe/Paris","label":"Central European Time - Paris"},{"value":"Europe/Prague","label":"Central European Time - Prague"},{"value":"Europe/Rome","label":"Central European Time - Rome"},{"value":"Europe/Stockholm","label":"Central European Time - Stockholm"},{"value":"Europe/Tirane","label":"Central European Time - Tirane"},{"value":"Europe/Vienna","label":"Central European Time - Vienna"},{"value":"Europe/Warsaw","label":"Central European Time - Warsaw"},{"value":"Europe/Zurich","label":"Central European Time - Zurich"},{"value":"Africa/Cairo","label":"Eastern European Standard Time - Cairo"},{"value":"Europe/Kaliningrad","label":"Eastern European Standard Time - Kaliningrad"},{"value":"Africa/Tripoli","label":"Eastern European Standard Time - Tripoli"},{"value":"Africa/Johannesburg","label":"South Africa Standard Time"},{"value":"Antarctica/Troll","label":"Troll Time"},{"value":"Asia/Baghdad","label":"Arabian Standard Time - Baghdad"},{"value":"Asia/Qatar","label":"Arabian Standard Time - Qatar"},{"value":"Asia/Riyadh","label":"Arabian Standard Time - Riyadh"},{"value":"Africa/Nairobi","label":"East Africa Time"},{"value":"Asia/Amman","label":"Eastern European Time - Amman"},{"value":"Europe/Athens","label":"Eastern European Time - Athens"},{"value":"Asia/Beirut","label":"Eastern European Time - Beirut"},{"value":"Europe/Bucharest","label":"Eastern European Time - Bucharest"},{"value":"Europe/Chisinau","label":"Eastern European Time - Chisinau"},{"value":"Asia/Damascus","label":"Eastern European Time - Damascus"},{"value":"Asia/Gaza","label":"Eastern European Time - Gaza"},{"value":"Asia/Hebron","label":"Eastern European Time - Hebron"},{"value":"Europe/Helsinki","label":"Eastern European Time - Helsinki"},{"value":"Europe/Kiev","label":"Eastern European Time - Kyiv"},{"value":"Asia/Nicosia","label":"Eastern European Time - Nicosia"},{"value":"Europe/Riga","label":"Eastern European Time - Riga"},{"value":"Europe/Sofia","label":"Eastern European Time - Sofia"},{"value":"Europe/Tallinn","label":"Eastern European Time - Tallinn"},{"value":"Europe/Uzhgorod","label":"Eastern European Time - Uzhhorod"},{"value":"Europe/Vilnius","label":"Eastern European Time - Vilnius"},{"value":"Europe/Zaporozhye","label":"Eastern European Time - Zaporozhye"},{"value":"Asia/Famagusta","label":"Famagusta Time"},{"value":"Asia/Jerusalem","label":"Israel Time"},{"value":"Europe/Kirov","label":"Kirov Time"},{"value":"Europe/Minsk","label":"Moscow Standard Time - Minsk"},{"value":"Europe/Moscow","label":"Moscow Standard Time - Moscow"},{"value":"Europe/Simferopol","label":"Moscow Standard Time - Simferopol"},{"value":"Europe/Istanbul","label":"Turkey Time"},{"value":"Europe/Volgograd","label":"Volgograd Standard Time"},{"value":"Asia/Yerevan","label":"Armenia Standard Time"},{"value":"Europe/Astrakhan","label":"Astrakhan Time"},{"value":"Asia/Baku","label":"Azerbaijan Standard Time"},{"value":"Asia/Tbilisi","label":"Georgia Standard Time"},{"value":"Asia/Dubai","label":"Gulf Standard Time"},{"value":"Indian/Mauritius","label":"Mauritius Standard Time"},{"value":"Indian/Reunion","label":"Réunion Time"},{"value":"Europe/Samara","label":"Samara Standard Time"},{"value":"Europe/Saratov","label":"Saratov Time"},{"value":"Indian/Mahe","label":"Seychelles Time"},{"value":"Europe/Ulyanovsk","label":"Ulyanovsk Time"},{"value":"Asia/Kabul","label":"Afghanistan Time"},{"value":"Asia/Tehran","label":"Iran Time"},{"value":"Indian/Kerguelen","label":"French Southern & Antarctic Time"},{"value":"Indian/Maldives","label":"Maldives Time"},{"value":"Antarctica/Mawson","label":"Mawson Time"},{"value":"Asia/Karachi","label":"Pakistan Standard Time"},{"value":"Asia/Dushanbe","label":"Tajikistan Time"},{"value":"Asia/Ashgabat","label":"Turkmenistan Standard Time"},{"value":"Asia/Samarkand","label":"Uzbekistan Standard Time - Samarkand"},{"value":"Asia/Tashkent","label":"Uzbekistan Standard Time - Tashkent"},{"value":"Asia/Aqtau","label":"West Kazakhstan Time - Aqtau"},{"value":"Asia/Aqtobe","label":"West Kazakhstan Time - Aqtobe"},{"value":"Asia/Atyrau","label":"West Kazakhstan Time - Atyrau"},{"value":"Asia/Oral","label":"West Kazakhstan Time - Oral"},{"value":"Asia/Qyzylorda","label":"West Kazakhstan Time - Qyzylorda"},{"value":"Asia/Yekaterinburg","label":"Yekaterinburg Standard Time"},{"value":"Asia/Colombo","label":"India Standard Time - Colombo"},{"value":"Asia/Kolkata","label":"India Standard Time - Kolkata"},{"value":"Asia/Kathmandu","label":"Nepal Time"},{"value":"Asia/Dhaka","label":"Bangladesh Standard Time"},{"value":"Asia/Thimphu","label":"Bhutan Time"},{"value":"Asia/Almaty","label":"East Kazakhstan Time - Almaty"},{"value":"Asia/Qostanay","label":"East Kazakhstan Time - Kostanay"},{"value":"Indian/Chagos","label":"Indian Ocean Time"},{"value":"Asia/Bishkek","label":"Kyrgyzstan Time"},{"value":"Asia/Omsk","label":"Omsk Standard Time"},{"value":"Asia/Urumqi","label":"Urumqi Time"},{"value":"Antarctica/Vostok","label":"Vostok Time"},{"value":"Indian/Cocos","label":"Cocos Islands Time"},{"value":"Asia/Yangon","label":"Myanmar Time"},{"value":"Asia/Barnaul","label":"Barnaul Time"},{"value":"Indian/Christmas","label":"Christmas Island Time"},{"value":"Antarctica/Davis","label":"Davis Time"},{"value":"Asia/Hovd","label":"Hovd Standard Time"},{"value":"Asia/Bangkok","label":"Indochina Time - Bangkok"},{"value":"Asia/Ho_Chi_Minh","label":"Indochina Time - Ho Chi Minh City"},{"value":"Asia/Krasnoyarsk","label":"Krasnoyarsk Standard Time - Krasnoyarsk"},{"value":"Asia/Novokuznetsk","label":"Krasnoyarsk Standard Time - Novokuznetsk"},{"value":"Asia/Novosibirsk","label":"Novosibirsk Standard Time"},{"value":"Asia/Tomsk","label":"Tomsk Time"},{"value":"Asia/Jakarta","label":"Western Indonesia Time - Jakarta"},{"value":"Asia/Pontianak","label":"Western Indonesia Time - Pontianak"},{"value":"Australia/Perth","label":"Australian Western Standard Time"},{"value":"Asia/Brunei","label":"Brunei Darussalam Time"},{"value":"Asia/Makassar","label":"Central Indonesia Time"},{"value":"Asia/Macau","label":"China Standard Time - Macao"},{"value":"Asia/Shanghai","label":"China Standard Time - Shanghai"},{"value":"Asia/Hong_Kong","label":"Hong Kong Standard Time"},{"value":"Asia/Irkutsk","label":"Irkutsk Standard Time"},{"value":"Asia/Kuala_Lumpur","label":"Malaysia Time - Kuala Lumpur"},{"value":"Asia/Kuching","label":"Malaysia Time - Kuching"},{"value":"Asia/Manila","label":"Philippine Standard Time"},{"value":"Asia/Singapore","label":"Singapore Standard Time"},{"value":"Asia/Taipei","label":"Taipei Standard Time"},{"value":"Asia/Choibalsan","label":"Ulaanbaatar Standard Time - Choibalsan"},{"value":"Asia/Ulaanbaatar","label":"Ulaanbaatar Standard Time - Ulaanbaatar"},{"value":"Australia/Eucla","label":"Australian Central Western Standard Time"},{"value":"Asia/Dili","label":"East Timor Time"},{"value":"Asia/Jayapura","label":"Eastern Indonesia Time"},{"value":"Asia/Tokyo","label":"Japan Standard Time"},{"value":"Asia/Pyongyang","label":"Korean Standard Time - Pyongyang"},{"value":"Asia/Seoul","label":"Korean Standard Time - Seoul"},{"value":"Pacific/Palau","label":"Palau Time"},{"value":"Asia/Chita","label":"Yakutsk Standard Time - Chita"},{"value":"Asia/Khandyga","label":"Yakutsk Standard Time - Khandyga"},{"value":"Asia/Yakutsk","label":"Yakutsk Standard Time - Yakutsk"},{"value":"Australia/Darwin","label":"Australian Central Standard Time"},{"value":"Australia/Adelaide","label":"Central Australia Time - Adelaide"},{"value":"Australia/Broken_Hill","label":"Central Australia Time - Broken Hill"},{"value":"Australia/Brisbane","label":"Australian Eastern Standard Time - Brisbane"},{"value":"Australia/Lindeman","label":"Australian Eastern Standard Time - Lindeman"},{"value":"Pacific/Guam","label":"Chamorro Standard Time"},{"value":"Pacific/Chuuk","label":"Chuuk Time"},{"value":"Australia/Hobart","label":"Eastern Australia Time - Hobart"},{"value":"Antarctica/Macquarie","label":"Eastern Australia Time - Macquarie"},{"value":"Australia/Melbourne","label":"Eastern Australia Time - Melbourne"},{"value":"Australia/Sydney","label":"Eastern Australia Time - Sydney"},{"value":"Pacific/Port_Moresby","label":"Papua New Guinea Time"},{"value":"Asia/Ust-Nera","label":"Vladivostok Standard Time - Ust-Nera"},{"value":"Asia/Vladivostok","label":"Vladivostok Standard Time - Vladivostok"},{"value":"Australia/Lord_Howe","label":"Lord Howe Time"},{"value":"Pacific/Bougainville","label":"Bougainville Time"},{"value":"Antarctica/Casey","label":"Casey Time"},{"value":"Pacific/Kosrae","label":"Kosrae Time"},{"value":"Asia/Magadan","label":"Magadan Standard Time"},{"value":"Pacific/Noumea","label":"New Caledonia Standard Time"},{"value":"Pacific/Norfolk","label":"Norfolk Island Time"},{"value":"Pacific/Pohnpei","label":"Ponape Time"},{"value":"Asia/Sakhalin","label":"Sakhalin Standard Time"},{"value":"Pacific/Guadalcanal","label":"Solomon Islands Time"},{"value":"Asia/Srednekolymsk","label":"Srednekolymsk Time"},{"value":"Pacific/Efate","label":"Vanuatu Standard Time"},{"value":"Asia/Anadyr","label":"Anadyr Standard Time"},{"value":"Pacific/Fiji","label":"Fiji Time"},{"value":"Pacific/Tarawa","label":"Gilbert Islands Time"},{"value":"Pacific/Kwajalein","label":"Marshall Islands Time - Kwajalein"},{"value":"Pacific/Majuro","label":"Marshall Islands Time - Majuro"},{"value":"Pacific/Nauru","label":"Nauru Time"},{"value":"Pacific/Auckland","label":"New Zealand Time"},{"value":"Asia/Kamchatka","label":"Petropavlovsk-Kamchatski Standard Time"},{"value":"Pacific/Funafuti","label":"Tuvalu Time"},{"value":"Pacific/Wake","label":"Wake Island Time"},{"value":"Pacific/Wallis","label":"Wallis & Futuna Time"},{"value":"Pacific/Chatham","label":"Chatham Time"},{"value":"Pacific/Apia","label":"Apia Standard Time"},{"value":"Pacific/Fakaofo","label":"Tokelau Time"},{"value":"Pacific/Tongatapu","label":"Tonga Standard Time"},{"value":"Pacific/Kiritimati","label":"Line Islands Time"}],}
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
			                isRequired: true,
			                hint: 'A number that can be texted',
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
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'payload': SpruceSchemas.Mercury.v2020_12_25.CreatePersonEmitPayload
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
			                isRequired: true,
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
				'base'?: ("owner" | "groupManager" | "manager" | "teammate" | "anonymous" | "loggedIn" | "guest")| undefined | null
				/** Description. */
				'description'?: string| undefined | null
				
				'dateDeleted'?: number| undefined | null
				/** Public. Should I let people that are not part of this organization this role? */
				'isPublic'?: boolean| undefined | null
				
				'isMeta'?: boolean| undefined | null
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
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
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
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
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
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
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
			
				
				'organizationId'?: string| undefined | null
				
				'locationId'?: string| undefined | null
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
			
				
				'id': string
				
				'skillId'?: string| undefined | null
				
				'fqen'?: string| undefined | null
		}

		interface DoesHonorPermissionContractEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'doesHonorPermissionContractEmitPayload',
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
			            'fqen': {
			                type: 'text',
			                options: undefined
			            },
			    }
		}

		interface DoesHonorPermissionContractEmitPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.DoesHonorPermissionContractEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface DoesHonorPermissionContractEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target'?: SpruceSchemas.Mercury.v2020_12_25.DoesHonorPermissionContractEmitTarget| undefined | null
				
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
			
				
				'organizationId'?: string| undefined | null
				
				'locationId'?: string| undefined | null
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
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target'?: SpruceSchemas.Mercury.v2020_12_25.GetAnonyomousPersonEmitTarget| undefined | null
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
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
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
			
				
				'namespaces'?: string[]| undefined | null
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
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target'?: SpruceSchemas.Mercury.v2020_12_25.GetEventContractsTarget| undefined | null
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
			
				
				'locationId'?: string| undefined | null
				
				'organizationId'?: string| undefined | null
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
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target'?: SpruceSchemas.Mercury.v2020_12_25.GetFeedEmitTarget| undefined | null
				
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
			
				
				'next'?: string| undefined | null
				
				'previous'?: string| undefined | null
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
			
				
				'target'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventTarget| undefined | null
				
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
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
			
				
				'paging'?: SpruceSchemas.Mercury.v2020_12_25.GetFeedPagingRequest| undefined | null
				
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
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
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
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
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
				
				'roleId'?: string| undefined | null
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
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
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
				
				'skillId'?: string| undefined | null
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
			
				
				'personId'?: string| undefined | null
				
				'phone'?: string| undefined | null
				
				'locationId'?: string| undefined | null
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
			
				
				'shouldIncludePrivateFields'?: boolean| undefined | null
		}

		interface GetPersonEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'getPersonEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'shouldIncludePrivateFields': {
			                type: 'boolean',
			                options: undefined
			            },
			    }
		}

		interface GetPersonEmitPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.GetPersonEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface GetPersonEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target'?: SpruceSchemas.Mercury.v2020_12_25.GetPersonEmitTarget| undefined | null
				
				'payload'?: SpruceSchemas.Mercury.v2020_12_25.GetPersonEmitPayload| undefined | null
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
			
				
				'locationId'?: string| undefined | null
				
				'organizationId'?: string| undefined | null
				
				'roleId'?: string| undefined | null
				
				'contractPersonId'?: string| undefined | null
				
				'contractSkillId'?: string| undefined | null
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
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target'?: SpruceSchemas.Mercury.v2020_12_25.GetResolvedPermissionsContractEmitTarget| undefined | null
				
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
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
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
			
				
				'shouldIncludeApiKey'?: boolean| undefined | null
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
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target': SpruceSchemas.Mercury.v2020_12_25.GetSkillEmitTarget
				
				'payload'?: SpruceSchemas.Mercury.v2020_12_25.GetSkillEmitPayload| undefined | null
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
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
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
			
				
				'status'?: ("passed")| undefined | null
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
			
				
				'skill'?: SpruceSchemas.Mercury.v2020_12_25.HealthCheckItem| undefined | null
				
				'mercury'?: SpruceSchemas.Mercury.v2020_12_25.HealthCheckItem| undefined | null
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
				
				'shouldNotifySkillOfInstall'?: boolean| undefined | null
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
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
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
			
				
				'skillId'?: string| undefined | null
				
				'namespace'?: string| undefined | null
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
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target': SpruceSchemas.Mercury.v2020_12_25.IsSkillInstalledEmitTarget
				
				'payload'?: SpruceSchemas.Mercury.v2020_12_25.IsSkillInstalledEmitPayload| undefined | null
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

		
		interface ListSecurityQuestionsEmitTarget {
			
				
				'phone'?: string| undefined | null
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
			    }
		}

		interface ListSecurityQuestionsEmitTargetEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ListSecurityQuestionsEmitTargetSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ListSecurityQuestionsEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target'?: SpruceSchemas.Mercury.v2020_12_25.ListSecurityQuestionsEmitTarget| undefined | null
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
			
				
				'shouldShowGlobalSkills'?: boolean| undefined | null
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
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target': SpruceSchemas.Mercury.v2020_12_25.ListInstalledSkillsEmitTarget
				
				'payload'?: SpruceSchemas.Mercury.v2020_12_25.ListInstalledSkillsEmitPayload| undefined | null
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
				'description'?: string| undefined | null
				/** Namespace. */
				'slug': string
				/** Published. Does this skill show up in the marketplace and can other devs use it as a dependency? */
				'isPublished'?: boolean| undefined | null
				/** Global. Does this skill require needing to be installed anywhere. */
				'canBeInstalled'?: boolean| undefined | null
				
				'dateCreated': SpruceSchema.DateTimeFieldValue
				
				'dateDeleted'?: SpruceSchema.DateTimeFieldValue| undefined | null
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
			
				
				'organizationId'?: string| undefined | null
				
				'locationIds'?: string[]| undefined | null
		}

		interface ListLocationsEmitTargetSchema extends SpruceSchema.Schema {
			id: 'listLocationsEmitTarget',
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

		
		interface ListLocationsEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target'?: SpruceSchemas.Mercury.v2020_12_25.ListLocationsEmitTarget| undefined | null
				
				'payload'?: SpruceSchemas.Mercury.v2020_12_25.ListLocationsEmitPayload| undefined | null
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
			
				
				'organizationIds'?: string[]| undefined | null
				
				'personId'?: string| undefined | null
				
				'namespace'?: string| undefined | null
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
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target'?: SpruceSchemas.Mercury.v2020_12_25.ListOrgsEmitTarget| undefined | null
				
				'payload'?: SpruceSchemas.Mercury.v2020_12_25.ListOrgsEmitPayload| undefined | null
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

		
		interface ListLocationsEmitPayload {
			
				
				'shouldOnlyShowWhereIAmEmployed'?: boolean| undefined | null
				
				'paging'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventPagingRequest| undefined | null
		}

		interface ListLocationsEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'listLocationsEmitPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'shouldOnlyShowWhereIAmEmployed': {
			                type: 'boolean',
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

		
		interface ListOrgsEmitPayload {
			
				
				'shouldOnlyShowMine'?: boolean| undefined | null
				
				'shouldOnlyShowWhereIAmEmployed'?: boolean| undefined | null
				
				'shouldIncludePrivateOrganizations'?: boolean| undefined | null
				
				'paging'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventPagingRequest| undefined | null
		}

		interface ListOrgsEmitPayloadSchema extends SpruceSchema.Schema {
			id: 'listOrgsEmitPayload',
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
			            'shouldOnlyShowWhereIAmEmployed': {
			                type: 'boolean',
			                options: undefined
			            },
			            /** . */
			            'shouldIncludePrivateOrganizations': {
			                type: 'boolean',
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
			
				
				'organizationId'?: string| undefined | null
				
				'locationId'?: string| undefined | null
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
			
				
				'personIds'?: string[]| undefined | null
				
				'roleBases'?: string[]| undefined | null
				
				'roleIds'?: string[]| undefined | null
				
				'shouldIncludePrivateFields'?: boolean| undefined | null
				
				'updatedAfter'?: SpruceSchema.DateTimeFieldValue| undefined | null
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
			    }
		}

		interface ListPeopleEmitPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ListPeopleEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ListPeopleEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target'?: SpruceSchemas.Mercury.v2020_12_25.ListPeopleEmitTarget| undefined | null
				
				'payload'?: SpruceSchemas.Mercury.v2020_12_25.ListPeopleEmitPayload| undefined | null
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
				'firstName'?: string| undefined | null
				/** Last name. */
				'lastName'?: string| undefined | null
				/** Casual name. The name you can use when talking to this person. */
				'casualName': string
				/** Timezone. */
				'timezone'?: ("Pacific/Niue" | "Pacific/Pago_Pago" | "Pacific/Rarotonga" | "Pacific/Honolulu" | "Pacific/Tahiti" | "Pacific/Marquesas" | "Pacific/Gambier" | "America/Adak" | "America/Anchorage" | "America/Juneau" | "America/Metlakatla" | "America/Nome" | "America/Sitka" | "America/Yakutat" | "Pacific/Pitcairn" | "America/Hermosillo" | "America/Dawson_Creek" | "America/Fort_Nelson" | "America/Phoenix" | "America/Los_Angeles" | "America/Tijuana" | "America/Vancouver" | "America/Dawson" | "America/Whitehorse" | "America/Belize" | "America/Costa_Rica" | "America/El_Salvador" | "America/Guatemala" | "America/Managua" | "America/Regina" | "America/Swift_Current" | "America/Tegucigalpa" | "Pacific/Easter" | "Pacific/Galapagos" | "America/Chihuahua" | "America/Mazatlan" | "America/Boise" | "America/Cambridge_Bay" | "America/Denver" | "America/Edmonton" | "America/Inuvik" | "America/Ojinaga" | "America/Yellowknife" | "America/Eirunepe" | "America/Rio_Branco" | "America/Bahia_Banderas" | "America/North_Dakota/Beulah" | "America/North_Dakota/Center" | "America/Chicago" | "America/Indiana/Knox" | "America/Matamoros" | "America/Menominee" | "America/Merida" | "America/Mexico_City" | "America/Monterrey" | "America/North_Dakota/New_Salem" | "America/Rainy_River" | "America/Rankin_Inlet" | "America/Resolute" | "America/Indiana/Tell_City" | "America/Winnipeg" | "America/Bogota" | "America/Cancun" | "America/Jamaica" | "America/Panama" | "America/Guayaquil" | "America/Lima" | "America/Boa_Vista" | "America/Campo_Grande" | "America/Cuiaba" | "America/Manaus" | "America/Porto_Velho" | "America/Barbados" | "America/Martinique" | "America/Puerto_Rico" | "America/Santo_Domingo" | "America/La_Paz" | "America/Santiago" | "America/Havana" | "America/Detroit" | "America/Grand_Turk" | "America/Indiana/Indianapolis" | "America/Iqaluit" | "America/Kentucky/Louisville" | "America/Indiana/Marengo" | "America/Kentucky/Monticello" | "America/New_York" | "America/Nipigon" | "America/Pangnirtung" | "America/Indiana/Petersburg" | "America/Port-au-Prince" | "America/Thunder_Bay" | "America/Toronto" | "America/Indiana/Vevay" | "America/Indiana/Vincennes" | "America/Indiana/Winamac" | "America/Guyana" | "America/Asuncion" | "America/Caracas" | "America/Argentina/Buenos_Aires" | "America/Argentina/Catamarca" | "America/Argentina/Cordoba" | "America/Argentina/Jujuy" | "America/Argentina/La_Rioja" | "America/Argentina/Mendoza" | "America/Argentina/Rio_Gallegos" | "America/Argentina/Salta" | "America/Argentina/San_Juan" | "America/Argentina/San_Luis" | "America/Argentina/Tucuman" | "America/Argentina/Ushuaia" | "Atlantic/Bermuda" | "America/Glace_Bay" | "America/Goose_Bay" | "America/Halifax" | "America/Moncton" | "America/Thule" | "America/Araguaina" | "America/Bahia" | "America/Belem" | "America/Fortaleza" | "America/Maceio" | "America/Recife" | "America/Santarem" | "America/Sao_Paulo" | "Atlantic/Stanley" | "America/Cayenne" | "Antarctica/Palmer" | "America/Punta_Arenas" | "Antarctica/Rothera" | "America/Paramaribo" | "America/Montevideo" | "America/St_Johns" | "America/Noronha" | "Atlantic/South_Georgia" | "America/Miquelon" | "America/Nuuk" | "Atlantic/Cape_Verde" | "Atlantic/Azores" | "UTC" | "America/Scoresbysund" | "Etc/GMT" | "Africa/Abidjan" | "Africa/Bissau" | "America/Danmarkshavn" | "Africa/Monrovia" | "Atlantic/Reykjavik" | "Africa/Sao_Tome" | "Africa/Algiers" | "Africa/Tunis" | "Europe/Dublin" | "Africa/Casablanca" | "Europe/London" | "Africa/Lagos" | "Africa/Ndjamena" | "Atlantic/Canary" | "Atlantic/Faroe" | "Europe/Lisbon" | "Atlantic/Madeira" | "Africa/El_Aaiun" | "Africa/Juba" | "Africa/Khartoum" | "Africa/Maputo" | "Africa/Windhoek" | "Europe/Amsterdam" | "Europe/Andorra" | "Europe/Belgrade" | "Europe/Berlin" | "Europe/Brussels" | "Europe/Budapest" | "Africa/Ceuta" | "Europe/Copenhagen" | "Europe/Gibraltar" | "Europe/Luxembourg" | "Europe/Madrid" | "Europe/Malta" | "Europe/Monaco" | "Europe/Oslo" | "Europe/Paris" | "Europe/Prague" | "Europe/Rome" | "Europe/Stockholm" | "Europe/Tirane" | "Europe/Vienna" | "Europe/Warsaw" | "Europe/Zurich" | "Africa/Cairo" | "Europe/Kaliningrad" | "Africa/Tripoli" | "Africa/Johannesburg" | "Antarctica/Troll" | "Asia/Baghdad" | "Asia/Qatar" | "Asia/Riyadh" | "Africa/Nairobi" | "Asia/Amman" | "Europe/Athens" | "Asia/Beirut" | "Europe/Bucharest" | "Europe/Chisinau" | "Asia/Damascus" | "Asia/Gaza" | "Asia/Hebron" | "Europe/Helsinki" | "Europe/Kiev" | "Asia/Nicosia" | "Europe/Riga" | "Europe/Sofia" | "Europe/Tallinn" | "Europe/Uzhgorod" | "Europe/Vilnius" | "Europe/Zaporozhye" | "Asia/Famagusta" | "Asia/Jerusalem" | "Europe/Kirov" | "Europe/Minsk" | "Europe/Moscow" | "Europe/Simferopol" | "Europe/Istanbul" | "Europe/Volgograd" | "Asia/Yerevan" | "Europe/Astrakhan" | "Asia/Baku" | "Asia/Tbilisi" | "Asia/Dubai" | "Indian/Mauritius" | "Indian/Reunion" | "Europe/Samara" | "Europe/Saratov" | "Indian/Mahe" | "Europe/Ulyanovsk" | "Asia/Kabul" | "Asia/Tehran" | "Indian/Kerguelen" | "Indian/Maldives" | "Antarctica/Mawson" | "Asia/Karachi" | "Asia/Dushanbe" | "Asia/Ashgabat" | "Asia/Samarkand" | "Asia/Tashkent" | "Asia/Aqtau" | "Asia/Aqtobe" | "Asia/Atyrau" | "Asia/Oral" | "Asia/Qyzylorda" | "Asia/Yekaterinburg" | "Asia/Colombo" | "Asia/Kolkata" | "Asia/Kathmandu" | "Asia/Dhaka" | "Asia/Thimphu" | "Asia/Almaty" | "Asia/Qostanay" | "Indian/Chagos" | "Asia/Bishkek" | "Asia/Omsk" | "Asia/Urumqi" | "Antarctica/Vostok" | "Indian/Cocos" | "Asia/Yangon" | "Asia/Barnaul" | "Indian/Christmas" | "Antarctica/Davis" | "Asia/Hovd" | "Asia/Bangkok" | "Asia/Ho_Chi_Minh" | "Asia/Krasnoyarsk" | "Asia/Novokuznetsk" | "Asia/Novosibirsk" | "Asia/Tomsk" | "Asia/Jakarta" | "Asia/Pontianak" | "Australia/Perth" | "Asia/Brunei" | "Asia/Makassar" | "Asia/Macau" | "Asia/Shanghai" | "Asia/Hong_Kong" | "Asia/Irkutsk" | "Asia/Kuala_Lumpur" | "Asia/Kuching" | "Asia/Manila" | "Asia/Singapore" | "Asia/Taipei" | "Asia/Choibalsan" | "Asia/Ulaanbaatar" | "Australia/Eucla" | "Asia/Dili" | "Asia/Jayapura" | "Asia/Tokyo" | "Asia/Pyongyang" | "Asia/Seoul" | "Pacific/Palau" | "Asia/Chita" | "Asia/Khandyga" | "Asia/Yakutsk" | "Australia/Darwin" | "Australia/Adelaide" | "Australia/Broken_Hill" | "Australia/Brisbane" | "Australia/Lindeman" | "Pacific/Guam" | "Pacific/Chuuk" | "Australia/Hobart" | "Antarctica/Macquarie" | "Australia/Melbourne" | "Australia/Sydney" | "Pacific/Port_Moresby" | "Asia/Ust-Nera" | "Asia/Vladivostok" | "Australia/Lord_Howe" | "Pacific/Bougainville" | "Antarctica/Casey" | "Pacific/Kosrae" | "Asia/Magadan" | "Pacific/Noumea" | "Pacific/Norfolk" | "Pacific/Pohnpei" | "Asia/Sakhalin" | "Pacific/Guadalcanal" | "Asia/Srednekolymsk" | "Pacific/Efate" | "Asia/Anadyr" | "Pacific/Fiji" | "Pacific/Tarawa" | "Pacific/Kwajalein" | "Pacific/Majuro" | "Pacific/Nauru" | "Pacific/Auckland" | "Asia/Kamchatka" | "Pacific/Funafuti" | "Pacific/Wake" | "Pacific/Wallis" | "Pacific/Chatham" | "Pacific/Apia" | "Pacific/Fakaofo" | "Pacific/Tongatapu" | "Pacific/Kiritimati")| undefined | null
				/** Phone. A number that can be texted */
				'phone'?: string| undefined | null
				/** Avatar src. */
				'avatar'?: SpruceSchema.ImageFieldValue| undefined | null
				
				'dateCreated': SpruceSchema.DateTimeFieldValue
				
				'dateUpdated'?: SpruceSchema.DateTimeFieldValue| undefined | null
				
				'dateScrambled'?: SpruceSchema.DateTimeFieldValue| undefined | null
				
				'roleIds'?: string[]| undefined | null
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
			                options: {choices: [{"value":"Pacific/Niue","label":"Niue Time"},{"value":"Pacific/Pago_Pago","label":"Samoa Standard Time"},{"value":"Pacific/Rarotonga","label":"Cook Islands Standard Time"},{"value":"Pacific/Honolulu","label":"Hawaii-Aleutian Standard Time"},{"value":"Pacific/Tahiti","label":"Tahiti Time"},{"value":"Pacific/Marquesas","label":"Marquesas Time"},{"value":"Pacific/Gambier","label":"Gambier Time"},{"value":"America/Adak","label":"Hawaii-Aleutian Time (Adak)"},{"value":"America/Anchorage","label":"Alaska Time - Anchorage"},{"value":"America/Juneau","label":"Alaska Time - Juneau"},{"value":"America/Metlakatla","label":"Alaska Time - Metlakatla"},{"value":"America/Nome","label":"Alaska Time - Nome"},{"value":"America/Sitka","label":"Alaska Time - Sitka"},{"value":"America/Yakutat","label":"Alaska Time - Yakutat"},{"value":"Pacific/Pitcairn","label":"Pitcairn Time"},{"value":"America/Hermosillo","label":"Mexican Pacific Standard Time"},{"value":"America/Dawson_Creek","label":"Mountain Standard Time - Dawson Creek"},{"value":"America/Fort_Nelson","label":"Mountain Standard Time - Fort Nelson"},{"value":"America/Phoenix","label":"Mountain Standard Time - Phoenix"},{"value":"America/Los_Angeles","label":"Pacific Time - Los Angeles"},{"value":"America/Tijuana","label":"Pacific Time - Tijuana"},{"value":"America/Vancouver","label":"Pacific Time - Vancouver"},{"value":"America/Dawson","label":"Yukon Time - Dawson"},{"value":"America/Whitehorse","label":"Yukon Time - Whitehorse"},{"value":"America/Belize","label":"Central Standard Time - Belize"},{"value":"America/Costa_Rica","label":"Central Standard Time - Costa Rica"},{"value":"America/El_Salvador","label":"Central Standard Time - El Salvador"},{"value":"America/Guatemala","label":"Central Standard Time - Guatemala"},{"value":"America/Managua","label":"Central Standard Time - Managua"},{"value":"America/Regina","label":"Central Standard Time - Regina"},{"value":"America/Swift_Current","label":"Central Standard Time - Swift Current"},{"value":"America/Tegucigalpa","label":"Central Standard Time - Tegucigalpa"},{"value":"Pacific/Easter","label":"Easter Island Time"},{"value":"Pacific/Galapagos","label":"Galapagos Time"},{"value":"America/Chihuahua","label":"Mexican Pacific Time - Chihuahua"},{"value":"America/Mazatlan","label":"Mexican Pacific Time - Mazatlan"},{"value":"America/Boise","label":"Mountain Time - Boise"},{"value":"America/Cambridge_Bay","label":"Mountain Time - Cambridge Bay"},{"value":"America/Denver","label":"Mountain Time - Denver"},{"value":"America/Edmonton","label":"Mountain Time - Edmonton"},{"value":"America/Inuvik","label":"Mountain Time - Inuvik"},{"value":"America/Ojinaga","label":"Mountain Time - Ojinaga"},{"value":"America/Yellowknife","label":"Mountain Time - Yellowknife"},{"value":"America/Eirunepe","label":"Acre Standard Time - Eirunepe"},{"value":"America/Rio_Branco","label":"Acre Standard Time - Rio Branco"},{"value":"America/Bahia_Banderas","label":"Central Time - Bahia Banderas"},{"value":"America/North_Dakota/Beulah","label":"Central Time - Beulah, North Dakota"},{"value":"America/North_Dakota/Center","label":"Central Time - Center, North Dakota"},{"value":"America/Chicago","label":"Central Time - Chicago"},{"value":"America/Indiana/Knox","label":"Central Time - Knox, Indiana"},{"value":"America/Matamoros","label":"Central Time - Matamoros"},{"value":"America/Menominee","label":"Central Time - Menominee"},{"value":"America/Merida","label":"Central Time - Merida"},{"value":"America/Mexico_City","label":"Central Time - Mexico City"},{"value":"America/Monterrey","label":"Central Time - Monterrey"},{"value":"America/North_Dakota/New_Salem","label":"Central Time - New Salem, North Dakota"},{"value":"America/Rainy_River","label":"Central Time - Rainy River"},{"value":"America/Rankin_Inlet","label":"Central Time - Rankin Inlet"},{"value":"America/Resolute","label":"Central Time - Resolute"},{"value":"America/Indiana/Tell_City","label":"Central Time - Tell City, Indiana"},{"value":"America/Winnipeg","label":"Central Time - Winnipeg"},{"value":"America/Bogota","label":"Colombia Standard Time"},{"value":"America/Cancun","label":"Eastern Standard Time - Cancun"},{"value":"America/Jamaica","label":"Eastern Standard Time - Jamaica"},{"value":"America/Panama","label":"Eastern Standard Time - Panama"},{"value":"America/Guayaquil","label":"Ecuador Time"},{"value":"America/Lima","label":"Peru Standard Time"},{"value":"America/Boa_Vista","label":"Amazon Standard Time - Boa Vista"},{"value":"America/Campo_Grande","label":"Amazon Standard Time - Campo Grande"},{"value":"America/Cuiaba","label":"Amazon Standard Time - Cuiaba"},{"value":"America/Manaus","label":"Amazon Standard Time - Manaus"},{"value":"America/Porto_Velho","label":"Amazon Standard Time - Porto Velho"},{"value":"America/Barbados","label":"Atlantic Standard Time - Barbados"},{"value":"America/Martinique","label":"Atlantic Standard Time - Martinique"},{"value":"America/Puerto_Rico","label":"Atlantic Standard Time - Puerto Rico"},{"value":"America/Santo_Domingo","label":"Atlantic Standard Time - Santo Domingo"},{"value":"America/La_Paz","label":"Bolivia Time"},{"value":"America/Santiago","label":"Chile Time"},{"value":"America/Havana","label":"Cuba Time"},{"value":"America/Detroit","label":"Eastern Time - Detroit"},{"value":"America/Grand_Turk","label":"Eastern Time - Grand Turk"},{"value":"America/Indiana/Indianapolis","label":"Eastern Time - Indianapolis"},{"value":"America/Iqaluit","label":"Eastern Time - Iqaluit"},{"value":"America/Kentucky/Louisville","label":"Eastern Time - Louisville"},{"value":"America/Indiana/Marengo","label":"Eastern Time - Marengo, Indiana"},{"value":"America/Kentucky/Monticello","label":"Eastern Time - Monticello, Kentucky"},{"value":"America/New_York","label":"Eastern Time - New York"},{"value":"America/Nipigon","label":"Eastern Time - Nipigon"},{"value":"America/Pangnirtung","label":"Eastern Time - Pangnirtung"},{"value":"America/Indiana/Petersburg","label":"Eastern Time - Petersburg, Indiana"},{"value":"America/Port-au-Prince","label":"Eastern Time - Port-au-Prince"},{"value":"America/Thunder_Bay","label":"Eastern Time - Thunder Bay"},{"value":"America/Toronto","label":"Eastern Time - Toronto"},{"value":"America/Indiana/Vevay","label":"Eastern Time - Vevay, Indiana"},{"value":"America/Indiana/Vincennes","label":"Eastern Time - Vincennes, Indiana"},{"value":"America/Indiana/Winamac","label":"Eastern Time - Winamac, Indiana"},{"value":"America/Guyana","label":"Guyana Time"},{"value":"America/Asuncion","label":"Paraguay Time"},{"value":"America/Caracas","label":"Venezuela Time"},{"value":"America/Argentina/Buenos_Aires","label":"Argentina Standard Time - Buenos Aires"},{"value":"America/Argentina/Catamarca","label":"Argentina Standard Time - Catamarca"},{"value":"America/Argentina/Cordoba","label":"Argentina Standard Time - Cordoba"},{"value":"America/Argentina/Jujuy","label":"Argentina Standard Time - Jujuy"},{"value":"America/Argentina/La_Rioja","label":"Argentina Standard Time - La Rioja"},{"value":"America/Argentina/Mendoza","label":"Argentina Standard Time - Mendoza"},{"value":"America/Argentina/Rio_Gallegos","label":"Argentina Standard Time - Rio Gallegos"},{"value":"America/Argentina/Salta","label":"Argentina Standard Time - Salta"},{"value":"America/Argentina/San_Juan","label":"Argentina Standard Time - San Juan"},{"value":"America/Argentina/San_Luis","label":"Argentina Standard Time - San Luis"},{"value":"America/Argentina/Tucuman","label":"Argentina Standard Time - Tucuman"},{"value":"America/Argentina/Ushuaia","label":"Argentina Standard Time - Ushuaia"},{"value":"Atlantic/Bermuda","label":"Atlantic Time - Bermuda"},{"value":"America/Glace_Bay","label":"Atlantic Time - Glace Bay"},{"value":"America/Goose_Bay","label":"Atlantic Time - Goose Bay"},{"value":"America/Halifax","label":"Atlantic Time - Halifax"},{"value":"America/Moncton","label":"Atlantic Time - Moncton"},{"value":"America/Thule","label":"Atlantic Time - Thule"},{"value":"America/Araguaina","label":"Brasilia Standard Time - Araguaina"},{"value":"America/Bahia","label":"Brasilia Standard Time - Bahia"},{"value":"America/Belem","label":"Brasilia Standard Time - Belem"},{"value":"America/Fortaleza","label":"Brasilia Standard Time - Fortaleza"},{"value":"America/Maceio","label":"Brasilia Standard Time - Maceio"},{"value":"America/Recife","label":"Brasilia Standard Time - Recife"},{"value":"America/Santarem","label":"Brasilia Standard Time - Santarem"},{"value":"America/Sao_Paulo","label":"Brasilia Standard Time - Sao Paulo"},{"value":"Atlantic/Stanley","label":"Falkland Islands Standard Time"},{"value":"America/Cayenne","label":"French Guiana Time"},{"value":"Antarctica/Palmer","label":"Palmer Time"},{"value":"America/Punta_Arenas","label":"Punta Arenas Time"},{"value":"Antarctica/Rothera","label":"Rothera Time"},{"value":"America/Paramaribo","label":"Suriname Time"},{"value":"America/Montevideo","label":"Uruguay Standard Time"},{"value":"America/St_Johns","label":"Newfoundland Time"},{"value":"America/Noronha","label":"Fernando de Noronha Standard Time"},{"value":"Atlantic/South_Georgia","label":"South Georgia Time"},{"value":"America/Miquelon","label":"St. Pierre & Miquelon Time"},{"value":"America/Nuuk","label":"West Greenland Time"},{"value":"Atlantic/Cape_Verde","label":"Cape Verde Standard Time"},{"value":"Atlantic/Azores","label":"Azores Time"},{"value":"UTC","label":"Coordinated Universal Time"},{"value":"America/Scoresbysund","label":"East Greenland Time"},{"value":"Etc/GMT","label":"Greenwich Mean Time"},{"value":"Africa/Abidjan","label":"Greenwich Mean Time - Abidjan"},{"value":"Africa/Bissau","label":"Greenwich Mean Time - Bissau"},{"value":"America/Danmarkshavn","label":"Greenwich Mean Time - Danmarkshavn"},{"value":"Africa/Monrovia","label":"Greenwich Mean Time - Monrovia"},{"value":"Atlantic/Reykjavik","label":"Greenwich Mean Time - Reykjavik"},{"value":"Africa/Sao_Tome","label":"Greenwich Mean Time - São Tomé"},{"value":"Africa/Algiers","label":"Central European Standard Time - Algiers"},{"value":"Africa/Tunis","label":"Central European Standard Time - Tunis"},{"value":"Europe/Dublin","label":"Ireland Time"},{"value":"Africa/Casablanca","label":"Morocco Time"},{"value":"Europe/London","label":"United Kingdom Time"},{"value":"Africa/Lagos","label":"West Africa Standard Time - Lagos"},{"value":"Africa/Ndjamena","label":"West Africa Standard Time - Ndjamena"},{"value":"Atlantic/Canary","label":"Western European Time - Canary"},{"value":"Atlantic/Faroe","label":"Western European Time - Faroe"},{"value":"Europe/Lisbon","label":"Western European Time - Lisbon"},{"value":"Atlantic/Madeira","label":"Western European Time - Madeira"},{"value":"Africa/El_Aaiun","label":"Western Sahara Time"},{"value":"Africa/Juba","label":"Central Africa Time - Juba"},{"value":"Africa/Khartoum","label":"Central Africa Time - Khartoum"},{"value":"Africa/Maputo","label":"Central Africa Time - Maputo"},{"value":"Africa/Windhoek","label":"Central Africa Time - Windhoek"},{"value":"Europe/Amsterdam","label":"Central European Time - Amsterdam"},{"value":"Europe/Andorra","label":"Central European Time - Andorra"},{"value":"Europe/Belgrade","label":"Central European Time - Belgrade"},{"value":"Europe/Berlin","label":"Central European Time - Berlin"},{"value":"Europe/Brussels","label":"Central European Time - Brussels"},{"value":"Europe/Budapest","label":"Central European Time - Budapest"},{"value":"Africa/Ceuta","label":"Central European Time - Ceuta"},{"value":"Europe/Copenhagen","label":"Central European Time - Copenhagen"},{"value":"Europe/Gibraltar","label":"Central European Time - Gibraltar"},{"value":"Europe/Luxembourg","label":"Central European Time - Luxembourg"},{"value":"Europe/Madrid","label":"Central European Time - Madrid"},{"value":"Europe/Malta","label":"Central European Time - Malta"},{"value":"Europe/Monaco","label":"Central European Time - Monaco"},{"value":"Europe/Oslo","label":"Central European Time - Oslo"},{"value":"Europe/Paris","label":"Central European Time - Paris"},{"value":"Europe/Prague","label":"Central European Time - Prague"},{"value":"Europe/Rome","label":"Central European Time - Rome"},{"value":"Europe/Stockholm","label":"Central European Time - Stockholm"},{"value":"Europe/Tirane","label":"Central European Time - Tirane"},{"value":"Europe/Vienna","label":"Central European Time - Vienna"},{"value":"Europe/Warsaw","label":"Central European Time - Warsaw"},{"value":"Europe/Zurich","label":"Central European Time - Zurich"},{"value":"Africa/Cairo","label":"Eastern European Standard Time - Cairo"},{"value":"Europe/Kaliningrad","label":"Eastern European Standard Time - Kaliningrad"},{"value":"Africa/Tripoli","label":"Eastern European Standard Time - Tripoli"},{"value":"Africa/Johannesburg","label":"South Africa Standard Time"},{"value":"Antarctica/Troll","label":"Troll Time"},{"value":"Asia/Baghdad","label":"Arabian Standard Time - Baghdad"},{"value":"Asia/Qatar","label":"Arabian Standard Time - Qatar"},{"value":"Asia/Riyadh","label":"Arabian Standard Time - Riyadh"},{"value":"Africa/Nairobi","label":"East Africa Time"},{"value":"Asia/Amman","label":"Eastern European Time - Amman"},{"value":"Europe/Athens","label":"Eastern European Time - Athens"},{"value":"Asia/Beirut","label":"Eastern European Time - Beirut"},{"value":"Europe/Bucharest","label":"Eastern European Time - Bucharest"},{"value":"Europe/Chisinau","label":"Eastern European Time - Chisinau"},{"value":"Asia/Damascus","label":"Eastern European Time - Damascus"},{"value":"Asia/Gaza","label":"Eastern European Time - Gaza"},{"value":"Asia/Hebron","label":"Eastern European Time - Hebron"},{"value":"Europe/Helsinki","label":"Eastern European Time - Helsinki"},{"value":"Europe/Kiev","label":"Eastern European Time - Kyiv"},{"value":"Asia/Nicosia","label":"Eastern European Time - Nicosia"},{"value":"Europe/Riga","label":"Eastern European Time - Riga"},{"value":"Europe/Sofia","label":"Eastern European Time - Sofia"},{"value":"Europe/Tallinn","label":"Eastern European Time - Tallinn"},{"value":"Europe/Uzhgorod","label":"Eastern European Time - Uzhhorod"},{"value":"Europe/Vilnius","label":"Eastern European Time - Vilnius"},{"value":"Europe/Zaporozhye","label":"Eastern European Time - Zaporozhye"},{"value":"Asia/Famagusta","label":"Famagusta Time"},{"value":"Asia/Jerusalem","label":"Israel Time"},{"value":"Europe/Kirov","label":"Kirov Time"},{"value":"Europe/Minsk","label":"Moscow Standard Time - Minsk"},{"value":"Europe/Moscow","label":"Moscow Standard Time - Moscow"},{"value":"Europe/Simferopol","label":"Moscow Standard Time - Simferopol"},{"value":"Europe/Istanbul","label":"Turkey Time"},{"value":"Europe/Volgograd","label":"Volgograd Standard Time"},{"value":"Asia/Yerevan","label":"Armenia Standard Time"},{"value":"Europe/Astrakhan","label":"Astrakhan Time"},{"value":"Asia/Baku","label":"Azerbaijan Standard Time"},{"value":"Asia/Tbilisi","label":"Georgia Standard Time"},{"value":"Asia/Dubai","label":"Gulf Standard Time"},{"value":"Indian/Mauritius","label":"Mauritius Standard Time"},{"value":"Indian/Reunion","label":"Réunion Time"},{"value":"Europe/Samara","label":"Samara Standard Time"},{"value":"Europe/Saratov","label":"Saratov Time"},{"value":"Indian/Mahe","label":"Seychelles Time"},{"value":"Europe/Ulyanovsk","label":"Ulyanovsk Time"},{"value":"Asia/Kabul","label":"Afghanistan Time"},{"value":"Asia/Tehran","label":"Iran Time"},{"value":"Indian/Kerguelen","label":"French Southern & Antarctic Time"},{"value":"Indian/Maldives","label":"Maldives Time"},{"value":"Antarctica/Mawson","label":"Mawson Time"},{"value":"Asia/Karachi","label":"Pakistan Standard Time"},{"value":"Asia/Dushanbe","label":"Tajikistan Time"},{"value":"Asia/Ashgabat","label":"Turkmenistan Standard Time"},{"value":"Asia/Samarkand","label":"Uzbekistan Standard Time - Samarkand"},{"value":"Asia/Tashkent","label":"Uzbekistan Standard Time - Tashkent"},{"value":"Asia/Aqtau","label":"West Kazakhstan Time - Aqtau"},{"value":"Asia/Aqtobe","label":"West Kazakhstan Time - Aqtobe"},{"value":"Asia/Atyrau","label":"West Kazakhstan Time - Atyrau"},{"value":"Asia/Oral","label":"West Kazakhstan Time - Oral"},{"value":"Asia/Qyzylorda","label":"West Kazakhstan Time - Qyzylorda"},{"value":"Asia/Yekaterinburg","label":"Yekaterinburg Standard Time"},{"value":"Asia/Colombo","label":"India Standard Time - Colombo"},{"value":"Asia/Kolkata","label":"India Standard Time - Kolkata"},{"value":"Asia/Kathmandu","label":"Nepal Time"},{"value":"Asia/Dhaka","label":"Bangladesh Standard Time"},{"value":"Asia/Thimphu","label":"Bhutan Time"},{"value":"Asia/Almaty","label":"East Kazakhstan Time - Almaty"},{"value":"Asia/Qostanay","label":"East Kazakhstan Time - Kostanay"},{"value":"Indian/Chagos","label":"Indian Ocean Time"},{"value":"Asia/Bishkek","label":"Kyrgyzstan Time"},{"value":"Asia/Omsk","label":"Omsk Standard Time"},{"value":"Asia/Urumqi","label":"Urumqi Time"},{"value":"Antarctica/Vostok","label":"Vostok Time"},{"value":"Indian/Cocos","label":"Cocos Islands Time"},{"value":"Asia/Yangon","label":"Myanmar Time"},{"value":"Asia/Barnaul","label":"Barnaul Time"},{"value":"Indian/Christmas","label":"Christmas Island Time"},{"value":"Antarctica/Davis","label":"Davis Time"},{"value":"Asia/Hovd","label":"Hovd Standard Time"},{"value":"Asia/Bangkok","label":"Indochina Time - Bangkok"},{"value":"Asia/Ho_Chi_Minh","label":"Indochina Time - Ho Chi Minh City"},{"value":"Asia/Krasnoyarsk","label":"Krasnoyarsk Standard Time - Krasnoyarsk"},{"value":"Asia/Novokuznetsk","label":"Krasnoyarsk Standard Time - Novokuznetsk"},{"value":"Asia/Novosibirsk","label":"Novosibirsk Standard Time"},{"value":"Asia/Tomsk","label":"Tomsk Time"},{"value":"Asia/Jakarta","label":"Western Indonesia Time - Jakarta"},{"value":"Asia/Pontianak","label":"Western Indonesia Time - Pontianak"},{"value":"Australia/Perth","label":"Australian Western Standard Time"},{"value":"Asia/Brunei","label":"Brunei Darussalam Time"},{"value":"Asia/Makassar","label":"Central Indonesia Time"},{"value":"Asia/Macau","label":"China Standard Time - Macao"},{"value":"Asia/Shanghai","label":"China Standard Time - Shanghai"},{"value":"Asia/Hong_Kong","label":"Hong Kong Standard Time"},{"value":"Asia/Irkutsk","label":"Irkutsk Standard Time"},{"value":"Asia/Kuala_Lumpur","label":"Malaysia Time - Kuala Lumpur"},{"value":"Asia/Kuching","label":"Malaysia Time - Kuching"},{"value":"Asia/Manila","label":"Philippine Standard Time"},{"value":"Asia/Singapore","label":"Singapore Standard Time"},{"value":"Asia/Taipei","label":"Taipei Standard Time"},{"value":"Asia/Choibalsan","label":"Ulaanbaatar Standard Time - Choibalsan"},{"value":"Asia/Ulaanbaatar","label":"Ulaanbaatar Standard Time - Ulaanbaatar"},{"value":"Australia/Eucla","label":"Australian Central Western Standard Time"},{"value":"Asia/Dili","label":"East Timor Time"},{"value":"Asia/Jayapura","label":"Eastern Indonesia Time"},{"value":"Asia/Tokyo","label":"Japan Standard Time"},{"value":"Asia/Pyongyang","label":"Korean Standard Time - Pyongyang"},{"value":"Asia/Seoul","label":"Korean Standard Time - Seoul"},{"value":"Pacific/Palau","label":"Palau Time"},{"value":"Asia/Chita","label":"Yakutsk Standard Time - Chita"},{"value":"Asia/Khandyga","label":"Yakutsk Standard Time - Khandyga"},{"value":"Asia/Yakutsk","label":"Yakutsk Standard Time - Yakutsk"},{"value":"Australia/Darwin","label":"Australian Central Standard Time"},{"value":"Australia/Adelaide","label":"Central Australia Time - Adelaide"},{"value":"Australia/Broken_Hill","label":"Central Australia Time - Broken Hill"},{"value":"Australia/Brisbane","label":"Australian Eastern Standard Time - Brisbane"},{"value":"Australia/Lindeman","label":"Australian Eastern Standard Time - Lindeman"},{"value":"Pacific/Guam","label":"Chamorro Standard Time"},{"value":"Pacific/Chuuk","label":"Chuuk Time"},{"value":"Australia/Hobart","label":"Eastern Australia Time - Hobart"},{"value":"Antarctica/Macquarie","label":"Eastern Australia Time - Macquarie"},{"value":"Australia/Melbourne","label":"Eastern Australia Time - Melbourne"},{"value":"Australia/Sydney","label":"Eastern Australia Time - Sydney"},{"value":"Pacific/Port_Moresby","label":"Papua New Guinea Time"},{"value":"Asia/Ust-Nera","label":"Vladivostok Standard Time - Ust-Nera"},{"value":"Asia/Vladivostok","label":"Vladivostok Standard Time - Vladivostok"},{"value":"Australia/Lord_Howe","label":"Lord Howe Time"},{"value":"Pacific/Bougainville","label":"Bougainville Time"},{"value":"Antarctica/Casey","label":"Casey Time"},{"value":"Pacific/Kosrae","label":"Kosrae Time"},{"value":"Asia/Magadan","label":"Magadan Standard Time"},{"value":"Pacific/Noumea","label":"New Caledonia Standard Time"},{"value":"Pacific/Norfolk","label":"Norfolk Island Time"},{"value":"Pacific/Pohnpei","label":"Ponape Time"},{"value":"Asia/Sakhalin","label":"Sakhalin Standard Time"},{"value":"Pacific/Guadalcanal","label":"Solomon Islands Time"},{"value":"Asia/Srednekolymsk","label":"Srednekolymsk Time"},{"value":"Pacific/Efate","label":"Vanuatu Standard Time"},{"value":"Asia/Anadyr","label":"Anadyr Standard Time"},{"value":"Pacific/Fiji","label":"Fiji Time"},{"value":"Pacific/Tarawa","label":"Gilbert Islands Time"},{"value":"Pacific/Kwajalein","label":"Marshall Islands Time - Kwajalein"},{"value":"Pacific/Majuro","label":"Marshall Islands Time - Majuro"},{"value":"Pacific/Nauru","label":"Nauru Time"},{"value":"Pacific/Auckland","label":"New Zealand Time"},{"value":"Asia/Kamchatka","label":"Petropavlovsk-Kamchatski Standard Time"},{"value":"Pacific/Funafuti","label":"Tuvalu Time"},{"value":"Pacific/Wake","label":"Wake Island Time"},{"value":"Pacific/Wallis","label":"Wallis & Futuna Time"},{"value":"Pacific/Chatham","label":"Chatham Time"},{"value":"Pacific/Apia","label":"Apia Standard Time"},{"value":"Pacific/Fakaofo","label":"Tokelau Time"},{"value":"Pacific/Tongatapu","label":"Tonga Standard Time"},{"value":"Pacific/Kiritimati","label":"Line Islands Time"}],}
			            },
			            /** Phone. A number that can be texted */
			            'phone': {
			                label: 'Phone',
			                type: 'phone',
			                isPrivate: true,
			                hint: 'A number that can be texted',
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
			
				
				'organizationId'?: string| undefined | null
				
				'namespaces'?: string[]| undefined | null
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
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target'?: SpruceSchemas.Mercury.v2020_12_25.ListPermissionContractsEmitTarget| undefined | null
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
				
				'skillId'?: string| undefined | null
				
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
			
				
				'organizationId'?: string| undefined | null
				
				'locationId'?: string| undefined | null
				
				'personId'?: string| undefined | null
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
			
				
				'shouldIncludePrivateRoles'?: boolean| undefined | null
				
				'shouldIncludeMetaRoles'?: boolean| undefined | null
				
				'shouldIncludeAllLocations'?: boolean| undefined | null
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
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target'?: SpruceSchemas.Mercury.v2020_12_25.ListRolesEmitTarget| undefined | null
				
				'payload'?: SpruceSchemas.Mercury.v2020_12_25.ListRolesEmitPayload| undefined | null
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
			
				
				'organizationId'?: string| undefined | null
				
				'locationId'?: string| undefined | null
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
				'base'?: ("owner" | "groupManager" | "manager" | "teammate" | "anonymous" | "loggedIn" | "guest")| undefined | null
				/** Description. */
				'description'?: string| undefined | null
				
				'dateCreated': number
				
				'dateDeleted'?: number| undefined | null
				
				'organizationId'?: string| undefined | null
				/** Public. Should I let people that are not part of this organization this role? */
				'isPublic'?: boolean| undefined | null
				
				'isMeta'?: boolean| undefined | null
				
				'target'?: SpruceSchemas.Mercury.v2020_12_25.ListSchemaTarget| undefined | null
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

		
		interface ListSkillsEmitPayload {
			
				
				'shouldOnlyShowMine'?: boolean| undefined | null
				
				'namespaces'?: string[]| undefined | null
				
				'shouldShowGlobalSkills'?: boolean| undefined | null
				
				'shouldOnlyShowInstallableSkills'?: boolean| undefined | null
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
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'payload'?: SpruceSchemas.Mercury.v2020_12_25.ListSkillsEmitPayload| undefined | null
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
				'description'?: string| undefined | null
				/** Namespace. */
				'slug': string
				/** Published. Does this skill show up in the marketplace and can other devs use it as a dependency? */
				'isPublished'?: boolean| undefined | null
				/** Global. Does this skill require needing to be installed anywhere. */
				'canBeInstalled'?: boolean| undefined | null
				
				'dateCreated': SpruceSchema.DateTimeFieldValue
				
				'dateDeleted'?: SpruceSchema.DateTimeFieldValue| undefined | null
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
			
				
				'phone': string
		}

		interface LoginEmitTargetSchema extends SpruceSchema.Schema {
			id: 'loginEmitTarget',
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

		interface LoginEmitTargetEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.LoginEmitTargetSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface LoginEmitPayload {
			
				
				'password': string
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
			    }
		}

		interface LoginEmitPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.LoginEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface LoginEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target': SpruceSchemas.Mercury.v2020_12_25.LoginEmitTarget
				
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
			                isRequired: true,
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
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
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
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
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
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
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
				
				'isGlobal'?: boolean| undefined | null
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
				
				'fullyQualifiedEventNames'?: string[]| undefined | null
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
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
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
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
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
			
				
				'iosToken'?: string| undefined | null
				
				'androidToken'?: string| undefined | null
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
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'payload'?: SpruceSchemas.Mercury.v2020_12_25.RegisterPushTokenEmitPayload| undefined | null
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
				'description'?: string| undefined | null
				/** Published. Does this skill show up in the marketplace and can other devs use it as a dependency? */
				'isPublished'?: boolean| undefined | null
				/** Global. Does this skill require needing to be installed anywhere. */
				'canBeInstalled'?: boolean| undefined | null
				/** Namespace. */
				'slug'?: string| undefined | null
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
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
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
			
				
				'organizationId'?: string| undefined | null
				
				'locationId'?: string| undefined | null
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
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target'?: SpruceSchemas.Mercury.v2020_12_25.RemoveRoleEmitTarget| undefined | null
				
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
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
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
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
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
			
				
				'phone': string
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
			                isRequired: true,
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
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target': SpruceSchemas.Mercury.v2020_12_25.ResetPasswordEmitTarget
				
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
			                isRequired: true,
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
			
				
				'locationId'?: string| undefined | null
				
				'organizationId'?: string| undefined | null
				
				'permissionPersonId'?: string| undefined | null
				
				'permissionSkillId'?: string| undefined | null
				
				'permissionContractId': string
				
				'roleId'?: string| undefined | null
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
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
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
			
				
				'personId'?: string| undefined | null
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
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target'?: SpruceSchemas.Mercury.v2020_12_25.ScrambleAccountEmitTarget| undefined | null
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
			
				
				'locationId'?: string| undefined | null
				
				'personId'?: string| undefined | null
				
				'organizationId'?: string| undefined | null
				
				'skillId'?: string| undefined | null
				
				'roleId'?: string| undefined | null
				
				'phone'?: string| undefined | null
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
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target'?: SpruceSchemas.Mercury.v2020_12_25.SendMessageTarget| undefined | null
				
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
				'trackingId'?: string| undefined | null
				
				'classification': ("auth" | "transactional" | "promotional" | "incoming")
				
				'body': string
				
				'context'?: (Record<string, any>)| undefined | null
				
				'topicId'?: string| undefined | null
				
				'links'?: SpruceSchemas.Spruce.v2020_07_22.Link[]| undefined | null
				
				'choices'?: SpruceSchemas.Spruce.v2020_07_22.Choice[]| undefined | null
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

		
		interface SignupEmitPayload {
			
				
				'phone': string
				
				'firstName'?: string| undefined | null
				
				'lastName'?: string| undefined | null
				
				'password': string
				
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
			                isRequired: true,
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
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
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
				'errorCode'?: string| undefined | null
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
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
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

		
		interface SyncEventContractsEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
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

		
		interface SyncPermissionContractsEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventTarget| undefined | null
				
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
				
				'skillId'?: string| undefined | null
				
				'target'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventTarget| undefined | null
				
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
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
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
			
				
				'topics'?: string[]| undefined | null
				
				'shouldUnregisterAll'?: boolean| undefined | null
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
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'payload'?: SpruceSchemas.Mercury.v2020_12_25.UnregisterConversationTopicsEmitPayload| undefined | null
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
			
				
				'eventNames'?: string[]| undefined | null
				
				'shouldUnregisterAll'?: boolean| undefined | null
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
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'payload'?: SpruceSchemas.Mercury.v2020_12_25.UnregisterEventsEmitPayload| undefined | null
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
			
				
				'fullyQualifiedEventNames'?: string[]| undefined | null
				
				'shouldUnregisterAll'?: boolean| undefined | null
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
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'payload'?: SpruceSchemas.Mercury.v2020_12_25.UnregisterListenersEmitPayload| undefined | null
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
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
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
				'name'?: string| undefined | null
				/** Location number. You can use other symbols, like # or dashes. #123 or 32-US-5 */
				'num'?: string| undefined | null
				/** Slug. */
				'slug'?: string| undefined | null
				/** Public. Is this location viewable by guests? */
				'isPublic'?: boolean| undefined | null
				/** Main Phone. */
				'phone'?: string| undefined | null
				/** Timezone. */
				'timezone'?: ("Pacific/Niue" | "Pacific/Pago_Pago" | "Pacific/Rarotonga" | "Pacific/Honolulu" | "Pacific/Tahiti" | "Pacific/Marquesas" | "Pacific/Gambier" | "America/Adak" | "America/Anchorage" | "America/Juneau" | "America/Metlakatla" | "America/Nome" | "America/Sitka" | "America/Yakutat" | "Pacific/Pitcairn" | "America/Hermosillo" | "America/Dawson_Creek" | "America/Fort_Nelson" | "America/Phoenix" | "America/Los_Angeles" | "America/Tijuana" | "America/Vancouver" | "America/Dawson" | "America/Whitehorse" | "America/Belize" | "America/Costa_Rica" | "America/El_Salvador" | "America/Guatemala" | "America/Managua" | "America/Regina" | "America/Swift_Current" | "America/Tegucigalpa" | "Pacific/Easter" | "Pacific/Galapagos" | "America/Chihuahua" | "America/Mazatlan" | "America/Boise" | "America/Cambridge_Bay" | "America/Denver" | "America/Edmonton" | "America/Inuvik" | "America/Ojinaga" | "America/Yellowknife" | "America/Eirunepe" | "America/Rio_Branco" | "America/Bahia_Banderas" | "America/North_Dakota/Beulah" | "America/North_Dakota/Center" | "America/Chicago" | "America/Indiana/Knox" | "America/Matamoros" | "America/Menominee" | "America/Merida" | "America/Mexico_City" | "America/Monterrey" | "America/North_Dakota/New_Salem" | "America/Rainy_River" | "America/Rankin_Inlet" | "America/Resolute" | "America/Indiana/Tell_City" | "America/Winnipeg" | "America/Bogota" | "America/Cancun" | "America/Jamaica" | "America/Panama" | "America/Guayaquil" | "America/Lima" | "America/Boa_Vista" | "America/Campo_Grande" | "America/Cuiaba" | "America/Manaus" | "America/Porto_Velho" | "America/Barbados" | "America/Martinique" | "America/Puerto_Rico" | "America/Santo_Domingo" | "America/La_Paz" | "America/Santiago" | "America/Havana" | "America/Detroit" | "America/Grand_Turk" | "America/Indiana/Indianapolis" | "America/Iqaluit" | "America/Kentucky/Louisville" | "America/Indiana/Marengo" | "America/Kentucky/Monticello" | "America/New_York" | "America/Nipigon" | "America/Pangnirtung" | "America/Indiana/Petersburg" | "America/Port-au-Prince" | "America/Thunder_Bay" | "America/Toronto" | "America/Indiana/Vevay" | "America/Indiana/Vincennes" | "America/Indiana/Winamac" | "America/Guyana" | "America/Asuncion" | "America/Caracas" | "America/Argentina/Buenos_Aires" | "America/Argentina/Catamarca" | "America/Argentina/Cordoba" | "America/Argentina/Jujuy" | "America/Argentina/La_Rioja" | "America/Argentina/Mendoza" | "America/Argentina/Rio_Gallegos" | "America/Argentina/Salta" | "America/Argentina/San_Juan" | "America/Argentina/San_Luis" | "America/Argentina/Tucuman" | "America/Argentina/Ushuaia" | "Atlantic/Bermuda" | "America/Glace_Bay" | "America/Goose_Bay" | "America/Halifax" | "America/Moncton" | "America/Thule" | "America/Araguaina" | "America/Bahia" | "America/Belem" | "America/Fortaleza" | "America/Maceio" | "America/Recife" | "America/Santarem" | "America/Sao_Paulo" | "Atlantic/Stanley" | "America/Cayenne" | "Antarctica/Palmer" | "America/Punta_Arenas" | "Antarctica/Rothera" | "America/Paramaribo" | "America/Montevideo" | "America/St_Johns" | "America/Noronha" | "Atlantic/South_Georgia" | "America/Miquelon" | "America/Nuuk" | "Atlantic/Cape_Verde" | "Atlantic/Azores" | "UTC" | "America/Scoresbysund" | "Etc/GMT" | "Africa/Abidjan" | "Africa/Bissau" | "America/Danmarkshavn" | "Africa/Monrovia" | "Atlantic/Reykjavik" | "Africa/Sao_Tome" | "Africa/Algiers" | "Africa/Tunis" | "Europe/Dublin" | "Africa/Casablanca" | "Europe/London" | "Africa/Lagos" | "Africa/Ndjamena" | "Atlantic/Canary" | "Atlantic/Faroe" | "Europe/Lisbon" | "Atlantic/Madeira" | "Africa/El_Aaiun" | "Africa/Juba" | "Africa/Khartoum" | "Africa/Maputo" | "Africa/Windhoek" | "Europe/Amsterdam" | "Europe/Andorra" | "Europe/Belgrade" | "Europe/Berlin" | "Europe/Brussels" | "Europe/Budapest" | "Africa/Ceuta" | "Europe/Copenhagen" | "Europe/Gibraltar" | "Europe/Luxembourg" | "Europe/Madrid" | "Europe/Malta" | "Europe/Monaco" | "Europe/Oslo" | "Europe/Paris" | "Europe/Prague" | "Europe/Rome" | "Europe/Stockholm" | "Europe/Tirane" | "Europe/Vienna" | "Europe/Warsaw" | "Europe/Zurich" | "Africa/Cairo" | "Europe/Kaliningrad" | "Africa/Tripoli" | "Africa/Johannesburg" | "Antarctica/Troll" | "Asia/Baghdad" | "Asia/Qatar" | "Asia/Riyadh" | "Africa/Nairobi" | "Asia/Amman" | "Europe/Athens" | "Asia/Beirut" | "Europe/Bucharest" | "Europe/Chisinau" | "Asia/Damascus" | "Asia/Gaza" | "Asia/Hebron" | "Europe/Helsinki" | "Europe/Kiev" | "Asia/Nicosia" | "Europe/Riga" | "Europe/Sofia" | "Europe/Tallinn" | "Europe/Uzhgorod" | "Europe/Vilnius" | "Europe/Zaporozhye" | "Asia/Famagusta" | "Asia/Jerusalem" | "Europe/Kirov" | "Europe/Minsk" | "Europe/Moscow" | "Europe/Simferopol" | "Europe/Istanbul" | "Europe/Volgograd" | "Asia/Yerevan" | "Europe/Astrakhan" | "Asia/Baku" | "Asia/Tbilisi" | "Asia/Dubai" | "Indian/Mauritius" | "Indian/Reunion" | "Europe/Samara" | "Europe/Saratov" | "Indian/Mahe" | "Europe/Ulyanovsk" | "Asia/Kabul" | "Asia/Tehran" | "Indian/Kerguelen" | "Indian/Maldives" | "Antarctica/Mawson" | "Asia/Karachi" | "Asia/Dushanbe" | "Asia/Ashgabat" | "Asia/Samarkand" | "Asia/Tashkent" | "Asia/Aqtau" | "Asia/Aqtobe" | "Asia/Atyrau" | "Asia/Oral" | "Asia/Qyzylorda" | "Asia/Yekaterinburg" | "Asia/Colombo" | "Asia/Kolkata" | "Asia/Kathmandu" | "Asia/Dhaka" | "Asia/Thimphu" | "Asia/Almaty" | "Asia/Qostanay" | "Indian/Chagos" | "Asia/Bishkek" | "Asia/Omsk" | "Asia/Urumqi" | "Antarctica/Vostok" | "Indian/Cocos" | "Asia/Yangon" | "Asia/Barnaul" | "Indian/Christmas" | "Antarctica/Davis" | "Asia/Hovd" | "Asia/Bangkok" | "Asia/Ho_Chi_Minh" | "Asia/Krasnoyarsk" | "Asia/Novokuznetsk" | "Asia/Novosibirsk" | "Asia/Tomsk" | "Asia/Jakarta" | "Asia/Pontianak" | "Australia/Perth" | "Asia/Brunei" | "Asia/Makassar" | "Asia/Macau" | "Asia/Shanghai" | "Asia/Hong_Kong" | "Asia/Irkutsk" | "Asia/Kuala_Lumpur" | "Asia/Kuching" | "Asia/Manila" | "Asia/Singapore" | "Asia/Taipei" | "Asia/Choibalsan" | "Asia/Ulaanbaatar" | "Australia/Eucla" | "Asia/Dili" | "Asia/Jayapura" | "Asia/Tokyo" | "Asia/Pyongyang" | "Asia/Seoul" | "Pacific/Palau" | "Asia/Chita" | "Asia/Khandyga" | "Asia/Yakutsk" | "Australia/Darwin" | "Australia/Adelaide" | "Australia/Broken_Hill" | "Australia/Brisbane" | "Australia/Lindeman" | "Pacific/Guam" | "Pacific/Chuuk" | "Australia/Hobart" | "Antarctica/Macquarie" | "Australia/Melbourne" | "Australia/Sydney" | "Pacific/Port_Moresby" | "Asia/Ust-Nera" | "Asia/Vladivostok" | "Australia/Lord_Howe" | "Pacific/Bougainville" | "Antarctica/Casey" | "Pacific/Kosrae" | "Asia/Magadan" | "Pacific/Noumea" | "Pacific/Norfolk" | "Pacific/Pohnpei" | "Asia/Sakhalin" | "Pacific/Guadalcanal" | "Asia/Srednekolymsk" | "Pacific/Efate" | "Asia/Anadyr" | "Pacific/Fiji" | "Pacific/Tarawa" | "Pacific/Kwajalein" | "Pacific/Majuro" | "Pacific/Nauru" | "Pacific/Auckland" | "Asia/Kamchatka" | "Pacific/Funafuti" | "Pacific/Wake" | "Pacific/Wallis" | "Pacific/Chatham" | "Pacific/Apia" | "Pacific/Fakaofo" | "Pacific/Tongatapu" | "Pacific/Kiritimati")| undefined | null
				/** Address. */
				'address'?: SpruceSchema.AddressFieldValue| undefined | null
				
				'dateCreated'?: SpruceSchema.DateTimeFieldValue| undefined | null
				
				'dateDeleted'?: SpruceSchema.DateTimeFieldValue| undefined | null
				
				'organizationId'?: string| undefined | null
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
			                options: {choices: [{"value":"Pacific/Niue","label":"Niue Time"},{"value":"Pacific/Pago_Pago","label":"Samoa Standard Time"},{"value":"Pacific/Rarotonga","label":"Cook Islands Standard Time"},{"value":"Pacific/Honolulu","label":"Hawaii-Aleutian Standard Time"},{"value":"Pacific/Tahiti","label":"Tahiti Time"},{"value":"Pacific/Marquesas","label":"Marquesas Time"},{"value":"Pacific/Gambier","label":"Gambier Time"},{"value":"America/Adak","label":"Hawaii-Aleutian Time (Adak)"},{"value":"America/Anchorage","label":"Alaska Time - Anchorage"},{"value":"America/Juneau","label":"Alaska Time - Juneau"},{"value":"America/Metlakatla","label":"Alaska Time - Metlakatla"},{"value":"America/Nome","label":"Alaska Time - Nome"},{"value":"America/Sitka","label":"Alaska Time - Sitka"},{"value":"America/Yakutat","label":"Alaska Time - Yakutat"},{"value":"Pacific/Pitcairn","label":"Pitcairn Time"},{"value":"America/Hermosillo","label":"Mexican Pacific Standard Time"},{"value":"America/Dawson_Creek","label":"Mountain Standard Time - Dawson Creek"},{"value":"America/Fort_Nelson","label":"Mountain Standard Time - Fort Nelson"},{"value":"America/Phoenix","label":"Mountain Standard Time - Phoenix"},{"value":"America/Los_Angeles","label":"Pacific Time - Los Angeles"},{"value":"America/Tijuana","label":"Pacific Time - Tijuana"},{"value":"America/Vancouver","label":"Pacific Time - Vancouver"},{"value":"America/Dawson","label":"Yukon Time - Dawson"},{"value":"America/Whitehorse","label":"Yukon Time - Whitehorse"},{"value":"America/Belize","label":"Central Standard Time - Belize"},{"value":"America/Costa_Rica","label":"Central Standard Time - Costa Rica"},{"value":"America/El_Salvador","label":"Central Standard Time - El Salvador"},{"value":"America/Guatemala","label":"Central Standard Time - Guatemala"},{"value":"America/Managua","label":"Central Standard Time - Managua"},{"value":"America/Regina","label":"Central Standard Time - Regina"},{"value":"America/Swift_Current","label":"Central Standard Time - Swift Current"},{"value":"America/Tegucigalpa","label":"Central Standard Time - Tegucigalpa"},{"value":"Pacific/Easter","label":"Easter Island Time"},{"value":"Pacific/Galapagos","label":"Galapagos Time"},{"value":"America/Chihuahua","label":"Mexican Pacific Time - Chihuahua"},{"value":"America/Mazatlan","label":"Mexican Pacific Time - Mazatlan"},{"value":"America/Boise","label":"Mountain Time - Boise"},{"value":"America/Cambridge_Bay","label":"Mountain Time - Cambridge Bay"},{"value":"America/Denver","label":"Mountain Time - Denver"},{"value":"America/Edmonton","label":"Mountain Time - Edmonton"},{"value":"America/Inuvik","label":"Mountain Time - Inuvik"},{"value":"America/Ojinaga","label":"Mountain Time - Ojinaga"},{"value":"America/Yellowknife","label":"Mountain Time - Yellowknife"},{"value":"America/Eirunepe","label":"Acre Standard Time - Eirunepe"},{"value":"America/Rio_Branco","label":"Acre Standard Time - Rio Branco"},{"value":"America/Bahia_Banderas","label":"Central Time - Bahia Banderas"},{"value":"America/North_Dakota/Beulah","label":"Central Time - Beulah, North Dakota"},{"value":"America/North_Dakota/Center","label":"Central Time - Center, North Dakota"},{"value":"America/Chicago","label":"Central Time - Chicago"},{"value":"America/Indiana/Knox","label":"Central Time - Knox, Indiana"},{"value":"America/Matamoros","label":"Central Time - Matamoros"},{"value":"America/Menominee","label":"Central Time - Menominee"},{"value":"America/Merida","label":"Central Time - Merida"},{"value":"America/Mexico_City","label":"Central Time - Mexico City"},{"value":"America/Monterrey","label":"Central Time - Monterrey"},{"value":"America/North_Dakota/New_Salem","label":"Central Time - New Salem, North Dakota"},{"value":"America/Rainy_River","label":"Central Time - Rainy River"},{"value":"America/Rankin_Inlet","label":"Central Time - Rankin Inlet"},{"value":"America/Resolute","label":"Central Time - Resolute"},{"value":"America/Indiana/Tell_City","label":"Central Time - Tell City, Indiana"},{"value":"America/Winnipeg","label":"Central Time - Winnipeg"},{"value":"America/Bogota","label":"Colombia Standard Time"},{"value":"America/Cancun","label":"Eastern Standard Time - Cancun"},{"value":"America/Jamaica","label":"Eastern Standard Time - Jamaica"},{"value":"America/Panama","label":"Eastern Standard Time - Panama"},{"value":"America/Guayaquil","label":"Ecuador Time"},{"value":"America/Lima","label":"Peru Standard Time"},{"value":"America/Boa_Vista","label":"Amazon Standard Time - Boa Vista"},{"value":"America/Campo_Grande","label":"Amazon Standard Time - Campo Grande"},{"value":"America/Cuiaba","label":"Amazon Standard Time - Cuiaba"},{"value":"America/Manaus","label":"Amazon Standard Time - Manaus"},{"value":"America/Porto_Velho","label":"Amazon Standard Time - Porto Velho"},{"value":"America/Barbados","label":"Atlantic Standard Time - Barbados"},{"value":"America/Martinique","label":"Atlantic Standard Time - Martinique"},{"value":"America/Puerto_Rico","label":"Atlantic Standard Time - Puerto Rico"},{"value":"America/Santo_Domingo","label":"Atlantic Standard Time - Santo Domingo"},{"value":"America/La_Paz","label":"Bolivia Time"},{"value":"America/Santiago","label":"Chile Time"},{"value":"America/Havana","label":"Cuba Time"},{"value":"America/Detroit","label":"Eastern Time - Detroit"},{"value":"America/Grand_Turk","label":"Eastern Time - Grand Turk"},{"value":"America/Indiana/Indianapolis","label":"Eastern Time - Indianapolis"},{"value":"America/Iqaluit","label":"Eastern Time - Iqaluit"},{"value":"America/Kentucky/Louisville","label":"Eastern Time - Louisville"},{"value":"America/Indiana/Marengo","label":"Eastern Time - Marengo, Indiana"},{"value":"America/Kentucky/Monticello","label":"Eastern Time - Monticello, Kentucky"},{"value":"America/New_York","label":"Eastern Time - New York"},{"value":"America/Nipigon","label":"Eastern Time - Nipigon"},{"value":"America/Pangnirtung","label":"Eastern Time - Pangnirtung"},{"value":"America/Indiana/Petersburg","label":"Eastern Time - Petersburg, Indiana"},{"value":"America/Port-au-Prince","label":"Eastern Time - Port-au-Prince"},{"value":"America/Thunder_Bay","label":"Eastern Time - Thunder Bay"},{"value":"America/Toronto","label":"Eastern Time - Toronto"},{"value":"America/Indiana/Vevay","label":"Eastern Time - Vevay, Indiana"},{"value":"America/Indiana/Vincennes","label":"Eastern Time - Vincennes, Indiana"},{"value":"America/Indiana/Winamac","label":"Eastern Time - Winamac, Indiana"},{"value":"America/Guyana","label":"Guyana Time"},{"value":"America/Asuncion","label":"Paraguay Time"},{"value":"America/Caracas","label":"Venezuela Time"},{"value":"America/Argentina/Buenos_Aires","label":"Argentina Standard Time - Buenos Aires"},{"value":"America/Argentina/Catamarca","label":"Argentina Standard Time - Catamarca"},{"value":"America/Argentina/Cordoba","label":"Argentina Standard Time - Cordoba"},{"value":"America/Argentina/Jujuy","label":"Argentina Standard Time - Jujuy"},{"value":"America/Argentina/La_Rioja","label":"Argentina Standard Time - La Rioja"},{"value":"America/Argentina/Mendoza","label":"Argentina Standard Time - Mendoza"},{"value":"America/Argentina/Rio_Gallegos","label":"Argentina Standard Time - Rio Gallegos"},{"value":"America/Argentina/Salta","label":"Argentina Standard Time - Salta"},{"value":"America/Argentina/San_Juan","label":"Argentina Standard Time - San Juan"},{"value":"America/Argentina/San_Luis","label":"Argentina Standard Time - San Luis"},{"value":"America/Argentina/Tucuman","label":"Argentina Standard Time - Tucuman"},{"value":"America/Argentina/Ushuaia","label":"Argentina Standard Time - Ushuaia"},{"value":"Atlantic/Bermuda","label":"Atlantic Time - Bermuda"},{"value":"America/Glace_Bay","label":"Atlantic Time - Glace Bay"},{"value":"America/Goose_Bay","label":"Atlantic Time - Goose Bay"},{"value":"America/Halifax","label":"Atlantic Time - Halifax"},{"value":"America/Moncton","label":"Atlantic Time - Moncton"},{"value":"America/Thule","label":"Atlantic Time - Thule"},{"value":"America/Araguaina","label":"Brasilia Standard Time - Araguaina"},{"value":"America/Bahia","label":"Brasilia Standard Time - Bahia"},{"value":"America/Belem","label":"Brasilia Standard Time - Belem"},{"value":"America/Fortaleza","label":"Brasilia Standard Time - Fortaleza"},{"value":"America/Maceio","label":"Brasilia Standard Time - Maceio"},{"value":"America/Recife","label":"Brasilia Standard Time - Recife"},{"value":"America/Santarem","label":"Brasilia Standard Time - Santarem"},{"value":"America/Sao_Paulo","label":"Brasilia Standard Time - Sao Paulo"},{"value":"Atlantic/Stanley","label":"Falkland Islands Standard Time"},{"value":"America/Cayenne","label":"French Guiana Time"},{"value":"Antarctica/Palmer","label":"Palmer Time"},{"value":"America/Punta_Arenas","label":"Punta Arenas Time"},{"value":"Antarctica/Rothera","label":"Rothera Time"},{"value":"America/Paramaribo","label":"Suriname Time"},{"value":"America/Montevideo","label":"Uruguay Standard Time"},{"value":"America/St_Johns","label":"Newfoundland Time"},{"value":"America/Noronha","label":"Fernando de Noronha Standard Time"},{"value":"Atlantic/South_Georgia","label":"South Georgia Time"},{"value":"America/Miquelon","label":"St. Pierre & Miquelon Time"},{"value":"America/Nuuk","label":"West Greenland Time"},{"value":"Atlantic/Cape_Verde","label":"Cape Verde Standard Time"},{"value":"Atlantic/Azores","label":"Azores Time"},{"value":"UTC","label":"Coordinated Universal Time"},{"value":"America/Scoresbysund","label":"East Greenland Time"},{"value":"Etc/GMT","label":"Greenwich Mean Time"},{"value":"Africa/Abidjan","label":"Greenwich Mean Time - Abidjan"},{"value":"Africa/Bissau","label":"Greenwich Mean Time - Bissau"},{"value":"America/Danmarkshavn","label":"Greenwich Mean Time - Danmarkshavn"},{"value":"Africa/Monrovia","label":"Greenwich Mean Time - Monrovia"},{"value":"Atlantic/Reykjavik","label":"Greenwich Mean Time - Reykjavik"},{"value":"Africa/Sao_Tome","label":"Greenwich Mean Time - São Tomé"},{"value":"Africa/Algiers","label":"Central European Standard Time - Algiers"},{"value":"Africa/Tunis","label":"Central European Standard Time - Tunis"},{"value":"Europe/Dublin","label":"Ireland Time"},{"value":"Africa/Casablanca","label":"Morocco Time"},{"value":"Europe/London","label":"United Kingdom Time"},{"value":"Africa/Lagos","label":"West Africa Standard Time - Lagos"},{"value":"Africa/Ndjamena","label":"West Africa Standard Time - Ndjamena"},{"value":"Atlantic/Canary","label":"Western European Time - Canary"},{"value":"Atlantic/Faroe","label":"Western European Time - Faroe"},{"value":"Europe/Lisbon","label":"Western European Time - Lisbon"},{"value":"Atlantic/Madeira","label":"Western European Time - Madeira"},{"value":"Africa/El_Aaiun","label":"Western Sahara Time"},{"value":"Africa/Juba","label":"Central Africa Time - Juba"},{"value":"Africa/Khartoum","label":"Central Africa Time - Khartoum"},{"value":"Africa/Maputo","label":"Central Africa Time - Maputo"},{"value":"Africa/Windhoek","label":"Central Africa Time - Windhoek"},{"value":"Europe/Amsterdam","label":"Central European Time - Amsterdam"},{"value":"Europe/Andorra","label":"Central European Time - Andorra"},{"value":"Europe/Belgrade","label":"Central European Time - Belgrade"},{"value":"Europe/Berlin","label":"Central European Time - Berlin"},{"value":"Europe/Brussels","label":"Central European Time - Brussels"},{"value":"Europe/Budapest","label":"Central European Time - Budapest"},{"value":"Africa/Ceuta","label":"Central European Time - Ceuta"},{"value":"Europe/Copenhagen","label":"Central European Time - Copenhagen"},{"value":"Europe/Gibraltar","label":"Central European Time - Gibraltar"},{"value":"Europe/Luxembourg","label":"Central European Time - Luxembourg"},{"value":"Europe/Madrid","label":"Central European Time - Madrid"},{"value":"Europe/Malta","label":"Central European Time - Malta"},{"value":"Europe/Monaco","label":"Central European Time - Monaco"},{"value":"Europe/Oslo","label":"Central European Time - Oslo"},{"value":"Europe/Paris","label":"Central European Time - Paris"},{"value":"Europe/Prague","label":"Central European Time - Prague"},{"value":"Europe/Rome","label":"Central European Time - Rome"},{"value":"Europe/Stockholm","label":"Central European Time - Stockholm"},{"value":"Europe/Tirane","label":"Central European Time - Tirane"},{"value":"Europe/Vienna","label":"Central European Time - Vienna"},{"value":"Europe/Warsaw","label":"Central European Time - Warsaw"},{"value":"Europe/Zurich","label":"Central European Time - Zurich"},{"value":"Africa/Cairo","label":"Eastern European Standard Time - Cairo"},{"value":"Europe/Kaliningrad","label":"Eastern European Standard Time - Kaliningrad"},{"value":"Africa/Tripoli","label":"Eastern European Standard Time - Tripoli"},{"value":"Africa/Johannesburg","label":"South Africa Standard Time"},{"value":"Antarctica/Troll","label":"Troll Time"},{"value":"Asia/Baghdad","label":"Arabian Standard Time - Baghdad"},{"value":"Asia/Qatar","label":"Arabian Standard Time - Qatar"},{"value":"Asia/Riyadh","label":"Arabian Standard Time - Riyadh"},{"value":"Africa/Nairobi","label":"East Africa Time"},{"value":"Asia/Amman","label":"Eastern European Time - Amman"},{"value":"Europe/Athens","label":"Eastern European Time - Athens"},{"value":"Asia/Beirut","label":"Eastern European Time - Beirut"},{"value":"Europe/Bucharest","label":"Eastern European Time - Bucharest"},{"value":"Europe/Chisinau","label":"Eastern European Time - Chisinau"},{"value":"Asia/Damascus","label":"Eastern European Time - Damascus"},{"value":"Asia/Gaza","label":"Eastern European Time - Gaza"},{"value":"Asia/Hebron","label":"Eastern European Time - Hebron"},{"value":"Europe/Helsinki","label":"Eastern European Time - Helsinki"},{"value":"Europe/Kiev","label":"Eastern European Time - Kyiv"},{"value":"Asia/Nicosia","label":"Eastern European Time - Nicosia"},{"value":"Europe/Riga","label":"Eastern European Time - Riga"},{"value":"Europe/Sofia","label":"Eastern European Time - Sofia"},{"value":"Europe/Tallinn","label":"Eastern European Time - Tallinn"},{"value":"Europe/Uzhgorod","label":"Eastern European Time - Uzhhorod"},{"value":"Europe/Vilnius","label":"Eastern European Time - Vilnius"},{"value":"Europe/Zaporozhye","label":"Eastern European Time - Zaporozhye"},{"value":"Asia/Famagusta","label":"Famagusta Time"},{"value":"Asia/Jerusalem","label":"Israel Time"},{"value":"Europe/Kirov","label":"Kirov Time"},{"value":"Europe/Minsk","label":"Moscow Standard Time - Minsk"},{"value":"Europe/Moscow","label":"Moscow Standard Time - Moscow"},{"value":"Europe/Simferopol","label":"Moscow Standard Time - Simferopol"},{"value":"Europe/Istanbul","label":"Turkey Time"},{"value":"Europe/Volgograd","label":"Volgograd Standard Time"},{"value":"Asia/Yerevan","label":"Armenia Standard Time"},{"value":"Europe/Astrakhan","label":"Astrakhan Time"},{"value":"Asia/Baku","label":"Azerbaijan Standard Time"},{"value":"Asia/Tbilisi","label":"Georgia Standard Time"},{"value":"Asia/Dubai","label":"Gulf Standard Time"},{"value":"Indian/Mauritius","label":"Mauritius Standard Time"},{"value":"Indian/Reunion","label":"Réunion Time"},{"value":"Europe/Samara","label":"Samara Standard Time"},{"value":"Europe/Saratov","label":"Saratov Time"},{"value":"Indian/Mahe","label":"Seychelles Time"},{"value":"Europe/Ulyanovsk","label":"Ulyanovsk Time"},{"value":"Asia/Kabul","label":"Afghanistan Time"},{"value":"Asia/Tehran","label":"Iran Time"},{"value":"Indian/Kerguelen","label":"French Southern & Antarctic Time"},{"value":"Indian/Maldives","label":"Maldives Time"},{"value":"Antarctica/Mawson","label":"Mawson Time"},{"value":"Asia/Karachi","label":"Pakistan Standard Time"},{"value":"Asia/Dushanbe","label":"Tajikistan Time"},{"value":"Asia/Ashgabat","label":"Turkmenistan Standard Time"},{"value":"Asia/Samarkand","label":"Uzbekistan Standard Time - Samarkand"},{"value":"Asia/Tashkent","label":"Uzbekistan Standard Time - Tashkent"},{"value":"Asia/Aqtau","label":"West Kazakhstan Time - Aqtau"},{"value":"Asia/Aqtobe","label":"West Kazakhstan Time - Aqtobe"},{"value":"Asia/Atyrau","label":"West Kazakhstan Time - Atyrau"},{"value":"Asia/Oral","label":"West Kazakhstan Time - Oral"},{"value":"Asia/Qyzylorda","label":"West Kazakhstan Time - Qyzylorda"},{"value":"Asia/Yekaterinburg","label":"Yekaterinburg Standard Time"},{"value":"Asia/Colombo","label":"India Standard Time - Colombo"},{"value":"Asia/Kolkata","label":"India Standard Time - Kolkata"},{"value":"Asia/Kathmandu","label":"Nepal Time"},{"value":"Asia/Dhaka","label":"Bangladesh Standard Time"},{"value":"Asia/Thimphu","label":"Bhutan Time"},{"value":"Asia/Almaty","label":"East Kazakhstan Time - Almaty"},{"value":"Asia/Qostanay","label":"East Kazakhstan Time - Kostanay"},{"value":"Indian/Chagos","label":"Indian Ocean Time"},{"value":"Asia/Bishkek","label":"Kyrgyzstan Time"},{"value":"Asia/Omsk","label":"Omsk Standard Time"},{"value":"Asia/Urumqi","label":"Urumqi Time"},{"value":"Antarctica/Vostok","label":"Vostok Time"},{"value":"Indian/Cocos","label":"Cocos Islands Time"},{"value":"Asia/Yangon","label":"Myanmar Time"},{"value":"Asia/Barnaul","label":"Barnaul Time"},{"value":"Indian/Christmas","label":"Christmas Island Time"},{"value":"Antarctica/Davis","label":"Davis Time"},{"value":"Asia/Hovd","label":"Hovd Standard Time"},{"value":"Asia/Bangkok","label":"Indochina Time - Bangkok"},{"value":"Asia/Ho_Chi_Minh","label":"Indochina Time - Ho Chi Minh City"},{"value":"Asia/Krasnoyarsk","label":"Krasnoyarsk Standard Time - Krasnoyarsk"},{"value":"Asia/Novokuznetsk","label":"Krasnoyarsk Standard Time - Novokuznetsk"},{"value":"Asia/Novosibirsk","label":"Novosibirsk Standard Time"},{"value":"Asia/Tomsk","label":"Tomsk Time"},{"value":"Asia/Jakarta","label":"Western Indonesia Time - Jakarta"},{"value":"Asia/Pontianak","label":"Western Indonesia Time - Pontianak"},{"value":"Australia/Perth","label":"Australian Western Standard Time"},{"value":"Asia/Brunei","label":"Brunei Darussalam Time"},{"value":"Asia/Makassar","label":"Central Indonesia Time"},{"value":"Asia/Macau","label":"China Standard Time - Macao"},{"value":"Asia/Shanghai","label":"China Standard Time - Shanghai"},{"value":"Asia/Hong_Kong","label":"Hong Kong Standard Time"},{"value":"Asia/Irkutsk","label":"Irkutsk Standard Time"},{"value":"Asia/Kuala_Lumpur","label":"Malaysia Time - Kuala Lumpur"},{"value":"Asia/Kuching","label":"Malaysia Time - Kuching"},{"value":"Asia/Manila","label":"Philippine Standard Time"},{"value":"Asia/Singapore","label":"Singapore Standard Time"},{"value":"Asia/Taipei","label":"Taipei Standard Time"},{"value":"Asia/Choibalsan","label":"Ulaanbaatar Standard Time - Choibalsan"},{"value":"Asia/Ulaanbaatar","label":"Ulaanbaatar Standard Time - Ulaanbaatar"},{"value":"Australia/Eucla","label":"Australian Central Western Standard Time"},{"value":"Asia/Dili","label":"East Timor Time"},{"value":"Asia/Jayapura","label":"Eastern Indonesia Time"},{"value":"Asia/Tokyo","label":"Japan Standard Time"},{"value":"Asia/Pyongyang","label":"Korean Standard Time - Pyongyang"},{"value":"Asia/Seoul","label":"Korean Standard Time - Seoul"},{"value":"Pacific/Palau","label":"Palau Time"},{"value":"Asia/Chita","label":"Yakutsk Standard Time - Chita"},{"value":"Asia/Khandyga","label":"Yakutsk Standard Time - Khandyga"},{"value":"Asia/Yakutsk","label":"Yakutsk Standard Time - Yakutsk"},{"value":"Australia/Darwin","label":"Australian Central Standard Time"},{"value":"Australia/Adelaide","label":"Central Australia Time - Adelaide"},{"value":"Australia/Broken_Hill","label":"Central Australia Time - Broken Hill"},{"value":"Australia/Brisbane","label":"Australian Eastern Standard Time - Brisbane"},{"value":"Australia/Lindeman","label":"Australian Eastern Standard Time - Lindeman"},{"value":"Pacific/Guam","label":"Chamorro Standard Time"},{"value":"Pacific/Chuuk","label":"Chuuk Time"},{"value":"Australia/Hobart","label":"Eastern Australia Time - Hobart"},{"value":"Antarctica/Macquarie","label":"Eastern Australia Time - Macquarie"},{"value":"Australia/Melbourne","label":"Eastern Australia Time - Melbourne"},{"value":"Australia/Sydney","label":"Eastern Australia Time - Sydney"},{"value":"Pacific/Port_Moresby","label":"Papua New Guinea Time"},{"value":"Asia/Ust-Nera","label":"Vladivostok Standard Time - Ust-Nera"},{"value":"Asia/Vladivostok","label":"Vladivostok Standard Time - Vladivostok"},{"value":"Australia/Lord_Howe","label":"Lord Howe Time"},{"value":"Pacific/Bougainville","label":"Bougainville Time"},{"value":"Antarctica/Casey","label":"Casey Time"},{"value":"Pacific/Kosrae","label":"Kosrae Time"},{"value":"Asia/Magadan","label":"Magadan Standard Time"},{"value":"Pacific/Noumea","label":"New Caledonia Standard Time"},{"value":"Pacific/Norfolk","label":"Norfolk Island Time"},{"value":"Pacific/Pohnpei","label":"Ponape Time"},{"value":"Asia/Sakhalin","label":"Sakhalin Standard Time"},{"value":"Pacific/Guadalcanal","label":"Solomon Islands Time"},{"value":"Asia/Srednekolymsk","label":"Srednekolymsk Time"},{"value":"Pacific/Efate","label":"Vanuatu Standard Time"},{"value":"Asia/Anadyr","label":"Anadyr Standard Time"},{"value":"Pacific/Fiji","label":"Fiji Time"},{"value":"Pacific/Tarawa","label":"Gilbert Islands Time"},{"value":"Pacific/Kwajalein","label":"Marshall Islands Time - Kwajalein"},{"value":"Pacific/Majuro","label":"Marshall Islands Time - Majuro"},{"value":"Pacific/Nauru","label":"Nauru Time"},{"value":"Pacific/Auckland","label":"New Zealand Time"},{"value":"Asia/Kamchatka","label":"Petropavlovsk-Kamchatski Standard Time"},{"value":"Pacific/Funafuti","label":"Tuvalu Time"},{"value":"Pacific/Wake","label":"Wake Island Time"},{"value":"Pacific/Wallis","label":"Wallis & Futuna Time"},{"value":"Pacific/Chatham","label":"Chatham Time"},{"value":"Pacific/Apia","label":"Apia Standard Time"},{"value":"Pacific/Fakaofo","label":"Tokelau Time"},{"value":"Pacific/Tongatapu","label":"Tonga Standard Time"},{"value":"Pacific/Kiritimati","label":"Line Islands Time"}],}
			            },
			            /** Address. */
			            'address': {
			                label: 'Address',
			                type: 'address',
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
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target': SpruceSchemas.Mercury.v2020_12_25.UpdateLocationEmitTarget
				
				'payload'?: SpruceSchemas.Mercury.v2020_12_25.UpdateLocationEmitPayload| undefined | null
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
				'name'?: string| undefined | null
				/** Address. */
				'address'?: SpruceSchema.AddressFieldValue| undefined | null
				/** Public. Is this organization viewable by guests? */
				'isPublic'?: boolean| undefined | null
				
				'dateCreated'?: SpruceSchema.DateTimeFieldValue| undefined | null
				
				'dateDeleted'?: SpruceSchema.DateTimeFieldValue| undefined | null
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
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target': SpruceSchemas.Mercury.v2020_12_25.UpdateOrgEmitTarget
				
				'payload'?: SpruceSchemas.Mercury.v2020_12_25.UpdateOrgEmitPayload| undefined | null
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
				'name'?: string| undefined | null
				/** Address. */
				'address'?: SpruceSchema.AddressFieldValue| undefined | null
				/** Slug. */
				'slug'?: string| undefined | null
				/** Public. Is this organization viewable by guests? */
				'isPublic'?: boolean| undefined | null
				
				'dateCreated'?: SpruceSchema.DateTimeFieldValue| undefined | null
				
				'dateDeleted'?: SpruceSchema.DateTimeFieldValue| undefined | null
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
			
				
				'personId'?: string| undefined | null
				
				'organizationId'?: string| undefined | null
				
				'locationId'?: string| undefined | null
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

		
		interface UpdatePersonEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target'?: SpruceSchemas.Mercury.v2020_12_25.UpdatePersonEmitTarget| undefined | null
				
				'payload'?: SpruceSchemas.Mercury.v2020_12_25.UpdatePersonEmitPayload| undefined | null
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
				'firstName'?: string| undefined | null
				/** Last name. */
				'lastName'?: string| undefined | null
				/** Timezone. */
				'timezone'?: ("Pacific/Niue" | "Pacific/Pago_Pago" | "Pacific/Rarotonga" | "Pacific/Honolulu" | "Pacific/Tahiti" | "Pacific/Marquesas" | "Pacific/Gambier" | "America/Adak" | "America/Anchorage" | "America/Juneau" | "America/Metlakatla" | "America/Nome" | "America/Sitka" | "America/Yakutat" | "Pacific/Pitcairn" | "America/Hermosillo" | "America/Dawson_Creek" | "America/Fort_Nelson" | "America/Phoenix" | "America/Los_Angeles" | "America/Tijuana" | "America/Vancouver" | "America/Dawson" | "America/Whitehorse" | "America/Belize" | "America/Costa_Rica" | "America/El_Salvador" | "America/Guatemala" | "America/Managua" | "America/Regina" | "America/Swift_Current" | "America/Tegucigalpa" | "Pacific/Easter" | "Pacific/Galapagos" | "America/Chihuahua" | "America/Mazatlan" | "America/Boise" | "America/Cambridge_Bay" | "America/Denver" | "America/Edmonton" | "America/Inuvik" | "America/Ojinaga" | "America/Yellowknife" | "America/Eirunepe" | "America/Rio_Branco" | "America/Bahia_Banderas" | "America/North_Dakota/Beulah" | "America/North_Dakota/Center" | "America/Chicago" | "America/Indiana/Knox" | "America/Matamoros" | "America/Menominee" | "America/Merida" | "America/Mexico_City" | "America/Monterrey" | "America/North_Dakota/New_Salem" | "America/Rainy_River" | "America/Rankin_Inlet" | "America/Resolute" | "America/Indiana/Tell_City" | "America/Winnipeg" | "America/Bogota" | "America/Cancun" | "America/Jamaica" | "America/Panama" | "America/Guayaquil" | "America/Lima" | "America/Boa_Vista" | "America/Campo_Grande" | "America/Cuiaba" | "America/Manaus" | "America/Porto_Velho" | "America/Barbados" | "America/Martinique" | "America/Puerto_Rico" | "America/Santo_Domingo" | "America/La_Paz" | "America/Santiago" | "America/Havana" | "America/Detroit" | "America/Grand_Turk" | "America/Indiana/Indianapolis" | "America/Iqaluit" | "America/Kentucky/Louisville" | "America/Indiana/Marengo" | "America/Kentucky/Monticello" | "America/New_York" | "America/Nipigon" | "America/Pangnirtung" | "America/Indiana/Petersburg" | "America/Port-au-Prince" | "America/Thunder_Bay" | "America/Toronto" | "America/Indiana/Vevay" | "America/Indiana/Vincennes" | "America/Indiana/Winamac" | "America/Guyana" | "America/Asuncion" | "America/Caracas" | "America/Argentina/Buenos_Aires" | "America/Argentina/Catamarca" | "America/Argentina/Cordoba" | "America/Argentina/Jujuy" | "America/Argentina/La_Rioja" | "America/Argentina/Mendoza" | "America/Argentina/Rio_Gallegos" | "America/Argentina/Salta" | "America/Argentina/San_Juan" | "America/Argentina/San_Luis" | "America/Argentina/Tucuman" | "America/Argentina/Ushuaia" | "Atlantic/Bermuda" | "America/Glace_Bay" | "America/Goose_Bay" | "America/Halifax" | "America/Moncton" | "America/Thule" | "America/Araguaina" | "America/Bahia" | "America/Belem" | "America/Fortaleza" | "America/Maceio" | "America/Recife" | "America/Santarem" | "America/Sao_Paulo" | "Atlantic/Stanley" | "America/Cayenne" | "Antarctica/Palmer" | "America/Punta_Arenas" | "Antarctica/Rothera" | "America/Paramaribo" | "America/Montevideo" | "America/St_Johns" | "America/Noronha" | "Atlantic/South_Georgia" | "America/Miquelon" | "America/Nuuk" | "Atlantic/Cape_Verde" | "Atlantic/Azores" | "UTC" | "America/Scoresbysund" | "Etc/GMT" | "Africa/Abidjan" | "Africa/Bissau" | "America/Danmarkshavn" | "Africa/Monrovia" | "Atlantic/Reykjavik" | "Africa/Sao_Tome" | "Africa/Algiers" | "Africa/Tunis" | "Europe/Dublin" | "Africa/Casablanca" | "Europe/London" | "Africa/Lagos" | "Africa/Ndjamena" | "Atlantic/Canary" | "Atlantic/Faroe" | "Europe/Lisbon" | "Atlantic/Madeira" | "Africa/El_Aaiun" | "Africa/Juba" | "Africa/Khartoum" | "Africa/Maputo" | "Africa/Windhoek" | "Europe/Amsterdam" | "Europe/Andorra" | "Europe/Belgrade" | "Europe/Berlin" | "Europe/Brussels" | "Europe/Budapest" | "Africa/Ceuta" | "Europe/Copenhagen" | "Europe/Gibraltar" | "Europe/Luxembourg" | "Europe/Madrid" | "Europe/Malta" | "Europe/Monaco" | "Europe/Oslo" | "Europe/Paris" | "Europe/Prague" | "Europe/Rome" | "Europe/Stockholm" | "Europe/Tirane" | "Europe/Vienna" | "Europe/Warsaw" | "Europe/Zurich" | "Africa/Cairo" | "Europe/Kaliningrad" | "Africa/Tripoli" | "Africa/Johannesburg" | "Antarctica/Troll" | "Asia/Baghdad" | "Asia/Qatar" | "Asia/Riyadh" | "Africa/Nairobi" | "Asia/Amman" | "Europe/Athens" | "Asia/Beirut" | "Europe/Bucharest" | "Europe/Chisinau" | "Asia/Damascus" | "Asia/Gaza" | "Asia/Hebron" | "Europe/Helsinki" | "Europe/Kiev" | "Asia/Nicosia" | "Europe/Riga" | "Europe/Sofia" | "Europe/Tallinn" | "Europe/Uzhgorod" | "Europe/Vilnius" | "Europe/Zaporozhye" | "Asia/Famagusta" | "Asia/Jerusalem" | "Europe/Kirov" | "Europe/Minsk" | "Europe/Moscow" | "Europe/Simferopol" | "Europe/Istanbul" | "Europe/Volgograd" | "Asia/Yerevan" | "Europe/Astrakhan" | "Asia/Baku" | "Asia/Tbilisi" | "Asia/Dubai" | "Indian/Mauritius" | "Indian/Reunion" | "Europe/Samara" | "Europe/Saratov" | "Indian/Mahe" | "Europe/Ulyanovsk" | "Asia/Kabul" | "Asia/Tehran" | "Indian/Kerguelen" | "Indian/Maldives" | "Antarctica/Mawson" | "Asia/Karachi" | "Asia/Dushanbe" | "Asia/Ashgabat" | "Asia/Samarkand" | "Asia/Tashkent" | "Asia/Aqtau" | "Asia/Aqtobe" | "Asia/Atyrau" | "Asia/Oral" | "Asia/Qyzylorda" | "Asia/Yekaterinburg" | "Asia/Colombo" | "Asia/Kolkata" | "Asia/Kathmandu" | "Asia/Dhaka" | "Asia/Thimphu" | "Asia/Almaty" | "Asia/Qostanay" | "Indian/Chagos" | "Asia/Bishkek" | "Asia/Omsk" | "Asia/Urumqi" | "Antarctica/Vostok" | "Indian/Cocos" | "Asia/Yangon" | "Asia/Barnaul" | "Indian/Christmas" | "Antarctica/Davis" | "Asia/Hovd" | "Asia/Bangkok" | "Asia/Ho_Chi_Minh" | "Asia/Krasnoyarsk" | "Asia/Novokuznetsk" | "Asia/Novosibirsk" | "Asia/Tomsk" | "Asia/Jakarta" | "Asia/Pontianak" | "Australia/Perth" | "Asia/Brunei" | "Asia/Makassar" | "Asia/Macau" | "Asia/Shanghai" | "Asia/Hong_Kong" | "Asia/Irkutsk" | "Asia/Kuala_Lumpur" | "Asia/Kuching" | "Asia/Manila" | "Asia/Singapore" | "Asia/Taipei" | "Asia/Choibalsan" | "Asia/Ulaanbaatar" | "Australia/Eucla" | "Asia/Dili" | "Asia/Jayapura" | "Asia/Tokyo" | "Asia/Pyongyang" | "Asia/Seoul" | "Pacific/Palau" | "Asia/Chita" | "Asia/Khandyga" | "Asia/Yakutsk" | "Australia/Darwin" | "Australia/Adelaide" | "Australia/Broken_Hill" | "Australia/Brisbane" | "Australia/Lindeman" | "Pacific/Guam" | "Pacific/Chuuk" | "Australia/Hobart" | "Antarctica/Macquarie" | "Australia/Melbourne" | "Australia/Sydney" | "Pacific/Port_Moresby" | "Asia/Ust-Nera" | "Asia/Vladivostok" | "Australia/Lord_Howe" | "Pacific/Bougainville" | "Antarctica/Casey" | "Pacific/Kosrae" | "Asia/Magadan" | "Pacific/Noumea" | "Pacific/Norfolk" | "Pacific/Pohnpei" | "Asia/Sakhalin" | "Pacific/Guadalcanal" | "Asia/Srednekolymsk" | "Pacific/Efate" | "Asia/Anadyr" | "Pacific/Fiji" | "Pacific/Tarawa" | "Pacific/Kwajalein" | "Pacific/Majuro" | "Pacific/Nauru" | "Pacific/Auckland" | "Asia/Kamchatka" | "Pacific/Funafuti" | "Pacific/Wake" | "Pacific/Wallis" | "Pacific/Chatham" | "Pacific/Apia" | "Pacific/Fakaofo" | "Pacific/Tongatapu" | "Pacific/Kiritimati")| undefined | null
				/** Avatar src. */
				'avatar'?: SpruceSchema.ImageFieldValue| undefined | null
				/** Phone. A number that can be texted */
				'phone'?: string| undefined | null
				
				'password'?: string| undefined | null
				
				'securityQuestions'?: SpruceSchemas.Mercury.v2020_12_25.SecurityQuestion[]| undefined | null
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
			                options: {choices: [{"value":"Pacific/Niue","label":"Niue Time"},{"value":"Pacific/Pago_Pago","label":"Samoa Standard Time"},{"value":"Pacific/Rarotonga","label":"Cook Islands Standard Time"},{"value":"Pacific/Honolulu","label":"Hawaii-Aleutian Standard Time"},{"value":"Pacific/Tahiti","label":"Tahiti Time"},{"value":"Pacific/Marquesas","label":"Marquesas Time"},{"value":"Pacific/Gambier","label":"Gambier Time"},{"value":"America/Adak","label":"Hawaii-Aleutian Time (Adak)"},{"value":"America/Anchorage","label":"Alaska Time - Anchorage"},{"value":"America/Juneau","label":"Alaska Time - Juneau"},{"value":"America/Metlakatla","label":"Alaska Time - Metlakatla"},{"value":"America/Nome","label":"Alaska Time - Nome"},{"value":"America/Sitka","label":"Alaska Time - Sitka"},{"value":"America/Yakutat","label":"Alaska Time - Yakutat"},{"value":"Pacific/Pitcairn","label":"Pitcairn Time"},{"value":"America/Hermosillo","label":"Mexican Pacific Standard Time"},{"value":"America/Dawson_Creek","label":"Mountain Standard Time - Dawson Creek"},{"value":"America/Fort_Nelson","label":"Mountain Standard Time - Fort Nelson"},{"value":"America/Phoenix","label":"Mountain Standard Time - Phoenix"},{"value":"America/Los_Angeles","label":"Pacific Time - Los Angeles"},{"value":"America/Tijuana","label":"Pacific Time - Tijuana"},{"value":"America/Vancouver","label":"Pacific Time - Vancouver"},{"value":"America/Dawson","label":"Yukon Time - Dawson"},{"value":"America/Whitehorse","label":"Yukon Time - Whitehorse"},{"value":"America/Belize","label":"Central Standard Time - Belize"},{"value":"America/Costa_Rica","label":"Central Standard Time - Costa Rica"},{"value":"America/El_Salvador","label":"Central Standard Time - El Salvador"},{"value":"America/Guatemala","label":"Central Standard Time - Guatemala"},{"value":"America/Managua","label":"Central Standard Time - Managua"},{"value":"America/Regina","label":"Central Standard Time - Regina"},{"value":"America/Swift_Current","label":"Central Standard Time - Swift Current"},{"value":"America/Tegucigalpa","label":"Central Standard Time - Tegucigalpa"},{"value":"Pacific/Easter","label":"Easter Island Time"},{"value":"Pacific/Galapagos","label":"Galapagos Time"},{"value":"America/Chihuahua","label":"Mexican Pacific Time - Chihuahua"},{"value":"America/Mazatlan","label":"Mexican Pacific Time - Mazatlan"},{"value":"America/Boise","label":"Mountain Time - Boise"},{"value":"America/Cambridge_Bay","label":"Mountain Time - Cambridge Bay"},{"value":"America/Denver","label":"Mountain Time - Denver"},{"value":"America/Edmonton","label":"Mountain Time - Edmonton"},{"value":"America/Inuvik","label":"Mountain Time - Inuvik"},{"value":"America/Ojinaga","label":"Mountain Time - Ojinaga"},{"value":"America/Yellowknife","label":"Mountain Time - Yellowknife"},{"value":"America/Eirunepe","label":"Acre Standard Time - Eirunepe"},{"value":"America/Rio_Branco","label":"Acre Standard Time - Rio Branco"},{"value":"America/Bahia_Banderas","label":"Central Time - Bahia Banderas"},{"value":"America/North_Dakota/Beulah","label":"Central Time - Beulah, North Dakota"},{"value":"America/North_Dakota/Center","label":"Central Time - Center, North Dakota"},{"value":"America/Chicago","label":"Central Time - Chicago"},{"value":"America/Indiana/Knox","label":"Central Time - Knox, Indiana"},{"value":"America/Matamoros","label":"Central Time - Matamoros"},{"value":"America/Menominee","label":"Central Time - Menominee"},{"value":"America/Merida","label":"Central Time - Merida"},{"value":"America/Mexico_City","label":"Central Time - Mexico City"},{"value":"America/Monterrey","label":"Central Time - Monterrey"},{"value":"America/North_Dakota/New_Salem","label":"Central Time - New Salem, North Dakota"},{"value":"America/Rainy_River","label":"Central Time - Rainy River"},{"value":"America/Rankin_Inlet","label":"Central Time - Rankin Inlet"},{"value":"America/Resolute","label":"Central Time - Resolute"},{"value":"America/Indiana/Tell_City","label":"Central Time - Tell City, Indiana"},{"value":"America/Winnipeg","label":"Central Time - Winnipeg"},{"value":"America/Bogota","label":"Colombia Standard Time"},{"value":"America/Cancun","label":"Eastern Standard Time - Cancun"},{"value":"America/Jamaica","label":"Eastern Standard Time - Jamaica"},{"value":"America/Panama","label":"Eastern Standard Time - Panama"},{"value":"America/Guayaquil","label":"Ecuador Time"},{"value":"America/Lima","label":"Peru Standard Time"},{"value":"America/Boa_Vista","label":"Amazon Standard Time - Boa Vista"},{"value":"America/Campo_Grande","label":"Amazon Standard Time - Campo Grande"},{"value":"America/Cuiaba","label":"Amazon Standard Time - Cuiaba"},{"value":"America/Manaus","label":"Amazon Standard Time - Manaus"},{"value":"America/Porto_Velho","label":"Amazon Standard Time - Porto Velho"},{"value":"America/Barbados","label":"Atlantic Standard Time - Barbados"},{"value":"America/Martinique","label":"Atlantic Standard Time - Martinique"},{"value":"America/Puerto_Rico","label":"Atlantic Standard Time - Puerto Rico"},{"value":"America/Santo_Domingo","label":"Atlantic Standard Time - Santo Domingo"},{"value":"America/La_Paz","label":"Bolivia Time"},{"value":"America/Santiago","label":"Chile Time"},{"value":"America/Havana","label":"Cuba Time"},{"value":"America/Detroit","label":"Eastern Time - Detroit"},{"value":"America/Grand_Turk","label":"Eastern Time - Grand Turk"},{"value":"America/Indiana/Indianapolis","label":"Eastern Time - Indianapolis"},{"value":"America/Iqaluit","label":"Eastern Time - Iqaluit"},{"value":"America/Kentucky/Louisville","label":"Eastern Time - Louisville"},{"value":"America/Indiana/Marengo","label":"Eastern Time - Marengo, Indiana"},{"value":"America/Kentucky/Monticello","label":"Eastern Time - Monticello, Kentucky"},{"value":"America/New_York","label":"Eastern Time - New York"},{"value":"America/Nipigon","label":"Eastern Time - Nipigon"},{"value":"America/Pangnirtung","label":"Eastern Time - Pangnirtung"},{"value":"America/Indiana/Petersburg","label":"Eastern Time - Petersburg, Indiana"},{"value":"America/Port-au-Prince","label":"Eastern Time - Port-au-Prince"},{"value":"America/Thunder_Bay","label":"Eastern Time - Thunder Bay"},{"value":"America/Toronto","label":"Eastern Time - Toronto"},{"value":"America/Indiana/Vevay","label":"Eastern Time - Vevay, Indiana"},{"value":"America/Indiana/Vincennes","label":"Eastern Time - Vincennes, Indiana"},{"value":"America/Indiana/Winamac","label":"Eastern Time - Winamac, Indiana"},{"value":"America/Guyana","label":"Guyana Time"},{"value":"America/Asuncion","label":"Paraguay Time"},{"value":"America/Caracas","label":"Venezuela Time"},{"value":"America/Argentina/Buenos_Aires","label":"Argentina Standard Time - Buenos Aires"},{"value":"America/Argentina/Catamarca","label":"Argentina Standard Time - Catamarca"},{"value":"America/Argentina/Cordoba","label":"Argentina Standard Time - Cordoba"},{"value":"America/Argentina/Jujuy","label":"Argentina Standard Time - Jujuy"},{"value":"America/Argentina/La_Rioja","label":"Argentina Standard Time - La Rioja"},{"value":"America/Argentina/Mendoza","label":"Argentina Standard Time - Mendoza"},{"value":"America/Argentina/Rio_Gallegos","label":"Argentina Standard Time - Rio Gallegos"},{"value":"America/Argentina/Salta","label":"Argentina Standard Time - Salta"},{"value":"America/Argentina/San_Juan","label":"Argentina Standard Time - San Juan"},{"value":"America/Argentina/San_Luis","label":"Argentina Standard Time - San Luis"},{"value":"America/Argentina/Tucuman","label":"Argentina Standard Time - Tucuman"},{"value":"America/Argentina/Ushuaia","label":"Argentina Standard Time - Ushuaia"},{"value":"Atlantic/Bermuda","label":"Atlantic Time - Bermuda"},{"value":"America/Glace_Bay","label":"Atlantic Time - Glace Bay"},{"value":"America/Goose_Bay","label":"Atlantic Time - Goose Bay"},{"value":"America/Halifax","label":"Atlantic Time - Halifax"},{"value":"America/Moncton","label":"Atlantic Time - Moncton"},{"value":"America/Thule","label":"Atlantic Time - Thule"},{"value":"America/Araguaina","label":"Brasilia Standard Time - Araguaina"},{"value":"America/Bahia","label":"Brasilia Standard Time - Bahia"},{"value":"America/Belem","label":"Brasilia Standard Time - Belem"},{"value":"America/Fortaleza","label":"Brasilia Standard Time - Fortaleza"},{"value":"America/Maceio","label":"Brasilia Standard Time - Maceio"},{"value":"America/Recife","label":"Brasilia Standard Time - Recife"},{"value":"America/Santarem","label":"Brasilia Standard Time - Santarem"},{"value":"America/Sao_Paulo","label":"Brasilia Standard Time - Sao Paulo"},{"value":"Atlantic/Stanley","label":"Falkland Islands Standard Time"},{"value":"America/Cayenne","label":"French Guiana Time"},{"value":"Antarctica/Palmer","label":"Palmer Time"},{"value":"America/Punta_Arenas","label":"Punta Arenas Time"},{"value":"Antarctica/Rothera","label":"Rothera Time"},{"value":"America/Paramaribo","label":"Suriname Time"},{"value":"America/Montevideo","label":"Uruguay Standard Time"},{"value":"America/St_Johns","label":"Newfoundland Time"},{"value":"America/Noronha","label":"Fernando de Noronha Standard Time"},{"value":"Atlantic/South_Georgia","label":"South Georgia Time"},{"value":"America/Miquelon","label":"St. Pierre & Miquelon Time"},{"value":"America/Nuuk","label":"West Greenland Time"},{"value":"Atlantic/Cape_Verde","label":"Cape Verde Standard Time"},{"value":"Atlantic/Azores","label":"Azores Time"},{"value":"UTC","label":"Coordinated Universal Time"},{"value":"America/Scoresbysund","label":"East Greenland Time"},{"value":"Etc/GMT","label":"Greenwich Mean Time"},{"value":"Africa/Abidjan","label":"Greenwich Mean Time - Abidjan"},{"value":"Africa/Bissau","label":"Greenwich Mean Time - Bissau"},{"value":"America/Danmarkshavn","label":"Greenwich Mean Time - Danmarkshavn"},{"value":"Africa/Monrovia","label":"Greenwich Mean Time - Monrovia"},{"value":"Atlantic/Reykjavik","label":"Greenwich Mean Time - Reykjavik"},{"value":"Africa/Sao_Tome","label":"Greenwich Mean Time - São Tomé"},{"value":"Africa/Algiers","label":"Central European Standard Time - Algiers"},{"value":"Africa/Tunis","label":"Central European Standard Time - Tunis"},{"value":"Europe/Dublin","label":"Ireland Time"},{"value":"Africa/Casablanca","label":"Morocco Time"},{"value":"Europe/London","label":"United Kingdom Time"},{"value":"Africa/Lagos","label":"West Africa Standard Time - Lagos"},{"value":"Africa/Ndjamena","label":"West Africa Standard Time - Ndjamena"},{"value":"Atlantic/Canary","label":"Western European Time - Canary"},{"value":"Atlantic/Faroe","label":"Western European Time - Faroe"},{"value":"Europe/Lisbon","label":"Western European Time - Lisbon"},{"value":"Atlantic/Madeira","label":"Western European Time - Madeira"},{"value":"Africa/El_Aaiun","label":"Western Sahara Time"},{"value":"Africa/Juba","label":"Central Africa Time - Juba"},{"value":"Africa/Khartoum","label":"Central Africa Time - Khartoum"},{"value":"Africa/Maputo","label":"Central Africa Time - Maputo"},{"value":"Africa/Windhoek","label":"Central Africa Time - Windhoek"},{"value":"Europe/Amsterdam","label":"Central European Time - Amsterdam"},{"value":"Europe/Andorra","label":"Central European Time - Andorra"},{"value":"Europe/Belgrade","label":"Central European Time - Belgrade"},{"value":"Europe/Berlin","label":"Central European Time - Berlin"},{"value":"Europe/Brussels","label":"Central European Time - Brussels"},{"value":"Europe/Budapest","label":"Central European Time - Budapest"},{"value":"Africa/Ceuta","label":"Central European Time - Ceuta"},{"value":"Europe/Copenhagen","label":"Central European Time - Copenhagen"},{"value":"Europe/Gibraltar","label":"Central European Time - Gibraltar"},{"value":"Europe/Luxembourg","label":"Central European Time - Luxembourg"},{"value":"Europe/Madrid","label":"Central European Time - Madrid"},{"value":"Europe/Malta","label":"Central European Time - Malta"},{"value":"Europe/Monaco","label":"Central European Time - Monaco"},{"value":"Europe/Oslo","label":"Central European Time - Oslo"},{"value":"Europe/Paris","label":"Central European Time - Paris"},{"value":"Europe/Prague","label":"Central European Time - Prague"},{"value":"Europe/Rome","label":"Central European Time - Rome"},{"value":"Europe/Stockholm","label":"Central European Time - Stockholm"},{"value":"Europe/Tirane","label":"Central European Time - Tirane"},{"value":"Europe/Vienna","label":"Central European Time - Vienna"},{"value":"Europe/Warsaw","label":"Central European Time - Warsaw"},{"value":"Europe/Zurich","label":"Central European Time - Zurich"},{"value":"Africa/Cairo","label":"Eastern European Standard Time - Cairo"},{"value":"Europe/Kaliningrad","label":"Eastern European Standard Time - Kaliningrad"},{"value":"Africa/Tripoli","label":"Eastern European Standard Time - Tripoli"},{"value":"Africa/Johannesburg","label":"South Africa Standard Time"},{"value":"Antarctica/Troll","label":"Troll Time"},{"value":"Asia/Baghdad","label":"Arabian Standard Time - Baghdad"},{"value":"Asia/Qatar","label":"Arabian Standard Time - Qatar"},{"value":"Asia/Riyadh","label":"Arabian Standard Time - Riyadh"},{"value":"Africa/Nairobi","label":"East Africa Time"},{"value":"Asia/Amman","label":"Eastern European Time - Amman"},{"value":"Europe/Athens","label":"Eastern European Time - Athens"},{"value":"Asia/Beirut","label":"Eastern European Time - Beirut"},{"value":"Europe/Bucharest","label":"Eastern European Time - Bucharest"},{"value":"Europe/Chisinau","label":"Eastern European Time - Chisinau"},{"value":"Asia/Damascus","label":"Eastern European Time - Damascus"},{"value":"Asia/Gaza","label":"Eastern European Time - Gaza"},{"value":"Asia/Hebron","label":"Eastern European Time - Hebron"},{"value":"Europe/Helsinki","label":"Eastern European Time - Helsinki"},{"value":"Europe/Kiev","label":"Eastern European Time - Kyiv"},{"value":"Asia/Nicosia","label":"Eastern European Time - Nicosia"},{"value":"Europe/Riga","label":"Eastern European Time - Riga"},{"value":"Europe/Sofia","label":"Eastern European Time - Sofia"},{"value":"Europe/Tallinn","label":"Eastern European Time - Tallinn"},{"value":"Europe/Uzhgorod","label":"Eastern European Time - Uzhhorod"},{"value":"Europe/Vilnius","label":"Eastern European Time - Vilnius"},{"value":"Europe/Zaporozhye","label":"Eastern European Time - Zaporozhye"},{"value":"Asia/Famagusta","label":"Famagusta Time"},{"value":"Asia/Jerusalem","label":"Israel Time"},{"value":"Europe/Kirov","label":"Kirov Time"},{"value":"Europe/Minsk","label":"Moscow Standard Time - Minsk"},{"value":"Europe/Moscow","label":"Moscow Standard Time - Moscow"},{"value":"Europe/Simferopol","label":"Moscow Standard Time - Simferopol"},{"value":"Europe/Istanbul","label":"Turkey Time"},{"value":"Europe/Volgograd","label":"Volgograd Standard Time"},{"value":"Asia/Yerevan","label":"Armenia Standard Time"},{"value":"Europe/Astrakhan","label":"Astrakhan Time"},{"value":"Asia/Baku","label":"Azerbaijan Standard Time"},{"value":"Asia/Tbilisi","label":"Georgia Standard Time"},{"value":"Asia/Dubai","label":"Gulf Standard Time"},{"value":"Indian/Mauritius","label":"Mauritius Standard Time"},{"value":"Indian/Reunion","label":"Réunion Time"},{"value":"Europe/Samara","label":"Samara Standard Time"},{"value":"Europe/Saratov","label":"Saratov Time"},{"value":"Indian/Mahe","label":"Seychelles Time"},{"value":"Europe/Ulyanovsk","label":"Ulyanovsk Time"},{"value":"Asia/Kabul","label":"Afghanistan Time"},{"value":"Asia/Tehran","label":"Iran Time"},{"value":"Indian/Kerguelen","label":"French Southern & Antarctic Time"},{"value":"Indian/Maldives","label":"Maldives Time"},{"value":"Antarctica/Mawson","label":"Mawson Time"},{"value":"Asia/Karachi","label":"Pakistan Standard Time"},{"value":"Asia/Dushanbe","label":"Tajikistan Time"},{"value":"Asia/Ashgabat","label":"Turkmenistan Standard Time"},{"value":"Asia/Samarkand","label":"Uzbekistan Standard Time - Samarkand"},{"value":"Asia/Tashkent","label":"Uzbekistan Standard Time - Tashkent"},{"value":"Asia/Aqtau","label":"West Kazakhstan Time - Aqtau"},{"value":"Asia/Aqtobe","label":"West Kazakhstan Time - Aqtobe"},{"value":"Asia/Atyrau","label":"West Kazakhstan Time - Atyrau"},{"value":"Asia/Oral","label":"West Kazakhstan Time - Oral"},{"value":"Asia/Qyzylorda","label":"West Kazakhstan Time - Qyzylorda"},{"value":"Asia/Yekaterinburg","label":"Yekaterinburg Standard Time"},{"value":"Asia/Colombo","label":"India Standard Time - Colombo"},{"value":"Asia/Kolkata","label":"India Standard Time - Kolkata"},{"value":"Asia/Kathmandu","label":"Nepal Time"},{"value":"Asia/Dhaka","label":"Bangladesh Standard Time"},{"value":"Asia/Thimphu","label":"Bhutan Time"},{"value":"Asia/Almaty","label":"East Kazakhstan Time - Almaty"},{"value":"Asia/Qostanay","label":"East Kazakhstan Time - Kostanay"},{"value":"Indian/Chagos","label":"Indian Ocean Time"},{"value":"Asia/Bishkek","label":"Kyrgyzstan Time"},{"value":"Asia/Omsk","label":"Omsk Standard Time"},{"value":"Asia/Urumqi","label":"Urumqi Time"},{"value":"Antarctica/Vostok","label":"Vostok Time"},{"value":"Indian/Cocos","label":"Cocos Islands Time"},{"value":"Asia/Yangon","label":"Myanmar Time"},{"value":"Asia/Barnaul","label":"Barnaul Time"},{"value":"Indian/Christmas","label":"Christmas Island Time"},{"value":"Antarctica/Davis","label":"Davis Time"},{"value":"Asia/Hovd","label":"Hovd Standard Time"},{"value":"Asia/Bangkok","label":"Indochina Time - Bangkok"},{"value":"Asia/Ho_Chi_Minh","label":"Indochina Time - Ho Chi Minh City"},{"value":"Asia/Krasnoyarsk","label":"Krasnoyarsk Standard Time - Krasnoyarsk"},{"value":"Asia/Novokuznetsk","label":"Krasnoyarsk Standard Time - Novokuznetsk"},{"value":"Asia/Novosibirsk","label":"Novosibirsk Standard Time"},{"value":"Asia/Tomsk","label":"Tomsk Time"},{"value":"Asia/Jakarta","label":"Western Indonesia Time - Jakarta"},{"value":"Asia/Pontianak","label":"Western Indonesia Time - Pontianak"},{"value":"Australia/Perth","label":"Australian Western Standard Time"},{"value":"Asia/Brunei","label":"Brunei Darussalam Time"},{"value":"Asia/Makassar","label":"Central Indonesia Time"},{"value":"Asia/Macau","label":"China Standard Time - Macao"},{"value":"Asia/Shanghai","label":"China Standard Time - Shanghai"},{"value":"Asia/Hong_Kong","label":"Hong Kong Standard Time"},{"value":"Asia/Irkutsk","label":"Irkutsk Standard Time"},{"value":"Asia/Kuala_Lumpur","label":"Malaysia Time - Kuala Lumpur"},{"value":"Asia/Kuching","label":"Malaysia Time - Kuching"},{"value":"Asia/Manila","label":"Philippine Standard Time"},{"value":"Asia/Singapore","label":"Singapore Standard Time"},{"value":"Asia/Taipei","label":"Taipei Standard Time"},{"value":"Asia/Choibalsan","label":"Ulaanbaatar Standard Time - Choibalsan"},{"value":"Asia/Ulaanbaatar","label":"Ulaanbaatar Standard Time - Ulaanbaatar"},{"value":"Australia/Eucla","label":"Australian Central Western Standard Time"},{"value":"Asia/Dili","label":"East Timor Time"},{"value":"Asia/Jayapura","label":"Eastern Indonesia Time"},{"value":"Asia/Tokyo","label":"Japan Standard Time"},{"value":"Asia/Pyongyang","label":"Korean Standard Time - Pyongyang"},{"value":"Asia/Seoul","label":"Korean Standard Time - Seoul"},{"value":"Pacific/Palau","label":"Palau Time"},{"value":"Asia/Chita","label":"Yakutsk Standard Time - Chita"},{"value":"Asia/Khandyga","label":"Yakutsk Standard Time - Khandyga"},{"value":"Asia/Yakutsk","label":"Yakutsk Standard Time - Yakutsk"},{"value":"Australia/Darwin","label":"Australian Central Standard Time"},{"value":"Australia/Adelaide","label":"Central Australia Time - Adelaide"},{"value":"Australia/Broken_Hill","label":"Central Australia Time - Broken Hill"},{"value":"Australia/Brisbane","label":"Australian Eastern Standard Time - Brisbane"},{"value":"Australia/Lindeman","label":"Australian Eastern Standard Time - Lindeman"},{"value":"Pacific/Guam","label":"Chamorro Standard Time"},{"value":"Pacific/Chuuk","label":"Chuuk Time"},{"value":"Australia/Hobart","label":"Eastern Australia Time - Hobart"},{"value":"Antarctica/Macquarie","label":"Eastern Australia Time - Macquarie"},{"value":"Australia/Melbourne","label":"Eastern Australia Time - Melbourne"},{"value":"Australia/Sydney","label":"Eastern Australia Time - Sydney"},{"value":"Pacific/Port_Moresby","label":"Papua New Guinea Time"},{"value":"Asia/Ust-Nera","label":"Vladivostok Standard Time - Ust-Nera"},{"value":"Asia/Vladivostok","label":"Vladivostok Standard Time - Vladivostok"},{"value":"Australia/Lord_Howe","label":"Lord Howe Time"},{"value":"Pacific/Bougainville","label":"Bougainville Time"},{"value":"Antarctica/Casey","label":"Casey Time"},{"value":"Pacific/Kosrae","label":"Kosrae Time"},{"value":"Asia/Magadan","label":"Magadan Standard Time"},{"value":"Pacific/Noumea","label":"New Caledonia Standard Time"},{"value":"Pacific/Norfolk","label":"Norfolk Island Time"},{"value":"Pacific/Pohnpei","label":"Ponape Time"},{"value":"Asia/Sakhalin","label":"Sakhalin Standard Time"},{"value":"Pacific/Guadalcanal","label":"Solomon Islands Time"},{"value":"Asia/Srednekolymsk","label":"Srednekolymsk Time"},{"value":"Pacific/Efate","label":"Vanuatu Standard Time"},{"value":"Asia/Anadyr","label":"Anadyr Standard Time"},{"value":"Pacific/Fiji","label":"Fiji Time"},{"value":"Pacific/Tarawa","label":"Gilbert Islands Time"},{"value":"Pacific/Kwajalein","label":"Marshall Islands Time - Kwajalein"},{"value":"Pacific/Majuro","label":"Marshall Islands Time - Majuro"},{"value":"Pacific/Nauru","label":"Nauru Time"},{"value":"Pacific/Auckland","label":"New Zealand Time"},{"value":"Asia/Kamchatka","label":"Petropavlovsk-Kamchatski Standard Time"},{"value":"Pacific/Funafuti","label":"Tuvalu Time"},{"value":"Pacific/Wake","label":"Wake Island Time"},{"value":"Pacific/Wallis","label":"Wallis & Futuna Time"},{"value":"Pacific/Chatham","label":"Chatham Time"},{"value":"Pacific/Apia","label":"Apia Standard Time"},{"value":"Pacific/Fakaofo","label":"Tokelau Time"},{"value":"Pacific/Tongatapu","label":"Tonga Standard Time"},{"value":"Pacific/Kiritimati","label":"Line Islands Time"}],}
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
				'name'?: string| undefined | null
				/** Base. A best practices starting point for a role based on the generalized roles at a company. */
				'base'?: ("owner" | "groupManager" | "manager" | "teammate" | "anonymous" | "loggedIn" | "guest")| undefined | null
				/** Description. */
				'description'?: string| undefined | null
				
				'dateDeleted'?: number| undefined | null
				
				'organizationId'?: string| undefined | null
				/** Public. Should I let people that are not part of this organization this role? */
				'isPublic'?: boolean| undefined | null
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
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target': SpruceSchemas.Mercury.v2020_12_25.UpdateRoleEmitTarget
				
				'payload'?: SpruceSchemas.Mercury.v2020_12_25.UpdateRoleEmitPayload| undefined | null
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
				
				'skillId'?: string| undefined | null
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

		
		interface UpsertPermissionContractEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
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

		
		interface UpsertPermissionContractsEmitPayload {
			
				/** Name. Human readable name for this contract */
				'name': string
				/** Description. */
				'description'?: string| undefined | null
				/** Require all permissions. */
				'requireAllPermissions'?: boolean| undefined | null
				
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
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
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

		
		interface WhoamiEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
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
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
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
				
				'locationId'?: string| undefined | null
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
			    }
		}

		interface DidJoinOrganizationEmitPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.DidJoinOrganizationEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface DidJoinOrganizationEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
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
			
				
				'nextINeedYouTo'?: string[]| undefined | null
				
				'youShouldKnowThat'?: string[]| undefined | null
				
				'links'?: SpruceSchemas.Spruce.v2020_07_22.Link[]| undefined | null
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
			
				
				'messaging'?: SpruceSchemas.Mercury.v2020_12_25.MessageTemplateAddons| undefined | null
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
				
				'locationId'?: string| undefined | null
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
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
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

		
		interface DidMessageEmitPayload {
			
				
				'message': SpruceSchemas.Spruce.v2020_07_22.Message
				
				'conversationState'?: string| undefined | null
				
				'topic'?: string| undefined | null
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
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target'?: SpruceSchemas.Spruce.v2020_07_22.MessageTarget| undefined | null
				
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
			
				
				'transitionConversationTo'?: ("greeting" | "discovery" | "topic" | "closing")| undefined | null
				
				'repairs'?: string[]| undefined | null
				
				'topicChangers'?: string[]| undefined | null
				
				'utterance'?: string| undefined | null
				
				'suggestedTopics'?: SpruceSchemas.Mercury.v2020_12_25.ConversationTopic[]| undefined | null
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

		
		interface DidSignupEmitPayload {
			
				
				'person': SpruceSchemas.Spruce.v2020_07_22.Person
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
			                options: {schema: SpruceSchemas.Spruce.v2020_07_22.PersonSchema,}
			            },
			    }
		}

		interface DidSignupEmitPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.DidSignupEmitPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface DidSignupEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventTarget| undefined | null
				
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

		
		interface DidUpdateFeedEmitTarget {
			
				
				'locationId'?: string| undefined | null
				
				'organizationId'?: string| undefined | null
				
				'skillId'?: string| undefined | null
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
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target'?: SpruceSchemas.Mercury.v2020_12_25.DidUpdateFeedEmitTarget| undefined | null
				
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

		
		interface InvokeChatCallbackTarget {
			
				
				'skillId': string
				
				'chatPersonId': string
		}

		interface InvokeChatCallbackTargetSchema extends SpruceSchema.Schema {
			id: 'invokeChatCallbackTarget',
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
			            'chatPersonId': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface InvokeChatCallbackTargetEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.InvokeChatCallbackTargetSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface InvokeChatCallbackPayload {
			
				
				'placeholder': string
				
				'state'?: (Record<string, any>)| undefined | null
		}

		interface InvokeChatCallbackPayloadSchema extends SpruceSchema.Schema {
			id: 'invokeChatCallbackPayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'placeholder': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'state': {
			                type: 'raw',
			                options: {valueType: `Record<string, any>`,}
			            },
			    }
		}

		interface InvokeChatCallbackPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.InvokeChatCallbackPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface InvokeChatCallbackEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target': SpruceSchemas.Mercury.v2020_12_25.InvokeChatCallbackTarget
				
				'payload': SpruceSchemas.Mercury.v2020_12_25.InvokeChatCallbackPayload
		}

		interface InvokeChatCallbackEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'invokeChatCallbackEmitTargetAndPayload',
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
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.InvokeChatCallbackTargetSchema,}
			            },
			            /** . */
			            'payload': {
			                type: 'schema',
			                isRequired: true,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.InvokeChatCallbackPayloadSchema,}
			            },
			    }
		}

		interface InvokeChatCallbackEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.InvokeChatCallbackEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface InvokeChatCallbackResponsePayload {
			
				
				'message': string
		}

		interface InvokeChatCallbackResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'invokeChatCallbackResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'message': {
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface InvokeChatCallbackResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.InvokeChatCallbackResponsePayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface DidUpdatePersonEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
				
				'target'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventTarget| undefined | null
				
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

		
		interface RegisterChatbotsEmitTargetAndPayload {
			
				/** Source. */
				'source'?: SpruceSchemas.SpruceEventUtils.v2021_09_13.EventSource| undefined | null
		}

		interface RegisterChatbotsEmitTargetAndPayloadSchema extends SpruceSchema.Schema {
			id: 'registerChatbotsEmitTargetAndPayload',
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

		interface RegisterChatbotsEmitTargetAndPayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.RegisterChatbotsEmitTargetAndPayloadSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface ChatbotCallbacks {
			
				
				'placeholder': string
				
				'useThisWhenever': string
		}

		interface ChatbotCallbacksSchema extends SpruceSchema.Schema {
			id: 'chatbotCallbacks',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'placeholder': {
			                type: 'id',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'useThisWhenever': {
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			    }
		}

		interface ChatbotCallbacksEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ChatbotCallbacksSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface Chatbot {
			
				
				'title': string
				
				'yourJobIfYouChooseToAcceptItIs': string
				
				'weAreDoneWhen': string
				
				'pleaseKeepInMindThat'?: string[]| undefined | null
				
				'stateSchema'?: (SpruceSchema.Schema)| undefined | null
				
				'model'?: string| undefined | null
				
				'promptTemplate'?: string| undefined | null
				
				'callbacks'?: SpruceSchemas.Mercury.v2020_12_25.ChatbotCallbacks[]| undefined | null
		}

		interface ChatbotSchema extends SpruceSchema.Schema {
			id: 'chatbot',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'title': {
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'yourJobIfYouChooseToAcceptItIs': {
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'weAreDoneWhen': {
			                type: 'text',
			                isRequired: true,
			                options: undefined
			            },
			            /** . */
			            'pleaseKeepInMindThat': {
			                type: 'text',
			                isArray: true,
			                options: undefined
			            },
			            /** . */
			            'stateSchema': {
			                type: 'raw',
			                options: {valueType: `SpruceSchema.Schema`,}
			            },
			            /** . */
			            'model': {
			                type: 'id',
			                options: undefined
			            },
			            /** . */
			            'promptTemplate': {
			                type: 'text',
			                options: undefined
			            },
			            /** . */
			            'callbacks': {
			                type: 'schema',
			                isArray: true,
			                minArrayLength: 0,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.ChatbotCallbacksSchema,}
			            },
			    }
		}

		interface ChatbotEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.ChatbotSchema> {}

	}


	namespace SpruceSchemas.Mercury.v2020_12_25 {

		
		interface RegisterChatbotsResponsePayload {
			
				
				'bots': SpruceSchemas.Mercury.v2020_12_25.Chatbot[]
		}

		interface RegisterChatbotsResponsePayloadSchema extends SpruceSchema.Schema {
			id: 'registerChatbotsResponsePayload',
			version: 'v2020_12_25',
			namespace: 'Mercury',
			name: '',
			    fields: {
			            /** . */
			            'bots': {
			                type: 'schema',
			                isRequired: true,
			                isArray: true,
			                minArrayLength: 0,
			                options: {schema: SpruceSchemas.Mercury.v2020_12_25.ChatbotSchema,}
			            },
			    }
		}

		interface RegisterChatbotsResponsePayloadEntity extends SchemaEntity<SpruceSchemas.Mercury.v2020_12_25.RegisterChatbotsResponsePayloadSchema> {}

	}

}
