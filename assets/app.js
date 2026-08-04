const releaseDate = 'May 24, 2026';
const docsRoot = 'https://docs.smartpt.co.il/';
const docsImage = `${docsRoot}assets/smartpt-og.svg`;
const youtubeUrl = 'https://youtube.com/@smartpt-1ai?si=c3AVjfFoWpoEmE9I';

let navGroups = [
  {
    title: 'Start',
    items: [
      ['overview', 'Documentation home'],
      ['getting-started', 'Getting started'],
      ['requirements', 'Requirements'],
      ['installation', 'Installation'],
      ['licensing', 'Licensing'],
      ['downloads', 'Downloads']
    ]
  },
  {
    title: 'Architecture',
    items: [
      ['deployment-overview', 'Deployment overview'],
      ['active-directory-permissions', 'Active Directory permissions']
    ]
  },
  {
    title: 'SmartPT Console',
    items: [
      ['core-getting-started', 'Getting started'],
      ['core-portal-overview', 'Portal overview'],
      ['core-license-status', 'License and product status'],
      ['core-access-model', 'Access model'],
      ['core-settings-overview', 'Settings overview'],
      ['core-shared-2fa-reset', 'Shared 2FA reset']
    ]
  },
  {
    title: 'AD Control',
    items: [
      ['ad-control-getting-started', 'Getting started'],
      ['ad-control-access-model', 'Access model'],
      ['ad-control-portal-overview', 'Portal overview'],
      ['ad-control-settings-overview', 'Settings overview'],
      ['ad-control-protected-identities', 'Protected users and groups'],
      ['ad-control-operator-console', 'Operator console'],
      ['ad-control-password-reset', 'Password reset'],
      ['ad-control-account-unlock', 'Account unlock'],
      ['ad-control-profile-updates', 'Profile updates'],
      ['ad-control-group-management', 'Group management'],
      ['ad-control-troubleshooting', 'Troubleshooting'],
      ['ad-control-security-model', 'Security model']
    ]
  },
  {
    title: 'JIT Access',
    items: [
      ['jit-overview', 'Getting started'],
      ['jit-access-model', 'Access model'],
      ['jit-portal-overview', 'Portal overview'],
      ['jit-settings-overview', 'Settings overview'],
      ['jit-roles', 'Create roles'],
      ['jit-assignments', 'Create assignments'],
      ['jit-assignment-types', 'Assignment types'],
      ['jit-eligible-otp', 'Eligible OTP'],
      ['jit-sessions-revoke', 'Active sessions'],
      ['jit-notifications-session-policy', 'Notifications and policy'],
      ['jit-troubleshooting', 'Troubleshooting']
    ]
  },
  {
    title: 'Operations',
    items: [
      ['security-model', 'Shared security model'],
      ['audit', 'Audit records'],
      ['troubleshooting', 'Troubleshooting'],
      ['release-notes', 'Release notes']
    ]
  },
  {
    title: 'Policies',
    items: [
      ['privacy', 'Privacy'],
      ['terms', 'Terms'],
      ['cookie-policy', 'Cookie policy'],
      ['accessibility', 'Accessibility']
    ]
  }
];

let pageMeta = {
  overview: 'SmartPT documentation for installing and operating SmartPT Core, JIT Access, and AD Control in on-prem Active Directory environments.',
  'getting-started': 'Follow the recommended order for installing SmartPT Core, activating licensing, and configuring AD Control and JIT Access.',
  requirements: 'SmartPT requirements for Windows Server, IIS, .NET hosting, Local Active Directory, service identity, network access, SMTP, audit storage, browsers, and staging validation.',
  'deployment-overview': 'SmartPT deployment overview for customer-controlled on-prem portals, service authorization, Active Directory actions, audit logs, and operator access boundaries.',
  'active-directory-permissions': 'Active Directory permission guidance for SmartPT service identities, delegated AD Control actions, JIT group membership management, Tier 0 protection, and staging validation.',
  installation: 'Install SmartPT Core on IIS with Local Active Directory integration, product portals, SmartPT services, service identity, and activation guidance.',
  licensing: 'SmartPT Core licensing, server-bound activation, license validation behavior, subscription states, and add-on user unit guidance.',
  downloads: 'Download the SmartPT Core setup executable and review installation validation guidance.',
  'core-getting-started': 'Getting started with SmartPT Console, the on-prem portal for product status, Core license, shared 2FA, RBAC, and product entry.',
  'core-portal-overview': 'SmartPT Console portal overview covering Overview, product status, product updates, Recent Activity, and administrator-only Settings.',
  'core-license-status': 'SmartPT Console license, product status, license validation, subscription state, and fail-closed access behavior.',
  'core-access-model': 'SmartPT Console access model covering Domain Admin fallback, administrative groups, viewer groups, and session policy.',
  'core-settings-overview': 'SmartPT Console Settings overview for root RBAC, shared 2FA reset, license visibility, license status, and subscription action.',
  'core-shared-2fa-reset': 'Shared 2FA and reset MFA guide for searching a user, reviewing enrollment state, and forcing re-enrollment.',
  'jit-overview': 'Getting started with JIT Access, standing privilege risk, temporary Active Directory group membership, roles, assignments, and supported access types.',
  'jit-access-model': 'JIT Access model covering product license assignment, SmartPT RBAC roles, JIT roles, and JIT assignments.',
  'jit-portal-overview': 'JIT portal overview covering dashboard status cards, quick actions, JIT Access overview, roles, assignments, active sessions, and settings.',
  'jit-settings-overview': 'JIT settings overview covering licensed users, RBAC role assignments, product settings, notifications, SMTP, and session policy.',
  'jit-roles': 'Create JIT roles that map to existing Active Directory groups and define allowed access methods, OTP, and duration limits.',
  'jit-assignments': 'Create JIT assignments that connect users to roles for eligible, scheduled, or manual privileged access.',
  'jit-assignment-types': 'Assignment type guide for choosing Manual, Scheduled, or Eligible OTP access in JIT Access.',
  'jit-eligible-otp': 'Eligible OTP self-service guide covering administrator setup, user activation, WhatsApp/mobile OTP verification, active sessions, and automatic removal.',
  'jit-sessions-revoke': 'Operations guide for monitoring active JIT sessions, extending approved access when needed, and revoking access before expiration.',
  'jit-notifications-session-policy': 'JIT Settings guide for notification recipients, session event emails, session policy, SMTP, and group overrides.',
  'jit-troubleshooting': 'JIT troubleshooting guide for portal access, missing assignments, OTP limits, revoke behavior, SMTP notifications, service identity, and product health checks.',
  'jit-admin': 'JIT administrator guide covering roles, AD group mapping, assignments, active sessions, emergency revocation, and audit review.',
  'jit-user': 'JIT user guide for eligible self-service access with OTP verification from Active Directory-sourced contact details.',
  'jit-settings': 'JIT roles and assignments guide covering role fields, access modes, schedules, OTP settings, duration limits, and enforcement behavior.',
  'jit-security': 'JIT security model for SmartPT authorization, AD group enforcement, OTP storage, session reconciliation, and audit controls.',
  'ad-control-overview': 'AD Control documentation for tiered Active Directory support, Tier 0 protection, protected users and groups, password reset, account unlock, and OTP verification.',
  'ad-control-getting-started': 'Getting started with AD Control, tiered helpdesk operations, protected identities, OTP verification, and customer onboarding order.',
  'ad-control-access-model': 'AD Control access model covering operator licenses, role assignments, settings access, Tier 1, Tier 2, and target users.',
  'ad-control-portal-overview': 'AD Control portal overview covering Dashboard, operator console, Settings, product links, and role-based visibility.',
  'ad-control-settings-overview': 'AD Control settings overview covering access assignments, protected identities, OTP, password and unlock options, SMTP, and session policy.',
  'ad-control-protected-identities': 'Protected users and groups in AD Control, including Tier 0 protection and operator search blocking.',
  'ad-control-operator-console': 'AD Control operator console guide for user search, selected user details, and role-based actions.',
  'ad-control-password-reset': 'AD Control password reset guide covering direct reset, OTP-verified reset, generated passwords shown once, and audit records.',
  'ad-control-account-unlock': 'AD Control account unlock guide covering direct unlock and OTP-verified unlock.',
  'ad-control-profile-updates': 'AD Control Tier 2 profile update guide for supported Active Directory user attributes.',
  'ad-control-group-management': 'AD Control controlled group management guide for Tier 2 direct and nested group membership changes.',
  'ad-control-troubleshooting': 'AD Control troubleshooting for access assignment, protected search, OTP delivery, SMTP, IIS, and service issues.',
  'ad-control-security-model': 'AD Control security model for license and RBAC enforcement, protected identities, OTP handling, and service audit controls.',
  'ad-control-admin': 'AD Control administrator guide covering license assignments, operator roles, settings access, protected users, protected groups, and support group configuration.',
  'ad-control-operator': 'AD Control operator guide for searching users, resetting passwords, unlocking accounts, updating profile attributes, and controlled group management.',
  'ad-control-settings': 'AD Control settings reference for password options, unlock options, OTP delivery, password delivery, protected identities, notifications, SMTP, and session policy.',
  'ad-control-security': 'AD Control security model for tier boundaries, protected identity exclusion, OTP-verified reset and unlock actions, role enforcement, and audit records.',
  'security-model': 'Shared SmartPT security model for on-prem operation, Active Directory identity data, service authorization, Core license validation, shared MFA, and audit records.',
  audit: 'Review audit records for SmartPT Core, JIT Access, and AD Control without exposing passwords, OTP codes, or other secrets.',
  troubleshooting: 'Troubleshooting guide for SmartPT access assignment, sessions, OTP delivery, protected users, JIT removal, and license validation.',
  'release-notes': 'Review the SmartPT Core, AD Control, and JIT Access customer documentation included in the current documentation release.',
  privacy: 'SmartPT documentation site privacy notice covering static docs use, downloads, external links, and customer-controlled product data.',
  terms: 'SmartPT documentation site terms for using customer guides, downloads, release materials, and product documentation.',
  'cookie-policy': 'SmartPT documentation cookie policy explaining current cookie usage and future consent handling for docs.smartpt.co.il.',
  accessibility: 'SmartPT documentation accessibility statement for WCAG 2.1 AA, WCAG 2.2 AA, and Israeli Standard 5568 readiness.'
};

Object.assign(pageMeta, window.smartptMetaOverrides || {});

