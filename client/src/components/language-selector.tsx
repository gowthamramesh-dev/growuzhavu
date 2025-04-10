import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", lang: "English" },
  { code: "tml", lang: "தமிழ்" },
];

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <>
      <div className="">
        <select
          value={i18n.language} // Set the current language as the selected value
          onChange={(e) => changeLanguage(e.target.value)} // Use onChange to handle language change
        >
          {languages.map((langs) => (
            <option
              key={langs.code}
              value={langs.code} // Set the value of the option
            >
              {langs.lang}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default LanguageSelector;
