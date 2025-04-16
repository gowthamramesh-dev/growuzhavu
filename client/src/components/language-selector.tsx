import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", lang: "English" },
  { code: "tml", lang: "தமிழ்" },
];

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const changeLanguage = (lng: string | undefined) => {
    i18n.changeLanguage(lng);
  };
  return (
    <>
      <div className="">
        <select
          className="outline-0 border flex items-center justify-center rounded-xs border-green-500 py-0.5 px-2 *:bg-slate-950 *:rounded-none"
          value={i18n.language} // Set the current language as the selected value
          onChange={(e) => changeLanguage(e.target.value)} // Use onChange to handle language change
        >
          {languages.map((langs) => (
            <option
              className=""
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
