// src/pages/account.js
import React, { useState, useEffect } from "react"
import { graphql } from 'gatsby';
import { useIntl, Link } from "gatsby-plugin-intl"
//import { useDebounce } from 'use-debounce';
import MediaQuery from 'react-responsive'
import { default as AntdLayout } from 'antd/lib/layout'
import Row from 'antd/lib/row'
import Col from 'antd/lib/col'
import Header from '../components/Header/HeaderDoc'
import Helmet from 'react-helmet'
import Container from '../components/Container/ContainerTailor'
import useTitle from '../components/Title';
import searchStyle from './search.module.css';




const Search = ({data}) => {


    const intl = useIntl();
    const title = useTitle();

    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);
    const [showResults, setShowResults] = useState(false);
    //const [debouncedSearchTerm] = useDebounce(searchTerm, 1000);


    const handleInputChange = e => {
        setSearchTerm(e.target.value);
    }

    const { allMarkdownRemark } = data;
    const { nodes} = allMarkdownRemark;

    const searchCharacters = async (searchTerm) => {
        const lowercasedFilter = searchTerm.toLowerCase();
        const filterNode = await nodes.filter(node => node.rawMarkdownBody.toString().toLowerCase().includes(lowercasedFilter));
        return filterNode;
      }

    useEffect(
        () => {
          if (searchTerm) {
            setShowResults(false);
            //searchCharacters(searchTerm);
              searchCharacters(searchTerm).then(results => {
                setShowResults(true);
                setResults(results);
              });
          } else {
            setResults([]);
          }
        },
        [searchTerm] // Only call effect if debounced search term changes
      );
    
    const resultByLanguage = results.filter(result => result.frontmatter.lang === intl.locale);

  return (
    <>
    <MediaQuery maxWidth={1000}>
    {matches => (
      <>
        <Helmet
          title={intl.formatMessage({ id: "title" })}
          meta={[
            { name: 'description for index', content: 'Sample for index' },
            { name: 'keywords for index', content: 'index' },
          ]}
        >
          <html lang={intl.locale} />
        </Helmet>
        <AntdLayout>
          <AntdLayout.Header
            style={{
              position: 'fixed',
              top: 0,
              width: '100%',
              zIndex: 100
            }}
            
          >
            <Row>
              <Col>
                <Header
                  siteTitle={title}
                  sidebarDocked={!matches}
                />
              </Col>
            </Row>
          </AntdLayout.Header>
        <Container>
        <div style={{maxWidth:'860px', margin:'5rem auto'}}>
            <h1 className={searchStyle.title}>{intl.formatMessage({ id: "search-from" })}</h1>
            <div className={searchStyle.container}>
                <input onChange={handleInputChange} value={searchTerm} placeholder={intl.formatMessage({ id: "enter-word" })} type="search" className={searchStyle.inputField}  />
            </div>
            {
                showResults&&(resultByLanguage.length == 0? <>
                <div className={searchStyle.result}>
                {intl.formatMessage({ id: "no-match" })}
                </div>
                </>:(
                <>
                <div className={searchStyle.result}>
                {intl.formatMessage({ id: "found" })} {resultByLanguage.length} {intl.formatMessage({ id: "match-query1" })} "{searchTerm}"{intl.formatMessage({ id: "match-query2" })}
                </div>
                <ol>
                    
                {resultByLanguage.map((result,id) => {
                    return(
                    <Link key={id} to={result.frontmatter.slug}>
                        <li className={searchStyle.resultLink}>
                            {result.frontmatter.title}
                        </li>
                    </Link>
                    )
                })} 
                </ol>
                </>
                )
                )
            } 

        </div>
      </Container>

      </AntdLayout>
          </>
        )}
      </MediaQuery>
    </>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
        nodes {
          id
          frontmatter {
            lang
            slug
            title
          }
          rawMarkdownBody
        }
      }
  }
`;


export default Search