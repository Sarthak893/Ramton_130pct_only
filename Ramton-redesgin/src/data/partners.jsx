import React, { useState } from "react";

/* ── SVG Logo Components ─────────────────────── */

export const MicrosoftSVG = () => (
  <svg viewBox="0 0 23 23" className="h-10 w-10">
    <path fill="#f35325" d="M1 1h10v10H1z" />
    <path fill="#81bc06" d="M12 1h10v10H12z" />
    <path fill="#05a6f0" d="M1 12h10v10H1z" />
    <path fill="#ffba08" d="M12 12h10v10H12z" />
  </svg>
);

export const AdobeSVG = () => (
  <svg viewBox="0 0 40 40" className="h-9 w-9">
    <rect width="40" height="40" rx="4" fill="#FF0000"/>
    <path d="M21 7h11v26L21 7zM19 7H8v26L19 7zM14 22h12l-6 10z" fill="white"/>
  </svg>
);

export const DellSVG = () => (
  <svg viewBox="0 0 92 36" className="h-8 w-auto">
    <ellipse cx="46" cy="18" rx="44" ry="15" fill="none" stroke="#007DB8" strokeWidth="2.5"/>
    <text x="46" y="24" textAnchor="middle" fontFamily="Arial Black,Arial,sans-serif" fontWeight="900" fontSize="15" fill="#007DB8" letterSpacing="2">DELL</text>
  </svg>
);

export const HPSVG = () => (
  <svg viewBox="0 0 40 40" className="h-9 w-9">
    <circle cx="20" cy="20" r="18" fill="none" stroke="#0096D6" strokeWidth="2.5"/>
    <text x="20" y="27" textAnchor="middle" fontFamily="Arial,sans-serif" fontWeight="bold" fontSize="15" fill="#0096D6">hp</text>
  </svg>
);

export const CopilotSVG = () => (
  <svg viewBox="0 0 50 50" className="h-9 w-9">
    <rect width="50" height="50" rx="10" fill="#F0EAE0"/>
    <path d="M25 8 C15 8 10 16 13 23 C16 30 24 29 25 34" stroke="#4BAFF5" strokeWidth="6" fill="none" strokeLinecap="round"/>
    <path d="M25 8 C35 8 40 16 37 23 C34 30 26 29 25 34" stroke="#9B5CF5" strokeWidth="6" fill="none" strokeLinecap="round"/>
    <path d="M25 34 C24 39 17 43 19 45 C21 47 27 45 29 41 C31 37 29 34 25 34" stroke="#F5822A" strokeWidth="5" fill="none" strokeLinecap="round"/>
  </svg>
);

export const AWSSVG = () => (
  <svg viewBox="0 0 74 44" className="h-9 w-auto">
    <text x="8" y="29" fontFamily="Arial,sans-serif" fontWeight="bold" fontSize="25" fill="#232F3E">aws</text>
    <path d="M6 38q30 9 62 0" stroke="#FF9900" strokeWidth="2.8" fill="none" strokeLinecap="round"/>
    <polygon points="58,31 70,38 58,45" fill="#FF9900"/>
  </svg>
);

export const AzureSVG = () => (
  <svg viewBox="0 0 40 40" className="h-9 w-9">
    <path d="M23 4L10 31h8l3.5-7L30 37h8L23 4z" fill="#0078D4"/>
    <path d="M17 20l6-14 5 7z" fill="#50E6FF" opacity=".7"/>
  </svg>
);

export const GoogleCloudSVG = () => (
  <svg viewBox="0 0 52 34" className="h-8 w-auto">
    <path d="M26 5a13 13 0 0 0-13 13v1H8a7 7 0 0 0 0 14h36a7 7 0 0 0 0-14h-5v-1A13 13 0 0 0 26 5z" fill="#4285F4"/>
    <path d="M13 18A13 13 0 0 1 26 5" stroke="#EA4335" strokeWidth="3" fill="none" strokeLinecap="round"/>
    <path d="M39 18A13 13 0 0 0 26 5" stroke="#FBBC05" strokeWidth="3" fill="none" strokeLinecap="round"/>
    <circle cx="8"  cy="26" r="3" fill="#34A853"/>
    <circle cx="44" cy="26" r="3" fill="#EA4335"/>
  </svg>
);

export const OpenAISVG = () => (
  <svg viewBox="-1 -1 26 26" className="h-9 w-9">
    <rect x="-1" y="-1" width="26" height="26" rx="5" fill="#000"/>
    <path fill="white" d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"/>
  </svg>
);

