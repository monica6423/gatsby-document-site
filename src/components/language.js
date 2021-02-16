import React from "react"
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"
import './language.css';

const languageName = {
  en: "English",
  cn: "简体中文",
  zh: "中文",
}
const Language = () => {
  return (
    <ul className="language-ul">
      <IntlContextConsumer >
        {({ languages, language: currentLocale }) =>
        
          languages.map(language => (
            <li
              key={language}
              onClick={() => changeLocale(language)}
              style={{
                color: currentLocale === language ? `white` : `black`,
                margin: 10,
                textDecoration: `none`,
                cursor: `pointer`,
                backgroundColor: currentLocale === language ? `#053225`:`white`
              }}
            >
              {languageName[language]}
            </li>
          ))
        }
      </IntlContextConsumer>
    </ul>
  )
}

export default Language