let pages = {
  'overview': {
    title: 'SmartPT Customer Documentation',
    eyebrow: 'Customer docs',
    lead: 'Guides for deploying and operating SmartPT Core, JIT Access, and AD Control in Local Active Directory environments.',
    body: `
      <div class="hero">
        <div class="hero-grid">
          <div>
            <div class="eyebrow">Customer docs</div>
            <h1>SmartPT Customer Documentation</h1>
            <p>Install, configure, and operate SmartPT Core, AD Control, and JIT Access in on-prem Active Directory environments.</p>
            <div class="page-actions">
              <a class="button primary" href="#requirements">Review Requirements</a>
              <a class="button secondary" href="#installation">Install SmartPT Core</a>
              <a class="button secondary" href="#ad-control-getting-started">Explore AD Control</a>
              <a class="button secondary" href="#jit-overview">Explore JIT</a>
              <a class="button secondary" href="${youtubeUrl}" target="_blank" rel="noopener noreferrer">Watch videos</a>
            </div>
          </div>
          <div class="hero-card">
            <div class="eyebrow">Operating model</div>
            <div class="hero-flow" aria-label="SmartPT operating model">
              <div class="flow-node"><b>Risk</b><span>Permanent admin access, unsafe password resets, and uncontrolled AD changes.</span></div>
              <div class="arrow">-></div>
              <div class="flow-node"><b>SmartPT</b><span>Use the portal to verify users, assign roles, limit access, and block protected identities.</span></div>
              <div class="arrow">-></div>
              <div class="flow-node"><b>Outcome</b><span>Operators perform approved actions without broad direct AD permissions.</span></div>
            </div>
          </div>
        </div>
      </div>
      <section class="doc">
        <div class="eyebrow">Products</div>
        <h2>What this documentation covers</h2>
        <div class="cards">
          <article class="card">
            <h3>SmartPT Core</h3>
            <p>The on-prem portal for activation, licensing, shared MFA recovery, and product entry.</p>
          </article>
          <article class="card">
            <h3>JIT Access</h3>
            <p>Temporary Local Active Directory group membership for approved roles. Supports manual, scheduled, and Eligible OTP access.</p>
          </article>
          <article class="card">
            <h3>AD Control</h3>
            <p>Tiered Helpdesk actions for password reset, account unlock, approved profile updates, controlled group changes, and protected identity blocking.</p>
          </article>
        </div>
        ${architectureDiagram()}
      </section>
    `
  },
  'getting-started': page('Getting Started', 'Start here', `
    <p class="lead">Start with platform readiness, then configure licensing, application access, product settings, and operator access.</p>
    <ol>
      <li>Prepare a Windows server joined to the customer Active Directory domain.</li>
      <li>Install SmartPT Core and product portals on IIS.</li>
      <li>Activate the license serial and confirm the license state is active.</li>
      <li>Confirm service health, AD connectivity, PowerShell execution, and file-system access.</li>
      <li>Configure AD Control access assignments and settings.</li>
      <li>Configure JIT roles, assignments, and active-session policy.</li>
      <li>Review audit events and operational troubleshooting guidance.</li>
    </ol>
    <div class="callout">Recommended order: install Core, activate licensing, configure AD Control, configure JIT, then test with a non-production AD user and non-production AD group.</div>
  `),
  'requirements': page('Requirements', 'Start here', `
    <p class="lead">Confirm these requirements before installing SmartPT Core, AD Control, or JIT Access in a customer Active Directory environment.</p>
    <h2>Server and hosting</h2>
    <div class="table-wrap"><table><thead><tr><th>Area</th><th>Requirement</th></tr></thead><tbody>
      <tr><td>Windows Server</td><td>Use Windows Server 2019 or newer. The installer blocks older server releases.</td></tr>
      <tr><td>Administrator elevation</td><td>Run <code>Setup.exe</code> as Administrator on the target SmartPT server.</td></tr>
      <tr><td>IIS</td><td>The wizard installs and validates the required IIS role services, Windows authentication, management tools, and scripting tools.</td></tr>
      <tr><td>.NET hosting</td><td>The wizard validates .NET 8 SDK, .NET 8 runtime, and ASP.NET Core Hosting Bundle. Missing components are installed from the bundled installer assets.</td></tr>
      <tr><td>Domain joined server</td><td>The server must be joined to the Local Active Directory domain it will manage.</td></tr>
      <tr><td>Browser support</td><td>Use a current enterprise browser such as Microsoft Edge, Chrome, or another modern Chromium-based browser.</td></tr>
    </tbody></table></div>
    <h2>Directory and identity</h2>
    <ul>
      <li>SmartPT is designed for Local Active Directory environments.</li>
      <li>The user running setup must have the directory rights required to prepare the SmartPT installation.</li>
      <li>The wizard creates or reuses a SmartPT gMSA for approved Active Directory actions, authorizes the server to retrieve its password, and validates the account locally.</li>
      <li>SmartPT uses the configured service identity for approved Active Directory actions.</li>
      <li>After installation, delegate only the AD permissions required by the enabled customer policy.</li>
      <li>Do not use broad Domain Admin rights for normal service operation.</li>
    </ul>
    <h2>Network access</h2>
    <ul>
      <li>Operators must be able to reach the SmartPT portals from the customer network.</li>
      <li>The SmartPT server must be able to reach domain controllers for directory lookup and delegated AD actions.</li>
      <li>The setup wizard checks reachability to the SmartPT activation service before installation.</li>
      <li>License activation and validation require outbound access to the SmartPT activation endpoint used for the customer deployment.</li>
    </ul>
    <h2>SMTP and OTP</h2>
    <ul>
      <li>Configure SMTP when email delivery is used for OTP, notifications, or temporary password delivery.</li>
      <li>Confirm AD mail and mobile attributes before enabling OTP-verified password reset, account unlock, or Eligible OTP activation.</li>
      <li>Mobile OTP requires a phone number in the Active Directory <code>mobile</code> attribute. The number can include <code>+</code>, but it is not required. Israel numbers can be stored without <code>972</code>; other countries should include the country prefix, for example <code>62</code> or <code>+62</code>.</li>
      <li>Validate firewall rules and MFA requirements on the SMTP path before production use.</li>
    </ul>
    <h2>Audit log storage</h2>
    <ul>
      <li>Store audit logs on reliable local or managed storage with restricted administrator access.</li>
      <li>Ensure enough capacity for password reset, account unlock, JIT assignment, activation, revoke, and settings events.</li>
      <li>Do not store OTP codes, generated passwords, SMTP secrets, or authenticator secrets in audit logs.</li>
    </ul>
    <h2>Staging validation</h2>
    <div class="callout warning">Validate SmartPT in staging before production. Test with non-production users, non-production AD groups, delegated permissions, SMTP delivery, OTP limits, audit records, and session expiration.</div>
  `),
  'deployment-overview': page('Deployment Overview', 'Architecture', `
    <p class="lead">SmartPT runs inside the customer environment. The portals are customer-facing administrative portals, and SmartPT services enforce authorization before any directory action is performed.</p>
    ${architectureDiagram()}
    <h2>Deployment model</h2>
    <ul>
      <li>SmartPT Core, AD Control, JIT Access, and SmartPT services run on customer-controlled infrastructure.</li>
      <li>Operators access SmartPT portals rather than connecting directly to Active Directory management tools.</li>
      <li>Product portals rely on SmartPT authorization, license state, role assignment, and customer policy.</li>
      <li>Operators do not need direct AD permissions for supported actions.</li>
    </ul>
    <h2>Authorization boundary</h2>
    <p>The browser shows only the actions available to the signed-in operator, but SmartPT validates each sensitive action before it changes Active Directory.</p>
    <h2>Active Directory actions</h2>
    <ul>
      <li>AD Control performs only the reset, unlock, profile, and group actions enabled by customer policy.</li>
      <li>JIT Access adds the user to the approved AD group for the approved time window, then removes the membership when the session ends.</li>
      <li>SmartPT Core controls product entry, license state, and shared MFA recovery.</li>
    </ul>
    <h2>Audit model</h2>
    <p>Sensitive actions are written to audit logs with actor, target, action, result, timestamp, and audit detail. Review audit records after settings changes, Helpdesk actions, JIT activation, session extension, and revocation.</p>
  `),
  'active-directory-permissions': page('Active Directory Permissions', 'Architecture', `
    <p class="lead">SmartPT should use delegated Active Directory permissions instead of broad Domain Admin rights for the service identity.</p>
    <h2>Permission principles</h2>
    <ul>
      <li>Do not grant Domain Admin to the service identity for normal operation.</li>
      <li>Delegate only the actions required by the enabled SmartPT policy.</li>
      <li>Separate AD Control and JIT permissions where possible.</li>
      <li>Protect Tier 0 users, privileged groups, and protected groups before broad operator rollout.</li>
      <li>Validate permissions in staging before production.</li>
    </ul>
    <h2>JIT Access permissions</h2>
    <p>JIT Access requires controlled group membership management for the AD groups mapped to JIT roles. The service identity should be able to add and remove approved users only from the groups SmartPT manages.</p>
    <h2>AD Control permissions</h2>
    <p>AD Control requires only the AD actions enabled by customer policy. For example, if Tier 1 is allowed only to reset passwords and unlock accounts, delegate only those actions for the intended user scope.</p>
    <div class="table-wrap"><table><thead><tr><th>Feature</th><th>Delegation guidance</th></tr></thead><tbody>
      <tr><td>Password reset</td><td>Delegate password reset only for supported standard users.</td></tr>
      <tr><td>Account unlock</td><td>Delegate unlock only for supported standard users.</td></tr>
      <tr><td>Profile update</td><td>Delegate write access only to approved attributes such as phone, mobile, title, department, company, office, or description.</td></tr>
      <tr><td>Group management</td><td>Delegate add/remove rights only for approved support groups and never for protected groups.</td></tr>
      <tr><td>JIT group membership</td><td>Delegate membership changes only on AD groups mapped to JIT roles.</td></tr>
    </tbody></table></div>
    <h2>Tier 0 protection</h2>
    <p>Tier 0 users, protected users, and protected group members should be excluded from Helpdesk actions. Test search and action blocking with Tier 1 and Tier 2 operator accounts before production rollout.</p>
    <h2>Staging validation</h2>
    <ol>
      <li>Create a test user and test AD group.</li>
      <li>Apply the planned delegated permissions to the service identity or gMSA.</li>
      <li>Test password reset, unlock, profile update, group update, JIT activation, expiration, and revoke only for the enabled features.</li>
      <li>Confirm denied actions fail cleanly and are visible in logs or audit records.</li>
      <li>Move to production only after the permission scope is confirmed.</li>
    </ol>
  `),
  'installation': page('Installation', 'SmartPT Core', `
    <p class="lead">SmartPT Core is installed on a customer-controlled Windows server and integrates with Local Active Directory. The product portals run locally and SmartPT enforces permissions before sensitive actions are allowed.</p>
    <h2>SmartPT Core setup</h2>
    <p>Download the current SmartPT Core setup executable and run <code>Setup.exe</code> directly on the target Windows server.</p>
    <figure class="doc-screenshot"><img src="./docs/core/screenshots/installer-consent.png" alt="SmartPT Core setup wizard consent step"><figcaption>The setup wizard starts with deployment consent and confirms the administrator is authorized to prepare IIS, Active Directory integration, licensing, logging, and product configuration.</figcaption></figure>
    <h2>Where to start</h2>
    <ol>
      <li>Copy <code>Setup.exe</code> to the target Windows Server 2019 or newer machine.</li>
      <li>Run <code>Setup.exe</code> as Administrator.</li>
      <li>Confirm the server is domain joined and the setup account has the required installation rights.</li>
      <li>Enter the license serial received after subscription purchase.</li>
      <li>Let the wizard install prerequisites, prepare the SmartPT service identity, install the product portals, and configure IIS.</li>
      <li>Validate and activate the license after server preparation succeeds.</li>
      <li>Open the local portal and confirm license health.</li>
    </ol>
    <h2>Wizard flow</h2>
    <div class="table-wrap"><table><thead><tr><th>Step</th><th>What the wizard validates or configures</th></tr></thead><tbody>
      <tr><td>Consent</td><td>Confirms the deployment scope and customer authorization before setup begins.</td></tr>
      <tr><td>Pre-checks</td><td>Checks Windows Server OS, Windows Server 2019 or newer, administrator elevation, domain join, directory rights, and SmartPT API reachability.</td></tr>
      <tr><td>Server prerequisites</td><td>Installs or verifies IIS and AD PowerShell features, .NET 8 SDK, .NET 8 runtime, ASP.NET Core Hosting Bundle, WebAdministration module, and ActiveDirectory module.</td></tr>
      <tr><td>Service identity preparation</td><td>Prepares the SmartPT service identity used for approved Active Directory actions.</td></tr>
      <tr><td>IIS installation</td><td>Installs required IIS role services, Windows authentication, IIS management tools, scripting tools, and RSAT Active Directory PowerShell.</td></tr>
      <tr><td>Product portal installation</td><td>Installs SmartPT Console, AD Control, JIT Access, and Verify components.</td></tr>
      <tr><td>IIS configuration</td><td>Configures IIS applications, required permissions, service identity, and service startup.</td></tr>
      <tr><td>License activation</td><td>Validates the license serial, stores activation state, configures product access, and stamps installed configuration.</td></tr>
      <tr><td>Final health</td><td>Checks the local Console, AD Control, JIT Access, Verify, and product health checks.</td></tr>
    </tbody></table></div>
    <figure class="doc-screenshot"><img src="./docs/core/screenshots/installer-pre-checks.png" alt="SmartPT Core setup wizard pre-checks"><figcaption>Pre-checks confirm the server, elevation, domain join, directory rights, and SmartPT activation service reachability before setup continues.</figcaption></figure>
    <figure class="doc-screenshot"><img src="./docs/core/screenshots/installer-server-prerequisites.png" alt="SmartPT Core setup wizard server prerequisites"><figcaption>Server prerequisites confirm IIS PowerShell, ActiveDirectory PowerShell, .NET 8 SDK, .NET 8 runtime, and ASP.NET Core Hosting Bundle.</figcaption></figure>
    <figure class="doc-screenshot"><img src="./docs/core/screenshots/installer-gmsa-preparation.png" alt="SmartPT Core setup wizard service identity preparation"><figcaption>The wizard prepares the SmartPT service identity used for approved Active Directory operations.</figcaption></figure>
    <figure class="doc-screenshot"><img src="./docs/core/screenshots/installer-iis-installation.png" alt="SmartPT Core setup wizard IIS installation"><figcaption>IIS installation validates required role services, Windows authentication, management tools, and AD PowerShell support.</figcaption></figure>
    <figure class="doc-screenshot"><img src="./docs/core/screenshots/installer-deploy-packages.png" alt="SmartPT Core setup wizard product portal installation"><figcaption>The setup wizard installs SmartPT Console, AD Control, JIT Access, and Verify components.</figcaption></figure>
    <figure class="doc-screenshot"><img src="./docs/core/screenshots/installer-iis-configuration.png" alt="SmartPT Core setup wizard IIS configuration"><figcaption>IIS configuration prepares the local SmartPT applications and starts the required services.</figcaption></figure>
    <figure class="doc-screenshot"><img src="./docs/core/screenshots/installer-license-validation.png" alt="SmartPT Core setup wizard license validation"><figcaption>License validation confirms the SmartPT Core license is ready before activation.</figcaption></figure>
    <figure class="doc-screenshot"><img src="./docs/core/screenshots/installer-license-activation-active.png" alt="SmartPT Core setup wizard license activation complete"><figcaption>After activation, SmartPT Core returns ACTIVE license status.</figcaption></figure>
    <figure class="doc-screenshot"><img src="./docs/core/screenshots/installer-final-health.png" alt="SmartPT Core setup wizard final health checks"><figcaption>Final health checks verify the local portals and product health checks after installation.</figcaption></figure>
    <h2>Server requirements</h2>
    <div class="table-wrap"><table><thead><tr><th>Area</th><th>Requirement</th></tr></thead><tbody>
      <tr><td>Operating system</td><td>Windows Server 2019 or newer.</td></tr>
      <tr><td>Identity</td><td>Domain joined server with access to the target Local Active Directory environment.</td></tr>
      <tr><td>Setup rights</td><td>Run as Administrator. The setup account must have the directory rights needed to prepare the gMSA and installation.</td></tr>
      <tr><td>IIS</td><td>The wizard creates the required local applications for SmartPT Core, AD Control, JIT Access, and Verify.</td></tr>
      <tr><td>Service identity</td><td>The wizard prepares the SmartPT service identity for approved Active Directory actions.</td></tr>
      <tr><td>Storage</td><td>Local configuration, state, and append-only audit logs stored as files.</td></tr>
    </tbody></table></div>
    <h2>Post-install validation</h2>\n    <p>After installation, confirm SmartPT Console opens, product portals are reachable, licensing is active, and product health checks pass.</p>\n    <figure class="doc-screenshot"><img src="./docs/core/screenshots/installer-post-install-jit-license.png" alt="JIT Access opens after SmartPT Core installation and licensing"><figcaption>After Core activation, product portals such as JIT Access can be opened and licensed users can be assigned according to the customer subscription.</figcaption></figure>
    <div class="callout warning">Do not grant broad Domain Admin permissions to the SmartPT service identity. Delegate only the AD actions required for the configured product features.</div>
  `),
  'licensing': page('Licensing', 'SmartPT Core', `
    <p class="lead">SmartPT Core uses server-bound license validation. Licensing is enforced before product access is granted.</p>
    <h2>Commercial model</h2>
    <ul>
      <li>SmartPT Core is the base subscription.</li>
      <li>The base subscription includes JIT Access and AD Control with the included user allocation.</li>
      <li>Additional user units are managed from the product portals.</li>
      <li>If the Core license is canceled, product add-on units are canceled with it.</li>
    </ul>
    <h2>Activation model</h2>
    <ol>
      <li>The customer receives a license serial after subscription purchase.</li>
      <li>SmartPT validates the serial against the configured license endpoint.</li>
      <li>The license state is bound to the deployed server and customer subscription.</li>
      <li>Product access is allowed only while the Core license is active.</li>
    </ol>
    <h2>License states</h2>
    <div class="table-wrap"><table><thead><tr><th>State</th><th>Meaning</th></tr></thead><tbody>
      <tr><td>PAID</td><td>License was purchased but not activated on this server.</td></tr>
      <tr><td>ACTIVE</td><td>License activation completed and runtime validation can succeed.</td></tr>
      <tr><td>CANCELLED</td><td>Subscription or license was canceled.</td></tr>
      <tr><td>EXPIRED</td><td>License or subscription is no longer valid.</td></tr>
    </tbody></table></div>
  `),
  'downloads': page('Downloads', 'Installation package', `
    <p class="lead">Download the current SmartPT Core setup executable for customer installation.</p>
    <h2>Download SmartPT Core</h2>
    <div class="cards">
      <article class="card">
        <h3>SmartPT Core Setup.exe</h3>
        <p>Windows x64 setup executable for SmartPT Core installation, activation, IIS configuration, product portal setup, and post-install health checks.</p>
        <p><a class="button primary" href="https://smartpt.co.il/downloads/core/Setup.exe">Download Setup.exe</a></p>
      </article>
      <article class="card">
        <h3>Before installation</h3>
        <p>Install on a domain-joined Windows Server 2019 or newer machine. Run setup as Administrator and confirm the server can reach the required domain controllers and SmartPT activation service.</p>
        <p><a class="button secondary" href="#requirements">Review requirements</a></p>
      </article>
      <article class="card">
        <h3>Validation</h3>
        <p>Validate installation in a staging environment before production. Confirm Console access, license status, product portal health, and audit log creation.</p>
      </article>
    </div>
  `),
  'core-getting-started': page('Getting Started with SmartPT Console', 'SmartPT Console', `
    <p class="lead">SmartPT Console runs inside the customer environment. It gives administrators one place to confirm product availability, review license and product status, manage root portal access, reset shared two-factor enrollment, and open the product consoles.</p>
    <div class="tag-list"><span class="tag">On-prem portal</span><span class="tag">License status</span><span class="tag">Shared 2FA</span><span class="tag">Product visibility</span></div>
    <figure class="doc-screenshot"><img src="./docs/core/screenshots/console-overview.png" alt="SmartPT Console overview in dark mode"><figcaption>SmartPT Console is the server entry point for Core status and product access.</figcaption></figure>
    <h2>What SmartPT Console solves</h2>
    <p>SmartPT deployments include SmartPT Core, JIT Access, AD Control, and SmartPT Verify. The Console gives administrators a single place to answer operational questions before entering a product portal.</p>
    <ul>
      <li>Is the Core license active?</li>
      <li>Are JIT Access and AD Control reachable?</li>
      <li>Who can administer the root portal?</li>
      <li>Is shared two-factor enrollment working?</li>
      <li>Is the license validation healthy?</li>
    </ul>
    <div class="diagram">
      <div class="diagram-grid five">
        <div class="diagram-box accent"><strong>Administrator</strong><span>Signs in with an AD account.</span></div>
        <div class="diagram-arrow">&rarr;</div>
        <div class="diagram-box"><strong>SmartPT Console</strong><span>Shows Core status, access, 2FA, and product entry.</span></div>
        <div class="diagram-arrow">&rarr;</div>
        <div class="diagram-box good"><strong>Product portals</strong><span>JIT Access and AD Control keep privileged actions in dedicated consoles.</span></div>
      </div>
      <div class="diagram-note">The Console organizes the environment. JIT Access and AD Control still enforce their own roles, policies, and audit logs.</div>
    </div>
    <h2>Recommended order</h2>
    <ol>
      <li>Confirm the Core license is <strong>ACTIVE</strong>.</li>
      <li>Confirm the last license validation is current.</li>
      <li>Confirm JIT Access and AD Control show as reachable.</li>
      <li>Add the correct administrative group for Console access.</li>
      <li>Review session lifetime and idle timeout.</li>
      <li>Test shared two-factor reset with a non-production user.</li>
    </ol>
  `),
  'core-portal-overview': page('SmartPT Console Portal Overview', 'SmartPT Console', `
    <p class="lead">The SmartPT Console portal is split into Overview, Recent Activity, and Settings. The exact tabs depend on the signed-in user's access level.</p>
    <figure class="doc-screenshot"><img src="./docs/core/screenshots/console-overview.png" alt="SmartPT Console overview in dark mode"><figcaption>Overview confirms server state, signed-in user, access level, and product entry points.</figcaption></figure>
    <h2>Overview</h2>
    <div class="table-wrap"><table><thead><tr><th>Area</th><th>Purpose</th></tr></thead><tbody>
      <tr><td>Products</td><td>Counts installed product portals visible from the Console.</td></tr>
      <tr><td>User</td><td>Shows the signed-in identity.</td></tr>
      <tr><td>Access</td><td>Shows whether the user is Administrator or Viewer.</td></tr>
      <tr><td>Architecture</td><td>Explains what SmartPT Console manages and what remains inside each product portal.</td></tr>
      <tr><td>Installed product consoles</td><td>Opens JIT Access and AD Control.</td></tr>
    </tbody></table></div>
    <h2>Product status</h2>
    <p>Product cards show whether each product console is reachable. This is a fast operational check before entering JIT Access or AD Control.</p>
    <figure class="doc-screenshot"><img src="./docs/core/screenshots/product-status-highlight.png" alt="SmartPT Console product status highlighted"><figcaption>Product status confirms portal reachability.</figcaption></figure>
    <p>If a product is unavailable, confirm the product service is running before testing product workflows.</p>
    <h2>Product updates</h2>
    <p>Core administrators can update AD Control and JIT Access from the product cards when a newer product version is available. Viewer users can open product consoles when their access allows it, but they cannot run product updates.</p>
    <figure class="doc-screenshot"><img src="./docs/core/screenshots/product-update-available.png" alt="SmartPT Console product cards showing Update available for AD Control and JIT Access"><figcaption>Update available appears on product cards when a newer AD Control or JIT Access version is available.</figcaption></figure>
    <ol>
      <li>Open <strong>SmartPT Console</strong> with a Core administrator account.</li>
      <li>Review the AD Control and JIT Access product cards.</li>
      <li>If a product card shows <strong>Update available</strong>, select <strong>Update app</strong>.</li>
      <li>Wait for the update to complete.</li>
      <li>Confirm the product card returns to a healthy state.</li>
      <li>Open the product console and verify the expected product version.</li>
    </ol>
    <div class="callout info">Product updates do not overwrite customer settings, license information, logs, or customer data. If an update cannot complete, SmartPT keeps the previous product version available and shows the update result in the Console.</div>
    <h2>Recent activity</h2>
    <p>Recent Activity shows sign-ins, settings changes, password resets, account unlocks, JIT assignments, session changes, and revoke events. Use it for quick operational review and audit lookup.</p>
    <figure class="doc-screenshot"><img src="./docs/core/screenshots/recent-activity-highlight.png" alt="SmartPT Console recent activity highlighted"><figcaption>Recent Activity gives administrators a short operational history across Core and product portals.</figcaption></figure>
    <h2>Settings</h2>
    <p>Settings is available only to Console administrators. It controls root portal access, Console session policy, shared two-factor reset, license visibility, support links, and subscription cancellation.</p>
    <figure class="doc-screenshot"><img src="./docs/core/screenshots/settings-overview.png" alt="SmartPT Console settings overview"><figcaption>Settings manages Console access, shared MFA reset, session limits, and license status.</figcaption></figure>
  `),
  'core-license-status': page('License and Product Status', 'SmartPT Console', `
    <p class="lead">SmartPT Console shows the shared server subscription status. Product portals keep their own operational actions, but SmartPT Core license validation is checked before product access is allowed.</p>
    <figure class="doc-screenshot"><img src="./docs/core/screenshots/license-status-highlight.png" alt="SmartPT Console license and product status highlighted"><figcaption>The license panel shows active state, validation status, and subscription action.</figcaption></figure>
    <h2>License behavior</h2>
    <p>The Console validates the SmartPT Core license before product access is allowed. If the license is not active, access fails closed and the user is directed to license recovery.</p>
    <div class="table-wrap"><table><thead><tr><th>Field</th><th>Meaning</th></tr></thead><tbody>
      <tr><td>Status</td><td>Current Core license state. Product access should be tested only when this is ACTIVE.</td></tr>
      <tr><td>Serial</td><td>Server-bound subscription identifier. Do not expose this value in public screenshots.</td></tr>
      <tr><td>License validation</td><td>Server-bound license validation status.</td></tr>
      <tr><td>Last validated</td><td>Last successful runtime license check and result.</td></tr>
    </tbody></table></div>
    <h2>Product status</h2>
    <figure class="doc-screenshot"><img src="./docs/core/screenshots/product-status-highlight.png" alt="SmartPT Console product status highlighted"><figcaption>Portal reachability is checked from the Core server.</figcaption></figure>
    <p>Product status confirms that the product console is reachable. It does not prove that every action can run. For action failures, check product health, policy, permissions, and audit logs.</p>
    <h2>License validation model</h2>
    <ul>
      <li>Runtime validation uses the configured license endpoint and installed license state.</li>
      <li>If license validation becomes unhealthy, check license state, outbound connectivity, activation status, and application logs.</li>
    </ul>
  `),
  'core-access-model': page('Access Model, RBAC, and Admin Groups', 'SmartPT Console', `
    <p class="lead">SmartPT Console access is controlled by Active Directory identity, group membership, and the built-in Domain Admin fallback.</p>
    <figure class="doc-screenshot"><img src="./docs/core/screenshots/settings-rbac-session-highlight.png" alt="SmartPT Console RBAC and session settings highlighted"><figcaption>Administrative groups, viewer groups, and session limits are configured from Settings.</figcaption></figure>
    <h2>Access levels</h2>
    <div class="table-wrap"><table><thead><tr><th>Access level</th><th>Who gets it</th><th>What it can do</th></tr></thead><tbody>
      <tr><td>Administrator</td><td>Domain Admins or configured Administrative groups</td><td>View products, view activity, manage settings, reset shared 2FA, and view license status.</td></tr>
      <tr><td>Viewer</td><td>Configured Viewer groups</td><td>View the Console without managing settings.</td></tr>
      <tr><td>None</td><td>Users outside allowed groups</td><td>Access is denied.</td></tr>
    </tbody></table></div>
    <div class="callout">Domain Admins always retain administrative access. Day-to-day administration should use approved AD groups.</div>
    <h2>Administrative groups</h2>
    <p>Add an AD group when non-Domain Admin operators should administer SmartPT Console. For example, an <code>it-admin</code> group can be granted Console administrator access.</p>
    <figure class="doc-screenshot"><img src="./docs/core/screenshots/rbac-it-admin-highlight.png" alt="it-admin group search highlighted in SmartPT Console"><figcaption>Administrative group search validates against Active Directory before a group is added.</figcaption></figure>
    <h2>Recommended practice</h2>
    <ul>
      <li>Use a dedicated AD group for SmartPT Console administrators.</li>
      <li>Keep product-specific roles inside JIT Access and AD Control.</li>
      <li>Do not use Console access as a substitute for product RBAC.</li>
      <li>Review group membership regularly.</li>
    </ul>
  `),
  'core-settings-overview': page('SmartPT Console Settings Overview', 'SmartPT Console', `
    <p class="lead">Settings is the administrative area for root portal access, shared two-factor recovery, license visibility, and subscription actions.</p>
    <figure class="doc-screenshot"><img src="./docs/core/screenshots/settings-overview.png" alt="SmartPT Console settings overview"><figcaption>Settings combines root access, shared 2FA, license, support links, and subscription action.</figcaption></figure>
    <h2>Portal access settings</h2>
    <figure class="doc-screenshot"><img src="./docs/core/screenshots/settings-rbac-session-highlight.png" alt="SmartPT Console portal access settings highlighted"><figcaption>Start with approved admin and viewer groups, then review Console session limits.</figcaption></figure>
    <div class="table-wrap"><table><thead><tr><th>Setting</th><th>Purpose</th></tr></thead><tbody>
      <tr><td>Administrative groups</td><td>AD groups that receive Console administrator access.</td></tr>
      <tr><td>Viewer groups</td><td>AD groups that receive read-only Console visibility.</td></tr>
      <tr><td>Maximum session lifetime</td><td>Hard limit for a Console session.</td></tr>
      <tr><td>Idle timeout</td><td>Inactivity limit for a Console session.</td></tr>
    </tbody></table></div>
    <h2>Shared two-factor access</h2>
    <p>Shared Two-Factor Access lets an administrator inspect and reset a user's shared authenticator enrollment. Use it when the authenticator is lost, replaced, or re-enrollment is required.</p>
    <figure class="doc-screenshot"><img src="./docs/core/screenshots/shared-2fa-avi-reset-highlight.png" alt="Shared 2FA reset highlighted for Avi"><figcaption>Reset two-factor clears enrollment and requires setup again on the next sign-in.</figcaption></figure>
    <h2>License and billing</h2>
    <figure class="doc-screenshot"><img src="./docs/core/screenshots/license-status-highlight.png" alt="SmartPT Console license and subscription status highlighted"><figcaption>License and Billing shows Core license state, license validation status and subscription action.</figcaption></figure>
    <div class="callout warning">Use subscription cancellation carefully. It affects the shared Core subscription and can block access to JIT Access and AD Control when the license is no longer active.</div>
  `),
  'core-shared-2fa-reset': page('Shared 2FA and Reset MFA', 'SmartPT Console', `
    <p class="lead">SmartPT Console can reset a user's shared two-factor enrollment. This is used when a user loses the authenticator app, changes device, or must be forced to re-enroll.</p>
    <div class="diagram">
      <div class="diagram-grid five">
        <div class="diagram-box accent"><strong>User signs in</strong><span>Core or product portal starts the session.</span></div>
        <div class="diagram-arrow">&rarr;</div>
        <div class="diagram-box"><strong>Shared 2FA</strong><span>SmartPT Verify handles TOTP enrollment or verification.</span></div>
        <div class="diagram-arrow">&rarr;</div>
        <div class="diagram-box good"><strong>Continue</strong><span>Successful verification allows the user to continue to the permitted portal.</span></div>
      </div>
      <div class="diagram-note">Passing 2FA does not grant product permission. Product RBAC and licensing are still enforced separately.</div>
    </div>
    <h2>Reset MFA for a user</h2>
    <ol>
      <li>Sign in to SmartPT Console as a Console administrator.</li>
      <li>Open <strong>Settings</strong>.</li>
      <li>In <strong>Shared Two-Factor Access</strong>, search for the AD user.</li>
      <li>Select the user and review enrollment status.</li>
      <li>Select <strong>Reset two-factor</strong> only when re-enrollment is required.</li>
    </ol>
    <figure class="doc-screenshot"><img src="./docs/core/screenshots/shared-2fa-avi-reset-highlight.png" alt="Shared 2FA reset highlighted for Avi"><figcaption>Avi is selected. The administrator can see enrollment state and the reset action.</figcaption></figure>
    <h2>Before reset</h2>
    <ul>
      <li>Confirm the target user is correct.</li>
      <li>Confirm the request is approved by the customer's process.</li>
      <li>Confirm the user understands they will need to enroll again.</li>
      <li>Do not reset 2FA as a workaround for missing product RBAC or license assignment.</li>
    </ul>
  `),
  'ad-control-getting-started': page('Getting Started with AD Control', 'AD Control', `
    <p class="lead">AD Control lets Helpdesk operators reset passwords and unlock standard users through the SmartPT portal without giving them broad direct Active Directory permissions.</p>
    <div class="tag-list"><span class="tag">Tier 1 / Tier 2</span><span class="tag">Protected identities</span><span class="tag">OTP verification</span><span class="tag">Audit logs</span></div>
    ${adControlArchitectureDiagram()}
    ${adControlDiagram()}
    ${adControlTierDiagram()}
    <figure class="doc-screenshot"><img src="./docs/ad-control/screenshots/ad-control-product-overview.jpg" alt="AD Control product overview showing Tier 1, Tier 2, Tier 0 protection, OTP verification, and audit"><figcaption>AD Control summarizes the tier model: Tier 1 helpdesk actions, Tier 2 advanced support, Tier 0 protection, OTP verification, and audit records.</figcaption></figure>
    <figure class="doc-screenshot"><img src="./docs/ad-control/screenshots/dashboard-jim-settings-access.jpg" alt="AD Control dashboard in dark mode"><figcaption>AD Control is role-aware. Jim has settings access for administration.</figcaption></figure>
    <h2>What AD Control solves</h2>
    <ul><li>Tier 1 can reset passwords and unlock standard users through the SmartPT portal.</li><li>Tier 1 cannot change phone numbers, edit profile attributes, or manage groups.</li><li>OTP verification uses the phone number already stored in the Active Directory <code>mobile</code> attribute.</li><li>Protected users, Protected Groups, and Tier 0 identities are blocked from Helpdesk actions.</li><li>Every password reset, unlock, profile update, group change, and settings change is written to audit logs with actor, target, result, and audit detail.</li></ul>
    <h2>Documentation example users</h2>
    <div class="table-wrap"><table><thead><tr><th>User</th><th>Role</th><th>Purpose</th></tr></thead><tbody><tr><td>jim</td><td>Settings administrator</td><td>Full AD Control settings access.</td></tr><tr><td>david</td><td>Helpdesk (Tier 1)</td><td>Can support standard users such as avi.</td></tr><tr><td>sara</td><td>Advanced Support (Tier 2)</td><td>Can support standard users and use Tier 2 actions.</td></tr><tr><td>avi</td><td>Managed user</td><td>Target user. No AD Control license required.</td></tr><tr><td>joe</td><td>Protected user</td><td>Hidden from Tier operators after protection is configured.</td></tr></tbody></table></div>
    <div class="callout">Only operators need AD Control product licenses. Target users such as avi do not need a license to be managed.</div>
  `),
  'ad-control-access-model': page('Access Model, Licensing, and RBAC', 'AD Control', `
    <p class="lead">AD Control separates operators from target users. Operators need a product license and one role. The users they manage do not need a license.</p>
    ${adControlTierDiagram()}
    <figure class="doc-screenshot"><img src="./docs/ad-control/screenshots/settings-access-assignments-highlight.jpg" alt="AD Control access assignments highlighted in dark mode"><figcaption>Access Assignments binds a licensed operator to one AD Control role.</figcaption></figure>
    <figure class="doc-screenshot"><img src="./docs/ad-control/screenshots/settings-tier-role-options.jpg" alt="AD Control tier role options in dark mode"><figcaption>Tier options are Helpdesk (Tier 1) and Advanced Support (Tier 2).</figcaption></figure>
    <h2>Access layers</h2>
    <div class="table-wrap"><table><thead><tr><th>Layer</th><th>Controls</th></tr></thead><tbody><tr><td>Product license</td><td>Whether the operator consumes an AD Control seat.</td></tr><tr><td>Role assignment</td><td>Whether the operator is Tier 1 or Tier 2.</td></tr><tr><td>Settings access</td><td>Who can manage licenses, RBAC, protection, OTP, SMTP, and policy.</td></tr><tr><td>Protection rules</td><td>Which users and groups are blocked from Helpdesk actions.</td></tr></tbody></table></div>
    <h2>Example configuration</h2>
    <ul><li>david has a license and the Helpdesk (Tier 1) role.</li><li>sara has a license and the Advanced Support (Tier 2) role.</li><li>avi is a managed target user and does not need a product license.</li><li>jim has settings access and can manage protected users, protected groups, roles, and policy.</li></ul>
    <h2>Tier options</h2>
    <ul><li><b>Helpdesk (Tier 1):</b> resets passwords and unlocks standard users. Tier 1 cannot change phone numbers, edit profile attributes, or manage groups.</li><li><b>Advanced Support (Tier 2):</b> can use additional approved profile and group actions through SmartPT RBAC. Tier 2 is still blocked from protected users and Tier 0 identities.</li></ul>
  `),
  'ad-control-portal-overview': page('Portal Overview', 'AD Control', `
    <p class="lead">The AD Control portal is split between Dashboard, the operator support console, and Settings. Visible tabs depend on the signed-in user.</p>
    <figure class="doc-screenshot"><img src="./docs/ad-control/screenshots/david-dashboard.jpg" alt="David AD Control dashboard in dark mode"><figcaption>David has operator access and sees the support workspace entry point.</figcaption></figure>
    <div class="table-wrap"><table><thead><tr><th>Area</th><th>Purpose</th></tr></thead><tbody><tr><td>Dashboard</td><td>Shows the signed-in context and available next action.</td></tr><tr><td>AD Control</td><td>Operator console for user search and allowed actions.</td></tr><tr><td>Settings</td><td>Administrative configuration for licenses, RBAC, protected identities, OTP, SMTP, and session policy.</td></tr></tbody></table></div>
    <p>David and Sara do not see Settings. Jim can manage Settings. This keeps administrative configuration separate from day-to-day operator work.</p>
  `),
  'ad-control-settings-overview': page('Settings Overview', 'AD Control', `
    <p class="lead">AD Control Settings is the administrative area for product access, role assignment, protected identities, OTP policy, password/unlock behavior, SMTP, and session policy.</p>
    ${adControlSettingsFlowDiagram()}
    <figure class="doc-screenshot"><img src="./docs/ad-control/screenshots/settings-access-assignments-highlight.jpg" alt="AD Control settings access assignments highlighted"><figcaption>Start with Access Assignments so each operator has one license and one tier.</figcaption></figure>
    <h2>Settings sections</h2>
    <ul><li>Access Assignments for operator licenses and roles.</li><li>AD Control View Settings for support groups, protected users, and protected groups.</li><li>OTP policy for TTL, send limits, resend windows, and failed attempts.</li><li>Password and unlock options for direct actions and OTP-verified actions.</li><li>Global Email (SMTP) and session policy.</li></ul>
    <figure class="doc-screenshot"><img src="./docs/ad-control/screenshots/settings-policy-delivery-highlight.jpg" alt="AD Control OTP SMTP and session policy settings highlighted"><figcaption>Review OTP, SMTP, and session policy before production rollout.</figcaption></figure>
    <figure class="doc-screenshot"><img src="./docs/ad-control/screenshots/settings-all-policy-areas-highlight.jpg" alt="AD Control all important settings areas highlighted"><figcaption>Settings controls access, protected identities, OTP limits, direct and OTP-verified actions, SMTP, and session behavior.</figcaption></figure>
    <h2>What administrators can configure</h2>
    <div class="table-wrap"><table><thead><tr><th>Setting area</th><th>Controls</th></tr></thead><tbody>
      <tr><td>Access Assignments</td><td>Operator license assignment, tier role, role change, and removal.</td></tr>
      <tr><td>Support groups</td><td>AD groups that can receive AD Control view/settings permissions.</td></tr>
      <tr><td>Protected users</td><td>Specific accounts hidden from Tier 1 and Tier 2 search and actions.</td></tr>
      <tr><td>Protected groups</td><td>Groups whose direct and nested members are treated as protected.</td></tr>
      <tr><td>OTP and verification</td><td>TTL, resend limits, send window, and failed attempt limits.</td></tr>
      <tr><td>Password and unlock methods</td><td>Direct reset, verified reset, direct unlock, verified unlock, complexity, and custom length.</td></tr>
      <tr><td>Notifications and SMTP</td><td>Auditor email, templates, relay host, sender, TLS, auth reference, and timeout.</td></tr>
      <tr><td>Session policy</td><td>Portal maximum session and idle timeout.</td></tr>
    </tbody></table></div>
    <div class="callout">Yellow callouts mark Settings areas that administrators should review first. Non-settings screenshots are left unmarked.</div>
  `),
  'ad-control-protected-identities': page('Protected Users and Groups', 'AD Control', `
    <p class="lead">Protected identities are blocked from Helpdesk actions. Tier 0 users are protected by default, and administrators can add protected users and protected groups.</p>
    <figure class="doc-screenshot"><img src="./docs/ad-control/screenshots/settings-protection-highlight.jpg" alt="AD Control protected users and groups highlighted"><figcaption>Jim can add protected users and protected groups from Settings.</figcaption></figure>
    <ul><li>joe is configured as a protected user.</li><li>it-admin is configured as a protected group.</li><li>david and sara can manage avi.</li><li>david and sara cannot search or manage Tier 0/protected accounts such as jim or joe.</li></ul>
    <figure class="doc-screenshot"><img src="./docs/ad-control/screenshots/david-protected-user-search.jpg" alt="David cannot manage protected Joe in dark mode"><figcaption>Protected users are blocked from Tier 1 search and actions.</figcaption></figure>
  `),
  'ad-control-operator-console': page('Operator Support Console', 'AD Control', `
    <p class="lead">Operators use the AD Control tab to search Active Directory users and run only the actions allowed by their assigned role.</p>
    ${adControlOperatorFlowDiagram()}
    <figure class="doc-screenshot"><img src="./docs/ad-control/screenshots/david-avi-selected.jpg" alt="David selected Avi in AD Control dark mode"><figcaption>The selected user panel shows identity, status, contact attributes, and allowed actions.</figcaption></figure>
    <h2>Search behavior</h2>
    <ul><li>Search supports samAccountName, UPN, or display name.</li><li>Protected users and protected group members do not appear to Tier operators.</li><li>If a user is missing, check protection rules before treating it as a directory issue.</li></ul>
    <div class="table-wrap"><table><thead><tr><th>User</th><th>Role</th><th>Allowed actions</th></tr></thead><tbody><tr><td>david</td><td>Helpdesk (Tier 1)</td><td>Reset passwords and unlock standard users. Cannot edit profile attributes, change phone numbers, or manage groups.</td></tr><tr><td>sara</td><td>Advanced Support (Tier 2)</td><td>Tier 1 actions plus approved profile updates and controlled group actions.</td></tr></tbody></table></div>
  `),
  'ad-control-password-reset': page('Password Reset Workflows', 'AD Control', `
    <p class="lead">AD Control supports direct reset and verified reset. Administrators decide which methods are enabled in Settings.</p>
    ${adControlResetFlowDiagram()}
    <h2>Direct reset</h2><p>Direct reset is an administrator-approved helpdesk action. It runs immediately and is audited.</p>
    <figure class="doc-screenshot"><img src="./docs/ad-control/screenshots/david-reset-password-direct.jpg" alt="David direct password reset modal in dark mode"><figcaption>Direct reset runs immediately when policy allows it.</figcaption></figure>
    <h2>Verified reset</h2><p>Verified reset requires OTP before the password reset completes. OTP delivery uses AD-sourced contact attributes. For mobile OTP, the target user must have a phone number in the Active Directory <code>mobile</code> attribute. Israel numbers can be stored without <code>972</code>; other countries should include the country prefix, for example <code>62</code> or <code>+62</code>.</p>
    <figure class="doc-screenshot"><img src="./docs/ad-control/screenshots/david-reset-password-otp.jpg" alt="David verified password reset OTP modal in dark mode"><figcaption>Verified reset requires the operator to send and enter OTP before reset.</figcaption></figure>
    <div class="callout warning">Generated passwords are shown once. Copy or deliver the password immediately using the approved customer process.</div>
  `),
  'ad-control-account-unlock': page('Account Unlock Workflows', 'AD Control', `
    <p class="lead">AD Control supports direct unlock and verified unlock for locked Active Directory users.</p>
    ${adControlUnlockFlowDiagram()}
    <p>The unlock button appears when the selected user is locked and the operator has account unlock permission.</p>
    <figure class="doc-screenshot"><img src="./docs/ad-control/screenshots/avi-locked-status-highlight.jpg" alt="Avi locked status highlighted in AD Control"><figcaption>The unlock action appears only when the selected user is locked.</figcaption></figure>
    <h2>Direct unlock</h2>
    <p>Direct unlock runs immediately when enabled by policy. It records the actor, target, result, and audit detail.</p>
    <figure class="doc-screenshot"><img src="./docs/ad-control/screenshots/avi-unlock-direct-modal.jpg" alt="Avi direct unlock modal in AD Control"><figcaption>Direct unlock runs without OTP when the policy allows direct unlock.</figcaption></figure>
    <figure class="doc-screenshot"><img src="./docs/ad-control/screenshots/avi-unlock-direct-complete.jpg" alt="Avi unlock complete in AD Control"><figcaption>After unlock, Avi is available for standard Helpdesk actions.</figcaption></figure>
    <h2>Verified unlock flow</h2>
    <ol><li>Search and select the locked user.</li><li>Choose Unlock.</li><li>Select the verification channel.</li><li>Send OTP.</li><li>Enter the OTP provided by the user.</li><li>Verify and unlock.</li></ol>
    <p>Administrators can enable or disable direct unlock and verified unlock from Settings.</p>
  `),
  'ad-control-profile-updates': page('Profile Updates', 'AD Control', `
    <p class="lead">Advanced Support (Tier 2) operators can update selected Active Directory profile attributes for standard users.</p>
    ${adControlTier2FlowDiagram()}
    <figure class="doc-screenshot"><img src="./docs/ad-control/screenshots/sara-profile-update.jpg" alt="Sara profile update panel in dark mode"><figcaption>Sara can update selected user profile fields for Avi.</figcaption></figure>
    <ul><li>Phone</li><li>Mobile</li><li>Title</li><li>Department</li><li>Company</li><li>Office</li><li>Description</li></ul>
    <p>Protected users and Tier 0 identities remain blocked from profile updates.</p>
  `),
  'ad-control-group-management': page('Controlled Group Management', 'AD Control', `
    <p class="lead">Advanced Support (Tier 2) operators can manage approved group membership for standard users.</p>
    ${adControlGroupFlowDiagram()}
    <figure class="doc-screenshot"><img src="./docs/ad-control/screenshots/sara-group-management.jpg" alt="Sara group management panel in dark mode"><figcaption>Sara can review direct and nested groups and use allowed group actions.</figcaption></figure>
    <p>Administrators control which groups can be added or removed. Protected groups and privileged groups should not be available for standard Tier 2 group changes.</p>
  `),
  'ad-control-troubleshooting': page('AD Control Troubleshooting', 'AD Control', `
    <p class="lead">Use this page when access, search, OTP, reset, unlock, profile, group, SMTP, or settings behavior does not match expectations.</p>
    <h2>Operator cannot access AD Control</h2><ul><li>Confirm the user has an AD Control license assignment.</li><li>Confirm the user has one operator role.</li><li>Confirm the license has available seats.</li><li>Confirm the user is signing in with the expected AD identity.</li></ul>
    <h2>Target user does not appear in search</h2><ul><li>Confirm the target exists in Active Directory.</li><li>Confirm the target is not Tier 0.</li><li>Confirm the target is not a protected user.</li><li>Confirm the target is not a member of a protected group.</li></ul>
    <figure class="doc-screenshot"><img src="./docs/ad-control/screenshots/sara-tier0-search-blocked.jpg" alt="Sara cannot manage a Tier 0 account in dark mode"><figcaption>Tier 0 and protected users are blocked from operator actions.</figcaption></figure>
    <h2>OTP cannot be sent</h2><ul><li>Confirm AD <code>mail</code> and <code>mobile</code> attributes exist for the target user.</li><li>For mobile OTP, confirm the target user has a phone number in the Active Directory <code>mobile</code> attribute.</li><li>The mobile number must include the required country prefix. The <code>+</code> sign is supported but not required. Israel numbers can be stored without <code>972</code>; other countries should include the prefix, for example <code>62</code> or <code>+62</code>.</li><li>Confirm the selected delivery channel is enabled.</li><li>Confirm OTP send limits and resend windows have not been reached.</li></ul>
    <h2>IIS or service issue</h2><p>Check that the AD Control portal <code>/adc</code> and service <code>/adc-service</code> IIS applications are running. The service is designed to run with the pre-installed gMSA/service identity.</p>
  `),
  'ad-control-security-model': page('AD Control Security Model', 'AD Control', `
    <p class="lead">AD Control lets operators perform approved password reset, unlock, profile, and group actions without giving every operator broad direct Active Directory permissions.</p>
    ${adControlArchitectureDiagram()}
    <ul><li>Product license and role assignment for operators.</li><li>SmartPT permission checks for every sensitive action.</li><li>Tier 0 and protected identity filtering.</li><li>OTP verification for password reset and account unlock when policy requires it.</li><li>AD-sourced email/mobile attributes for OTP delivery.</li><li>Mobile OTP uses the Active Directory <code>mobile</code> attribute. International numbers should include the country prefix; the <code>+</code> sign is optional.</li><li>Audit records with actor, target, action, and result.</li><li>No OTP codes or generated passwords in audit logs.</li></ul>
    <div class="callout success">Successful OTP verification does not bypass protected identity rules. Protection is enforced before sensitive actions run.</div>
  `),
  'ad-control-overview': page('AD Control overview', 'AD Control', `
    <p class="lead">AD Control lets support teams reset passwords, unlock accounts, update approved profile fields, and manage approved groups through SmartPT RBAC instead of broad direct AD permissions.</p>
    <div class="tag-list">
      <span class="tag">Tier 1 / Tier 2 support</span>
      <span class="tag">Tier 0 protection</span>
      <span class="tag">Password reset</span>
      <span class="tag">Account unlock</span>
      <span class="tag">OTP verification</span>
      <span class="tag">Protected groups</span>
    </div>
    ${adControlDiagram()}
    <h2>What AD Control solves</h2>
    <ul>
      <li>Reduces helpdesk exposure to vishing and social-engineering attempts.</li>
      <li>Limits which operators can see and change sensitive users.</li>
      <li>Keeps protected users and Tier 0 identities out of Helpdesk search and actions.</li>
      <li>Supports OTP-verified password reset and account unlock using contact details already stored in Active Directory.</li>
      <li>Audits actions without storing OTP codes or generated passwords.</li>
    </ul>
    <h2>Main operating areas</h2>
    <div class="cards">
      <article class="card"><h3>Tiered support</h3><p>Assign Tier 1 and Tier 2 operators so helpdesk actions stay inside the intended support boundary.</p></article>
      <article class="card"><h3>Verified user actions</h3><p>Require OTP before password reset or account unlock when the organization wants user verification.</p></article>
      <article class="card"><h3>Protected identities</h3><p>Hide Tier 0, protected users, and protected group members from routine support search and actions.</p></article>
    </div>
    <h2>What operators can do when allowed</h2>
    <div class="table-wrap"><table><thead><tr><th>Capability</th><th>Purpose</th></tr></thead><tbody>
      <tr><td>Password reset</td><td>Reset a user password directly or after OTP verification, according to settings.</td></tr>
      <tr><td>Account unlock</td><td>Unlock a locked AD account directly or after OTP verification.</td></tr>
      <tr><td>Temporary password delivery</td><td>Send the generated temporary password by approved email or mobile delivery after reset.</td></tr>
      <tr><td>Profile update</td><td>Update allowed AD attributes such as phone, mobile, title, department, company, office, and description.</td></tr>
      <tr><td>Group membership</td><td>Add or remove only configured allowed groups.</td></tr>
    </tbody></table></div>
  `),
  'ad-control-admin': page('AD Control admin guide', 'AD Control', `
    <p class="lead">Administrators configure access assignments, support groups, protected users, protected groups, reset options, unlock options, OTP behavior, notification, SMTP, and session policy.</p>
    <h2>Where to go</h2>
    <p><code>AD Control > Settings</code></p>
    <h2>Who can use it</h2>
    <ul>
      <li>Domain Admins have administrative access by default.</li>
      <li>Support groups with settings access can manage AD Control settings.</li>
      <li>Tier users do not need settings access and should not see administrative quick actions.</li>
    </ul>
    <h2>Common admin tasks</h2>
    <div class="table-wrap"><table><thead><tr><th>Task</th><th>Path</th><th>Notes</th></tr></thead><tbody>
      <tr><td>Grant product access</td><td>Settings > Access Assignments</td><td>Assign one license and one operator role.</td></tr>
      <tr><td>Change operator tier</td><td>Settings > Access Assignments > Change</td><td>Change role without removing the user first.</td></tr>
      <tr><td>Add support group</td><td>Settings > AD Control View Settings</td><td>Search and add valid AD groups.</td></tr>
      <tr><td>Add protected user</td><td>Settings > Protected users</td><td>Protected users do not appear in Tier 1 or Tier 2 search.</td></tr>
      <tr><td>Add protected group</td><td>Settings > Protected groups</td><td>Members and nested members are protected.</td></tr>
      <tr><td>Configure reset/unlock methods</td><td>Settings > Password options</td><td>At least one reset method and one unlock method must remain enabled.</td></tr>
    </tbody></table></div>
    <h2>Access assignment model</h2>
    <ul>
      <li>A user needs a product license assignment and one operator role.</li>
      <li>Use <b>Change role</b> to move a user between Tier 1, Tier 2, or administrative roles without removing the assignment first.</li>
      <li>Remove only when the user should no longer have AD Control access.</li>
      <li>License limits are enforced before new users can be assigned.</li>
    </ul>
    <h2>Protected identity setup</h2>
    <ol>
      <li>Open <code>Settings > Protected users</code> to add specific users that should not be searchable by Tier operators.</li>
      <li>Open <code>Settings > Protected groups</code> to add groups whose direct and nested members should be protected.</li>
      <li>Use AD search/autocomplete so added users and groups are valid directory objects.</li>
      <li>Test with a Tier operator account and confirm protected users do not appear in search.</li>
    </ol>
    <div class="callout">Protected groups are designed for high-risk identities and sensitive admin groups. Treat them the same way as Tier 0 protection for Helpdesk actions.</div>
    <h2>Settings change checklist</h2>
    <ul>
      <li>Validate settings before saving.</li>
      <li>Confirm SMTP and mobile delivery settings after changes.</li>
      <li>Review audit records after access assignments, role changes, and protected group changes.</li>
      <li>Keep a JSON backup path available so administrators can recover if settings access is misconfigured.</li>
    </ul>
  `),
  'ad-control-operator': page('AD Control operator guide', 'AD Control', `
    <p class="lead">Operators use AD Control to search eligible users and perform only the actions allowed by their assigned tier and permissions.</p>
    <h2>Where to go</h2>
    <p><code>AD Control > Search user > Select user</code></p>
    <h2>Operator actions</h2>
    <div class="table-wrap"><table><thead><tr><th>Action</th><th>Who can use it</th><th>Behavior</th></tr></thead><tbody>
      <tr><td>Password reset</td><td>Operators with password reset permission</td><td>Can be direct or OTP-verified, depending on settings.</td></tr>
      <tr><td>Account unlock</td><td>Operators with unlock permission</td><td>Can be direct or OTP-verified, depending on settings.</td></tr>
      <tr><td>Profile update</td><td>Tier 2 / configured operators</td><td>Can update allowed fields such as phone, mobile, title, department, company, office, and description.</td></tr>
      <tr><td>Group membership</td><td>Operators with group permission</td><td>Can add or remove only allowed groups.</td></tr>
      <tr><td>View groups</td><td>Operators with group view permission</td><td>Direct and nested groups can be visible based on permissions.</td></tr>
    </tbody></table></div>
    <h2>Search behavior</h2>
    <ul>
      <li>Search supports allowed AD users by samAccountName, UPN, or display name where available.</li>
      <li>Tier 0 users, protected users, and members of protected groups do not appear to Tier 1 or Tier 2 operators.</li>
      <li>If a user cannot be found, confirm whether the user is protected before treating it as a directory problem.</li>
    </ul>
    <h2>OTP-verified password reset</h2>
    <ol>
      <li>Search and select the target user.</li>
      <li>Choose Reset password.</li>
      <li>Select verified reset if required by policy.</li>
      <li>Send OTP to email, mobile, or both where available.</li>
      <li>Enter the OTP provided by the user.</li>
      <li>Complete reset and give the temporary password through the approved channel.</li>
    </ol>
    <h2>Direct password reset</h2>
    <ol>
      <li>Search and select the target user.</li>
      <li>Choose Reset password.</li>
      <li>Select direct reset when enabled by policy.</li>
      <li>Enter a reason if required by the reset dialog.</li>
      <li>Complete the reset.</li>
      <li>Copy once, email the password, or send it to the phone when those delivery actions are available.</li>
    </ol>
    <h2>OTP-verified account unlock</h2>
    <ol>
      <li>Search and select the target user.</li>
      <li>Choose Unlock account.</li>
      <li>Select verified unlock when required by policy.</li>
      <li>Send OTP to the allowed AD-sourced channel.</li>
      <li>Enter the OTP provided by the user.</li>
      <li>Complete unlock and review the result.</li>
    </ol>
    <h2>Direct account unlock</h2>
    <ol>
      <li>Search and select the target user.</li>
      <li>Choose Unlock account.</li>
      <li>Select direct unlock when enabled by policy.</li>
      <li>Enter the operational reason.</li>
      <li>Complete unlock.</li>
    </ol>
    <h2>Profile and group actions</h2>
    <ul>
      <li>Profile updates are limited to allowed fields such as phone, mobile, title, department, company, office, and description.</li>
      <li>Group add/remove actions are limited to allowed groups configured by administrators.</li>
      <li>Protected groups should not be available as routine add/remove targets for Tier operators.</li>
    </ul>
    <div class="callout warning">Generated passwords are shown once. Copy or deliver the password immediately using the approved customer process.</div>
  `),
  'ad-control-settings': page('AD Control settings', 'AD Control', `
    <p class="lead">AD Control settings are JSON-backed and managed through the Settings page by administrators.</p>
    <h2>Password and unlock options</h2>
    <ul>
      <li><b>Change password at next sign-in:</b> automatically requires users to change the reset password on next logon.</li>
      <li><b>Direct password reset:</b> allows immediate reset without user verification.</li>
      <li><b>Verified password reset:</b> requires OTP verification before reset.</li>
      <li><b>Direct unlock:</b> allows immediate account unlock without user verification.</li>
      <li><b>Verified unlock:</b> requires OTP verification before unlock.</li>
      <li><b>Complex passwords:</b> allows forced complex password resets when needed.</li>
      <li><b>WhatsApp/mobile delivery:</b> controls mobile delivery for OTP and temporary passwords.</li>
    </ul>
    <h2>Reset and unlock method rules</h2>
    <ul>
      <li>By default, direct password reset, verified password reset, direct unlock, and verified unlock can be enabled.</li>
      <li>Administrators can turn off methods according to policy, but the portal must retain at least one password reset path and one unlock path.</li>
      <li>If <b>Change password at next sign-in</b> is enabled, individual reset dialogs do not need a separate checkbox for that behavior.</li>
      <li>OTP-verified password reset and unlock actions use 6-digit numeric OTP codes.</li>
      <li>Temporary passwords can be delivered by email or mobile only after the reset succeeds and only when the target user has the required AD attributes.</li>
    </ul>
    <h2>OTP and delivery settings</h2>
    <div class="table-wrap"><table><thead><tr><th>Setting</th><th>Controls</th></tr></thead><tbody>
      <tr><td>Verification code TTL</td><td>How long the OTP remains valid.</td></tr>
      <tr><td>Send limit</td><td>How many OTP sends are allowed in the configured window.</td></tr>
      <tr><td>Verification attempts</td><td>How many failed code attempts are allowed before the request is blocked.</td></tr>
      <tr><td>Email delivery</td><td>OTP and temporary password delivery through configured SMTP where allowed.</td></tr>
      <tr><td>Mobile delivery</td><td>OTP and temporary password delivery through the configured mobile messaging path where allowed.</td></tr>
    </tbody></table></div>
    <h2>Notification and SMTP settings</h2>
    <ul>
      <li>Auditor notification address controls who receives sensitive action notifications.</li>
      <li>Email subject and body templates should describe the action without exposing OTP codes or temporary passwords in logs.</li>
      <li>SMTP settings should be validated from the Settings page after changes.</li>
      <li>Secrets should be protected by the server configuration and not exposed in audit records.</li>
    </ul>
    <h2>Protection settings</h2>
    <ul>
      <li>Tier 0 users are protected by default.</li>
      <li>Protected users stay hidden from Tier 1 and Tier 2 search and actions.</li>
      <li>Protected groups protect direct and nested members.</li>
      <li>Protected groups are treated like Tier 0 for Helpdesk search and actions.</li>
    </ul>
    <h2>Access and role settings</h2>
    <ul>
      <li>Administrative groups extend settings access to approved AD groups.</li>
      <li>Viewer groups can receive read-only visibility where configured.</li>
      <li>Operator access assignments bind one licensed user to one AD Control role.</li>
      <li>Role changes should use the Change option so license assignment remains intact.</li>
    </ul>
    <h2>Session policy</h2>
    <p>System settings include maximum session minutes and idle timeout minutes. Expired sessions require the user to sign in again.</p>
  `),
  'ad-control-security': page('AD Control security model', 'AD Control', `
    <p class="lead">AD Control keeps password reset, account unlock, profile updates, and group changes inside SmartPT RBAC instead of giving every operator broad direct Active Directory permissions.</p>
    <h2>Core controls</h2>
    <ul>
      <li>Windows authentication and product session enforcement.</li>
      <li>License assignment and one operator role required.</li>
      <li>Role-based UI visibility backed by server authorization.</li>
      <li>Tier 0 and protected group exclusion from Helpdesk search and actions.</li>
      <li>OTP values and generated passwords are never stored in audit logs.</li>
      <li>Every sensitive action creates an audit record.</li>
    </ul>
    <h2>Tier and protection behavior</h2>
    <ul>
      <li>Tier 0 identities are excluded from Tier 1 and Tier 2 search and actions.</li>
      <li>Protected users are manually selected identities that should be excluded even if they are not Tier 0.</li>
      <li>Protected groups extend protection to group members, including nested members by design.</li>
      <li>Allowed groups limit which group memberships a support operator can add or remove.</li>
    </ul>
    <h2>Verified action behavior</h2>
    <ul>
      <li>OTP is sent only to contact details sourced from Active Directory.</li>
      <li>The operator cannot type a new phone number or email address for OTP delivery.</li>
      <li>Mobile OTP uses the target user's Active Directory <code>mobile</code> attribute. The <code>+</code> sign is optional, but non-Israel numbers should include the country prefix.</li>
      <li>OTP values are validated by the service and expire according to policy.</li>
      <li>Successful verification does not bypass tier, protected identity, or role permissions.</li>
    </ul>
    <h2>Password handling</h2>
    <ul>
      <li>Generated passwords are shown only after a successful reset and only to authorized operators.</li>
      <li>Generated passwords are shown once and should be delivered through the approved channel.</li>
      <li>When configured, reset passwords are automatically marked to require change at next sign-in.</li>
      <li>Audit records must never include generated passwords.</li>
    </ul>
    <div class="callout success">Result: operators can support standard users while protected users and Tier 0 identities remain blocked from reset, unlock, profile, and group actions.</div>
  `),
  'jit-overview': page('Getting Started with JIT Access', 'JIT Access', `
    <p class="lead">JIT Access reduces standing privilege in Active Directory by making privileged group membership temporary, visible, and controlled by policy.</p>
    <div class="tag-list">
      <span class="tag">Manual access</span>
      <span class="tag">Scheduled access</span>
      <span class="tag">Eligible OTP</span>
      <span class="tag">Temporary AD membership</span>
      <span class="tag">Automatic expiration</span>
    </div>
    ${jitDiagram()}
    <h2>What problem JIT solves</h2>
    <p>In many environments, administrative users remain in sensitive groups such as Domain Admins because they may need that access later. That creates standing privilege: an account has high-impact access even when there is no active business need. If the account is compromised, the attacker inherits that privilege immediately.</p>
    ${standingPrivilegeDiagram()}
    <p>JIT changes the operating model. Instead of keeping users permanently in privileged AD groups, JIT Access adds group membership only when access is valid, then removes it automatically when the access window closes or an operator revokes it.</p>
    <figure class="doc-screenshot"><img src="./docs/jit/screenshots/jit-product-overview.jpg" alt="JIT Access product overview showing temporary access, licensed identities, audit, and automatic expiration"><figcaption>JIT Access summarizes the operating model: temporary access, no permanent privileged group membership, licensed identities, and audited changes.</figcaption></figure>
    <h2>How JIT works</h2>
    <ul>
      <li><b>JIT roles</b> define the privileged access profile. A role maps to one or more existing Active Directory groups and defines which access methods are allowed.</li>
      <li><b>Assignments</b> define who can receive a role, how access is activated, and when access is valid.</li>
      <li>The role does not grant access by itself. Access becomes active only through an assignment.</li>
    </ul>
    <h2>Temporary AD group membership</h2>
    <p>When a JIT assignment becomes active, SmartPT can add the target user to the AD group mapped by the role. When the assignment expires, closes, or is revoked, SmartPT removes that group membership.</p>
    <p>This gives operators a controlled way to provide privileged access without converting users into permanent members of sensitive AD groups.</p>
    <h2>Supported assignment types</h2>
    <div class="table-wrap"><table><thead><tr><th>Assignment type</th><th>Use case</th></tr></thead><tbody>
      <tr><td>Manual</td><td>Administrator-granted access for urgent work, incidents, or short operational tasks.</td></tr>
      <tr><td>Scheduled</td><td>Planned access during approved days and time windows, such as recurring maintenance.</td></tr>
      <tr><td>Eligible OTP</td><td>Self-service activation for approved users with OTP verification.</td></tr>
    </tbody></table></div>
    <h2>No in-product approval queue in this release</h2>
    <div class="callout warning">This release does not include an in-product approval queue. Administrators approve access by creating assignments. Eligible OTP controls user activation and verification, but it does not collect approval requests.</div>
    <h2>Recommended learning order</h2>
    <ol>
      <li>Getting Started with JIT Access.</li>
      <li>Access Model, Licensing, and RBAC.</li>
      <li>JIT Portal Overview.</li>
      <li>Settings Overview.</li>
      <li>Creating JIT Roles.</li>
      <li>Creating JIT Assignments.</li>
      <li>Assignment Types.</li>
    </ol>
    <h2>What to configure next</h2>
    <ol>
      <li>Confirm the JIT portal is licensed and the signed-in administrator has JIT administration rights.</li>
      <li>Review the JIT dashboard and access workspace.</li>
      <li>Confirm which existing AD groups should be managed by JIT.</li>
      <li>Create roles only after the AD group mapping and duration limits are clear.</li>
      <li>Create assignments only after the intended operating model is known.</li>
    </ol>
  `),
  'jit-access-model': page('Access Model, Licensing, and RBAC', 'JIT Access', `
    <p class="lead">JIT Access separates product access from privileged access. A user can sign in and still be blocked from JIT actions if the license assignment or RBAC role is missing.</p>
    ${jitArchitectureDiagram()}
    <div class="table-wrap"><table><thead><tr><th>Layer</th><th>Purpose</th></tr></thead><tbody>
      <tr><td>Authentication</td><td>Confirms the signed-in Active Directory user.</td></tr>
      <tr><td>License validation</td><td>Confirms the JIT product license is active and the user is assigned to the product.</td></tr>
      <tr><td>RBAC role assignment</td><td>Defines what the user can do inside JIT.</td></tr>
      <tr><td>JIT role and assignment</td><td>Defines which privileged AD group access can be activated and when.</td></tr>
    </tbody></table></div>
    <h2>Licensed users</h2>
    <p>Licensed Users in Settings controls who consumes a JIT product user license. Assigning a user license allows the user to access the product, but it does not automatically make the user a JIT administrator and does not grant privileged AD group membership.</p>
    <figure class="doc-screenshot"><img src="./docs/jit/screenshots/settings-overview.png" alt="JIT settings showing licensed users and role assignments"><figcaption>Settings separates licensed users from JIT role assignments.</figcaption></figure>
    <h2>RBAC role assignments</h2>
    <p>Role Assignments in Settings controls what a licensed user can do. A JIT administrator needs the correct product role before they can manage roles, assignments, sessions, or settings.</p>
    <ul>
      <li><b>JitAdmin</b> manages roles, assignments, sessions, and JIT settings.</li>
      <li><b>JitEligibleUser</b> activates approved eligible access.</li>
    </ul>
    <h2>JIT roles are different</h2>
    <p>A JIT role maps to one or more existing Active Directory groups. The JIT role only defines the privileged access profile. It does not grant access until an assignment activates it.</p>
    <h2>Recommended setup order</h2>
    <ol>
      <li>Confirm the JIT license is active.</li>
      <li>Assign a product license to the administrator.</li>
      <li>Assign the administrator the required JIT RBAC role.</li>
      <li>Create JIT roles that map to existing AD groups.</li>
      <li>Create assignments for users who should receive temporary access.</li>
      <li>Verify active sessions and automatic removal behavior.</li>
    </ol>
    <div class="callout">Operational rule: keep license assignment, RBAC role assignment, JIT role mapping, and JIT assignment separate. This keeps product access, administrative permission, and privileged AD group membership clear and auditable.</div>
  `),
  'jit-portal-overview': page('JIT Portal Overview', 'JIT Access', `
    <p class="lead">The JIT Portal is the operator workspace for temporary privileged access. It gives administrators one place to confirm license readiness, open the access console, manage settings, review roles and assignments, and monitor active privileged sessions.</p>
    <div class="callout">Screenshots were captured from the local JIT portal in dark mode at 1920x1080.</div>
    <h2>Dashboard overview</h2>
    <p>The dashboard is the first readiness view after sign-in. Use it to confirm that the JIT environment is active before changing access.</p>
    <figure class="doc-screenshot"><img src="./docs/jit/screenshots/dashboard-overview.png" alt="JIT dashboard overview in dark mode"><figcaption>Dashboard status cards and quick actions.</figcaption></figure>
    <h3>JIT Status cards</h3>
    <div class="table-wrap"><table><thead><tr><th>Card</th><th>Purpose</th></tr></thead><tbody>
      <tr><td>License</td><td>Confirms whether the JIT license is active.</td></tr>
      <tr><td>Licensed identities</td><td>Shows the total number of users available under the current license.</td></tr>
      <tr><td>Signed in as</td><td>Confirms the current administrator or operator context.</td></tr>
      <tr><td>Available licensed users</td><td>Shows remaining user capacity before additional users must be licensed.</td></tr>
    </tbody></table></div>
    <h3>Quick Actions</h3>
    <ul>
      <li><b>Open Access Console</b> opens the JIT workspace for roles, assignments, sessions, and overview metrics.</li>
      <li><b>Settings</b> opens JIT configuration and access assignment settings.</li>
      <li><b>Add Licensed Users</b> increases licensed user allocation when supported by the current license.</li>
      <li><b>Reduce Licensed Users</b> reduces licensed user allocation when supported by the current license.</li>
    </ul>
    <h2>JIT Access overview</h2>
    <p>The Overview tab summarizes configured access and current activity. Use it before and after changes to confirm the environment state.</p>
    <figure class="doc-screenshot"><img src="./docs/jit/screenshots/jit-access-overview.png" alt="JIT access overview in dark mode"><figcaption>JIT Access overview metrics.</figcaption></figure>
    <h2>Roles</h2>
    <p>Roles define privileged access profiles. A role maps to one or more existing Active Directory groups and controls which access methods are allowed.</p>
    <figure class="doc-screenshot"><img src="./docs/jit/screenshots/roles-list.png" alt="JIT roles list in dark mode"><figcaption>Configured JIT role inventory.</figcaption></figure>
    <h2>Assignments</h2>
    <p>Assignments connect users to roles. This is where administrators define who can receive privileged access and when that access is valid.</p>
    <figure class="doc-screenshot"><img src="./docs/jit/screenshots/assignments-list.png" alt="JIT assignments list in dark mode"><figcaption>Assignments table for user, role, type, status, details, and actions.</figcaption></figure>
    <p>This release does not include an in-product approval queue. Assignment creation is the administrator approval step.</p>
    <h2>Active Sessions</h2>
    <p>Active Sessions is the real-time monitoring view for current privileged access. Use it to confirm who is elevated, which role granted access, start time, expiration, and whether access should be revoked early.</p>
    <figure class="doc-screenshot"><img src="./docs/jit/screenshots/active-sessions.png" alt="JIT active sessions in dark mode"><figcaption>Live privileged access monitoring.</figcaption></figure>
    <h2>Settings</h2>
    <p>Settings is the administrative configuration area for licensed identities, JIT administrator role assignments, product settings, notification settings, and shared session policy.</p>
    <figure class="doc-screenshot"><img src="./docs/jit/screenshots/settings-overview.png" alt="JIT settings overview in dark mode"><figcaption>JIT license, role assignment, notification, and session settings.</figcaption></figure>
    <h2>Recommended navigation flow</h2>
    <ol>
      <li>Start at Dashboard and confirm license and administrator readiness.</li>
      <li>Open JIT Access > Overview to review the current environment state.</li>
      <li>Review Roles to confirm the access profiles available.</li>
      <li>Review Assignments to understand who can receive access.</li>
      <li>Review Active Sessions to monitor live privilege.</li>
      <li>Review Settings before changing license, role assignment, notification, or session policy.</li>
    </ol>
  `),
  'jit-settings-overview': page('JIT Settings Overview', 'JIT Access', `
    <p class="lead">JIT Settings is the administrative area for product access, RBAC role assignment, notification behavior, SMTP, and shared session policy.</p>
    <p>Open Settings after confirming the dashboard license status. Do this before creating production JIT roles or assignments.</p>
    <figure class="doc-screenshot"><img src="./docs/jit/screenshots/settings-overview.png" alt="JIT settings overview in dark mode"><figcaption>Settings manages product licensing, RBAC, notifications, SMTP, and session policy.</figcaption></figure>
    <h2>Licensed Users</h2>
    <p>Licensed Users defines which Active Directory users are assigned to the JIT product. Assigning a user license allows the user to consume one licensed identity. It does not automatically make the user a JIT administrator and does not grant privileged AD group membership.</p>
    <h2>Role Assignments</h2>
    <p>Role Assignments define product permissions inside JIT. A user normally needs both a product license and a matching role assignment before the portal enables the relevant action.</p>
    <h2>JIT Product Settings</h2>
    <ul>
      <li><b>Eligible requester groups</b> limit who can request or activate eligible access.</li>
      <li><b>Notification recipients</b> receive administrative session notifications.</li>
      <li><b>JIT session email notifications</b> control selected session events.</li>
      <li><b>Notification toggles</b> cover manual activation, eligible OTP activation, session extension, and session revoke.</li>
    </ul>
    <h2>System and Session Policy</h2>
    <p>System / Session settings control portal session behavior and shared delivery settings, including maximum session duration, idle timeout, SMTP, and optional group-specific overrides.</p>
    <div class="callout success">Recommended practice: confirm product licensing, RBAC, SMTP, and session policy before mapping highly privileged AD groups.</div>
  `),
  'jit-roles': page('Creating JIT Roles', 'JIT Access', `
    <p class="lead">JIT roles define the privileged access profile. A role maps JIT Access to one or more existing Active Directory groups and defines which assignment types are allowed.</p>
    <figure class="doc-screenshot"><img src="./docs/jit/screenshots/roles-list.png" alt="JIT roles list in dark mode"><figcaption>Roles inventory before creating access profiles.</figcaption></figure>
    <h2>Before creating a role</h2>
    <ul>
      <li>Confirm the AD group already exists.</li>
      <li>Confirm the group is the correct privilege boundary.</li>
      <li>Confirm the SmartPT service identity can add and remove members from that group.</li>
      <li>Confirm the duration limits match the business task.</li>
      <li>Test with a non-production group before Tier 0 use.</li>
    </ul>
    <h2>Create Role</h2>
    <p>Open <code>JIT Access > Roles</code>, then select <b>Create Role</b>.</p>
    <figure class="doc-screenshot"><img src="./docs/jit/screenshots/role-create-modal.png" alt="Create JIT role modal in dark mode"><figcaption>Create Role defines identity, access modes, duration limits, OTP, reminders, and AD group mapping.</figcaption></figure>
    <h2>Role fields</h2>
    <div class="table-wrap"><table><thead><tr><th>Field</th><th>Purpose</th></tr></thead><tbody>
      <tr><td>Display name</td><td>Human-readable role name shown in the portal.</td></tr>
      <tr><td>Role ID</td><td>Stable identifier generated from the display name.</td></tr>
      <tr><td>Description</td><td>Business purpose for the role.</td></tr>
      <tr><td>Enabled</td><td>Controls whether the role can be used for new access.</td></tr>
      <tr><td>Allow manual / scheduled / eligible</td><td>Controls which assignment types can use this role.</td></tr>
      <tr><td>OTP required</td><td>Requires OTP verification for eligible activation.</td></tr>
      <tr><td>Max manual / max total minutes</td><td>Caps active access duration.</td></tr>
      <tr><td>AD Groups</td><td>Existing AD group distinguished names managed by this role.</td></tr>
    </tbody></table></div>
    <h2>Save and verify</h2>
    <ol>
      <li>Confirm the role appears in the Roles table.</li>
      <li>Confirm access type badges match the intended model.</li>
      <li>Confirm the group count is correct.</li>
      <li>Create assignments only after the role mapping is reviewed.</li>
    </ol>
  `),
  'jit-assignments': page('Creating JIT Assignments', 'JIT Access', `
    <p class="lead">Assignments connect users to JIT roles. They define who can receive privileged access, how access starts, and when it ends.</p>
    <figure class="doc-screenshot"><img src="./docs/jit/screenshots/assignments-list.png" alt="JIT assignments list in dark mode"><figcaption>Assignments show user, role, type, status, details, and revoke action.</figcaption></figure>
    <h2>Create Assignment</h2>
    <p>Open <code>JIT Access > Assignments</code>, then select <b>Create Assignment</b>.</p>
    <figure class="doc-screenshot"><img src="./docs/jit/screenshots/assignment-create-eligible.png" alt="Create eligible JIT assignment in dark mode"><figcaption>Every assignment requires a role, target user, assignment type, and audited reason.</figcaption></figure>
    <h2>Required fields</h2>
    <ul>
      <li><b>Role:</b> JIT role that maps to the AD group access.</li>
      <li><b>User:</b> target user by <code>samAccountName</code>.</li>
      <li><b>Assignment type:</b> Eligible, Scheduled, or Manual.</li>
      <li><b>Reason:</b> business reason recorded for audit.</li>
    </ul>
    <h2>Manual assignment</h2>
    <p>Manual assignments activate immediately and expire automatically. Use them for urgent operational work, incident response, or one-time maintenance.</p>
    <figure class="doc-screenshot"><img src="./docs/jit/screenshots/assignment-create-manual.png" alt="Create manual JIT assignment in dark mode"><figcaption>Manual assignment uses a fixed duration.</figcaption></figure>
    <h2>Scheduled assignment</h2>
    <p>Scheduled assignments are enforced by SmartPT. Use them for recurring maintenance windows.</p>
    <figure class="doc-screenshot"><img src="./docs/jit/screenshots/assignment-create-scheduled.png" alt="Create scheduled JIT assignment in dark mode"><figcaption>Scheduled assignment defines days, time window, and validity dates.</figcaption></figure>
    <h2>Eligible assignment</h2>
    <p>Eligible assignments let approved users activate access themselves after OTP verification. Access starts only after successful verification and expires automatically.</p>
    <h2>Revoke</h2>
    <p>Revoking an assignment removes active access or prevents the assignment from being used again, depending on assignment state. Use revoke when access is no longer needed, was configured incorrectly, or must be stopped early.</p>
    <div class="callout warning">This release does not include an in-product approval queue. Assignment creation is the administrator approval step.</div>
  `),
  'jit-assignment-types': page('Assignment Types', 'JIT Access', `
    <p class="lead">JIT Access supports three assignment types: Manual, Scheduled, and Eligible. Choose the assignment type based on how access should start.</p>
    <h2>Manual</h2>
    <p>Manual access is administrator-granted and starts immediately.</p>
    <ul>
      <li>Use for urgent work, incident response, or one-time maintenance.</li>
      <li>Expires automatically after the configured duration.</li>
      <li>Can be revoked early.</li>
      <li>Must stay within the role duration limits.</li>
    </ul>
    <h2>Scheduled</h2>
    <p>Scheduled access is automatic access during defined time windows.</p>
    <ul>
      <li>Use for recurring maintenance windows.</li>
      <li>SmartPT service grants access inside the configured window.</li>
      <li>SmartPT removes access outside the configured window.</li>
      <li>State is reconciled after service restart or missed enforcement cycles.</li>
    </ul>
    <h2>Eligible OTP</h2>
    <p>Eligible access lets approved users activate access themselves after OTP verification.</p>
    <ul>
      <li>The user sees only their own eligible assignments.</li>
      <li>OTP is sent to contact details sourced from Active Directory.</li>
      <li>Users cannot type their own phone number or email address.</li>
      <li>Mobile OTP requires the user's Active Directory <code>mobile</code> attribute. International numbers should include the country prefix; the <code>+</code> sign is optional.</li>
      <li>Access starts only after successful verification and expires automatically.</li>
    </ul>
    <h2>Decision guide</h2>
    <div class="table-wrap"><table><thead><tr><th>Need</th><th>Use</th></tr></thead><tbody>
      <tr><td>Immediate administrator-granted access</td><td>Manual</td></tr>
      <tr><td>Recurring maintenance window</td><td>Scheduled</td></tr>
      <tr><td>Approved self-service activation</td><td>Eligible OTP</td></tr>
      <tr><td>Manager or security approval before activation</td><td>Not supported in this release</td></tr>
    </tbody></table></div>
    <div class="callout">Practical recommendation: start with Manual for first validation, then add Scheduled for recurring operations, and use Eligible OTP only after license assignment, RBAC, OTP delivery, and session monitoring have been tested.</div>
  `),
  'jit-eligible-otp': page('Eligible OTP Self-Service', 'JIT Access', `
    <p class="lead">Eligible OTP access lets an approved user activate temporary privileged access without holding standing membership in the target Active Directory group.</p>
    <p>The administrator prepares the access path. The user activates it only when needed, verifies with OTP, and receives a time-limited session. JIT Access removes access automatically when the session expires or when an administrator revokes it.</p>
    ${eligibleOtpFlowDiagram()}
    <h2>End-to-end flow</h2>
    <ol>
      <li>A JIT administrator assigns a product license to the user.</li>
      <li>The administrator creates or confirms a JIT role that allows Eligible access and requires OTP.</li>
      <li>The administrator creates an Eligible assignment for the user.</li>
      <li>The user signs in to the JIT portal.</li>
      <li>The user opens Activate Access and starts the assigned role.</li>
      <li>JIT Access sends OTP to an AD-sourced delivery channel, such as WhatsApp/mobile.</li>
      <li>The user verifies the OTP.</li>
      <li>JIT Access activates the session and adds the user to the mapped AD group.</li>
      <li>A JIT administrator monitors the active session.</li>
      <li>Access expires automatically or can be revoked early.</li>
    </ol>
    <h2>Administrator setup</h2>
    <ul>
      <li>Assign the user a JIT product license.</li>
      <li>Create or confirm a JIT role.</li>
      <li>Enable Allow eligible on the role.</li>
      <li>Enable OTP required when verification is required.</li>
      <li>Map the role to the existing AD group that should be controlled.</li>
      <li>Create an Eligible assignment for the target user.</li>
    </ul>
    <figure class="doc-screenshot"><img src="./docs/jit/screenshots/eligible-admin-role-list.png" alt="Eligible JIT role configured in dark mode"><figcaption>Eligible role with OTP behavior and time limits.</figcaption></figure>
    <figure class="doc-screenshot"><img src="./docs/jit/screenshots/eligible-admin-assignment-list.png" alt="Eligible assignment for Joe in dark mode"><figcaption>Eligible assignment remains inactive until the user activates it.</figcaption></figure>
    <h2>User activation</h2>
    <p>The user signs in with their own account and sees only the access they are allowed to activate.</p>
    <figure class="doc-screenshot"><img src="./docs/jit/screenshots/eligible-joe-activation-only.png" alt="Joe activation-only JIT portal in dark mode with yellow annotation"><figcaption>Joe sees only activation access, not administrator settings or management tabs.</figcaption></figure>
    <figure class="doc-screenshot"><img src="./docs/jit/screenshots/eligible-joe-access-active.png" alt="Joe eligible access after OTP activation in dark mode"><figcaption>After verification, the eligible assignment shows an active access window.</figcaption></figure>
    <ul>
      <li>OTP contact details come from Active Directory.</li>
      <li>The user cannot type a new phone number or email address.</li>
      <li>Mobile OTP requires the AD user to have a value in the Active Directory <code>mobile</code> attribute.</li>
      <li>The mobile value must include a country prefix for international numbers. The <code>+</code> sign is supported but not required.</li>
      <li>Israel numbers can be stored without <code>972</code>. Other countries should include the country prefix, for example <code>62</code> or <code>+62</code>.</li>
      <li>WhatsApp/mobile delivery uses the configured mobile channel.</li>
      <li>Email can be used only when enabled and available.</li>
      <li>OTP verification starts the privileged session.</li>
      <li>OTP does not create permanent AD group membership.</li>
    </ul>
    <h2>Active session monitoring</h2>
    <p>After OTP verification, JIT Access creates an active JIT session. The administrator can confirm it under JIT Access > Active Sessions.</p>
    <figure class="doc-screenshot"><img src="./docs/jit/screenshots/eligible-admin-active-session.png" alt="Joe active JIT session visible to Jim in dark mode"><figcaption>Jim can monitor Joe's active eligible session and revoke access if needed.</figcaption></figure>
    <h2>What happens in Active Directory</h2>
    <p>When OTP verification succeeds, JIT Access adds the user to the AD group mapped by the JIT role. When the session expires or is revoked, JIT Access removes the user from that AD group. SmartPT enforces this behavior from the configured session state.</p>
    <h2>No in-product approval queue</h2>
    <div class="callout warning">Eligible OTP does not collect approval requests in this release. The approval decision happens before activation when an administrator creates the eligible assignment.</div>
    <h2>Operational checks</h2>
    <div class="table-wrap"><table><thead><tr><th>Symptom</th><th>Check</th></tr></thead><tbody>
      <tr><td>Eligible access does not appear</td><td>Confirm product license assignment, Eligible assignment, enabled role, and matching samAccountName.</td></tr>
      <tr><td>OTP cannot be sent</td><td>Confirm AD <code>mobile</code>/<code>mail</code> attributes, enabled channel, SMTP fallback, and messaging service connectivity. For mobile OTP, the <code>mobile</code> value must include the required country prefix unless the number is local Israeli format.</td></tr>
      <tr><td>Activation succeeds but access is not visible</td><td>Confirm mapped AD group DN, SmartPT service identity rights, Active Sessions, and audit events.</td></tr>
    </tbody></table></div>
  `),
  'jit-sessions-revoke': page('Monitoring, Sessions, Extend, and Revoke', 'JIT Access', `
    <p class="lead">Active Sessions is the operations view for live privileged access. Use it to confirm who is elevated, which role is active, when access expires, and whether the session should be extended or revoked.</p>
    ${jitOperationsFlowDiagram()}
    <figure class="doc-screenshot"><img src="./docs/jit/screenshots/sessions-joe-active-actions.png" alt="Joe active eligible session with extend and revoke actions highlighted"><figcaption>Jim can monitor Joe's active eligible session and see the available Extend and Revoke actions.</figcaption></figure>
    <h2>What this page solves</h2>
    <p>Temporary access is only useful when operators can see it while it is active. Active Sessions shows current privileged sessions and gives JIT administrators immediate action buttons for allowed sessions.</p>
    <h2>What Active Sessions shows</h2>
    <ul>
      <li>User account.</li>
      <li>JIT role.</li>
      <li>Assignment type.</li>
      <li>Start time, end time, and remaining time.</li>
      <li>Current status.</li>
      <li>Available actions.</li>
    </ul>
    <h2>Extend a session</h2>
    <p>Use Extend only when the business task is still active and the user still needs privileged access.</p>
    <figure class="doc-screenshot"><img src="./docs/jit/screenshots/sessions-joe-extend-modal.png" alt="Extend Joe session modal with audit reason highlighted"><figcaption>The extension dialog records additional minutes and an audit reason.</figcaption></figure>
    <p>The reason is important. It gives the audit trail enough context to explain why the original access window was not enough.</p>
    <h2>Revoke a session</h2>
    <p>Use Revoke when access should stop before the scheduled or configured end time. Revoking a session ends the active JIT session and removes the user from the AD group mapped by the role.</p>
    <div class="callout warning">Do not revoke a production session unless the user has completed the task, the access was opened by mistake, or there is a security reason to stop it immediately.</div>
    <h2>Operational checks</h2>
    <ul>
      <li>Before extending, confirm the user is still working on the approved task.</li>
      <li>Keep the extension short and enter a clear reason.</li>
      <li>Before revoking, confirm the correct user and role.</li>
      <li>Review the session list again after revoke.</li>
    </ul>
  `),
  'jit-notifications-session-policy': page('Notifications and Session Policy', 'JIT Access', `
    <p class="lead">JIT Settings controls how session events are announced and how long portal sessions can remain active. Review these settings before enabling production roles.</p>
    ${jitSettingsPolicyDiagram()}
    <h2>Notification recipients</h2>
    <p>Notification recipients define which administrators or operational mailboxes receive JIT session event emails.</p>
    <figure class="doc-screenshot"><img src="./docs/jit/screenshots/settings-notifications-highlight.png" alt="JIT notification recipients and session notification toggle highlighted"><figcaption>Use recipients and global notification enablement to control who receives session event emails.</figcaption></figure>
    <h2>Session event notifications</h2>
    <p>Session event toggles decide which events should generate email notifications.</p>
    <figure class="doc-screenshot"><img src="./docs/jit/screenshots/settings-notification-events-highlight.png" alt="JIT session event notification toggles highlighted"><figcaption>Manual start, Eligible OTP activation, extension, and revoke can be controlled separately.</figcaption></figure>
    <ul>
      <li>Manual session start.</li>
      <li>Eligible OTP activation.</li>
      <li>Session extension.</li>
      <li>Session revoke.</li>
    </ul>
    <h2>Session policy and SMTP</h2>
    <p>System / Session settings define shared portal session behavior and mail delivery configuration.</p>
    <figure class="doc-screenshot"><img src="./docs/jit/screenshots/settings-session-policy-highlight.png" alt="JIT session policy SMTP and group override settings highlighted"><figcaption>Session policy, SMTP delivery, and group override settings are managed from JIT Settings.</figcaption></figure>
    <ul>
      <li><b>Max session minutes</b> controls the longest portal session window.</li>
      <li><b>Idle timeout minutes</b> controls how long an inactive portal session remains valid.</li>
      <li><b>Global Email (SMTP)</b> controls shared mail delivery for notifications and email fallback.</li>
      <li><b>Group overrides</b> allow different session limits for specific groups when configured.</li>
    </ul>
    <div class="callout">Recommended practice: start with a small recipient list, verify delivery, and test notifications with a non-production role before relying on production session alerts.</div>
  `),
  'jit-troubleshooting': page('JIT Troubleshooting', 'JIT Access', `
    <p class="lead">Use this page when JIT Portal access, eligible activation, OTP delivery, notifications, or session enforcement does not behave as expected.</p>
    <p>Start with the visible symptom, then check the related access layer. Most issues are caused by missing product assignment, missing JIT assignment, expired timing, OTP policy limits, or IIS application state.</p>
    <h2>User cannot access JIT Portal</h2>
    <p>If a user signs in but cannot access the JIT Portal, check product access first.</p>
    <ul>
      <li>The user must have a JIT product license assignment.</li>
      <li>The user must have the correct JIT role assignment for administration, such as JitAdmin.</li>
      <li>Domain Admins can access management areas without a separate JIT role assignment.</li>
      <li>Normal users do not receive administrator access unless they are explicitly assigned.</li>
    </ul>
    <div class="callout warning">If the user is not a Domain Admin and does not have a JIT role assignment, access is blocked by design.</div>
    <h2>Eligible activation does not appear</h2>
    <p>If a Joe-style eligible user signs in but does not see the expected activation option, check the assignment.</p>
    <ul>
      <li>The user must have a JIT product license.</li>
      <li>A JIT administrator must create an Eligible assignment for the user.</li>
      <li>The assignment must match the user's samAccountName.</li>
      <li>The role must be enabled and allow Eligible access.</li>
      <li>The assignment must have started and still be valid.</li>
    </ul>
    <p>The user should contact a JIT administrator and ask them to confirm the Eligible assignment, role, timing, and license assignment.</p>
    <h2>OTP send is limited</h2>
    <p>OTP delivery is controlled by JIT Settings.</p>
    <ul>
      <li>OTP policy and resend limits.</li>
      <li>OTP time-to-live.</li>
      <li>Allowed delivery channel.</li>
      <li>AD mobile or mail attributes.</li>
      <li>For mobile OTP, the AD user must have a phone number in the <code>mobile</code> attribute.</li>
      <li>The mobile number must include the required country prefix. The <code>+</code> sign is supported but not required. Israel numbers can be stored without <code>972</code>; other countries should include the prefix, for example <code>62</code> or <code>+62</code>.</li>
      <li>Messaging service connectivity.</li>
      <li>SMTP fallback if email is enabled.</li>
    </ul>
    <p>If the user reaches an OTP send or retry limit, wait for the configured policy window or ask an administrator to review JIT Settings.</p>
    <h2>Eligible user cannot activate after revoke</h2>
    <p>If an administrator revokes an active eligible session, the eligible user may be blocked from activating the same role again. This is by design. Revoke is treated as an administrative stop action, not just a normal session close.</p>
    <p>Administrators can control this behavior through JIT Settings and session policy.</p>
    <h2>SMTP or notification failures</h2>
    <ul>
      <li>Check SMTP host and port.</li>
      <li>Check firewall rules between the JIT service server and the SMTP relay.</li>
      <li>Confirm TLS or STARTTLS requirements.</li>
      <li>Confirm SMTP authentication settings and credential reference.</li>
      <li>Check MFA or conditional access on the SMTP account if enabled.</li>
      <li>Confirm notification recipients in JIT Settings.</li>
    </ul>
    <div class="callout">If the relay requires MFA for interactive users, use a supported service account, application password, connector, or relay configuration that SmartPT can use for automated delivery.</div>
    <h2>SmartPT service or service identity permissions</h2>
    <p>By default, JIT Access uses the preinstalled SmartPT service identity. Customers normally do not need to change this identity.</p>
    <p>Check service identity permissions only when group membership changes fail after the portal and assignment checks are correct.</p>
    <ul>
      <li>Read the target user and mapped group.</li>
      <li>Add the user to the mapped AD group when access starts.</li>
      <li>Remove the user from the mapped AD group when access expires or is revoked.</li>
    </ul>
    <h2>Portal and service state</h2>
    <p>If the portal does not load or the JIT UI shows stale or missing data, confirm the JIT portal and related SmartPT service are running.</p>
    <ul>
      <li>Confirm the JIT portal is reachable.</li>
      <li>Confirm the JIT service is healthy.</li>
      <li>Check Windows Event Viewer for IIS, ASP.NET Core, or authentication errors.</li>
    </ul>
    <h2>Quick escalation checklist</h2>
    <ul>
      <li>Signed-in username.</li>
      <li>User type: Domain Admin, JIT administrator, or eligible user.</li>
      <li>Role ID and assignment ID if available.</li>
      <li>Exact time of failure.</li>
      <li>Error message or audit detail.</li>
      <li>JIT portal and service status.</li>
    </ul>
  `),
  'jit-admin': page('JIT admin guide', 'JIT Access', `
    <p class="lead">JIT administrators create roles, map AD groups, assign users, review active sessions, and revoke access when needed.</p>
    <h2>Where to go</h2>
    <p><code>JIT Access > Roles</code>, <code>JIT Access > Assignments</code>, and <code>JIT Access > Active Sessions</code></p>
    <h2>Role management</h2>
    <ol>
      <li>Create a role with a display name and description.</li>
      <li>Map one or more existing Active Directory group DNs.</li>
      <li>Enable allowed access modes: Manual, Scheduled, Eligible.</li>
      <li>Set maximum manual and total session durations.</li>
      <li>Enable OTP where eligible self-service access requires verification.</li>
      <li>Save the role and test with a non-production group before using high-privilege groups.</li>
    </ol>
    <h2>Create a JIT role</h2>
    <div class="table-wrap"><table><thead><tr><th>Field</th><th>What to enter</th><th>Operational note</th></tr></thead><tbody>
      <tr><td>Role ID</td><td>Stable identifier such as <code>domain-admin</code> or <code>tier1-admin</code>.</td><td>Use a value that will not change after assignments exist.</td></tr>
      <tr><td>Display name</td><td>Clear name shown to administrators and eligible users.</td><td>Use the real business role name, not only the AD group name.</td></tr>
      <tr><td>Description</td><td>Reason this access exists.</td><td>Include the system or support function covered by the role.</td></tr>
      <tr><td>AD group DNs</td><td>One or more existing Active Directory distinguished names.</td><td>JIT adds and removes users from these groups during active access.</td></tr>
      <tr><td>Enabled</td><td>On or off.</td><td>Disabling a role prevents new activation and should be followed by active-session review.</td></tr>
    </tbody></table></div>
    <h2>Create an assignment</h2>
    <ol>
      <li>Open <code>JIT Access > Assignments</code>.</li>
      <li>Select the role.</li>
      <li>Enter and validate the target user.</li>
      <li>Select Manual, Scheduled, or Eligible.</li>
      <li>Set duration, schedule, OTP, and notification options according to the selected type.</li>
      <li>Save and confirm the assignment appears in the assignment list.</li>
    </ol>
    <h2>Review access</h2>
    <ul>
      <li>Use <code>Active Sessions</code> to see current active access.</li>
      <li>Use revoke when the access is no longer needed or was started by mistake.</li>
      <li>Use audit records to confirm add/remove behavior and investigate failed enforcement.</li>
    </ul>
    <h2>Session management</h2>
    <ul>
      <li>Admins can view active sessions.</li>
      <li>Manual and eligible sessions can be extended when policy allows it.</li>
      <li>Any active session can be revoked by an authorized JIT admin.</li>
      <li>Revocation removes the user from the mapped AD group immediately.</li>
    </ul>
  `),
  'jit-user': page('JIT user guide', 'JIT Access', `
    <p class="lead">Eligible users can activate their own approved temporary access after OTP verification. Admin settings and operational controls remain hidden.</p>
    <h2>Where to go</h2>
    <p><code>JIT Access > My Eligible Access</code></p>
    <h2>Activation steps</h2>
    <ol>
      <li>Open the JIT portal.</li>
      <li>Review the eligible assignment list for your account.</li>
      <li>Select the role to activate.</li>
      <li>Choose the allowed OTP delivery channel.</li>
      <li>Send OTP.</li>
      <li>Enter the OTP and verify.</li>
      <li>Use the privileged access only during the active session window.</li>
    </ol>
    <h2>What the user sees</h2>
    <ul>
      <li>Only eligible assignments for the signed-in user.</li>
      <li>The role name, allowed duration, and active timer where available.</li>
      <li>OTP send and verify controls when the role requires verification.</li>
      <li>No role management, settings, license controls, or other users' sessions.</li>
    </ul>
    <h2>If activation fails</h2>
    <div class="table-wrap"><table><thead><tr><th>Message or symptom</th><th>What to check</th></tr></thead><tbody>
      <tr><td>No eligible access is listed</td><td>The user does not have an eligible assignment or the role is disabled.</td></tr>
      <tr><td>OTP cannot be sent</td><td>Confirm the AD mobile or mail attribute exists and the channel is enabled. For mobile OTP, the AD <code>mobile</code> value must include the required country prefix unless the number is local Israeli format.</td></tr>
      <tr><td>OTP expired</td><td>Send a new code. Only the current valid code can activate access.</td></tr>
      <tr><td>Access did not appear in AD</td><td>Ask a JIT admin to check service health, AD permissions, and audit details.</td></tr>
    </tbody></table></div>
    <div class="callout">OTP contact details come from Active Directory. Users cannot type their own phone or email in the activation flow. Mobile OTP uses the Active Directory <code>mobile</code> attribute. The <code>+</code> sign is optional, but non-Israel numbers should include the country prefix.</div>
  `),
  'jit-settings': page('JIT roles and assignments', 'JIT Access', `
    <p class="lead">JIT uses one role model with three assignment types: Manual, Scheduled, and Eligible.</p>
    <h2>Role fields</h2>
    <div class="table-wrap"><table><thead><tr><th>Field</th><th>Purpose</th></tr></thead><tbody>
      <tr><td>Role ID</td><td>Unique immutable identifier.</td></tr>
      <tr><td>Display name</td><td>Human-readable role name.</td></tr>
      <tr><td>Description</td><td>Explains why the role exists and what operational access it grants.</td></tr>
      <tr><td>Enabled</td><td>Controls whether new access can be granted from the role.</td></tr>
      <tr><td>AD group DNs</td><td>One or more AD groups affected by the role.</td></tr>
      <tr><td>Allow manual</td><td>Allows admin-initiated immediate access.</td></tr>
      <tr><td>Allow scheduled</td><td>Allows automatic access during time windows.</td></tr>
      <tr><td>Allow eligible</td><td>Allows user self-service activation.</td></tr>
      <tr><td>OTP required</td><td>Requires verification before eligible activation.</td></tr>
      <tr><td>Max manual minutes</td><td>Caps admin-started manual access.</td></tr>
      <tr><td>Max total minutes</td><td>Caps the total active session duration.</td></tr>
      <tr><td>Notify before expiry</td><td>Controls warning notifications before the active session ends.</td></tr>
    </tbody></table></div>
    <h2>Assignment types</h2>
    <ul>
      <li><b>Manual:</b> starts immediately and expires automatically.</li>
      <li><b>Scheduled:</b> grants and removes access based on configured days and time window.</li>
      <li><b>Eligible:</b> waits for the user to activate with OTP before access starts.</li>
    </ul>
    <h2>Manual assignment settings</h2>
    <ul>
      <li><b>Target user:</b> validated AD user receiving temporary access.</li>
      <li><b>Duration minutes:</b> must be within the role limit.</li>
      <li><b>Reason:</b> business reason for the privileged session.</li>
      <li><b>Notify before expiry:</b> optional reminder before removal.</li>
    </ul>
    <h2>Scheduled assignment settings</h2>
    <ul>
      <li><b>Days of week:</b> days when access is allowed.</li>
      <li><b>Start and end time:</b> local daily access window.</li>
      <li><b>Valid from / valid until:</b> date range where the schedule is valid.</li>
      <li><b>Enforcement:</b> SmartPT adds access inside the window and removes it outside the window.</li>
    </ul>
    <h2>Eligible assignment settings</h2>
    <ul>
      <li><b>OTP required:</b> requires verification before self-service activation.</li>
      <li><b>Max session minutes:</b> longest access window the user can activate.</li>
      <li><b>Delivery channel:</b> email, mobile, or configured fallback based on AD attributes.</li>
      <li><b>User view:</b> the user sees only their own eligible access.</li>
    </ul>
    <h2>Recommended role design</h2>
    <div class="cards">
      <article class="card"><h3>One purpose per role</h3><p>Use a role for a clear access purpose, such as domain administration, server operation, or application administration.</p></article>
      <article class="card"><h3>Short durations</h3><p>Keep maximum durations close to the operational task. Longer access windows increase exposure.</p></article>
      <article class="card"><h3>Test before Tier 0</h3><p>Validate add/remove behavior with a non-production AD group before mapping high-privilege groups.</p></article>
    </div>
  `),
  'jit-security': page('JIT security model', 'JIT Access', `
    <p class="lead">JIT is designed to keep privileged access temporary, auditable, and enforced by the service.</p>
    <h2>Mandatory guarantees</h2>
    <ul>
      <li>The visible UI does not grant access by itself.</li>
      <li>Unauthorized calls return 403 and are auditable.</li>
      <li>License and session enforcement are mandatory.</li>
      <li>OTP values are hashed at rest and never returned to the client.</li>
      <li>Scheduled access is enforced by a service hosted service, not Windows Scheduled Tasks.</li>
      <li>Server restart triggers reconciliation so stale access does not remain.</li>
    </ul>
    <h2>Enforcement lifecycle</h2>
    <ol>
      <li>SmartPT validates license, product session, and JIT authorization.</li>
      <li>SmartPT validates the role, assignment type, duration, schedule, and OTP requirement.</li>
      <li>For activation, service adds the user to mapped AD groups.</li>
      <li>Session state records start time, end time, assignment type, actor, and target.</li>
      <li>Background enforcement removes membership on expiration, schedule close, revoke, role disable, or startup reconciliation.</li>
    </ol>
    <h2>Administrative boundaries</h2>
    <ul>
      <li>JIT service must run under a dedicated service identity.</li>
      <li>JIT permissions must be limited to the AD groups it manages.</li>
      <li>JIT RBAC is enforced by the service on each API request.</li>
      <li>AD group membership is used for privilege enforcement, not for granting arbitrary JIT admin UI rights.</li>
    </ul>
    <h2>Audit events</h2>
    <p>JIT audits role management, assignment creation, activation, expiration, revocation, OTP sent, OTP verified, OTP failed, and policy violations.</p>
  `),
  'security-model': page('Shared security model', 'Security', `
    <p class="lead">SmartPT runs in the customer environment, uses Active Directory identity data, checks license and product permissions, and records sensitive actions.</p>
    <h2>Operating boundaries</h2>
    <div class="cards">
      <article class="card"><h3>On-prem control</h3><p>Product portals, services, logs, and configuration run in the customer environment.</p></article>
      <article class="card"><h3>AD as source</h3><p>Users, groups, phone, and email attributes come from Active Directory.</p></article>
      <article class="card"><h3>SmartPT authorization</h3><p>UI visibility does not replace SmartPT authorization, license, MFA, and policy checks.</p></article>
    </div>
    <div class="diagram">
      <div class="diagram-grid five">
        <div class="diagram-box accent"><strong>Active Directory</strong><span>Identity, groups, mail, and mobile attributes.</span></div>
        <div class="diagram-arrow">&rarr;</div>
        <div class="diagram-box"><strong>SmartPT Core</strong><span>License, root RBAC, shared MFA recovery, and product visibility.</span></div>
        <div class="diagram-arrow">&rarr;</div>
        <div class="diagram-box good"><strong>Product services</strong><span>JIT Access and AD Control enforce product roles, policy, actions, and audit.</span></div>
      </div>
      <div class="diagram-note">SmartPT Core validates license state and product entry. Product portals still enforce product-specific privileged actions.</div>
    </div>
    <h2>Shared controls</h2>
    <ul>
      <li>Active Directory authentication and product sessions.</li>
      <li>Role-based access and feature gating in each product service.</li>
      <li>Core license validation before product use.</li>
      <li>Shared two-factor verification where enforced by SmartPT settings.</li>
      <li>Correlation IDs in product responses and audit events.</li>
      <li>No OTP code, generated password, SMTP secret, or authenticator secret in audit logs.</li>
    </ul>
    <h2>Shared MFA model</h2>
    <p>SmartPT shared two-factor verification is handled through the SmartPT Verify service. A successful MFA challenge allows the user to continue to the requested portal, but it does not grant product permission by itself.</p>
    <figure class="doc-screenshot"><img src="./docs/core/screenshots/shared-2fa-avi-reset-highlight.png" alt="Shared 2FA reset in SmartPT Console"><figcaption>Console administrators can reset a user's shared MFA enrollment when re-enrollment is required.</figcaption></figure>
    <ul>
      <li>MFA is a second factor, not a replacement for RBAC.</li>
      <li>Product access still requires license and role assignment.</li>
      <li>Reset MFA only clears enrollment and requires the user to enroll again on the next sign-in.</li>
      <li>MFA recovery should be treated as an administrative security action.</li>
    </ul>
    <h2>Logs and audit boundaries</h2>
    <p>SmartPT logs should support investigation without exposing secrets. Use audit details, actor, target, action, result, and timestamp to connect UI errors, service decisions, and audit entries.</p>
    <figure class="doc-screenshot"><img src="./docs/core/screenshots/recent-activity-highlight.png" alt="SmartPT Console recent activity and audit visibility"><figcaption>Recent Activity provides quick operational visibility across Core and product portals.</figcaption></figure>
    <div class="table-wrap"><table><thead><tr><th>Area</th><th>What should be logged</th><th>What should not be logged</th></tr></thead><tbody>
      <tr><td>Authentication</td><td>Sign-in success/failure, actor, result, timestamp, audit detail.</td><td>Passwords or authenticator secrets.</td></tr>
      <tr><td>MFA</td><td>Enrollment complete, verification result, reset action, actor, target.</td><td>TOTP code, shared signing key, QR secret.</td></tr>
      <tr><td>JIT Access</td><td>Role, assignment, activation, extension, revoke, expiration, OTP events.</td><td>OTP value or privileged credentials.</td></tr>
      <tr><td>AD Control</td><td>Password reset, unlock, profile update, group changes, OTP events.</td><td>Generated password value after the shown-once moment.</td></tr>
      <tr><td>Core license</td><td>License status, validation result, and cancellation action.</td><td>License secrets or activation material.</td></tr>
    </tbody></table></div>
    <h2>Fail-closed behavior</h2>
    <p>If Core license validation is not active, SmartPT access should fail closed. Administrators should restore license state from SmartPT Console before validating JIT Access or AD Control actions.</p>
    <figure class="doc-screenshot"><img src="./docs/core/screenshots/license-status-highlight.png" alt="SmartPT Console license and product status highlighted"><figcaption>License validation is a shared platform check before product use.</figcaption></figure>
  `),
  'audit': page('Audit records', 'Operations', `
    <p class="lead">Audit records help administrators review sensitive actions, configuration changes, and enforcement results.</p>
    <h2>Audit principles</h2>
    <ul>
      <li>Every sensitive action should record actor, target, action, result, timestamp, and audit detail.</li>
      <li>Generated passwords, OTP codes, and SMTP secrets are not logged.</li>
      <li>Configuration changes should be recorded with a safe diff summary.</li>
      <li>Audit export can use JSONL or CSV when enabled for administrators.</li>
    </ul>
    <h2>Example audit areas</h2>
    <div class="table-wrap"><table><thead><tr><th>Module</th><th>Actions</th></tr></thead><tbody>
      <tr><td>AD Control</td><td>OTP send, OTP verify, password reset, account unlock, group add/remove, profile update, settings save.</td></tr>
      <tr><td>JIT</td><td>Role created/updated, assignment created/revoked, session activated/extended/revoked, OTP sent/verified/failed.</td></tr>
      <tr><td>System</td><td>Health check, license validation, authentication/session events, settings validation.</td></tr>
    </tbody></table></div>
  `),
  'troubleshooting': page('Troubleshooting', 'Operations', `
    <p class="lead">Use diagnostics, audit details, and audit logs to isolate issues quickly.</p>
    <h2>Common checks</h2>
    <div class="table-wrap"><table><thead><tr><th>Issue</th><th>Check</th></tr></thead><tbody>
      <tr><td>Access not assigned</td><td>Confirm the user has a license assignment and exactly one operator role for the product.</td></tr>
      <tr><td>Session expired</td><td>Sign in again and confirm idle timeout policy.</td></tr>
      <tr><td>OTP not received</td><td>Confirm AD <code>mail</code>/<code>mobile</code> attributes, delivery channel settings, resend limits, and messaging service connectivity. For mobile OTP, verify the country prefix in the AD <code>mobile</code> value.</td></tr>
      <tr><td>Protected user not visible</td><td>This is expected for Tier 0, protected users, and members of protected groups.</td></tr>
      <tr><td>JIT access not removed</td><td>Check product health, role mapping, and audit events.</td></tr>
      <tr><td>License inactive</td><td>Check Core license status, server binding, activation state, and subscription state.</td></tr>
    </tbody></table></div>
    <h2>Useful evidence</h2>
    <ul>
      <li>Exact URL and product page.</li>
      <li>Signed-in user.</li>
      <li>Correlation ID from the UI or API response.</li>
      <li>Timestamp and target user or role.</li>
      <li>Relevant audit log entries.</li>
    </ul>
  `),
  'release-notes': page('Release notes', 'Operations', `
    <p class="lead">This documentation release reflects the current SmartPT Core, AD Control, and JIT Access customer guidance available on July 14, 2026.</p>
    <h2>Included in this documentation release</h2>
    <ul>
      <li>SmartPT Core installation and licensing guide.</li>
      <li>AD Control admin, operator, settings, and security guides.</li>
      <li>JIT admin, user, role, assignment, and security guides.</li>
      <li>Audit and troubleshooting guidance.</li>
      <li>SmartPT Core setup download and installation validation guidance.</li>
    </ul>
    <h2>Documentation scope</h2>
    <p>This documentation covers customer installation, configuration, operation, and troubleshooting guidance for SmartPT Core, AD Control, and JIT Access.</p>
  `),
  'privacy': page('Privacy notice', 'Policy', `
    <p class="lead">This documentation site is a static customer guide for SmartPT Core, JIT Access, and AD Control. It does not process customer Active Directory data by itself.</p>
    <h2>What this docs site collects</h2>
    <ul>
      <li>The static documentation site does not include login, account registration, analytics pixels, advertising pixels, or contact forms.</li>
      <li>Web server access logs may be created by the hosting provider for security, diagnostics, abuse prevention, and availability.</li>
      <li>Downloads may appear in standard web server logs, including IP address, timestamp, user agent, requested file, and response status.</li>
    </ul>
    <h2>Product data</h2>
    <p>SmartPT Core, JIT Access, and AD Control run in the customer environment. Product data such as Active Directory users, groups, mobile phone attributes, email attributes, audit logs, OTP state, and configuration files remains under the customer deployment unless a customer chooses to share logs or support evidence with SmartPT.</p>
    <h2>External links</h2>
    <ul>
      <li>The docs may link to <code>smartpt.co.il</code>, the SmartPT YouTube channel, LinkedIn, WhatsApp, public documentation resources, or release downloads.</li>
      <li>External services apply their own privacy and security terms.</li>
    </ul>
    <h2>Rights and requests</h2>
    <p>For privacy, correction, deletion, or access requests related to the documentation site, contact SmartPT through the official website or WhatsApp contact channel listed on <code>smartpt.co.il</code>. Customer product records inside an on-prem deployment should be handled by the customer's administrator.</p>
    <h2>Last updated</h2>
    <p>July 14, 2026</p>
  `),
  'terms': page('Terms of use', 'Policy', `
    <p class="lead">These documentation terms explain how SmartPT customer guides, installation materials, and product references should be used.</p>
    <h2>Documentation purpose</h2>
    <ul>
      <li>The documentation is provided to help customers install, configure, operate, and troubleshoot SmartPT Core, JIT Access, and AD Control.</li>
      <li>Product behavior can vary by version, configuration, license state, and customer Active Directory design.</li>
      <li>Administrators must validate changes in a safe environment before applying them to production identities or privileged groups.</li>
    </ul>
    <h2>Customer responsibility</h2>
    <ul>
      <li>Customers are responsible for Active Directory permissions, service identities, delegated rights, backup, recovery, and operational approval processes.</li>
      <li>Customers should not map high-privilege AD groups to JIT roles until add/remove behavior has been tested.</li>
      <li>Customers should not grant broad Domain Admin permissions to SmartPT service identities when delegated rights can meet the product requirement.</li>
    </ul>
    <h2>Downloads</h2>
    <p>Setup files should be downloaded only from SmartPT-approved sources. Verify the release version and source before installing in production.</p>
    <h2>No legal or security guarantee</h2>
    <p>The documentation supports deployment and operations, but it does not replace customer security review, legal review, change control, or incident response procedures.</p>
    <h2>Last updated</h2>
    <p>July 14, 2026</p>
  `),
  'cookie-policy': page('Cookie policy', 'Policy', `
    <p class="lead">The SmartPT documentation site is currently a static site and does not set analytics, advertising, or marketing cookies.</p>
    <h2>Current cookie use</h2>
    <ul>
      <li>No Google Analytics, Meta Pixel, Hotjar, session replay, advertising pixel, or newsletter tracking script is included in this docs site.</li>
      <li>The docs app stores navigation state in the URL hash only.</li>
      <li>The search function runs in the browser and does not send search terms to a SmartPT service.</li>
    </ul>
    <h2>Essential hosting logs</h2>
    <p>The hosting provider may create server logs for security, diagnostics, and availability. These are not controlled by a browser cookie banner.</p>
    <h2>If tracking is added later</h2>
    <ul>
      <li>Non-essential scripts should be blocked until consent is given.</li>
      <li>Visitors should be able to reject non-essential cookies.</li>
      <li>The policy should list the cookie name, provider, purpose, duration, and category.</li>
    </ul>
    <h2>Last updated</h2>
    <p>July 14, 2026</p>
  `),
  'accessibility': page('Accessibility statement', 'Policy', `
    <p class="lead">SmartPT aims for this documentation site to be usable with keyboard navigation, screen readers, mobile devices, and browser zoom.</p>
    <h2>Target standard</h2>
    <ul>
      <li>WCAG 2.1 AA</li>
      <li>WCAG 2.2 AA where practical</li>
      <li>Israeli Standard 5568 expectations where applicable</li>
    </ul>
    <h2>Implemented support</h2>
    <ul>
      <li>Skip-to-content link.</li>
      <li>Semantic header, navigation, main content, and footer areas.</li>
      <li>Keyboard focus styles.</li>
      <li>Responsive layout for desktop and mobile screens.</li>
      <li>Reduced-motion support through <code>prefers-reduced-motion</code>.</li>
      <li>Search input label for assistive technology.</li>
    </ul>
    <h2>Known limitations</h2>
    <ul>
      <li>Some diagrams are HTML/CSS visual summaries. Equivalent text is provided near the diagrams.</li>
      <li>The current docs site is English-only.</li>
      <li>Accessibility should be reviewed with manual keyboard, screen reader, zoom, and mobile testing as part of regular documentation QA.</li>
    </ul>
    <h2>Report an accessibility issue</h2>
    <p>Contact SmartPT through the official website or WhatsApp contact channel listed on <code>smartpt.co.il</code>. Include the page, browser, device, assistive technology if used, and a short description of the issue.</p>
    <h2>Last updated</h2>
    <p>July 14, 2026</p>
  `)
};

