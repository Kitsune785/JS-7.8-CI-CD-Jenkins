# JS-7.8-CI-CD-Jenkins



// "cy:parallelV1": "npm run cy:spec1 -- --browser chrome --group Spec1 --ci-build-id 1 & npm run cy:spec2 -- -- browser chrome --group Spec2 --ci-build-id 1",
// "cy:parallelV2": "npm run cy:spec1 -- --browser firefox --group Spec1 --ci-build-id 1 & npm run cy:spec2 -- -- browser chrome --group Spec2 --ci-build-id 1",
// "cy:parallelV3": "npm run cy:spec1 -- --browser chrome --group Spec1 --ci-build-id 1 & npm run cy:spec2 -- -- browser firefox --group Spec2 --ci-build-id 1",
// "cy:parallelV4": "npm run cy:spec1 -- --browser firefox --group Spec1 --ci-build-id 1 & npm run cy:spec2 -- -- browser firefox --group Spec2 --ci-build-id 1",
// "cy:parallelV5": "npm run cy:spec1 -- --browser electron --group Spec1 --ci-build-id 1 & npm run cy:spec2 -- -- browser electron --group Spec2 --ci-build-id 1",
// "cy:parallelV6": "npm run cy:spec1 -- --browser chrome --group Spec1 --ci-build-id 1 & npm run cy:spec2 -- -- browser electron --group Spec2 --ci-build-id 1",
// "cy:parallelV7": "npm run cy:spec1 -- --browser electron --group Spec1 --ci-build-id 1 & npm run cy:spec2 -- -- browser chrome --group Spec2 --ci-build-id 1",
// "cy:parallelV8": "npm run cy:spec1 -- --browser electron --group Spec1 --ci-build-id 1 & npm run cy:spec2 -- -- browser firefox --group Spec2 --ci-build-id 1",
// "cy:parallelV9": "npm run cy:spec1 -- --browser firefox --group Spec1 --ci-build-id 17 & npm run cy:spec2 -- -- browser electron --group Spec2 --ci-build-id 17",
// "cy:spec3": "cypress run --spec 'cypress/integration/booking/*' --record --key 762cb522-dbae-4522-ad73-1fa94bf54b8c",
// "cy:spec4": "cypress run --spec 'cypress/integration/newFilm/*' --record --key 762cb522-dbae-4522-ad73-1fa94bf54b8c",
// "cy:paralleFolders": "npm run cy:spec3 -- --browser chrome --group Spec3 --ci-build-id 1 & npm run cy:spec4 -- --browser chrome --group Spec4 --ci-build-id 1"