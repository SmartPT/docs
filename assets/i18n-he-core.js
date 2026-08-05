(() => {
  const state = window.smartptHebrew;
  const page = state.page;
  const shot = state.shot;

  Object.assign(state.pageMeta, {
    'core-getting-started': 'הצעדים הראשונים ב-SmartPT Console: רישוי, מצב המוצרים, הרשאות וכניסה לפורטלים.',
    'core-portal-overview': 'היכרות עם SmartPT Console, כרטיסי המוצרים, עדכונים, פעילות אחרונה והגדרות.',
    'core-license-status': 'בדיקת מצב הרישיון, האימות וזמינות AD Control ו-JIT Access.',
    'core-access-model': 'הגדרת מנהלים וצופים ב-SmartPT Console באמצעות קבוצות Active Directory.',
    'core-settings-overview': 'הגדרות הרשאה, זמני חיבור, איפוס 2FA ומידע על הרישיון.',
    'core-shared-2fa-reset': 'איפוס רישום 2FA למשתמש והשלמת רישום מחדש בכניסה הבאה.'
  });

  Object.assign(state.pages, {
    'core-getting-started': page('הצעדים הראשונים ב-SmartPT Console', 'SmartPT Core', `
      <p class="lead">ב-SmartPT Console אפשר לבדוק את הרישיון, לפתוח את AD Control ואת JIT Access ולנהל את הרשאות הכניסה לקונסולה.</p>
      ${shot('./docs/core/screenshots/console-overview.png', 'מסך הבית של SmartPT Console', 'המסוף מציג את מצב הרישיון, המשתמש המחובר והמוצרים המותקנים.')}
      <h2>לפני שמתחילים</h2><ul><li>SmartPT Core מותקן בשרת.</li><li>הרישיון הופעל.</li><li>יש לכם הרשאת מנהל למסוף.</li></ul>
      <h2>הגדרה ראשונית</h2><ol><li>היכנסו ל-<strong>SmartPT Console</strong>.</li><li>ודאו שמצב הרישיון <strong>ACTIVE</strong>.</li><li>ודאו שכרטיסי AD Control ו-JIT Access תקינים.</li><li>פתחו <strong>Settings</strong> והוסיפו קבוצת AD ייעודית למנהלי הקונסולה.</li><li>הוסיפו קבוצות צפייה רק למשתמשים הזקוקים לגישה לקריאה בלבד.</li><li>בדקו את משך החיבור ואת זמן הניתוק מחוסר פעילות.</li></ol>
      <h2>מה המשתמשים יוכלו לעשות</h2><p>מנהלים יוכלו לשנות הגדרות ולעדכן מוצרים. משתמשים בעלי הרשאת צפייה יוכלו לראות מידע ולפתוח פורטל מוצר רק אם הוגדרה להם הרשאה נפרדת באותו מוצר.</p>
      <h2>איך בודקים את ההרשאות</h2><p>היכנסו פעם אחת עם חשבון מנהל ופעם נוספת עם חשבון בעל הרשאת צפייה, והשוו בין הפעולות הזמינות.</p>
    `),

    'core-portal-overview': page('היכרות עם SmartPT Console', 'SmartPT Core', `
      <p class="lead">במסך הראשי של הקונסולה אפשר לראות את מצב SmartPT Core, את המוצרים המותקנים, את הפעילות האחרונה ואת ההגדרות המשותפות.</p>
      ${shot('./docs/core/screenshots/console-overview.png', 'סקירת SmartPT Console', 'במסך הבית מופיעים המשתמש המחובר, רמת ההרשאה וכרטיסי המוצרים.')}
      <h2>מה מופיע בקונסולה</h2>
      <div class="table-wrap"><table><thead><tr><th>אזור</th><th>למי זמין</th><th>שימוש</th></tr></thead><tbody>
        <tr><td><strong>Overview</strong></td><td>מנהלים וצופים</td><td>מצב המשתמש, הרישיון והמוצרים.</td></tr>
        <tr><td>כרטיסי מוצרים</td><td>מנהלים וצופים</td><td>פתיחת AD Control או JIT Access ובדיקת זמינות.</td></tr>
        <tr><td><strong>Recent Activity</strong></td><td>מנהלים וצופים</td><td>פעולות וכניסות אחרונות.</td></tr>
        <tr><td><strong>Settings</strong></td><td>מנהלים</td><td>הרשאות, זמני חיבור, איפוס 2FA ורישוי.</td></tr>
      </tbody></table></div>
      <h2>עדכון AD Control או JIT Access</h2>
      ${shot('./docs/core/screenshots/product-update-available.png', 'כרטיס מוצר עם עדכון זמין', 'הכפתור Update app זמין רק למנהלי SmartPT Core.')}
      <ol><li>מצאו כרטיס שמציג <strong>Update available</strong>.</li><li>לחצו על <strong>Update app</strong>.</li><li>המתינו לסיום.</li><li>ודאו שהכרטיס חוזר למצב תקין.</li><li>פתחו את פורטל המוצר ובדקו את הפעולות המרכזיות.</li></ol>
      <p>עדכון מוצר אינו משנה הגדרות לקוח, רישיונות, יומנים או נתוני לקוח.</p>
      <h2>פעילות אחרונה</h2>${shot('./docs/core/screenshots/recent-activity-highlight.png', 'אזור Recent Activity בקונסולה', 'באזור Recent Activity אפשר לראות את הפעולות האחרונות שבוצעו.')}
    `),

    'core-license-status': page('מצב רישיון ומוצרים', 'SmartPT Core', `
      <p class="lead">ודאו שרישיון SmartPT Core פעיל ושאפשר לפתוח את כל פורטלי המוצרים שהותקנו.</p>
      ${shot('./docs/core/screenshots/license-status-highlight.png', 'מצב רישיון ואימות ב-SmartPT Core', 'רישיון Core פעיל נדרש לכניסה למוצרים.')}
      <h2>שדות הרישיון</h2>
      <div class="table-wrap"><table><thead><tr><th>שדה</th><th>משמעות</th></tr></thead><tbody>
        <tr><td><strong>Status</strong></td><td>מצב הרישיון הנוכחי.</td></tr><tr><td><strong>Serial</strong></td><td>מזהה הרישיון של השרת. אין לחשוף אותו בצילום מסך ציבורי.</td></tr><tr><td><strong>License validation</strong></td><td>תוצאת האימות האחרונה.</td></tr><tr><td><strong>Last validated</strong></td><td>מועד האימות המוצלח האחרון.</td></tr>
      </tbody></table></div>
      <h2>בדיקת זמינות המוצרים</h2>${shot('./docs/core/screenshots/product-status-highlight.png', 'מצב מוצרי SmartPT', 'כל כרטיס מוצר צריך להציג מצב תקין וקישור לפורטל.')}
      <ol><li>ודאו שהרישיון מציג <strong>ACTIVE</strong>.</li><li>בדקו שהאימות האחרון עדכני.</li><li>בדקו את מצב AD Control ו-JIT Access.</li><li>פתחו כל פורטל.</li></ol>
      <h2>אם האימות נכשל</h2><p>בדקו את מצב ההפעלה, התקשורת לשירות הרישוי שהוגדר ואת יומני SmartPT Core.</p>
    `),

    'core-access-model': page('הרשאות כניסה ל-SmartPT Console', 'SmartPT Core', `
      <p class="lead">הכניסה ל-SmartPT Console נקבעת לפי חברות בקבוצות Active Directory שהוגדרו למנהלים או לצפייה בלבד.</p>
      <div class="table-wrap"><table><thead><tr><th>רמה</th><th>הקצאה</th><th>פעולות</th></tr></thead><tbody>
        <tr><td>מנהל</td><td>Domain Admins או קבוצה מנהלית שהוגדרה</td><td>הגדרות, רישוי, איפוס 2FA ועדכוני מוצר.</td></tr>
        <tr><td>צופה</td><td>קבוצת צפייה שהוגדרה</td><td>צפייה במסוף ופתיחת מוצרים בהתאם להרשאה נפרדת.</td></tr>
        <tr><td>ללא הרשאה</td><td>המשתמש אינו חבר בקבוצה מותרת</td><td>הכניסה נדחית.</td></tr>
      </tbody></table></div>
      <p>Domain Admins שומרים על הרשאת מנהל למסוף. לשימוש שוטף מומלץ להגדיר קבוצת AD ייעודית.</p>
      <h2>הוספת קבוצת מנהלים</h2><ol><li>פתחו <strong>Settings</strong>.</li><li>אתרו את <strong>Administrative groups</strong>.</li><li>חפשו ובחרו את קבוצת ה-AD.</li><li>שמרו את ההגדרה.</li></ol>
      ${shot('./docs/core/screenshots/rbac-it-admin-highlight.png', 'הוספת קבוצת מנהלים למסוף', 'הקבוצה נבדקת מול Active Directory לפני השמירה.')}
      <h2>אחרי שמירת ההגדרה</h2><p>חברי הקבוצה יראו את פעולות המנהל בקונסולה. ההרשאות ל-AD Control ול-JIT נשארות נפרדות ויש להגדיר אותן בכל מוצר.</p>
    `),

    'core-settings-overview': page('הגדרות SmartPT Console', 'SmartPT Core', `
      <p class="lead">ב-<strong>Settings</strong> מנהלים הרשאות כניסה לקונסולה, זמני חיבור, איפוס 2FA ומידע על הרישיון.</p>
      ${shot('./docs/core/screenshots/settings-overview.png', 'מסך ההגדרות של SmartPT Console', 'Settings זמין למנהלי המסוף בלבד.')}
      <h2>הגדרות מרכזיות</h2>
      <div class="table-wrap"><table><thead><tr><th>אזור</th><th>שימוש</th></tr></thead><tbody>
        <tr><td><strong>Administrative groups</strong></td><td>קבוצות שמקבלות הרשאת מנהל למסוף.</td></tr>
        <tr><td><strong>Viewer groups</strong></td><td>קבוצות שמקבלות הרשאת צפייה.</td></tr>
        <tr><td><strong>Maximum session lifetime</strong></td><td>משך החיבור המרבי.</td></tr>
        <tr><td><strong>Idle timeout</strong></td><td>ניתוק לאחר חוסר פעילות.</td></tr>
        <tr><td><strong>Shared Two-Factor Access</strong></td><td>מצב רישום ואיפוס 2FA.</td></tr>
        <tr><td><strong>License and Billing</strong></td><td>מצב הרישיון והאימות.</td></tr>
      </tbody></table></div>
      ${shot('./docs/core/screenshots/settings-rbac-session-highlight.png', 'הגדרות RBAC וזמני חיבור', 'בדקו את קבוצות הגישה ואת מגבלות הזמן לפני מעבר לייצור.')}
      <div class="callout warning"><strong>חשוב:</strong> ביטול השירות עלול לחסום את AD Control ואת JIT Access לאחר שהרישיון הופך ללא פעיל.</div>
    `),

    'core-shared-2fa-reset': page('איפוס רישום 2FA', 'SmartPT Core', `
      <p class="lead">אפסו את רישום ה-2FA כשמשתמש מחליף מכשיר, מאבד את אמצעי האימות או נדרש לבצע רישום מחדש.</p>
      <h2>לפני שמתחילים</h2><ul><li>נדרשת הרשאת מנהל למסוף.</li><li>ודאו את זהות המשתמש ואת האישור לאיפוס.</li><li>הודיעו למשתמש שיידרש רישום מחדש בכניסה הבאה.</li></ul>
      <h2>איפוס הרישום</h2><ol><li>פתחו <strong>SmartPT Console</strong>.</li><li>פתחו <strong>Settings</strong>.</li><li>באזור <strong>Shared Two-Factor Access</strong>, חפשו את המשתמש.</li><li>בחרו את המשתמש ובדקו את מצב הרישום.</li><li>לחצו על <strong>Reset two-factor</strong>.</li></ol>
      ${shot('./docs/core/screenshots/shared-2fa-avi-reset-highlight.png', 'איפוס 2FA למשתמש', 'האיפוס מוחק את הרישום הקיים ומחייב רישום חדש בכניסה הבאה.')}
      <h2>מה קורה אחרי האיפוס</h2><p>בכניסה הבאה המשתמש יתבקש להשלים רישום 2FA מחדש. האיפוס אינו מקצה רישיון מוצר או תפקיד.</p>
    `)
  });
})();
