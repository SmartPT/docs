(() => {
  const state = window.smartptHebrew;
  const page = state.page;
  const shot = state.shot;

  Object.assign(state.pageMeta, {
    'jit-overview': 'תחילת עבודה עם JIT Access: תפקידים, הקצאות ושיוך זמני לקבוצות Active Directory.',
    'jit-access-model': 'רישוי, RBAC, תפקידי JIT, הקצאות והפעלות פעילות.',
    'jit-portal-overview': 'סקירת לוח הבקרה, תפקידים, הקצאות, הפעלות פעילות והגדרות JIT.',
    'jit-settings-overview': 'הגדרת רישיונות, RBAC, משתמשים זכאים, התראות, SMTP ומדיניות הפעלה.',
    'jit-roles': 'יצירת תפקיד JIT ומיפוי לקבוצות Active Directory קיימות.',
    'jit-assignments': 'יצירת הקצאת JIT ידנית, מתוזמנת או Eligible OTP.',
    'jit-assignment-types': 'בחירה בין הקצאה ידנית, מתוזמנת או Eligible OTP.',
    'jit-eligible-otp': 'הגדרת Eligible OTP והפעלת גישה זמנית על ידי המשתמש הזכאי.',
    'jit-sessions-revoke': 'ניטור, הארכה וביטול של הפעלות JIT פעילות.',
    'jit-notifications-session-policy': 'הגדרת התראות, SMTP ומדיניות הפעלה ב-JIT Access.',
    'jit-troubleshooting': 'פתרון תקלות רישוי, הקצאות, OTP, שיוך לקבוצות ושירותי JIT.'
  });

  Object.assign(state.pages, {
    'jit-overview': page('תחילת עבודה עם JIT Access', 'JIT Access', `
      <p class="lead">JIT משייך משתמש לקבוצות Active Directory שהוגדרו מראש לזמן מוגבל ומסיר את השיוך בתום ההפעלה או לאחר ביטול.</p>
      ${shot('./docs/jit/screenshots/jit-product-overview.jpg', 'סקירת JIT Access', 'JIT מחליף שיוך קבוע לקבוצות ניהול בגישה מוגבלת בזמן.')}
      <h2>הרכיבים המרכזיים</h2>
      <div class="table-wrap"><table><thead><tr><th>רכיב</th><th>תפקיד</th></tr></thead><tbody>
        <tr><td>תפקיד JIT</td><td>ממפה גישה לקבוצות AD קיימות ומגדיר את דרכי ההפעלה המותרות.</td></tr>
        <tr><td>הקצאה</td><td>מגדירה מי רשאי לקבל את התפקיד, כיצד הוא מופעל ומתי ההקצאה תקפה.</td></tr>
        <tr><td>הפעלה פעילה</td><td>מציגה גישה זמנית שנמצאת כרגע בתוקף.</td></tr>
      </tbody></table></div>
      <p>יצירת תפקיד בלבד אינה מעניקה גישה. נדרשת הקצאה פעילה לפני שהמשתמש משויך לקבוצות הממופות.</p>
      <h2>סוגי הקצאות</h2>
      <div class="table-wrap"><table><thead><tr><th>סוג</th><th>התנהגות</th></tr></thead><tbody>
        <tr><td>Manual</td><td>מנהל מעניק גישה מיידית למשך זמן מוגדר.</td></tr>
        <tr><td>Scheduled</td><td>הגישה מתחילה ומסתיימת בחלונות זמן שהוגדרו מראש.</td></tr>
        <tr><td>Eligible OTP</td><td>משתמש זכאי מאמת את עצמו ומפעיל גישה מוגבלת בזמן.</td></tr>
      </tbody></table></div>
      <div class="callout warning"><strong>חשוב:</strong> בגרסה זו אין תהליך אישור. Eligible OTP מאמת את ההפעלה אך אינו יוצר בקשת אישור.</div>
    `),

    'jit-access-model': page('מודל הרשאות ורישוי', 'JIT Access', `
      <p class="lead">JIT בודק בנפרד את זהות המשתמש, רישיון המוצר, תפקיד ה-RBAC, תפקיד ה-JIT וההקצאה.</p>
      <div class="table-wrap"><table><thead><tr><th>שכבה</th><th>מה היא קובעת</th></tr></thead><tbody>
        <tr><td>אימות</td><td>מי המשתמש המחובר.</td></tr><tr><td>רישיון מוצר</td><td>האם המשתמש רשאי להיכנס ל-JIT.</td></tr><tr><td>RBAC</td><td>אילו פעולות זמינות למשתמש בפורטל.</td></tr><tr><td>תפקיד JIT</td><td>אילו קבוצות ממופות ואילו דרכי הפעלה מותרות.</td></tr><tr><td>הקצאה</td><td>מי מקבל את התפקיד, כיצד ומתי.</td></tr>
      </tbody></table></div>
      <h2>תפקידי RBAC</h2>
      <div class="table-wrap"><table><thead><tr><th>תפקיד</th><th>פעולות</th></tr></thead><tbody>
        <tr><td><strong>JitAdmin</strong></td><td>ניהול תפקידים, הקצאות, הפעלות פעילות והגדרות.</td></tr>
        <tr><td><strong>JitEligibleUser</strong></td><td>הפעלת הקצאות Eligible OTP של המשתמש עצמו.</td></tr>
      </tbody></table></div>
      <p>תפקידי RBAC אינם משייכים משתמש לקבוצת Domain Admins או לכל קבוצת AD אחרת.</p>
      <h2>סדר ההגדרה</h2><ol><li>בדקו שרישיון JIT פעיל.</li><li>הקצו למשתמש רישיון מוצר.</li><li>הקצו את תפקיד ה-RBAC הנדרש.</li><li>צרו תפקיד JIT.</li><li>צרו הקצאה.</li><li>היכנסו עם המשתמש ובדקו את הפעולות הזמינות.</li></ol>
    `),

    'jit-portal-overview': page('סקירת פורטל JIT', 'JIT Access', `
      <p class="lead">הפורטל מרכז את מצב הרישוי, התפקידים, ההקצאות, ההפעלות הפעילות והגדרות המוצר.</p>
      <h2>לוח הבקרה</h2>${shot('./docs/jit/screenshots/dashboard-overview.png', 'לוח הבקרה של JIT', 'JIT Status מציג את מצב הרישיון והקיבולת. Start Work מוביל לאזורי העבודה.')}
      <h2>אזורי הפורטל</h2>
      <div class="table-wrap"><table><thead><tr><th>אזור</th><th>שימוש</th></tr></thead><tbody>
        <tr><td><strong>Overview</strong></td><td>סיכום תפקידים, הקצאות והפעלות פעילות.</td></tr><tr><td><strong>Roles</strong></td><td>מיפוי תפקידי JIT לקבוצות AD קיימות.</td></tr><tr><td><strong>Assignments</strong></td><td>חיבור משתמש לתפקיד באמצעות Manual, ‏Scheduled או Eligible OTP.</td></tr><tr><td><strong>Active Sessions</strong></td><td>צפייה בגישה פעילה, מועד סיום, הארכה וביטול.</td></tr><tr><td><strong>Settings</strong></td><td>רישיונות, RBAC, התראות, SMTP ומדיניות הפעלה.</td></tr>
      </tbody></table></div>
      ${shot('./docs/jit/screenshots/jit-access-overview.png', 'מסך Overview של JIT Access', 'Overview מציג את תמונת המצב התפעולית של JIT.')}
      ${shot('./docs/jit/screenshots/active-sessions.png', 'טבלת Active Sessions', 'Active Sessions מציג את הגישה הזמנית שנמצאת כעת בתוקף.')}
    `),

    'jit-settings-overview': page('הגדרות JIT Access', 'JIT Access', `
      <p class="lead">פתחו <strong>Settings</strong> כדי להגדיר רישיונות, RBAC, משתמשים זכאים, התראות, SMTP ומגבלות הפעלה.</p>
      ${shot('./docs/jit/screenshots/settings-overview.png', 'מסך ההגדרות של JIT', 'הגדירו את הרשאות המוצר ואת מדיניות ההפעלה לפני יצירת תפקידי ייצור.')}
      <h2>אזורי ההגדרות</h2>
      <div class="table-wrap"><table><thead><tr><th>אזור</th><th>שימוש</th></tr></thead><tbody>
        <tr><td><strong>Licensed Users</strong></td><td>הקצאת רישיון JIT למשתמשים.</td></tr><tr><td><strong>Role Assignments</strong></td><td>הקצאת תפקידי RBAC.</td></tr><tr><td><strong>Eligible requester groups</strong></td><td>הגבלת הפעלה עצמית לקבוצות שהוגדרו.</td></tr><tr><td><strong>Notification recipients</strong></td><td>נמענים להתראות על הפעלות.</td></tr><tr><td><strong>System / Session</strong></td><td>משך הפעלה בפורטל, SMTP והגדרות קבוצות.</td></tr>
      </tbody></table></div>
      <h2>סדר ההגדרה</h2><ol><li>הקצו רישיונות מוצר.</li><li>הקצו תפקידי RBAC.</li><li>בדקו קבוצות Eligible.</li><li>הגדירו נמענים ואירועי התראה.</li><li>הגדירו SMTP אם משתמשים בדואר.</li><li>בדקו את משך ההפעלה ואת זמן הניתוק.</li><li>בצעו בדיקה עם תפקיד שאינו מעניק הרשאות ניהול.</li></ol>
    `),

    'jit-roles': page('יצירת תפקיד JIT', 'JIT Access', `
      <p class="lead">צרו תפקיד שממפה גישה זמנית לקבוצה אחת או יותר שכבר קיימות ב-Active Directory.</p>
      <h2>לפני שמתחילים</h2><ul><li>קבוצות ה-AD כבר קיימות.</li><li>זהות השירות יכולה להוסיף ולהסיר חברים בקבוצות אלה.</li><li>החלטתם אילו סוגי הקצאה מותרים ומה משך הגישה המרבי.</li></ul>
      <h2>יצירת התפקיד</h2><ol><li>פתחו <strong>JIT Access &gt; Roles</strong>.</li><li>לחצו על <strong>Create Role</strong>.</li><li>הזינו שם ותיאור ברורים.</li><li>בחרו את דרכי ההפעלה המותרות.</li><li>הגדירו משך ברירת מחדל ומשך מרבי.</li><li>בחרו את קבוצות Active Directory הקיימות.</li><li>שמרו את התפקיד.</li></ol>
      ${shot('./docs/jit/screenshots/role-create-modal.png', 'חלון Create Role ב-JIT', 'התפקיד מגדיר סוגי גישה, מגבלות זמן וקבוצות AD ממופות.')}
      <h2>תוצאה צפויה</h2><p>התפקיד מופיע ברשימת <strong>Roles</strong> וזמין בעת יצירת הקצאה.</p>
      <h2>בדיקה</h2>${shot('./docs/jit/screenshots/roles-list.png', 'רשימת תפקידי JIT', 'בדקו שהתפקיד פעיל, שסוגי ההקצאה נכונים ושכל הקבוצות מופיעות.')}
      <div class="callout warning"><strong>חשוב:</strong> מיפוי Domain Admins מעניק הרשאה רגישה מאוד. התחילו בקבוצת בדיקה ובדקו הסרה אוטומטית לפני שימוש בייצור.</div>
    `),

    'jit-assignments': page('יצירת הקצאת JIT', 'JIT Access', `
      <p class="lead">הקצאה מחברת משתמש לתפקיד וקובעת כיצד ומתי הגישה יכולה להתחיל.</p>
      <h2>לפני שמתחילים</h2><ul><li>התפקיד קיים ופעיל.</li><li>המשתמש קיבל רישיון מוצר ותפקיד RBAC מתאים.</li><li>בחרתם Manual, ‏Scheduled או Eligible OTP.</li></ul>
      <h2>יצירת הקצאה</h2><ol><li>פתחו <strong>JIT Access &gt; Assignments</strong>.</li><li>לחצו על <strong>Create Assignment</strong>.</li><li>בחרו משתמש ותפקיד.</li><li>בחרו את סוג ההקצאה.</li><li>הגדירו משך, תוקף או לוח זמנים לפי הסוג.</li><li>שמרו.</li></ol>
      ${shot('./docs/jit/screenshots/assignment-create-manual.png', 'יצירת הקצאה ידנית', 'Manual מעניק גישה מיידית למשך הזמן שהוגדר.')}
      ${shot('./docs/jit/screenshots/assignment-create-scheduled.png', 'יצירת הקצאה מתוזמנת', 'Scheduled מפעיל גישה בחלונות הזמן שהוגדרו.')}
      ${shot('./docs/jit/screenshots/assignment-create-eligible.png', 'יצירת הקצאת Eligible OTP', 'Eligible OTP מאפשר למשתמש הזכאי להפעיל את התפקיד לאחר אימות.')}
      <h2>תוצאה צפויה</h2><p>ההקצאה מופיעה ברשימת <strong>Assignments</strong>. התנהגות הגישה תלויה בסוג שנבחר.</p>
      ${shot('./docs/jit/screenshots/assignments-list.png', 'רשימת הקצאות JIT', 'בדקו את המשתמש, התפקיד, הסוג, התוקף והמצב.')}
    `),

    'jit-assignment-types': page('סוגי הקצאות', 'JIT Access', `
      <p class="lead">בחרו את סוג ההקצאה לפי מועד תחילת הגישה ומי שמפעיל אותה.</p>
      <div class="table-wrap"><table><thead><tr><th>צורך</th><th>סוג</th></tr></thead><tbody>
        <tr><td>מנהל מעניק גישה מיידית</td><td>Manual</td></tr><tr><td>הגישה פועלת בימים ובשעות קבועים</td><td>Scheduled</td></tr><tr><td>המשתמש מפעיל גישה לאחר OTP</td><td>Eligible OTP</td></tr><tr><td>אישור מנהל או אבטחת מידע</td><td>אינו נתמך בגרסה זו</td></tr>
      </tbody></table></div>
      <h2>Manual</h2><p>הגישה מתחילה כאשר המנהל יוצר את ההקצאה, מסתיימת לאחר הזמן שהוגדר וניתנת לביטול מוקדם.</p>
      <h2>Scheduled</h2><p>הגישה מתחילה ומסתיימת בחלונות הזמן שהוגדרו, ללא הפעלה מצד המשתמש. לוחות חגים וחלונות שחוצים חצות אינם נתמכים בגרסה זו.</p>
      <h2>Eligible OTP</h2><p>המשתמש שהוקצה מאמת את עצמו באמצעות פרטי הקשר השמורים ב-Active Directory ומפעיל את ההפעלה. הוא אינו יכול להזין מספר טלפון או כתובת דואר אחרים.</p>
    `),

    'jit-eligible-otp': page('הפעלת Eligible OTP', 'JIT Access', `
      <p class="lead">Eligible OTP מאפשר למשתמש שהוגדר מראש לאמת את עצמו ולהפעיל גישה זמנית לתפקיד שהוקצה לו.</p>
      <div class="callout warning"><strong>חשוב:</strong> Eligible OTP אינו תהליך אישור. המנהל מאשר את הזכאות כאשר הוא יוצר את ההקצאה.</div>
      <h2>הכנה על ידי מנהל JIT</h2><ol><li>הקצו למשתמש רישיון JIT.</li><li>הקצו את התפקיד <strong>JitEligibleUser</strong>.</li><li>צרו תפקיד פעיל המאפשר Eligible.</li><li>מפו את התפקיד לקבוצת AD קיימת.</li><li>צרו הקצאת Eligible פעילה עבור <code>samAccountName</code> של המשתמש.</li></ol>
      ${shot('./docs/jit/screenshots/eligible-admin-assignment-list.png', 'הקצאת Eligible למשתמש', 'ההקצאה ממתינה עד שהמשתמש מאמת את עצמו ומפעיל אותה.')}
      <h2>הפעלה על ידי המשתמש</h2><ol><li>היכנסו עם חשבון המשתמש הזכאי.</li><li>פתחו <strong>Activate Access</strong>.</li><li>לחצו על <strong>Activate</strong> עבור התפקיד.</li><li>בחרו ערוץ משלוח ושלחו OTP.</li><li>הזינו את הקוד ואשרו.</li></ol>
      ${shot('./docs/jit/screenshots/eligible-joe-activation-only.png', 'מסך ההפעלה של משתמש Eligible', 'משתמש Eligible רואה רק את ההקצאות השייכות לו ואת אפשרות ההפעלה.')}
      <h2>תוצאה צפויה</h2><p>נוצרת הפעלה פעילה והמשתמש משויך לקבוצות שמופו לתפקיד. תפוגה או ביטול מסירים את השיוך.</p>
      <h2>בדיקת ההפעלה</h2>${shot('./docs/jit/screenshots/eligible-admin-active-session.png', 'הפעלה פעילה של משתמש Eligible', 'מנהל JIT בודק משתמש, תפקיד, סוג, התחלה, סיום ומצב.')}
    `),

    'jit-sessions-revoke': page('ניטור וביטול הפעלות פעילות', 'JIT Access', `
      <p class="lead">השתמשו ב-<strong>Active Sessions</strong> כדי לבדוק גישה זמנית פעילה, להאריך אותה או לבטל אותה לפני מועד הסיום.</p>
      ${shot('./docs/jit/screenshots/sessions-joe-active-actions.png', 'הפעלת JIT עם פעולות Extend ו-Revoke', 'בדקו את המשתמש, התפקיד, סוג ההקצאה, הזמנים והמצב.')}
      <h2>הארכת הפעלה</h2><ol><li>ודאו שהמשימה עדיין דורשת גישה.</li><li>לחצו על <strong>Extend</strong>.</li><li>הזינו את מספר הדקות הנוסף ואת הסיבה.</li><li>אשרו.</li></ol>
      ${shot('./docs/jit/screenshots/sessions-joe-extend-modal.png', 'חלון הארכת הפעלת JIT', 'האריכו רק כאשר העבודה המאושרת עדיין נמשכת.')}
      <h2>ביטול הפעלה</h2><ol><li>בחרו את ההפעלה הפעילה.</li><li>לחצו על <strong>Revoke</strong>.</li><li>הזינו סיבה.</li><li>אשרו את הביטול.</li></ol>
      <div class="callout warning"><strong>חשוב:</strong> ביטול הפעלה מסיר את השיוך הזמני לקבוצות Active Directory. לפי מדיניות המוצר, משתמש Eligible שבוטל עשוי להיות חסום מהפעלה חוזרת למשך הזמן שהוגדר.</div>
      <h2>בדיקה</h2><ul><li>ההפעלה אינה מופיעה עוד כפעילה.</li><li>המשתמש הוסר מהקבוצות הממופות.</li><li>אירוע הביטול נרשם ביומן הביקורת.</li></ul>
    `),

    'jit-notifications-session-policy': page('התראות ומדיניות הפעלה', 'JIT Access', `
      <p class="lead">הגדירו למי נשלחות התראות, אילו אירועים שולחים דואר ומהם גבולות ההפעלה בפורטל.</p>
      <h2>נמענים ואירועים</h2>${shot('./docs/jit/screenshots/settings-notifications-highlight.png', 'הגדרות נמענים להתראות JIT', 'הוסיפו רק נמענים שצריכים לקבל מידע על הפעלות.')}
      ${shot('./docs/jit/screenshots/settings-notification-events-highlight.png', 'אירועי התראה ב-JIT', 'בחרו אירועים כגון הפעלה ידנית, Eligible, הארכה וביטול.')}
      <h2>מדיניות הפעלה</h2>${shot('./docs/jit/screenshots/settings-session-policy-highlight.png', 'מדיניות הפעלה ב-JIT', 'בדקו משך הפעלה מרבי, זמן ניתוק מחוסר פעילות והגדרות SMTP.')}
      <h2>בדיקה</h2><ol><li>שמרו את ההגדרות.</li><li>בצעו הפעלת בדיקה.</li><li>בדקו שהנמענים הנכונים קיבלו את ההתראה.</li><li>בדקו את אירוע ההפעלה ביומן הביקורת.</li></ol>
    `),

    'jit-troubleshooting': page('פתרון תקלות JIT', 'JIT Access', `
      <p class="lead">בדקו רישיון, RBAC, תפקיד, הקצאה, תזמון ו-OTP לפי התסמין שמופיע למשתמש.</p>
      <h2>המשתמש אינו נכנס לפורטל</h2><ul><li>בדקו שרישיון Core ורישיון JIT פעילים.</li><li>בדקו שהוקצה למשתמש רישיון מוצר.</li><li>בדקו תפקיד RBAC מתאים. Domain Admins יכולים להיכנס ללא תפקיד JIT נוסף.</li></ul>
      <h2>אפשרות Eligible אינה מופיעה</h2><ul><li>בדקו שקיימת הקצאת Eligible פעילה עבור המשתמש.</li><li>בדקו שהתפקיד פעיל ומאפשר Eligible.</li><li>בדקו שמועד תחילת ההקצאה כבר הגיע ושהיא לא פגה.</li></ul>
      <h2>OTP אינו נשלח</h2><ul><li>בדקו את ערוץ המשלוח שהוגדר.</li><li>בדקו את המאפיין <code>mobile</code> או כתובת הדואר ב-Active Directory.</li><li>בדקו מגבלות שליחה, תוקף וניסיון חוזר בהגדרות JIT.</li><li>בדקו SMTP וחומת אש אם משתמשים בדואר.</li></ul>
      <h2>השיוך לקבוצה לא נוסף או לא הוסר</h2><ul><li>בדקו שהתפקיד ממופה לקבוצה הנכונה.</li><li>בדקו את הרשאת זהות השירות על הקבוצה.</li><li>בדקו את מצב ההפעלה ואת יומן הביקורת.</li><li>בדקו תקשורת עם בקר הדומיין.</li></ul>
      <h2>הפורטל אינו נטען</h2><p>בדקו ב-IIS שהיישומים <strong>jit</strong> ו-<strong>JIT-Backend</strong> וה-App Pools שלהם פעילים.</p>
    `)
  });
})();