export const VeeamSVG = () => (
  <svg viewBox="0 0 40 40" className="h-9 w-9">
    <rect width="40" height="40" rx="5" fill="#0D1B2E"/>
    <path d="M5 7L20 33L35 7L29 7L20 23L11 7Z" fill="#00C8FF"/>
    <path d="M5 7L20 33L11 7Z" fill="#7ED321" opacity=".85"/>
    <path d="M35 7L20 33L29 7Z" fill="#F5A623" opacity=".9"/>
  </svg>
);

export const SophosSVG = () => (
  <svg viewBox="0 0 40 40" className="h-9 w-9">
    <rect width="40" height="40" rx="9" fill="#0085D9"/>
    <path d="M20 11c-3.8 0-7 2.2-7 5.8 0 2.6 2 4.2 5.8 5 2.5.6 4 1.6 4 3 0 1.8-2 3.2-4.8 3.2-1.8 0-3.6-.8-5-2l-1.5 3c1.8 1.5 4.5 2.5 6.5 2.5 4.5 0 7.5-2.8 7.5-6.5 0-3-2-5-5.8-5.8-2.5-.6-4-1.5-4-2.7 0-1.5 1.8-2.5 4-2.5 1.5 0 3 .5 4.2 1.5l1.5-2.8C24.2 12 22.2 11 20 11z" fill="white"/>
  </svg>
);

export const FortinetSVG = () => (
  <svg viewBox="0 0 40 40" className="h-9 w-9">
    <rect x="3"  y="3"  width="15" height="15" rx="2.5" fill="#EE3124"/>
    <rect x="22" y="3"  width="15" height="15" rx="2.5" fill="#EE3124"/>
    <rect x="3"  y="22" width="15" height="15" rx="2.5" fill="#EE3124"/>
    <rect x="22" y="22" width="15" height="8"  rx="2.5" fill="#EE3124" opacity=".32"/>
  </svg>
);

export const AcronisSVG = () => (
  <svg viewBox="0 0 40 40" className="h-9 w-9">
    <circle cx="20" cy="20" r="18" fill="#00A3E0"/>
    <path d="M20 8l10 20H10L20 8zm0 7.5L15 26h10L20 15.5z" fill="white"/>
  </svg>
);

export const AppleSVG = () => (
  <svg viewBox="0 0 28 34" className="h-9 w-auto">
    <path d="M22.5 17.8c0-4.5 3.7-6.6 3.8-6.8-2.1-3-5.3-3.4-6.5-3.5-2.8-.3-5.5 1.6-6.9 1.6-1.4 0-3.6-1.6-5.9-1.5C3.8 7.7.9 9.5-.5 12.2c-3.1 5.5-.8 13.8 2.2 18.3 1.5 2.2 3.3 4.7 5.6 4.6 2.2-.1 3.1-1.5 5.8-1.5s3.5 1.5 5.8 1.5c2.4 0 3.9-2.2 5.4-4.4 1.7-2.5 2.4-4.9 2.5-5-.1-.1-4.8-1.9-4.8-7.9zM17.4 5c1.2-1.5 2-3.6 1.8-5.6-1.7.1-3.9 1.2-5.2 2.7-1.1 1.3-2.1 3.4-1.8 5.5 1.9.1 3.9-1 5.2-2.6z" fill="#3A3A3A"/>
  </svg>
);

export const LenovoSVG = () => (
  <svg viewBox="0 0 120 40" className="h-8 w-auto">
    <rect width="120" height="40" rx="3" fill="#1B2A5C"/>
    <text x="60" y="28" textAnchor="middle" fontFamily="Arial,sans-serif" fontWeight="bold" fontSize="22" fill="white" fontStyle="italic">lenovo</text>
  </svg>
);

