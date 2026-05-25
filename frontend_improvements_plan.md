# LWP Frontend & Design Improvements Plan

This document outlines the proposed updates to improve the functionality, visual polish, and mobile user experience of the LWP EdTech platform.

---

## 1. 🐛 Fix YouTube Shorts Detection (Critical Bug)

### Problem
In the YouTube RSS API routes (`/api/youtube/route.ts` and `/api/youtube/ganit/route.ts`), the code checks if a video is a Short using:
```typescript
const isShort = link.includes("/shorts/");
```
Because YouTube's RSS feeds always return standard watch URLs (like `https://www.youtube.com/watch?v=VIDEO_ID`) for both regular videos and shorts, this condition is always `false`. Consequently:
1. The **YouTube Shorts** carousel remains completely empty.
2. Shorts are rendered as standard aspect-ratio videos, leading to ugly black bars on the sides.

### Proposed Solution
Use a hybrid detection strategy:
1. **Title Check**: Check if the video title contains `#shorts` or `#Shorts`.
2. **HEAD Check (Fast & Cached)**: Perform a quick HTTP `HEAD` request to `https://www.youtube.com/shorts/VIDEO_ID` with redirect manual disabled.
   - If the video is a Short, YouTube returns `200 OK`.
   - If it is a normal video, it returns a `302/303` redirect.
   - We will cache this check since a video's type never changes.

```typescript
// Example Implementation in route handlers:
let isShort = title.toLowerCase().includes("#shorts");

if (!isShort) {
  try {
    const checkRes = await fetch(`https://www.youtube.com/shorts/${id}`, {
      method: "HEAD",
      redirect: "manual",
      next: { revalidate: 86400 } // Cache results for 24 hours
    });
    if (checkRes.status === 200) {
      isShort = true;
    }
  } catch (error) {
    // Fallback to title check on error
  }
}
```

---

## 2. 📂 Subject Pages Upgrade (Finance, Sanskrit, Hindi)

### Problem
The Finance, Sanskrit, and Hindi pages are currently blank "Skeleton" pages stating "Content coming soon". However, your main YouTube channel already hosts content for these subjects, and they can be filtered using the existing `CATEGORY_MAP`.

### Proposed Solution
Create a reusable, dynamic component (e.g., `SubjectPageContent.tsx`) that:
1. Fetches all videos from `/api/youtube`.
2. Filters them based on the subject's keywords (e.g., `sanskrit`/`shloka` for Sanskrit, `finance`/`mutual`/`stock` for Finance, and `hindi`/`kavita` for Hindi).
3. Renders them using a beautiful subject-colored layout (Green for Finance, Purple for Sanskrit, Blue for Hindi) complete with Video and Shorts carousels, matching the experience of the **Ganit** page.

---

## 3. 💳 Mobile UPI Deep Linking (Payment Page)

### Problem
When users visit the [Payment Page](file:///d:/programming/repo/lwp/src/app/payment/PaymentContent.tsx) on their mobile phones, they cannot scan the QR code because it is displayed on their screen. Copying the UPI ID and manually opening a banking app is a high-friction experience.

### Proposed Solution
Add a premium, responsive **"Pay via UPI App"** button that only displays on mobile/tablet devices.
* Clicking this button opens a deep link:
  `upi://pay?pa=Lwp@kotak&pn=PRADEEP%20KUMAR%20MISRA&tn=Support%20LWP`
* This automatically triggers a prompt on the user's phone to open their preferred UPI app (GPay, PhonePe, Paytm, BHIM, etc.) with your payee VPA and Name pre-filled.

---

## 4. ✨ UI/UX & Design Polish

### Scroll Progress Bar
Add a micro-interaction indicator at the top of the viewport showing reading progress as the user scrolls.

### Hover Animations
Enhance the card designs:
* Add a rotating gradient outline animation around the play icon overlay when hover starts.
* Implement smooth fade-in and scale properties on lazy-loaded thumbnails.

---

## Next Steps
When you wake up and review this plan, let me know which features you would like to implement. We will start the coding work immediately!
