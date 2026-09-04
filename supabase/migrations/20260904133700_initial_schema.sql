-- CONECTA - Esquema inicial para Supabase/PostgreSQL
-- Ejecutar mediante Supabase migrations. Los usuarios se gestionan en auth.users.

create extension if not exists "pgcrypto";

create type public.app_role as enum ('director', 'docente', 'estudiante', 'psicosocial', 'apoderado');
create type public.idea_status as enum ('recibida', 'en_revision', 'implementada', 'rechazada');
create type public.intervention_status as enum ('programada', 'en_progreso', 'completada', 'cancelada');
create type public.priority_level as enum ('baja', 'media', 'alta', 'critica');
create type public.alert_status as enum ('activa', 'en_seguimiento', 'resuelta', 'derivada');
create type public.report_status as enum ('borrador', 'firmado', 'finalizado');

create table public.schools (
  id uuid primary key default gen_random_uuid(),
  rbd text not null unique,
  name text not null,
  created_at timestamptz not null default now()
);

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  school_id uuid references public.schools(id) on delete restrict,
  full_name text not null,
  role public.app_role not null,
  rut text,
  email text,
  avatar_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.courses (
  id uuid primary key default gen_random_uuid(),
  school_id uuid not null references public.schools(id) on delete cascade,
  name text not null,
  level text not null,
  academic_year smallint not null default extract(year from now())::smallint,
  teacher_id uuid references public.profiles(id) on delete set null,
  created_at timestamptz not null default now(),
  unique (school_id, name, academic_year)
);

create table public.enrollments (
  id uuid primary key default gen_random_uuid(),
  course_id uuid not null references public.courses(id) on delete cascade,
  student_id uuid not null references public.profiles(id) on delete cascade,
  status text not null default 'active' check (status in ('active', 'inactive')),
  enrolled_at timestamptz not null default now(),
  unique (course_id, student_id)
);

create table public.guardian_students (
  guardian_id uuid not null references public.profiles(id) on delete cascade,
  student_id uuid not null references public.profiles(id) on delete cascade,
  relationship text not null,
  primary key (guardian_id, student_id)
);

create table public.mood_entries (
  id uuid primary key default gen_random_uuid(),
  student_id uuid not null references public.profiles(id) on delete cascade,
  recorded_by uuid references public.profiles(id) on delete set null,
  mood text not null check (mood in ('bajo', 'neutral', 'bueno', 'excelente')),
  note text,
  recorded_at timestamptz not null default now()
);

create table public.badges (
  id uuid primary key default gen_random_uuid(),
  school_id uuid references public.schools(id) on delete cascade,
  name text not null,
  description text not null,
  points integer not null default 0 check (points >= 0),
  created_at timestamptz not null default now()
);

create table public.student_badges (
  student_id uuid not null references public.profiles(id) on delete cascade,
  badge_id uuid not null references public.badges(id) on delete cascade,
  awarded_by uuid references public.profiles(id) on delete set null,
  awarded_at timestamptz not null default now(),
  primary key (student_id, badge_id)
);

create table public.point_events (
  id uuid primary key default gen_random_uuid(),
  student_id uuid not null references public.profiles(id) on delete cascade,
  course_id uuid references public.courses(id) on delete set null,
  points integer not null,
  reason text not null,
  created_by uuid references public.profiles(id) on delete set null,
  created_at timestamptz not null default now()
);

create table public.rewards (
  id uuid primary key default gen_random_uuid(),
  school_id uuid not null references public.schools(id) on delete cascade,
  name text not null,
  description text not null,
  points_cost integer not null check (points_cost > 0),
  active boolean not null default true
);

create table public.reward_redemptions (
  id uuid primary key default gen_random_uuid(),
  reward_id uuid not null references public.rewards(id) on delete restrict,
  course_id uuid not null references public.courses(id) on delete restrict,
  requested_by uuid not null references public.profiles(id) on delete restrict,
  status text not null default 'requested' check (status in ('requested', 'approved', 'rejected', 'completed')),
  created_at timestamptz not null default now()
);

