(() => {
  const state = window.smartptHebrew;
  const page = state.page;
  const shot = state.shot;

  Object.assign(state.pageMeta, {
    'ad-control-getting-started': 'תחילת עבודה עם AD Control: רישוי מפעילים, רמות תמיכה, OTP וזהויות מוגנות.',
    'ad-control-access-model': 'מודל הרישוי וההרשאות של מנהלים, Tier 1, ‏Tier 2 ומשתמשי יעד.',
    'ad-control-portal-overview': 'סקירת לוח הבקרה, מסוף התמיכה והגדרות AD Control.',
    'ad-control-settings-overview': 'הגדרת רישיונות, RBAC, משתמשים מוגנים, OTP, SMTP ומדיניות הפעלה.',
    'ad-control-protected-identities': 'הגדרת משתמשים וקבוצות מוגנים וחסימת זהויות Tier 0 מפעולות Helpdesk.',
    'ad-control-operator-console': 'חיפוש משתמש וביצוע פעולות תמיכה בהתאם לרמת ההרשאה.',
    'ad-control-password-reset': 'איפוס סיסמה ישיר או מאומת ב-OTP והצגת סיסמה שנוצרה פעם אחת.',
    'ad-control-account-unlock': 'שחרור חשבון Active Directory נעול, ישירות או לאחר OTP.',
    'ad-control-profile-updates': 'עדכון מאפייני משתמש מאושרים על ידי נציג Tier 2.',
    'ad-control-group-management': 'הוספה והסרה של משתמש מקבוצות מאושרות על ידי Tier 2.',
    'ad-control-troubleshooting': 'פתרון תקלות רישוי, חיפוש, OTP, פעולות משתמש, SMTP ו-IIS.',
    'ad-control-security-model': 'רישוי, RBAC, הגנת Tier 0, ‏OTP ויומן ביקורת ב-AD Control.'
  });

  Object.assign(state.pages, {
    'ad-control-getting-started': page('תחילת עבודה עם AD Control', 'AD Control', `
      <p class="lead">AD Control מאפשר לנציגי תמיכה לבצע פעולות Active Directory שהוגדרו להם, בלי לקבל הרשאות AD רחבות.</p>
      ${shot('./docs/ad-control/screenshots/ad-control-product-overview.jpg', 'סקירת AD Control', 'כל נציג רואה רק את הפעולות המותרות לרמת ההרשאה שלו.')}
      <h2>מה אפשר להגדיר</h2><ul><li>Tier 1 לאיפוס סיסמה ולשחרור חשבון נעול.</li><li>Tier 2 לעדכון פרטים ולניהול קבוצות מאושרות, בנוסף לפעולות Tier 1.</li><li>משתמשים וקבוצות מוגנים שאינם זמינים לנציגי התמיכה.</li><li>אימות OTP לפני פעולות רגישות.</li><li>יומן ביקורת לכל פעולה.</li></ul>
      <h2>סדר ההקמה</h2><ol><li>הקצו רישיון לכל נציג תמיכה.</li><li>הקצו לכל נציג תפקיד Tier אחד בלבד.</li><li>הגדירו משתמשים וקבוצות מוגנים.</li><li>בדקו את מדיניות איפוס הסיסמה ושחרור החשבון.</li><li>הגדירו OTP ו-SMTP לפי הצורך.</li><li>בצעו בדיקה עם משתמש יעד רגיל.</li><li>בדקו את יומן הביקורת.</li></ol>
      <div class="callout info"><strong>רישוי:</strong> נציגי Tier 1 ו-Tier 2 צורכים רישיון AD Control. משתמשי היעד שמנוהלים דרך הפורטל אינם צורכים רישיון.</div>
    `),

    'ad-control-access-model': page('מודל הרשאות ורישוי', 'AD Control', `
      <p class="lead">הרישיון מאפשר כניסה למוצר, ותפקיד ה-RBAC קובע אילו פעולות זמינות בפורטל.</p>
      <div class="table-wrap"><table><thead><tr><th>משתמש</th><th>נדרש רישיון</th><th>פעולות</th></tr></thead><tbody>
        <tr><td>מנהל AD Control</td><td>כן</td><td>הגדרות, רישיונות, תפקידים, הגנות ומדיניות.</td></tr>
        <tr><td>Tier 1</td><td>כן</td><td>איפוס סיסמה ושחרור חשבון נעול בהתאם למדיניות.</td></tr>
        <tr><td>Tier 2</td><td>כן</td><td>פעולות Tier 1, עדכון פרטים וניהול קבוצות מאושרות.</td></tr>
        <tr><td>משתמש יעד</td><td>לא</td><td>החשבון שמנוהל על ידי נציג התמיכה.</td></tr>
      </tbody></table></div>
      <h2>כללי הרשאה</h2><ul><li>Tier 1 אינו יכול לשנות מספרי טלפון, לעדכן פרופיל או לנהל קבוצות.</li><li>Tier 2 רואה רק פעולות שהופעלו בהגדרות.</li><li>Tier 0, משתמשים מוגנים וחברים בקבוצות מוגנות אינם זמינים לפעולות נציג.</li><li>רק מנהל AD Control יכול לפתוח את כל אזורי ההגדרות.</li></ul>
      ${shot('./docs/ad-control/screenshots/settings-access-assignments-highlight.jpg', 'הקצאת רישיונות ותפקידים ב-AD Control', 'הקצו לכל נציג רישיון ותפקיד מתאים.')}
      <h2>בדיקה</h2><p>היכנסו עם חשבון Tier 1 ועם חשבון Tier 2. ודאו שכל אחד רואה רק את הפעולות שהוגדרו עבורו.</p>
    `),

    'ad-control-portal-overview': page('סקירת פורטל AD Control', 'AD Control', `
      <p class="lead">הפורטל מציג את לוח הבקרה, מסוף התמיכה וההגדרות בהתאם להרשאת המשתמש.</p>
      <h2>מנהל</h2>${shot('./docs/ad-control/screenshots/dashboard-jim-settings-access.jpg', 'לוח הבקרה של מנהל AD Control', 'מנהל רואה את Dashboard, מסוף AD Control ואת Settings.')}
      <h2>Tier 1</h2>${shot('./docs/ad-control/screenshots/david-dashboard.jpg', 'לוח הבקרה של משתמש Tier 1', 'Tier 1 נכנס למסוף התמיכה ואינו רואה את כל הגדרות המנהל.')}
      <h2>Tier 2</h2>${shot('./docs/ad-control/screenshots/sara-dashboard.jpg', 'לוח הבקרה של משתמש Tier 2', 'Tier 2 רואה פעולות נוספות שאושרו עבורו.')}
      <h2>אזורי הפורטל</h2>
      <div class="table-wrap"><table><thead><tr><th>אזור</th><th>שימוש</th></tr></thead><tbody><tr><td>Dashboard</td><td>מצב המשתמש וקישורים לפעולות הזמינות.</td></tr><tr><td>AD Control</td><td>חיפוש משתמש וביצוע פעולות תמיכה.</td></tr><tr><td>Settings</td><td>רישיונות, RBAC, הגנות, OTP, SMTP ומדיניות הפעלה. זמין למנהלים.</td></tr></tbody></table></div>
    `),

    'ad-control-settings-overview': page('הגדרות AD Control', 'AD Control', `
      <p class="lead">הגדירו מי רשאי להשתמש במוצר, אילו פעולות מותרות ואילו משתמשים וקבוצות חסומים.</p>
      ${shot('./docs/ad-control/screenshots/settings-all-policy-areas-highlight.jpg', 'אזורי המדיניות בהגדרות AD Control', 'בדקו את כל אזורי המדיניות לפני פתיחת המוצר לנציגים.')}
      <h2>סדר ההגדרה</h2><ol><li>הקצו רישיונות ותפקידי Tier.</li><li>הגדירו משתמשים וקבוצות מוגנים.</li><li>בחרו אילו סוגי איפוס ושחרור נעילה מותרים.</li><li>הגדירו OTP, מגבלות שליחה וערוצי משלוח.</li><li>הגדירו SMTP והתראות לפי הצורך.</li><li>בדקו את משך ההפעלה בפורטל.</li><li>שמרו ובדקו עם חשבונות Tier 1 ו-Tier 2.</li></ol>
      ${shot('./docs/ad-control/screenshots/settings-tier-role-options.jpg', 'אפשרויות התפקיד Tier 1 ו-Tier 2', 'הקצו לכל נציג את רמת התמיכה המתאימה.')}
      ${shot('./docs/ad-control/screenshots/settings-protection-highlight.jpg', 'הגדרות משתמשים וקבוצות מוגנים', 'הגדירו הגנות לפני בדיקות עם נציגי תמיכה.')}
      ${shot('./docs/ad-control/screenshots/settings-policy-delivery-highlight.jpg', 'הגדרות OTP, משלוח ומדיניות', 'בדקו את ערוצי המשלוח ואת מגבלות האימות.')}
    `),

    'ad-control-protected-identities': page('משתמשים וקבוצות מוגנים', 'AD Control', `
      <p class="lead">הגדירו זהויות שאסור לנציגי Tier 1 ו-Tier 2 לחפש או לנהל.</p>
      <h2>מה נחסם</h2><ul><li>משתמשי Tier 0.</li><li>משתמשים שהוספו לרשימת Protected users.</li><li>חברים בקבוצות שהוספו לרשימת Protected groups.</li></ul>
      <p>זהויות מוגנות אינן מופיעות בחיפוש נציג ואינן ניתנות לבחירה לאיפוס סיסמה, שחרור נעילה, עדכון פרטים או שינוי קבוצה.</p>
      <h2>הגדרת ההגנה</h2><ol><li>פתחו <strong>Settings</strong>.</li><li>הוסיפו משתמשים ב-<strong>Protected users</strong>.</li><li>הוסיפו קבוצות ב-<strong>Protected groups</strong>.</li><li>שמרו.</li><li>היכנסו עם חשבון Tier ובדקו שהזהות אינה מופיעה.</li></ol>
      ${shot('./docs/ad-control/screenshots/david-protected-user-search.jpg', 'משתמש מוגן אינו מופיע בחיפוש Tier 1', 'משתמש מוגן נשאר מחוץ לחיפוש ולפעולות התמיכה.')}
      ${shot('./docs/ad-control/screenshots/sara-tier0-search-blocked.jpg', 'חשבון Tier 0 חסום למשתמש Tier 2', 'Tier 0 נשאר חסום גם עבור Tier 2.')}
      <div class="callout warning"><strong>חשוב:</strong> הגנה זו חלה על פעולות המתבצעות דרך AD Control. היא אינה מחליפה את הגנות Active Directory ואת מדיניות Tier 0 של הארגון.</div>
    `),

    'ad-control-operator-console': page('מסוף נציגי התמיכה', 'AD Control', `
      <p class="lead">חפשו משתמש Active Directory ובצעו רק את הפעולות הזמינות לרמת ההרשאה שלכם.</p>
      <h2>חיפוש משתמש</h2><ol><li>פתחו את הלשונית <strong>AD Control</strong>.</li><li>חפשו לפי שם משתמש, UPN או שם תצוגה.</li><li>בחרו משתמש רגיל שאינו מוגן.</li><li>בדקו את מצב החשבון ואת הפעולות הזמינות.</li></ol>
      ${shot('./docs/ad-control/screenshots/david-avi-selected.jpg', 'משתמש שנבחר במסוף Tier 1', 'המסוף מציג את פרטי המשתמש ואת הפעולות המותרות לנציג.')}
      <h2>פעולות לפי רמה</h2><div class="table-wrap"><table><thead><tr><th>רמה</th><th>פעולות</th></tr></thead><tbody><tr><td>Tier 1</td><td>איפוס סיסמה ושחרור חשבון נעול.</td></tr><tr><td>Tier 2</td><td>פעולות Tier 1, עדכון מאפיינים וניהול קבוצות מאושרות.</td></tr></tbody></table></div>
      <h2>אם המשתמש אינו מופיע</h2><p>בדקו אם הוא Tier 0, משתמש מוגן או חבר בקבוצה מוגנת. בדקו גם שהחשבון קיים ב-Active Directory.</p>
    `),

    'ad-control-password-reset': page('איפוס סיסמה', 'AD Control', `
      <p class="lead">אפסו סיסמה ישירות או לאחר אימות OTP, בהתאם למדיניות שהגדיר מנהל AD Control.</p>
      <h2>לפני שמתחילים</h2><ul><li>המשתמש אינו Tier 0 או מוגן.</li><li>לנציג יש רישיון ותפקיד מתאים.</li><li>אם נדרש OTP, המאפיין <code>mobile</code> או כתובת הדואר מלאים ב-Active Directory.</li></ul>
      <h2>איפוס ישיר</h2><ol><li>חפשו ובחרו את המשתמש.</li><li>לחצו על <strong>Reset password</strong>.</li><li>בחרו את אפשרויות האיפוס המותרות.</li><li>אשרו.</li></ol>
      ${shot('./docs/ad-control/screenshots/avi-reset-direct-modal.jpg', 'חלון איפוס סיסמה ישיר', 'בדקו את משתמש היעד ואת האפשרויות לפני האישור.')}
      <h2>איפוס עם OTP</h2><p>בחרו באפשרות האימות, שלחו את הקוד לפרטי הקשר השמורים ב-Active Directory והזינו את הקוד לפני האיפוס.</p>
      ${shot('./docs/ad-control/screenshots/avi-reset-otp-option.jpg', 'אפשרות איפוס סיסמה עם OTP', 'OTP נשלח רק לערוץ שהוגדר ולפרטי הקשר השמורים ב-AD.')}
      <h2>סיסמה שנוצרה</h2>${shot('./docs/ad-control/screenshots/avi-reset-generated-password-once.jpg', 'סיסמה שנוצרה ומוצגת פעם אחת', 'הסיסמה מוצגת פעם אחת בלבד. מסרו אותה למשתמש בערוץ מאושר.')}
      <h2>בדיקה</h2><ul><li>האיפוס הסתיים בהצלחה.</li><li>הפעולה מופיעה ביומן הביקורת.</li><li>אם הוגדר Change password at next sign-in, המשתמש נדרש לשנות סיסמה בכניסה הבאה.</li></ul>
    `),

    'ad-control-account-unlock': page('שחרור חשבון נעול', 'AD Control', `
      <p class="lead">שחררו חשבון Active Directory נעול ישירות או לאחר אימות OTP, בהתאם למדיניות.</p>
      <h2>בדיקת מצב החשבון</h2>${shot('./docs/ad-control/screenshots/avi-locked-status-highlight.jpg', 'מצב Locked מסומן עבור המשתמש', 'פעולת השחרור זמינה כאשר החשבון נעול.')}
      <h2>שחרור ישיר</h2><ol><li>חפשו ובחרו את המשתמש הנעול.</li><li>לחצו על <strong>Unlock account</strong>.</li><li>בדקו את פרטי היעד.</li><li>אשרו.</li></ol>
      ${shot('./docs/ad-control/screenshots/avi-unlock-direct-modal.jpg', 'חלון שחרור חשבון נעול', 'בדקו את המשתמש לפני ביצוע השחרור.')}
      <h2>שחרור עם OTP</h2><p>כאשר המדיניות דורשת אימות, שלחו OTP לפרטי הקשר השמורים ב-Active Directory והזינו את הקוד לפני השחרור.</p>
      <h2>תוצאה צפויה</h2>${shot('./docs/ad-control/screenshots/avi-unlock-direct-complete.jpg', 'חשבון ששוחרר בהצלחה', 'מצב הנעילה מתעדכן והפעולה נרשמת ביומן הביקורת.')}
    `),

    'ad-control-profile-updates': page('עדכון פרטי משתמש', 'AD Control', `
      <p class="lead">נציג Tier 2 יכול לעדכן רק את מאפייני המשתמש שאושרו במדיניות AD Control.</p>
      <h2>לפני שמתחילים</h2><ul><li>לנציג יש רישיון ותפקיד Tier 2.</li><li>המשתמש אינו Tier 0 או מוגן.</li><li>השדה הרצוי זמין במסוף.</li></ul>
      <h2>עדכון הפרטים</h2><ol><li>חפשו ובחרו את המשתמש.</li><li>פתחו את פעולת עדכון הפרופיל.</li><li>שנו רק את השדות הנדרשים.</li><li>בדקו את הערכים ואשרו.</li></ol>
      ${shot('./docs/ad-control/screenshots/sara-profile-update.jpg', 'עדכון פרופיל על ידי Tier 2', 'Tier 2 מעדכן מאפיינים מאושרים בלבד.')}
      <h2>תוצאה צפויה</h2><p>הערכים מתעדכנים ב-Active Directory והפעולה נרשמת ביומן הביקורת.</p>
      <div class="callout info"><strong>הפרדת תפקידים:</strong> Tier 1 אינו יכול לשנות מספרי טלפון או מאפייני פרופיל.</div>
    `),

    'ad-control-group-management': page('ניהול קבוצות מאושרות', 'AD Control', `
      <p class="lead">נציג Tier 2 יכול להוסיף או להסיר משתמש מקבוצות שהוגדרו כזמינות לניהול.</p>
      <h2>לפני שמתחילים</h2><ul><li>לנציג יש תפקיד Tier 2.</li><li>משתמש היעד אינו Tier 0 או מוגן.</li><li>הקבוצה מותרת ואינה קבוצה מוגנת.</li><li>זהות השירות מורשית לשנות חברות בקבוצה.</li></ul>
      <h2>שינוי שיוך</h2><ol><li>חפשו ובחרו את המשתמש.</li><li>פתחו את פעולת ניהול הקבוצות.</li><li>בחרו קבוצה מאושרת.</li><li>הוסיפו או הסירו את המשתמש.</li><li>אשרו.</li></ol>
      ${shot('./docs/ad-control/screenshots/sara-group-management.jpg', 'ניהול קבוצות על ידי Tier 2', 'המסוף מציג רק קבוצות שהותרו לניהול.')}
      <h2>בדיקה</h2><ul><li>בדקו את השיוך ב-Active Directory.</li><li>ודאו שהקבוצה והפעולה מופיעות ביומן הביקורת.</li><li>בדקו שקבוצה מוגנת אינה זמינה לבחירה.</li></ul>
    `),

    'ad-control-troubleshooting': page('פתרון תקלות AD Control', 'AD Control', `
      <p class="lead">בדקו רישיון, תפקיד, הגנות, מדיניות OTP והרשאות השירות לפי התסמין.</p>
      <h2>המשתמש אינו נכנס</h2><ul><li>בדקו שרישיון Core ורישיון AD Control פעילים.</li><li>בדקו שהוקצה למשתמש רישיון מפעיל.</li><li>בדקו שהוקצה תפקיד מנהל, Tier 1 או Tier 2.</li></ul>
      <h2>משתמש יעד אינו מופיע</h2><ul><li>בדקו שהחשבון קיים ב-Active Directory.</li><li>בדקו אם הוא Tier 0, משתמש מוגן או חבר בקבוצה מוגנת.</li><li>בדקו את הרשאות החיפוש של זהות השירות.</li></ul>
      <h2>OTP אינו מתקבל</h2><ul><li>בדקו את המאפיין <code>mobile</code> ואת קידומת המדינה.</li><li>בדקו כתובת דואר אם נבחר משלוח בדואר.</li><li>בדקו מגבלות שליחה וניסיון חוזר.</li><li>בדקו SMTP וחומת אש.</li></ul>
      <h2>איפוס או שחרור נעילה נכשל</h2><ul><li>בדקו שהפעולה מופעלת במדיניות.</li><li>בדקו את הרשאת זהות השירות על משתמש היעד.</li><li>בדקו את מצב החשבון ואת יומן הביקורת.</li></ul>
      <h2>הפורטל אינו נטען</h2><p>בדקו ב-IIS שהיישומים <strong>adc</strong> ו-<strong>PM-Backend</strong> וה-App Pools שלהם פעילים.</p>
    `),

    'ad-control-security-model': page('מודל האבטחה של AD Control', 'AD Control', `
      <p class="lead">AD Control מפריד בין כניסה למוצר, רמת הרשאה, הגנת זהויות ואימות הפעולה.</p>
      <h2>בדיקות לפני פעולה</h2><ol><li>הרישיון פעיל.</li><li>לנציג יש תפקיד מתאים.</li><li>הפעולה מופעלת במדיניות.</li><li>משתמש היעד אינו Tier 0 או מוגן.</li><li>OTP הושלם כאשר המדיניות דורשת זאת.</li><li>זהות השירות מורשית לבצע את השינוי.</li></ol>
      <h2>הפרדת תפקידים</h2><ul><li>Tier 1 מוגבל לאיפוס סיסמה ולשחרור חשבון נעול.</li><li>Tier 2 מקבל פעולות נוספות שאושרו מראש.</li><li>מנהלי הגדרות אינם נדרשים להשתמש בחשבון Domain Admin לצורך עבודת Helpdesk.</li></ul>
      <h2>הגנת זהויות</h2><p>משתמשים מוגנים, חברים בקבוצות מוגנות וזהויות Tier 0 אינם מופיעים בחיפוש הרגיל של נציגי התמיכה.</p>
      <h2>תיעוד</h2><p>הפעולה נרשמת עם המבצע, היעד, השיטה, התוצאה ומזהה ההתאמה. סיסמאות וקודי OTP אינם אמורים להישמר ביומן.</p>
    `)
  });
})();
