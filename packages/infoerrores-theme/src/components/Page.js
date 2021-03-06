import React from "react"
import { connect, styled, Head } from "frontity"

function Page({ state, libraries }) {
    const data = state.source.get(state.router.link)
    const page = state.source[data.type][data.id]
    const Html2React = libraries.html2react.Component

    return (
        <>
            <Head>
                <title>{page.title.rendered}</title>
                <meta name="description" content={page.excerpt.rendered} />
            </Head>
            <PageWrapper>
                <PageInfo>
                    <h1>{page.title.rendered}</h1>
                    <Html2React html={page.content.rendered} />
                </PageInfo>
            </PageWrapper>
        </>
    )
}

export default connect(Page);

const PageWrapper = styled.div`
    max-width: 670px;
    width: 670;
    margin: 24px auto;

    @media (max-width: 480px) {
        max-width: 350px;
        width: 350px;
        padding: 8px;
    }
`

const PageInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    & > * {
        color: #1c1c1c;
    }
    & > h1 {
        font-size: 46px;
        margin-top 8px;
        margin-bottom: 24px;
        text-shadow: 2px 2px 1px rgba(0,0,0,0.25);
    }

    & > h2 {
        font-size: 26px;
        margin: 8px 0;
    }
    & > p {
    margin: 16px 0;
    line-height: 2;
    font-size: 19px;
    }
    & > .has-background {
        padding: 8px 24px;
        box-shadow: 5px 3px 10px black;
        background-color: #a18594;
        border-radius: 8px;
    }
    & > ul > li {
        font-size: 19px;
        color: #1c1c1c;
        font-weight: bold;
        line-height: 1.5;
    }
    & > ul > li::marker {
        font-size: 28px;
        color: #54366d;
    }
    & > img, figure, .wp-block-image {
        max-width: 750px;
        text-align: center;
    }
    & > .wp-block-image figure img {
        max-width: 750px;
        text-align: center;
    }
    & > figure img {
        max-width: 750px;
        text-align: center;
    }

    @media (max-width: 480px) {
        h1 {
          font-size: 32px;
        }
        img, figure, .wp-block-image {
          max-width: 320px;
          max-height: 320px;
          text-align: center;
        }
        .wp-block-image figure img {
          max-width: 320px;
          max-height: 320px;
          text-align: center;
        }
        figure img {
          max-width: 320px;
          max-height: 320px;
          text-align: center;
        }
`