create table public.ideas (
  id uuid primary key default gen_random_uuid(),
  school_id uuid not null references public.schools(id) on delete cascade,
  course_id uuid references public.courses(id) on delete set null,
  author_id uuid references public.profiles(id) on delete set null,
  author_role public.app_role not null,
  title text not null,
  category text not null,
  description text not null,
  anonymous boolean not null default false,
  status public.idea_status not null default 'recibida',
  reviewed_by uuid references public.profiles(id) on delete set null,
  reviewed_at timestamptz,
  created_at timestamptz not null default now()
);

create table public.kudos (
  id uuid primary key default gen_random_uuid(),
  school_id uuid not null references public.schools(id) on delete cascade,
  sender_id uuid not null references public.profiles(id) on delete restrict,
  recipient_id uuid not null references public.profiles(id) on delete restrict,
  category text not null,
  message text not null,
  approved boolean not null default false,
  created_at timestamptz not null default now(),
  check (sender_id <> recipient_id)
);

create table public.interventions (
  id uuid primary key default gen_random_uuid(),
  school_id uuid not null references public.schools(id) on delete cascade,
  student_id uuid not null references public.profiles(id) on delete restrict,
  assigned_to uuid references public.profiles(id) on delete set null,
  type text not null,
  protocol text,
  status public.intervention_status not null default 'programada',
  priority public.priority_level not null default 'media',
  notes text,
  scheduled_for timestamptz,
  completed_at timestamptz,
  created_at timestamptz not null default now()
);

create table public.alerts (
  id uuid primary key default gen_random_uuid(),
  school_id uuid not null references public.schools(id) on delete cascade,
  student_id uuid not null references public.profiles(id) on delete restrict,
  source text not null,
  category text not null,
  priority public.priority_level not null,
  description text not null,
  status public.alert_status not null default 'activa',
  assigned_to uuid references public.profiles(id) on delete set null,
  created_at timestamptz not null default now(),
  resolved_at timestamptz
);

create table public.support_contacts (
  id uuid primary key default gen_random_uuid(),
  student_id uuid not null references public.profiles(id) on delete cascade,
  name text not null,
  relationship text not null,
  phone text,
  email text,
  created_at timestamptz not null default now()
);

create table public.chat_conversations (
  id uuid primary key default gen_random_uuid(),
  school_id uuid not null references public.schools(id) on delete cascade,
  student_id uuid not null references public.profiles(id) on delete cascade,
  assigned_to uuid references public.profiles(id) on delete set null,
  status text not null default 'open' check (status in ('open', 'closed', 'escalated')),
  created_at timestamptz not null default now(),
  closed_at timestamptz
);

create table public.chat_messages (
  id uuid primary key default gen_random_uuid(),
  conversation_id uuid not null references public.chat_conversations(id) on delete cascade,
  sender_id uuid references public.profiles(id) on delete set null,
  sender_type text not null check (sender_type in ('student', 'estrella', 'professional')),
  body text not null,
  created_at timestamptz not null default now()
);

create table public.reports (
  id uuid primary key default gen_random_uuid(),
  school_id uuid not null references public.schools(id) on delete cascade,
  created_by uuid not null references public.profiles(id) on delete restrict,
  name text not null,
  category text not null,
  status public.report_status not null default 'borrador',
  storage_path text,
  created_at timestamptz not null default now(),
  signed_at timestamptz
);