pages['ad-control-overview'] = pages['ad-control-getting-started'];
pages['ad-control-admin'] = pages['ad-control-settings-overview'];
pages['ad-control-operator'] = pages['ad-control-operator-console'];
pages['ad-control-settings'] = pages['ad-control-settings-overview'];
pages['ad-control-security'] = pages['ad-control-security-model'];

Object.assign(pages, window.smartptContentOverrides || {});
pages['ad-control-overview'] = pages['ad-control-getting-started'];
pages['ad-control-admin'] = pages['ad-control-settings-overview'];
pages['ad-control-operator'] = pages['ad-control-operator-console'];
pages['ad-control-settings'] = pages['ad-control-settings-overview'];
pages['ad-control-security'] = pages['ad-control-security-model'];
pages['jit-admin'] = pages['jit-roles'];
pages['jit-user'] = pages['jit-eligible-otp'];
pages['jit-settings'] = pages['jit-settings-overview'];
pages['jit-security'] = pages['security-model'];

const englishDocsState = {
  navGroups,
  pageMeta: { ...pageMeta },
  pages: { ...pages }
};
const hebrewDocsState = window.smartptHebrew || { navGroups: [], pageMeta: {}, pages: {} };
const languageStorageKey = 'smartpt-docs-language';
let activeLocale = 'en';

