import { type UserRole } from "@/entities/User"
import { type RouteProps } from "react-router-dom"

export type appRoutesProps = RouteProps & {
	authOnly?: boolean
	roles?: UserRole[]
}