import { TeacherT } from "./TeacherT"

export type UserT = {
  id: string
  type: 'Teacher' | 'Parent' | 'Admin' | 'Support'
  name?: string
  img?: string
  email: string | undefined
  premium?: boolean
  school_id?: number
  bday_notification_day?: 'day before' | 'day of' | 'both'
  bday_notification_time?: string // e.g. '8:00AM'
  settings?: Record<string, any>
  last_login?: string
  signup_date?: string
  login_count?: number

  teacher?: TeacherT 
}

export type UserWithTeacherT = UserT & { teacher: TeacherT };