const interfaceText = {
  en: {
    start: 'Start', docs: 'Docs', breadcrumb: 'Breadcrumb', onThisPage: 'On this page',
    recommendedNext: 'Recommended next step', related: 'Related documentation', previous: 'Previous', next: 'Next',
    pager: 'Previous and next documentation pages', relatedLabel: 'Related documentation', taskLabel: 'Next task links',
    tagline: 'Customer documentation for SmartPT Core, AD Control, and JIT Access', menu: 'Docs menu',
    searchLabel: 'Search documentation', searchPlaceholder: 'Search docs', videos: 'Videos', downloads: 'Downloads',
    closeMenu: 'Close docs menu', documentation: 'Documentation', close: 'Close', navLabel: 'Documentation navigation',
    expandedScreenshot: 'Expanded screenshot', openImage: 'open image', noResults: 'No results',
    noResultsHelp: 'Try OTP, Tier 0, Protected Users, Password Reset, JIT, Assignments, Licensing, Audit, Revoke, or IIS.',
    footer: 'SmartPT documentation. Last updated July 14, 2026. Product behavior can vary by version and configuration.',
    privacy: 'Privacy', terms: 'Terms', cookie: 'Cookie Policy', accessibility: 'Accessibility', language: 'עברית',
    imageAlt: 'SmartPT documentation for Active Directory privileged actions', skip: 'Skip to content'
  },
  he: {
    start: 'התחלה', docs: 'תיעוד', breadcrumb: 'פירורי לחם', onThisPage: 'בעמוד זה',
    recommendedNext: 'השלב הבא', related: 'מדריכים קשורים', previous: 'הקודם', next: 'הבא',
    pager: 'ניווט בין עמודי התיעוד', relatedLabel: 'מדריכים קשורים', taskLabel: 'קישורים להמשך',
    tagline: 'מדריכים ל-SmartPT Core, ל-AD Control ול-JIT Access', menu: 'תפריט תיעוד',
    searchLabel: 'חיפוש בתיעוד', searchPlaceholder: 'חיפוש בתיעוד', videos: 'סרטונים', downloads: 'הורדות',
    closeMenu: 'סגירת תפריט התיעוד', documentation: 'תיעוד', close: 'סגירה', navLabel: 'ניווט בתיעוד',
    expandedScreenshot: 'צילום מסך מוגדל', openImage: 'פתיחת התמונה', noResults: 'לא נמצאו תוצאות',
    noResultsHelp: 'אפשר לחפש OTP, Tier 0, משתמשים מוגנים, איפוס סיסמה, JIT, הקצאות, רישוי, ביקורת, ביטול או IIS.',
    footer: 'תיעוד SmartPT. עודכן לאחרונה ב-4 באוגוסט 2026. התנהגות המוצר עשויה להשתנות לפי הגרסה וההגדרות.',
    privacy: 'פרטיות', terms: 'תנאי שימוש', cookie: 'מדיניות עוגיות', accessibility: 'נגישות', language: 'English',
    imageAlt: 'תיעוד SmartPT לפעולות רגישות ב-Active Directory', skip: 'דילוג לתוכן'
  }
};

