# Phase 1 Findings — Mobile Responsiveness & Accessibility Audit

## 🗂 Project Overview
**Date:** 2024-12-19  
**Scan Completed By:** Cursor  
**Target Repo Path:** / (root)  
**Pages Audited:** index.jsx, about.jsx, services.jsx, contact.jsx, approach.jsx, confidentiality.jsx, Navigation.jsx, Footer.jsx, BookingForm.jsx

---

## 📌 Summary

### Responsive/Flex/Grid Issues
The codebase suffers from **inconsistent breakpoint usage** across components, leading to layout breaks at edge cases (e.g., iPad in portrait mode, iPhone 14 Pro dimensions). Key issues:
- **Breakpoint chaos:** Mix of `480px`, `639px`, `767px`, `768px`, `968px`, `1024px`, `1025px` with no standardization
- **Fixed positioning/sizing:** Hero section uses fixed negative margins (`-80px`, `-100px`) that break on small screens
- **Container overflow:** Navigation logo text uses negative margins (`clamp(-50px, -5vw, -20px)`) causing text cutoff on tablets
- **Grid layout breaks:** Services section grid doesn't properly collapse on tablets (640px-1024px range)
- **Image sizing:** Service card images use fixed heights (`150px`, `180px`, `280px`) instead of fluid units
- **Form layout:** Booking form two-column layout breaks at `968px` (non-standard breakpoint)

### Accessibility Gaps (Mobile Priority)
- **Missing H1:** Home page has no H1 heading (violates WCAG heading hierarchy)
- **Form labels missing:** BookingForm uses placeholders instead of `<label>` elements (WCAG violation)
- **Focus indicators:** Custom buttons and links lack visible focus states for keyboard navigation
- **Color contrast:** Potential issues with light text on light backgrounds (needs audit)
- **Touch targets:** Some buttons may fall below 44×44px minimum on mobile
- **Skip links:** No "Skip to main content" link for keyboard users

---

## 🧠 Responsive Layout Issues

### ⚠️ Issue 1: Navigation Logo Text Cutoff
- **Page / Component:** Navigation.jsx / Navigation.module.css
- **Breakpoint(s) affected:** 640px-1024px (tablets, iPad portrait)
- **Issue Description:** Logo text "The Holding Space Jersey" gets cut off on the left side when viewport is between 640px-1024px. Text positioning uses negative margin (`margin-left: clamp(-50px, -5vw, -20px)`) which pushes text outside container bounds.
- **Cause (Suspected):** Negative margin on `.logoSection` combined with fixed container padding. On tablets, the `-5vw` calculation results in text being pushed outside the visible area.
- **Screenshot Reference:** screenshot-nav-tablet-cutoff.png
- **Severity:** High
- **Impact on Mobile UX:** Brand name is partially or completely hidden, breaking brand recognition and navigation clarity

---

### ⚠️ Issue 2: Hero Section Fixed Margins Break Layout
- **Page / Component:** Home (index.jsx) / Home.module.css
- **Breakpoint(s) affected:** <640px (mobile), 640px-1024px (tablet)
- **Issue Description:** Hero section uses fixed negative margin (`margin-top: -80px` desktop, `-100px` mobile, `-90px` small mobile) that doesn't scale properly. Logo positioning breaks when header height changes.
- **Cause (Suspected):** Hardcoded negative margins in `.heroSection` instead of responsive units. Header height is dynamic but hero margin is fixed.
- **Screenshot Reference:** screenshot-hero-mobile-overlap.png
- **Severity:** High
- **Impact on Mobile UX:** Logo overlaps with header navigation, making both elements difficult to interact with. Content appears cramped.

---

### ⚠️ Issue 3: Services Grid Layout Breaks on Tablets
- **Page / Component:** Home - Services Section (index.jsx) / Home.module.css
- **Breakpoint(s) affected:** 640px-1024px (tablet range)
- **Issue Description:** Services grid uses breakpoint at `968px` instead of standard `640px` or `1024px`. Between 640px-968px, grid shows 1 column when it should show 2 columns. Between 968px-1024px, grid shows 2 columns but spacing is inconsistent.
- **Cause (Suspected):** Non-standard breakpoint (`@media (max-width: 968px)`) in Home.module.css. Should use `640px` for mobile/tablet split.
- **Screenshot Reference:** screenshot-services-tablet-layout.png
- **Severity:** Medium
- **Impact on Mobile UX:** Service cards appear too wide on tablets, wasting screen space and creating poor visual hierarchy

