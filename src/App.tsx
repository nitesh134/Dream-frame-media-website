import { AnimatePresence } from "motion/react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { PageTransition } from "@/components/features/layout/PageTransition";
import { Navbar } from "@/components/features/navigation/Navbar";
import { Footer } from "@/components/features/footer/Footer";
import { LandingPage } from "@/components/features/landing/LandingPage";
import { AuthorityAuditPage } from "@/components/features/services/authority-audit/AuthorityAuditPage";
import { ShortFormEditingPage } from "@/components/features/services/short-form/ShortFormEditingPage";
import { YouTubeEditingPage } from "@/components/features/services/youtube/YouTubeEditingPage";
import { AIContentSystemPage } from "@/components/features/services/ai-content/AIContentSystemPage";
import { WorkGalleryPage } from "@/components/features/work/WorkGalleryPage";
import { CaseStudyPlaceholder } from "@/components/features/case-studies/CaseStudyPlaceholder";
import { TermsConditionsPage } from "@/components/features/legal/TermsConditionsPage";
import { PrivacyPolicyPage } from "@/components/features/legal/PrivacyPolicyPage";

function AppContent() {
  const location = useLocation();
  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] overflow-hidden text-black selection:bg-black selection:text-white">
      <Navbar />
      <main className="flex-1 w-full relative">
        <AnimatePresence
          mode="wait"
          initial={false}
          onExitComplete={() =>
            window.scrollTo({ top: 0, behavior: "instant" })
          }
        >
          {/* @ts-expect-error React Router types do not natively expose key */}
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <PageTransition>
                  <LandingPage />
                </PageTransition>
              }
            />
            <Route
              path="/services/authority-engine-audit"
              element={
                <PageTransition>
                  <AuthorityAuditPage />
                </PageTransition>
              }
            />
            <Route
              path="/services/content-os"
              element={<Navigate to="/services/authority-engine-audit" replace />}
            />
            <Route
              path="/services/founder-infrastructure"
              element={<Navigate to="/services/youtube-editing" replace />}
            />
            <Route
              path="/services/short-form-editing"
              element={
                <PageTransition>
                  <ShortFormEditingPage />
                </PageTransition>
              }
            />
            <Route
              path="/services/podcast-repurposing"
              element={<Navigate to="/services/youtube-editing" replace />}
            />
            <Route
              path="/services/ads-and-ugc-editing"
              element={<Navigate to="/services/short-form-editing" replace />}
            />
            <Route
              path="/services/youtube-editing"
              element={
                <PageTransition>
                  <YouTubeEditingPage />
                </PageTransition>
              }
            />
            <Route
              path="/services/ai-content-system"
              element={
                <PageTransition>
                  <AIContentSystemPage />
                </PageTransition>
              }
            />
            <Route
              path="/case-studies/zeniqua-bliss"
              element={
                <PageTransition>
                  <CaseStudyPlaceholder brand="Zeniqua Bliss" />
                </PageTransition>
              }
            />
            <Route
              path="/case-studies/leor"
              element={
                <PageTransition>
                  <CaseStudyPlaceholder brand="Leor" />
                </PageTransition>
              }
            />
            <Route
              path="/work/youtube"
              element={
                <PageTransition>
                  <WorkGalleryPage category="YouTube Content" />
                </PageTransition>
              }
            />
            <Route
              path="/work/short-form"
              element={
                <PageTransition>
                  <WorkGalleryPage category="Short-Form Content" />
                </PageTransition>
              }
            />
            <Route
              path="/work/ugc"
              element={
                <PageTransition>
                  <WorkGalleryPage category="UGC Style Videos" />
                </PageTransition>
              }
            />
            <Route
              path="/work/podcast"
              element={
                <PageTransition>
                  <WorkGalleryPage category="Podcast Content" />
                </PageTransition>
              }
            />
            <Route
              path="/terms-conditions"
              element={
                <PageTransition>
                  <TermsConditionsPage />
                </PageTransition>
              }
            />
            <Route
              path="/privacy-policy"
              element={
                <PageTransition>
                  <PrivacyPolicyPage />
                </PageTransition>
              }
            />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
