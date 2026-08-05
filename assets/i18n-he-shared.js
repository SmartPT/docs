(() => {
  const page = (title, eyebrow, body) => ({
    title,
    eyebrow,
    body: `<section class="doc"><div class="eyebrow">${eyebrow}</div><h1>${title}</h1>${body}</section>`
  });
  const shot = (src, alt, caption) => `<figure class="doc-screenshot"><img src="${src}" alt="${alt}"><figcaption>${caption}</figcaption></figure>`;

  const state = window.smartptHebrew = window.smartptHebrew || { navGroups: [], pageMeta: {}, pages: {} };
  state.page = page;
  state.shot = shot;
  state.navGroups = [
    { title: 'מתחילים', items: [
      ['overview', 'מרכז הידע'], ['getting-started', 'לפני שמתחילים'], ['requirements', 'דרישות מערכת'],
      ['installation', 'התקנה'], ['licensing', 'רישוי'], ['downloads', 'הורדות']
    ] },
    { title: 'תכנון והקמה', items: [
      ['deployment-overview', 'איך SmartPT מותקנת'], ['active-directory-permissions', 'הרשאות Active Directory']
    ] },
    { title: 'SmartPT Console', items: [
      ['core-getting-started', 'לפני שמתחילים'], ['core-portal-overview', 'היכרות עם הקונסולה'],
      ['core-license-status', 'מצב רישיון ומוצרים'], ['core-access-model', 'מודל הרשאות'],
      ['core-settings-overview', 'הגדרות'], ['core-shared-2fa-reset', 'איפוס 2FA']
    ] },
    { title: 'AD Control', items: [
      ['ad-control-getting-started', 'לפני שמתחילים'], ['ad-control-access-model', 'הרשאות ורישיונות'],
      ['ad-control-portal-overview', 'היכרות עם הפורטל'], ['ad-control-settings-overview', 'הגדרות'],
      ['ad-control-protected-identities', 'משתמשים וקבוצות מוגנים'], ['ad-control-operator-console', 'מסוף התמיכה'],
      ['ad-control-password-reset', 'איפוס סיסמה'], ['ad-control-account-unlock', 'שחרור נעילת חשבון'],
      ['ad-control-profile-updates', 'עדכון פרטי משתמש'], ['ad-control-group-management', 'ניהול קבוצות'],
      ['ad-control-troubleshooting', 'פתרון תקלות'], ['ad-control-security-model', 'אבטחת פעולות']
    ] },
    { title: 'JIT Access', items: [
      ['jit-overview', 'לפני שמתחילים'], ['jit-access-model', 'הרשאות ורישיונות'], ['jit-portal-overview', 'היכרות עם הפורטל'],
      ['jit-settings-overview', 'הגדרות'], ['jit-roles', 'תפקידי JIT'], ['jit-assignments', 'הקצאות'],
      ['jit-assignment-types', 'סוגי הקצאות'], ['jit-eligible-otp', 'Eligible OTP'],
      ['jit-sessions-revoke', 'ניהול גישה פעילה'], ['jit-notifications-session-policy', 'התראות ומגבלות זמן'],
      ['jit-troubleshooting', 'פתרון תקלות']
    ] },
    { title: 'תפעול', items: [
      ['security-model', 'אבטחת פעולות'], ['audit', 'יומני ביקורת'],
      ['troubleshooting', 'פתרון תקלות'], ['release-notes', 'הערות גרסה']
    ] },
    { title: 'מדיניות', items: [
      ['privacy', 'פרטיות'], ['terms', 'תנאי שימוש'], ['cookie-policy', 'מדיניות עוגיות'], ['accessibility', 'נגישות']
    ] }
  ];

  Object.assign(state.pageMeta, {
    overview: 'מרכז הידע להתקנה, להגדרה ולתפעול של SmartPT Core, ‏AD Control ו-JIT Access בסביבת Active Directory מקומית.',
    'getting-started': 'סדר העבודה המומלץ להתקנת SmartPT, הפעלת הרישיון והגדרת AD Control ו-JIT Access.',
    requirements: 'דרישות השרת, IIS, Active Directory, חשבון השירות, הרשת, OTP, SMTP והדפדפנים הנתמכים.',
    installation: 'התקנת SmartPT Core והמוצרים באמצעות אשף ההתקנה.',
    licensing: 'הפעלת רישיון SmartPT ובדיקת מצב הרישיון והמוצרים.',
    downloads: 'הורדת חבילת ההתקנה הרשמית של SmartPT Core.',
    'deployment-overview': 'כך SmartPT מותקנת בסביבת הארגון ומתחברת ל-Active Directory המקומי.',
    'active-directory-permissions': 'הרשאות Active Directory הנדרשות ל-AD Control ול-JIT לפי עקרון ההרשאה המינימלית.',
    'security-model': 'הבדיקות ש-SmartPT מבצעת לפני פעולות רגישות ב-AD Control וב-JIT Access.',
    audit: 'בדיקת יומני ביקורת עבור פעולות ב-SmartPT Core, ‏AD Control ו-JIT Access.',
    troubleshooting: 'בדיקות ראשוניות לתקלות גישה, רישוי, OTP, IIS ותקשורת עם Active Directory.',
    'release-notes': 'שינויים במדריכים ובהתנהגות המוצר לפי הגרסה המותקנת.',
    privacy: 'מדיניות הפרטיות של מרכז הידע של SmartPT.',
    terms: 'תנאי השימוש במרכז הידע של SmartPT.',
    'cookie-policy': 'מידע על השימוש בעוגיות ובאחסון הדפדפן במרכז הידע.',
    accessibility: 'הצהרת הנגישות של מרכז הידע של SmartPT.'
  });

  Object.assign(state.pages, {
    overview: page('מרכז הידע של SmartPT', 'מדריכים למנהלי מערכת ולצוותי תמיכה', `
      <p class="lead">כאן תמצאו את כל המידע הדרוש להתקנה, להגדרה ולתפעול של SmartPT Core, ‏AD Control ו-JIT Access בסביבת Active Directory מקומית.</p>
      <div class="page-actions">
        <a class="button primary" href="#requirements">בדיקת דרישות המערכת</a>
        <a class="button secondary" href="#installation">התקנת SmartPT Core</a>
        <a class="button secondary" href="#ad-control-getting-started">הצעדים הראשונים ב-AD Control</a>
        <a class="button secondary" href="#jit-overview">הצעדים הראשונים ב-JIT</a>
      </div>
      <h2>המוצרים הכלולים במרכז הידע</h2>
      <div class="cards">
        <article class="card"><h3>SmartPT Core</h3><p>התקנה, הפעלת רישיון, מצב המוצרים, הרשאות למסוף ואיפוס 2FA.</p></article>
        <article class="card"><h3>AD Control</h3><p>איפוס סיסמה, שחרור חשבון נעול, עדכון פרטים וניהול קבוצות בהתאם לרמת ההרשאה.</p></article>
        <article class="card"><h3>JIT Access</h3><p>שיוך זמני לקבוצות Active Directory באמצעות תפקידים, הקצאות וגישה מוגבלת בזמן.</p></article>
      </div>
      <h2>מאיפה מתחילים</h2>
      <ol><li>בדקו את דרישות המערכת.</li><li>התקינו את SmartPT Core ואת המוצרים.</li><li>הפעילו את הרישיון ובדקו את מצב המערכת.</li><li>הגדירו הרשאות ב-AD Control או תפקידים והקצאות ב-JIT.</li><li>בצעו בדיקה עם משתמש וקבוצה שאינם בסביבת הייצור.</li><li>בדקו את יומן הביקורת.</li></ol>
      <div class="cards">
        <article class="card">${shot('./docs/ad-control/screenshots/ad-control-product-overview.jpg', 'סקירת AD Control', 'AD Control מגביל כל נציג לפעולות שהוגדרו לרמת ההרשאה שלו.')}</article>
        <article class="card">${shot('./docs/jit/screenshots/jit-product-overview.jpg', 'סקירת JIT Access', 'JIT מעניק שיוך זמני לקבוצות AD ומסיר אותו בסיום.')}</article>
      </div>
    `),

    'getting-started': page('לפני שמתחילים עם SmartPT', 'מתחילים', `
      <p class="lead">הכינו תחילה את השרת ואת חשבון השירות. לאחר מכן התקינו את SmartPT, הפעילו את הרישיון והגדירו את המוצרים שבהם תשתמשו.</p>
      <h2>תהליך ההקמה בקצרה</h2>
      <ol>
        <li>הכינו שרת Windows המחובר לדומיין.</li>
        <li>בדקו את דרישות IIS, ‏.NET והרשת.</li>
        <li>הגדירו זהות שירות ייעודית. מומלץ להשתמש ב-gMSA.</li>
        <li>הריצו את <strong>Setup.exe</strong> כמנהל מערכת.</li>
        <li>הפעילו את הרישיון ובדקו שמצבו <strong>ACTIVE</strong>.</li>
        <li>פתחו את SmartPT Console ובדקו את מצב AD Control ו-JIT Access.</li>
        <li>הגדירו משתמשי בדיקה, הרשאות ומדיניות לפני מעבר לייצור.</li>
      </ol>
      <div class="callout warning"><strong>חשוב:</strong> בצעו את הבדיקה הראשונה עם משתמש רגיל וקבוצת AD שאינה מעניקה הרשאות ניהול.</div>
      <h2>בסיום התהליך</h2><p>תוכלו להיכנס ל-SmartPT Console, לראות שהרישיון פעיל ולפתוח את פורטלי המוצרים בהתאם להרשאות המשתמש.</p>
    `),

    requirements: page('דרישות מערכת', 'התחלה', `
      <p class="lead">לפני ההתקנה, ודאו שהשרת, הרשת ו-Active Directory עומדים בדרישות של SmartPT.</p>
      <h2>שרת ותשתית</h2>
      <div class="table-wrap"><table><thead><tr><th>רכיב</th><th>דרישה</th></tr></thead><tbody>
        <tr><td>מערכת הפעלה</td><td>Windows Server 2019 ומעלה, מחובר לדומיין Active Directory המקומי.</td></tr>
        <tr><td>הרשאות התקנה</td><td>הרצת <strong>Setup.exe</strong> כמנהל מערכת בשרת היעד.</td></tr>
        <tr><td>IIS</td><td>אשף ההתקנה מתקין ובודק את רכיבי IIS הנדרשים, כולל Windows Authentication וכלי הניהול.</td></tr>
        <tr><td>.NET</td><td>.NET 8 Runtime ו-ASP.NET Core Hosting Bundle. האשף בודק את הרכיבים לפני הפריסה.</td></tr>
        <tr><td>PowerShell</td><td>Windows PowerShell ומודול ActiveDirectory זמינים בשרת.</td></tr>
        <tr><td>דפדפן</td><td>גרסה נתמכת ועדכנית של Microsoft Edge, Google Chrome או דפדפן מבוסס Chromium.</td></tr>
      </tbody></table></div>
      <h2>Active Directory וחשבון השירות</h2>
      <ul>
        <li>מומלץ להשתמש בחשבון gMSA ייעודי עבור שירותי SmartPT.</li>
        <li>אין להעניק לחשבון השירות הרשאת Domain Admin.</li>
        <li>העניקו רק את ההרשאות הנדרשות לפעולות שהארגון אישר.</li>
        <li>ל-JIT נדרשת הרשאה להוסיף ולהסיר חברים רק בקבוצות שמנוהלות באמצעות JIT.</li>
      </ul>
      <h2>רשת, OTP ודואר</h2>
      <ul><li>נדרשת תקשורת בין שרת SmartPT לבקרי הדומיין.</li><li>נדרשת גישה לשירותי הרישוי והעדכון שהוגדרו בארגון.</li><li>אם משתמשים בדואר, הגדירו שרת SMTP ובדקו שליחה.</li><li>אם משתמשים ב-OTP לנייד, ודאו שהמאפיין <code>mobile</code> ב-Active Directory מכיל מספר תקין.</li></ul>
      <h2>לפני מעבר לייצור</h2><p>בצעו התקנה מלאה בסביבת בדיקות. ודאו שהכניסה, הרישוי, פעולות ה-AD, משלוח ה-OTP, הסרת ההרשאות ויומן הביקורת פועלים כמצופה.</p>
    `),

    'deployment-overview': page('איך SmartPT מותקנת בארגון', 'תכנון והקמה', `
      <p class="lead">SmartPT מותקנת בתוך רשת הארגון ופועלת מול סביבת Active Directory המקומית.</p>
      <h2>רכיבי הפריסה</h2>
      <div class="table-wrap"><table><thead><tr><th>רכיב</th><th>תפקיד</th></tr></thead><tbody>
        <tr><td>SmartPT Core</td><td>רישוי, מצב המוצרים, הרשאות למסוף וכניסה לפורטלים.</td></tr>
        <tr><td>AD Control</td><td>פעולות תמיכה בהתאם לרמת ההרשאה ולמדיניות הארגון.</td></tr>
        <tr><td>JIT Access</td><td>שיוך זמני לקבוצות Active Directory והסרה אוטומטית.</td></tr>
        <tr><td>שירותי SmartPT</td><td>בודקים רישיון, הרשאות ומדיניות לפני ביצוע פעולה ב-AD.</td></tr>
        <tr><td>יומן ביקורת</td><td>שומר את מבצע הפעולה, היעד, התוצאה ומזהה ההתאמה.</td></tr>
      </tbody></table></div>
      <h2>מי צריך הרשאות ב-Active Directory</h2><p>נציגי התמיכה ומשתמשי JIT עובדים דרך הפורטל ואינם זקוקים להרשאות AD ישירות לצורך הפעולות הנתמכות.</p>
      <div class="callout info"><strong>המלצה:</strong> הפרידו ככל האפשר בין הרשאות השירות של AD Control לבין הקבוצות המנוהלות באמצעות JIT.</div>
    `),

    'active-directory-permissions': page('הרשאות Active Directory', 'ארכיטקטורה', `
      <p class="lead">העניקו לחשבון השירות רק את הרשאות Active Directory הדרושות לפעולות שהפעלתם ב-SmartPT.</p>
      <div class="callout warning"><strong>אין להעניק Domain Admin לחשבון השירות.</strong> הרשאה רחבה מקשה על הגבלת המערכת ועל בדיקת השפעתה.</div>
      <h2>AD Control</h2><p>העניקו הרשאות רק לפעולות שהארגון מאפשר, כגון איפוס סיסמה, שחרור חשבון נעול, עדכון מאפיינים מאושרים או שינוי שיוך לקבוצות מאושרות.</p>
      <h2>JIT Access</h2><p>העניקו הרשאת שינוי חברות רק בקבוצות שמופו לתפקידי JIT. בדקו שהשירות יכול להוסיף ולהסיר חברים מכל קבוצה מנוהלת.</p>
      <h2>הגנת Tier 0</h2><ul><li>השאירו חשבונות וקבוצות Tier 0 מחוץ לטיפול השוטף של צוות התמיכה.</li><li>הגדירו משתמשים וקבוצות מוגנים ב-AD Control.</li><li>בדקו עם משתמש Tier 1 ו-Tier 2 שהחשבונות המוגנים אינם מופיעים בחיפוש.</li></ul>
      <h2>אימות בסביבת בדיקות</h2><ol><li>צרו משתמש וקבוצה ייעודיים לבדיקה.</li><li>בצעו כל פעולה שאושרה.</li><li>ודאו שפעולה שלא אושרה נכשלת.</li><li>בדקו את יומן הביקורת.</li></ol>
    `),

    installation: page('התקנת SmartPT', 'SmartPT Core', `
      <p class="lead">אשף ההתקנה מכין את השרת, מתקין את SmartPT Core ואת המוצרים שנבחרו ומפעיל את הרישיון.</p>
      <h2>לפני שמתחילים</h2>
      <ul><li>השרת עומד בדרישות המערכת ומחובר לדומיין.</li><li>התחברתם עם חשבון שמורשה להתקין תפקידי Windows ויישומי IIS.</li><li>פרטי הרישיון זמינים.</li><li>הגדרתם שם gMSA מתאים או הכנתם את המידע הדרוש ליצירתו.</li></ul>
      <div class="callout warning"><strong>חשוב:</strong> הריצו את <strong>Setup.exe</strong> כמנהל מערכת ובצעו את ההתקנה תחילה בסביבת בדיקות.</div>
      <h2>שלבי האשף</h2>
      <ol>
        <li><strong>Consent</strong> – אשרו את תנאי ההתקנה.</li>
        <li><strong>Pre-checks</strong> – האשף בודק את מערכת ההפעלה, הדומיין והרשאות ההתקנה.</li>
        <li><strong>Server prerequisites</strong> – נבדקים IIS, ‏PowerShell, מודול ActiveDirectory ורכיבי .NET.</li>
        <li><strong>gMSA preparation</strong> – האשף מכין את חשבון השירות המנוהל.</li>
        <li><strong>IIS installation</strong> – מותקנים רכיבי IIS הנדרשים.</li>
        <li><strong>Deploy packages</strong> – נפרסים SmartPT Core והמוצרים שנבחרו.</li>
        <li><strong>IIS configuration</strong> – מוגדרים האתרים, היישומים ו-App Pools.</li>
        <li><strong>License activation</strong> – מזינים ומאמתים את הרישיון.</li>
        <li><strong>Final health</strong> – האשף בודק שהפורטלים והשירותים זמינים.</li>
      </ol>
      ${shot('./docs/core/screenshots/installer-consent.png', 'מסך האישור באשף התקנת SmartPT Core', 'קראו ואשרו את תנאי ההתקנה.')}
      ${shot('./docs/core/screenshots/installer-pre-checks.png', 'בדיקות מקדימות באשף ההתקנה', 'האשף בודק את השרת, הדומיין והרשאות ההתקנה.')}
      ${shot('./docs/core/screenshots/installer-server-prerequisites.png', 'בדיקת דרישות השרת', 'כל רכיבי השרת הנדרשים חייבים להופיע כתקינים.')}
      ${shot('./docs/core/screenshots/installer-gmsa-preparation.png', 'הכנת חשבון gMSA', 'האשף מכין את חשבון השירות עבור יישומי SmartPT.')}
      ${shot('./docs/core/screenshots/installer-iis-installation.png', 'התקנת IIS', 'רכיבי IIS הנדרשים מותקנים ונבדקים.')}
      ${shot('./docs/core/screenshots/installer-deploy-packages.png', 'פריסת חבילות SmartPT', 'SmartPT Core והמוצרים שנבחרו נפרסים לשרת.')}
      ${shot('./docs/core/screenshots/installer-iis-configuration.png', 'הגדרת IIS עבור SmartPT', 'האשף מגדיר את היישומים ואת App Pools.')}
      ${shot('./docs/core/screenshots/installer-license-validation.png', 'אימות רישיון SmartPT', 'הזינו את פרטי הרישיון ובדקו שהאימות הצליח.')}
      ${shot('./docs/core/screenshots/installer-license-activation-active.png', 'רישיון SmartPT פעיל', 'מצב ACTIVE מאשר שהרישיון הופעל.')}
      ${shot('./docs/core/screenshots/installer-final-health.png', 'בדיקת תקינות סופית', 'סיימו רק לאחר שכל בדיקות התקינות עברו בהצלחה.')}
      <h2>בסיום ההתקנה</h2><p>SmartPT Console אמור להיפתח בכתובת המקומית, הרישיון צריך להיות פעיל וכרטיסי AD Control ו-JIT Access צריכים להציג מצב תקין.</p>
      <h2>איך מוודאים שההתקנה הצליחה</h2><ol><li>פתחו את SmartPT Console.</li><li>ודאו שמצב הרישיון <strong>ACTIVE</strong>.</li><li>פתחו את שני פורטלי המוצרים.</li><li>ודאו ששירותי IIS וה-App Pools פעילים.</li><li>היכנסו עם משתמש בדיקה.</li></ol>
    `),

    licensing: page('הפעלת הרישיון', 'SmartPT Core', `
      <p class="lead">הפעילו את רישיון SmartPT וודאו שהמוצרים זמינים למשתמשים שהוגדרו.</p>
      <h2>הפעלת הרישיון</h2><ol><li>פתחו את שלב <strong>License activation</strong> באשף ההתקנה.</li><li>הזינו את המספר הסידורי שסופק לארגון.</li><li>הפעילו את האימות.</li><li>ודאו שהמצב משתנה ל-<strong>ACTIVE</strong>.</li></ol>
      ${shot('./docs/core/screenshots/license-status-highlight.png', 'מצב רישיון SmartPT פעיל', 'בדקו את מצב הרישיון ואת מועד האימות האחרון.')}
      <h2>מי צריך רישיון</h2><ul><li>רישיון Core פעיל נדרש לכניסה למוצרים.</li><li>לנציגי AD Control ולמשתמשי JIT נדרש רישיון מוצר בהתאם להגדרות.</li><li>משתמש שמטופל דרך AD Control אינו צריך רישיון מוצר.</li></ul>
      <h2>איך מוודאים שהרישיון פעיל</h2><ol><li>פתחו <strong>License and Billing</strong> ב-SmartPT Console.</li><li>בדקו את המצב ואת האימות האחרון.</li><li>ודאו שכרטיסי המוצרים מציגים מצב תקין.</li><li>היכנסו עם משתמש מורשה לכל מוצר.</li></ol>
      <div class="callout warning"><strong>חשוב:</strong> רישיון Core שאינו פעיל עלול לחסום כניסה ל-AD Control ול-JIT Access.</div>
    `),

    downloads: page('הורדות', 'חבילת התקנה', `
      <p class="lead">מכאן אפשר להוריד את חבילת ההתקנה הרשמית של SmartPT Core לשרת Windows שעליו תותקן המערכת.</p>
      <h2>SmartPT Core Setup</h2>
      <p>הקובץ כולל את אשף ההתקנה של SmartPT Core ואת שלבי הכנת IIS, פריסת המוצרים, הפעלת הרישיון ובדיקת התקינות.</p>
      <div class="page-actions"><a class="button primary" href="https://smartpt.co.il/downloads/core/Setup.exe">הורדת SmartPT Core Setup.exe</a></div>
      <h2>לפני ההתקנה</h2><ul><li>העבירו את הקובץ לשרת היעד.</li><li>ודאו שהשרת עומד בדרישות המערכת.</li><li>הריצו את הקובץ כמנהל מערכת.</li><li>בדקו את החבילה בסביבת בדיקות לפני התקנה בייצור.</li></ul>
    `),

    'security-model': page('איך SmartPT מגינה על פעולות רגישות', 'תפעול', `
      <p class="lead">לפני פעולה רגישה, SmartPT בודקת את הרישיון, את המשתמש המחובר, את ההרשאות ואת המדיניות שהוגדרה.</p>
      <h2>עקרונות מרכזיים</h2>
      <ul><li>המערכת פועלת בתוך סביבת הארגון ומול Active Directory המקומי.</li><li>נציגים ומשתמשי JIT אינם זקוקים להרשאות AD ישירות לצורך הפעולות הנתמכות.</li><li>AD Control מגביל כל נציג לפעולות שהוגדרו לרמת ההרשאה שלו.</li><li>JIT מעניק שיוך זמני לקבוצות AD ומסיר אותו בתום הזמן או לאחר ביטול.</li><li>חשבונות Tier 0 ומשתמשים מוגנים נשארים מחוץ לפעולות צוות התמיכה.</li><li>פעולות רגישות נרשמות ביומן הביקורת.</li></ul>
      <h2>OTP</h2><p>כאשר נדרש OTP, פרטי הקשר נקראים מ-Active Directory. עבור הודעת טלפון, השתמשו במאפיין <code>mobile</code> וודאו שהמספר כולל קידומת מדינה לפי הצורך.</p>
      <h2>בדיקות מומלצות לפני ייצור</h2><ol><li>כניסה עם כל סוג משתמש.</li><li>חסימת פעולה שאינה מורשית.</li><li>חסימת חשבון מוגן.</li><li>הסרת שיוך JIT לאחר תפוגה או ביטול.</li><li>רישום מלא ביומן הביקורת.</li></ol>
    `),

    audit: page('יומני ביקורת', 'תפעול', `
      <p class="lead">יומן הביקורת מציג מי ביצע את הפעולה, על איזה משתמש או קבוצה ומה הייתה התוצאה.</p>
      <h2>מידע שכדאי לבדוק</h2>
      <div class="table-wrap"><table><thead><tr><th>שדה</th><th>משמעות</th></tr></thead><tbody>
        <tr><td>מבצע</td><td>המשתמש או השירות שביצע את הפעולה.</td></tr><tr><td>יעד</td><td>המשתמש, הקבוצה, התפקיד או ההקצאה שעליהם בוצעה הפעולה.</td></tr><tr><td>פעולה</td><td>לדוגמה איפוס סיסמה, שחרור נעילה, הפעלת JIT, הארכה או ביטול.</td></tr><tr><td>תוצאה</td><td>הצלחה, כישלון או דחייה.</td></tr><tr><td>זמן</td><td>מועד הפעולה לפי שעון המערכת.</td></tr><tr><td>מזהה התאמה</td><td>מזהה המשמש לאיתור האירוע ביומנים נוספים.</td></tr>
      </tbody></table></div>
      <h2>מידע שאינו אמור להופיע</h2><p>אל תעתיקו ליומן או לצילום מסך סיסמאות, קודי OTP, מספרי רישיון או מידע רגיש אחר.</p>
      <h2>בדיקה לאחר פעולה</h2><ol><li>בצעו פעולה עם משתמש בדיקה.</li><li>פתחו את יומן הביקורת המתאים.</li><li>אתרו את הפעולה לפי המבצע והזמן.</li><li>בדקו יעד, תוצאה ומזהה התאמה.</li></ol>
    `),

    troubleshooting: page('פתרון תקלות', 'תפעול', `
      <p class="lead">אתרו את התסמין שמופיע בפורטל ועברו על הבדיקות המתאימות לפי הסדר.</p>
      <h2>הפורטל אינו נפתח</h2><ol><li>בדקו שהאתר וה-App Pool המתאימים פעילים ב-IIS.</li><li>בדקו ש-SmartPT Core ושירות המוצר פעילים.</li><li>בדקו Windows Authentication ותקשורת עם Active Directory.</li><li>בדקו את יומני היישום ואת מזהה ההתאמה, אם מוצג.</li></ol>
      <h2>המשתמש אינו מורשה</h2><ul><li>בדקו שהרישיון פעיל.</li><li>בדקו שהוקצה למשתמש רישיון מוצר.</li><li>בדקו את קבוצת ההרשאה או תפקיד ה-RBAC.</li><li>בצעו יציאה וכניסה מחדש לאחר שינוי הרשאות.</li></ul>
      <h2>OTP אינו מתקבל</h2><ul><li>בדקו שהמאפיין <code>mobile</code> או כתובת הדואר מלאים ב-Active Directory.</li><li>בדקו את תבנית המספר ואת קידומת המדינה.</li><li>בדקו מגבלות שליחה וניסיון חוזר בהגדרות המוצר.</li><li>אם משתמשים בדואר, בדקו SMTP וחומת אש.</li></ul>
      <h2>פעולת AD נכשלת</h2><ul><li>בדקו שחשבון השירות מורשה לבצע את הפעולה על המשתמש או הקבוצה.</li><li>בדקו שהמשתמש אינו Tier 0 או משתמש מוגן.</li><li>בדקו תקשורת עם בקר הדומיין.</li><li>בדקו את יומן הביקורת ואת יומן השירות.</li></ul>
    `),

    'release-notes': page('הערות גרסה', 'תפעול', `
      <p class="lead">לפני שפועלים לפי הוראה התלויה בגרסה, ודאו איזו גרסת מוצר מותקנת אצלכם.</p>
      <h2>מה כולל העדכון הנוכחי</h2><ul><li>מדריכים בעברית ובאנגלית.</li><li>קישורים נפרדים לשיתוף כל עמוד בשפה המתאימה.</li><li>צילומי המסך וקובצי ההורדה המלווים את המדריכים.</li></ul>
      <h2>לפני עדכון מוצר</h2><p>קראו את הערות הגרסה שסופקו עם החבילה, בדקו את העדכון בסביבת בדיקות וודאו שהגדרות הלקוח נשמרו.</p>
    `),

    privacy: page('מדיניות פרטיות', 'מדיניות', `
      <p class="lead">מרכז הידע מציג מדריכים, צילומי מסך וקישורים להורדה ואינו מבקש פרטי התחברות למוצר.</p>
      <h2>מידע באתר</h2><p>האתר אינו מבקש להזין פרטי Active Directory, סיסמאות או קודי OTP. יומני שרת עשויים לכלול כתובת IP, סוג דפדפן ובקשות עמוד לצורכי אבטחה ותקינות.</p>
      <h2>קישורים חיצוניים</h2><p>קישורים ל-SmartPT, ל-YouTube או לשירותים אחרים כפופים למדיניות של אותו שירות.</p>
      <h2>מידע בסביבת הלקוח</h2><p>נתוני המוצרים המותקנים באתר הלקוח נשארים באחריות הארגון ובהתאם למדיניות הפנימית שלו.</p>
      <h2>יצירת קשר</h2><p>לשאלות פרטיות פנו ל-SmartPT דרך ערוצי הקשר באתר הרשמי.</p>
    `),

    terms: page('תנאי שימוש', 'מדיניות', `
      <p class="lead">המדריכים מיועדים ללקוחות ולשותפים מורשים שמתקינים, מגדירים ומתפעלים את SmartPT.</p>
      <h2>שימוש בתיעוד</h2><p>יש להתאים את ההוראות לגרסת המוצר, להסכם השירות ולמדיניות הארגון. לפני שינוי בסביבת ייצור, בצעו גיבוי ובדיקה בסביבה נפרדת.</p>
      <h2>קובצי הורדה</h2><p>השתמשו רק בקבצים שהתקבלו מערוץ רשמי של SmartPT. אין להפיץ חבילות התקנה או פרטי רישיון ללא אישור.</p>
      <h2>דיוק ועדכונים</h2><p>התנהגות המוצר עשויה להשתנות לפי גרסה והגדרות. במקרה של הבדל בין התיעוד למוצר, בדקו את הגרסה ופנו לתמיכה.</p>
    `),

    'cookie-policy': page('מדיניות עוגיות', 'מדיניות', `
      <p class="lead">האתר שומר בדפדפן רק את בחירת השפה ואת מצב הממשק, כדי לזכור אותם בביקור הבא.</p>
      <h2>בחירת שפה</h2><p>הבחירה בין עברית לאנגלית נשמרת בדפדפן כדי להציג את אותה שפה בביקור הבא.</p>
      <h2>חיפוש וניווט</h2><p>החיפוש מתבצע בדפדפן ואינו שולח את מונחי החיפוש לשירות SmartPT.</p>
      <h2>שירותים חיצוניים</h2><p>פתיחת קישור חיצוני עשויה לאפשר לאותו שירות להשתמש בעוגיות לפי המדיניות שלו.</p>
    `),

    accessibility: page('הצהרת נגישות', 'מדיניות', `
      <p class="lead">אנו פועלים כדי שמרכז הידע של SmartPT יהיה נגיש ונוח לשימוש במחשב ובמכשירים ניידים.</p>
      <h2>תכונות נגישות</h2><ul><li>ניווט מלא באמצעות מקלדת.</li><li>קישור דילוג לתוכן.</li><li>כותרות בסדר היררכי.</li><li>תיאורי טקסט לצילומי מסך.</li><li>מצבי מיקוד גלויים.</li><li>תפריט נייד עם פתיחה וסגירה נגישות.</li><li>תמיכה בעברית מימין לשמאל ובאנגלית משמאל לימין.</li></ul>
      <h2>דיווח על בעיה</h2><p>פנו ל-SmartPT דרך ערוצי הקשר באתר הרשמי וציינו את העמוד, הדפדפן, המכשיר ותיאור קצר של הבעיה.</p>
      <h2>עדכון אחרון</h2><p>4 באוגוסט 2026</p>
    `)
  });
})();
