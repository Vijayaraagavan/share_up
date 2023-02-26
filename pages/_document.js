import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="icon" href="images/logo.jpg" type='image/icon'/>
                <meta name="description"
                    content="A web app to maintain accounts between group of people" />
                <meta http-equiv="Content-Type"
                    content="text/html;charset=UTF-8" />
                <meta name="author"
                    content="Vijayaraagavan" />
                <meta name="keywords"
                    content="shareUp, settleUp, settle_up, transaction" />
                <link rel="shortcut icon"
                    href="logo.jpg"
                    type="image/x-icon" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}