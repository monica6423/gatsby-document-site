const languages = ["en", "cn", "zh"];

const defaultLanguage = "zh";

const languageName = {
	en: "English",
	cn: "简体中文",
	zh: "繁體中文",
};

// let product = window.localStorage.getItem('product').value;
// let primaryColor;
// if(product === 'na'){
// 	primaryColor = '#35A7FF';
// }else if(product === 'pa') {
// 	primaryColor = '#FFA544';
// }else {
// 	primaryColor = '#4db5ad';
// }

module.exports.languages = languages;
// module.exports.primaryColor = primaryColor;
module.exports.defaultLanguage = defaultLanguage;
module.exports.languageName = languageName;
module.exports = {
	languageName,
	languages,
	defaultLanguage
};