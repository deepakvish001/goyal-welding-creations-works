# Automated testing strategy

**Guide ID:** 073  
**Category:** testing  
**Project:** Goyal Welding Creations & Works

## Objective

Define unit, component, integration and end-to-end layers.

## Business Context

The product should help customers evaluate welding quality, understand available services and submit enquiries, while giving authorised staff safe tools for content and lead management.

## Engineering Guidance

1. Define the customer, content-editor or administrator outcome.
2. Specify entity fields, validation, permissions and lifecycle states.
3. Keep rendering, domain rules, persistence and notification adapters separate.
4. Preserve existing content and URLs or provide migration and rollback instructions.
5. Design empty, loading, success, denied, validation and partial-failure states.
6. Record administrative changes without storing unnecessary personal information.
7. Evaluate responsive, accessibility, media-performance and security effects.

## Acceptance Criteria

- Ownership and affected roles are explicit.
- Content and data constraints are defined.
- Privileged actions enforce least privilege beyond the visible UI.
- Images remain optimised and accessible.
- Customer consent and testimonial rights are respected.
- Enquiry or administrator data is not exposed through logs.
- High-risk behaviour has positive and negative tests.
- Recovery and rollback are documented.

## Verification

```bash
npm run lint
npm run build
```

For privileged workflows, test ordinary, moderator and administrator identities. For galleries, verify responsive images, keyboard use, slow loading and missing media.

## Review Scope

Keep the implementation focused on this guide. Move unrelated refactoring, dependency upgrades and broad formatting to separate pull requests.