---

### ⚠️ Issue 4: Service Card Images Fixed Heights
- **Page / Component:** Home - Services Section (index.jsx) / Home.module.css
- **Breakpoint(s) affected:** All breakpoints, especially <640px
- **Issue Description:** Service card images use fixed pixel heights (`150px` on 480px, `180px` on 768px, `280px` on tablet, `400px` desktop) instead of fluid responsive units. Images don't scale proportionally with viewport.
- **Cause (Suspected):** Hardcoded `height`, `min-height`, `max-height` values in `.serviceImage` class instead of `clamp()` or viewport-based units.
- **Screenshot Reference:** screenshot-service-images-fixed.png
- **Severity:** Medium
- **Impact on Mobile UX:** Images may appear too large on small screens or too small on larger mobile devices, breaking visual consistency

---

### ⚠️ Issue 5: About Section Image Uses !important Overrides
- **Page / Component:** Home - About Section (index.jsx) / Home.module.css
- **Breakpoint(s) affected:** All breakpoints
- **Issue Description:** About section main image (`me.jpg`) uses `!important` flags to force sizing (`width: 480px !important; height: 540px !important`). This prevents proper responsive scaling and creates maintenance issues.
- **Cause (Suspected):** CSS specificity conflicts between `.aboutMainImage` and `.AnimatedImage` component styles. Developer used `!important` as quick fix instead of resolving specificity.
- **Screenshot Reference:** screenshot-about-image-override.png
- **Severity:** Medium
- **Impact on Mobile UX:** Image may not scale correctly on different devices, potentially causing overflow or awkward sizing

---

### ⚠️ Issue 6: Booking Form Two-Column Layout Breaks
- **Page / Component:** BookingForm.jsx / BookingForm.module.css
- **Breakpoint(s) affected:** 640px-968px (tablet range)
- **Issue Description:** Form uses non-standard breakpoint `968px` for switching from two-column to single-column layout. Between 640px-968px, form fields (name/phone) remain side-by-side but container may be too narrow.
- **Cause (Suspected):** Breakpoint at `@media (max-width: 968px)` should be `640px` to align with standard mobile/tablet split.
- **Screenshot Reference:** screenshot-booking-form-tablet.png
- **Severity:** Low
- **Impact on Mobile UX:** Form fields may appear cramped on smaller tablets, reducing usability

---

### ⚠️ Issue 7: Hero Logo SVG Sizing Inconsistent
- **Page / Component:** Home - Hero Section (index.jsx) / Home.module.css
- **Breakpoint(s) affected:** <640px (mobile)
- **Issue Description:** Hero logo SVG uses `max-height: 95vh` which can cause logo to be too large on short mobile screens or too small on tall screens. No minimum size constraint.
- **Cause (Suspected):** Fixed `max-height: 95vh` without `clamp()` or minimum size. Should use `clamp(200px, 50vh, 600px)` for better control.
- **Screenshot Reference:** screenshot-hero-logo-sizing.png
- **Severity:** Medium
- **Impact on Mobile UX:** Logo may dominate screen on short devices or be too small on tall devices, affecting brand visibility

---

### ⚠️ Issue 8: Footer Grid Layout Breakpoint Mismatch
- **Page / Component:** Footer.jsx / Footer.module.css
- **Breakpoint(s) affected:** 640px-768px (tablet range)
- **Issue Description:** Footer switches from two-column to single-column at `768px` instead of `640px`, causing inconsistency with other components.
- **Cause (Suspected):** Legacy breakpoint (`@media (max-width: 768px)`) not updated to match standardized system.
- **Screenshot Reference:** screenshot-footer-tablet.png
- **Severity:** Low
- **Impact on Mobile UX:** Footer layout appears inconsistent with rest of site on tablets, minor visual issue

---

