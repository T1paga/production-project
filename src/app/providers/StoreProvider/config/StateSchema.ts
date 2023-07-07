import { type CounterSchema } from "entities/Counter"
import { type UserSchema } from "entities/user"

export interface StateSchema {
	counter: CounterSchema
	user: UserSchema
}