function detectInitialLocale() {
  const saved = localStorage.getItem(languageStorageKey);
  if (saved === 'he' || saved === 'en') return saved;
  const country = new URLSearchParams(location.search).get('country')?.toUpperCase();
  if (country) return country === 'IL' ? 'he' : 'en';
  const languages = navigator.languages?.length ? navigator.languages : [navigator.language];
  const usesHebrew = languages.some(language => language?.toLowerCase().startsWith('he'));
  const usesIsraelRegion = languages.some(language => /-il$/i.test(language || ''));
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return usesHebrew || usesIsraelRegion || timeZone === 'Asia/Jerusalem' ? 'he' : 'en';
}

function routeState() {
  const raw = (location.hash || '').replace(/^#\/?/, '');
  const match = raw.match(/^(en|he)\/(.*)$/);
  if (match) return { locale: match[1], id: match[2] || 'overview', legacy: false };
  return { locale: detectInitialLocale(), id: raw || 'overview', legacy: true };
}

function applyLocale(locale) {
  activeLocale = locale === 'he' ? 'he' : 'en';
  const isHebrew = activeLocale === 'he';
  navGroups = isHebrew && hebrewDocsState.navGroups?.length ? hebrewDocsState.navGroups : englishDocsState.navGroups;
  pageMeta = isHebrew ? { ...englishDocsState.pageMeta, ...(hebrewDocsState.pageMeta || {}) } : englishDocsState.pageMeta;
  pages = isHebrew ? { ...englishDocsState.pages, ...(hebrewDocsState.pages || {}) } : englishDocsState.pages;
  document.documentElement.lang = activeLocale;
  document.documentElement.dir = isHebrew ? 'rtl' : 'ltr';
  const skipLink = document.querySelector('.skip-link');
  if (skipLink) skipLink.textContent = interfaceText[activeLocale].skip;
}

function ui(key) {
  return interfaceText[activeLocale][key] || interfaceText.en[key] || key;
}

function routeHash(id, locale = activeLocale) {
  return `#/${locale}/${id}`;
}

function localizeBodyLinks(body) {
  return body.replace(/href="#\/?(?:en\/|he\/)?([a-z0-9-]+)"/gi, (match, id) => pages[id] ? `href="${routeHash(id)}"` : match);
}

function page(title, eyebrow, body) {
  return { title, eyebrow, body: `<section class="doc"><div class="eyebrow">${eyebrow}</div><h1>${title}</h1>${body}</section>` };
}

function architectureDiagram() {
  return `
    <div class="diagram" role="img" aria-label="SmartPT architecture diagram">
      <div class="eyebrow">Architecture</div>
      <div class="diagram-grid">
        <div class="diagram-box"><strong>Users and admins</strong><span>Operators, eligible users, support teams, and administrators.</span></div>
        <div class="diagram-box"><strong>SmartPT Core</strong><span>License, portal access, shared verification, and product entry.</span></div>
        <div class="diagram-box"><strong>AD Control and JIT</strong><span>Tiered support actions and temporary role activation.</span></div>
        <div class="diagram-box"><strong>Active Directory</strong><span>Users, groups, contact attributes, and privilege enforcement.</span></div>
      </div>
    </div>
  `;
}

function adControlDiagram() {
  return `
    <div class="diagram" role="img" aria-label="AD Control operating model diagram">
      <div class="eyebrow">AD Control flow</div>
      <div class="diagram-grid">
        <div class="diagram-box"><strong>Search user</strong><span>Operators only see users allowed by tier and protection rules.</span></div>
        <div class="diagram-box"><strong>Verify when required</strong><span>OTP can be sent to AD-sourced email, mobile, or both. Mobile OTP uses the AD mobile attribute.</span></div>
        <div class="diagram-box"><strong>Run action</strong><span>Reset, unlock, profile update, or controlled group operation.</span></div>
        <div class="diagram-box"><strong>Audit</strong><span>Action, target, actor, result, and audit detail are recorded.</span></div>
      </div>
    </div>
  `;
}

function adControlArchitectureDiagram() {
  return `
    <div class="diagram" role="img" aria-label="AD Control architecture diagram">
      <div class="eyebrow">Architecture</div>
      <div class="diagram-grid five">
        <div class="diagram-box"><strong>Operators</strong><span>David and Sara sign in with Active Directory identity.</span></div>
        <div class="diagram-box accent"><strong>AD Control Portal</strong><span>Shows Dashboard, support console, and Settings according to role.</span></div>
        <div class="diagram-box accent"><strong>SmartPT service</strong><span>Enforces license, RBAC, protection rules, OTP policy, and action settings.</span></div>
        <div class="diagram-box good"><strong>Active Directory</strong><span>Source of users, groups, contact attributes, lock state, and password operations.</span></div>
        <div class="diagram-box"><strong>Audit and delivery</strong><span>Writes audit details and sends OTP or notifications through configured channels.</span></div>
      </div>
      <div class="diagram-note">SmartPT validates every sensitive action before changing Active Directory.</div>
    </div>
  `;
}

function adControlTierDiagram() {
  return `
    <div class="diagram" role="img" aria-label="AD Control tier model">
      <div class="eyebrow">Tier model</div>
      <div class="diagram-grid">
        <div class="diagram-box"><strong>Helpdesk (Tier 1)</strong><span>Password reset and account unlock for standard users.</span></div>
        <div class="diagram-box accent"><strong>Advanced Support (Tier 2)</strong><span>Tier 1 actions plus profile updates and controlled group membership.</span></div>
        <div class="diagram-box warning"><strong>Protected identities</strong><span>Tier 0, protected users, and protected group members stay hidden from Helpdesk search and actions.</span></div>
        <div class="diagram-box good"><strong>Settings administrator</strong><span>Manages licenses, roles, protected users, protected groups, OTP, SMTP, and session policy.</span></div>
      </div>
      <div class="diagram-note">Target users such as avi do not need AD Control licenses. Only operators such as david and sara consume operator seats.</div>
    </div>
  `;
}

function adControlSettingsFlowDiagram() {
  return `
    <div class="diagram" role="img" aria-label="AD Control settings flow">
      <div class="eyebrow">Settings flow</div>
      <div class="diagram-grid five">
        <div class="diagram-box"><strong>Assign access</strong><span>Give operators one license and one tier role.</span></div>
        <div class="diagram-box warning"><strong>Protect identities</strong><span>Add protected users and groups before broad operator rollout.</span></div>
        <div class="diagram-box accent"><strong>Set action policy</strong><span>Choose direct or OTP-verified reset and unlock behavior.</span></div>
        <div class="diagram-box"><strong>Configure delivery</strong><span>Review OTP limits, auditor email, templates, mobile delivery, and SMTP.</span></div>
        <div class="diagram-box good"><strong>Run approved actions</strong><span>Test with standard users and review audit records for sensitive actions.</span></div>
      </div>
    </div>
  `;
}

function adControlResetFlowDiagram() {
  return `
    <div class="diagram" role="img" aria-label="AD Control password reset flow">
      <div class="eyebrow">Password reset flow</div>
      <div class="diagram-grid five">
        <div class="diagram-box"><strong>Search</strong><span>Operator searches for a standard, non-protected user.</span></div>
        <div class="diagram-box"><strong>Select action</strong><span>Choose direct reset or verified reset based on policy.</span></div>
        <div class="diagram-box accent"><strong>Verify OTP</strong><span>Verified reset sends OTP to AD-sourced email or mobile.</span></div>
        <div class="diagram-box good"><strong>Reset</strong><span>SmartPT service resets the password and shows the generated value once.</span></div>
        <div class="diagram-box"><strong>Audit</strong><span>Actor, target, result, reason, and audit detail are recorded.</span></div>
      </div>
    </div>
  `;
}

function adControlUnlockFlowDiagram() {
  return `
    <div class="diagram" role="img" aria-label="AD Control account unlock flow">
      <div class="eyebrow">Unlock flow</div>
      <div class="diagram-grid five">
        <div class="diagram-box"><strong>Search</strong><span>Operator searches and selects a locked standard user.</span></div>
        <div class="diagram-box warning"><strong>Locked state</strong><span>Unlock appears only when the target account is locked.</span></div>
        <div class="diagram-box accent"><strong>Direct or verified</strong><span>Policy decides whether unlock can run now or requires OTP.</span></div>
        <div class="diagram-box good"><strong>Unlock</strong><span>SmartPT service unlocks the AD account using delegated service identity.</span></div>
        <div class="diagram-box"><strong>Audit</strong><span>Actor, target, method, result, and audit detail are recorded.</span></div>
      </div>
    </div>
  `;
}

function adControlOperatorFlowDiagram() {
  return `
    <div class="diagram" role="img" aria-label="AD Control operator console flow">
      <div class="eyebrow">Operator flow</div>
      <div class="diagram-grid five">
        <div class="diagram-box"><strong>Search user</strong><span>Operator searches by samAccountName, UPN, or display name.</span></div>
        <div class="diagram-box warning"><strong>Protection check</strong><span>Tier 0, protected users, and protected group members are hidden or blocked.</span></div>
        <div class="diagram-box"><strong>Selected user</strong><span>Allowed targets show status, lock state, contact details, and password age.</span></div>
        <div class="diagram-box accent"><strong>Allowed actions</strong><span>Tier 1 sees reset/unlock. Tier 2 also sees profile and groups.</span></div>
        <div class="diagram-box good"><strong>Audit</strong><span>Searches and sensitive actions are recorded with audit details.</span></div>
      </div>
    </div>
  `;
}

function adControlTier2FlowDiagram() {
  return `
    <div class="diagram" role="img" aria-label="AD Control profile update flow">
      <div class="eyebrow">Profile update flow</div>
      <div class="diagram-grid">
        <div class="diagram-box"><strong>Sara signs in</strong><span>Advanced Support role enables Tier 2 actions.</span></div>
        <div class="diagram-box"><strong>Select Avi</strong><span>Avi is a standard, non-protected target user.</span></div>
        <div class="diagram-box accent"><strong>Update fields</strong><span>Phone, mobile, title, department, company, office, and description.</span></div>
        <div class="diagram-box good"><strong>Audit result</strong><span>SmartPT records the update action.</span></div>
      </div>
    </div>
  `;
}

function adControlGroupFlowDiagram() {
  return `
    <div class="diagram" role="img" aria-label="AD Control controlled group management flow">
      <div class="eyebrow">Group management flow</div>
      <div class="diagram-grid five">
        <div class="diagram-box"><strong>Sara signs in</strong><span>Tier 2 role allows approved group membership changes.</span></div>
        <div class="diagram-box"><strong>Select Avi</strong><span>Target must not be Tier 0 or protected.</span></div>
        <div class="diagram-box accent"><strong>Allowed group check</strong><span>SmartPT service permits only configured non-protected groups.</span></div>
        <div class="diagram-box good"><strong>Add or remove</strong><span>SmartPT service updates Active Directory group membership.</span></div>
        <div class="diagram-box"><strong>Audit</strong><span>Group, actor, target, result, and audit detail are recorded.</span></div>
      </div>
    </div>
  `;
}

function jitDiagram() {
  return `
    <div class="diagram" role="img" aria-label="JIT Access operating model diagram">
      <div class="eyebrow">JIT flow</div>
      <div class="diagram-grid">
        <div class="diagram-box"><strong>Role</strong><span>Maps to one or more existing AD privileged groups.</span></div>
        <div class="diagram-box"><strong>Assignment</strong><span>Manual, Scheduled, or Eligible self-service.</span></div>
        <div class="diagram-box"><strong>Session</strong><span>Temporary AD membership with max duration and optional OTP.</span></div>
        <div class="diagram-box"><strong>Removal</strong><span>SmartPT removes access automatically or by admin revoke.</span></div>
      </div>
    </div>
  `;
}

function standingPrivilegeDiagram() {
  return `
    <div class="diagram" role="img" aria-label="Standing privilege compared with JIT Access">
      <div class="eyebrow">Risk model</div>
      <div class="diagram-lane">
        <div class="diagram-box warning"><strong>Standing privilege</strong><span>User remains in a privileged AD group even when no task is active. A compromised account immediately inherits that access.</span></div>
        <div class="diagram-arrow">-></div>
        <div class="diagram-box good"><strong>JIT Access</strong><span>User is added to the mapped AD group only during an approved active session. Expiry or revoke removes membership automatically.</span></div>
      </div>
      <div class="diagram-note">Outcome: privileged access becomes time-bound, visible, and easier to audit.</div>
    </div>
  `;
}

function jitArchitectureDiagram() {
  return `
    <div class="diagram" role="img" aria-label="JIT Access architecture diagram">
      <div class="eyebrow">Architecture</div>
      <div class="diagram-grid five">
        <div class="diagram-box"><strong>Users and admins</strong><span>JIT administrators, eligible users, and operators sign in with AD identity.</span></div>
        <div class="diagram-box accent"><strong>JIT Portal</strong><span>Shows roles, assignments, active sessions, activation, and settings based on license and RBAC.</span></div>
        <div class="diagram-box accent"><strong>JIT Service</strong><span>Validates license, RBAC, assignment timing, OTP, session state, and audit records.</span></div>
        <div class="diagram-box"><strong>Delivery and audit</strong><span>OTP delivery, SMTP notifications, activity records, and audit details support operations.</span></div>
        <div class="diagram-box good"><strong>Active Directory</strong><span>Existing groups remain the privilege boundary. JIT adds and removes temporary membership.</span></div>
      </div>
      <div class="diagram-note">SmartPT enforces privileged access through the configured policy and Active Directory state.</div>
    </div>
  `;
}

function eligibleOtpFlowDiagram() {
  return `
    <div class="diagram" role="img" aria-label="Eligible OTP self-service flow">
      <div class="eyebrow">Eligible OTP flow</div>
      <div class="diagram-grid five">
        <div class="diagram-box"><strong>Admin prepares</strong><span>Assign product license, create Eligible assignment, and map the role to an AD group.</span></div>
        <div class="diagram-box"><strong>Joe signs in</strong><span>Joe sees only Activate Access and his own eligible assignment.</span></div>
        <div class="diagram-box accent"><strong>OTP verify</strong><span>OTP is sent through configured channels using AD-sourced contact attributes. Mobile OTP uses the AD mobile attribute.</span></div>
        <div class="diagram-box good"><strong>Session active</strong><span>JIT Access starts a time-limited session and adds Joe to the mapped AD group.</span></div>
        <div class="diagram-box"><strong>Monitor/remove</strong><span>Jim monitors the session. Expiry or revoke removes group membership.</span></div>
      </div>
      <div class="diagram-note">Eligible OTP does not collect approval requests. The approval decision happens when the administrator creates the assignment.</div>
    </div>
  `;
}

function jitOperationsFlowDiagram() {
  return `
    <div class="diagram" role="img" aria-label="JIT operations flow for active sessions">
      <div class="eyebrow">Operations flow</div>
      <div class="diagram-grid five">
        <div class="diagram-box"><strong>Session starts</strong><span>Manual, Scheduled, or Eligible activation creates a live privileged session.</span></div>
        <div class="diagram-box accent"><strong>Monitor</strong><span>Active Sessions shows user, role, type, start, end, remaining time, and status.</span></div>
        <div class="diagram-box"><strong>Extend</strong><span>Eligible or manual sessions can be extended when the business task still requires access.</span></div>
        <div class="diagram-box warning"><strong>Revoke</strong><span>Administrator stops access early when the task is done, incorrect, or risky.</span></div>
        <div class="diagram-box good"><strong>Audit</strong><span>Extension, revoke, expiration, and notification events are recorded for review.</span></div>
      </div>
    </div>
  `;
}

function jitSettingsPolicyDiagram() {
  return `
    <div class="diagram" role="img" aria-label="JIT settings and policy flow">
      <div class="eyebrow">Settings and policy</div>
      <div class="diagram-grid five">
        <div class="diagram-box"><strong>License</strong><span>Controls who can consume JIT product access.</span></div>
        <div class="diagram-box"><strong>RBAC</strong><span>Controls who can administer roles, assignments, sessions, and settings.</span></div>
        <div class="diagram-box accent"><strong>OTP policy</strong><span>Controls delivery channel, expiry, retry, and activation verification behavior.</span></div>
        <div class="diagram-box accent"><strong>Notifications</strong><span>Recipients and event toggles control manual, eligible, extend, and revoke emails.</span></div>
        <div class="diagram-box good"><strong>Session policy</strong><span>Max session, idle timeout, SMTP, and group overrides shape operational behavior.</span></div>
      </div>
      <div class="diagram-note">Configure settings before mapping high-privilege AD groups such as Domain Admins.</div>
    </div>
  `;
}

const app = document.getElementById('app');
let navOpen = false;
let activeSearchIndex = -1;

const relatedDocs = {
  requirements: ['deployment-overview', 'active-directory-permissions', 'installation', 'licensing'],
  'deployment-overview': ['requirements', 'active-directory-permissions', 'installation', 'security-model'],
  'active-directory-permissions': ['requirements', 'deployment-overview', 'ad-control-access-model', 'jit-access-model'],
  installation: ['requirements', 'deployment-overview', 'active-directory-permissions', 'licensing', 'troubleshooting'],
  licensing: ['installation', 'core-license-status', 'downloads', 'troubleshooting'],
  'core-getting-started': ['core-portal-overview', 'core-license-status', 'core-access-model', 'core-settings-overview'],
  'core-portal-overview': ['core-getting-started', 'core-license-status', 'core-settings-overview', 'security-model'],
  'core-settings-overview': ['core-access-model', 'core-shared-2fa-reset', 'core-license-status', 'security-model'],
  'ad-control-getting-started': ['ad-control-access-model', 'ad-control-operator-console', 'ad-control-password-reset', 'ad-control-protected-identities'],
  'ad-control-settings-overview': ['ad-control-protected-identities', 'ad-control-password-reset', 'ad-control-account-unlock', 'ad-control-security-model'],
  'ad-control-protected-identities': ['ad-control-access-model', 'ad-control-operator-console', 'ad-control-security-model', 'audit'],
  'ad-control-operator-console': ['ad-control-password-reset', 'ad-control-account-unlock', 'ad-control-profile-updates', 'ad-control-protected-identities'],
  'ad-control-password-reset': ['ad-control-account-unlock', 'ad-control-protected-identities', 'ad-control-settings-overview', 'audit'],
  'ad-control-account-unlock': ['ad-control-password-reset', 'ad-control-settings-overview', 'ad-control-troubleshooting', 'audit'],
  'ad-control-group-management': ['ad-control-profile-updates', 'ad-control-protected-identities', 'ad-control-security-model', 'audit'],
  'ad-control-troubleshooting': ['ad-control-settings-overview', 'ad-control-protected-identities', 'troubleshooting', 'audit'],
  'jit-overview': ['jit-access-model', 'jit-roles', 'jit-assignments', 'jit-sessions-revoke'],
  'jit-access-model': ['jit-settings-overview', 'jit-roles', 'jit-assignments', 'security-model'],
  'jit-settings-overview': ['jit-roles', 'jit-assignments', 'jit-notifications-session-policy', 'jit-troubleshooting'],
  'jit-roles': ['jit-assignments', 'jit-assignment-types', 'jit-sessions-revoke', 'audit'],
  'jit-assignments': ['jit-assignment-types', 'jit-eligible-otp', 'jit-sessions-revoke', 'audit'],
  'jit-eligible-otp': ['jit-assignments', 'jit-sessions-revoke', 'jit-notifications-session-policy', 'jit-troubleshooting'],
  'jit-sessions-revoke': ['jit-assignments', 'jit-assignment-types', 'jit-troubleshooting', 'audit'],
  'jit-troubleshooting': ['jit-settings-overview', 'jit-sessions-revoke', 'troubleshooting', 'audit'],
  troubleshooting: ['installation', 'licensing', 'ad-control-troubleshooting', 'jit-troubleshooting'],
  'security-model': ['core-license-status', 'ad-control-security-model', 'jit-access-model', 'audit'],
  audit: ['security-model', 'ad-control-security-model', 'jit-sessions-revoke', 'troubleshooting']
};

const taskLinks = {
  'getting-started': [
    ['requirements', 'After the overview, confirm server and directory requirements.'],
    ['installation', 'After requirements are confirmed, continue to Installation.']
  ],
  requirements: [
    ['deployment-overview', 'After requirements are confirmed, review the deployment model.'],
    ['active-directory-permissions', 'Then plan delegated Active Directory permissions.']
  ],
  'deployment-overview': [
    ['active-directory-permissions', 'After deployment planning, define delegated Active Directory permissions.'],
    ['installation', 'Then install SmartPT Core and product portals.']
  ],
  'active-directory-permissions': [
    ['installation', 'After permissions are planned, continue to Installation.'],
    ['ad-control-settings-overview', 'Then configure AD Control policy for enabled Helpdesk actions.']
  ],
  installation: [
    ['licensing', 'After installation, activate and verify Licensing.'],
    ['core-portal-overview', 'Then confirm product status in SmartPT Console.']
  ],
  licensing: [
    ['core-portal-overview', 'After licensing, confirm product status in SmartPT Console.'],
    ['ad-control-settings-overview', 'Then configure AD Control access assignments where required.']
  ],
  'ad-control-settings-overview': [
    ['ad-control-protected-identities', 'After access assignment, configure Protected Users and Groups.'],
    ['ad-control-password-reset', 'Then test Password Reset with a standard user.'],
    ['ad-control-account-unlock', 'Then test Account Unlock with a locked standard user.']
  ],
  'ad-control-password-reset': [
    ['ad-control-account-unlock', 'After reset testing, validate Account Unlock behavior.'],
    ['audit', 'Review audit records after each sensitive action.']
  ],
  'jit-roles': [
    ['jit-assignments', 'After JIT roles are created, continue to Assignments.'],
    ['jit-assignment-types', 'Review Assignment Types before production use.']
  ],
  'jit-assignments': [
    ['jit-assignment-types', 'Confirm the assignment type matches the access model.'],
    ['jit-sessions-revoke', 'Then monitor the active session and revoke if required.']
  ],
  'jit-settings-overview': [
    ['jit-roles', 'After Settings are verified, create JIT Roles.'],
    ['jit-notifications-session-policy', 'Then review notification and session policy.']
  ]
};

function allPagesForSearch() {
  const entries = activeLocale === 'he'
    ? flattenedNav().map(item => [item.id, pages[item.id]]).filter(([, pageData]) => pageData)
    : Object.entries(pages);
  return entries.map(([id, pageData]) => ({
    id,
    title: pageData.title,
    category: navEntry(id)?.group || pageData.eyebrow || 'Docs',
    text: normalizeText(`${pageData.title} ${pageData.eyebrow} ${stripHtml(pageData.body)}`)
  }));
}

function flattenedNav() {
  return navGroups.flatMap(group => group.items.map(([id, label]) => ({ id, label, group: group.title })));
}

function navEntry(id) {
  return flattenedNav().find(item => item.id === id);
}

function normalizeText(value) {
  return value.replace(/\s+/g, ' ').trim();
}

function stripHtml(value) {
  const text = value
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
  return normalizeText(text);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function pageLabel(id) {
  return navEntry(id)?.label || pages[id]?.title || id;
}

function pageCategory(id) {
  return navEntry(id)?.group || pages[id]?.eyebrow || 'Docs';
}

function breadcrumbHtml(current) {
  const entry = navEntry(current);
  const group = entry?.group || pages[current]?.eyebrow || ui('docs');
  const label = entry?.label || pages[current]?.title || current;
  const home = current === 'overview' ? `<span>${ui('start')}</span>` : `<a href="${routeHash('overview')}">${ui('start')}</a>`;
  const startGroup = navGroups[0]?.title || ui('start');
  const groupCrumb = group !== startGroup ? `<span aria-hidden="true">/</span><span>${escapeHtml(group)}</span>` : '';
  return `
    <nav class="breadcrumbs" aria-label="${ui('breadcrumb')}">
      ${home}
      ${groupCrumb}
      ${current !== 'overview' && label && label !== group ? `<span aria-hidden="true">/</span><span aria-current="page">${escapeHtml(label)}</span>` : ''}
    </nav>
  `;
}

function tocHtml(body) {
  const headings = [...body.matchAll(/<h2(?:\s[^>]*)?>(.*?)<\/h2>/g)]
    .map(match => stripHtml(match[1]))
    .filter(Boolean)
    .slice(0, 12);
  if (headings.length < 2) return '';
  return `
    <aside class="toc" aria-label="${ui('onThisPage')}">
      <div class="toc-title">${ui('onThisPage')}</div>
      ${headings.map(heading => `<a href="#${slugify(heading)}" data-toc-target="${slugify(heading)}">${escapeHtml(heading)}</a>`).join('')}
    </aside>
  `;
}

function addHeadingAnchors(body) {
  return body.replace(/<h2>(.*?)<\/h2>/g, (match, heading) => {
    const text = stripHtml(heading);
    return `<h2 id="${slugify(text)}">${heading}</h2>`;
  });
}

function enhanceImages(body) {
  return body.replace(/<img\s+/g, '<img loading="lazy" decoding="async" width="1920" height="1080" ');
}

function slugify(value) {
  return normalizeText(value)
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, '-')
    .replace(/(^-|-$)/g, '');
}

function taskLinksHtml(current) {
  const links = taskLinks[current] || [];
  if (!links.length) return '';
  return `
    <section class="task-links" aria-label="${ui('taskLabel')}">
      <h2>${ui('recommendedNext')}</h2>
      <ul>
        ${links.map(([id, text]) => `<li><a href="${routeHash(id)}">${escapeHtml(activeLocale === 'he' ? pageLabel(id) : text)}</a></li>`).join('')}
      </ul>
    </section>
  `;
}

function relatedDocsHtml(current) {
  const links = (relatedDocs[current] || []).filter(id => pages[id]).slice(0, 5);
  if (!links.length) return '';
  return `
    <section class="related-docs" aria-label="${ui('relatedLabel')}">
      <h2>${ui('related')}</h2>
      <div class="related-grid">
        ${links.map(id => `<a class="related-link" href="${routeHash(id)}"><span>${escapeHtml(pageCategory(id))}</span><strong>${escapeHtml(pageLabel(id))}</strong></a>`).join('')}
      </div>
    </section>
  `;
}

function pagerHtml(current) {
  const items = flattenedNav();
  const index = items.findIndex(item => item.id === current);
  const policyGroup = navGroups.find(group => group.items.some(([id]) => id === 'privacy'))?.title;
  if (index === -1 || pageCategory(current) === policyGroup) return '';
  const previous = items[index - 1];
  const next = items[index + 1]?.group === policyGroup ? null : items[index + 1];
  if (!previous && !next) return '';
  return `
    <nav class="doc-pager" aria-label="${ui('pager')}">
      ${previous ? `<a class="pager-link previous" href="${routeHash(previous.id)}"><span>${ui('previous')}</span><strong>${escapeHtml(previous.label)}</strong></a>` : '<span></span>'}
      ${next ? `<a class="pager-link next" href="${routeHash(next.id)}"><span>${ui('next')}</span><strong>${escapeHtml(next.label)}</strong></a>` : '<span></span>'}
    </nav>
  `;
}

function pageFooterHtml(current) {
  return `
    <div class="doc-flow">
      ${taskLinksHtml(current)}
      ${relatedDocsHtml(current)}
      ${pagerHtml(current)}
    </div>
  `;
}

function render() {
  const route = routeState();
  applyLocale(route.locale);
  const current = pages[route.id] ? route.id : 'overview';
  if (route.legacy || route.id !== current) {
    history.replaceState(null, '', routeHash(current));
  }
  const pageData = pages[current];
  const enhancedBody = localizeBodyLinks(enhanceImages(addHeadingAnchors(pageData.body)));
  const toc = tocHtml(enhancedBody);
  document.title = activeLocale === 'he' ? `${pageData.title} | תיעוד SmartPT` : `${pageData.title} | SmartPT Docs`;
  updateDocumentMeta(current, pageData);
  document.body.classList.toggle('drawer-open', navOpen);

  app.innerHTML = `
    <div class="layout">
      ${routeTargetsHtml()}
      <header class="topbar">
        <div class="shell topbar-inner">
          <a class="brand" href="${routeHash('overview')}">
            <span class="brand-mark" aria-hidden="true">PT</span>
            <span><span class="brand-word">Smart<span>PT</span></span> ${ui('docs')}<small>${ui('tagline')}</small></span>
          </a>
          <div class="top-actions">
            <button class="button secondary mobile-menu" type="button" id="menuButton" aria-expanded="${navOpen}" aria-controls="sidebar">${ui('menu')}</button>
            <div class="search-box">
              <label class="sr-only" for="searchInput">${ui('searchLabel')}</label>
              <input id="searchInput" class="search" type="search" placeholder="${ui('searchPlaceholder')}" autocomplete="off" />
              <div id="searchResults" class="search-results" role="listbox" hidden></div>
            </div>
            <a class="button secondary" href="${youtubeUrl}" target="_blank" rel="noopener noreferrer">${ui('videos')}</a>
            <a class="button secondary language-switch" id="languageSwitch" href="${routeHash(current, activeLocale === 'he' ? 'en' : 'he')}">${ui('language')}</a>
            <a class="button primary" href="${routeHash('downloads')}">${ui('downloads')}</a>
          </div>
        </div>
      </header>
      <button class="drawer-backdrop ${navOpen ? 'open' : ''}" id="drawerBackdrop" type="button" aria-label="${ui('closeMenu')}"></button>
      <div class="shell docs-shell">
        <aside class="sidebar ${navOpen ? 'open' : ''}" id="sidebar" aria-label="${ui('navLabel')}">
          <div class="sidebar-header">
            <strong>${ui('documentation')}</strong>
            <button class="button secondary sidebar-close" type="button" id="closeMenuButton">${ui('close')}</button>
          </div>
          ${renderNav(current)}
        </aside>
        <main class="content" id="main" tabindex="-1">
          <div class="content-layout ${toc ? '' : 'no-toc'}">
            <div class="article-column">
              ${breadcrumbHtml(current)}
              ${enhancedBody}
              ${pageFooterHtml(current)}
            </div>
            ${toc}
          </div>
        </main>
      </div>
      <div class="image-lightbox" id="imageLightbox" role="dialog" aria-modal="true" aria-label="${ui('expandedScreenshot')}" hidden>
        <div class="lightbox-toolbar">
          <div class="lightbox-title" id="lightboxTitle"></div>
          <button class="lightbox-close" id="lightboxClose" type="button">${ui('close')}</button>
        </div>
        <div class="lightbox-frame" id="lightboxFrame">
          <img class="lightbox-image" id="lightboxImage" alt="" />
        </div>
      </div>
      <footer class="footer">
        <div class="shell footer-inner">
          <span>${ui('footer')}</span>
          <span class="footer-links">
            <a href="${routeHash('privacy')}">${ui('privacy')}</a>
            <a href="${routeHash('terms')}">${ui('terms')}</a>
            <a href="${routeHash('cookie-policy')}">${ui('cookie')}</a>
            <a href="${routeHash('accessibility')}">${ui('accessibility')}</a>
            <a href="${youtubeUrl}" target="_blank" rel="noopener noreferrer">YouTube</a>
          </span>
        </div>
      </footer>
    </div>
  `;

  bindEvents();
  requestAnimationFrame(() => document.getElementById('main')?.focus({ preventScroll: true }));
}

function routeTargetsHtml() {
  return `<div class="route-targets" aria-hidden="true">${flattenedNav().map(item => `<span id="${item.id}"></span>`).join('')}</div>`;
}

function updateDocumentMeta(current, pageData) {
  const description = pageMeta[current] || pageMeta.overview;
  const canonicalUrl = docsRoot;
  const localizedTitle = activeLocale === 'he' ? `${pageData.title} | תיעוד SmartPT` : `${pageData.title} | SmartPT Docs`;
  setMeta('meta[name="description"]', 'content', description);
  setMeta('meta[property="og:title"]', 'content', localizedTitle);
  setMeta('meta[property="og:description"]', 'content', description);
  setMeta('meta[property="og:url"]', 'content', canonicalUrl);
  setMeta('meta[property="og:image"]', 'content', docsImage);
  setMeta('meta[property="og:image:alt"]', 'content', ui('imageAlt'));
  setMeta('meta[name="twitter:title"]', 'content', localizedTitle);
  setMeta('meta[name="twitter:description"]', 'content', description);
  setMeta('meta[name="twitter:image"]', 'content', docsImage);
  setMeta('meta[name="twitter:image:alt"]', 'content', ui('imageAlt'));
  const canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) canonical.setAttribute('href', canonicalUrl);
}

