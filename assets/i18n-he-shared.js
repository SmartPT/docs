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
    { title: 'התחלה', items: [
      ['overview', 'דף הבית'], ['getting-started', 'תחילת עבודה'], ['requirements', 'דרישות מערכת'],
      ['installation', 'התקנה'], ['licensing', 'רישוי'], ['downloads', 'הורדות']
    ] },
    { title: 'ארכיטקטורה', items: [
      ['deployment-overview', 'מבנה הפריסה'], ['active-directory-permissions', 'הרשאות Active Directory']
    ] },
    { title: 'SmartPT Console', items: [
      ['core-getting-started', 'תחילת עבודה'], ['core-portal-overview', 'סקירת הפורטל'],
      ['core-license-status', 'מצב רישיון ומוצרים'], ['core-access-model', 'מודל הרשאות'],
      ['core-settings-overview', 'הגדרות'], ['core-shared-2fa-reset', 'איפוס 2FA']
    ] },
    { title: 'AD Control', items: [
      ['ad-control-getting-started', 'תחילת עבודה'], ['ad-control-access-model', 'מודל הרשאות'],
      ['ad-control-portal-overview', 'סקירת הפורטל'], ['ad-control-settings-overview', 'הגדרות'],
      ['ad-control-protected-identities', 'משתמשים וקבוצות מוגנים'], ['ad-control-operator-console', 'מסוף נציגי התמיכה'],
      ['ad-control-password-reset', 'איפוס סיסמה'], ['ad-control-account-unlock', 'שחרור חשבון נעול'],
      ['ad-control-profile-updates', 'עדכון פרטי משתמש'], ['ad-control-group-management', 'ניהול קבוצות'],
      ['ad-control-troubleshooting', 'פתרון תקלות'], ['ad-control-security-model', 'מודל אבטחה']
    ] },
    { title: 'JIT Access', items: [
      ['jit-overview', 'תחילת עבודה'], ['jit-access-model', 'מודל הרשאות'], ['jit-portal-overview', 'סקירת הפורטל'],
      ['jit-settings-overview', 'הגדרות'], ['jit-roles', 'יצירת תפקידים'], ['jit-assignments', 'יצירת הקצאות'],
      ['jit-assignment-types', 'סוגי הקצאות'], ['jit-eligible-otp', 'Eligible OTP'],
      ['jit-sessions-revoke', 'הפעלות פעילות'], ['jit-notifications-session-policy', 'התראות ומדיניות'],
      ['jit-troubleshooting', 'פתרון תקלות']
    ] },
    { title: 'תפעול', items: [
      ['security-model', 'מודל אבטחה משותף'], ['audit', 'יומני ביקורת'],
      ['troubleshooting', 'פתרון תקלות'], ['release-notes', 'הערות גרסה']
    ] },
    { title: 'מדיניות', items: [
      ['privacy', 'פרטיות'], ['terms', 'תנאי שימוש'], ['cookie-policy', 'מדיניות עוגיות'], ['accessibility', 'נגישות']
    ] }
  ];

  Object.assign(state.pageMeta, {
    overview: 'מדריכים להתקנה, להגדרה ולתפעול של SmartPT Core, ‏AD Control ו-JIT Access בסביבת Active Directory מקומית.',
    'getting-started': 'סדר העבודה המומלץ להתקנת SmartPT, הפעלת הרישיון והגדרת AD Control ו-JIT Access.',
    requirements: 'דרישות השרת, IIS, Active Directory, זהות השירות, הרשת, OTP, SMTP והדפדפנים הנתמכים.',
    installation: 'התקנת SmartPT Core והמוצרים באמצעות אשף ההתקנה.',
    licensing: 'הפעלת רישיון SmartPT ובדיקת מצב הרישיון והמוצרים.',
    downloads: 'הורדת חבילת ההתקנה הרשמית של SmartPT Core.',
    'deployment-overview': 'מבנה הפריסה המקומית של SmartPT והקשר בין הפורטלים, השירותים ו-Active Directory.',
    'active-directory-permissions': 'הרשאות Active Directory הנדרשות ל-AD Control ול-JIT לפי עקרון ההרשאה המינימלית.',
    'security-model': 'מודל האבטחה המשותף של SmartPT Core, ‏AD Control ו-JIT Access.',
    audit: 'בדיקת יומני ביקורת עבור פעולות ב-SmartPT Core, ‏AD Control ו-JIT Access.',
    troubleshooting: 'בדיקות ראשוניות לתקלות גישה, רישוי, OTP, IIS ותקשורת עם Active Directory.',
    'release-notes': 'שינויים בתיעוד ובהתנהגות המוצר לפי הגרסה המותקנת.',
    privacy: 'מדיניות הפרטיות של אתר התיעוד SmartPT.',
    terms: 'תנאי השימוש באתר התיעוד SmartPT.',
    'cookie-policy': 'מידע על השימוש בעוגיות ובאחסון דפדפן באתר התיעוד.',
    accessibility: 'הצהרת הנגישות של אתר התיעוד SmartPT.'
  });

  Object.assign(state.pages, {
    overview: page('תיעוד SmartPT ללקוחות', 'תיעוד ללקוחות', `
      <p class="lead">מדריכים להתקנה, להגדרה ולתפעול של SmartPT Core, ‏AD Control ו-JIT Access בסביבת Active Directory מקומית.</p>
      <div class="page-actions">
        <a class="button primary" href="#requirements">בדיקת דרישות המערכת</a>
        <a class="button secondary" href="#installation">התקנת SmartPT Core</a>
        <a class="button secondary" href="#ad-control-getting-started">תחילת עבודה עם AD Control</a>
        <a class="button secondary" href="#jit-overview">תחילת עבודה עם JIT</a>
      </div>
      <h2>המוצרים המתועדים באתר</h2>
      <div class="cards">
        <article class="card"><h3>SmartPT Core</h3><p>התקנה, הפעלת רישיון, מצב המוצרים, הרשאות למסוף ואיפוס 2FA.</p></article>
        <article class="card"><h3>AD Control</h3><p>איפוס סיסמה, שחרור חשבון נעול, עדכון פרטים וניהול קבוצות בהתאם לרמת ההרשאה.</p></article>
        <article class="card"><h3>JIT Access</h3><p>שיוך זמני לקבוצות Active Directory באמצעות תפקידים, הקצאות והפעלות מוגבלות בזמן.</p></article>
      </div>
      <h2>סדר העבודה המומלץ</h2>
      <ol><li>בדקו את דרישות המערכת.</li><li>התקינו את SmartPT Core ואת המוצרים.</li><li>הפעילו את הרישיון ובדקו את מצב המערכת.</li><li>הגדירו הרשאות ב-AD Control או תפקידים והקצאות ב-JIT.</li><li>בצעו בדיקה עם משתמש וקבוצה שאינם בסביבת הייצור.</li><li>בדקו את יומן הביקורת.</li></ol>
      <div class="cards">
        <article class="card">${shot('./docs/ad-control/screenshots/ad-control-product-overview.jpg', 'סקירת AD Control', 'AD Control מגביל כל נציג לפעולות שהוגדרו לרמת ההרשאה שלו.')}</article>
        <article class="card">${shot('./docs/jit/screenshots/jit-product-overview.jpg', 'סקירת JIT Access', 'JIT מעניק שיוך זמני לקבוצות AD ומסיר אותו בסיום.')}</article>
      </div>
    `),

    'getting-started': page('תחילת עבודה עם SmartPT', 'התחלה', `
      <p class="lead">התחילו בהכנת השרת והרשאות השירות, ולאחר מכן התקינו, הפעילו רישיון והגדירו את המוצרים.</p>
      <h2>סדר ההקמה</h2>
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
      <h2>תוצאה צפויה</h2><p>SmartPT Console נפתח, הרישיון פעיל ושני פורטלי המוצרים זמינים בהתאם להרשאות המשתמש.</p>
    `),

    requirements: page('דרישות מערכת', 'התחלה', `
      <p class="lead">בדקו את הדרישות לפני התקנת SmartPT Core, ‏AD Control או JIT Access.</p>
      <h2>שרת ותשתית</h2>
      <div class="table-wrap"><table><thead><tr><th>רכיב</th><th>דרישה</th></tr></thead><tbody>
        <tr><td>מערכת הפעלה</td><td>Windows Server 2019 ומעלה, מחובר לדומיין Active Directory המקומי.</td></tr>
        <tr><td>הרשאות התקנה</td><td>הרצת <strong>Setup.exe</strong> כמנהל מערכת בשרת היעד.</td></tr>
        <tr><td>IIS</td><td>אשף ההתקנה מתקין ובודק את רכיבי IIS הנדרשים, כולל Windows Authentication וכלי הניהול.</td></tr>
        <tr><td>.NET</td><td>.NET 8 Runtime ו-ASP.NET Core Hosting Bundle. האשף בודק את הרכיבים לפני הפריסה.</td></tr>
        <tr><td>PowerShell</td><td>Windows PowerShell ומודול ActiveDirectory זמינים בשרת.</td></tr>
        <tr><td>דפדפן</td><td>גרסה נתמכת ועדכנית של Microsoft Edge, Google Chrome או דפדפן מבוסס Chromium.</td></tr>
      </tbody></table></div>
      <h2>Active Directory וזהות השירות</h2>
      <ul>
        <li>מומלץ להשתמש בחשבון gMSA ייעודי עבור שירותי SmartPT.</li>
        <li>אין להעניק לזהות השירות הרשאת Domain Admin.</li>
        <li>העניקו רק את ההרשאות הנדרשות לפעולות שהארגון אישר.</li>
        <li>ל-JIT נדרשת הרשאה להוסיף ולהסיר חברים רק בקבוצות שמנוהלות באמצעות JIT.</li>
      </ul>
      <h2>רשת, OTP ודואר</h2>
      <ul><li>נדרשת תקשורת בין שרת SmartPT לבקרי הדומיין.</li><li>נדרשת גישה לשירותי הרישוי והעדכון שהוגדרו בארגון.</li><li>אם משתמשים בדואר, הגדירו שרת SMTP ובדקו שליחה.</li><li>אם משתמשים ב-OTP לנייד, ודאו שהמאפיין <code>mobile</code> ב-Active Directory מכיל מספר תקין.</li></ul>
      <h2>לפני ייצור</h2><p>בצעו התקנה ובדיקה בסביבת מעבדה או בדיקות. ודאו רישוי, כניסה, פעולות AD, משלוח OTP, הסרת הרשאות וכתיבה ליומן הביקורת.</p>
    `),

    'deployment-overview': page('מבנה הפריסה', 'ארכיטקטורה', `
      <p class="lead">SmartPT מותקנת בתוך סביבת הלקוח ופועלת מול Active Directory המקומי.</p>
      <h2>רכיבי הפריסה</h2>
      <div class="table-wrap"><table><thead><tr><th>רכיב</th><th>תפקיד</th></tr></thead><tbody>
        <tr><td>SmartPT Core</td><td>רישוי, מצב המוצרים, הרשאות למסוף וכניסה לפורטלים.</td></tr>
        <tr><td>AD Control</td><td>פעולות Helpdesk בהתאם לרמת ההרשאה ולמדיניות הארגון.</td></tr>
        <tr><td>JIT Access</td><td>שיוך זמני לקבוצות Active Directory והסרה אוטומטית.</td></tr>
        <tr><td>שירותי SmartPT</td><td>בודקים רישיון, הרשאות ומדיניות לפני ביצוע פעולה ב-AD.</td></tr>
        <tr><td>יומן ביקורת</td><td>שומר את מבצע הפעולה, היעד, התוצאה ומזהה ההתאמה.</td></tr>
      </tbody></table></div>
      <h2>גבול ההרשאה</h2><p>נציגי התמיכה ומפעילי JIT עובדים דרך הפורטל. הם אינם זקוקים להרשאות AD ישירות עבור הפעולות הנתמכות.</p>
      <div class="callout info"><strong>המלצה:</strong> הפרידו ככל האפשר בין הרשאות השירות של AD Control לבין הקבוצות המנוהלות באמצעות JIT.</div>
    `),

    'active-directory-permissions': page('הרשאות Active Directory', 'ארכיטקטורה', `
      <p class="lead">העניקו לזהות השירות רק את ההרשאות הנדרשות לפעולות שהפעלתם ב-SmartPT.</p>
      <div class="callout warning"><strong>אין להעניק Domain Admin לזהות השירות.</strong> הרשאה רחבה מקשה על הגבלת המערכת ועל בדיקת השפעתה.</div>
      <h2>AD Control</h2><p>העניקו הרשאות רק לפעולות שהארגון מאפשר, כגון איפוס סיסמה, שחרור חשבון נעול, עדכון מאפיינים מאושרים או שינוי שיוך לקבוצות מאושרות.</p>
      <h2>JIT Access</h2><p>העניקו הרשאת שינוי חברות רק בקבוצות שמופו לתפקידי JIT. בדקו שהשירות יכול להוסיף ולהסיר חברים מכל קבוצה מנוהלת.</p>
      <h2>הגנת Tier 0</h2><ul><li>הוציאו חשבונות וקבוצות Tier 0 מטיפול שוטף של Helpdesk.</li><li>הגדירו משתמשים וקבוצות מוגנים ב-AD Control.</li><li>בדקו עם משתמש Tier 1 ו-Tier 2 שהחשבונות המוגנים אינם מופיעים בחיפוש.</li></ul>
      <h2>אימות בסביבת בדיקות</h2><ol><li>צרו משתמש וקבוצה ייעודיים לבדיקה.</li><li>בצעו כל פעולה שאושרה.</li><li>ודאו שפעולה שלא אושרה נכשלת.</li><li>בדקו את יומן הביקורת.</li></ol>
    `),

    installation: page('התקנת SmartPT', 'SmartPT Core', `
      <p class="lead">השתמשו באשף ההתקנה כדי להכין את השרת, לפרוס את SmartPT Core ואת המוצרים ולהפעיל את הרישיון.</p>
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
      ${shot('./docs/core/screenshots/installer-gmsa-preparation.png', 'הכנת חשבון gMSA', 'האשף מכין את זהות השירות עבור יישומי SmartPT.')}
      ${shot('./docs/core/screenshots/installer-iis-installation.png', 'התקנת IIS', 'רכיבי IIS הנדרשים מותקנים ונבדקים.')}
      ${shot('./docs/core/screenshots/installer-deploy-packages.png', 'פריסת חבילות SmartPT', 'SmartPT Core והמוצרים שנבחרו נפרסים לשרת.')}
      ${shot('./docs/core/screenshots/installer-iis-configuration.png', 'הגדרת IIS עבור SmartPT', 'האשף מגדיר את היישומים ואת App Pools.')}
      ${shot('./docs/core/screenshots/installer-license-validation.png', 'אימות רישיון SmartPT', 'הזינו את פרטי הרישיון ובדקו שהאימות הצליח.')}
      ${shot('./docs/core/screenshots/installer-license-activation-active.png', 'רישיון SmartPT פעיל', 'מצב ACTIVE מאשר שהרישיון הופעל.')}
      ${shot('./docs/core/screenshots/installer-final-health.png', 'בדיקת תקינות סופית', 'סיימו רק לאחר שכל בדיקות התקינות עברו בהצלחה.')}
      <h2>תוצאה צפויה</h2><p>SmartPT Console נפתח בכתובת המקומית, הרישיון פעיל וכרטיסי AD Control ו-JIT Access מציגים מצב תקין.</p>
      <h2>בדיקת ההתקנה</h2><ol><li>פתחו את SmartPT Console.</li><li>בדקו שמצב הרישיון <strong>ACTIVE</strong>.</li><li>פתחו את שני פורטלי המוצרים.</li><li>בדקו ששירותי IIS וה-App Pools פעילים.</li><li>בצעו כניסה עם משתמש בדיקה.</li></ol>
    `),

    licensing: page('רישוי', 'SmartPT Core', `
      <p class="lead">הפעילו את רישיון SmartPT ובדקו שהמוצרים זמינים למשתמשים המורשים.</p>
      <h2>הפעלת הרישיון</h2><ol><li>פתחו את שלב <strong>License activation</strong> באשף ההתקנה.</li><li>הזינו את המספר הסידורי שסופק לארגון.</li><li>הפעילו את האימות.</li><li>ודאו שהמצב משתנה ל-<strong>ACTIVE</strong>.</li></ol>
      ${shot('./docs/core/screenshots/license-status-highlight.png', 'מצב רישיון SmartPT פעיל', 'בדקו את מצב הרישיון ואת מועד האימות האחרון.')}
      <h2>השפעת הרישיון</h2><ul><li>רישיון Core פעיל נדרש לכניסה למוצרים.</li><li>למשתמשי AD Control ולמשתמשי JIT נדרשת הקצאת רישיון מוצר בהתאם להגדרות.</li><li>משתמש יעד שמנוהל ב-AD Control אינו צורך רישיון מפעיל.</li></ul>
      <h2>בדיקה</h2><ol><li>פתחו <strong>License and Billing</strong> ב-SmartPT Console.</li><li>בדקו את המצב ואת האימות האחרון.</li><li>בדקו שכרטיסי המוצרים מציגים מצב תקין.</li><li>היכנסו עם משתמש מורשה לכל מוצר.</li></ol>
      <div class="callout warning"><strong>חשוב:</strong> רישיון Core שאינו פעיל עלול לחסום כניסה ל-AD Control ול-JIT Access.</div>
    `),

    downloads: page('הורדות', 'חבילת התקנה', `
      <p class="lead">הורידו את חבילת ההתקנה הרשמית של SmartPT Core לשרת Windows המיועד.</p>
      <h2>SmartPT Core Setup</h2>
      <p>הקובץ כולל את אשף ההתקנה של SmartPT Core ואת שלבי הכנת IIS, פריסת המוצרים, הפעלת הרישיון ובדיקת התקינות.</p>
      <div class="page-actions"><a class="button primary" href="https://smartpt.co.il/downloads/core/Setup.exe">הורדת SmartPT Core Setup.exe</a></div>
      <h2>לפני ההתקנה</h2><ul><li>העבירו את הקובץ לשרת היעד.</li><li>ודאו שהשרת עומד בדרישות המערכת.</li><li>הריצו את הקובץ כמנהל מערכת.</li><li>בדקו את החבילה בסביבת בדיקות לפני התקנה בייצור.</li></ul>
    `),

    'security-model': page('מודל האבטחה המשותף', 'תפעול', `
      <p class="lead">SmartPT בודקת רישיון, זהות משתמש, הרשאות ומדיניות לפני ביצוע פעולה רגישה.</p>
      <h2>עקרונות מרכזיים</h2>
      <ul><li>המערכת פועלת בתוך סביבת הלקוח ומול Active Directory המקומי.</li><li>נציגים ומפעילים אינם זקוקים להרשאות AD ישירות עבור הפעולות הנתמכות.</li><li>AD Control מגביל כל נציג לפעולות שהוגדרו לרמת ההרשאה שלו.</li><li>JIT מעניק שיוך זמני לקבוצות AD ומסיר אותו בתום הזמן או בביטול.</li><li>חשבונות Tier 0 ומשתמשים מוגנים נשארים מחוץ לפעולות Helpdesk.</li><li>פעולות רגישות נרשמות ביומן הביקורת.</li></ul>
      <h2>OTP</h2><p>כאשר נדרש OTP, פרטי הקשר נקראים מ-Active Directory. עבור הודעת טלפון, השתמשו במאפיין <code>mobile</code> וודאו שהמספר כולל קידומת מדינה לפי הצורך.</p>
      <h2>מה לבדוק</h2><ol><li>כניסה עם כל סוג משתמש.</li><li>חסימת פעולה שאינה מורשית.</li><li>חסימת חשבון מוגן.</li><li>הסרת שיוך JIT לאחר תפוגה או ביטול.</li><li>רישום מלא ביומן הביקורת.</li></ol>
    `),

    audit: page('יומני ביקורת', 'תפעול', `
      <p class="lead">השתמשו ביומן הביקורת כדי לבדוק מי ביצע פעולה, על איזה יעד ומה הייתה התוצאה.</p>
      <h2>מידע שכדאי לבדוק</h2>
      <div class="table-wrap"><table><thead><tr><th>שדה</th><th>משמעות</th></tr></thead><tbody>
        <tr><td>מבצע</td><td>המשתמש או השירות שביצע את הפעולה.</td></tr><tr><td>יעד</td><td>המשתמש, הקבוצה, התפקיד או ההקצאה שעליהם בוצעה הפעולה.</td></tr><tr><td>פעולה</td><td>לדוגמה איפוס סיסמה, שחרור נעילה, הפעלת JIT, הארכה או ביטול.</td></tr><tr><td>תוצאה</td><td>הצלחה, כישלון או דחייה.</td></tr><tr><td>זמן</td><td>מועד הפעולה לפי שעון המערכת.</td></tr><tr><td>מזהה התאמה</td><td>מזהה המשמש לאיתור האירוע ביומנים נוספים.</td></tr>
      </tbody></table></div>
      <h2>מידע שאינו אמור להופיע</h2><p>אל תעתיקו ליומן או לצילום מסך סיסמאות, קודי OTP, מספרי רישיון או מידע רגיש אחר.</p>
      <h2>בדיקה לאחר פעולה</h2><ol><li>בצעו פעולה עם משתמש בדיקה.</li><li>פתחו את יומן הביקורת המתאים.</li><li>אתרו את הפעולה לפי המבצע והזמן.</li><li>בדקו יעד, תוצאה ומזהה התאמה.</li></ol>
    `),

    troubleshooting: page('פתרון תקלות', 'תפעול', `
      <p class="lead">התחילו מהתסמין שמופיע בפורטל ובדקו את שכבת הגישה המתאימה.</p>
      <h2>הפורטל אינו נפתח</h2><ol><li>בדקו שהאתר וה-App Pool המתאימים פעילים ב-IIS.</li><li>בדקו ש-SmartPT Core ושירות המוצר פעילים.</li><li>בדקו Windows Authentication ותקשורת עם Active Directory.</li><li>בדקו את יומני היישום ואת מזהה ההתאמה, אם מוצג.</li></ol>
      <h2>המשתמש אינו מורשה</h2><ul><li>בדקו שהרישיון פעיל.</li><li>בדקו שהוקצה למשתמש רישיון מוצר.</li><li>בדקו את קבוצת ההרשאה או תפקיד ה-RBAC.</li><li>בצעו יציאה וכניסה מחדש לאחר שינוי הרשאות.</li></ul>
      <h2>OTP אינו מתקבל</h2><ul><li>בדקו שהמאפיין <code>mobile</code> או כתובת הדואר מלאים ב-Active Directory.</li><li>בדקו את תבנית המספר ואת קידומת המדינה.</li><li>בדקו מגבלות שליחה וניסיון חוזר בהגדרות המוצר.</li><li>אם משתמשים בדואר, בדקו SMTP וחומת אש.</li></ul>
      <h2>פעולת AD נכשלת</h2><ul><li>בדקו שזהות השירות מורשית לבצע את הפעולה על היעד.</li><li>בדקו שהיעד אינו Tier 0 או מוגן.</li><li>בדקו תקשורת עם בקר הדומיין.</li><li>בדקו את יומן הביקורת ואת יומן השירות.</li></ul>
    `),

    'release-notes': page('הערות גרסה', 'תפעול', `
      <p class="lead">בדקו את גרסת המוצר המותקנת לפני שימוש בהוראות התלויות בגרסה.</p>
      <h2>עדכון התיעוד הנוכחי</h2><ul><li>נוספו מדריכים בעברית לצד התיעוד האנגלי הקיים.</li><li>נוספו קישורים נפרדים לשיתוף עמוד בעברית או באנגלית.</li><li>כל צילומי המסך וקובצי ההורדה הקיימים נשמרו.</li></ul>
      <h2>לפני עדכון מוצר</h2><p>קראו את הערות הגרסה שסופקו עם החבילה, בדקו את העדכון בסביבת בדיקות וודאו שהגדרות הלקוח נשמרו.</p>
    `),

    privacy: page('מדיניות פרטיות', 'מדיניות', `
      <p class="lead">אתר התיעוד הוא אתר סטטי ומציג מדריכים, צילומי מסך וקישורים להורדה.</p>
      <h2>מידע באתר</h2><p>האתר אינו מבקש להזין פרטי Active Directory, סיסמאות או קודי OTP. יומני שרת עשויים לכלול כתובת IP, סוג דפדפן ובקשות עמוד לצורכי אבטחה ותקינות.</p>
      <h2>קישורים חיצוניים</h2><p>קישורים ל-SmartPT, ל-YouTube או לשירותים אחרים כפופים למדיניות של אותו שירות.</p>
      <h2>מידע בסביבת הלקוח</h2><p>נתוני המוצרים המותקנים באתר הלקוח נשארים באחריות הארגון ובהתאם למדיניות הפנימית שלו.</p>
      <h2>יצירת קשר</h2><p>לשאלות פרטיות פנו ל-SmartPT דרך ערוצי הקשר באתר הרשמי.</p>
    `),

    terms: page('תנאי שימוש', 'מדיניות', `
      <p class="lead">התיעוד מיועד ללקוחות ולשותפים מורשים לצורך התקנה, הגדרה ותפעול של SmartPT.</p>
      <h2>שימוש בתיעוד</h2><p>יש להתאים את ההוראות לגרסת המוצר, להסכם השירות ולמדיניות הארגון. לפני שינוי בסביבת ייצור, בצעו גיבוי ובדיקה בסביבה נפרדת.</p>
      <h2>קובצי הורדה</h2><p>השתמשו רק בקבצים שהתקבלו מערוץ רשמי של SmartPT. אין להפיץ חבילות התקנה או פרטי רישיון ללא אישור.</p>
      <h2>דיוק ועדכונים</h2><p>התנהגות המוצר עשויה להשתנות לפי גרסה והגדרות. במקרה של הבדל בין התיעוד למוצר, בדקו את הגרסה ופנו לתמיכה.</p>
    `),

    'cookie-policy': page('מדיניות עוגיות', 'מדיניות', `
      <p class="lead">אתר התיעוד משתמש באחסון דפדפן מצומצם לצורך שמירת בחירת השפה ומצב הממשק.</p>
      <h2>בחירת שפה</h2><p>הבחירה בין עברית לאנגלית נשמרת בדפדפן כדי להציג את אותה שפה בביקור הבא.</p>
      <h2>חיפוש וניווט</h2><p>החיפוש מתבצע בדפדפן ואינו שולח את מונחי החיפוש לשירות SmartPT.</p>
      <h2>שירותים חיצוניים</h2><p>פתיחת קישור חיצוני עשויה לאפשר לאותו שירות להשתמש בעוגיות לפי המדיניות שלו.</p>
    `),

    accessibility: page('הצהרת נגישות', 'מדיניות', `
      <p class="lead">SmartPT פועלת לשמור על אתר תיעוד נגיש במחשב ובמכשירים ניידים.</p>
      <h2>תכונות נגישות</h2><ul><li>ניווט מלא באמצעות מקלדת.</li><li>קישור דילוג לתוכן.</li><li>כותרות בסדר היררכי.</li><li>תיאורי טקסט לצילומי מסך.</li><li>מצבי מיקוד גלויים.</li><li>תפריט נייד עם פתיחה וסגירה נגישות.</li><li>תמיכה בעברית מימין לשמאל ובאנגלית משמאל לימין.</li></ul>
      <h2>דיווח על בעיה</h2><p>פנו ל-SmartPT דרך ערוצי הקשר באתר הרשמי וציינו את העמוד, הדפדפן, המכשיר ותיאור קצר של הבעיה.</p>
      <h2>עדכון אחרון</h2><p>4 באוגוסט 2026</p>
    `)
  });
})();