create table public.audit_logs (
  id uuid primary key default gen_random_uuid(),
  school_id uuid references public.schools(id) on delete set null,
  actor_id uuid references public.profiles(id) on delete set null,
  action text not null,
  entity_type text not null,
  entity_id uuid,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create index enrollments_student_idx on public.enrollments(student_id);
create index ideas_school_status_idx on public.ideas(school_id, status);
create index kudos_recipient_idx on public.kudos(recipient_id, created_at desc);
create index interventions_student_status_idx on public.interventions(student_id, status);
create index alerts_school_priority_idx on public.alerts(school_id, priority, status);
create index chat_messages_conversation_idx on public.chat_messages(conversation_id, created_at);
create index audit_logs_school_created_idx on public.audit_logs(school_id, created_at desc);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger profiles_set_updated_at
before update on public.profiles
for each row execute function public.set_updated_at();

-- Ayudantes para RLS. La autorización debe basarse en el perfil del usuario,
-- nunca en valores enviados por el cliente.
create or replace function public.current_profile_role()
returns public.app_role
language sql
stable
security definer
set search_path = public
as $$
  select role from public.profiles where id = auth.uid();
$$;

create or replace function public.current_school_id()
returns uuid
language sql
stable
security definer
set search_path = public
as $$
  select school_id from public.profiles where id = auth.uid();
$$;

alter table public.schools enable row level security;
alter table public.profiles enable row level security;
alter table public.courses enable row level security;
alter table public.enrollments enable row level security;
alter table public.guardian_students enable row level security;
alter table public.mood_entries enable row level security;
alter table public.badges enable row level security;
alter table public.student_badges enable row level security;
alter table public.point_events enable row level security;
alter table public.rewards enable row level security;
alter table public.reward_redemptions enable row level security;
alter table public.ideas enable row level security;
alter table public.kudos enable row level security;
alter table public.interventions enable row level security;
alter table public.alerts enable row level security;
alter table public.support_contacts enable row level security;
alter table public.chat_conversations enable row level security;
alter table public.chat_messages enable row level security;
alter table public.reports enable row level security;
alter table public.audit_logs enable row level security;

create policy "school members can read school"
on public.schools for select
using (id = public.current_school_id());

create policy "users can read their own profile"
on public.profiles for select
using (id = auth.uid());

create policy "staff can read school profiles"
on public.profiles for select
using (
  school_id = public.current_school_id()
  and public.current_profile_role() in ('director', 'docente', 'psicosocial')
);

create policy "school members can read courses"
on public.courses for select
using (school_id = public.current_school_id());

create policy "students can read own enrollment"
on public.enrollments for select
using (student_id = auth.uid());

create policy "staff can read school enrollments"
on public.enrollments for select
using (
  public.current_profile_role() in ('director', 'docente', 'psicosocial')
  and course_id in (select id from public.courses where school_id = public.current_school_id())
);

create policy "authors and staff can read ideas"
on public.ideas for select
using (
  school_id = public.current_school_id()
  and (
    author_id = auth.uid()
    or public.current_profile_role() in ('director', 'docente', 'psicosocial')
  )
);

create policy "authenticated members can create ideas"
on public.ideas for insert
with check (
  school_id = public.current_school_id()
  and author_id = auth.uid()
);

create policy "participants can read kudos"
on public.kudos for select
using (
  sender_id = auth.uid()
  or recipient_id = auth.uid()
  or (
    school_id = public.current_school_id()
    and public.current_profile_role() in ('director', 'docente')
  )
);

create policy "authenticated members can create kudos"
on public.kudos for insert
with check (school_id = public.current_school_id() and sender_id = auth.uid());

create policy "students can read own interventions"
on public.interventions for select
using (
  student_id = auth.uid()
  or assigned_to = auth.uid()
  or (
    school_id = public.current_school_id()
    and public.current_profile_role() in ('director', 'psicosocial')
  )
);

create policy "authorized staff can manage interventions"
on public.interventions for all
using (
  school_id = public.current_school_id()
  and public.current_profile_role() in ('director', 'psicosocial')
)
with check (
  school_id = public.current_school_id()
  and public.current_profile_role() in ('director', 'psicosocial')
);

create policy "authorized staff can manage alerts"
on public.alerts for all
using (
  school_id = public.current_school_id()
  and public.current_profile_role() in ('director', 'psicosocial')
)
with check (
  school_id = public.current_school_id()
  and public.current_profile_role() in ('director', 'psicosocial')
);

create policy "participants can read conversations"
on public.chat_conversations for select
using (
  student_id = auth.uid()
  or assigned_to = auth.uid()
  or (
    school_id = public.current_school_id()
    and public.current_profile_role() in ('director', 'psicosocial')
  )
);

create policy "conversation participants can read messages"
on public.chat_messages for select
using (
  conversation_id in (
    select id from public.chat_conversations
    where student_id = auth.uid() or assigned_to = auth.uid()
  )
);

create policy "conversation participants can send messages"
on public.chat_messages for insert
with check (
  sender_id = auth.uid()
  and conversation_id in (
    select id from public.chat_conversations
    where student_id = auth.uid() or assigned_to = auth.uid()
  )
);

create policy "authorized staff can read reports"
on public.reports for select
using (
  school_id = public.current_school_id()
  and public.current_profile_role() in ('director', 'docente', 'psicosocial')
);

create policy "authorized staff can read audit logs"
on public.audit_logs for select
using (
  school_id = public.current_school_id()
  and public.current_profile_role() in ('director', 'psicosocial')
);