### ⚠️ Issue 9: Explore More Button Text Hidden on Mobile
- **Page / Component:** Home - Multiple Sections (index.jsx) / Home.module.css
- **Breakpoint(s) affected:** <640px (mobile)
- **Issue Description:** "Explore More" button text is hidden (`display: none`) on mobile, leaving only arrow icon. Button still functions but lacks accessible label context.
- **Cause (Suspected):** CSS rule `.exploreMoreText { display: none; }` at `@media (max-width: 768px)`. Button has `aria-label` but visual context is lost.
- **Screenshot Reference:** screenshot-explore-more-mobile.png
- **Severity:** Low
- **Impact on Mobile UX:** Users may not understand button purpose without text label, though icon provides some context

---

### ⚠️ Issue 10: Service Card Buttons Absolute Positioning Overlap Risk
- **Page / Component:** Home - Services Section (index.jsx) / Home.module.css
- **Breakpoint(s) affected:** <640px (mobile), especially <480px
- **Issue Description:** Service card "Read More" buttons use absolute positioning (`position: absolute; bottom: 0.5rem; right: 0.5rem`). On very small screens, buttons may overlap with card content or be cut off.
- **Cause (Suspected):** Absolute positioning without proper container constraints. Card content may extend into button area on small screens.
- **Screenshot Reference:** screenshot-service-button-overlap.png
- **Severity:** Medium
- **Impact on Mobile UX:** Buttons may be partially hidden or overlap content, making them difficult to tap

---

## 🧱 Container/Flex/Grid Audit

### Container Issues

- **Component:** Hero Section Container (`.heroContainer`)
- **Issue:** Uses `max-width: 1200px` with fixed padding. No fluid scaling between breakpoints.
- **Recommendation:** Use `max-width: min(1200px, 95vw)` and `padding: clamp(1rem, 4vw, 3rem)`

---

- **Component:** About Section Container (`.aboutContainer`)
- **Issue:** Grid layout switches to single column at `968px` (non-standard). Should use `640px`.
- **Recommendation:** Change breakpoint to `@media (max-width: 639px)` for mobile, `@media (min-width: 640px)` for tablet+

---

- **Component:** Services Grid (`.servicesGrid`)
- **Issue:** Grid uses `grid-template-columns: repeat(3, 1fr)` on desktop but breakpoint logic is inconsistent. Tablet range (640px-1024px) should show 2 columns.
- **Recommendation:** 
  ```css
  /* Mobile: 1 column (default) */
  .servicesGrid { grid-template-columns: 1fr; }
  
  /* Tablet: 2 columns */
  @media (min-width: 640px) {
    .servicesGrid { grid-template-columns: repeat(2, 1fr); }
  }
  
  /* Desktop: 3 columns */
  @media (min-width: 1025px) {
    .servicesGrid { grid-template-columns: repeat(3, 1fr); }
  }
  ```

---

- **Component:** Booking Form Container (`.content`)
- **Issue:** Two-column grid (`grid-template-columns: 1fr 1fr`) breaks at `968px` instead of `640px`. Form fields may be too narrow on tablets.
- **Recommendation:** Change breakpoint to `640px` and ensure form fields stack on mobile.

---

- **Component:** Footer Content Grid (`.content`)
- **Issue:** Two-column grid breaks at `768px` instead of `640px`, causing inconsistency.
- **Recommendation:** Update to `@media (max-width: 639px)` for single column.

---

### Flex Issues

- **Component:** Navigation Header (`.headerContainer`)
- **Issue:** Uses `display: flex` with fixed padding. Logo section width (`80%`) may be too narrow on tablets.
- **Recommendation:** Use `flex: 1` for logo section with `min-width: 0` to prevent overflow.

---

- **Component:** About Content Links (`.aboutContentLinks`)
- **Issue:** Flex container with `flex-wrap: wrap` but items may overflow on small screens.
- **Recommendation:** Ensure proper `gap` and `min-width` constraints on flex items.

---

### Grid Issues

- **Component:** Services Grid (`.servicesGrid`)
- **Issue:** Grid gap uses fixed `1rem` instead of responsive units. Cards may be too close on mobile or too far on desktop.
- **Recommendation:** Use `gap: clamp(1rem, 2.5vw, 2rem)` for responsive spacing.

---

## 📐 Breakpoint Coverage

