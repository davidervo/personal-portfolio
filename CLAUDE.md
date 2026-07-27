# Project conventions

- **No workarounds without explicit approval.** If the "correct"/native way to
  do something isn't available (missing official support, a tool doesn't
  cover this framework, etc.), do not silently reach for a workaround or
  hack. Stop, explain the gap and the real options, and let the user choose.
  Workarounds are only acceptable when the user has explicitly approved one
  for that specific situation — never the default.

- **State the plan, wait for explicit go-ahead, before executing anything
  non-trivial.** This includes schema changes, framework/CMS decisions, and
  anything else with real cost if wrong — not just large migrations. Don't
  build speculatively to "show" an option; describe it first.

- **Never silently reverse or drop a previous decision.** If new information
  means an earlier decision (yours or the user's) should change, say so
  explicitly — name the decision, name what changes, and why — before acting
  on the new direction. Don't let two threads (e.g. a framework choice and a
  CMS choice) stay silently coupled or silently decoupled.
