// app/privacy-policy/page.tsx

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-3xl mx-auto bg-white/30 text-black p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p className="mb-4">Effective date: October 13, 2025</p>
        <p className="mb-4">
          Welcome to <strong>Genrify.live</strong>. Your privacy is important to
          us. This Privacy Policy explains how we collect, use, and protect your
          information.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          Information We Collect
        </h2>
        <p className="mb-4">
          We may collect personal information such as your name, email address,
          and usage data when you visit our site.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          How We Use Information
        </h2>
        <p className="mb-4">
          We use the information to improve our website, respond to inquiries,
          and provide better services. We do not sell or share your personal
          information with third parties.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Cookies</h2>
        <p className="mb-4">
          Our website may use cookies to enhance your experience. You can
          disable cookies in your browser settings if you wish.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          Third-Party Services
        </h2>
        <p className="mb-4">
          We may use third-party services like Google Analytics, which may
          collect information about your usage of our website.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