| Breakpoint | Present | Notes |
|------------|---------|-------|
| <360px     | Partial | Some styles work, but not explicitly targeted. iPhone SE (375px) may have issues. |
| 360–480px  | Yes     | Covered by `@media (max-width: 480px)` in some files, but inconsistent. |
| 480–640px  | Partial | Gap between `480px` and `640px` not explicitly handled. Large phones fall here. |
| 640–768px  | Partial | Some components use `768px`, others use `640px`. Inconsistent coverage. |
| 768–1024px | Yes     | Covered by various breakpoints (`768px`, `968px`, `1024px`), but non-standard. |
| 1024–1440px| Yes     | Desktop styles apply, but no specific optimizations for large screens. |
| >1440px    | Partial | No max-width constraints on some containers, may stretch too wide. |

**Standardization Needed:**
- **Mobile:** `0-639px` (base styles, no media query)
- **Tablet:** `640px-1024px` (`@media (min-width: 640px)`)
- **Desktop:** `1025px+` (`@media (min-width: 1025px)`)

---

## 🎯 Accessibility Issues (Mobile Priority)

### Issue 1: Missing H1 Heading on Home Page
- **Component:** Home Page (index.jsx)
- **Issue:** Home page has no H1 heading. Structure: `<h3>ABOUT ME</h3>` → `<h2>Guiding minds...</h2>`. Violates WCAG 2.1 heading hierarchy (H1 must be first).
- **Fix:** Add visually hidden H1: `<h1 className="visually-hidden">The Holding Space Jersey - Professional Counselling Services</h1>`
- **Mobile Impact:** Screen readers announce page without main heading, breaking navigation structure. SEO impact.

---

### Issue 2: Form Inputs Lack Proper Labels
- **Component:** BookingForm.jsx
- **Issue:** Form inputs use `placeholder` text instead of `<label>` elements. Only `aria-required="true"` present. Placeholders disappear when user types, losing context.
- **Fix:** Add visible `<label>` elements with `htmlFor` matching input `id`:
  ```jsx
  <label htmlFor="name">First Name *</label>
  <input type="text" id="name" name="name" required />
  ```
- **Mobile Impact:** Screen readers may not announce field purpose clearly. Users lose context when placeholder disappears. Form navigation is poor.

---

### Issue 3: Missing Focus Indicators
- **Component:** Multiple (Navigation, Buttons, Links)
- **Issue:** Custom buttons and links lack visible focus indicators. Browser default focus (blue outline) may be removed or insufficient.
- **Fix:** Add to `globals.css`:
  ```css
  *:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
    border-radius: 2px;
  }
  ```
- **Mobile Impact:** Keyboard users cannot see which element is focused, making navigation impossible. Touch users less affected, but still important for accessibility.

---

### Issue 4: Touch Target Sizes Below Minimum
- **Component:** Service Card Buttons (`.serviceButton`)
- **Issue:** Buttons use `padding: 6px 14px` on mobile, which may result in touch target below 44×44px minimum (WCAG 2.1 AA).
- **Fix:** Ensure `min-height: 44px` and `min-width: 44px` on all interactive elements. Use `padding: clamp(0.5rem, 1.5vw, 0.75rem)`.
- **Mobile Impact:** Buttons difficult to tap accurately, causing user frustration and errors.

---

### Issue 5: Color Contrast Potential Issues
- **Component:** Multiple (Footer, Service Cards, Navigation)
- **Issue:** Light text colors (`var(--color-text-light)`) on light backgrounds (`var(--color-bg-mauve)`) may not meet 4.5:1 contrast ratio (WCAG 2.1 AA).
- **Fix:** Audit all text/background combinations using WebAIM Contrast Checker. Ensure:
  - Normal text: 4.5:1 minimum
  - Large text (18pt+): 3:1 minimum
- **Mobile Impact:** Text may be unreadable on mobile devices in bright sunlight or for users with visual impairments.

---

### Issue 6: Missing Skip Links
- **Component:** All Pages
- **Issue:** No "Skip to main content" link for keyboard users. Users must tab through entire navigation to reach content.
- **Fix:** Add skip link at top of page:
  ```jsx
  <a href="#main-content" className="skip-link">Skip to main content</a>
  ```
  Style as visually hidden until focused.
- **Mobile Impact:** Keyboard users waste time navigating through repeated navigation on every page.

---

