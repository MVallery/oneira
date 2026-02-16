import { UserT } from "./UserT"

export type TeacherT = {
  id: number
  type: string // e.g. 'Teacher', 'SPED Teacher', etc.
  user_id: string
  user?: UserT
  settings?: any
}