function setMeta(selector, attr, value) {
  const node = document.querySelector(selector);
  if (node) node.setAttribute(attr, value);
}

function renderNav(current) {
  return navGroups.map(group => `
    <div class="nav-group">
      <div class="nav-title">${group.title}</div>
      ${group.items.map(([id, label]) => `<a class="nav-link ${id === current ? 'active' : ''}" href="${routeHash(id)}">${label}</a>`).join('')}
    </div>
  `).join('');
}

function bindEvents() {
  document.querySelectorAll('.toc a[data-toc-target]').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const target = document.getElementById(link.getAttribute('data-toc-target'));
      target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navOpen = false;
      document.body.classList.remove('drawer-open');
    });
  });

  document.querySelectorAll('.footer a, .breadcrumbs a, .related-link, .pager-link, .task-links a, .page-actions a').forEach(link => {
    link.addEventListener('click', () => {
      navOpen = false;
      document.body.classList.remove('drawer-open');
    });
  });

  document.getElementById('menuButton')?.addEventListener('click', () => {
    navOpen = !navOpen;
    render();
  });
  document.getElementById('closeMenuButton')?.addEventListener('click', () => closeDrawer());
  document.getElementById('drawerBackdrop')?.addEventListener('click', () => closeDrawer());
  document.getElementById('lightboxClose')?.addEventListener('click', () => closeImageLightbox());
  document.getElementById('languageSwitch')?.addEventListener('click', () => {
    localStorage.setItem(languageStorageKey, activeLocale === 'he' ? 'en' : 'he');
  });
  document.getElementById('imageLightbox')?.addEventListener('click', event => {
    if (event.target?.id === 'imageLightbox') closeImageLightbox();
  });

  document.querySelectorAll('.doc-screenshot img').forEach(image => {
    image.setAttribute('role', 'button');
    image.setAttribute('tabindex', '0');
    image.setAttribute('aria-label', `${image.getAttribute('alt') || ui('expandedScreenshot')} - ${ui('openImage')}`);
    const open = () => openImageLightbox(image);
    image.addEventListener('click', open);
    image.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        open();
      }
    });
  });

  const searchInput = document.getElementById('searchInput');
  const results = document.getElementById('searchResults');
  const pagesForSearch = allPagesForSearch();
  let currentMatches = [];

  const closeSearch = () => {
    if (!results) return;
    results.hidden = true;
    results.innerHTML = '';
    activeSearchIndex = -1;
    searchInput?.removeAttribute('aria-activedescendant');
  };

  const renderSearchResults = query => {
    if (!results) return;
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) {
      closeSearch();
      return;
    }
    currentMatches = pagesForSearch
      .map(item => ({ ...item, score: searchScore(item, normalizedQuery), snippet: searchSnippet(item.text, normalizedQuery) }))
      .filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score || a.title.localeCompare(b.title))
      .slice(0, 8);
    results.innerHTML = currentMatches.length
      ? currentMatches.map((item, index) => `
        <a class="search-result ${index === activeSearchIndex ? 'active' : ''}" id="search-result-${index}" role="option" aria-selected="${index === activeSearchIndex}" href="${routeHash(item.id)}">
          <span class="search-category">${escapeHtml(item.category)}</span>
          <strong>${escapeHtml(item.title)}</strong>
          <span>${escapeHtml(item.snippet)}</span>
        </a>
      `).join('')
      : `<div class="search-result empty"><strong>${ui('noResults')}</strong><span>${ui('noResultsHelp')}</span></div>`;
    results.hidden = false;
    results.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        closeSearch();
        navOpen = false;
        document.body.classList.remove('drawer-open');
      });
    });
  };

  searchInput?.addEventListener('input', event => {
    activeSearchIndex = -1;
    renderSearchResults(event.target.value);
  });

  searchInput?.addEventListener('keydown', event => {
    if (!currentMatches.length || results?.hidden) {
      if (event.key === 'Escape') closeSearch();
      return;
    }
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      activeSearchIndex = (activeSearchIndex + 1) % currentMatches.length;
      renderSearchResults(searchInput.value);
      searchInput.setAttribute('aria-activedescendant', `search-result-${activeSearchIndex}`);
    }
    if (event.key === 'ArrowUp') {
      event.preventDefault();
      activeSearchIndex = activeSearchIndex <= 0 ? currentMatches.length - 1 : activeSearchIndex - 1;
      renderSearchResults(searchInput.value);
      searchInput.setAttribute('aria-activedescendant', `search-result-${activeSearchIndex}`);
    }
    if (event.key === 'Enter' && activeSearchIndex >= 0) {
      event.preventDefault();
      location.hash = routeHash(currentMatches[activeSearchIndex].id).replace(/^#/, '');
      closeSearch();
    }
    if (event.key === 'Escape') closeSearch();
  });
}