### Issue 7: Heading Hierarchy Disruption
- **Component:** Home Page Sections
- **Issue:** Heading structure: `<h3>ABOUT ME</h3>` → `<h2>...</h2>` (skips H1). Similar pattern in Services and Why Choose sections.
- **Fix:** Ensure proper hierarchy: H1 → H2 → H3 (no skips). Add H1 to hero, then H2 for section titles.
- **Mobile Impact:** Screen reader users cannot navigate page structure effectively. Content hierarchy is unclear.

---

### Issue 8: Icon-Only Buttons Without Labels
- **Component:** Explore More Buttons (mobile)
- **Issue:** On mobile, "Explore More" text is hidden, leaving only arrow icon. Button has `aria-label` but visual context is lost.
- **Fix:** Keep text visible or ensure icon is universally understood. Consider adding tooltip or ensuring `aria-label` is descriptive.
- **Mobile Impact:** Users may not understand button purpose without text, reducing usability.

---

## 🧹 Global CSS / Utility Rules

### Rule 1: Image Sizing
- **Rule:** `img { max-width: 100%; height: auto; display: block; }` (globals.css line 119-122)
- **Status:** ✅ Good
- **Impact:** Images scale properly, no distortion. No changes needed.

---

### Rule 2: Touch Target Minimums
- **Rule:** `button, a, input[type="submit"], input[type="button"] { min-height: 44px; min-width: 44px; }` (globals.css line 126-133)
- **Status:** ✅ Good
- **Impact:** Ensures all interactive elements meet WCAG touch target minimum. However, some components may override this with `min-height: auto`.

---

### Rule 3: Form Input Font Size
- **Rule:** `input, textarea, select { font-size: 16px; }` (globals.css line 136-141)
- **Status:** ✅ Good (prevents iOS zoom)
- **Impact:** Prevents iOS Safari from zooming when focusing inputs. No changes needed.

---

### Rule 4: Body Font Size
- **Rule:** `body { font-size: 1.0625rem; }` (globals.css line 66)
- **Status:** ⚠️ Potential Issue
- **Impact:** Base font size is slightly larger than 16px (17px). May cause layout shifts. Consider using `1rem` (16px) for better consistency.
- **Recommendation:** Change to `font-size: 1rem;` unless design specifically requires larger base.

---

### Rule 5: HTML Font Size Scaling
- **Rule:** `@media (max-width: 639px) { html { font-size: clamp(14px, 3.5vw, 16px); } }` (globals.css line 23-27)
- **Status:** ⚠️ Potential Issue
- **Impact:** Font size scales with viewport, which may cause layout shifts. Better to keep base at 16px and scale individual elements.
- **Recommendation:** Remove viewport-based font scaling, keep `html { font-size: 16px; }` always.

---

### Rule 6: Box Sizing
- **Rule:** `* { box-sizing: border-box; }` (globals.css line 4)
- **Status:** ✅ Good
- **Impact:** Ensures padding/border included in width calculations. No changes needed.

---

## 📊 Screenshots & Proof

**Note:** Screenshots should be captured at the following breakpoints during implementation:

### Mobile Screenshots (Required)
- `screenshot-hero-mobile-375.png` - iPhone SE / Small Android
- `screenshot-hero-mobile-393.png` - iPhone 14 Pro
- `screenshot-hero-mobile-430.png` - iPhone 14 Pro Max
- `screenshot-services-mobile-375.png` - Services section on small mobile
- `screenshot-navigation-mobile-375.png` - Navigation menu on mobile
- `screenshot-booking-form-mobile-375.png` - Contact form on mobile

### Tablet Screenshots (Required)
- `screenshot-hero-tablet-768.png` - iPad Mini portrait
- `screenshot-services-tablet-768.png` - Services grid on tablet
- `screenshot-navigation-tablet-768.png` - Navigation on tablet
- `screenshot-booking-form-tablet-768.png` - Form layout on tablet
- `screenshot-about-tablet-1024.png` - About section on iPad portrait

### Desktop Screenshots (Optional)
- `screenshot-home-desktop-1440.png` - Full layout on standard desktop
- `screenshot-home-desktop-1920.png` - Full layout on large desktop

**Screenshot Capture Plan:**
1. Capture before/after for each major component fix
2. Test at exact breakpoints: 375px, 393px, 430px, 640px, 768px, 1024px, 1440px
3. Include both portrait and landscape orientations where relevant
4. Document any layout shifts or visual regressions

---

## 🛠 Recommended Next Steps

