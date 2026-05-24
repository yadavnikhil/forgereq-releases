# Screenshots

The PNGs in this folder are referenced by both the marketing site (`website/pages/guide/*.mdx`) and the project README. **Don't rename or renumber them** — the references break silently.

## Re-generating the set

The whole set is captured by an automated Playwright tour. From the `forgereq/` directory:

```bash
npm run docs:screenshots
```

That runs `tests/screenshots.spec.ts`, which launches the compiled Electron app, switches to the **light ("paper") theme**, walks through every feature, and dumps the resulting PNGs straight into this folder.

If you ever need to capture a one-off by hand, follow the same conventions the automated tour uses:

- **Theme:** Light (`Settings → General → Theme → Light — paper`). The marketing site renders on a white background and the dark theme looks heavy beside it.
- **Window size:** 1600 × 1000 (16:10). Marketing pages render at ~900 px wide; this ratio keeps per-panel density right.
- **Format:** PNG, lossless, no resizing. The build pipeline down-samples if needed.
- **Sensitive data:** mask any real tokens / hostnames / tenant IDs. Use `*.example.com`, `demo_xyz`, etc.

## The current set

| File                     | What it shows                                                              | Referenced from                       |
| ------------------------ | -------------------------------------------------------------------------- | ------------------------------------- |
| `01-hero.png`            | Main workbench — library tree, request builder, response viewer            | `index.mdx`, `workbench.mdx`, README  |
| `02-runner.png`          | Library Runner — sequence mode with chained vars                           | `library-runner.mdx`                  |
| `03-stash-realms.png`    | Stash sidebar with realm scope pill and secret masking                     | `stash-and-realms.mdx`, README        |
| `04-certificates.png`    | Settings → Certificates — mTLS binding editor                              | `certificates.mdx`, README            |
| `05-rules.png`           | Rules editor with the "Captured in this library" panel populated           | `rules.mdx`, README                   |
| `05-load-testing.png`    | Library Runner — Load mode dashboard (RPS, percentiles)                    | `load-testing.mdx`                    |
| `07-vault-backup.png`    | Settings → Vault & Backup — export passphrase + path                       | `vault-backup.mdx`                    |
| `08-grpc.png`            | gRPC request builder — inline proto + service/method pickers               | `grpc.mdx`                            |
| `09-kafka.png`           | Kafka consumer with the live message table view                            | `kafka.mdx`                           |
| `10-soap.png`            | SOAP builder — WSDL parsed + auto-generated envelope                       | `soap.mdx`                            |
| `11-mock-servers.png`    | Mock Servers panel + the per-endpoint Mocking tab                          | `mocking.mdx`                         |
| `12-inheritance.png`     | Shelf settings showing auth / headers inheriting from the library          | `inheritance.mdx`                     |
| `13-chat.png`            | AI Assistant sidebar — configured provider, model picker, suggested prompts | `ai-assistant.mdx`                    |

The numbering has small gaps and one historical collision (two `05-` files) that we keep for backwards compatibility with already-published references. New screenshots should use the next free number.

## Notes on the automated tour

- The script is **idempotent on theme** — it checks `<html>` for the `light` class first and only toggles if needed, so re-runs don't accidentally flip you to dark.
- The Rules step explicitly **sends the request twice** so the "Captured in this library" panel actually has a value to display (Rules only fire on the send that follows the rule's save).
- The Mock Servers step **cleans up any stale rows from previous crashed runs first**, because mock-server configs live in the encrypted vault on disk and aren't cleared by the renderer's `localStorage` reset.
- The AI Assistant step adds a provider via Settings → AI Assistant → Add provider; no live LLM call is made, the screenshot captures the configured-but-empty conversation state.

If a step fails, the spec leaves a `test-results/.../error-context.md` with the trace. Patch the selector, re-run.
