CREATE TABLE IF NOT EXISTS documents (
  id              INTEGER PRIMARY KEY AUTOINCREMENT,
  filename        TEXT NOT NULL,
  stored_filename TEXT NOT NULL,
  filepath        TEXT NOT NULL,
  title           TEXT NOT NULL DEFAULT '',
  markdown        TEXT,
  markdown_chars  INTEGER NOT NULL DEFAULT 0,
  status          TEXT NOT NULL DEFAULT 'uploaded',
  error           TEXT,
  created_at      TEXT NOT NULL DEFAULT (DATETIME('now'))
);

CREATE TABLE IF NOT EXISTS lesson_plans (
  id                INTEGER PRIMARY KEY AUTOINCREMENT,
  document_id       INTEGER NOT NULL,
  title             TEXT NOT NULL DEFAULT '',
  description       TEXT NOT NULL DEFAULT '',
  objectives        TEXT NOT NULL,
  difficulty        TEXT NOT NULL DEFAULT 'intermediate',
  status            TEXT NOT NULL DEFAULT 'draft',
  revision_count    INTEGER NOT NULL DEFAULT 0,
  revision_feedback TEXT,
  created_at        TEXT NOT NULL DEFAULT (DATETIME('now')),
  FOREIGN KEY (document_id) REFERENCES documents (id) ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS idx_lesson_plans_document ON lesson_plans (document_id);

CREATE TABLE IF NOT EXISTS quiz_questions (
  id              INTEGER PRIMARY KEY AUTOINCREMENT,
  lesson_plan_id  INTEGER NOT NULL,
  objective_index INTEGER NOT NULL,
  question_index  INTEGER NOT NULL DEFAULT 0,
  objective_text  TEXT NOT NULL,
  question        TEXT NOT NULL,
  options         TEXT NOT NULL,
  correct_index   INTEGER NOT NULL,
  explanation     TEXT NOT NULL DEFAULT '',
  hint            TEXT NOT NULL DEFAULT '',
  created_at      TEXT NOT NULL DEFAULT (DATETIME('now')),
  FOREIGN KEY (lesson_plan_id) REFERENCES lesson_plans (id) ON DELETE CASCADE,
  UNIQUE (lesson_plan_id, objective_index, question_index)
);
CREATE INDEX IF NOT EXISTS idx_quiz_questions_plan ON quiz_questions (lesson_plan_id);

CREATE TABLE IF NOT EXISTS attempts (
  id             INTEGER PRIMARY KEY AUTOINCREMENT,
  lesson_plan_id INTEGER NOT NULL,
  score          INTEGER NOT NULL DEFAULT 0,
  total          INTEGER NOT NULL DEFAULT 0,
  answers        TEXT NOT NULL DEFAULT '[]',
  summary        TEXT NOT NULL DEFAULT '',
  study_tips     TEXT NOT NULL DEFAULT '',
  weak_topics    TEXT NOT NULL DEFAULT '[]',
  strengths      TEXT NOT NULL DEFAULT '[]',
  created_at     TEXT NOT NULL DEFAULT (DATETIME('now')),
  FOREIGN KEY (lesson_plan_id) REFERENCES lesson_plans (id) ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS idx_attempts_plan ON attempts (lesson_plan_id);
