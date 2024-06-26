import {
    EmitCallback,
    EventContract,
    EventNames,
    EventSignature,
    MercuryAggregateResponse,
    MercuryEventEmitter,
    KeyOf,
} from '@sprucelabs/mercury-types'
import { SchemaValues, Schema } from '@sprucelabs/schema'

export default class TestClient<Contract extends EventContract>
    implements MercuryEventEmitter<Contract>
{
    public async emitAndFlattenResponses<
        EventName extends EventNames<Contract> = EventNames<Contract>,
        IEventSignature extends
            EventSignature = Contract['eventSignatures'][EventName],
        EmitSchema extends
            Schema = IEventSignature['emitPayloadSchema'] extends Schema
            ? IEventSignature['emitPayloadSchema']
            : never,
        ResponseSchema extends
            Schema = IEventSignature['responsePayloadSchema'] extends Schema
            ? IEventSignature['responsePayloadSchema']
            : never,
        ResponsePayload = ResponseSchema extends Schema
            ? SchemaValues<ResponseSchema>
            : never,
    >(
        _eventName: EventName,
        _payload:
            | (EmitSchema extends Schema ? SchemaValues<EmitSchema> : never)
            | EmitCallback<Contract, EventName>
            | undefined,
        _cb?: EmitCallback<Contract, EventName> | undefined
    ): Promise<ResponsePayload[]> {
        throw new Error('Not implemented')
    }

    public async emit<
        EventName extends EventNames<Contract> = EventNames<Contract>,
        IEventSignature extends
            EventSignature = Contract['eventSignatures'][EventName],
        EmitSchema extends
            Schema = IEventSignature['emitPayloadSchema'] extends Schema
            ? IEventSignature['emitPayloadSchema']
            : never,
        ResponseSchema extends
            Schema = IEventSignature['responsePayloadSchema'] extends Schema
            ? IEventSignature['responsePayloadSchema']
            : never,
        ResponsePayload = ResponseSchema extends Schema
            ? SchemaValues<ResponseSchema>
            : never,
    >(
        _eventName: EventName,
        _payload:
            | (EmitSchema extends Schema ? SchemaValues<EmitSchema> : never)
            | EmitCallback<Contract, EventName>
            | undefined,
        _cb?: EmitCallback<Contract, EventName> | undefined
    ): Promise<MercuryAggregateResponse<ResponsePayload>> {
        //@ts-ignore
        const results = {
            totalContracts: 1,
            totalResponses: 1,
            responses: [
                {
                    responderRef: 'test',
                    payload: {
                        responsePayloadField: 'hello',
                    },
                },
            ],
        } as MercuryAggregateResponse<ResponsePayload>

        return results
    }

    public async on<
        EventName extends KeyOf<Contract['eventSignatures']> = KeyOf<
            Contract['eventSignatures']
        >,
        IEventSignature extends
            EventSignature = Contract['eventSignatures'][EventName],
        EmitSchema extends
            Schema = IEventSignature['emitPayloadSchema'] extends Schema
            ? IEventSignature['emitPayloadSchema']
            : never,
    >(
        _eventName: EventName,
        _cb: (
            payload: EmitSchema extends Schema
                ? SchemaValues<EmitSchema>
                : never
        ) => IEventSignature['responsePayloadSchema'] extends Schema
            ?
                  | Promise<
                        SchemaValues<IEventSignature['responsePayloadSchema']>
                    >
                  | SchemaValues<IEventSignature['responsePayloadSchema']>
            : Promise<void> | void
    ): Promise<void> {}

    public async off(_eventName: EventNames<Contract>): Promise<number> {
        return 0
    }
}
