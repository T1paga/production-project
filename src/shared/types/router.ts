// eslint-disable-next-line ulbi-tv-plugin/layer-imports
import { type UserRole } from "@/entities/User"
import { type RouteProps } from "react-router-dom"

export type appRoutesProps = RouteProps & {
	authOnly?: boolean
	roles?: UserRole[]
}