// components/LanguageSwitcher.js
import { MdTranslate } from "react-icons/md";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
    document.body.dir = newLang === "ar" ? "rtl" : "ltr";
  };

  return (
    <MdTranslate
      onClick={toggleLanguage}
      style={{ cursor: "pointer", fontSize: 24 }}
    />
  );
};

export default LanguageSwitcher;
