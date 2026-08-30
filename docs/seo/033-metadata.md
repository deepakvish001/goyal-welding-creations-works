# Page metadata strategy

**Guide ID:** 033  
**Category:** seo  
**Project:** Goyal Welding Creations & Works

## Objective

Define unique titles, descriptions, canonicals and social previews.

## Business Context

The platform connects customers with welding, fabrication and custom metalwork services. Changes should improve trust, discoverability and enquiry conversion while keeping business information accurate and customer data protected.

## Recommended Approach

1. Define the customer or administrator outcome and an observable completion signal.
2. Specify content, data, validation, access and integration boundaries.
3. Separate business rules from React presentation and external delivery services.
4. Preserve stable URLs and existing data or provide migration and rollback notes.
5. Handle loading, empty, success, invalid, denied and timeout states explicitly.
6. Add useful diagnostics without logging contact details, messages or uploaded files.
7. Review accessibility, responsive behaviour, search visibility and privacy impact.

## Acceptance Criteria

- Customer intent and affected roles are clear.
- Validation and failure recovery are defined.
- Business claims and contact information are verifiable.
- Mobile, keyboard and assistive-technology use are supported.
- Personal information collection is minimal and consent-aware.
- Search metadata remains accurate and non-duplicative.
- Important success and failure paths have verification.
- Rollout, monitoring and rollback are documented.

## Verification

```bash
npm run lint
npm run build
```

Test relevant mobile, keyboard, slow-network, invalid-input, denied, duplicate and timeout cases. Validate structured data and metadata for SEO-related changes.

## Review Scope

Keep implementation limited to this topic. Separate unrelated refactors, dependency upgrades and formatting-only changes.
