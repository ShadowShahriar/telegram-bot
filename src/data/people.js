const people = [
	// === January ===
	{
		fullName: ['Munawar', 'মুনাওয়ার'],
		nickName: ['Mahatab', 'মাহাতাব'],
		birthday: '03-Jan-2003',
		fndsince: '15-Mar-2022',
		eventday: '03-Mar-2022',
		eventype: ['First day of college', 'কলেজের প্রথম দিন'],
		eventwas: true,
		role: ['', ''],
		prefix: false
	},
	{
		fullName: ['Raisa', 'রাইসা'],
		nickName: ['Sujana', 'সুজানা'],
		birthday: '04-Jan-2016',
		fndsince: '18-Oct-2018',
		eventday: '02-Jan-2020',
		eventype: ['First day of school', 'স্কুলের প্রথম দিন'],
		eventwas: true,
		role: ['Chotto', 'পিচ্চি'],
		prefix: true
	},
	{
		fullName: ['Talha Jubayer', 'তালহা জোবায়ের'],
		nickName: ['Talha', 'তালহা'],
		birthday: '27-Jan-2003',
		fndsince: false,
		eventday: false,
		eventype: ['', ''],
		eventwas: false,
		role: ['', ''],
		prefix: false
	},
	{
		fullName: ['Anisha Roy', 'অনিশা রয়'],
		nickName: ['Anisha', 'অনিশা'],
		birthday: '31-Jan-2003',
		fndsince: '09-Aug-2022',
		eventday: false,
		eventype: ['', ''],
		eventwas: false,
		role: ['', ''],
		prefix: false
	},

	// === February ===
	{
		fullName: ['Johir Iqbal', 'জহির ইকবাল'],
		nickName: ['Johir', 'জহির'],
		birthday: '02-Feb-2003',
		fndsince: false,
		eventday: false,
		eventype: ['', ''],
		eventwas: false,
		role: ['', ''],
		prefix: false
	},
	{
		fullName: ['Ritika', 'রিতিকা'],
		nickName: ['Ritika', 'রিতিকা'],
		birthday: '17-Feb-2001',
		fndsince: '17-Sep-2020',
		eventday: false,
		eventype: ['', ''],
		eventwas: false,
		role: ['Di', 'দি'],
		prefix: false
	},
	{
		fullName: ['Charu', 'চারু'],
		nickName: ['Charu', 'চারু'],
		birthday: '20-Feb-2001',
		fndsince: '05-May-2021',
		eventday: false,
		eventype: ['', ''],
		eventwas: false,
		role: ['Di', 'দি'],
		prefix: false
	},
	{
		fullName: ['Gambhir', 'গম্ভীর'],
		nickName: ['Gambhir', 'গম্ভীর'],
		birthday: '20-Feb-2003',
		fndsince: '10-Oct-2021',
		eventday: false,
		eventype: ['', ''],
		eventwas: false,
		role: ['Vai', 'ভাই'],
		prefix: false
	},
	{
		fullName: ['Sahin Alam', 'তুহিন'],
		nickName: ['Tuhin', 'তুহিন'],
		birthday: '21-Feb-2003',
		fndsince: '06-Mar-2022',
		eventday: false,
		eventype: ['', ''],
		eventwas: false,
		role: ['Vai', 'ভাই'],
		prefix: false
	},

	// === March ===
	{
		fullName: ['Portious', 'Portious'],
		nickName: ['Portious', 'Portious'],
		birthday: '09-Mar-2000',
		fndsince: '25-Jan-2022',
		eventday: false,
		eventype: ['', ''],
		eventwas: false,
		role: ['', ''],
		prefix: false
	},
	{
		fullName: ['Redwan', 'রেদোয়ান'],
		nickName: ['Redwan', 'রেদোয়ান'],
		birthday: '14-Mar-2005',
		fndsince: false,
		eventday: false,
		eventype: ['', ''],
		eventwas: false,
		role: ['', ''],
		prefix: false
	},
	{
		fullName: ['Mahbub Pathan', 'মাহবুব পাঠান'],
		nickName: ['Pathan', 'পাঠান'],
		birthday: '17-Mar-2003',
		fndsince: '04-Jan-2017',
		eventday: false,
		eventype: ['', ''],
		eventwas: false,
		role: ['Shaheb', 'সাহেব'],
		prefix: false
	},
	{
		fullName: ['Fariya', 'ফারিয়া'],
		nickName: ['Fariya', 'ফারিয়া'],
		birthday: '18-Mar-2017',
		fndsince: false,
		eventday: false,
		eventype: ['', ''],
		eventwas: false,
		role: ['Chotto', 'পিচ্চি'],
		prefix: true
	},
	{
		fullName: ['Tanvir Ahmed', 'তানভির আহমেদ'],
		nickName: ['Anontow', 'অনন্ত'],
		birthday: '18-Mar-2003',
		fndsince: false,
		eventday: '21-Mar-2003',
		eventype: ['UBian Get Together', 'উবিয়ান Get Together'],
		eventwas: true,
		role: ['Vai', 'ভাই'],
		prefix: false
	},
	{
		fullName: ['Tanshif', 'তানসিফ'],
		nickName: ['Tanshif', 'তানসিফ'],
		birthday: '24-Mar-2003',
		fndsince: false,
		eventday: false,
		eventype: ['', ''],
		eventwas: false,
		role: ['', ''],
		prefix: false
	},
	{
		fullName: ['Talukdar shaheb', 'তালুকদার সাহেব'],
		nickName: ['Ismail', 'ইসমাইল'],
		birthday: '26-Mar-2003',
		fndsince: false,
		eventday: '31-Mar-2023',
		eventype: ['Iftar Party', 'ইফতার পার্টি'],
		eventwas: true,
		role: ['', ''],
		prefix: false
	},
	{
		fullName: ['Aninda', 'অনিন্দ্য'],
		nickName: ['Aninda', 'অনিন্দ্য'],
		birthday: '26-Mar-2003',
		fndsince: '10-Mar-2022',
		eventday: false,
		eventype: ['', ''],
		eventwas: false,
		role: ['Da', 'দা'],
		prefix: false
	},

	// === April ===
	{
		fullName: ['Afsara', 'আফসারা'],
		nickName: ['Afsara', 'আফসারা'],
		birthday: '13-Apr-2003',
		fndsince: false,
		eventday: false,
		eventype: ['', ''],
		eventwas: false,
		role: ['', ''],
		prefix: false
	},
	{
		fullName: ['Rupa', 'রূপা'],
		nickName: ['Fatima', 'রূপা'],
		birthday: '20-Apr-1987',
		fndsince: false,
		eventday: false,
		eventype: ['', ''],
		eventwas: false,
		role: ['Khalamoni', 'খালামনি'],
		prefix: false
	},
	{
		fullName: ['Tutul', 'তুতুল'],
		nickName: ['Tutul', 'তুতুল'],
		birthday: '27-Apr-1993',
		fndsince: '17-Sep-2020',
		eventday: false,
		eventype: ['', ''],
		eventwas: false,
		role: ['Vaiya', 'ভাইয়া'],
		prefix: false
	},

	// === May ===
	{
		fullName: ['Azmain', 'তারাক্কি'],
		nickName: ['Taraqqi', 'তারাক্কি'],
		birthday: '08-May-2003',
		fndsince: '04-Jul-2022',
		eventday: false,
		eventype: ['', ''],
		eventwas: false,
		role: ['Shaheb', 'সাহেব'],
		prefix: false
	},
	{
		fullName: ['Sharnali', 'স্বর্ণালি'],
		nickName: ['Sharnali', 'স্বর্ণালি'],
		birthday: '11-May-2003',
		fndsince: false,
		eventday: false,
		eventype: ['', ''],
		eventwas: false,
		role: ['', ''],
		prefix: false
	},
	{
		fullName: ['Ammu', 'আম্মু'],
		nickName: ['Maa', 'মা'],
		birthday: '28-May-1971',
		fndsince: '25-Feb-2003',
		eventday: false,
		eventype: ['', ''],
		eventwas: false,
		role: ['', ''],
		prefix: false
	},

	// === June ===
	{
		fullName: ['Baba', 'আব্বু'],
		nickName: ['Dad', 'বাবা'],
		birthday: '03-Jun-1969',
		fndsince: false,
		eventday: false,
		eventype: ['', ''],
		eventwas: false,
		role: ['', ''],
		prefix: false
	},
	{
		fullName: ['Sarah', 'সারাহ'],
		nickName: ['Sarah', 'সারাহ'],
		birthday: '03-Jun-2001',
		fndsince: false,
		eventday: false,
		eventype: ['', ''],
		eventwas: false,
		role: ['Apu', 'আপু'],
		prefix: false
	},
	{
		fullName: ['Boro', 'বড়'],
		nickName: ['Jewel', 'জুয়েল'],
		birthday: '07-Jun-1975',
		fndsince: false,
		eventday: false,
		eventype: ['', ''],
		eventwas: false,
		role: ['Mama', 'মামা'],
		prefix: false
	},
	{
		fullName: ['Amit', 'অমিত'],
		nickName: ['Amit', 'অমিত'],
		birthday: '11-Jun-2003',
		fndsince: false,
		eventday: false,
		eventype: ['', ''],
		eventwas: false,
		role: ['Da', 'দা'],
		prefix: false
	},
	{
		fullName: ['Itay', 'Itay'],
		nickName: ['Itay', 'Itay'],
		birthday: '20-Jun-1988',
		fndsince: false,
		eventday: false,
		eventype: ['', ''],
		eventwas: false,
		role: ['Sir', 'স্যার'],
		prefix: false
	},
	{
		fullName: ['Dhruba', 'ধ্রুব'],
		nickName: ['Dhruba', 'ধ্রুব'],
		birthday: '24-Jun-2003',
		fndsince: false,
		eventday: false,
		eventype: ['', ''],
		eventwas: false,
		role: ['', ''],
		prefix: false
	},
	{
		fullName: ['Anita', 'আনিতা'],
		nickName: ['Anita', 'আনিতা'],
		birthday: '28-Jun-2003',
		fndsince: false,
		eventday: false,
		eventype: ['', ''],
		eventwas: false,
		role: ['Anik-er friend', 'অনিকের ফ্রেন্ড'],
		prefix: true
	},

	// === July ===
	{
		fullName: ['Faisal', 'ফয়সাল'],
		nickName: ['Faisal', 'ফয়সাল'],
		birthday: '06-Jul-2003',
		fndsince: false,
		eventday: false,
		eventype: ['', ''],
		eventwas: false,
		role: ['', ''],
		prefix: false
	},
	{
		fullName: ['Zara', 'জারা'],
		nickName: ['Zara', 'জারা'],
		birthday: '20-Jul-2004',
		fndsince: false,
		eventday: false,
		eventype: ['', ''],
		eventwas: false,
		role: ['', ''],
		prefix: false
	},
	{
		fullName: ['Zayaan', 'জায়ান'],
		nickName: ['Zayaan', 'জায়ান'],
		birthday: '20-Jul-2004',
		fndsince: false,
		eventday: false,
		eventype: ['', ''],
		eventwas: false,
		role: ['', ''],
		prefix: false
	},
	{
		fullName: ['Prithila', 'প্রিথিলা'],
		nickName: ['Prithila', 'প্রিথিলা'],
		birthday: '23-Jul-2004',
		fndsince: false,
		eventday: false,
		eventype: ['', ''],
		eventwas: false,
		role: ['', ''],
		prefix: false
	},

	// === August ===
	{
		fullName: ['Redisha', 'রিদিশা'],
		nickName: ['Pritha', 'পৃথা'],
		birthday: '06-Aug-2003',
		fndsince: '11-Mar-2022',
		eventday: false,
		eventype: ['', ''],
		eventwas: false,
		role: ['Friend', 'বান্ধবী'],
		prefix: true
	},
	{
		fullName: ['Luba', 'লুবু'],
		nickName: ['Lubu', 'লুবু'],
		birthday: '08-Aug-2017',
		fndsince: false,
		eventday: false,
		eventype: ['', ''],
		eventwas: false,
		role: ['Picchi', 'পিচ্চি'],
		prefix: true
	},
	{
		fullName: ['Sabbir', 'সাব্বির'],
		nickName: ['Sabbir', 'সাব্বির'],
		birthday: '15-Aug-2003',
		fndsince: '04-Feb-2023',
		eventday: false,
		eventype: ['', ''],
		eventwas: false,
		role: ['Vai', 'ভাই'],
		prefix: false
	},
	{
		fullName: ['Samir Sucklain', 'সামির সাকলাইন'],
		nickName: ['Sucklain', 'সাকলাইন'],
		birthday: '19-Aug-2003',
		fndsince: false,
		eventday: false,
		eventype: ['', ''],
		eventwas: false,
		role: ['', ''],
		prefix: false
	},
	{
		fullName: ['Nusrat', 'নুসরাত'],
		nickName: ['Nusrat', 'নুসরাত'],
		birthday: '24-Aug-2002',
		fndsince: '31-Aug-2022',
		eventday: false,
		eventype: ['', ''],
		eventwas: false,
		role: ['Apu', 'আপু'],
		prefix: false
	},

	// === September ===
	{
		fullName: ['Ripa', 'রিপা'],
		nickName: ['Reepa', 'রিপা'],
		birthday: '02-Sep-1985',
		fndsince: false,
		eventday: false,
		eventype: ['', ''],
		eventwas: false,
		role: ['Khalamoni', 'খালামনি'],
		prefix: false
	},
	{
		fullName: ['Synthia', 'সিনথিয়া'],
		nickName: ['Synthia', 'সিনথিয়া'],
		birthday: '08-Sep-2004',
		fndsince: false,
		eventday: false,
		eventype: ['', ''],
		eventwas: false,
		role: ['', ''],
		prefix: false
	},
	{
		fullName: ['Shaikat', 'সৈকত'],
		nickName: ['Shaikat', 'সৈকত'],
		birthday: '08-Sep-2003',
		fndsince: false,
		eventday: false,
		eventype: ['', ''],
		eventwas: false,
		role: ['Da', 'দা'],
		prefix: false
	},
	{
		fullName: ['Khanh', 'Khanh'],
		nickName: ['Khanh', 'Khanh'],
		birthday: '09-Sep-2004',
		fndsince: false,
		eventday: false,
		eventype: ['', ''],
		eventwas: false,
		role: ['Twitter friend', 'টুইটারের ফ্রেন্ড'],
		prefix: true
	},
	{
		fullName: ['Tariqul', 'তারিকুল'],
		nickName: ['Yasfi', 'তারিকুল'],
		birthday: '12-Sep-2003',
		fndsince: false,
		eventday: false,
		eventype: ['', ''],
		eventwas: false,
		role: ['Vai', 'ভাই'],
		prefix: false
	},
	{
		fullName: ['Arpan', 'অর্পণ'],
		nickName: ['Arpan', 'অর্পণ'],
		birthday: '14-Sep-2003',
		fndsince: false,
		eventday: false,
		eventype: ['', ''],
		eventwas: false,
		role: ['dada', 'দাদা'],
		prefix: false
	},
	{
		fullName: ['Maisha', 'মাইশা'],
		nickName: ['Maisha', 'মাইশা'],
		birthday: '15-Sep-2004',
		fndsince: false,
		eventday: false,
		eventype: ['', ''],
		eventwas: false,
		role: ['', ''],
		prefix: false
	},
	{
		fullName: ['Hasan', 'হাসান'],
		nickName: ['Hasan', 'হাসান'],
		birthday: '17-Sep-1997',
		fndsince: false,
		eventday: false,
		eventype: ['', ''],
		eventwas: false,
		role: ['Vaiya', 'ভাইয়া'],
		prefix: false
	},
	{
		fullName: ['Jobayer', 'জোবায়ের'],
		nickName: ['Jobayer', 'জোবায়ের'],
		birthday: '20-Sep-2012',
		fndsince: false,
		eventday: false,
		eventype: ['', ''],
		eventwas: false,
		role: ['', ''],
		prefix: false
	},

	// === October ===
	{
		fullName: ['Krish', 'কৃষ'],
		nickName: ['Krish', 'কৃষ'],
		birthday: '09-Oct-2000',
		fndsince: false,
		eventday: false,
		eventype: ['', ''],
		eventwas: false,
		role: ['Vaiya', 'ভাইয়া'],
		prefix: false
	},
	{
		fullName: ['Faiaz', 'ফাইয়ায'],
		nickName: ['Faiaz', 'ফাইয়ায'],
		birthday: '20-Oct-2021',
		fndsince: false,
		eventday: false,
		eventype: ['', ''],
		eventwas: false,
		role: ['Picchi', 'পিচ্চি'],
		prefix: false
	},
	{
		fullName: ['Aditi', 'অদিতি'],
		nickName: ['Aditi', 'অদিতি'],
		birthday: '26-Oct-2001',
		fndsince: false,
		eventday: false,
		eventype: ['', ''],
		eventwas: false,
		role: ['Apu', 'আপু'],
		prefix: false
	},
	{
		fullName: ['Sunrit', 'Sunrit'],
		nickName: ['Sunrit', 'Sunrit'],
		birthday: '27-Oct-2005',
		fndsince: false,
		eventday: false,
		eventype: ['', ''],
		eventwas: false,
		role: ['', ''],
		prefix: false
	},
	{
		fullName: ['Anik', 'অনিক'],
		nickName: ['Anik', 'অনিক'],
		birthday: '30-Oct-2003',
		fndsince: false,
		eventday: false,
		eventype: ['', ''],
		eventwas: false,
		role: ['', ''],
		prefix: false
	},
	{
		fullName: ['Khairul', 'খাইরুল'],
		nickName: ['Khairul', 'খাইরুল'],
		birthday: '30-Oct-2003',
		fndsince: false,
		eventday: false,
		eventype: ['', ''],
		eventwas: false,
		role: ['', ''],
		prefix: false
	},

	// === November ===
	{
		fullName: ['Roja', 'রোজা'],
		nickName: ['Roja', 'রোজা'],
		birthday: '06-Nov-2004',
		fndsince: false,
		eventday: false,
		eventype: ['', ''],
		eventwas: false,
		role: ['', ''],
		prefix: false
	},
	{
		fullName: ['Reza', 'রেজা'],
		nickName: ['Reza', 'রেজা'],
		birthday: '14-Nov-1984',
		fndsince: false,
		eventday: false,
		eventype: ['', ''],
		eventwas: false,
		role: ['Mama', 'মামা'],
		prefix: false
	},
	{
		fullName: ['Molla', 'সিয়াম'],
		nickName: ['Siyam', 'সিয়াম'],
		birthday: '19-Nov-2003',
		fndsince: false,
		eventday: false,
		eventype: ['', ''],
		eventwas: false,
		role: ['School-er', 'স্কুলের'],
		prefix: true
	},
	{
		fullName: ['Sadia Afrin', 'সাদিয়া আফরিন'],
		nickName: ['Sadia', 'সাদিয়া'],
		birthday: '22-Nov-2006',
		fndsince: false,
		eventday: false,
		eventype: ['', ''],
		eventwas: false,
		role: ['Junior', 'জুনিয়র'],
		prefix: true
	},

	// === December ===
	{
		fullName: ['Choto', 'ছোট'],
		nickName: ['Sujan', 'সুজন'],
		birthday: '05-Dec-1988',
		fndsince: false,
		eventday: false,
		eventype: ['', ''],
		eventwas: false,
		role: ['Mama', 'মামা'],
		prefix: false
	},
	{
		fullName: ['Srushti', 'সৃষ্টি'],
		nickName: ['Srushti', 'সৃষ্টি'],
		birthday: '05-Dec-2004',
		fndsince: false,
		eventday: false,
		eventype: ['', ''],
		eventwas: false,
		role: ['Twitter friend', 'টুইটারের ফ্রেন্ড'],
		prefix: false
	},
	{
		fullName: ['Raisa', 'রাইসা'],
		nickName: ['Raisa', 'রাইসা'],
		birthday: '09-Dec-2002',
		fndsince: false,
		eventday: false,
		eventype: ['', ''],
		eventwas: false,
		role: ['Apu', 'আপু'],
		prefix: false
	},
	{
		fullName: ['Prit', 'প্রীত'],
		nickName: ['Prit', 'প্রীত'],
		birthday: '09-Dec-2000',
		fndsince: false,
		eventday: false,
		eventype: ['', ''],
		eventwas: false,
		role: ['Vaiya', 'ভাইয়া'],
		prefix: false
	},
	{
		fullName: ['Chowa', 'ছোঁওয়া'],
		nickName: ['Chowa', 'ছোঁওয়া'],
		birthday: '12-Dec-2007',
		fndsince: false,
		eventday: false,
		eventype: ['', ''],
		eventwas: false,
		role: ['Junior', 'জুনিয়র'],
		prefix: true
	},
	{
		fullName: ['Annie', 'অ্যানি'],
		nickName: ['Annie', 'অ্যানি'],
		birthday: '14-Dec-1995',
		fndsince: false,
		eventday: false,
		eventype: ['', ''],
		eventwas: false,
		role: ['Twitter theke', 'টুইটার থেকে'],
		prefix: true
	}
]

export default people