export const PaloAltoSVG = () => (
  <svg viewBox="0 0 40 40" className="h-9 w-9">
    <rect width="40" height="40" rx="6" fill="#E8620A"/>
    <path d="M7 32V22l6.5-12 6.5 12 6.5-12 6.5 12v10" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const AutodeskSVG = () => (
  <svg viewBox="0 0 120 40" className="h-8 w-auto">
    <rect width="120" height="40" rx="3" fill="#0D0D0D"/>
    <text x="60" y="26" textAnchor="middle" fontFamily="Arial,sans-serif" fontWeight="bold" fontSize="15" fill="white" letterSpacing="1.5">AUTODESK</text>
  </svg>
);

export const ZoomSVG = () => (
  <svg viewBox="0 0 90 36" className="h-8 w-auto">
    <rect width="90" height="36" rx="8" fill="#2D8CFF"/>
    <text x="45" y="25" textAnchor="middle" fontFamily="Arial,sans-serif" fontWeight="bold" fontSize="18" fill="white">zoom</text>
  </svg>
);

export const LogitechSVG = () => (
  <svg viewBox="0 0 110 40" className="h-8 w-auto">
    <rect width="110" height="40" rx="6" fill="#E21B1B"/>
    <text x="55" y="27" textAnchor="middle" fontFamily="Arial,sans-serif" fontWeight="bold" fontSize="19" fill="white">logitech</text>
  </svg>
);

export const WebexSVG = () => (
  <svg viewBox="0 0 82 30" className="h-7 w-auto">
    <rect width="82" height="30" rx="6" fill="#1B1B1B"/>
    <text x="41" y="21" textAnchor="middle" fontFamily="Arial,sans-serif" fontWeight="bold" fontSize="15" fill="white">webex</text>
  </svg>
);

export const Office365SVG = () => (
  <svg viewBox="0 0 40 40" className="h-9 w-9">
    <rect width="40" height="40" rx="5" fill="#D83B01"/>
    <path d="M6 13l14-5v26L6 30z" fill="#FF8C00" opacity=".9"/>
    <text x="25" y="30" fontFamily="Arial,sans-serif" fontWeight="bold" fontSize="20" fill="white" textAnchor="middle">W</text>
  </svg>
);

export const CiscoSVG = () => (
  <svg viewBox="0 0 88 38" className="h-8 w-auto">
    <rect x="0"  y="14" width="9" height="10" rx="2" fill="#1BA0D7"/>
    <rect x="14" y="8"  width="9" height="22" rx="2" fill="#1BA0D7"/>
    <rect x="28" y="2"  width="9" height="34" rx="2" fill="#1BA0D7"/>
    <rect x="42" y="8"  width="9" height="22" rx="2" fill="#1BA0D7"/>
    <rect x="56" y="14" width="9" height="10" rx="2" fill="#1BA0D7"/>
    <text x="32" y="38" textAnchor="middle" fontFamily="Arial,sans-serif" fontWeight="bold" fontSize="8" fill="#1BA0D7" letterSpacing="3">CISCO</text>
  </svg>
);

export const WDSVG = () => (
  <svg viewBox="0 0 58 28" className="h-7 w-auto">
    <text x="2" y="25" fontFamily="Arial Black,Arial,sans-serif" fontWeight="900" fontSize="25" fill="#003087">WD</text>
  </svg>
);

export const SeagateSVG = () => (
  <svg viewBox="0 0 40 40" className="h-9 w-9">
    <circle cx="20" cy="20" r="18" fill="#00A651"/>
    <path d="M20 11c-3.3 0-6.5 2-6.5 5.5 0 2.6 2 4.2 5.8 5 2.5.6 4 1.6 4 3 0 2-2.2 3.5-5 3.5-2 0-4-.8-5.3-2l-1.5 2.8C13 31 16 32 20 32c4.3 0 7.5-2.6 7.5-6.3 0-3-2-5-5.8-5.8-2.5-.6-4-1.5-4-2.7 0-1.5 1.8-2.5 4.3-2.5 1.5 0 3 .5 4.5 1.5l1.8-3C26.2 12 23.2 11 20 11z" fill="white"/>
  </svg>
);

export const TSplusSVG = () => (
  <svg viewBox="0 0 130 44" className="h-9 w-auto">
    <text x="5" y="28" fontFamily="Arial,sans-serif" fontWeight="bold" fontSize="28" fill="#F97316">TSplus</text>
    <text x="5" y="40" fontFamily="Arial,sans-serif" fontSize="9" fill="#888" letterSpacing="0.5">REMOTE ACCESS TECH.</text>
  </svg>
);

export const DLinkSVG = () => (
  <svg viewBox="0 0 130 40" className="h-8 w-auto">
    <rect width="130" height="40" rx="3" fill="#009CB4"/>
    <text x="65" y="27" textAnchor="middle" fontFamily="Arial,sans-serif" fontWeight="bold" fontSize="22" fill="white" letterSpacing="-0.5">D-Link</text>
  </svg>
);

export const QuickHealSVG = () => (
  <svg viewBox="0 0 140 48" className="h-9 w-auto">
    <rect width="140" height="48" rx="8" fill="#E8521A"/>
    <text x="70" y="24" textAnchor="middle" fontFamily="Arial,sans-serif" fontWeight="bold" fontSize="20" fill="white">Quick Heal</text>
    <text x="70" y="38" textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="10" fill="white" opacity=".9">Security Simplified</text>
  </svg>
);

export const SymantecSVG = () => (
  <svg viewBox="0 0 150 40" className="h-8 w-auto">
    <rect width="150" height="40" rx="4" fill="#111111"/>
    <circle cx="22" cy="20" r="14" fill="#FFD700"/>
    <path d="M15 20l5.5 5.5L30 12" stroke="#111" strokeWidth="2.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    <text x="43" y="26" fontFamily="Arial,sans-serif" fontWeight="bold" fontSize="17" fill="white">Symantec.</text>
  </svg>
);

export const VeritasSVG = () => (
  <svg viewBox="0 0 120 40" className="h-8 w-auto">
    <rect width="120" height="40" rx="4" fill="#C41A17"/>
    <text x="60" y="27" textAnchor="middle" fontFamily="Arial Black,Arial,sans-serif" fontWeight="900" fontSize="21" fill="white" letterSpacing="1">VERITAS</text>
  </svg>
);

export const ArubaSVG = () => (
  <svg viewBox="0 0 110 46" className="h-9 w-auto">
    <rect width="110" height="46" rx="5" fill="#EF6520"/>
    <text x="55" y="22" textAnchor="middle" fontFamily="Arial,sans-serif" fontWeight="bold" fontSize="21" fill="white">aruba</text>
    <text x="55" y="33" textAnchor="middle" fontFamily="Arial,sans-serif" fontWeight="bold" fontSize="10" fill="white" letterSpacing="1.5">NETWORKS</text>
    <text x="55" y="42" textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="7" fill="white" opacity=".85">an HP company</text>
  </svg>
);

/* ── PartnerLogo render ──────────────────────── */

export function PartnerLogo({ name, logo, Logo, mark }) {
  const [failed, setFailed] = useState(false);
  if (Logo) return <Logo />;
  if (mark) return (
    <span className="text-[20px] font-extrabold tracking-[-0.04em] text-slate-800">{mark}</span>
  );
  if (failed) return (
    <span className="text-[13px] font-bold tracking-[-0.02em] text-slate-800">{name}</span>
  );
  return (
    <img src={logo} alt={name} className="h-10 w-auto max-w-[125px] object-contain" onError={() => setFailed(true)}/>
  );
}

/* ── Partners array ───────────────────────────── */

export const partners = [
  { name: "Microsoft",       subtitle: "Solutions Partner",    Logo: MicrosoftSVG },
  { name: "Adobe",           subtitle: "Gold Reseller",        Logo: AdobeSVG },
  { name: "Dell",            subtitle: "Technologies",         Logo: DellSVG },
  { name: "HP",              subtitle: "Hardware Partner",     Logo: HPSVG },
  { name: "Copilot",         subtitle: "Microsoft AI",         Logo: CopilotSVG },
  { name: "AWS",             subtitle: "Amazon Web Services",  Logo: AWSSVG },
  { name: "Azure",           subtitle: "Microsoft Cloud",      Logo: AzureSVG },
  { name: "Google Cloud",    subtitle: "Cloud Platform",       Logo: GoogleCloudSVG },
  { name: "ChatGPT",         subtitle: "OpenAI",               Logo: OpenAISVG },
  { name: "Veeam",           subtitle: "Data Protection",      Logo: VeeamSVG },
  { name: "Sophos",          subtitle: "Cybersecurity",        Logo: SophosSVG },
  { name: "Fortinet",        subtitle: "Network Security",     Logo: FortinetSVG },
  { name: "Acronis",         subtitle: "Data Backup",          Logo: AcronisSVG },
  { name: "TSPlus",          subtitle: "Remote Access Tech",   Logo: TSplusSVG },
  { name: "D-Link",          subtitle: "Networking",           Logo: DLinkSVG },
  { name: "Apple",           subtitle: "Authorized Partner",   Logo: AppleSVG },
  { name: "Lenovo",          subtitle: "Business Partner",     Logo: LenovoSVG },
  { name: "Quick Heal",      subtitle: "Security Simplified",  Logo: QuickHealSVG },
  { name: "Palo Alto",       subtitle: "Networks",             Logo: PaloAltoSVG },
  { name: "Autodesk",        subtitle: "Design Software",      Logo: AutodeskSVG },
  { name: "Symantec",        subtitle: "Security",             Logo: SymantecSVG },
  { name: "Zoom",            subtitle: "Video Communications", Logo: ZoomSVG },
  { name: "Logitech",        subtitle: "Peripherals",          Logo: LogitechSVG },
  { name: "Webex",           subtitle: "by Cisco",             Logo: WebexSVG },
  { name: "Office 365",      subtitle: "Microsoft",            Logo: Office365SVG },
  { name: "Cisco",           subtitle: "Networking",           Logo: CiscoSVG },
  { name: "Veritas",         subtitle: "Data Management",      Logo: VeritasSVG },
  { name: "Western Digital", subtitle: "Storage Solutions",    Logo: WDSVG },
  { name: "Seagate",         subtitle: "Storage",              Logo: SeagateSVG },
  { name: "Aruba",           subtitle: "Networks (HP)",        Logo: ArubaSVG },
];