### Priority 1: Critical Fixes (Must Do)
1. **Standardize Breakpoints** — Replace all `480px`, `768px`, `968px` with `640px`/`1025px` system
   - Files: All CSS modules
   - Estimated time: 2-3 hours

2. **Fix Navigation Logo Text Cutoff** — Remove negative margins, use proper padding
   - Files: `Navigation.module.css`
   - Estimated time: 30 minutes

3. **Add H1 to Home Page** — Fix heading hierarchy violation
   - Files: `index.jsx`, `Home.module.css` (for visually-hidden class)
   - Estimated time: 15 minutes

4. **Add Form Labels** — Replace placeholders with proper `<label>` elements
   - Files: `BookingForm.jsx`
   - Estimated time: 30 minutes

5. **Fix Hero Section Margins** — Replace fixed negative margins with responsive units
   - Files: `Home.module.css`
   - Estimated time: 30 minutes

### Priority 2: High Priority (Should Do)
6. **Fix Services Grid Breakpoints** — Standardize to 640px/1025px
   - Files: `Home.module.css`
   - Estimated time: 30 minutes

7. **Add Focus Indicators** — Ensure all interactive elements have visible focus states
   - Files: `globals.css`, component CSS files
   - Estimated time: 1 hour

8. **Fix Service Card Image Sizing** — Replace fixed heights with `clamp()`
   - Files: `Home.module.css`
   - Estimated time: 30 minutes

9. **Color Contrast Audit** — Test and fix all text/background combinations
   - Files: All CSS files
   - Estimated time: 1-2 hours

### Priority 3: Medium Priority (Nice to Have)
10. **Add Skip Links** — Improve keyboard navigation
    - Files: `_app.jsx` or `_document.jsx`, `globals.css`
    - Estimated time: 30 minutes

11. **Remove !important from About Image** — Fix CSS specificity properly
    - Files: `Home.module.css`, `AnimatedImage.module.css`
    - Estimated time: 30 minutes

12. **Fix Footer Breakpoint** — Align with standardized system
    - Files: `Footer.module.css`
    - Estimated time: 15 minutes

13. **Optimize Hero Logo Sizing** — Use `clamp()` for better control
    - Files: `Home.module.css`
    - Estimated time: 15 minutes

### Testing & Documentation
14. **Capture Screenshots** — Document before/after at all breakpoints
    - Estimated time: 1-2 hours

15. **Run Accessibility Audit** — Lighthouse, WAVE, keyboard navigation test
    - Estimated time: 1 hour

16. **Create Documentation** — Document changes in component-specific files
    - Estimated time: 1 hour

**Total Estimated Time:** 10-12 hours

---

## 🗒 Pending Clarifications

Before implementing fixes, please confirm:

1. **Breakpoint Preferences:**
   - Should we use `640px`/`1025px` as standard, or do you have preferred breakpoints?
   - Are there specific devices you want to target (e.g., iPad Pro 12.9" at 1024px)?

2. **Logo Sizing:**
   - Should the hero logo have a minimum size? What's the smallest it should appear?
   - Should the navigation logo text shrink on very small screens, or maintain readability?

3. **Hero Section Behavior:**
   - Should the "Explore More" button anchor scroll (current) or route to a services page?
   - Should the hero section be full viewport height on mobile, or allow scrolling immediately?

4. **Service Cards:**
   - Should service card images maintain aspect ratio, or can they crop?
   - Preferred image aspect ratio for service cards?

5. **Form Layout:**
   - Should the booking form always stack on mobile, or show two columns on larger phones (e.g., >480px)?
   - Preferred form field width on tablets?

6. **Accessibility Priorities:**
   - Are there specific accessibility requirements beyond WCAG 2.1 AA?
   - Should we prioritize screen reader users, keyboard users, or both equally?

7. **Visual Design Constraints:**
   - Are there specific design mockups or style guides to follow?
   - Any brand guidelines for spacing, typography, or color usage?

---

## 📌 End of Findings

**Next Steps:**
1. Review this audit document
2. Answer pending clarifications
3. Approve priority order
4. Begin Phase 2 implementation

**Document Status:** Ready for Review  
**Saved Location:** `/mobile-audit-findings.md`  
**Do NOT commit to main without approval**

---

*Audit completed by Cursor on 2024-12-19*