function closeDrawer() {
  if (!navOpen) return;
  navOpen = false;
  document.body.classList.remove('drawer-open');
  render();
  document.getElementById('menuButton')?.focus();
}

function openImageLightbox(image) {
  const lightbox = document.getElementById('imageLightbox');
  const lightboxImage = document.getElementById('lightboxImage');
  const title = document.getElementById('lightboxTitle');
  if (!lightbox || !lightboxImage || !title) return;
  if (window.matchMedia('(max-width: 768px)').matches) {
    window.open(image.currentSrc || image.src, '_blank', 'noopener');
    return;
  }
  const figure = image.closest('figure');
  const caption = figure?.querySelector('figcaption')?.textContent?.trim();
  const label = caption || image.getAttribute('alt') || 'Documentation screenshot';
  lightboxImage.src = image.currentSrc || image.src;
  lightboxImage.alt = image.getAttribute('alt') || label;
  title.textContent = label;
  lightbox.hidden = false;
  document.body.classList.add('lightbox-open');
  document.getElementById('lightboxClose')?.focus();
}

function closeImageLightbox() {
  const lightbox = document.getElementById('imageLightbox');
  const lightboxImage = document.getElementById('lightboxImage');
  if (!lightbox || lightbox.hidden) return;
  lightbox.hidden = true;
  if (lightboxImage) lightboxImage.removeAttribute('src');
  document.body.classList.remove('lightbox-open');
}

function searchScore(item, query) {
  const title = item.title.toLowerCase();
  const category = item.category.toLowerCase();
  const text = item.text.toLowerCase();
  let score = 0;
  if (title === query) score += 100;
  if (title.includes(query)) score += 60;
  if (category.includes(query)) score += 25;
  if (text.includes(query)) score += 10;
  query.split(/\s+/).filter(Boolean).forEach(part => {
    if (title.includes(part)) score += 12;
    if (text.includes(part)) score += 3;
  });
  return score;
}

function searchSnippet(text, query) {
  const lower = text.toLowerCase();
  const index = lower.indexOf(query.toLowerCase());
  if (index === -1) return text.slice(0, 150);
  const start = Math.max(0, index - 55);
  const end = Math.min(text.length, index + query.length + 95);
  const prefix = start > 0 ? '...' : '';
  const suffix = end < text.length ? '...' : '';
  return `${prefix}${text.slice(start, end)}${suffix}`;
}

window.addEventListener('hashchange', render);
window.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !document.getElementById('imageLightbox')?.hidden) {
    closeImageLightbox();
    return;
  }
  if (event.key === 'Escape' && navOpen) {
    closeDrawer();
  }
});
render();

